/* eslint-disable @typescript-eslint/no-require-imports -- Optional browser QA uses an external Playwright installation, not a site dependency. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.argv[3]||'playwright');
async function main(){const base=process.argv[2]||'http://localhost:3000';const browser=await chromium.launch({channel:'msedge',headless:true});
 const output=path.resolve('..','blog-qa');fs.mkdirSync(output,{recursive:true});
 try{
 for(const viewport of [{width:1365,height:900},{width:390,height:844},{width:320,height:740}]){
 const context=await browser.newContext({viewport,javaScriptEnabled:false,isMobile:viewport.width<500,hasTouch:viewport.width<500});const page=await context.newPage();
 const url='/blog/category/oil-and-gas-equipment/pumps-rotating-equipment';await page.goto(base+url);const details=page.locator('details[data-category-guide]'),summary=details.locator('summary');
 assert.equal(await details.getAttribute('open'),null);assert((await details.locator('p[data-guide-paragraph]').count())>=8);assert((await details.locator('a').count())>3);
 await summary.focus();await page.keyboard.press('Enter');assert.notEqual(await details.getAttribute('open'),null);assert(await summary.innerText().then(t=>t.includes('Read less')));await page.keyboard.press('Space');assert.equal(await details.getAttribute('open'),null);
 if(viewport.width<500)await summary.tap();else await summary.click();assert.notEqual(await details.getAttribute('open'),null);
 const metrics=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,introHeight:document.querySelector('[data-category-intro]').getBoundingClientRect().height,lineHeight:parseFloat(getComputedStyle(document.querySelector('[data-category-intro]')).lineHeight)}));assert(metrics.scroll<=metrics.width,JSON.stringify(metrics));assert(metrics.introHeight<=metrics.lineHeight*2+1);
 await page.screenshot({path:path.join(output,`category-open-${viewport.width}.png`),fullPage:false});await summary.click();await page.screenshot({path:path.join(output,`category-closed-${viewport.width}.png`),fullPage:false});
 await page.locator('[data-post-card]').first().click();const breadcrumbs=page.locator('nav[aria-label="Breadcrumb"]');assert.equal(await breadcrumbs.locator('a').count(),3);assert.equal(await page.locator('h1').count(),1);assert(await page.locator('section').filter({has:page.getByRole('heading',{name:'Related reading',exact:true})}).count());if(viewport.width>1000)assert((await page.locator('#post-content').boundingBox()).width>600,'Article must retain its reading width without JS');await page.screenshot({path:path.join(output,`article-${viewport.width}.png`),fullPage:false});
 await breadcrumbs.getByRole('link',{name:'Pumps & Rotating Equipment',exact:true}).click();assert.equal(new URL(page.url()).pathname,url);
 await page.goto(base+'/blog');await page.getByRole('searchbox').fill('API 610');await page.getByLabel('Topic',{exact:true}).selectOption('pumps-rotating-equipment');await page.getByRole('button',{name:'Search',exact:true}).click();assert.equal(new URL(page.url()).searchParams.get('category'),'pumps-rotating-equipment');assert.equal(new URL(page.url()).searchParams.get('q'),'API 610');assert((await page.locator('[data-post-card]').count())>0);await page.reload();assert.equal(await page.getByRole('searchbox').inputValue(),'API 610');
 await context.close();console.log(`PASS ${viewport.width}px: no-JavaScript HTML, Enter/Space, ${viewport.width<500?'touch':'mouse'}, two-line introduction, layout, article breadcrumbs, GET search and reload`);
 }
 const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/blog');await page.getByRole('link',{name:/Oil & Gas Equipment.*Explore guide/}).click();await page.locator('details[data-category-guide] summary').click();assert.notEqual(await page.locator('details[data-category-guide]').getAttribute('open'),null);assert.deepEqual(errors,[]);await context.close();console.log('PASS hydrated navigation and disclosure; no browser runtime errors');
 }finally{await browser.close();}}
main().catch(e=>{console.error(e);process.exitCode=1;});
