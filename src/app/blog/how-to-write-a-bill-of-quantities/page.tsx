import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  CheckList,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("how-to-write-a-bill-of-quantities")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is a bill of quantities (BOQ) in procurement?",
    a: "A bill of quantities is a line-by-line list of the equipment, materials or parts a project needs, with enough detail — size, standard, material, schedule/class, quantity and certification — for a supplier to price it accurately without guessing.",
  },
  {
    q: "What is the single biggest cause of wrong quotes on a BOQ?",
    a: "Missing the standard and class on a line item. A generic line like \"pipe fittings\" or a flange with no pressure class forces every supplier to guess differently, which is why the resulting quotes are impossible to compare like for like.",
  },
  {
    q: "Should flanges, gaskets and bolts be listed as separate line items?",
    a: "They can be, but they should always be specified together as a matched set — same pressure class, compatible facing and a gasket/bolt combination suited to the service — because they form one bolted connection, not three independent parts.",
  },
];

export default function BoqGuide() {
  return (
    <>
      <BlogPostHeader post={post} />

      <Prose>
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
        <CheckList
          items={[
            "Item number / tag — so you can reference it on the drawing",
            "Item type — fitting, flange, gasket, bolt set, stopper",
            "Standard — e.g. ANSI/ASME B16.5, ASME B16.20, ANSI B16.9",
            "Material grade — e.g. ASTM A105, ASTM A193 Gr. B7",
            "Schedule / class — e.g. Sch. STD, Class 600",
            'Size, dimensions and any ends — e.g. 12" × 12" × 8"',
            "Quantity and unit — pcs, sets, meter",
            "Certificates, testing, coating notes",
          ]}
        />

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
        <CheckList
          items={[
            'Generic lines like "pipe fittings" — a real price is impossible',
            "No standard or class — suppliers guess differently",
            "Mixing the flange class but forgetting the gasket",
            "No schedule — STD vs Sch. 80 changes the whole price",
            "Not stating whether ends are beveled, threaded, or socket",
            "Missing the certificate requirement — Type 3.1 required or not",
            "No delivery location or Incoterm — prices cannot be compared",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Do you have a list already but no time to clean it into this format? That is
          exactly the work we do — send us the raw file (Excel, PDF or Word) through
          the <Link className="text-accent hover:underline" href="/rfq">RFQ page</Link> and
          we will structure, review the spec against the standards, and return a
          consolidated, comparable offer.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
