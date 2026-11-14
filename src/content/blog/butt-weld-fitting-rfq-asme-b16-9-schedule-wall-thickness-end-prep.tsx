import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("butt-weld-fitting-rfq-asme-b16-9-schedule-wall-thickness-end-prep")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>&quot;Six-inch Schedule 40 elbow&quot; describes a size and a wall class, but it is not yet a complete butt-weld fitting order. To compare quotations fairly, state the fitting type and dimensional standard, nominal size, the wall thickness at the weld end, the material grade and whether the fitting is seamless or welded, the end preparation, and the documents that prove what was supplied. Above all, say which pipe the fitting will be welded to, because that pipe&apos;s wall decides whether the joint fits up.</p>
      <p className={p}>This guide is for procurement and maintenance teams buying elbows, tees, reducers and caps for oil and gas piping. It explains what to specify and what to ask bidders to confirm. It does not select a fitting for your service or approve a substitution; the piping engineer and the governing project specification do that, and the current edition of each standard and the supplier&apos;s documents for the quoted lot govern.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing the five parts of a butt-weld fitting RFQ: type and size, wall thickness, material, end preparation and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five lines that turn a size-and-schedule shorthand into a quotable, checkable fitting order.</figcaption>
      </figure>
      <h2 id="what-b16-9-covers" className={h}>What does ASME B16.9 cover?</h2>
      <p className={p}>ASME B16.9 is the dimensional standard for factory-made wrought butt-welding fittings. Its published scope covers dimensions, tolerances, ratings, testing and marking for fittings from NPS 1/2 up to NPS 48 (DN 15 to DN 1200), and ASME&apos;s product page describes it as covering fittings of wrought carbon and alloy steel, with low-pressure corrosion-resistant fittings handled elsewhere. Short-radius elbows and returns were folded into B16.9 from the earlier B16.28 standard. The standard itself is paywalled and revised periodically, so read the type tables, tolerances and marking rules from the edition your project cites. This guide was written on 14 November 2026 from the standard&apos;s public scope descriptions and quotes no table values.</p>
      <p className={p}>B16.9 says nothing about which fitting your service needs. It does not choose a material, a wall thickness for your design pressure, or a flange rating. Treat it as the agreement on shapes and dimensions that lets fittings from different makers weld to standard pipe. Flange ends are a separate topic, covered in the <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>flange pressure class guide</Link>.</p>
      <h2 id="type-and-size" className={h}>How do you describe the fitting type and size?</h2>
      <p className={p}>Name the fitting type exactly: 90-degree or 45-degree elbow, and whether it is long radius or short radius; straight or reducing tee; concentric or eccentric reducer; cap. Give the nominal pipe size for each end. A reducing tee or reducer needs both sizes and, for eccentric reducers, the flat side (top or bottom) required on the line. A short-radius elbow turns in less space but gives a tighter turn, which changes flow and erosion behaviour, so a bidder should never substitute one radius for the other without approval. If you are replacing an existing fitting, record the installed dimension and the line-list tag, not only the size.</p>
      <h2 id="schedule-and-wall" className={h}>Why is the schedule not enough?</h2>
      <p className={p}>A schedule number is a convenient label for a nominal wall, but the number alone does not fix the thickness on a given size, and it is not the same thing as a pressure rating. The wall you need comes from the piping design, and the fitting must be able to meet the line&apos;s requirements. Ask for the wall thickness at the weld end, in millimetres or inches with the tolerance basis, and state the wall of the pipe it will be welded to. A fitting that matches in nominal size but is noticeably thicker or thinner than the pipe forces a transition at the joint and changes the weld preparation. Where the fitting wall differs on purpose, the engineer must say how the joint is to be prepared.</p>
      <p className={p}>If the pipe is still to be bought, specify it in the same package or cross-refer to it. The <Link className={l} href={postUrl(getPost("api-5l-line-pipe-rfq-grade-psl-dimensions-records")!)}>API 5L line pipe RFQ guide</Link> sets out the equivalent lines for pipe, and the <Link className={l} href={postUrl(getPost("pipeline-fittings-and-schedules")!)}>pipeline fittings and schedules overview</Link> explains how size and schedule fit together.</p>
      <h2 id="material-construction" className={h}>Which material and construction details belong in the RFQ?</h2>
      <p className={p}>State the material specification and grade for the fitting, matched to the pipe and to the service. Also say whether seamless or welded construction is acceptable, because a bidder will otherwise quote the cheaper route. If the service is sour or low-temperature, or if the project requires heat treatment, impact testing or hardness limits, write those into the RFQ as purchase requirements rather than assuming they are included. For sour service, see the <Link className={l} href={postUrl(getPost("nace-mr0175-iso-15156-sour-service-buyers-guide")!)}>NACE MR0175 / ISO 15156 buyer&apos;s guide</Link> for how the rules are normally applied. A matching grade name on the order does not prove suitability; the certificate for the actual lot does.</p>
      <h2 id="end-preparation" className={h}>What should the end preparation say?</h2>
      <p className={p}>Butt-weld fittings are supplied with bevelled ends so they can be welded to the pipe. State the bevel type and angle, the root face, and the wall the preparation must suit, or refer to the project&apos;s welding procedure. The welding procedure and welder qualifications are a separate record; the <Link className={l} href={postUrl(getPost("wps-pqr-welder-qualifications-fabrication-rfq-checklist")!)}>WPS, PQR and welder qualification checklist</Link> explains what a fabricator should be able to show. If a fitting is to be welded to a thicker or thinner pipe, ask the engineer how the ends are to be prepared before ordering, because the bevel is much cheaper to specify than to rework on site.</p>
      <h2 id="rfq-lines" className={h}>What lines should the RFQ contain?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Fitting type (elbow angle and radius, tee, reducer, cap), the dimensional standard and edition, and nominal size for each end.</li>
        <li>Wall thickness at each weld end, and the pipe specification and wall it will be welded to.</li>
        <li>Material specification and grade, seamless or welded, and any heat treatment, hardness or impact requirement.</li>
        <li>End preparation: bevel type, angle and root face, or the project welding procedure reference.</li>
        <li>Service conditions: design pressure and temperature, fluid, and whether sour-service or low-temperature rules apply.</li>
        <li>Documents: certificate type, heat numbers, inspection or NDE requirements, marking and any third-party witness.</li>
        <li>Packing, end protection and delivery marking so each lot stays identifiable.</li>
      </ul>
      <h2 id="records-and-checks" className={h}>What records and receiving checks should you ask for?</h2>
      <p className={p}>Ask for a material certificate that links to the heat number on the fitting; the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 material certificates guide</Link> explains the certificate types and what each one proves. The <Link className={l} href={postUrl(getPost("heat-number-traceability-mill-certificates")!)}>heat number traceability guide</Link> shows how to check that the number on the metal matches the paper. On receipt, compare the marking, size, wall and bevel against the order, and keep the fittings separated by grade so look-alike items are not mixed. Where mix-ups would be costly, positive material identification is a practical check, described in the <Link className={l} href={postUrl(getPost("positive-material-identification-xrf-oes-buyers-guide")!)}>PMI buyer&apos;s guide</Link>.</p>
      <h2 id="comparing-quotes" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table: the required value in the first column, then each bidder&apos;s fitting type and radius, quoted wall, material grade, seamless or welded route, end preparation, certificate type, delivery and quotation validity. Require every deviation to be written as a deviation. An offer that leaves out the wall, the radius or the certificate is not comparable with one that states them, however low the price.</p>
      <p className={p}>To send a fittings requirement, use the <Link className={l} href="/oil-and-gas/equipment/flanges-fittings-bolting/elbows-tees-and-reducers">Oillinko elbows, tees and reducers catalogue page</Link> or browse the <Link className={l} href="/">Oillinko equipment and service catalogue</Link>. Enquiries are reviewed and routed manually, and availability, suitability, manufacturing origin and commercial terms are confirmed for each one. This guide does not show that Oillinko stocks or is authorised to supply any particular grade, size or lot.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
