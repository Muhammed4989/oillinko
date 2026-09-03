# Oillinko daily content pipeline — how to write and publish a new article

This is the self-contained playbook for the automated blog pipeline. It is
also what a human (or Claude, when asked manually) should follow to add a
new article to oillinko.com consistently with the other 11+ already live.

Read `CONTENT_BACKLOG.md` first — it is the topic queue.

## 0. Non-negotiable rules

- **Never fabricate.** No invented statistics, standards clauses, prices,
  named client stories, quotes, or company facts. If a specific technical
  claim (a pressure class, a standard's exact scope, a numeric limit) isn't
  something you're already confident is correct, verify it with a web
  search before writing it down. If it can't be verified, phrase it more
  generally or omit it — do not guess and present it as fact.
- **No fabricated case studies.** Do not invent "a client we worked with"
  or "a tender we ran" stories. The 11 existing articles contain a couple
  of real references to actual past Oillinko work (e.g. the boiler
  feedwater pump tender) — do not imitate that pattern with invented ones.
- **External links only to non-competitors.** Only standards bodies and
  similar neutral authorities (API, ASME, ASTM, ISO, AMPP/NACE, TEMA,
  CEN-CENELEC, EIA, OPEC, IEA, and similar government/intergovernmental
  data or standards sources). Never link to another oil & gas equipment
  sourcing/trading company, a trading house, or a producer/operator that
  could be read as a competitor or a client's competitor. Verify every
  external URL with a web search immediately before using it — do not
  reuse a URL from memory without checking it still resolves to the right
  document. 1–3 external citations per article is plenty; don't force one
  if there's no natural, accurate fit.
- **Scope is the whole oil & gas industry, not just equipment Oillinko
  sells.** See `CONTENT_BACKLOG.md` — trading/markets, upstream production
  and extraction, midstream transportation, testing/laboratories, and
  industry technology are all in scope alongside equipment/procurement.
  Don't force an RFQ or equipment-category link onto an article that
  doesn't naturally fit one (e.g. a piece on OPEC quotas or reservoir
  engineering usually shouldn't end with an equipment pitch) — an internal
  link to another relevant blog post is a better close in that case.
- **1,500 words minimum** of actual prose content per article (headings,
  paragraphs, list item text, table cell text, FAQ answers all count;
  import statements, JSX/className boilerplate, and code do not). Aim for
  1,700–2,200 so the 1,500 floor is comfortably cleared after the
  boilerplate is stripped out.

## 1. Pick the topics

Open `CONTENT_BACKLOG.md`. Take the first 2 unchecked (`- [ ]`) items from
the top of the list (they can be from different categories). If fewer than
10 items remain unchecked anywhere in the file, first generate ~20 more
topics (same categories, same spirit — genuinely distinct, useful,
non-redundant angles a real oil & gas equipment buyer would search for) and
append them before picking.

## 2. Research

For each topic, before writing:
- Use WebSearch to confirm the exact standard number/name/scope you plan to
  cite is current and correct (standards get revised; don't rely purely on
  training-data memory for specifics like edition years or exact clause
  scope).
- Confirm any external URL you plan to link to actually exists and is the
  organization's own official page (see the verified list below — reuse
  these where the topic matches; only search for a new one when the topic
  needs a standard not already covered).

