/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS check with a TypeScript require hook. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Load the data modules without building the application or adding a test runtime.
require.extensions[".ts"] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, file);
const { catalogue, sectors, applications, filterCatalogue, requestUrl, typeUrl, readCatalogueFilters, catalogueSearchUrl } = require("../src/lib/catalogue.ts");
const { productSections, contentWordCount, topicOverviews } = require("../src/lib/catalogue-content.ts");
const { companies } = require("../src/lib/companies.ts");
const { companyProfiles, companyProfilePath } = require("../src/lib/company-profiles.ts");
const found = (query, sector = "", kind = "", application = "") => filterCatalogue(query, sector, kind, application).flatMap(g => g.types);

// These short/common company names can also be ordinary technical words. The
// remaining directory names are distinctive enough to protect automatically.
// Website hosts are always protected, including for the exceptions below.
const ambiguousCompanyNames = new Set(["bp", "Shell", "Wood"]);
const protectedCompanyNames = companies.map(company => company.name).filter(name => !ambiguousCompanyNames.has(name));
const protectedCompanyHosts = companies.map(company => new URL(company.website).hostname.replace(/^www\./, "").toLowerCase());
function assertSupplierNeutral(value, context) {
 const text = String(value);
 const normalized = text.toLocaleLowerCase("en");
 for (const name of protectedCompanyNames) {
  const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])${name.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}([^\\p{L}\\p{N}]|$)`, "iu");
  assert(!pattern.test(text), `Named company ${name} leaked into ${context}`);
 }
 for (const host of protectedCompanyHosts) assert(!normalized.includes(host), `Company website ${host} leaked into ${context}`);
}

const searches = [
  ["MWD", "mwd-and-lwd-tools"], ["LWD", "mwd-and-lwd-tools"],
  ["liner hanger", "liner-hangers-and-running-tools"], ["sand control", "sand-control-screens-and-gravel-pack-tools"],
  ["perforating", "perforating-systems-and-accessories"], ["distillation", "distillation-columns-and-internals"],
  ["cryogenic", "cryogenic-storage-tanks"], ["vaporizer", "lng-vaporizers-and-regasification-packages"],
  ["heat-tracing", "heat-tracing-and-industrial-heaters"], ["HPU", "hydraulic-power-units"],
  ["tank cleaning", "tank-cleaning-and-sludge-removal"], ["hydrotesting", "hydrostatic-testing-services"],
  ["PAUT", "advanced-ndt-and-corrosion-mapping"], ["sockolet", "forged-and-branch-fittings"],
  ["PT100", "temperature-sensors-and-thermowells"], ["CCUS", "carbon-capture-process-packages"],
  ["P&A", "plug-and-abandonment-service-coordination"], ["E&I", "electrical-and-instrument-installation"],
  ["PVT", "core-analysis-and-pvt-equipment"], ["LNG", "lng-vaporizers-and-regasification-packages"],
];
for (const [query, expected] of searches) assert(found(query).some(t => t.id === expected), `Search ${query} must find ${expected}`);
assert.equal(found("not-an-oillinko-requirement-12345").length, 0);
assert.equal(found("tank cleaning","","Service").length,1,"A tank family name must not make exchanger cleaning match tank cleaning");
assert(found("P&A").length < 10, "P&A must not degrade to single-letter matching");
assert(found("", "", "Software").some(t => t.id === "industrial-software-licensing-and-support"));
assert(!found("", "refining").some(t => t.id === "mwd-and-lwd-tools"));
assert(!found("", "refining").some(t => t.id === "plug-and-abandonment-service-coordination"));
assert(found("", "decommissioning", "Service", "Decommissioning").some(t => t.id === "plug-and-abandonment-service-coordination"));

for (const kind of ["Equipment", "Service", "Software"]) {
  assert(found("", "", kind).every(t => t.kind === kind), `Incorrect type in ${kind} results`);
}
for (const sector of sectors) assert(found("", sector.id).every(t => t.sectors.includes(sector.id)));
for (const application of applications) assert(found("", "", "", application).every(t => t.applications.includes(application)));


const {catalogueRoot,catalogueRoutes,sectionUrl,routedCatalogueFilters,legacyCatalogueRedirects}=require('../src/lib/catalogue.ts');
const {publicProductPaths}=require('../src/lib/catalogue-public-paths.ts');
const routes=catalogueRoutes();
const pathSet=new Set(routes.map(r=>r.url));
assert.equal(pathSet.size,routes.length,'Public routes must not collide');
const products=routes.filter(r=>r.item);
const categoryRoutes=routes.filter(r=>r.group&&!r.item);
assert(products.length>=219,'A migration must preserve every published topic');
assert.equal(Object.keys(publicProductPaths).length,products.length);
const ids=new Set();const wordCounts=[];
for(const group of catalogue)for(const item of group.types){
 assert(!ids.has(item.id),item.id);ids.add(item.id);
 assert(item.requirements.length>=4&&item.requirements.every(Boolean),item.id);
 assert(item.sectors.every(id=>sectors.some(s=>s.id===id)),item.id);
 assert(item.applications.every(a=>applications.includes(a)),item.id);
 const sections=productSections(group,item);const words=contentWordCount(sections);wordCounts.push(words);
 assertSupplierNeutral(JSON.stringify({group:{name:group.name,summary:group.summary},item,sections}),`catalogue topic ${item.id}`);
 assert(words>=700,'Content floor: '+item.id);
 assert.equal(new Set(sections.flatMap(s=>s.paragraphs)).size,sections.flatMap(s=>s.paragraphs).length,'Repeated paragraph: '+item.id);
 const url=typeUrl(group,item);
 assert(url.startsWith(sectionUrl(item.kind)+'/'),'Incorrect type namespace: '+item.id);
 assert.equal(typeUrl({...group,slug:'future-classification',name:'New display name'},{...item,name:'New product name'}),url,'Titles or reclassification must not change public product URLs');
 const rfq=new URL(requestUrl(group.slug,item.id,'New Zealand'),'https://oillinko.com');
 assert.equal(rfq.searchParams.get('category'),group.slug);assert.equal(rfq.searchParams.get('item'),item.id);assert.equal(rfq.searchParams.get('origin'),'New Zealand');
}
assert.equal(Object.keys(topicOverviews).length,products.length);
const allPaths=new Set([catalogueRoot,...pathSet,...sectors.map(s=>'/industries/'+s.id)]);
const legacy=legacyCatalogueRedirects();
assert(legacy.length>=256,'All previously published category and topic URLs must remain mapped');
for(const r of legacy){assert(allPaths.has(r.destination),'Redirect destination: '+r.source);assert(!legacy.some(l=>l.source===r.destination),'Redirect chain: '+r.source);}
for(const route of categoryRoutes){assert(route.group.types.every(t=>t.kind===route.kind));assert(route.group.types.every(t=>pathSet.has(typeUrl(route.group,t))));}
assert.equal(catalogueSearchUrl({category:'pumps-rotating-equipment'}),'/oil-and-gas/equipment/pumps');
assert.equal(catalogueSearchUrl({kind:'Service'}),'/oil-and-gas/services');
assert.equal(catalogueSearchUrl({kind:'Software'}),'/oil-and-gas/software');
assert.equal(catalogueSearchUrl({sector:'pipelines'}),'/industries/pipelines');
assert.equal(catalogueSearchUrl({category:'pumps-rotating-equipment',sector:'pipelines',origin:'Germany'}),'/oil-and-gas/equipment/pumps?sector=pipelines&origin=Germany');
assert.equal(catalogueSearchUrl({category:'pumps-rotating-equipment',kind:'Service'}),'/oil-and-gas/services?category=pumps-rotating-equipment');
const filters=readCatalogueFilters({search:' MWD ',category:'drilling-well-construction',sector:'drilling',kind:'Equipment',application:'Maintenance & spares',origin:'New Zealand'});
const search=new URL(catalogueSearchUrl(filters),'https://oillinko.com');
const route=routes.find(r=>r.url===search.pathname);
assert(route&&route.group,'Category search should use its landing page');
assert.deepEqual(routedCatalogueFilters(Object.fromEntries(search.searchParams),{category:route.group.slug,kind:route.kind}),filters);
assert.equal(catalogueSearchUrl({}),catalogueRoot);
assert.equal(readCatalogueFilters({sector:'unknown',search:['a','b'],kind:'invalid'}).search,'');

function checkHtml(html,url,item){
 assertSupplierNeutral(html,`rendered catalogue or industry page ${url}`);
 assert(html.includes('rel="canonical" href="https://oillinko.com'+url+'"'),'Canonical: '+url);
 assert.equal((html.match(/<h1(?:\s|>)/g)??[]).length,1,'H1: '+url);
 assert(!/<a[^>]+href="\/equipment(?:[/?#"])/.test(html),'Internal legacy link: '+url);
 if(item){
  const body=html.match(/<article[^>]*data-product-content[^>]*>([\s\S]*?)<\/article>/)?.[1];assert(body,'Product content: '+url);
  const words=body.replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ').split(/\s+/).filter(Boolean).length;
  assert(words>=700,'Rendered word count: '+url);
  assert(html.indexOf('<form')>html.indexOf('</article>'),'Content before form: '+url);
  for(const name of ['equipment_or_service','required_manufacturing_origin','delivery_country'])assert(html.includes('name="'+name+'"'),'RFQ field '+name+': '+url);
  assert(html.includes('name="equipment_or_service"')&&html.includes(item.name.replace(/&/g,'&amp;')),'Product context: '+url);
 }
}
if(process.argv.includes('--build')){
 const app=path.join(__dirname,'../.next/server/app');const sitemap=fs.readFileSync(path.join(app,'sitemap.xml.body'),'utf8');
 for(const profile of companyProfiles){const url=companyProfilePath(profile.companyId);assert(sitemap.includes('<loc>https://oillinko.com'+url+'</loc>'),'Company profile sitemap: '+url);const html=fs.readFileSync(path.join(app,url+'.html'),'utf8');assert.equal((html.match(/<h1(?:\s|>)/g)??[]).length,1,'Company profile H1: '+url);assert(html.includes('rel="canonical" href="https://oillinko.com'+url+'"'),'Company profile canonical: '+url);assert(html.includes('The file is retained for sourcing review and is not published on the website.'),'Company catalogue privacy note: '+url);}
 for(const url of allPaths)assert(sitemap.includes('<loc>https://oillinko.com'+url+'</loc>'),'Sitemap: '+url);
 assert(!sitemap.includes('<loc>https://oillinko.com/equipment'),'Legacy URLs in sitemap');
 for(const route of products)checkHtml(fs.readFileSync(path.join(app,route.url+'.html'),'utf8'),route.url,route.item);
 const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'../.next/routes-manifest.json'),'utf8'));
 for(const r of legacy)assert(manifest.redirects.some(m=>m.source===r.source&&m.destination==='https://oillinko.com'+r.destination&&m.statusCode===308),'Missing permanent redirect: '+r.source);
}
console.log(JSON.stringify({groups:catalogue.length,categoryPages:categoryRoutes.length,products:products.length,sectors:sectors.length,minimumBodyWords:Math.min(...wordCounts),publicCatalogueAndSectorRoutes:allPaths.size,legacyRedirects:legacy.length,checks:'passed'},null,2));

async function checkHttp(base){
 const get=route=>fetch(new URL(route,base),{redirect:'manual',signal:AbortSignal.timeout(30000)});
 const site=await get('/sitemap.xml');assert.equal(site.status,200);const sitemap=await site.text();
 const queue=[...allPaths];let cursor=0;
 await Promise.all(Array.from({length:4},async()=>{while(cursor<queue.length){const url=queue[cursor++];const response=await get(url);assert.equal(response.status,200,'HTTP '+url);const html=await response.text();checkHtml(html,url,products.find(r=>r.url===url)?.item);assert(sitemap.includes('<loc>https://oillinko.com'+url+'</loc>'),'Live sitemap: '+url);}}));
 const oldQueue=[...legacy];cursor=0;
 await Promise.all(Array.from({length:4},async()=>{while(cursor<oldQueue.length){const r=oldQueue[cursor++];const response=await get(r.source+'?origin=Germany');assert.equal(response.status,308,'Permanent legacy redirect: '+r.source);assert.equal(response.headers.get('location'),'https://oillinko.com'+r.destination+'?origin=Germany','Direct migration with origin: '+r.source);}}));
 for(const [query,target] of [['/equipment','/oil-and-gas/equipment'],['/equipment?sector=pipelines','/industries/pipelines'],['/equipment?category=pumps-rotating-equipment&origin=Germany','/oil-and-gas/equipment/pumps?origin=Germany']]){
  const r=await get(query);assert.equal(r.status,308,query);assert.equal(r.headers.get('location'),'https://oillinko.com'+target,query);
 }
 for(const [url,expectedCategory,expectedKind,expectedSector] of [
  ['/oil-and-gas/equipment/pumps','pumps-rotating-equipment','Equipment',''],
  ['/oil-and-gas/services','','Service',''],
  ['/industries/pipelines','','','pipelines'],
 ]){
  const r=await get(url);const html=await r.text();assert(!html.includes('content="noindex, follow"'),'Clean landing must be indexable: '+url);
  for(const [field,value]of [['category',expectedCategory],['kind',expectedKind],['sector',expectedSector]]){
   const select=html.match(new RegExp('<select[^>]+name="'+field+'"[^>]*>([\\s\\S]*?)</select>'))?.[1];
   assert(select&&new RegExp('<option[^>]*(?:value="'+value+'"[^>]*selected=""|selected=""[^>]*value="'+value+'")').test(select)||select?.includes('<option selected="">'+value+'</option>'),'Selected '+field+' on '+url);
  }
 }
 const filtered=await get('/oil-and-gas/services?search=tank+cleaning');assert.equal(filtered.status,200);const html=await filtered.text();
 assert(html.includes('content="noindex, follow"'));assert(html.includes('href="/oil-and-gas/services/tank-cleaning"'));assert(!html.includes('href="/oil-and-gas/services/heat-exchanger-cleaning'));
 assert.equal((await get('/oil-and-gas/equipment/pumps/not-a-real-product')).status,404);
 console.log(JSON.stringify({base,checkedPublicRoutes:allPaths.size,checkedPermanentRedirects:legacy.length+3,filterSelections:'passed',contentAndCanonicals:'passed',httpChecks:'passed'},null,2));
}
const urlIndex=process.argv.indexOf('--url');if(urlIndex!==-1)checkHttp(process.argv[urlIndex+1]).catch(e=>{console.error(e);process.exitCode=1;});
