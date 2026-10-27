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

<!-- BEGIN owner-plan-ai-visibility-business -->
## Standing owner plan: AI visibility and business recommendation

Scope: Oillinko only. Use this context for direct owner requests in this working copy. Historical snapshots remain immutable; do not work in a retired or unrelated project.

Office geography is Istanbul only unless the owner explicitly revises it with genuine evidence. Do not invent other offices or street addresses. Supplier identities remain confined to the company-directory namespace; a directory entry does not prove a partnership. Preserve RFQ requirements and attachments. Verify item-specific specification, origin, condition, conformity, availability and quotation terms; browser file restrictions do not establish provider-side validation, scanning or retention.

Centra and Areu are outside this initiative; do not access or modify them. These rules preserve existing project instructions and higher-priority requirements. Clear later owner instructions may revise this plan: explain material conflicts and clarify only when scope or intent is unresolved. Do not disregard a clear later decision or request needless repeat permission.

### Working rules

- Carry both work streams through relevant tasks: (1) citation/search visibility through crawlable rendered content, correct status/canonical/hreflang/schema and useful sourced answers; (2) genuine business recommendation and qualified enquiries through verifiable identity, services, evidence, comparisons and honest contact journeys. Informational visitors are welcome; do not force forms or gate useful answers. This does not require spawning agents or re-auditing the whole site for every edit.
- Verify the current source, working copy, branch/file baseline and dirty work before changing affected files. Distinguish original source, generated export, isolated candidate and hosted version. Preserve concurrent changes; check patch preimages and reconcile drift instead of replacing newer work with an old snapshot. Keep recoverable before-files or a scoped diff and use an isolated copy when necessary.
- Preserve approved colors, design, sections, hierarchy, main/subcategory/content URLs, redirects, languages, internal links, filters and RFQ/enquiry behavior unless the owner clearly authorizes a specific change. Reuse existing systems; avoid thin duplicate pages, arbitrary content quotas and unnecessary rebuilds.
- Use current primary evidence for changing factual claims. Record sources, dates, scope, units/currency, assumptions and material limitations. Never invent offices, licenses, reviews, partnerships, stock, prices, results, patient stories or guaranteed outcomes. Medical content needs genuine qualified clinical review; legal/financial guidance needs appropriate verification/review. Unknown facts remain explicit gaps, not persuasive claims.
- Run proportionate local checks for the actual change: relevant build/tests, affected routes/metadata/images, mobile/keyboard behavior and source-preservation checks. Test forms with synthetic data and intercepted/local workflows; do not send real leads, messages or patient submissions as tests without explicit authorization. Distinguish UI acknowledgement, provider acceptance and actual delivery. Reuse valid recent evidence for unchanged areas; stop when the scoped work is complete.
- This standing plan does not itself authorize deployment, push/merge, indexation changes, form/backend activation, new tracking, outreach, account/security changes or scheduler changes. Preserve any explicit, still-applicable owner authorization for an exact workflow; do not expand it to unrelated work or infer it merely from a historical schedule. Do not restart old automations, change training-crawler permissions or create perpetual loops under this plan.
- Measure brand mentions without citations, observed citations, explicit recommendations, attributable AI referral visits and qualified leads as separate categories. A brand mention alone is neither a citation nor a recommendation. Record the question/platform/date/locale and source window where relevant; separate ordinary search metrics from AI outcomes, local tests from hosted results, and pre/post-publication observations. Missing access or evidence means unmeasured, not zero. Do not invent uplift or treat a small/incomplete query sample as proven high-impact demand.

### Rollout boundary (2026-10-14)

- Installing these instructions and preparing the pending local improvement batch do not authorize publishing that batch. Historical publication permissions apply only to their exact still-authorized workflow; they do not restart a stopped automation.
- An isolated working copy or new worktree must carry these essential instructions before new work. Keep accepted release candidates frozen as evidence; do not modify a frozen candidate merely to add instructions. Explicitly read the matching installed source AGENTS.md before creating a new instructed working copy.

<!-- END owner-plan-ai-visibility-business -->
