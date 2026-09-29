<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Oillinko supplier identity rule

Named supplier and manufacturer identities are public only inside the company-directory namespace at `/oil-and-gas/companies`. A company page or directory view may show the company name, logo, website, catalogue and attributed company information.

Do not expose a named supplier or manufacturer on equipment, service, software or industry pages. This includes visible copy, cards, links, image credits and alt text, metadata, structured data, search aliases and prefilled enquiry values. Those pages describe the technical requirement generically and send enquiries to Oillinko for manual review and routing. Do not add reverse links from a catalogue topic to a company page.

Generic technical wording such as “manufacturer,” “supplier,” “OEM,” and fields asking the buyer for an installed manufacturer, model or part number remain allowed. Editorial articles may cite an original technical source when accuracy requires it, but a citation must not be presented as the supplier assigned to an Oillinko enquiry.

When adding or editing a company, catalogue topic or service, run the catalogue checks. Keep the protected company-name check current so a future company record cannot leak into catalogue HTML, metadata or structured data.

# Image descriptions and hover text

Use `@/components/SiteImage` for visible site images. Provide a meaningful English `alt` describing the image; the component also uses that description as the native `title` shown on mouse hover. Keep supplier identities confined to the company-directory namespace in both attributes. Background image containers must expose the same hover description when overlays cover the image. Run `node scripts/check-image-descriptions.cjs` after a production build to audit every generated page.

# Breadcrumb and content layout

Keep breadcrumbs in a compact `BreadcrumbBar` containing only the navigation trail. Page titles, descriptions, labels and bylines belong at the start of the main content column beside the sidebar, or in the main page body when there is no sidebar. Maintain one H1 and remove duplicate headings and repeated introductory text. Do not restore a full-width title banner underneath the breadcrumb. Apply this rule to catalogue, service, software, industry, blog and company pages.
