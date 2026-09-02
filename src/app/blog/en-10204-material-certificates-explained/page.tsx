import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("en-10204-material-certificates-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Is a 3.2 certificate always better than a 3.1?",
    a: "It is more rigorous, not simply better — a 3.2 adds cost and lead time because it requires a second, independent validating party. Specify 3.2 only where the project or code genuinely requires it (for example certain pressure equipment directives or client specifications), not as a default for every item.",
  },
  {
    q: "Can a supplier's own quality department issue a 3.1 certificate?",
    a: "No. The defining feature of a 3.1 certificate is that it is validated by a representative independent of the manufacturing department — typically the manufacturer's own inspection or quality assurance department, which must be organisationally independent from production, not simply a different signature from the same team.",
  },
  {
    q: "Is EN 10204 the same thing as a mill test certificate (MTC)?",
    a: "\"Mill test certificate\" is the common industry term for the document; EN 10204 is the European standard that defines the four official types of inspection document (2.1, 2.2, 3.1, 3.2) that an MTC can be issued as. When someone asks for \"an MTC\", always confirm which EN 10204 type they actually need.",
  },
  {
    q: "Does EN 10204 apply outside Europe?",
    a: "Yes — despite being a European (CEN) standard, EN 10204 certificate types are referenced globally in oil and gas procurement specifications, including in the Middle East, Asia and the Americas, because it is the most widely recognised classification for metallic product inspection documents.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Almost every technical specification for pressure equipment, piping
          and structural steel asks for a material certificate — and most say
          it in one line: &quot;EN 10204 3.1 required&quot;. Getting the type
          wrong on an RFQ either forces a re-quote later or, worse, delivers
          equipment with paperwork the end client will reject at receiving
          inspection.
        </p>

        <h2 className="mt-12 text-xl font-bold">What EN 10204 actually is</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          EN 10204 is a European standard, <em>Metallic products — Types of
          inspection documents</em>, that defines four types of document a
          manufacturer can issue to certify that a delivered product complies
          with the order. It does not set the technical requirements
          themselves (those come from the material or product standard, e.g.
          ASTM A105 or ASTM A234) — it standardises how compliance is
          documented and who is allowed to validate it.
        </p>

        <h2 className="mt-12 text-xl font-bold">The four certificate types</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">What it certifies</th>
                <th className="px-4 py-3">Validated by</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "2.1",
                  "A declaration of compliance with the order — no test results included",
                  "The manufacturer",
                ],
                [
                  "2.2",
                  "A test report with results from non-specific testing — i.e. not necessarily from the same batch as the delivered product",
                  "The manufacturer",
                ],
                [
                  "3.1",
                  "An inspection certificate with results from specific testing, traceable to the actual product delivered",
                  "A person independent of the manufacturing department (the manufacturer's own inspection/QA function)",
                ],
                [
                  "3.2",
                  "An inspection certificate with results from specific testing, traceable to the actual product delivered",
                  "Both the manufacturer's authorised representative and an independent third party or the purchaser's authorised inspector",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The practical line to remember: 2.1 and 2.2 are the manufacturer
          simply saying so; 3.1 and 3.2 are traceable, specific test results
          tied to the actual delivered item, with 3.2 adding an independent
          second signature.
        </p>

        <h2 className="mt-12 text-xl font-bold">3.1 vs 3.2 — the distinction that matters most</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For pressure-containing parts in oil and gas — flanges, fittings,
          pipe, pumps casings, bolting — <strong className="text-foreground">EN
          10204 Type 3.1</strong> is the default requirement on most
          specifications: it gives full traceability of chemical and
          mechanical test results to the specific heat/batch, validated by the
          manufacturer&apos;s own quality department acting independently of
          production. <strong className="text-foreground">Type 3.2</strong> is
          reserved for higher-criticality items where the project, an
          applicable pressure equipment directive, or the end client&apos;s
          specification requires an additional, genuinely independent
          validation — either a third-party inspector or the purchaser&apos;s
          own authorised representative — witnessing or reviewing the same
          test results.
        </p>

        <h2 className="mt-12 text-xl font-bold">How to specify it correctly</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          When writing a line item, state the certificate type explicitly next
          to the material standard — for example &quot;ASTM A105, EN 10204
          Type 3.1&quot; — rather than a generic note elsewhere in the
          document. If Type 3.2 is required, also state who the independent
          validating party should be (a named TPI agency, or the
          purchaser&apos;s representative), since that decision affects lead
          time and cost. For more on structuring the wider inspection scope
          around the certificate, see our guide to{" "}
          <Link
            className="text-accent hover:underline"
            href="/blog/third-party-inspection-tpi-oil-and-gas-equipment"
          >
            third-party inspection
          </Link>
          .
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
