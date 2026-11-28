import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("temperature-sensor-rtd-thermocouple-rfq-iec-60751-iec-60584-1-element-class-wiring-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A temperature sensor RFQ must state the sensor type (RTD or thermocouple), the element and its tolerance class, the temperature range, the number of wires or the thermocouple type, the sheath and connection head, how the sensor fits the thermowell, and the calibration evidence required. A line such as &quot;Pt100, 200 mm&quot; leaves the class, the wiring, the construction and the length reference open, so quotations can describe sensors that are not interchangeable.</p>
      <p className={p}>This guide is for procurement, maintenance and instrument teams buying temperature sensors as replacements or for a new package. It is an enquiry checklist, not a sensor selection. The choice of type, class and materials for a given service belongs to the responsible engineer.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing six parts of a temperature sensor RFQ: sensor type, class, element, wiring, assembly and records."/>
        <figcaption className="mt-3 text-sm text-muted">Six parts of a temperature sensor enquiry that let bidders quote the same assembly.</figcaption>
      </figure>
      <h2 id="rtd-or-thermocouple" className={h}>Should the RFQ name an RTD or a thermocouple?</h2>
      <p className={p}>Name the sensor type; do not leave it to the bidder. A platinum resistance thermometer (RTD, most often Pt100) is normally specified to <a className={l} href="https://blog.wika.com/us/knowhow/need-know-industrial-resistance-thermometers/" rel="noopener">IEC 60751</a>, which defines the resistance-temperature relationship and the tolerance classes. A thermocouple is a letter-designated type, such as K, J, T, E or N, whose reference functions and tolerances are given in <a className={l} href="https://webstore.iec.ch/en/publication/2521" rel="noopener">IEC 60584-1:2013</a>. The two are not drop-in substitutes: they need different signal inputs, different extension cable (copper for an RTD, matching compensating or extension cable for a thermocouple) and often different transmitters. For a replacement, copy the type and designation from the existing datasheet and the loop input, and say whether a changed type will be accepted.</p>
      <h2 id="tolerance-class" className={h}>How should the tolerance class be stated?</h2>
      <p className={p}>Ask for the class by name and the standard it comes from. According to manufacturer summaries we read on 28 November 2026, IEC 60751 defines Pt100 classes AA, A, B and C, with tolerance equations in degrees Celsius that widen as the temperature moves away from 0 °C, and with class validity ranges that depend on whether the element is wire-wound or thin-film. Some vendors also list tighter fractional classes such as 1/3 B; these are not classes in the standard, so ask the bidder to state exactly what they mean. For thermocouples, IEC 60584-1 defines tolerance classes 1, 2 and 3, and class 3 is defined only for some types. We have not read either standard in full, so confirm the class tables in the edition your project cites rather than copying figures from this guide.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>RTD: nominal resistance (Pt100 or Pt1000), class, and the temperature range over which that class is claimed.</li>
        <li>Thermocouple: type, class, single or duplex element, and grounded, ungrounded or exposed junction.</li>
        <li>Range: the process minimum and maximum, plus any excursion or steam-out case, so the engineer can confirm the sensor and sheath limits.</li>
      </ul>
      <h2 id="element-wiring" className={h}>Which element construction and wiring should be requested?</h2>
      <p className={p}>RTD elements are made as wire-wound or thin-film. Manufacturer data indicates that thin-film elements generally cope better with vibration, while wire-wound elements are often quoted for a wider range at the tighter classes; the standard itself does not settle vibration suitability, so ask for the manufacturer&apos;s vibration rating where the service has pulsation or machinery vibration. State the wiring: two-wire adds lead resistance to the reading, three-wire is the usual industrial choice because the third conductor allows lead resistance to be compensated, and four-wire removes lead resistance from the measurement and is used where accuracy matters. The wiring must match the transmitter or input card, so check it against the loop drawing. For duplex sensors, say whether the second element is a spare or feeds a separate system.</p>
      <h2 id="assembly" className={h}>What sheath, connection head and thermowell fit should be stated?</h2>
      <p className={p}>Give the sheath diameter, sheath material and insertion or immersion length, and define the datum from which the length is measured, because catalogues use different references. Specify whether the sensor is spring-loaded so the tip stays in contact with the bottom of the thermowell, and the thread or flange at the connection head. State the head type, ingress protection and hazardous-area marking where relevant, and whether a head-mounted transmitter is included. The sensor bore must suit the thermowell: use the <Link className={l} href={postUrl(getPost("thermowell-rfq-wake-frequency-process-data")!)}>thermowell RFQ guide</Link> to keep the well drawing, process cases and sensor dimensions on one controlled item reference. Thread standards are a frequent source of wrong orders; see the <Link className={l} href={postUrl(getPost("npt-bspt-bspp-threaded-fitting-buyers-guide")!)}>NPT, BSPT and BSPP guide</Link>.</p>
      <h2 id="records" className={h}>Which calibration and records should be delivered?</h2>
      <p className={p}>Say whether you need a factory test record, a calibration certificate at stated points, or accredited calibration, and which points and tolerance it must show. Ask for the datasheet, the sensor marking (type, class, serial), the material certificate for the sheath at the level needed (see the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 guide</Link>), and any hazardous-area or SIL documents. Where accredited calibration is required, check the laboratory scope using the <Link className={l} href={postUrl(getPost("iso-17025-laboratory-scope-test-report-equipment-rfq")!)}>ISO/IEC 17025 scope guide</Link>. A calibration certificate shows how one sensor performed at the test points; it does not by itself prove it suits the whole process range.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table with these columns: sensor type and designation, class and its stated range, element construction, wiring, sheath material and diameter, length and datum, spring loading, connection, head and approvals, certificates, delivery and validity. A lower price can mean a looser class, a narrower validated range, a different thread or an unspecified length reference. Send clarifications to every bidder at the same time, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send an enquiry, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/instrumentation-control/temperature-sensors-and-thermowells">temperature sensors and thermowells</Link> catalogue section, or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; suitability, availability, manufacturing origin, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular sensor, and it is not an instrument selection.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
