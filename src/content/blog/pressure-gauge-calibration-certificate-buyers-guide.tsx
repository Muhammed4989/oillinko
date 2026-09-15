import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("pressure-gauge-calibration-certificate-buyers-guide")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  calibration: "https://www.wika.com/en-en/lp_calibration_of_measuring_instruments.WIKA",
  traceability: "https://www.nist.gov/metrology/metrological-traceability",
  decision: "https://ilac.org/?ddownload=122722",
  scope: "https://ilac.org/?ddownload=124300",
};
const faqs = [
  {
    q: "Does a calibration certificate mean the pressure gauge passed?",
    a: "Not automatically. A calibration report provides results under stated conditions. If a pass/fail statement is required, the applicable tolerance and decision rule must be defined, and the conclusion must apply to the identified instrument and reported results.",
  },
  {
    q: "What is the difference between as-found and as-left calibration results?",
    a: "As-found results describe the instrument before adjustment or repair; as-left results describe the condition returned after the work. Request both when changes are authorized, and ask the provider to explain any missing initial readings.",
  },
  {
    q: "Is a traceability statement enough to approve a gauge for use?",
    a: "No. Review the result, associated uncertainty and traceability evidence against the intended measurement need. Also verify the instrument range, configuration, applicable acceptance requirement and any limitations of the calibration.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        A pressure gauge calibration certificate is useful only when it answers
        the buyer&apos;s actual measurement question. A document can identify a
        gauge and list readings without showing whether those readings satisfy
        the project requirement. It can also describe an instrument after
        adjustment while leaving its earlier condition unclear. Before accepting
        a new gauge, a returned instrument or a calibration quotation, establish
        what the certificate must contain and who will assess its suitability.
      </p>
      <p className={paragraph}>
        This guide concerns the evidence accompanying pressure indication
        calibration. It is not a procedure for applying pressure, disconnecting
        process instruments or adjusting a gauge. Those activities depend on
        the actual equipment, approved methods and competent personnel. The
        procurement task is to define the instrument, required measurement
        coverage and reporting basis so the laboratory can quote a suitable
        service and the receiving team can review the result.
      </p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={630}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-xl border border-line"
          alt="An explanatory calibration record separates instrument identity, measurement results and the agreed basis for an acceptance decision." />
        <figcaption className="mt-3 text-sm text-muted">A review map, not a calibration certificate. No actual measurements or accreditation claims are shown.</figcaption>
      </figure>

      <h2 id="identify-calibrated-instrument" className={heading}>Match the certificate to the instrument and configuration</h2>
      <p className={paragraph}>
        Compare manufacturer, model, serial number, plant tag, indicated range
        and units with the delivered instrument. State whether the requirement
        concerns gauge, absolute or differential pressure, and identify relevant
        accessories or assemblies. For example, a gauge supplied with a diaphragm
        seal should have a clearly defined calibration boundary. Ask whether
        the report covers the assembled system or the indicating instrument alone;
        do not infer that boundary from a photograph of the dial.
      </p>
      <p className={paragraph}>
        If multiple gauges share a model and range, each report still needs
        a reliable connection to the particular item. A stock code does not
        replace serial identification. Request an instrument list before shipment
        and resolve missing or conflicting identifiers. When purchasing a new
        unit, use the <Link className={link} href="/oil-and-gas/equipment/instrumentation-control/pressure-gauges-and-transmitters">pressure gauge and transmitter requirements page</Link>{" "}to
        specify the equipment separately from the calibration deliverable. A
        transmitter&apos;s electrical output or complete control loop requires
        its own stated measurement scope.
      </p>

      <h2 id="calibration-adjustment-history" className={heading}>Keep calibration and adjustment history separate</h2>
      <p className={paragraph}>
        WIKA&apos;s <a className={link} href={sources.calibration} target="_blank" rel="noopener noreferrer">explanation of pressure instrument calibration</a>{" "}distinguishes
        comparison with a reference instrument from adjustment. That distinction
        affects the purchase order: asking for calibration should not leave the
        provider guessing whether it may change the instrument. Specify whether
        adjustment is permitted, whether repair requires separate approval and
        which initial readings must be retained. A quotation should also explain
        what is reported if the received gauge cannot be calibrated in its
        existing condition.
      </p>
      <p className={paragraph}>
        Request as-found results before authorized changes and as-left results
        afterward. If the provider makes no adjustment, ask for that fact to
        be stated. When an instrument is found outside its specified limits,
        the earlier condition may matter to measurements already made with it.
        Route that finding to the responsible quality or engineering team for
        assessment. A satisfactory result after adjustment does not retrospectively
        establish that earlier plant readings or factory test measurements were acceptable.
      </p>

      <h2 id="points-units-and-errors" className={heading}>Read the measurement table before the conclusion</h2>
      <p className={paragraph}>
        Agree the calibration points, units, measurement directions and any
        required repetitions with the technical reviewer and laboratory. Include
        the relevant working region, while respecting the applicable procedure
        and instrument range. Ask the report to identify the method and relevant
        test conditions. A single satisfactory reading should not be extended
        to an unexamined range. Likewise, a room-temperature comparison does not
        by itself establish the instrument&apos;s performance under every possible
        process temperature, vibration or installation condition.
      </p>
      <p className={paragraph}>
        Distinguish the reference value, instrument indication and reported error
        or correction. In a purely illustrative example, a reference value of
        10.00 bar and an indication of 10.06 bar give an indication-minus-reference
        error of +0.06 bar. A correction may use the opposite sign, so read
        the report&apos;s convention. This arithmetic says nothing about whether
        the gauge passes. That decision still needs the applicable tolerance,
        measurement uncertainty and agreed assessment rule. Do not confuse a
        percentage of full scale with a percentage of the reading.
      </p>

      <h2 id="traceability-and-uncertainty" className={heading}>Treat traceability and uncertainty as connected evidence</h2>
      <p className={paragraph}>
        <a className={link} href={sources.traceability} target="_blank" rel="noopener noreferrer">NIST&apos;s metrological traceability policy and FAQ</a>{" "}explain
        that traceability belongs to a measurement result, supported by a
        documented chain of calibrations with associated uncertainties. A label
        saying NIST traceable is therefore not a complete explanation of the
        result&apos;s quality. Ask for the stated reference basis and supporting
        information in the report. NIST also makes clear that traceability alone
        does not guarantee fitness for the intended measurement purpose.
      </p>
      <p className={paragraph}>
        Review the reported uncertainty with the person responsible for the
        measurement requirement. Check its units and whether the certificate
        explains the coverage factor or probability associated with an expanded
        uncertainty. An uncertainty statement and a manufacturer&apos;s accuracy
        specification describe different things; neither should silently replace
        the other in an acceptance comparison. If the proposed calibration cannot
        provide sufficiently useful results for the intended duty, resolve that
        limitation before ordering the service rather than after the report arrives.
      </p>

      <h2 id="scope-and-decision-rule" className={heading}>Verify the laboratory scope and agree the decision rule</h2>
      <p className={paragraph}>
        If accredited calibration is required, verify the provider&apos;s current
        scope through the issuing accreditation body. Confirm that the relevant
        pressure measurement, method, range and capability are covered, and
        clarify the proposed work location. <a className={link} href={sources.scope} target="_blank" rel="noopener noreferrer">ILAC G18:01/2024, Appendix A</a>{" "}explains
        scope descriptions for calibration laboratories. A general accreditation
        certificate does not establish that every service offered by the business
        falls within that scope. Ask the quotation to identify any work supplied
        outside it or through another laboratory.
      </p>
      <p className={paragraph}>
        When a pass/fail statement is needed, name the acceptance specification
        and agree how uncertainty affects the conclusion. <a className={link} href={sources.decision} target="_blank" rel="noopener noreferrer">ILAC G8:09/2019</a>{" "}addresses
        decision rules and statements of conformity, including agreement with
        the customer where the rule is not inherent in the requested specification.
        Ask the laboratory to identify the rule used and which results the
        statement covers. A certificate carrying measured values without a
        conformity statement may still need a separate customer assessment;
        do not turn the absence of a failure label into approval.
      </p>

      <h2 id="calibration-rfq-and-handover" className={heading}>Specify the report before booking the work</h2>
      <p className={paragraph}>
        Include the instrument register, required date, calibration coverage,
        permitted adjustments, accreditation requirement and report format in
        the enquiry. State whether receiving inspection or purchaser witnessing
        is required; the <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>third-party inspection guide</Link>{" "}helps
        define those responsibilities. For instruments supporting a factory
        test, connect the certificate to the test equipment register and the
        relevant <Link className={link} href={postUrl(getPost("pump-factory-acceptance-testing-and-commissioning-checklist")!)}>factory acceptance test documentation</Link>.
        Establish any recalibration due date through the owner&apos;s approved
        instrument-management requirements, not an assumed universal annual interval.
      </p>
      <p className={paragraph}>
        At handover, retain the complete report and any corrected revision,
        including limitations and the record of authorized changes. Resolve
        differences between the quoted scope and delivered evidence before
        closing the order. Send the instrument list and reporting requirements
        through Oillinko&apos;s <Link className={link} href="/oil-and-gas/services/calibration-and-instrument-repair">calibration and instrument repair enquiry page</Link>{" "}or
        <Link className={link} href="/rfq"> submit a calibration RFQ</Link>.
        Oillinko reviews the enquiry and coordinates it manually with suitable
        providers. The selected laboratory, covered scope and commercial terms
        are confirmed for the requirement; this guide does not claim that
        Oillinko operates an accredited calibration laboratory.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
