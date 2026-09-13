# Oillinko blog publishing contract

The blog is an English knowledge library for equipment buyers, engineers and traders. It uses the existing Next.js application and Vercel deployment. Enquiries remain directed to Oillinko. A catalogue topic or directory entry is not evidence of stock, an executed project, manufacturer authorization or an in-house field capability.

## Topic hierarchy and search intent

The initial taxonomy has four main topics and twelve subtopics. It can grow beyond six main topics when distinct reader needs and original content justify them. Do not change existing slugs simply to add more keywords.

| Main topic | Subtopics | Primary reader intent |
|---|---|---|
| Oil & Gas Equipment | Pumps & Rotating Equipment; Valves & Actuation; Piping, Flanges & Fittings; Gaskets & Sealing; Pressure Vessels, Tanks & Heat Exchangers; Wellhead & Production Equipment | Understand and specify equipment |
| Oil & Gas Services | Pipeline Intervention; Equipment Maintenance & Repair | Define specialist work and supply boundaries |
| Inspection & Material Quality | Inspection & Testing; Materials & Documentation | Define acceptance evidence and traceability |
| Oil & Gas Procurement | Supplier Selection & RFQs; Logistics & Delivery | Compare suppliers and coordinate a purchase |

These are editorial keyword targets derived from the live catalogue and existing articles, not claimed search-volume or ranking data. Use descriptive titles and relevant internal links. Categories are not alternate copies of an article; each article has one primary main/subcategory path. Complementary subjects are related links.

## Sources of truth

- `src/lib/blog-taxonomy.ts`: category identity, parent, name, description, short introduction and catalogue links.
- `src/content/blog-categories/{slug}.md`: original category guide, parsed on the server at build time. Use `##` headings, ordinary paragraphs and Markdown links. Lists, arbitrary HTML and other Markdown syntax are deliberately unsupported.
- `src/lib/blog.ts`: article identity, membership, original publication date, actual modification date, metadata, image and published related-article slugs.
- `src/content/blog/{article-slug}.tsx`: article body. The route imports the body based on the validated article registry. Keep shared header, related reading and structured data components.
- `src/lib/blog-guides.ts`: parser, paragraph word counter and symbolic link resolver.
- `src/lib/blog-metadata.ts`: canonical and social metadata.

Use `[descriptive text](post:article-slug)` and `[descriptive text](category:category-slug)` in category guides. These resolve to the final URL automatically and reject unknown records. Catalogue links use current final `/oil-and-gas/...` paths. Use `postUrl`, `categoryUrl` and shared components when constructing links in code.

## Add or update content

1. Choose an existing category based on the article's primary question. To add a category, register a unique lowercase hyphenated slug and its parent, and write its own guide. Main categories have no parent; subcategories have exactly one main parent.
2. Write at least 700 words in guide paragraphs alone, excluding headings, menus and article cards. Explain the actual subject with useful examples and buying questions. The source check rejects repeated paragraphs across guides, but human review is still needed for semantic repetition and quality.
3. Keep the short introduction brief enough for two lines at 320px. The CSS also clamps it to two lines. All guide paragraphs and links are in server HTML inside native `details`; `summary` works with keyboard and touch without JavaScript.
4. Add a real article record and matching TSX body. Preserve the original publication date when editing; change `dateModified` only for an actual update. The author is the Oillinko organization, not an invented credentialed person.
5. Link published complementary articles and a relevant catalogue or service page. Never use a made-up article card linked to `/blog`. Empty categories show the original guide and an explicit message about future articles.
6. Confirm references against primary manufacturer, standards-body or regulator pages. Cite the applicable document edition and distinguish general explanations from product-specific limits. Do not infer credentials, setpoints, compatibility or operating procedures. Standards landing pages identify documents but do not substitute for their normative text.
7. Run the checks below, review the changed pages visually, publish through the existing GitHub/Vercel workflow, then repeat HTTP verification on production.

## Permanent URLs and redirects

Canonical routes are `/blog`, `/blog/category/{main}`, `/blog/category/{main}/{sub}`, and `/blog/category/{main}/{sub}/{article}`. Unknown combinations return 404. Categories/articles are statically generated; the searchable index is server-rendered. Filtered index URLs use noindex/follow and canonical `/blog`.

The 23 original `/blog/{slug}` paths and 23 earlier `/guides/{slug}` paths permanently redirect in one hop to the final absolute non-www URL. `/guides` redirects directly to `/blog`. These exact redirects precede host normalization, so a legacy www URL also avoids a second hop. Unknown historic paths are not redirected to unrelated content.

When moving an already published new route, retain its previous full path explicitly in the redirect ledger before changing membership. `legacyBlogRedirects()` only derives the pre-migration flat aliases. Preserve redirect destinations as final URLs; do not redirect through another legacy URL. The sitemap includes all final category and article routes automatically.

## Verification

```
node scripts/check-blog.cjs
node node_modules/next/dist/bin/next build
node scripts/check-blog.cjs http://localhost:3000
node scripts/check-blog-browser.cjs http://localhost:3000 PATH_TO_EXISTING_PLAYWRIGHT
node scripts/check-blog.cjs https://oillinko.com
```

The HTTP check verifies paragraph content before expansion, unique metadata, one H1, canonical URLs, social metadata, article schema and dates, visible/schema breadcrumbs, membership/card counts, real related links, direct internal destinations, old redirects, sitemap, 404 behavior and GET search. Browser QA uses an optional external Playwright installation, not a production dependency. It checks 1365px, 390px and 320px, keyboard and touch, no-JavaScript behavior, search URL/reload, layout overflow and hydrated navigation. No enquiry forms are submitted.

This migration also corrects specific legacy technical issues: EN 10204 3.1 validation wording, blanket hot-tapping safety claims, default Class 600 assumptions, generic pneumatic stopper suitability, unsupported sourcing frequency, pump classification wording, NPSH3 distinction and metering-pump detection/accuracy statements. Exact plant engineering and normative compliance still require the applicable specification and responsible technical review.
