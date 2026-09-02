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

const post = getPost("third-party-inspection-tpi-oil-and-gas-equipment")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Who pays for third-party inspection?",
    a: "Normally the buyer, since TPI protects the buyer's interest — either as a separate line item in the purchase order, or built into the equipment price by the manufacturer if the RFQ specified TPI as a requirement. Always state in the RFQ who is expected to bear the cost, to keep quotes comparable.",
  },
  {
    q: "What is the difference between TPI and a Material Test Certificate?",
    a: "A Material Test Certificate (e.g. EN 10204 3.1) certifies the material itself. TPI is broader — it covers witnessing or reviewing the manufacturing and testing process as a whole, which may include reviewing material certificates as one part of a larger inspection scope covering dimensions, NDT, hydrostatic and performance testing, and final visual inspection.",
  },
  {
    q: "Can the buyer's own engineer act as the third-party inspector?",
    a: "Not really — by definition a third-party inspector is independent of both the buyer and the manufacturer. A buyer's own staff attending a factory test are usually described separately, as a customer witness or customer inspection, distinct from an accredited TPI agency's inspector.",
  },
  {
    q: "How far in advance should TPI be arranged?",
    a: "Notify the TPI agency and the manufacturer's inspection schedule as soon as the production and test dates are known — typically several weeks ahead for standard equipment, longer for complex or long-lead pumps and pressure vessels — so the inspector can be booked and travel arranged, especially for factories in remote locations.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          A commercial invoice and a{" "}
          <Link
            className="text-accent hover:underline"
            href="/blog/en-10204-material-certificates-explained"
          >
            material certificate
          </Link>{" "}
          tell you what the manufacturer says it built. Third-party inspection
          (TPI) is how a buyer confirms it independently — an accredited,
          uninvolved inspection body checks the equipment against the purchase
          order and the applicable standards, before it ever leaves the
          factory.
        </p>

        <h2 id="what-a-tpi-agency-actually-does" className="mt-12 text-xl font-bold">What a TPI agency actually does</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Scope varies by equipment and contract, but a typical TPI assignment
          for oil and gas equipment covers:
        </p>
        <CheckList
          items={[
            "Material verification — reviewing mill certificates and, where specified, positive material identification (PMI) testing",
            "Dimensional inspection against the approved drawing",
            "Non-destructive testing (NDT) — visual, dye penetrant (PT), magnetic particle (MT), ultrasonic (UT) or radiographic (RT) as called for by the code",
            "Witnessing hydrostatic (pressure) testing",
            "Witnessing the performance test, for rotating equipment such as pumps",
            "Final visual inspection, marking/nameplate verification, and painting/coating check",
            "Reviewing and stamping the manufacturer's data book / documentation package",
          ]}
        />

        <h2 id="witness-monitor-or-review-only" className="mt-12 text-xl font-bold">Witness, monitor, or review only?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Not every inspection needs a fully witnessed test, and the level you
          choose changes both cost and lead time. The common levels, from most
          to least involved:
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Witness (hold point)",
              d: "The inspector must be physically present for the specific test — production cannot proceed past that point without the inspector's sign-off. Used for critical tests such as hydrostatic and performance testing on major equipment.",
            },
            {
              t: "Monitor (notification point)",
              d: "The manufacturer notifies the inspector of the schedule, but the test can proceed if the inspector does not attend. Used for less critical stages, or where random or spot inspection is acceptable.",
            },
            {
              t: "Document review only",
              d: "The inspector reviews test records and certificates after the fact, without attending in person. The lowest-cost option, generally reserved for lower-criticality items or where the manufacturer has a strong track record.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="who-are-the-tpi-agencies" className="mt-12 text-xl font-bold">Who are the TPI agencies?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A handful of internationally accredited inspection houses cover
          most oil and gas equipment inspection worldwide, including Bureau
          Veritas, TÜV Rheinland, SGS, Intertek, DNV, Lloyd&apos;s Register
          and RINA, alongside regional and national agencies accepted by
          specific end users. Reputable agencies are generally accredited to{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.iso.org/standard/17020"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC 17020
          </a>
          , the international standard for the competence and impartiality of
          inspection bodies. Large tenders often name an approved list of
          agencies in the technical specification — always check whether your
          project restricts the choice before booking one.
        </p>

        <h2 id="writing-the-inspection-clause-in-an-rfq" className="mt-12 text-xl font-bold">Writing the inspection clause in an RFQ</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          To get comparable quotes, spell out in the RFQ or purchase order:
        </p>
        <CheckList
          items={[
            "Whether TPI is required at all, and for which items",
            "The approved agency, or an approved list to choose from",
            "The witnessing level per test stage — witness, monitor or review",
            "Which tests are required — hydrostatic, performance, NDT, PMI",
            "Who arranges and pays for the inspector's travel and fees",
            "The documentation format required — inspection release note (IRN/PSI certificate), test reports, data book",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          On the boiler feedwater pump tender we ran recently, the technical
          specification named a defined list of acceptable TPI agencies and
          required the cost of inspection to be included in the unit price for
          the complete lot — a good example of removing ambiguity before
          quotes come in, rather than negotiating it afterward.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Need TPI built into your next RFQ?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your equipment list and inspection requirements
          </Link>{" "}
          and we will structure the tender so every offer is quoted on the
          same inspection basis.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
