import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Write a Bill of Quantities (BOQ) | Oillinko",
  description:
    "Buyer's guide to preparing an equipment list or bill of quantities: line items, sizes, standards, materials and the details that stop suppliers from quoting the wrong equipment.",
  keywords:
    "how to write a bill of quantities, BOQ, equipment list, procurement bill of quantities, how to prepare a BOQ",
  alternates: { canonical: "/guides/how-to-write-a-bill-of-quantities" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to write a bill of quantities: buyer's guide",
  description: metadata.description,
  author: { "@type": "Organization", name: site.legalName, url: site.domain },
  publisher: { "@type": "Organization", name: site.legalName, url: site.domain },
  datePublished: "2026-01-01",
};

export default function BoqGuide() {
  return (
    <>
      <section className="border-b border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Guide · Buyer&apos;s guide
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            How to write a bill of quantities that gets quoted right
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The quality of every offer starts with the quality of the list you send. Here is the line-by-line method we see working — straight from the desk.
          </p>
          <p className="mt-3 text-sm text-muted">6 min read · Updated 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-xl font-bold">Why the BOQ matters more than the supplier</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A supplier can only quote what you tell them. The difference between two
          offers for the same project sometimes reaches thirty to forty percent —
          because one supplier quoted the exact schedule, standard and material,
          and the other guessed. On welded line pipe connections especially,
          there is no &quot;close enough&quot;: the fittings, flanges, gaskets and bolts
          must inter-match or the joint will not be made to code. Your list is
          the contract between your project and everyone who bids on it.
        </p>

        <h2 className="mt-12 text-xl font-bold">Start with the project frame</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Before the line items, give the reader the frame: project or plant name,
          the duty line, the relevant code or class (e.g. ANSI/ASME B16.5 Class
          600), the quantities of connections involved, and the delivery target and
          location. This lets suppliers align their material to the same design
          pressure — and lets you compare like for like.
        </p>

        <h2 className="mt-12 text-xl font-bold">The anatomy of a line item — remove the guesswork</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Each row of the BOQ should say:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Item number / tag — so you can reference it on the drawing",
            "Item type — fitting, flange, gasket, bolt set, stopper",
            "Standard — e.g. ANSI/ASME B16.5, ASME B16.20, ANSI B16.9",
            "Material grade — e.g. ASTM A105, ASTM A193 Gr. B7",
            "Schedule / class — e.g. Sch. STD, Class 600",
            "Size, dimensions and any ends — e.g. 12\" × 12\" × 8\"",
            "Quantity and unit — pcs, sets, meter",
            "Certificates, testing, coating notes",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-bold">Write the line like a sentence: example</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Take a vague note and the same line rewritten so a quoting team reads it
          without a single guess:
        </p>
        <p className="mt-4 rounded-lg border border-line bg-oil-800 p-6 font-mono text-xs leading-relaxed text-muted sm:text-sm">
          ITEM A-14 · Weld neck flange · NPS 8, Class 600, RF · ASME B16.5 ·
          material ASTM A105 · Sch. STD bore · EN 10204 3.1 · 12 pcs · gaskets 4
          pcs spiral wound graphite filler, ASME B16.20 · stud bolts A193 Gr. B7
          × A194 2H nuts, 5/8&quot; × 3-1/2&quot;, 24 sets.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          That one line tells the factory everything about price: the standard, the
          material, the class, the quantities and the bolt set. In practice, the
          three fields that cause most re-manufacturing are the facing (RF vs FF),
          the schedule on the bore, and the matching bolt set — which is why we
          always quote flanges, gaskets and bolts as one set.
        </p>

        <h2 className="mt-12 text-xl font-bold">Common mistakes that delay quotes</h2>
        <ul className="mt-5 space-y-3">
          {[
            "Generic lines like &quot;pipe fittings&quot; — a real price is impossible",
            "No standard or class — suppliers guess differently",
            "Mixing the flange class but forgetting the gasket",
            "No schedule — STD vs Sch. 80 changes the whole price",
            "Not stating whether ends are beveled, threaded, or socket",
            "Missing the certificate requirement — Type 3.1 required or not",
            "No delivery location or Incoterm — prices cannot be compared",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Do you have a list already but no time to clean it into this format? That is
          exactly the work we do — send us the raw file (Excel, PDF or Word) through
          the <Link className="text-accent hover:underline" href="/rfq">RFQ page</Link> and
          we will structure, review the spec against the standards, and return a
          consolidated, comparable offer.
        </p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CtaBand />
    </>
  );
}