import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("positive-material-identification-xrf-oes-buyers-guide")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  methods: "https://www.thermofisher.com/blog/metals/?p=10527",
  oes: "https://hha.hitachi-hightech.com/en/blogs-events/blogs/2018/09/25/oes-the-fastest-and-best-choice-to-meet-specifications-for-low-alloy-steels/",
  verification: "https://www.thermofisher.com/blog/metals/why-pmi-positive-material-identification/",
};
const faqs = [
  {
    q: "Can handheld XRF confirm that a component is 316L?",
    a: "It can provide evidence about measurable alloying elements, but handheld XRF does not measure the carbon needed to verify the low-carbon designation. Agree an appropriate carbon-capable method and the required documentation when carbon verification is part of the purchase specification.",
  },
  {
    q: "Does a PMI report replace an EN 10204 inspection certificate?",
    a: "No. A PMI result records an identified measurement and its scope. An inspection certificate covers the product and specified test results within its own scope. Keep both tied to the correct item, and ask the responsible reviewer to assess any missing evidence before release.",
  },
  {
    q: "Should every component receive PMI?",
    a: "The extent must come from the project material-verification requirements. Define the component population, examination stage, sampling or full-coverage basis, and treatment of exceptions before comparing quotations. Do not substitute a supplier's usual sample rate for the owner's required scope.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        Positive material identification, usually shortened to PMI, uses elemental
        analysis to help verify that a metal is consistent with the specified alloy.
        For an equipment buyer, the useful question is whether the proposed test
        can produce the evidence needed to accept the actual component. A quotation
        that says only &ldquo;PMI included&rdquo; leaves the method, coverage and
        reporting basis unresolved. Two suppliers can use that same phrase while
        allowing for substantially different work.
      </p>
      <p className={paragraph}>
        This guide focuses on ordering inspection for metallic pressure components,
        such as flanges, fittings and valve parts. It compares handheld X-ray
        fluorescence, or XRF, with spark optical emission spectroscopy, or OES,
        and explains what to settle before a purchase order is placed. It is
        procurement guidance: instrument operation, test procedures and acceptance
        decisions belong to the qualified parties responsible for the project.
      </p>

      <figure className="mt-8">
        <Image src={post.image} alt="Three separate parts of material acceptance: chemical analysis, component identity and the project specification."
          width={1200} height={630} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" />
        <figcaption className="mt-3 text-sm text-muted">PMI measurements need a traceable component identity and an agreed acceptance basis. Original explanatory illustration; no test results are shown.</figcaption>
      </figure>

      <h2 id="what-pmi-proves" className={heading}>What positive material identification can prove</h2>
      <p className={paragraph}>
        A chemical measurement answers a narrower question than complete material
        acceptance. It reports the elements measured at a particular location by a
        particular method. It does not, by itself, demonstrate dimensions, mechanical
        properties, heat treatment, pressure integrity or suitability for a process
        service. Keep those requirements in the inspection plan instead of treating
        a familiar alloy name on the analyzer display as a universal pass certificate.
        The <Link className={link} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>guide to EN 10204 inspection documents</Link> explains
        the separate role of the supplied material records.
      </p>
      <p className={paragraph}>
        PMI is particularly useful where material could have been mixed or its
        identification lost during handling and fabrication. Thermo Fisher describes
        such failure routes in its <a className={link} href={sources.verification} target="_blank" rel="noopener noreferrer">explanation of why material verification is needed</a>.
        For a purchasing enquiry, translate that concern into a clear list of items
        and stages. Checking loose fittings before assembly answers a different
        question from checking selected accessible locations on a completed spool.
        Record which question the inspection is intended to resolve.
      </p>

      <h2 id="xrf-carbon-limitation" className={heading}>XRF: useful alloy identification, with a carbon limitation</h2>
      <p className={paragraph}>
        Handheld XRF identifies measurable elements through their characteristic
        X-ray response. It is useful for checking alloying elements such as chromium,
        nickel and molybdenum. However, it does not measure carbon. A result consistent
        with a 316 alloy therefore cannot establish its low-carbon or high-carbon
        designation from that measurement alone. Thermo Fisher makes this distinction
        explicitly in its <a className={link} href={sources.methods} target="_blank" rel="noopener noreferrer">comparison of PMI technologies</a>.
      </p>
      <p className={paragraph}>
        Before accepting an XRF-only proposal, identify the elements that determine
        acceptance. Ask the inspector to state which are measured, which are outside
        the method&apos;s scope, and how any remaining requirement will be addressed.
        This prevents a grade-library match being mistaken for complete verification
        of every chemical limit in the material specification. It also gives buyers
        a concrete basis for comparing an alternative testing proposal.
      </p>

      <h2 id="oes-and-other-methods" className={heading}>When to consider OES or another carbon-capable method</h2>
      <p className={paragraph}>
        Spark OES can measure carbon and other elements relevant to steel grade
        verification when the instrument, calibration and analytical range are
        appropriate. Hitachi High-Tech discusses the role of spark OES and argon
        in <a className={link} href={sources.oes} target="_blank" rel="noopener noreferrer">analysis of carbon and low-alloy steels</a>.
        Specify the required elements and concentrations to the provider rather than
        assuming every OES unit covers every alloy. The ability to detect an element
        is different from demonstrating a suitable measurement capability near the
        project&apos;s acceptance limit.
      </p>
      <p className={paragraph}>
        Surface preparation, permitted test locations, access and any resulting
        surface marking need agreement before work starts. Ask the provider to
        describe these in its procedure and price the necessary arrangements.
        Some handheld laser-induced breakdown spectroscopy, or LIBS, instruments
        also measure carbon; the manufacturer comparison above identifies this
        option. Treat it as a model-specific proposal to assess against the required
        scope, rather than assuming all handheld analyzers have the same capability.
      </p>

      <h2 id="define-inspection-population" className={heading}>Define the inspection population before the price</h2>
      <p className={paragraph}>
        Start with a component schedule that identifies the purchase-order line,
        material specification, grade and quantity. For an assembly, distinguish
        the body, cover, trim, fasteners and welds wherever the project requires
        separate verification. State the inspection stage and available access.
        &ldquo;One valve&rdquo; is a purchasing unit, but it does not tell an
        inspection provider how many distinct material locations the owner expects
        to be checked. Resolve that ambiguity before asking for a unit rate.
      </p>
      <p className={paragraph}>
        Then document whether the project requires full coverage or an approved
        sampling plan. A percentage is incomplete without the population it applies
        to and the rules for selecting items. Assign responsibility for inaccessible
        locations, inconclusive readings and mismatches, including who can authorize
        further testing or release. These are matters for the project&apos;s approved
        material-verification programme; this article does not prescribe a universal
        sampling rate or acceptance tolerance. Include the applicable specification
        revision and any required standard edition in the enquiry.
      </p>
      <aside className="mt-6 rounded-xl border border-line bg-oil-800 p-6" aria-label="Illustrative PMI enquiry wording">
        <h3 className="font-semibold">Illustrative enquiry wording</h3>
        <p className={paragraph}>
          Please quote material verification against the attached component schedule
          and project inspection requirements. Identify the proposed analytical
          method, measurable elements, coverage, test stage, acceptance basis and
          reporting format. State exclusions, access and preparation needs, witness
          arrangements, and the process for reporting an inconclusive or nonconforming
          result. List any additional cost requiring purchaser approval.
        </p>
      </aside>

      <h2 id="traceable-pmi-report" className={heading}>Ask for a report that can be tied to the delivered item</h2>
      <p className={paragraph}>
        A useful deliverable lets a reviewer move from the packing list to the
        component and then to its measurement record. Request the component or tag
        identifier, heat or batch reference where applicable, marked test location,
        examination date, method and instrument identification. Ask for the reported
        elemental results and their units, relevant verification records, the
        acceptance basis and the reviewer&apos;s disposition. A generic statement
        that a lot &ldquo;passed PMI&rdquo; is difficult to reconcile when individual
        parts are separated across shipments.
      </p>
      <p className={paragraph}>
        Agree how identifiers survive cutting, machining, coating, packing and
        consolidation wherever those operations are in the supply scope. If a
        mismatch is found, keep its record linked to the affected item and its final
        disposition. Do not simply replace the material description with the
        analyzer&apos;s suggested grade. Any substitution needs the project&apos;s
        technical approval route. Our <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>guide to third-party equipment inspection</Link> covers
        the broader coordination of witnessing, review and release responsibilities.
      </p>

      <h2 id="compare-pmi-quotations" className={heading}>Compare complete inspection scopes, then send the RFQ</h2>
      <p className={paragraph}>
        Compare offers using the same component population and deliverables. Ask
        whether the price includes mobilization, preparation, access arrangements,
        witnessing, reporting and an agreed allowance for retesting. Separate
        predictable scope costs from work requiring later authorization. The lowest
        per-reading price may cover fewer locations or a less useful report; the
        buyer needs to understand those differences before selecting an offer.
        A sample report can reveal missing fields while changes are still easy.
      </p>
      <p className={paragraph}>
        Send Oillinko the equipment list, requested materials and inspection
        specification together so the enquiry can be reviewed on a consistent basis.
        Use the <Link className={link} href="/oil-and-gas/services/inspection-engineering">inspection and engineering requirements page</Link> to
        define the service scope, or <Link className={link} href="/rfq">submit the equipment and PMI requirements for sourcing review</Link>.
        An enquiry reaches Oillinko for manual coordination; the actual provider,
        available method, commercial scope and supporting documents are confirmed
        for the requirement. Naming a technique here does not imply that Oillinko
        operates an inspection laboratory or holds a testing accreditation.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
