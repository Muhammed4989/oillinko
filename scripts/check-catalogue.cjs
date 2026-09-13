/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS check with a TypeScript require hook. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Load the data modules without building the application or adding a test runtime.
require.extensions[".ts"] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, file);
const { catalogue, sectors, applications, filterCatalogue, requestUrl, typeUrl, readCatalogueFilters, catalogueSearchUrl } = require("../src/lib/catalogue.ts");
const { productSections, contentWordCount, topicOverviews } = require("../src/lib/catalogue-content.ts");
const found = (query, sector = "", kind = "", application = "") => filterCatalogue(query, sector, kind, application).flatMap(g => g.types);

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

const paths = new Set();
const names = new Set();
const detailed = [];
const wordCounts = [];
for (const group of catalogue) {
  assert(!paths.has(group.slug), `Duplicate group URL: ${group.slug}`);
  paths.add(group.slug);
  const ids = new Set();
  for (const item of group.types) {
    assert(!ids.has(item.id), `Duplicate anchor: ${group.slug}/${item.id}`); ids.add(item.id);
    assert(!names.has(item.name), `Duplicate item title: ${item.name}`); names.add(item.name);
    assert(item.requirements.length >= 4 && item.requirements.every(Boolean), item.id);
    assert(item.sectors.every(id => sectors.some(s => s.id === id)), item.id);
    assert(item.applications.every(a => applications.includes(a)), item.id);
    const rfq = new URL(requestUrl(group.slug, item.id, "New Zealand"), "https://oillinko.com");
    assert.equal(rfq.searchParams.get("category"), group.slug);
    assert.equal(rfq.searchParams.get("item"), item.id);
    assert.equal(rfq.searchParams.get("origin"), "New Zealand");
    if (item.detail) {
      detailed.push(`${group.slug}/${item.id}`);
      const sections = productSections(group,item);
      const words = contentWordCount(sections);
      wordCounts.push(words);
      assert(words>=700, `Fewer than 700 body words: ${item.id} (${words})`);
      const paragraphs=sections.flatMap(s=>s.paragraphs);
      assert.equal(new Set(paragraphs).size,paragraphs.length,`Repeated paragraph within ${item.id}`);
      assert.equal(typeUrl(group, item), `/equipment/${group.slug}/${item.id}`);
    } else assert.equal(typeUrl(group, item), `/equipment/${group.slug}#${item.id}`);
  }
}
assert.equal(detailed.length,names.size,"Every type must have a product page");
assert.equal(Object.keys(topicOverviews).length,detailed.length,"Missing or orphaned product overview");
const filters=readCatalogueFilters({search:" MWD ",category:"drilling-well-construction",sector:"drilling",kind:"Equipment",application:"Maintenance & spares",origin:"New Zealand"});
const searchUrl=new URL(catalogueSearchUrl(filters),"https://oillinko.com");
assert.equal(searchUrl.hash,"");
assert.equal(searchUrl.searchParams.get("search"),"MWD");
assert.deepEqual(readCatalogueFilters(Object.fromEntries(searchUrl.searchParams)),filters);
assert.equal(catalogueSearchUrl(readCatalogueFilters({})),"/equipment");
assert.equal(readCatalogueFilters({sector:"unknown",search:["a","b"],kind:"invalid"}).search,"");
assert(filterCatalogue("","","","","lng-cryogenic-equipment").every(g=>g.slug==="lng-cryogenic-equipment"));

