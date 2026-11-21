import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("level-transmitter-replacement-rfq-technology-process-data-interface-emulsion-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A level transmitter RFQ should state what is being measured (total level, interface or both), the density and dielectric constant of each fluid, temperature and pressure, whether an emulsion or foam layer can form, how the instrument mounts, the output signal and hazardous-area rating, and the configuration and calibration records you expect. Quoting against the old model number alone hides all of these, and level technologies differ enough that a like-for-model offer can behave differently from the unit it replaces.</p>
      <p className={p}>This guide is for procurement, instrument and maintenance teams replacing or adding level instruments on tanks, separators and vessels. It is an enquiry checklist, not an instrument selection method. The measurement technology, ranges and safety function are decisions for the responsible instrument engineer, and any overfill-protection or other safety-instrumented use needs its own engineering basis that this guide does not provide.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a level transmitter RFQ built from fluid data, interface, mounting, output and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five parts of a level transmitter enquiry that make quotations comparable.</figcaption>
      </figure>
      <h2 id="what-measured" className={h}>What exactly is the instrument measuring?</h2>
      <p className={p}>Separate three cases. Total level of one liquid, level plus an interface between two liquids (for example oil over water), and point detection such as a high or low alarm are different jobs. A trade article by a Rosemount level product engineer, published by Chemical Processing in March 2020, notes that vibrating-fork switches can signal that a fork is immersed but cannot give a continuous level, while continuous technologies such as guided wave radar, magnetostrictive and differential pressure instruments can. If the existing instrument reads both level and interface, the RFQ must say so, or a bidder may quote a cheaper device that measures only total level.</p>
      <h2 id="process-data" className={h}>Which process data must the RFQ carry?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Fluid names and the density of each liquid, including the range it can move through in service.</li>
        <li>Dielectric constant of each liquid where a radar-type instrument is considered, in particular the upper layer compared with the lower one.</li>
        <li>Operating and design temperature and pressure, including cleaning, steaming or upset conditions.</li>
        <li>Measuring span, the distances from reference points such as the tank bottom or flange face, and the thinnest layer that must be measured.</li>
        <li>Whether foam, vapour, turbulence, agitation, emulsion layers or build-up on a probe are expected.</li>
        <li>Wetted materials allowed and any sour-service or other material requirement, which should be stated on the data sheet; see the <Link className={l} href={postUrl(getPost("nace-mr0175-iso-15156-sour-service-buyers-guide")!)}>NACE MR0175 and ISO 15156 guide</Link>.</li>
      </ul>
      <p className={p}>Supply this as a data sheet, not a sentence. Unknown values should be marked unknown so each bidder states its assumption rather than silently choosing one.</p>
      <h2 id="technology-checks" className={h}>What should you ask about each technology?</h2>
      <p className={p}>You do not have to choose the technology in the RFQ, but you should ask each bidder to name the principle offered and its limits for your data. The same Chemical Processing article describes limits that are worth turning into questions for interface work. Guided wave radar relies on the upper liquid having a lower dielectric constant than the lower one, with oil under about 5 and water above 50 given as typical values; it can tolerate some build-up, and thick emulsion bands may leave it without a second echo, so it reports no interface. Magnetostrictive instruments use floats chosen for specific density, so a density change moves the reading, residue can make a float stick, and an emulsion layer can hold the float inside it. Differential pressure instruments need the density of both liquids to be known, can be recalibrated for density changes, and also read a level inside an emulsion. The article states typical minimum layer thicknesses for these technologies and notes newer devices that resolve thinner layers, but the figures are model-dependent, so ask for the manufacturer&apos;s datasheet value for the exact model and for your fluids rather than relying on a general number. The source does not cover ultrasonic, non-contact radar or displacer instruments; request equivalent written limits for any of those that are offered.</p>
      <h2 id="mounting" className={h}>How should mounting and process connection be defined?</h2>
      <p className={p}>State the connection type, size, rating and facing, the nozzle height, whether the instrument sits in a bridle, chamber, stilling well or directly in the vessel, and the probe or cable length with its tolerance. The article cautions that a stilling well with poorly spaced slots or holes can distort an interface reading, so give the existing well or chamber drawings, not just its nominal size. For flanged parts, check the rating and facing against the <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>ASME B16.5 flange class guide</Link>. For impulse-line or remote-seal differential pressure instruments, the same system questions as in the <Link className={l} href={postUrl(getPost("diaphragm-seal-pressure-instrument-rfq-complete-system")!)}>diaphragm seal instrument guide</Link> apply.</p>
      <h2 id="signal" className={h}>What about output, communication and hazardous area?</h2>
      <p className={p}>Specify the output (for example 4–20 mA with a digital protocol if used), the power supply, the display and the configuration software or handheld the maintenance team already owns. Hazardous-area marking and certification must match the zone, gas group and temperature class; the distinctions explained in the <Link className={l} href={postUrl(getPost("motor-ip-rating-vs-ex-certification-rfq")!)}>IP rating versus Ex certification guide</Link> carry over to instruments. Where the transmitter replaces a pressure or other loop device, the <Link className={l} href={postUrl(getPost("pressure-transmitter-replacement-rfq-range-output-hart-hazardous-area")!)}>pressure transmitter replacement guide</Link> covers the range, output and HART questions in more depth.</p>
      <h2 id="records" className={h}>Which records and tests should accompany the instrument?</h2>
      <p className={p}>Ask for the configured parameters (measuring range, damping, fail-safe output, interface settings) and a configuration or calibration certificate identifying the instrument by serial number. If calibration is by a laboratory, check its scope as in the <Link className={l} href={postUrl(getPost("iso-17025-laboratory-scope-test-report-equipment-rfq")!)}>ISO 17025 scope guide</Link>. Define material certificate requirements for wetted parts using the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 guide</Link>, and ask for the conformity documents your hazardous-area procedure requires. After installation, confirm the reading against an independent reference such as a dip or sight-glass check, and record the result; a datasheet value alone does not show the instrument reads correctly in your vessel.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-muted">
          <thead><tr><th className="border border-line p-2">Row</th><th className="border border-line p-2">What to compare</th></tr></thead>
          <tbody>
            <tr><td className="border border-line p-2">Measured quantity</td><td className="border border-line p-2">Level only, interface, or both; point switch or continuous</td></tr>
            <tr><td className="border border-line p-2">Principle and limits</td><td className="border border-line p-2">Technology named; written limits for your density, dielectric, emulsion and build-up data</td></tr>
            <tr><td className="border border-line p-2">Mounting</td><td className="border border-line p-2">Connection, probe length, chamber or well assumed</td></tr>
            <tr><td className="border border-line p-2">Output and approvals</td><td className="border border-line p-2">Signal, protocol, Ex marking and certificate</td></tr>
            <tr><td className="border border-line p-2">Records and delivery</td><td className="border border-line p-2">Configuration certificate, materials, packing, validity, lead time</td></tr>
          </tbody>
        </table>
      </div>
      <p className={p}>Treat a different technology, a missing interface function or an assumed fluid value as a deviation, not a saving. Send clarifications to every bidder together, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>, and see the <Link className={l} href={postUrl(getPost("coriolis-flowmeter-replacement-rfq-process-signal-interfaces")!)}>Coriolis flowmeter guide</Link> as a comparable example of a process-data-led instrument enquiry.</p>
      <p className={p}>To send a level instrument requirement, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/instrumentation-control/radar-and-ultrasonic-level-instruments">radar and ultrasonic level instruments</Link> catalogue entry or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; specification, manufacturing origin, availability, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular level instrument.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
