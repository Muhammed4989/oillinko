/* eslint-disable @typescript-eslint/no-require-imports -- Standalone verification with existing TypeScript dependency. */
const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript');
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {blogPosts,postUrl,postsInCategory,legacyBlogRedirects}=require('../src/lib/blog.ts');
const {blogCategories,categoryUrl,categoryAncestors,getBlogCategory}=require('../src/lib/blog-taxonomy.ts');
const {categoryGuide,guideLink,guideWordCount}=require('../src/lib/blog-guides.ts');
const count=s=>(s.match(/\b[\w]+(?:['’-][\w]+)*\b/g)||[]).length;
const plain=s=>s.replace(/<[^>]*>/g,' ').replace(/&[^;]+;/g,' ');
const paragraphs=new Set(),counts=[];
const urls=['/blog',...blogCategories.map(categoryUrl),...blogPosts.map(postUrl)];
assert.equal(new Set(urls).size,urls.length);
for(const c of blogCategories){if(c.parent)assert(getBlogCategory(c.parent)&&!getBlogCategory(c.parent).parent);const sections=categoryGuide(c.slug);const words=guideWordCount(sections);assert(words>=700,c.slug+': '+words);counts.push({category:c.slug,words,articles:postsInCategory(c.slug).length});for(const p of sections.flatMap(s=>s.paragraphs)){assert(!paragraphs.has(p),'Repeated paragraph in '+c.slug);paragraphs.add(p);for(const [,href]of p.matchAll(/\[[^\]]+\]\(([^)]+)\)/g))assert(guideLink(href));}}
for(const p of blogPosts){assert.equal(getBlogCategory(p.category)?.parent,p.mainCategory);assert(fs.existsSync(`src/content/blog/${p.slug}.tsx`));for(const related of p.related)assert(blogPosts.some(q=>q.slug===related),'Nonexistent related article: '+related);assert(p.dateModified>=p.date);}
console.log(JSON.stringify(counts,null,2));
async function main(){const base=process.argv[2];if(!base){console.log('PASS source data, category words, unique paragraphs, article membership and links');return;}
 const internal=new Set(),external=new Set(),titles=new Set(),descriptions=new Set();const cache=new Map();
 const get=async url=>{if(!cache.has(url))cache.set(url,fetch(base+url,{redirect:'manual',signal:AbortSignal.timeout(30000)}).then(async response=>({status:response.status,headers:response.headers,html:await response.text()})));return cache.get(url);};
 for(const url of urls){const {status,html}=await get(url);assert.equal(status,200,url);assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,url+' H1');assert(html.includes(`rel="canonical" href="https://oillinko.com${url}"`),url+' canonical');
 const title=/<title>([\s\S]*?)<\/title>/.exec(html)?.[1],description=/<meta name="description" content="([^"]+)"/.exec(html)?.[1];assert(title&&!titles.has(title),url+' title');titles.add(title);assert(description&&!descriptions.has(description),url+' description');descriptions.add(description);assert(html.includes('property="og:title"')&&html.includes('name="twitter:title"'),url+' social');
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const c=blogCategories.find(c=>categoryUrl(c)===url),p=blogPosts.find(p=>postUrl(p)===url);
 if(c){const details=html.match(/<details[^>]+data-category-guide="[^"]+"[^>]*>([\s\S]*?)<\/details>/)?.[1];assert(details,url+' server rendered guide');const ps=[...details.matchAll(/<p[^>]+data-guide-paragraph=""[^>]*>([\s\S]*?)<\/p>/g)];assert(count(plain(ps.map(m=>m[1]).join(' ')))>=700,url+' HTML paragraph words');assert.equal(ps.length,categoryGuide(c.slug).flatMap(s=>s.paragraphs).length);assert(details.includes('<a '),url+' HTML links');assert.equal((html.match(/data-post-card=/g)||[]).length,postsInCategory(c.slug).length);assert(html.indexOf('data-category-guide=')<html.indexOf('id="category-articles"'));if(!postsInCategory(c.slug).length)assert(html.includes('Additional articles will be published'));
 }
 if(c||p){const cat=c||getBlogCategory(p.category);const expected=[{name:'Blog',href:'/blog'},...categoryAncestors(cat).map(a=>({name:a.name,href:categoryUrl(a)})),...(p?[{name:p.title,href:postUrl(p)}]:[])];const schema=schemas.find(s=>s['@type']==='BreadcrumbList');assert(schema,url+' breadcrumb');assert.deepEqual(schema.itemListElement.map(x=>x.item),expected.map(x=>'https://oillinko.com'+x.href));const nav=html.match(/<nav aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)?.[1];for(const crumb of expected.slice(0,-1))assert(nav.includes(`href="${crumb.href}"`),url+' linked breadcrumb');}
 if(p){const schema=schemas.find(s=>s['@type']==='BlogPosting');assert(schema,url+' article schema');assert.equal(schema.mainEntityOfPage,'https://oillinko.com'+url);assert.equal(schema.datePublished,p.date);assert.equal(schema.dateModified,p.dateModified);assert(html.includes('Related reading'));assert(html.includes('id="post-content"'));}
 for(const [,href]of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)){const h=href.replaceAll('&amp;','&');if(h.startsWith('/')&&!h.startsWith('//'))internal.add(h);if(h.startsWith('http')&&!h.startsWith('https://oillinko.com'))external.add(h);}
 }
 const broken=[];for(const href of internal){const u=new URL(href,base);const r=await get(u.pathname+u.search);if(r.status!==200)broken.push({href,status:r.status});if(u.hash&&r.status===200){assert(r.html.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`),'Missing fragment: '+href);}}
 for(const redirect of legacyBlogRedirects()){const r=await get(redirect.source);assert([301,308].includes(r.status),redirect.source+' permanent');assert.equal(r.headers.get('location'),'https://oillinko.com'+redirect.destination);assert.equal((await get(redirect.destination)).status,200);}
 const sitemap=(await get('/sitemap.xml')).html;for(const url of urls)assert(sitemap.includes('https://oillinko.com'+url+'</loc>'),url+' sitemap');for(const p of blogPosts)assert(!sitemap.includes('https://oillinko.com/blog/'+p.slug+'</loc>'));
 for(const invalid of ['/blog/category/no-such-category','/blog/category/oil-and-gas-services/pumps-rotating-equipment/'+blogPosts[0].slug])assert.equal((await get(invalid)).status,404);
 const search=(await get('/blog?q=API+610&category=pumps-rotating-equipment')).html;assert(search.includes('noindex, follow'));assert((search.match(/data-post-card=/g)||[]).length>0);const empty=(await get('/blog?q=zzzzzznonexistent')).html;assert(empty.includes('No published articles match'));
 fs.writeFileSync('../blog-external-links.json',JSON.stringify([...external],null,2));assert.deepEqual(broken,[],'Broken or redirected internal links');
 console.log(`PASS: ${blogCategories.filter(c=>!c.parent).length} main / ${blogCategories.filter(c=>c.parent).length} subcategories, ${blogPosts.length} articles, ${urls.length} pages, ${internal.size} direct internal URLs, ${legacyBlogRedirects().length} permanent redirects; HTML content, breadcrumbs, schema, metadata, sitemap and search.`);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
