# Oillinko catalogue: public URL contract

This structure supports a trade reference catalogue and owner-reviewed sourcing enquiries. Public URLs identify technical topics, not a particular supplier, current stock position, delivery territory or commercial offer.

## Permanent structure

| Purpose | Public path |
| --- | --- |
| Complete oil and gas catalogue | `/oil-and-gas` |
| Physical equipment and materials | `/oil-and-gas/equipment` |
| Equipment category | `/oil-and-gas/equipment/pumps` |
| Equipment topic | `/oil-and-gas/equipment/pumps/centrifugal-pumps` |
| Specialist services | `/oil-and-gas/services` |
| Service family | `/oil-and-gas/services/shutdown-tank-maintenance` |
| Service topic | `/oil-and-gas/services/tank-cleaning` |
| Software | `/oil-and-gas/software` |
| Industry/application navigation | `/industries/pipelines` |

The procurement consultancy page at `/services` remains a distinct company page. It is not the specialist service catalogue. Two families contain software as well as another requirement type; their distinct typed category pages explain why 37 families have 39 category URLs.

## Stable identity

Each topic has an explicit immutable `id` in its data row. Editing a display name must not edit that ID. `catalogue-public-paths.ts` stores one published URL per topic ID, independently of its display name and future taxonomy membership. `typeUrl` is the public URL lookup; it fails if a new topic has no deliberate URL entry.

Historical paths are retained separately in `historicalCatalogueRedirects`. Do not reconstruct that history from current taxonomy: moving a topic between categories must not silently remove an old redirect. Current migration redirects go straight to the final non-www URL and retain query parameters. The old catalogue root resolves known filters into the appropriate new landing page. Legacy fragments migrate in the browser because fragments are never sent in HTTP requests.

Before retiring a topic, decide whether there is a genuinely equivalent destination. Do not send every removed topic to the homepage. The current tests protect the published baseline, unique paths, live redirect destinations and the minimum article length.

## Filter and indexing policy

Category selection resolves to its typed category path; sector selection without a category resolves to `/industries/[sector]`; a requirement type alone resolves to the matching equipment/service/software root. Search text, additional facets and manufacturing-origin preferences stay in query parameters. Both browser navigation and native GET submission use this policy.

Clean category and industry pages are indexable, internally linked and included in the sitemap. Query variants are noindex/follow and canonicalize to the clean landing page. Origin query values express buyer preferences; they must not create indexable country pages that imply confirmed stock or manufacturing provenance. Every product has one canonical even when it appears under multiple sectors.

## Extending the reference catalogue

1. Add a permanent topic ID, descriptive title, requirement kind, category membership, sector/application tags and useful search aliases. Add its deliberate public path to the registry.
2. Add the topic-specific definition, applications, configurations and selection information. Preserve source provenance and distinguish general guidance from model-specific manufacturer data. Do not meet the word-count floor through keyword repetition.
3. Keep manufacturers, model numbers, documented specifications, documents and their revision dates as separate future records linked to the topic ID. A manufacturer address is not a manufacturing-origin record.
4. Keep supplier offers and future commercial agreements separate from the reference topic. Later offers can link to the existing topic without changing its URL or rewriting general technical content as a stock claim.
5. Keep lead intake separate from supplier distribution. Current forms still go to Oillinko for manual review. No supplier accounts, automatic lead delivery or supplier integration are introduced by this migration.
6. Additional languages should have a language namespace and their own reviewed content/hreflang implementation when commissioned. Do not change English URLs merely to add another language.

## Supplier identity boundary

Company identities are published only in the `/oil-and-gas/companies` namespace. The technical catalogue and industry routes must remain supplier-neutral: no company names, logos, outbound company links, catalogues, company-specific claims or named-company fields in page copy, metadata, structured data, images, search aliases or RFQ defaults. A catalogue page may ask the buyer to provide the manufacturer or OEM of installed equipment, but it must not disclose the suppliers Oillinko may use to fulfil the request.

Company profiles may link outward to relevant technical categories. Catalogue pages must not link back to named company profiles. This one-way relationship lets readers discover a company's capabilities from its own profile without allowing a product-keyword landing page to expose Oillinko's prospective supply route.

These are extension rules, not a claim that supplier databases, manufacturer records or multilingual pages already exist. The data access helpers and URL registry provide a boundary for a future CMS/database while allowing published URLs to remain stable.

## Release checks

Run `npm run lint -- src scripts next.config.ts`, `npm run build`, `node scripts/check-catalogue.cjs --build`, and `node scripts/check-catalogue.cjs --url http://127.0.0.1:3000`. The HTTP check reads all catalogue/sector URLs and all legacy redirects without submitting any RFQ. Repeat the HTTP check against production after Vercel is Ready and confirm its source commit.

Browser checks cover category/type transitions, sector selection, reload/back, origin transfer, mobile layout, old topic anchors, and the article appearing before its enquiry form. Keep DNS and existing host configuration outside this migration.
