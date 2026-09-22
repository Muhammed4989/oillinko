<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Oillinko supplier identity rule

Named supplier and manufacturer identities are public only inside the company-directory namespace at `/oil-and-gas/companies`. A company page or directory view may show the company name, logo, website, catalogue and attributed company information.

Do not expose a named supplier or manufacturer on equipment, service, software or industry pages. This includes visible copy, cards, links, image credits and alt text, metadata, structured data, search aliases and prefilled enquiry values. Those pages describe the technical requirement generically and send enquiries to Oillinko for manual review and routing. Do not add reverse links from a catalogue topic to a company page.

Generic technical wording such as “manufacturer,” “supplier,” “OEM,” and fields asking the buyer for an installed manufacturer, model or part number remain allowed. Editorial articles may cite an original technical source when accuracy requires it, but a citation must not be presented as the supplier assigned to an Oillinko enquiry.

When adding or editing a company, catalogue topic or service, run the catalogue checks. Keep the protected company-name check current so a future company record cannot leak into catalogue HTML, metadata or structured data.
