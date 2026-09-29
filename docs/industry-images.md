# Industry overview images

`src/lib/industry-images.ts` maps the eleven existing sector IDs to supplier-neutral images for `/industries`. Desktop cards keep the image on the left and content on the right; small screens stack the image above the content.

The four WebP images in `public/images/industries` were created for Oillinko on 29 September 2026 using the built-in image generation tool. They are original editorial illustrations of exploration, drilling, decommissioning and geothermal energy. They do not depict an identified supplier, an Oillinko project or Oillinko staff. Source PNGs are retained locally; the published copies are WebP encodings without compositional edits.

The remaining images reuse existing site assets: six generic blog illustrations and the existing refinery photograph. Each card uses `SiteImage` with a descriptive English `alt`, mirrored to its hover `title`. Preserve this behavior and the supplier identity boundary when replacing images. Catalogue names, descriptions, category counts and links remain in the central sector registry.
