/* eslint-disable @typescript-eslint/no-require-imports -- Standalone production HTML audit. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const buildRoot = path.resolve(".next/server/app");
assert(fs.existsSync(buildRoot), "Run the production build before auditing image descriptions.");
function filesIn(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(folder, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}
const decode = text => text.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
let imageCount = 0;
const pages = filesIn(buildRoot).filter(file => file.endsWith(".html"));
const sources = new Set();
const failures = [];
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    imageCount++;
    const attributes = Object.fromEntries([...match[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(attribute => [attribute[1], decode(attribute[2])]));
    const context = path.relative(buildRoot, file);
    if (!attributes.alt?.trim()) failures.push(`${context}: missing image alt (${attributes.src})`);
    if (!attributes.title?.trim()) failures.push(`${context}: missing image hover title (${attributes.src})`);
    if (attributes.title !== attributes.alt) failures.push(`${context}: hover title differs from alt (${attributes.src})`);
    const imageUrl = new URL(attributes.src, "https://oillinko.com");
    const source = imageUrl.pathname === "/_next/image" ? imageUrl.searchParams.get("url") : imageUrl.pathname;
    if (source?.startsWith("/")) {
      sources.add(source);
      if (!fs.existsSync(path.join("public", decodeURIComponent(source)))) failures.push(`${context}: missing public image ${source}`);
    }
  }
}
assert(imageCount > 0, "No generated images were found; check the build directory.");
assert.equal(failures.length, 0, failures.join("\n"));
console.log(`Image audit passed: ${pages.length} generated pages, ${imageCount} image instances, ${sources.size} local image sources. All have nonempty matching alt and hover title; all local sources exist.`);
