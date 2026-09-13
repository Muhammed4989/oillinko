# Catalogue content and routing

The catalogue contains 37 categories and 219 equipment, service and software topics across 11 industry sectors. Every topic has an independent, server-rendered information page, with the enquiry form after its article. All enquiries continue to use the existing Oillinko email destination for manual review.

## Editing content

- `src/lib/catalogue.ts` and `catalogue-extensions.ts` hold taxonomy, search aliases, specification prompts and sector/application tags.
- The six `catalogue-overviews-*.ts` files hold the individual definitions, applications and configuration options. Each topic must have its own entry.
- `catalogue-content.ts` combines that topic copy with specification guidance, related-topic comparisons and purchasing questions. Some specification guidance is shared across pages where the same requirement applies. The 700-word minimum counts article paragraphs, excluding headings, navigation, footer and form text.
- Word count is a floor, not an SEO performance measure. Future edits should add useful topic-specific explanations and avoid repeating keywords or creating location/origin variants without distinct evidence and content.
- Do not present catalogue inclusion as stock, an appointed supplier, a guaranteed certification, a price or confirmed manufacturing origin. Confirm these for the actual proposal.

## URLs and indexing

- `/equipment`: indexable catalogue with a GET search form.
- `/equipment?search=...&category=...&sector=...&kind=...&application=...&origin=...`: shareable, server-rendered selections; noindex/follow with a canonical pointing to the main catalogue.
- `/equipment/[category]`: indexable category; existing product anchors remain available.
- `/equipment/[category]/[item]`: indexable topic, unique title/description/canonical, breadcrumbs and visible content. Included in the sitemap and linked from category and industry pages.
- Legacy `#sector=...` and other hash filter URLs migrate to the matching query URL in the browser.
- Origin is a requested **manufacturing origin**, carried into the enquiry. It is not a claim of available stock or distribution coverage. Delivery/service location is a separate form field.

## Validation

Run `npm run lint -- src scripts`, `npm run build`, then `node scripts/check-catalogue.cjs --build`. Optional read-only HTTP verification: `node scripts/check-catalogue.cjs --url https://oillinko.com` (267 catalogue/industry URLs plus search and 404 checks; no form submissions).

Browser review should cover selection and search, reload/back navigation, origin transfer into the product form, related-product navigation, legacy hash migration and a narrow mobile viewport. Keep the non-www domain and existing redirect arrangement unchanged.

## Editorial references

These primary sources informed taxonomy and general equipment/service descriptions; they do not establish a supplier relationship with Oillinko.

- [SLB completions](https://www.slb.com/products-and-services/innovating-in-oil-and-gas/completions) and [plug and abandonment](https://www.slb.com/solutions/plug-and-abandonment)
- [Halliburton well construction](https://www.halliburton.com/en/well-construction) and [well intervention](https://www.halliburton.com/en/completions/well-intervention-and-diagnostics)
- [Sulzer distillation technology](https://solutions.sulzer.com/technologies/distillation-technology)
- [Chart LNG equipment](https://www.chartindustries.com/Markets/LNG-Equipment) and [vaporizers](https://www.chartindustries.com/Products/Vaporizers)
- [Baker Hughes process and pipeline services](https://www.bakerhughes.com/process-pipeline-services/precommissioning-maintenance)
- [Intertek petroleum technical services](https://www.intertek.com/petroleum/technical-services/)
- [Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [URL structure](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites) and [site structure](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure)
