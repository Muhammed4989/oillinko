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

const post = getPost("what-an-oil-gas-equipment-sourcing-partner-actually-does")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Does a sourcing partner replace my own engineering review?",
    a: "No. A sourcing partner's technical review is meant to catch obvious spec deviations early and filter out a poor-fit quote before it reaches you — it complements your own engineering sign-off rather than replacing it. Final technical acceptance of the equipment, and the decision to approve a vendor for the order, normally stay with your own team throughout.",
  },
  {
    q: "Do sourcing partners only work with buyers placing large orders?",
    a: "No — one of the main reasons smaller or mixed-category buyers use a sourcing partner is that pooling their order with other demand can make a manufacturer's minimum order quantity workable, when going direct for the same small quantity would not be.",
  },
  {
    q: "Who holds the warranty on the equipment — the sourcing partner or the manufacturer?",
    a: "In most arrangements, the manufacturer that built the equipment remains the party providing the warranty on it. A sourcing partner's role is coordination, vetting and quality-gating through the order and shipment process, not substituting for the manufacturer's own product warranty.",
  },
  {
    q: "Can I ask a sourcing partner to use an inspection agency I already work with?",
    a: "In most cases, yes — buyers can typically specify a preferred third-party inspection agency, and the sourcing partner coordinates the booking and witnessing schedule around it rather than substituting their own default choice. Where a buyer has no preference, the sourcing partner arranges an appropriately accredited agency instead.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          &quot;Send us your RFQ&quot; makes the process sound simple, and for
          the buyer it largely is — but a sourcing partner&apos;s real work
          happens both before that message is sent and after the quotes come
          back. For a buyer, the visible part of using a sourcing partner is
          usually just two moments: sending the specification, and
          receiving a shortlist of comparable quotes. Everything that turns
          the first into the second is where the actual work sits. This
          article walks through what happens in between: vendor vetting,
          circulating and comparing quotes, technical review against the
          specification, inspection coordination, and freight and Incoterms
          handling.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Understanding where this work actually sits also helps set
          expectations correctly. A sourcing partner is not simply a
          reseller adding a markup to a manufacturer&apos;s price — the tasks
          below are what that margin is meant to cover, and a buyer
          weighing whether to use one is really weighing whether these
          specific tasks are worth outsourcing for a given order, rather
          than judging &quot;using a middleman&quot; as good or bad in the
          abstract.
        </p>

        <h2 id="vendor-vetting-before-the-rfq-ever-goes-out" className="mt-12 text-xl font-bold">
          Vendor vetting before the RFQ ever goes out
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Before a manufacturer is added to the list of factories a
          sourcing partner will send an RFQ to, its quality certifications
          get checked and re-checked periodically — an ISO 9001 quality
          management certificate, and where the specification calls for it,
          a current{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/api-monogram-and-apiqr"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Monogram
          </a>{" "}
          license, which API only grants to manufacturers operating a
          quality management system meeting API Spec Q1. Vetting also
          covers a manufacturer&apos;s actual export track record — has this
          factory shipped this class of equipment to a similar destination
          and incoterm before, or would this order be its first attempt —
          and a rough check that its current production backlog is
          consistent with the lead time the order needs. None of this is a
          one-time check either: certifications lapse, factories change
          ownership, and a quality system that was solid two years ago can
          slip without a buyer 5,000 kilometres away ever finding out until
          the goods arrive.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          This is also where a sourcing partner&apos;s value compounds over
          time rather than resetting with every order. A buyer contacting a
          new factory for the first time is starting vendor vetting from
          zero; a sourcing partner that already maintains a working
          relationship with that factory across multiple clients has
          usually already answered most of these questions, and keeps
          re-checking them as a matter of course rather than only when a
          new order happens to raise the question.
        </p>

        <h2 id="turning-one-rfq-into-several-comparable-quotes" className="mt-12 text-xl font-bold">
          Turning one RFQ into several comparable quotes
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Instead of a buyer rewriting the same{" "}
          <Link className="text-accent hover:underline" href="/blog/how-to-write-a-bill-of-quantities">
            bill of quantities
          </Link>{" "}
          and chasing three or four manufacturers separately, one RFQ is
          issued once and circulated in parallel to several pre-vetted
          factories. The value here is less about the number of quotes and
          more about comparability: a sourcing partner pushes back on
          vendors who quietly change an assumption — a different schedule,
          a substituted material grade, a shorter warranty — so that the
          quotes landing on the buyer&apos;s desk describe the same thing and
          can actually be compared on price and delivery, rather than
          requiring the buyer to reverse-engineer what each vendor actually
          meant.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          This step also filters out manufacturers that, on paper, could
          make the item but are a poor practical fit for this particular
          order — a factory whose current backlog would blow the delivery
          date, or one that has never built to the exact material or
          testing combination the spec calls for. Screening those out
          before a quote is even requested saves the buyer from wading
          through offers that were never going to be viable in the first
          place.
        </p>

        <h2 id="technical-review-of-quotes-against-the-spec" className="mt-12 text-xl font-bold">
          Technical review of quotes against the spec
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Every returned quote gets checked line by line against the
          original specification — not just price and delivery date, but
          material grade, pressure class, and testing and certification
          requirements. This is where a quote quietly offering an{" "}
          <Link className="text-accent hover:underline" href="/blog/en-10204-material-certificates-explained">
            EN 10204 2.2 test report
          </Link>{" "}
          where the RFQ specified a 3.1 certificate gets caught before a
          purchase order is placed, rather than after the goods arrive
          without the certification the end user actually needs. The same
          review catches quieter substitutions too — a lighter wall
          thickness offered against the same nominal pipe size, or a
          shorter hydrostatic test duration than the specification calls
          for — the kind of deviation that is easy to miss when a buyer is
          comparing five quotes on price and delivery alone, and that a
          reviewer checking each line against the original spec is
          specifically looking for.
        </p>

        <h2 id="inspection-and-witnessing-coordination" className="mt-12 text-xl font-bold">
          Inspection and witnessing coordination
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Where the order calls for a{" "}
          <Link className="text-accent hover:underline" href="/blog/third-party-inspection-tpi-oil-and-gas-equipment">
            third-party inspection
          </Link>
          , a sourcing partner books it and schedules the witnessing level —
          witness, monitor or document review — around the factory&apos;s
          actual test date, rather than leaving the buyer to chase the
          factory for a test date and then separately chase an inspection
          agency to be available for it. Inspection bodies used for this
          kind of work are typically accredited to ISO/IEC 17020, the
          international standard covering the competence, impartiality and
          consistent operation of bodies performing inspection.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Scheduling this well matters more than it sounds: a factory
          acceptance test is usually a fixed slot in a manufacturer&apos;s
          own production schedule, and an inspection agency booked too
          late, or asked to witness at short notice, can end up being the
          reason a delivery slips by weeks rather than the manufacturing
          itself. Coordinating the two calendars — the factory&apos;s test
          date and the inspector&apos;s availability — is a small logistics
          task that otherwise falls entirely on the buyer.
        </p>

        <h2 id="freight-incoterms-and-logistics-handling" className="mt-12 text-xl font-bold">
          Freight, Incoterms and logistics handling
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Where an order draws on more than one manufacturer, a sourcing
          partner can consolidate the cargo into a single shipment rather
          than the buyer receiving and clearing several separate
          consignments. This also means managing what the agreed{" "}
          <a
            className="text-accent hover:underline"
            href="https://iccwbo.org/business-solutions/incoterms-rules/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Incoterms® 2020
          </a>{" "}
          rule actually obliges each side to do — who insures the cargo,
          who clears it through customs, and at which point risk passes
          from seller to buyer — and coordinating packing and export
          documentation across vendors so it arrives as one consistent set
          of paperwork instead of several mismatched ones — packing lists,
          certificates of origin and export declarations that match each
          other rather than being reconciled by the buyer after the cargo
          has already left.
        </p>

        <h2 id="what-this-leaves-the-buyer-to-do" className="mt-12 text-xl font-bold">
          What this leaves the buyer to do
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          None of the above replaces the buyer&apos;s own judgment — it removes
          the operational load around it. Vendor vetting, quote comparison,
          technical review, inspection scheduling and freight coordination
          all move to the sourcing partner&apos;s side of the table. What
          stays firmly on the buyer&apos;s side is smaller in volume but more
          important in weight:
        </p>
        <CheckList
          items={[
            "Defining the technical specification and bill of quantities in the first place",
            "Approving the final vendor selection once comparable quotes are in hand",
            "Signing off on the purchase order and payment terms",
            "Final technical acceptance of the equipment on arrival",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          If you would rather not chase vendor certifications, reconcile
          mismatched quotes and schedule inspections across several
          factories yourself,{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send Oillinko your RFQ or bill of quantities
          </Link>
          , and we will circulate it to verified manufacturers, review the
          returned quotes against your specification, and coordinate
          inspection and shipment as a single point of contact. For the
          broader question of when this approach makes more sense than
          contacting a manufacturer yourself, see{" "}
          <Link
            className="text-accent hover:underline"
            href="/blog/equipment-trading-companies-vs-buying-direct"
          >
            equipment trading companies vs. buying direct
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
