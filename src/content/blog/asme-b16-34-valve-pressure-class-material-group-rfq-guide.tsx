import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("asme-b16-34-valve-pressure-class-material-group-rfq-guide")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A valve RFQ that says only &quot;Class 300&quot; or &quot;same as the flange&quot; leaves the most important question open: what pressure can this valve body carry at the design temperature? Under ASME B16.34, a valve&apos;s pressure-temperature rating depends on its pressure class, its body material group and its end connection, and the allowable pressure falls as temperature rises. State the design pressure, design temperature, fluid and body material, then ask each bidder to confirm the rating basis of the exact valve quoted.</p>
      <p className={p}>This guide is for procurement and maintenance teams buying or replacing valves on oil and gas assets. It explains what to put in the RFQ and what to ask bidders to confirm. It does not select a valve, assign a class or approve a substitution. The responsible piping or process engineer owns those decisions, and the current edition of the standard and the manufacturer&apos;s documentation for the quoted model govern.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Conceptual diagram linking design data, valve rating and mating flange checks in a valve RFQ."/>
        <figcaption className="mt-3 text-sm text-muted">Start from design data, confirm the valve rating, then check the parts it connects to.</figcaption>
      </figure>
      <h2 id="what-b1634-covers" className={h}>What does ASME B16.34 actually cover?</h2>
      <p className={p}>ASME&apos;s <a className={l} href="https://www.asme.org/codes-standards/find-codes-standards/b16-34-valves-flanged-threaded-welding-end" target="_blank" rel="noopener noreferrer">B16.34 product page</a> (checked 12 November 2026) describes the standard as applying to new construction of cast, forged and fabricated flanged, threaded and welding-end valves, plus wafer or flangeless valves, in steel, nickel-base and other alloys. It lists pressure-temperature ratings, dimensions and tolerances, materials, nondestructive examination requirements, testing and marking among its topics. It also notes alternative rules for valves NPS 2½ and smaller, and that wafer or flangeless valves installed between or against flanges are treated as flanged-end valves. The page shows the 2025 edition, which ASME has placed on stabilized maintenance.</p>
      <p className={p}>Two practical points follow. First, B16.34 is a valve standard: it is separate from the flange standard that governs the pipe flanges the valve bolts to. Second, a purchase order that cites B16.34 has not by itself defined function, size, trim, face-to-face length or test regime. Those need their own lines in the RFQ. For the testing side, see the <Link className={l} href={postUrl(getPost("api-598-vs-iso-5208-valve-testing-buyers-guide")!)}>API 598 versus ISO 5208 testing guide</Link>.</p>
      <h2 id="class-material-temperature" className={h}>Why is a class number not enough?</h2>
      <p className={p}>A class designation such as 150, 300 or 600 is a family label. The allowable working pressure for a given valve is read from the rating table for its body material group at the design temperature, and for most materials it declines as temperature rises. Two valves of the same class in different materials, for example carbon steel and a stainless alloy, can therefore have different allowable pressures at the same temperature. That is why the RFQ should name the body material, by specification and grade, and not only the class. Because the tables belong to the standard, read the figures from the edition your project specifies instead of relying on a rule of thumb.</p>
      <p className={p}>Ask the bidder to state, for the quoted valve: the pressure class, the material specification of the body and bonnet, the rating at your design temperature, and the standard edition used. If the valve has a lower-rated component, such as a soft seat, packing, a gearbox or an actuator, ask the bidder to say which part limits the valve in service, since the body rating is not the only limit. A seat or seal material may carry a temperature limit that is lower than the body&apos;s, and the manufacturer&apos;s data sheet is the place to confirm it.</p>
      <h2 id="design-data" className={h}>What design data should the RFQ include?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Design pressure and design temperature, plus normal operating values, from the piping or process data sheet.</li>
        <li>Fluid and any service notes the owner defines, such as sour, oxygen, steam or cyclic service.</li>
        <li>Valve type, size, end connection (flanged, butt-weld, socket-weld or threaded) and, for flanged ends, the flange class and facing.</li>
        <li>Body and bonnet material specification, trim and seat or seal materials.</li>
        <li>Required test pressure and test standard, plus the documents wanted: material certificates, pressure test record and marking evidence.</li>
        <li>Face-to-face dimension or the existing valve&apos;s overall dimensions for a replacement.</li>
      </ul>
      <p className={p}>For a like-for-like replacement, photograph the body markings and nameplate of the installed valve. Record the manufacturer, figure or model number, size, class, body material marking and any heat or serial number. The <Link className={l} href={postUrl(getPost("check-valve-face-to-face-dimensions-rfq")!)}>check valve face-to-face dimensions guide</Link> shows how to capture installed dimensions that the rating does not define.</p>
      <h2 id="mating-flanges" className={h}>How do valve rating and mating flange class interact?</h2>
      <p className={p}>A flanged valve must be compatible with the flanges at both ends: the same class designation, the same facing type and a bolt pattern that matches. But matching class labels does not make the pipe flange and the valve body equal in rating at a given temperature, because each is rated from its own material table. Check the weakest element of the assembly: flange, gasket, bolting and valve body, each at the design temperature. The <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>flange pressure class guide</Link> covers the flange side, and the <Link className={l} href={postUrl(getPost("rtj-gasket-rfq-ring-number-profile-material-hardness")!)}>ring-type joint gasket guide</Link> covers one common gasket choice for higher classes.</p>
      <p className={p}>If the existing valve has a different body material from the one quoted, do not treat it as a trivial change. The new material has its own rating at temperature and may have different corrosion, hardness or sour-service requirements. Where the service is sour, read the <Link className={l} href={postUrl(getPost("nace-mr0175-iso-15156-sour-service-buyers-guide")!)}>NACE MR0175 / ISO 15156 buyer&apos;s guide</Link> before accepting any alternative.</p>
      <h2 id="comparing-quotes" className={h}>How should you compare quotations?</h2>
      <p className={p}>Build one table for all bidders. Put the required value in the first column and each bidder&apos;s quoted value beside it, for: valve type and function, size, class, end connection, body and bonnet material specification, trim, seat and seal materials, rating at design temperature and the edition basis, test standard and pressure, documents supplied, marking, delivery and validity. Require every deviation to be written as a deviation. A cheaper offer that silently changes the body material, the end connection or the test regime is not a comparable offer.</p>
      <p className={p}>Check the documents against the valve itself on receipt: the marking on the body should match the quoted class and material, and the certificates should carry the heat or serial numbers visible on the item. The <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 material certificates guide</Link> explains the common certificate types, and the <Link className={l} href={postUrl(getPost("valves-and-actuation-explained")!)}>valves and actuation overview</Link> gives wider context on valve types and standards.</p>
      <p className={p}>To send a valve requirement, use the <Link className={l} href="/oil-and-gas/equipment/valves">Oillinko valves catalogue page</Link> or browse the <Link className={l} href="/">Oillinko equipment and service catalogue</Link>. Enquiries are reviewed and routed manually, and availability, suitability, manufacturing origin and commercial terms are confirmed for each one. This guide does not show that Oillinko stocks or is authorised to supply any particular brand or model.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
