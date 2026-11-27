import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("pressure-gauge-rfq-en-837-asme-b40-100-range-accuracy-case-connection-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A pressure gauge RFQ must state the standard and its edition, the dial size, the pressure range and units, the accuracy class or grade, the process connection and its thread standard, the wetted-part and case materials, the filling and safety features, the service conditions, and the certificate you expect. A line such as &quot;pressure gauge 0-16 bar, 100 mm&quot; leaves the accuracy, connection, case and wetted materials open, so quotations can describe instruments that are not interchangeable.</p>
      <p className={p}>This guide is for procurement, maintenance and instrument teams buying local indicating gauges as replacements or for a new package. It is an enquiry checklist. The range, material and safety choices for a given service belong to the responsible engineer; the guide gives no recommended values.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing six parts of a pressure gauge RFQ: standard, range, accuracy, connection, materials and records."/>
        <figcaption className="mt-3 text-sm text-muted">Six parts of a gauge enquiry that let bidders quote the same instrument.</figcaption>
      </figure>
      <h2 id="standard" className={h}>Which gauge standard should the RFQ name?</h2>
      <p className={p}>The two families most buyers meet are European and American. According to the <a className={l} href="https://knowledge.bsigroup.com/products/pressure-gauges-bourdon-tube-pressure-gauges-dimensions-metrology-requirements-and-testing" rel="noopener">BSI catalogue entry</a>, EN 837-1 covers Bourdon tube indicating gauges, vacuum gauges and compound gauges in nominal sizes from 40 to 250 and ranges up to 1,600 bar, for gauge pressure, with test methods for type approval and production piece tests. It does not apply to gauges with electrical contacts. EN 837-2 gives selection and installation recommendations for gauges with a metal elastic sensing element, and EN 837-3 covers diaphragm and capsule gauges. ASME B40.100 is the American standard for pressure gauges and related accessories. A <a className={l} href="https://blog.ashcroft.com/asme-vs-en-standards" rel="noopener">manufacturer&apos;s comparison</a> notes that the two differ in units, accuracy classification and sizing conventions. The catalogue listings we checked on 27 November 2026 showed the 1998 editions of EN 837-1 and EN 837-2, with EN 837-2 marked as under review, and we have not read either standard in full. Ask the bidder to state the standard and edition the gauge is made and tested to, and do not treat a gauge that merely looks similar as compliant.</p>
      <h2 id="range-accuracy" className={h}>How should range and accuracy be stated?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Range: scale start and end, unit (bar, kPa, psi), gauge or absolute basis, and whether the scale is vacuum or compound. Give the normal operating pressure and the maximum the gauge may see, including pressure tests and surges, so the engineer can confirm the scale before order.</li>
        <li>Accuracy: the class or grade and the standard it comes from. EN 837-1 uses accuracy classes, while ASME B40.100 uses letter grades that apply tolerances differently across the scale. Do not convert one to the other yourself; ask the bidder to quote the stated class or grade.</li>
        <li>Dial: nominal size, scale units, any dual scale, and any special dial marking such as a service tag or an oxygen-service marking.</li>
        <li>Calibration: whether a factory calibration certificate or accredited calibration is required; see the <Link className={l} href={postUrl(getPost("pressure-gauge-calibration-certificate-buyers-guide")!)}>pressure gauge calibration certificate guide</Link>.</li>
      </ul>
      <h2 id="connection" className={h}>What connection and mounting should you specify?</h2>
      <p className={p}>State the process connection size, thread standard and position (lower or back), and the mounting style: direct stem, surface or panel flange, or a clamp on a pipe. Threads are a common cause of wrong-gauge orders because tapered and parallel threads in the same nominal size are not interchangeable; the <Link className={l} href={postUrl(getPost("npt-bspt-bspp-threaded-fitting-buyers-guide")!)}>NPT, BSPT and BSPP guide</Link> explains the differences. If the gauge mounts on a flange or a diaphragm seal assembly, give the flange class and facing and refer to the <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>flange pressure class guide</Link>.</p>
      <h2 id="materials-case" className={h}>Which materials, case and fill should be stated?</h2>
      <p className={p}>Name the wetted-part materials (socket and measuring element) against the process fluid and any sour or corrosive component; for sour service see the <Link className={l} href={postUrl(getPost("nace-mr0175-iso-15156-sour-service-buyers-guide")!)}>NACE MR0175 / ISO 15156 guide</Link>. Specify the case material and ingress protection, whether the case is liquid-filled (and the fill liquid, which must suit the service and the temperature range), the window material, and whether a safety pattern with a blow-out back is required. Where the process can pulsate or vibrate, say so and ask the bidder to propose damping, such as a restrictor or a filled case, as an option for engineer approval. If the fluid is viscous, crystallising or corrosive, ask for the isolating diaphragm seal option instead of assuming a standard gauge.</p>
      <h2 id="records" className={h}>Which certificates and records should be delivered?</h2>
      <p className={p}>Ask for the datasheet, the calibration certificate or test record at the agreed accuracy, the material certificate for the wetted parts at the level you need (see the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 guide</Link>), the marking on the dial and case, and any hazardous-area, oxygen-clean or conformity documents required by the project. Where gauges are installed together with a transmitter on the same line, keep the data sheets aligned using the <Link className={l} href={postUrl(getPost("pressure-transmitter-replacement-rfq-range-output-hart-hazardous-area")!)}>pressure transmitter replacement guide</Link>.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table with these columns: standard and edition, dial size, range and unit, accuracy class or grade, connection and thread, wetted and case materials, fill and safety features, certificates, delivery and validity. A lower price can mean a lower class, a different thread, a plain brass wetted part or an unfilled case. Send clarifications to every bidder at the same time, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send an enquiry, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/instrumentation-control/pressure-gauges-and-transmitters">pressure gauges and transmitters</Link> catalogue section, or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; suitability, availability, manufacturing origin, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular gauge, and it is not an instrument selection.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
