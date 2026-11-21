import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("sil-rated-instruments-valves-rfq-safety-manual-certificate-proof-test-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A &quot;SIL 2 transmitter&quot; or &quot;SIL 3 valve&quot; RFQ is incomplete until it names the safety function the item serves, the evidence you require (assessment report, certificate and safety manual, each tied to the exact model and firmware or revision), the failure modes and the proof-test requirement, and the records the supplier must deliver. A SIL label on a datasheet is a claim; the supporting documents are what you can actually check.</p>
      <p className={p}>This guide is for procurement and instrument or safety engineers buying field devices and final elements (transmitters, switches, solenoid valves, actuated valves) for safety instrumented functions. It is a documentation and enquiry checklist. SIL targets, architecture, voting, proof-test intervals and the safety requirement specification belong to the functional safety engineer and the end user; this guide does not set or calculate them.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a SIL-rated device RFQ built from safety function, evidence, failure data, proof test and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five things to fix before comparing quotations for safety-rated devices.</figcaption>
      </figure>
      <h2 id="what-sil-means" className={h}>What does a SIL claim on a device actually cover?</h2>
      <p className={p}>The IEC 61508 family covers functional safety of electrical, electronic and programmable electronic safety-related systems, and IEC 61511 applies it to process-industry safety instrumented systems. A device&apos;s SIL capability is not the SIL of your safety function: the function&apos;s integrity depends on the whole loop, its architecture and its proof testing, which the end user and system integrator engineer. Guidance published by the 61508 Association states that the standards do not require certification of components, but do require evidence that the element is suitable and dependable for the application; that a certificate may only summarise the capability data and the full data should be in the element&apos;s safety manual; and that &quot;proven in use&quot; claims need substantial evidence and are a decision the end user makes, not a supplier&apos;s label. We checked those guidance documents on 21 November 2026 and have not read the standards. State in the RFQ which edition of each standard the bidder works to and ask them to state any difference.</p>
      <h2 id="safety-function" className={h}>What should the RFQ say about the safety function?</h2>
      <p className={p}>Give the target integrity level for the function the device serves (as set by the end user), the device role (sensor, logic solver input, final element), the demand mode, the process fluid and conditions, the required safe state and failure direction, and the response time. For a valve, give the line size, pressure class, shutoff and leakage requirement, the stroking-time limit and the actuator fail action. If you cannot supply these, say so and ask the bidder to quote the device with the datasheet fields they need identified as open items, not to assume them. For related ordering data see the <Link className={l} href={postUrl(getPost("pressure-transmitter-replacement-rfq-range-output-hart-hazardous-area")!)}>pressure transmitter RFQ guide</Link>, the <Link className={l} href={postUrl(getPost("level-transmitter-replacement-rfq-technology-process-data-interface-emulsion-records")!)}>level transmitter RFQ guide</Link>, the <Link className={l} href={postUrl(getPost("solenoid-valve-rfq-differential-pressure-coil")!)}>solenoid valve RFQ guide</Link> and the <Link className={l} href={postUrl(getPost("valve-actuator-replacement-rfq-compatibility")!)}>valve actuator RFQ guide</Link>.</p>
      <h2 id="evidence" className={h}>Which evidence documents should you ask for?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Safety manual for the exact model, firmware or hardware revision and configuration, including the permitted operating limits and the assumptions behind the failure data.</li>
        <li>Assessment report and certificate from a named assessor, with scope that matches the product and the version offered; check the scope and expiry with the issuer, and confirm the certificate identifies the product, not only the manufacturer.</li>
        <li>Failure rate data by failure mode, with the source and method (for example FMEDA or a documented field-data basis) and the stated environmental assumptions.</li>
        <li>Systematic capability statement and any restrictions on use, such as single-device limits or required diagnostics.</li>
        <li>For prior-use claims, a documented evidence package, to be judged by the end user. Do not accept a bare statement.</li>
        <li>Quality system evidence as described in the <Link className={l} href={postUrl(getPost("iso-9001-certificate-verification-equipment-rfq")!)}>ISO 9001 certificate verification guide</Link>, since systematic capability depends on manufacturing and change control.</li>
      </ul>
      <h2 id="proof-test" className={h}>How should proof testing and maintenance be handled?</h2>
      <p className={p}>The proof-test procedure and its coverage are in the safety manual, and the interval comes from the end user&apos;s calculation, not from the supplier&apos;s datasheet. Ask the bidder to list what the proof test requires (tools, partial stroke or full stroke, simulated input), which failures it can and cannot reveal, and whether proof-test equipment or software is needed. For valves, ask about the practical stroke test, leakage test and position-feedback options, and agree the calibration and test equipment records through the <Link className={l} href={postUrl(getPost("pressure-gauge-calibration-certificate-buyers-guide")!)}>calibration certificate guide</Link>. Ask how the supplier manages firmware or design changes after delivery and how they notify the buyer, because a change can invalidate the assessment.</p>
      <h2 id="hazardous-area" className={h}>How do hazardous-area and safety ratings combine?</h2>
      <p className={p}>A functional safety rating and an explosion-protection certificate are separate documents. A device can carry one without the other. State both requirements, and check that the documents refer to the same model and revision. The distinction is similar to the one explained in the <Link className={l} href={postUrl(getPost("motor-ip-rating-vs-ex-certification-rfq")!)}>IP rating versus Ex certification guide</Link>.</p>
      <h2 id="inspection-records" className={h}>Which delivery records should accompany each device?</h2>
      <p className={p}>Ask for the serial number linked to the safety manual revision and the certificate, the calibration or factory test certificate, the material certificate for wetted parts at the type you specify (see the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 guide</Link>), the configuration record with any locked settings, and the nameplate data. Agree factory acceptance or witness points in an inspection and test plan following the <Link className={l} href={postUrl(getPost("inspection-test-plans-hold-vs-witness-points")!)}>hold versus witness points guide</Link>, and check on receipt that the marked model and revision match the documents.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table with the datasheet lines and the evidence lines in rows: model and revision, standard edition, assessor and certificate scope, safety manual revision, failure-mode data, systematic capability, proof-test requirements, change notification, hazardous-area certificate, wetted materials, delivery documents, lead time and validity. A cheaper device may lack a current assessment, apply to a different revision, or exclude the safety manual. Send clarifications to every bidder together, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send an instrument or valve requirement, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/instrumentation-control">instrumentation and control</Link> catalogue section or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; suitability, availability, manufacturing origin, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular safety-rated device, and it is not functional safety advice.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
