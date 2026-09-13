# Global company directory

Public route: `/oil-and-gas/companies`. This is an independent editorial directory, not a client list, supplier accreditation list, offer database or automated lead-distribution system.

Company IDs remain stable when descriptions, display names or specialties change. Records in `src/lib/companies.ts` separate headquarters from product origin and identify a primary company role plus multiple specialties. A future verified commercial relationship must be a separate record, never inferred from directory membership.

Search, role and specialty combine as intersections. The filter form updates query parameters on Search, with native GET fallback. Filtered variants and company-prefilled enquiry variants are noindex/follow and canonicalize to the clean directory. Only the clean directory goes into the sitemap. Company query values resolve against existing IDs; unrecognised IDs never become arbitrary form content.

Each listing links to its official website and a relevant existing catalogue/industry page. New specialties must reference published routes. Add new records only after checking the company's own sources, and record the review date. Headquarters are a company reference, not an origin certification or a claimed distribution territory.

The buying guide precedes the existing RFQ component and contains more than 700 words. That component keeps its existing destination, info@oillinko.com, for manual Oillinko review. No test RFQs should be sent during verification.

Checks: run the project's lint and build, then `node scripts/check-companies.cjs http://127.0.0.1:3000` against a running local server. Repeat against `https://oillinko.com` after the matching Vercel deployment is Ready. Logo provenance is stored with the asset records; brand marks are identification only.
