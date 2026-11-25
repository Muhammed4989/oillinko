import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("tank-breather-valve-pressure-vacuum-vent-rfq-api-2000-iso-28300-set-pressure-flow-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A tank breather valve (pressure/vacuum vent) RFQ must state the tank and its stored liquid, the venting case the vent has to handle (in and out pumping, thermal breathing and any emergency case the engineer has defined), the pressure and vacuum settings and the tank limits they must stay inside, the device type, size and connection, any flame arrestor or jacketing, the materials, and the flow data and test records you expect. A line such as &quot;breather valve, 6 inch, for 5,000 m3 tank&quot; leaves the settings and flow capacity open, so quotations can describe devices that behave very differently on your tank.</p>
      <p className={p}>This guide is for procurement, operations and mechanical teams replacing or buying vents for aboveground atmospheric and low-pressure storage tanks. It is an enquiry checklist. The tank design pressure, the venting requirement and the choice of device are decisions for the responsible engineer under the project code; this guide gives no set pressures or flow values.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a tank breather valve RFQ built from service data, venting case, settings, device and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five parts of a tank vent enquiry that let bidders quote the same device.</figcaption>
      </figure>
      <h2 id="standards" className={h}>Which standard should the RFQ name?</h2>
      <p className={p}>API Standard 2000, Venting Atmospheric and Low-Pressure Storage Tanks, covers aboveground liquid petroleum and petroleum product tanks and aboveground and underground refrigerated tanks operating from full vacuum to 103.4 kPa (15 psig). Its topics include the causes of overpressure and vacuum, how venting requirements are determined, the means of venting, and the selection and installation of venting devices. ISO 28300:2008 is the corresponding international standard; the ISO catalogue shows it as last reviewed and confirmed in 2020, with a second edition in development, and notes that external floating-roof tanks are outside its scope. Catalogue listings checked on 25 November 2026 show API 2000 as the 2014 edition reaffirmed in 2020 and, from some vendors, a 2026 edition dated August 2026. We have not read the standards in full and the listings disagree on which is current, so confirm the edition required by your project before writing acceptance criteria. In the RFQ, name the standard and edition and ask each bidder to state which one its device and flow data refer to.</p>
      <h2 id="venting-case" className={h}>What venting case should you give bidders?</h2>
      <p className={p}>A vent is sized for flows, not for the tank size alone. Give the maximum filling and emptying rates, the stored liquid and its vapour pressure and flash characteristics, the operating temperature range, whether the tank is blanketed with inert gas, and whether an emergency venting case applies. The calculated required flow rates belong to the engineer; the RFQ should quote them as data and ask bidders to confirm the offered device&apos;s certified or tested flow capacity at the stated settings, in the same units. If the engineer has not fixed a figure yet, say so and ask for the capacity curve instead of a single number.</p>
      <h2 id="settings" className={h}>How should pressure and vacuum settings be stated?</h2>
      <p className={p}>Pressure and vacuum set points must sit inside the tank&apos;s design limits, and the flow capacity of a vent is stated at an overpressure or vacuum above the setting. State the pressure setting, the vacuum setting and the tank design pressure and vacuum in the same units and the same gauge basis, and ask the bidder to confirm the setting tolerance and the pressure at which the device reaches its full rated flow. Make clear that settings are to be confirmed by the engineer before order, because a replacement vent with the right connection but a different setting can overpressure or collapse a tank.</p>
      <h2 id="device" className={h}>How should you describe the device and its accessories?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Type: weight-loaded, spring-loaded or pilot-operated, pressure only, vacuum only or combined pressure/vacuum, and whether an open vent is acceptable.</li>
        <li>Size, connection standard, pressure class and orientation, and the existing nozzle it must fit; see the <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>flange pressure class guide</Link>.</li>
        <li>Flame arrestor: required or not, integral or separate, and any approval you expect for the stored product.</li>
        <li>Fouling and cold-climate provisions: sticky or crystallising vapours, freezing or icing conditions, and any steam or electric jacket.</li>
        <li>Bird and insect screens, rain hoods and pipe-away connections.</li>
      </ul>
      <p className={p}>Ask the bidder to name the proposed type and the reason, and to mark any alternative to the specified type as an alternative offer.</p>
      <h2 id="materials-records" className={h}>Which materials and records should be delivered?</h2>
      <p className={p}>Specify body, seat, diaphragm or pallet and seal materials against the stored liquid and its vapours, and the certificate type, for example those in the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 guide</Link>. Ask for the flow capacity data or certificate, the set-pressure test record where the device is tested, the marking on the nameplate, the dimensional drawing, the weight and the installation and maintenance instructions. Elastomer parts can age in storage, as covered in the <Link className={l} href={postUrl(getPost("elastomer-seal-storage-shelf-life-records-buyers")!)}>elastomer storage guide</Link>, so ask about shelf-life on soft parts and the spares you want delivered with it.</p>
      <h2 id="related-devices" className={h}>How does this differ from a relief valve or a rupture disc?</h2>
      <p className={p}>Tank vents work at very low pressures and are not process relief valves. For high-pressure relief devices see the <Link className={l} href={postUrl(getPost("api-526-pressure-relief-valves-rfq-guide")!)}>API 526 pressure relief valve RFQ guide</Link> and the <Link className={l} href={postUrl(getPost("rupture-disc-rfq-burst-pressure-manufacturing-range-coincident-temperature-iso-4126-2")!)}>rupture disc RFQ guide</Link>. For the tank itself, the data sheet and design basis are covered in the <Link className={l} href={postUrl(getPost("api-650-storage-tank-rfq-data-sheet-design-basis-foundation-records")!)}>API 650 storage tank RFQ guide</Link>.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table with these columns: standard and edition, device type, pressure and vacuum settings and tolerance, flow capacity at stated overpressure, size and connection, flame arrestor and jacketing, materials, certificates and records, spares, delivery and validity. A lower price can mean a smaller flow capacity, a different setting or missing accessories. Send clarifications to every bidder together, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send an enquiry, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/pressure-vessels-tanks">pressure vessels and tanks</Link> and <Link className={l} href="/oil-and-gas/equipment/valves">valves</Link> catalogue sections, or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; suitability, availability, manufacturing origin, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular tank vent, and it is not a venting design.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