Known-good external URLs (verified as of this pipeline's creation — still
worth a quick re-check if it's been a long time since last used):
- API: `https://www.api.org/products-and-services/standards`
- ASME: `https://www.asme.org/codes-standards`
- ASTM: `https://www.astm.org/products-services/standards-and-publications.html`
- AMPP / NACE: `https://store.ampp.org/nacestandards`
- ISO 15156 (sour service): `https://www.iso.org/standard/79658.html`
- ISO/IEC 17020 (inspection bodies): `https://www.iso.org/standard/17020`
- ISO 5211 (valve actuator attachment): `https://www.iso.org/standard/89904.html`
- TEMA: `https://tema.org/standards/`
- CEN-CENELEC (EN standards): `https://www.cencenelec.eu/european-standardization/european-standards/`
- EIA petroleum data (US Energy Information Administration): `https://www.eia.gov/petroleum/data.php`
- OPEC Monthly Oil Market Report: `https://www.opec.org/monthly-oil-market-report.html`
- IEA Oil Market Report: `https://www.iea.org/data-and-statistics/data-product/oil-market-report-omr`
- For a standard or data source not in this list (e.g. API 598, API 520/521,
  API 674, ISO 9001, incoterms/ICC, a specific EIA/OPEC/IEA report page),
  search for it fresh — don't guess the URL.

## 3. Write the article file

Create `src/app/blog/<slug>/page.tsx`. Slug: lowercase, hyphenated, from
the topic title. Follow this exact structure (copy the pattern from an
existing file like
`src/app/blog/api-610-pump-types-and-classes-explained/page.tsx`):

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  CheckList,   // only if you use it
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("<slug>")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [ /* 3–4 real Q&A pairs, plain strings (no JSX/links inside) */ ];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          {/* intro paragraph, 60–100 words */}
        </p>

        <h2 id="<kebab-slug-of-heading-text>" className="mt-12 text-xl font-bold">Section heading</h2>
        {/* paragraphs / tables / CheckList / card grids as needed — see
            existing articles for the visual patterns (comparison tables,
            spec cards, checklists) */}

        {/* 4-7 h2 sections total is typical for 1,500-2,200 words */}

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
```

Notes:
- Every `<h2>` needs a unique `id` (kebab-case slug of its own text) — this
  is what powers the auto-generated table of contents (sidebar + inline).
  Do not add `id` to `<h3>` elements used inside card grids.
- Do not write `title: "X | Oillinko"` — the root layout already appends
  `| Oillinko` via its title template. Just use the plain title.
- Reuse an existing image from `public/images/` that thematically fits
  (`hero-refinery.jpg`, `night-refinery.jpg`, `about-refinery.jpg`,
  `pipes-plant.jpg`, `train-refinery.jpg`, `refinery-hazy-unsplash.jpg`,
  `refinery-night-unsplash.jpg`) — do not invent a new image path.

## 4. Add internal links (in the body, not just the footer widget)

- Link the article's matching equipment category once, naturally, e.g. in
  the closing paragraph: `Browse our <Link href="/equipment/<category-slug>">…</Link>
  category, or <Link href="/rfq">send us your…</Link>`. Only equipment
  categories that exist in `src/lib/equipment.ts` can be linked this way —
  `buyers-guides` and `standards-certification` blog categories don't have
  a matching equipment page, so link to 1–2 related blog posts instead.
- Link 1–2 other existing blog posts where a natural mention occurs (don't
  force it) — check `src/lib/blog.ts` for slugs/topics.
- Add an RFQ closing paragraph if the topic supports one naturally (most
  do): `Sourcing X? <Link href="/rfq">Send us your…</Link> and we will…`

## 5. Register the post in `src/lib/blog.ts`

Add a new object to the `blogPosts` array with all fields (`slug, title,
short, tagline, category, readTime, date, dateLabel, description, keywords,
image, related`). Use today's date for `date`/`dateLabel`. Pick 2–3 `related`
slugs from existing (or newly added) posts that are genuinely topically
close. Also add the new slug to the `related` array of 1–2 of those posts
in return, so the relationship is bidirectional (light touch — don't rewrite
unrelated posts' related arrays wholesale).

Nothing else needs updating — `sitemap.ts`, the blog listing page, and
`robots.ts` all read from `blogPosts` automatically.

## 6. Verify before committing

Never build in place on the OneDrive-mounted working copy (permission
issues). Copy the repo (excluding `node_modules`, `.next`, `.git`) to a
scratch directory, `npm ci` there, then:

```
npx tsc --noEmit
npx eslint src
```

Both must be clean (0 errors) before committing. A full `npm run build`
will fail in this sandbox specifically because `fonts.googleapis.com` is
network-blocked here — that is a known sandbox-only limitation (confirmed
harmless via a real Vercel preview build previously), not a sign of a real
problem, so don't treat a Google Fonts fetch error as a blocker if
`tsc`/`eslint` are both clean.

## 7. Commit and publish

1. `git checkout master && git pull` first (skip pull if it fails for lack
   of credentials — in that case just confirm the local master is already
   up to date with what's live).
2. Before writing anything new, check whether a previous content branch
   was already pushed and is waiting to be merged:
   `git ls-remote origin 'refs/heads/content/*'`. For each one found that
   isn't yet merged into master: open its GitHub compare/PR URL in the
   browser (`https://github.com/Muhammed4989/oillinko/compare/master...<branch>`),
   create the PR if one doesn't exist yet, wait for the Vercel bot's
   preview deployment to reach "Ready", and open the preview URL to
   spot-check the new article(s) render correctly (TOC present, no
   obvious errors). **Do not click "Merge pull request" automatically.**
   Per the agreed semi-automatic workflow (2026-09-02), going live on
   oillinko.com is publishing public content, which needs a fresh explicit
   go-ahead each time — message the user with the PR link and a one-line
   summary of what's in it, and wait for a clear yes (e.g. "انشر") before
   merging. Once approved, merge and verify the live article(s) on
   oillinko.com.
3. For today's new articles: create a new branch `content/<YYYY-MM-DD>`
   from master, add the new files + the `src/lib/blog.ts` edit + the
   updated `CONTENT_BACKLOG.md` (topics checked off), commit with a message
   listing the article titles.
4. **This sandbox has no git push credentials** (this is a standing,
   already-diagnosed limitation, not something to retry or troubleshoot
   again). End the run with a clear chat message: which 2 articles were
   written, that they're committed locally on `content/<date>`, and that
   pushing that branch (`git push -u origin content/<date>`, e.g. via the
   user's VS Code agent) is the one remaining manual step — the next run of
   this task will automatically open the PR and verify the preview, then
   ask before merging (step 7.2 above).

## 8. Style notes

Match the existing 11 articles: direct, technical, written for a buyer who
already knows the industry but wants a specific point clarified — not
marketing copy, no invented superlatives, no "in today's fast-paced
industry" filler. Use real standard numbers and real, verifiable technical
detail. Tables and comparison cards (see existing articles) are preferred
over long prose paragraphs for classification/comparison content.
