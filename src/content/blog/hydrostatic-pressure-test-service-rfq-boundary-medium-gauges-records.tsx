import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("hydrostatic-pressure-test-service-rfq-boundary-medium-gauges-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A hydrostatic pressure test service RFQ should state the exact test boundary, the owner&apos;s test pressure and its code basis, the test medium and water quality, the gauges and their calibration, who isolates and vents the system, who approves the procedure, and which records come back signed. &quot;Hydrotest 2 km of piping&quot; leaves each of these open, so bids cannot be compared and the contractor may price a test the owner never intended.</p>
      <p className={p}>This guide is for project and maintenance teams buying hydrostatic testing as a service. It is an enquiry checklist. Test pressures, hold times and acceptance criteria come from the design code, the owner&apos;s engineers and the regulator; this guide does not set them and does not describe how to carry out a pressurised test.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a hydrostatic test service RFQ built from test boundary, pressure basis, medium, gauges and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five parts of a hydrostatic test enquiry that bidders can price on the same basis.</figcaption>
      </figure>
      <h2 id="basis" className={h}>What is the basis for the test and who owns it?</h2>
      <p className={p}>The test pressure is a design-basis decision, not a contractor&apos;s choice. Public descriptions of ASME B31.3 say a hydrostatic leak test is generally set at a multiple of design pressure, commonly stated as 1.5 times, with a correction for the test temperature and with variations between editions and for particular systems. Treat that as orientation only: the code text, the edition in force and the project specification decide. Put the figure in the RFQ as an owner-supplied value, name the governing code and edition, and say who has the authority to change it. Bidders should price against your number rather than propose their own.</p>
      <p className={p}>The UK Health and Safety Executive describes its guidance note GS4, <em>Safety requirements for pressure testing</em> (fourth edition, 2012), as cross-industry guidance aimed at employers, supervisors and managers responsible for pressure testing. It is useful as a statement of what a competent employer is expected to control, but it is not a substitute for the project code or the law in your jurisdiction.</p>
      <h2 id="boundary" className={h}>How should the test boundary be defined?</h2>
      <p className={p}>Attach marked-up P&amp;IDs or isometrics showing the start and end of each test package, the high and low points, vents and drains, the filling and pressurising connection, and every item inside the boundary. Then list what is excluded or must be isolated: instruments, relief valves, rotating equipment, expansion joints, lined or coated items, and valves that cannot be tested against a closed seat. For each, say whether it will be removed, blanked, spooled out or tested in place. A frequent source of variation orders is a component the bid assumed was outside the boundary. Where the test package includes installed valves, link the owner&apos;s valve test basis, for example the distinction explained in the <Link className={l} href={postUrl(getPost("api-598-vs-iso-5208-valve-testing-buyers-guide")!)}>API 598 and ISO 5208 valve testing guide</Link>.</p>
      <h2 id="medium" className={h}>Which test medium and water quality should the bid assume?</h2>
      <p className={p}>State the medium (normally water for a hydrostatic test), the source and quantity available on site, the required quality (for example limits on chlorides for austenitic stainless steel, or the need for an inhibitor or biocide for long standing times), the allowed temperature range, and where and how the water will be disposed of and under which permit. Ask bidders to price filtering, treatment, transport and disposal explicitly, and say whether the owner supplies the water. If the system cannot be tested with a liquid, a pneumatic test is a different hazard and approval route, and must be requested and priced as such rather than substituted quietly.</p>
      <h2 id="gauges" className={h}>What instrument and calibration evidence should you require?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Pressure gauges or transmitters identified by serial number, with range and resolution suitable for the test pressure as set by the code or specification, not by the contractor&apos;s stock.</li>
        <li>A valid calibration certificate traceable to national standards, issued before the test and covering the range used; see the <Link className={l} href={postUrl(getPost("pressure-gauge-calibration-certificate-buyers-guide")!)}>pressure gauge calibration certificate guide</Link>.</li>
        <li>A recorder or data logger if you want a pressure and temperature record rather than a hand-written value, with the logging interval stated.</li>
        <li>A separate relief or protective device on the test pump, with its set point and certificate, and the person who checks it.</li>
        <li>A temperature reading for the test fluid or pipe wall, since trapped water pressure changes with temperature.</li>
      </ul>
      <h2 id="responsibilities" className={h}>Who isolates, fills, tests and signs?</h2>
      <p className={p}>Write a responsibility table: who prepares the test procedure and who approves it, who isolates, blanks and vents, who fills and de-aerates, who controls the pressure, who walks down joints and checks for leaks, who decides on a failed test, and who drains and dries. Include permit-to-work, exclusion zones and the competence you expect from the test supervisor. Ask the bidder to submit a method statement and risk assessment before mobilisation and name the point at which your representative may witness, using the same approach as the <Link className={l} href={postUrl(getPost("inspection-test-plans-hold-vs-witness-points")!)}>hold and witness point guide</Link>. Make clear that a hold point means work does not proceed until it is released in writing.</p>
      <h2 id="records" className={h}>Which records should come back?</h2>
      <p className={p}>Ask for a signed test record per package: package and line identification, drawing revision, governing code and edition, test pressure and how it was derived, medium and water quality record, gauge identification and calibration certificates, start and end times, pressure and temperature readings, the result of the examination of joints, repairs and retests if any, the signatures of the contractor, the owner&apos;s representative and any third-party inspector, and the draining and drying record. Define the format and the due date, and say whether original wet-signed copies are needed. Where the records form part of the handover, tie them to the data book scope described in the <Link className={l} href={postUrl(getPost("pipeline-precommissioning-service-rfq-scope-handover")!)}>pipeline pre-commissioning RFQ guide</Link>.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Set the test packages as rows and each bidder&apos;s assumptions as columns: boundary and exclusions accepted, pressure basis, water supply and disposal, gauge and recorder provision, standing time and number of tests included, retest and rework rates, standby rates, permits and safety cover, records, and demobilisation. A low lump sum often hides one retest, no disposal, or a gauge set that does not meet your range. Run one clarification round with all bidders, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>, and keep the answers in the quotation record. Where a package is awarded partly, apply the <Link className={l} href={postUrl(getPost("partial-awards-equipment-rfq-package-line-item-offers")!)}>partial award checklist</Link>.</p>
      <p className={p}>To send a testing or inspection service requirement, see the Oillinko <Link className={l} href="/oil-and-gas/services/inspection-engineering">inspection engineering</Link> service scope or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; capability, availability, accreditation, regional coverage and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company performs hydrostatic testing.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
