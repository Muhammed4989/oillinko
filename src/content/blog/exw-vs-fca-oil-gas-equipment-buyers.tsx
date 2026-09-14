import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("exw-vs-fca-oil-gas-equipment-buyers")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  rules: "https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_04_RulesAny.htm",
  comparison: "https://academy.iccwbo.org/incoterms/article/incoterms-2020-exw-or-fca/",
  scope: "https://www.trade.gov/know-your-incoterms",
};
const faqs = [
  {
    q: "Does an FCA quotation include delivery to our project site?",
    a: "Only if that is the actual agreed FCA delivery place and the arrangement fits the rule. FCA at a supplier's factory does not include onward delivery to your site. Identify the precise handover point and price the remaining journey separately.",
  },
  {
    q: "Is the country beside an FCA address the equipment's origin?",
    a: "No. A dispatch warehouse or handover address does not establish where the product was manufactured. Request manufacturing origin and any required supporting documents separately for the supplied items.",
  },
  {
    q: "Does changing EXW to FCA settle payment and warranty terms?",
    a: "No. Record payment milestones, warranty scope, acceptance requirements and other commercial conditions separately. Ask the supplier for a revised written quotation showing the chosen rule, named place, edition and any agreed variations.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        An EXW vs FCA comparison starts with the point at which the buyer takes
        responsibility for the equipment. A lower equipment price can leave more
        collection work outside the supplier&apos;s scope. Before comparing offers
        for pumps, valves or instruments, establish who will load the shipment,
        arrange export formalities and coordinate the next transport leg. The
        delivery abbreviation is useful only when the named place and the
        practical arrangements are clear.
      </p>
      <p className={paragraph}>
        This guide explains the buying questions behind those terms under
        Incoterms® 2020. It is intended for traders and project procurement teams
        evaluating equipment quotations, including orders collected by their own
        freight forwarder. The examples are illustrative enquiry situations,
        not completed Oillinko projects. Use the comparison to request a complete
        commercial scope, then have the parties responsible for the transaction
        confirm the final contract and applicable export requirements.
      </p>

      <figure className="mt-8">
        <Image src={post.image} width={1200} height={630}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-xl border border-line"
          alt="Quotation review sequence: confirm the equipment, define the handover, then price the remaining journey." />
        <figcaption className="mt-3 text-sm text-muted">Compare offers against one equipment specification and one destination. Original Oillinko buyer-planning illustration.</figcaption>
      </figure>

      <h2 id="exw-vs-fca-handover" className={heading}>EXW vs FCA: what changes at handover?</h2>
      <p className={paragraph}>
        Under EXW, or Ex Works, delivery normally occurs when the goods are placed
        at the buyer&apos;s disposal at the agreed point, without loading the
        collecting vehicle. Export clearance is the buyer&apos;s responsibility
        where applicable. ICC&apos;s <a className={link} href={sources.rules} target="_blank" rel="noopener noreferrer">EXW explanatory notes and rules</a>{" "}also
        highlight loading risk: a supplier using its own forklift does not, by
        that fact alone, resolve who bears the risk during loading. Clarify any
        such arrangement expressly.
      </p>
      <p className={paragraph}>
        FCA, or Free Carrier, assigns export clearance to the seller. At the
        seller&apos;s premises, delivery occurs after loading onto the transport
        arranged by the buyer. At another agreed location, delivery occurs with
        the goods on the seller&apos;s arriving vehicle, ready for unloading and
        available to the nominated carrier or person. The <a className={link} href={sources.comparison} target="_blank" rel="noopener noreferrer">ICC Academy comparison of EXW and FCA</a>{" "}explains
        these two arrangements. Both rules can be used with different transport
        modes; the actual handover point matters more than whether the shipment
        eventually travels by sea, road or air.
      </p>

      <h2 id="name-the-delivery-point" className={heading}>Name an actual delivery point</h2>
      <p className={paragraph}>
        Write the rule, precise location and edition together. An enquiry can
        request FCA at the supplier&apos;s dispatch warehouse, with the complete
        address and collection point to be confirmed, under Incoterms® 2020.
        Resolve those placeholders in the accepted quotation. A country name,
        city or port alone can leave several possible facilities in play. Ask
        which entrance or receiving area the carrier will use and which contact
        can confirm the collection appointment.
      </p>
      <p className={paragraph}>
        For example, consider a pump package offered FCA at a factory and another
        offered FCA at a forwarder&apos;s terminal. List the factory-to-terminal
        movement separately when comparing them. Check the terminal&apos;s
        unloading and receiving arrangements before booking the next leg. This
        recommendation follows from the different handover points; it does not
        mean that every terminal charge is included in a supplier&apos;s offer.
        Ask for inclusions and exclusions against the actual facility.
      </p>

      <h2 id="compare-shipment-scope" className={heading}>Compare the complete shipment scope</h2>
      <p className={paragraph}>
        Build a comparison sheet around the same equipment configuration,
        quantity, delivery destination and readiness assumptions. Enter the
        supplier&apos;s quoted amount first, followed by each cost outside its
        scope. Obtain transport estimates using packed dimensions and gross
        weights. Record the date, currency and validity of each estimate, and
        leave unconfirmed charges visibly open. An empty cell should not silently
        become a zero when someone totals the offers.
      </p>
      <p className={paragraph}>
        Include collection handling, inland transport, export services where
        needed, onward freight, destination handling and final delivery in that
        review. Ask the responsible broker to assess duties and taxes for the
        specific goods and route. Separate confirmed prices from allowances.
        Keep insurance explicit too: neither EXW nor FCA obliges the seller to
        arrange cargo insurance for the buyer under the <a className={link} href={sources.rules} target="_blank" rel="noopener noreferrer">ICC rules&apos; insurance provisions</a>.
        Confirm the insured journey and handover with the insurance provider.
      </p>
      <p className={paragraph}>
        Payment, ownership transfer and remedies for late delivery need their own
        terms. The US International Trade Administration&apos;s <a className={link} href={sources.scope} target="_blank" rel="noopener noreferrer">explanation of what Incoterms cover</a>{" "}distinguishes
        these matters from the delivery rules. In your bid comparison, give
        advance-payment requirements and quotation validity separate rows. A
        commercially acceptable delivery arrangement can still accompany a
        payment schedule that does not fit the purchasing company&apos;s approval
        process. Resolve both before issuing the order.
      </p>

      <h2 id="equipment-packing" className={heading}>Specify packaging around the equipment</h2>
      <p className={paragraph}>
        Ask the manufacturer to describe the proposed packing against the
        equipment and journey. For a valve order, request package identification
        that maps each crate to the valve list and any loose actuators or
        accessories. For instruments, identify separately packed mounting parts
        and documents. For a pump package, request the manufacturer&apos;s packed
        dimensions, handling information and storage requirements. These are
        different purchasing questions even when all three offers use the same
        delivery rule.
      </p>
      <p className={paragraph}>
        Explain whether the goods will move directly to installation or remain
        in storage. Ask the supplier to confirm the suitability and duration of
        its proposed protection, including any actions required during storage.
        Do not prescribe a generic preservation method from a shipping
        abbreviation. If the route changes, send the revised conditions back
        for review. Keep the approved packing description with the order so a
        later freight quotation refers to the same cargo arrangement.
      </p>

      <h2 id="release-and-documents" className={heading}>Agree release and document responsibilities</h2>
      <p className={paragraph}>
        Ask what the supplier means by ready: manufacture complete, inspection
        accepted, packed for collection, or released after payment. Put the
        required milestones on the same schedule. If the project requires a
        witnessed test or document review before dispatch, confirm the notice
        period and authorized release contact. The <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>guide to third-party equipment inspection</Link>{" "}helps
        define those inspection responsibilities separately from transport
        booking. A carrier appointment is not evidence of technical acceptance.
      </p>
      <p className={paragraph}>
        Prepare a document register identifying each required record, its issuer
        and the date it is needed. Connect the packing list to purchase-order
        lines and package numbers; connect technical records to the supplied
        equipment. Request manufacturing origin independently of the dispatch
        address. A warehouse location does not establish the product&apos;s origin.
        For pressure components, the <Link className={link} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 material-document guide</Link>{" "}explains
        why the specified inspection document and traceability need attention
        beyond the commercial invoice.
      </p>
      <p className={paragraph}>
        Confirm the export process with the seller and appointed logistics
        parties before accepting an EXW arrangement for an international order.
        ICC Academy recommends considering FCA where export responsibilities
        create difficulties for the buyer. The appropriate choice depends on
        what the parties can actually perform. Record who will provide the
        necessary product information, who will submit declarations and who will
        resolve missing documents. Avoid relying on an assumption that the
        forwarder will discover and fix every gap after collection.
      </p>

      <h2 id="delivery-rfq" className={heading}>Turn the comparison into a clear RFQ</h2>
      <p className={paragraph}>
        Send suppliers one delivery brief alongside the technical equipment
        list. State your requested rule and named point, destination, required
        date, anticipated storage and documentation requirements. Invite
        suppliers to identify exceptions and price an alternative arrangement
        separately. Ask whether the lead time runs from order acceptance,
        payment or drawing approval. This makes a revised quotation easier to
        compare without changing the underlying technical requirement each time
        a transport option changes.
      </p>
      <p className={paragraph}>
        When several vendors are involved, review each purchase contract&apos;s
        handover before combining shipments. The <Link className={link} href={postUrl(getPost("consolidated-shipments-and-multi-vendor-orders")!)}>article on multi-vendor shipment consolidation</Link>{" "}covers
        the broader coordination question. For an enquiry, use Oillinko&apos;s <Link className={link} href="/oil-and-gas/services/freight-expediting-and-project-logistics">freight, expediting and project logistics requirements page</Link>,
        then <Link className={link} href="/rfq">send the equipment list and delivery brief</Link>.
        Requests come to Oillinko for manual review and coordination. The
        responding provider, available scope and commercial terms are confirmed
        for the particular requirement.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
