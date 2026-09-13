/* eslint-disable @typescript-eslint/no-require-imports -- Standalone verification uses the existing TypeScript dependency. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
require.extensions[".ts"] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, file);
const { companies, companyDirectoryPath, companySpecialties } = require("../src/lib/companies.ts");
const logos = require("../src/lib/company-logos.json");

async function main() {
  const base = process.argv[2];
  assert(base, "Provide the local or production origin");
  const get = async path => {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(60000) });
    assert.equal(response.status, 200, path);
    return response.text();
  };
  const cards = html => [...html.matchAll(/data-company-id="([^"]+)"/g)].map(match => match[1]);
  const clean = await get(companyDirectoryPath);
  assert.equal(new Set(companies.map(company => company.id)).size, companies.length);
  assert.equal(cards(clean).length, companies.length, "Every company must be rendered in HTML");
  assert.equal((clean.match(/<h1[\s>]/g) || []).length, 1);
  assert(clean.includes('rel="canonical" href="https://oillinko.com/oil-and-gas/companies"'));
  assert(/name="robots" content="index, follow"/.test(clean));
  assert(clean.includes('aria-label="Company directory filters"'));
  assert(clean.includes('method="get"'), "Filters need a native GET fallback");
  assert(clean.includes('action="/oil-and-gas/companies"'));
  const guide = clean.split('data-company-guide=""')[1]?.split("</section>")[0] ?? "";
  const words = guide.replace(/<[^>]*>/g, " ").replace(/&[^;]+;/g, " ").trim().split(/\s+/).length;
  assert(words >= 700, `Visible guide must precede form and contain 700 words: ${words}`);
  assert(clean.indexOf('data-company-guide=""') < clean.indexOf('id="company-enquiry"'));
  assert(clean.includes("An independent industry reference"));
  assert(clean.includes("Your enquiry goes to the Oillinko team"));
  const schemas = [...clean.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const list = schemas.flatMap(schema => schema["@graph"] ?? []).find(schema => schema["@type"] === "ItemList");
  assert.equal(list.numberOfItems, companies.length);
  assert.equal(list.itemListElement.length, companies.length);

  const filtered = await get(companyDirectoryPath + "?role=manufacturer&specialty=pumps");
  assert(cards(filtered).includes("flowserve"));
  assert(cards(filtered).includes("sulzer"));
  assert(!cards(filtered).includes("shell"));
  assert(/name="robots" content="noindex, follow"/.test(filtered));
  assert(/name="googlebot" content="noindex, follow"/.test(filtered));
  assert(filtered.includes('rel="canonical" href="https://oillinko.com/oil-and-gas/companies"'));
  assert(filtered.includes('value="pumps" selected=""'));
  const targeted = await get(companyDirectoryPath + "?search=Yokogawa&role=manufacturer&specialty=instrumentation");
  assert.deepEqual(cards(targeted), ["yokogawa"]);
  const unknown = await get(companyDirectoryPath + "?specialty=not-a-specialty");
  assert.equal(cards(unknown).length, 0);
  assert(unknown.includes("No companies match these selections"));
  const selected = await get(companyDirectoryPath + "?company=sulzer");
  assert(selected.includes('value="Sulzer — model / project reference"'));
  assert(selected.includes('value="/oil-and-gas/companies?company=sulzer"'));
  assert(selected.includes('name="required_manufacturing_origin"'));
  assert(!selected.includes('name="required_manufacturing_origin" value="Switzerland"'));
  const sitemap = await get("/sitemap.xml");
  assert(sitemap.includes("https://oillinko.com/oil-and-gas/companies</loc>"));
  for (const href of new Set(Object.values(companySpecialties).map(item => item.href))) await get(href);
  for (const [id, logo] of Object.entries(logos)) {
    assert(companies.some(company => company.id === id));
    assert(clean.includes(`alt="${companies.find(company => company.id === id).name} logo"`));
    const response = await fetch(base + logo.src, { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, logo.src);
    assert(response.headers.get("content-type").includes("image/png"), logo.src);
    assert((await response.arrayBuffer()).byteLength > 1000, logo.src);
  }
  const optimizedLogo = await fetch(base + "/_next/image?url=%2Fimages%2Fcompanies%2Fflowserve.png&w=384&q=75");
  assert.equal(optimizedLogo.status, 200, "Image optimisation must work for the logo cards");
  console.log(`PASS: ${companies.length} companies; ${Object.keys(logos).length} logos; ${words} guide words; HTML filters, canonical/indexing, linked categories, structured data and owner-reviewed enquiry context.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