if (process.argv.includes("--build")) {
  const base = path.join(__dirname, "../.next/server/app");
  const sitemap = fs.readFileSync(path.join(base, "sitemap.xml.body"), "utf8");
  for (const relative of [...catalogue.map(g => `equipment/${g.slug}`), ...detailed.map(p => `equipment/${p}`), ...sectors.map(s => `industries/${s.id}`)]) {
    const html = fs.readFileSync(path.join(base, `${relative}.html`), "utf8");
    assert(html.includes(`rel="canonical" href="https://oillinko.com/${relative}"`), `Canonical: ${relative}`);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `H1: ${relative}`);
    assert(sitemap.includes(`<loc>https://oillinko.com/${relative}</loc>`), `Sitemap: ${relative}`);
  }
  for (const group of catalogue) {
    const html = fs.readFileSync(path.join(base, `equipment/${group.slug}.html`), "utf8");
    for (const item of group.types) {
      assert(html.includes(`id="${item.id}"`), `Legacy anchor: ${item.id}`);
      if (item.detail) assert(html.includes(`href="${typeUrl(group,item)}"`), `Unlinked brief: ${item.id}`);
    }
  }
  for (const relative of detailed) {
    const html=fs.readFileSync(path.join(base,`equipment/${relative}.html`),"utf8");
    const body=html.match(/<article[^>]*data-product-content[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(body,`Missing product content region: ${relative}`);
    const words=body.replace(/<[^>]+>/g," ").replace(/&[a-z#0-9]+;/gi," ").split(/\s+/).filter(Boolean).length;
    assert(words>=700,`Rendered body too short: ${relative}: ${words}`);
    assert(html.indexOf('<form')>html.indexOf('</article>'),`Form precedes product content: ${relative}`);
    assert(html.includes('name="equipment_or_service"'),`Missing product enquiry form: ${relative}`);
    assert(html.includes('name="required_manufacturing_origin"')&&html.includes('name="delivery_country"'),`Missing separate origin/location fields: ${relative}`);
  }
}
console.log(JSON.stringify({ categories: catalogue.length, types: names.size, sectors: sectors.length, productPages: detailed.length, minimumBodyWords: Math.min(...wordCounts), searchCases: searches.length, checks: "passed" }, null, 2));

// Optional deployment check: GET only; never submits an enquiry.
async function checkHttp(base) {
  const sitemapResponse = await fetch(new URL('/sitemap.xml', base), { signal: AbortSignal.timeout(30000) });
  assert.equal(sitemapResponse.status, 200, 'Sitemap HTTP status');
  const sitemap = await sitemapResponse.text();
  const routes = [...catalogue.map(g=>`/equipment/${g.slug}`), ...detailed.map(p=>`/equipment/${p}`), ...sectors.map(s=>`/industries/${s.id}`)];
  let cursor = 0;
  await Promise.all(Array.from({length:4}, async () => {
    while (cursor < routes.length) {
      const route = routes[cursor++];
      const response = await fetch(new URL(route,base), { redirect:'manual', signal:AbortSignal.timeout(30000) });
      assert.equal(response.status,200,`HTTP status: ${route}`);
      const html=await response.text();
      assert(html.includes(`rel="canonical" href="https://oillinko.com${route}"`),`HTTP canonical: ${route}`);
      assert(sitemap.includes(`<loc>https://oillinko.com${route}</loc>`),`HTTP sitemap: ${route}`);
      assert.equal((html.match(/<h1(?:\s|>)/g)??[]).length,1,`HTTP H1: ${route}`);
      if (route.split('/').length===4) {
        const body=html.match(/<article[^>]*data-product-content[^>]*>([\s\S]*?)<\/article>/)?.[1];
        assert(body,`HTTP product content: ${route}`);
        assert(body.replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ').split(/\s+/).filter(Boolean).length>=700,`HTTP word count: ${route}`);
        assert(html.indexOf('<form')>html.indexOf('</article>'),`HTTP content before form: ${route}`);
        assert(html.includes('name="equipment_or_service"'),`HTTP RFQ form: ${route}`);
      }
    }
  }));
  const response=await fetch(new URL('/equipment?search=tank+cleaning&kind=Service',base), {signal:AbortSignal.timeout(30000)});
  assert.equal(response.status,200,'Filtered catalogue status');
  const html=await response.text();
  assert(html.includes('content="noindex, follow"'),'Filtered catalogue must not be indexed');
  assert(html.includes('rel="canonical" href="https://oillinko.com/equipment"'),'Filtered catalogue canonical');
  assert(html.includes('/equipment/shutdown-tank-maintenance-services/tank-cleaning-and-sludge-removal'),'Server rendered filtered result');
  assert(!html.includes('href="/equipment/shutdown-tank-maintenance-services/heat-exchanger-cleaning'),'Unrelated filtered result');
  const missing=await fetch(new URL('/equipment/lng-cryogenic-equipment/not-a-real-product',base),{signal:AbortSignal.timeout(30000)});
  assert.equal(missing.status,404,'Unknown product must return 404');
  console.log(JSON.stringify({base,checkedCatalogueRoutes:routes.length,filteredServerRendering:'passed',unknownProduct404:'passed',httpChecks:'passed'},null,2));
}
const urlIndex=process.argv.indexOf('--url');
if(urlIndex!==-1) checkHttp(process.argv[urlIndex+1]).catch(error=>{console.error(error);process.exitCode=1;});
