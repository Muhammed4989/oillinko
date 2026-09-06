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

const post = getPost("how-to-evaluate-and-vet-an-equipment-trading-company")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Is it a red flag if a trading company won't name the manufacturer behind a quote?",
    a: "Not necessarily — many trading companies keep manufacturer relationships confidential to protect the introduction they have negotiated, which is a normal part of the business. It becomes a red flag only if they also refuse to provide the manufacturer's country of origin, cannot produce a valid mill or works test certificate at delivery, or cannot explain who will actually be liable if the equipment fails to meet the specification.",
  },
  {
    q: "Should I always buy direct from the manufacturer instead of through a trading company?",
    a: "Not always — it depends on order size, how many different products you need, your in-house capacity to manage multiple suppliers and inspections, and how much local support you need. A trading company earns its margin by consolidating multi-vendor orders, pre-vetting suppliers and handling logistics and inspection coordination; for a single large repeat order directly from one manufacturer you already trust, going direct can make sense.",
  },
  {
    q: "What is the difference between an equipment trading company and a broker?",
    a: "The distinction is mostly about accountability, not paperwork. A trading or sourcing company typically takes commercial responsibility for the order — it issues its own sales contract, manages the RFQ and inspection process, and stands behind the delivery. A pure broker may only introduce a buyer and seller and step back once contact is made, leaving the buyer with less recourse if something goes wrong after that introduction.",
  },
  {
    q: "How many trading companies should I get quotes from before choosing one?",
    a: "Two or three credible companies is usually enough to sanity-check pricing, lead time and technical responsiveness without creating so many parallel conversations that comparison becomes difficult. Beyond that, the marginal benefit of an extra quote is usually smaller than the time cost of managing it, especially once you have identified one or two companies that answered your technical questions correctly the first time.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          The first RFQ you send to a new equipment trading company is also,
          quietly, an evaluation of the company itself — before you have
          committed to a purchase order, a payment term or a delivery date
          you will later have to defend to your own project. Because the
          barrier to setting up as an equipment &ldquo;trader&rdquo; is low almost
          everywhere, the range of companies you can find with a simple
          search runs from long-established, properly resourced sourcing
          partners to single-person operations reselling a PDF catalogue.
          Telling them apart takes a handful of concrete checks, most of
          which can be done before you ever pick up the phone.
        </p>

        <h2 id="start-with-company-standing" className="mt-12 text-xl font-bold">Start with company standing, not the website</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A polished website is inexpensive to produce and tells you almost
          nothing about whether a company can actually deliver. What is
          harder to fake is a verifiable company registration — a chamber of
          commerce or trade registry number you can look up independently,
          a consistent registered address, and a trading history that is old
          enough to have survived at least one industry downturn. Ask
          directly for the company&rsquo;s registration number and registered
          address, and check that the name on the registration matches the
          name on the quotation and, eventually, the contract — a mismatch
          between the two is one of the simplest and most reliable signals
          that something is off before any money has moved.
        </p>

        <h2 id="ask-about-manufacturer-relationships" className="mt-12 text-xl font-bold">Ask how they relate to the manufacturer, not just what they sell</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A trading company that cannot explain, in plain terms, how it
          relates to the factory actually making your equipment is asking you
          to buy blind. That does not mean every quote needs to name the
          manufacturer up front — many legitimate trading companies keep
          that relationship confidential to protect a negotiated
          introduction — but it should be willing to confirm the country of
          manufacture, whether it holds an authorization letter or is an
          approved distributor for that manufacturer, and who will stand
          behind the equipment if it arrives non-conforming. A company that
          deflects every version of this question, or gives a different
          answer each time you ask, is telling you something about how it
          would handle a real dispute.
        </p>

        <h2 id="quality-credentials-that-actually-matter" className="mt-12 text-xl font-bold">Quality credentials that actually matter for oil &amp; gas</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Certifications are easy to list on a website and worth verifying
          rather than taking on trust. For the trading company itself, a
          current ISO 9001 quality management certificate is a reasonable
          baseline — ISO 9001:2015 at the time of writing, with a revised
          ISO 9001:2026 edition following on a multi-year transition
          timeline, so either edition number can appear on a valid
          certificate. What it actually tells you is that the company has
          documented processes for order handling, supplier evaluation and
          corrective action, even though it says nothing about the equipment
          itself. For the equipment, the relevant credential sits with the
          manufacturer, not the trader: ask whether the specific factory
          proposed holds API Spec Q1 (10th edition, 2023) if the item is
          API-monogrammed equipment, and whether third-party inspection and
          EN 10204 material certification are offered as standard or only as
          a costed extra. A trading company that can answer these questions
          precisely, rather than pointing generally at &ldquo;quality
          certificates,&rdquo; is one that actually understands what it is
          reselling. It is also worth asking for the certificate number and
          issuing certification body by name, rather than accepting a logo
          on a company profile — a genuine ISO 9001 certificate can be
          checked against the certification body&rsquo;s own public register in a
          few minutes, and a company confident in its credentials will not
          mind you doing so.
        </p>
        <CheckList
          items={[
            "Verifiable company registration number and registered address",
            "Willingness to confirm country of manufacture and the nature of the manufacturer relationship",
            "Current ISO 9001 certificate for the trading company's own quality system",
            "Clarity on whether the specific manufacturer holds API Spec Q1 where the item is API-monogrammed",
            "Third-party inspection and EN 10204 certification offered as a standard line item, not an afterthought",
            "A named point of contact who answers technical questions correctly, not just commercial ones",
          ]}
        />

        <h2 id="financial-and-operational-red-flags" className="mt-12 text-xl font-bold">Financial and operational red flags</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Beyond the paperwork, a handful of behavioural signals are worth
          weighing more heavily than any single certificate. A price that
          sits far below every other quote for an identical specification
          usually means a substituted material, a shortcut on testing, or a
          margin so thin the company cannot absorb a normal shipping delay
          without cutting a corner somewhere. Pressure for a large upfront
          payment before any proforma invoice, datasheet review or
          documentation has been exchanged is worth resisting regardless of
          how attractive the price looks. So is reluctance to provide any
          reference — even an anonymised one — from a past buyer in a
          comparable industry, or an inability to explain, without checking
          with someone else first, what Incoterms 2020 term is being quoted
          and what it actually obliges each side to do.
        </p>

        <h2 id="documents-before-any-deposit" className="mt-12 text-xl font-bold">Documents to ask for before any deposit</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Once you are ready to move from quotation to purchase order, a
          short list of documents will tell you more than another round of
          emails. A proper proforma invoice should show the company&rsquo;s full
          registered name, address and bank details, and those bank details
          should belong to the same legal entity that issued the quotation —
          a request to pay a different company or a personal account is one
          of the clearest warning signs in international trade generally,
          not just in oil and gas equipment. Ask, too, for a sample of the
          test certificate or inspection report format the manufacturer
          actually issues, rather than a generic template, so you know what
          to expect at delivery and can compare it against what arrives.
        </p>
        <CheckList
          items={[
            "Proforma invoice showing the full registered company name, address and bank details",
            "Bank account in the name of the contracting entity, not a different company or an individual",
            "A sample manufacturer test certificate or inspection report format, not a generic placeholder",
            "Clear Incoterm 2020 term and named delivery point on the proforma, not just on a separate email",
            "Payment terms that release funds against milestones (order confirmation, pre-shipment inspection, shipment) rather than 100% in advance",
          ]}
        />

        <h2 id="test-them-with-a-real-rfq" className="mt-12 text-xl font-bold">Test them with a real (but small) RFQ first</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The most reliable evaluation is not a conversation but an actual
          request for quotation, ideally for something with enough technical
          detail that a generic reseller cannot answer it from a catalogue
          alone. A company worth working with will ask clarifying questions
          about the specification before quoting, flag anything ambiguous or
          missing in your own enquiry, and return a quotation that matches
          what you asked for rather than a close substitute with the
          differences left unstated. One that returns a price within hours
          with no questions asked, for a specification detailed enough to
          need at least a few, is more likely reselling from a distributor
          price list without engineering review than sourcing and checking
          the offer against your actual requirement.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          It is worth using this first RFQ to check the small commercial
          details as well as the technical ones: whether the quotation
          states a validity period, whether the lead time is quoted from
          order confirmation or from receipt of an advance payment (these
          can differ by weeks), and whether packing and marking requirements
          for export are addressed without being asked. None of these are
          disqualifying on their own, but a company that gets most of them
          right on a first, unsolicited enquiry is usually one that has done
          this many times before, for buyers who asked exactly these
          questions.
        </p>

        <h2 id="how-they-handle-a-problem" className="mt-12 text-xl font-bold">How they handle a problem, not just a normal order</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Almost any trading company looks competent when an order goes
          smoothly. The more useful test, if you can arrange it before
          committing a large order, is asking how they would handle a
          problem: a certificate that arrives with the wrong revision, a
          manufacturer that slips a delivery date, or a shipment that fails
          an inspection point. A company with a real process will describe,
          specifically, who takes ownership of the issue, how they escalate
          with the manufacturer, and what they communicate to you and when.
          A vague answer — &ldquo;don&rsquo;t worry, that never happens with
          our suppliers&rdquo; — is itself useful information, since delays
          and non-conformances happen in this industry regardless of how
          good the sourcing partner is, and the honest answer is always
          about how the problem gets handled, not whether it ever occurs.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          It is also reasonable to ask, directly, what happens if the
          equipment arrives and does not meet the specification: whether the
          trading company will support you in a claim against the
          manufacturer, whether they hold any inspection or rejection
          authority before shipment, and whether their commercial terms with
          you are linked to the manufacturer&rsquo;s performance or independent of
          it. A company that has clearly thought through this scenario, even
          if it has never happened to them personally, is telling you they
          understand the risk they are being paid to manage.
        </p>

        <h2 id="what-good-looks-like-afterwards" className="mt-12 text-xl font-bold">What good looks like once you are working together</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The checks above are mostly about avoiding a bad outcome; it is
          worth also knowing what a strong ongoing relationship looks like
          once an order is placed. That typically means a single point of
          contact who tracks the order through manufacturing rather than
          going quiet between the purchase order and the shipping notice,
          proactive updates when a lead time slips instead of updates only
          when you ask, and the ability to consolidate several line items
          from different manufacturers into one shipment and one set of
          shipping documents. None of that shows up on a first quotation, but
          it is exactly what the vetting steps above are trying to predict
          before you commit to it.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Want a second opinion on a quote you have already received, or
          looking to test a sourcing partner with a real enquiry? Read our
          notes on{" "}
          <Link className="text-accent hover:underline" href="/blog/how-to-write-a-bill-of-quantities">
            writing a bill of quantities
          </Link>{" "}
          suppliers can actually quote against, or see how{" "}
          <Link className="text-accent hover:underline" href="/blog/third-party-inspection-tpi-oil-and-gas-equipment">
            third-party inspection
          </Link>{" "}
          fits into the same evaluation. Oillinko is an Istanbul-headquartered
          sourcing partner, and we would rather you judge us against the
          checklist above than take our word for it —{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your RFQ
          </Link>{" "}
          and see how we handle it.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
