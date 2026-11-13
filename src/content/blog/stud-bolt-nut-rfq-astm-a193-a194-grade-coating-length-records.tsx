import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("stud-bolt-nut-rfq-astm-a193-a194-grade-coating-length-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>&quot;B7 studs, 2H nuts&quot; is a common shorthand, but it is not yet a complete bolting order. A buyable stud bolt and nut set needs the bolt specification and grade, the nut specification and grade, thread series, diameter, length, coating, quantity and the documents that prove what was supplied. Put those on separate lines in the RFQ, ask every bidder to quote against them, and compare any deviation openly.</p>
      <p className={p}>This guide is for procurement and maintenance teams ordering flange bolting for oil and gas work. It explains what to specify and what to ask bidders to confirm. It does not choose a bolting grade for your service or approve a substitution. The piping engineer or the governing project specification makes that decision, and the current edition of each standard and the supplier&apos;s documentation for the quoted lot govern.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing the five parts of a stud bolt and nut RFQ: bolt grade, nut grade, size and length, coating, and records."/>
        <figcaption className="mt-3 text-sm text-muted">Five lines that turn &quot;B7 and 2H&quot; into a quotable, checkable bolting set.</figcaption>
      </figure>
      <h2 id="what-the-standards-cover" className={h}>What do ASTM A193 and A194 actually cover?</h2>
      <p className={p}>ASTM A193/A193M covers alloy-steel and stainless steel bolting materials for high-temperature or high-pressure service, and ASTM A194/A194M covers the carbon, alloy and stainless nuts used with them. They are material specifications. They define chemistry, heat treatment, mechanical properties and marking by grade; they do not define the thread form, the length you need, the coating, or the flange standard the bolting serves. Both texts are paywalled and editions change, so read grades and limits from the edition your project cites. This guide was written on 13 November 2026 from the standards&apos; published scope descriptions and quotes no table values.</p>
      <p className={p}>For low-temperature service, bolting is normally specified under a different ASTM standard, A320/A320M, which adds impact-test requirements. If an asset operates in cold climates or handles refrigerated fluids, ask the piping engineer which specification applies before the RFQ is issued, rather than assuming the usual A193 grade is acceptable.</p>
      <h2 id="bolt-and-nut-grades" className={h}>Why must the bolt grade and the nut grade be matched?</h2>
      <p className={p}>A193 grades differ in alloy and heat treatment. B7 is a chromium-molybdenum steel widely used for flange bolting. B7M is the same family heat-treated to a lower strength so that it can meet the hardness limits that sour-service rules impose. B16 is a chromium-molybdenum-vanadium steel associated with higher-temperature duty, and the B8 family covers austenitic stainless bolting in different classes. Nuts are graded separately under A194, with grades such as 2H for B7-type bolting and 2HM for the lower-hardness pairing. The nut must suit the bolt it will be run onto, and the standard does not allow a grade substitution without the purchaser&apos;s permission, so a bidder who quotes &quot;equivalent&quot; nuts is asking you to approve a change.</p>
      <p className={p}>If the service is sour, hardness is a purchase requirement and not a detail to settle later: say so in the RFQ and read the <Link className={l} href={postUrl(getPost("nace-mr0175-iso-15156-sour-service-buyers-guide")!)}>NACE MR0175 / ISO 15156 buyer&apos;s guide</Link> for how the sour-service rules are normally applied. Do not infer sour-service suitability from the grade name alone; ask for hardness test results and the standard edition on the certificate.</p>
      <h2 id="rfq-lines" className={h}>What lines should a stud bolt RFQ contain?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Bolt standard and grade (for example A193 B7 or B7M) and nut standard and grade (for example A194 2H or 2HM), each with the edition your project cites.</li>
        <li>Thread series and class, nominal diameter and the number of studs per joint; state whether the bolting is fully threaded or has a defined unthreaded portion.</li>
        <li>Length, with how it is measured, and whether the quantity includes two nuts per stud. Overall length should come from the joint stack-up, not from guesswork.</li>
        <li>Coating or plating, if any, and who selects it. State whether the coating is part of the specification or a supplier option.</li>
        <li>Service conditions: design temperature, fluid, and whether sour-service or low-temperature rules apply.</li>
        <li>Required documents: material certificate type, heat or lot numbers, hardness results where required, and marking evidence.</li>
        <li>Packing, protection and delivery marking, so lots stay identifiable on site.</li>
      </ul>
      <h2 id="length-and-stack-up" className={h}>How do you work out the stud length?</h2>
      <p className={p}>Add up what the stud must pass through: both flange thicknesses, the gasket thickness in its compressed state, any washers, and the space for two nuts with the thread projecting past each, as your bolting practice requires. Then add any extra needed for tensioning or torque tools if a controlled-bolting method is planned. A short stud leaves the nut with poor thread engagement; an over-long one is a snag and a source of mix-ups in stores. For a replacement job, measure a clean installed stud and confirm it against the joint drawing, because studs on older plant are sometimes already non-standard. Gasket type changes the stack: a ring-type joint gasket sits differently from a spiral wound one, as described in the <Link className={l} href={postUrl(getPost("rtj-gasket-rfq-ring-number-profile-material-hardness")!)}>ring-type joint gasket guide</Link> and the <Link className={l} href={postUrl(getPost("spiral-wound-gasket-identification-rfq")!)}>spiral wound gasket identification guide</Link>.</p>
      <h2 id="coating-and-friction" className={h}>Why does the coating matter for tightening?</h2>
      <p className={p}>Coatings and platings protect against corrosion, but they also change friction between thread and nut face. If a bolting procedure assumes a torque-to-load relationship for a particular lubricant or coating, changing the coating without telling the engineer can change the achieved bolt load. State the coating in the RFQ, ask the bidder to confirm that studs and nuts are coated as a matched set, and give the same information to whoever writes the tightening procedure. Where a service provider will tighten the joints, the <Link className={l} href={postUrl(getPost("controlled-bolting-services-rfq-handover-guide")!)}>controlled bolting services guide</Link> lists what that scope should include. Substituting a stainless grade for a coated alloy grade is also a material change, not a cosmetic one.</p>
      <h2 id="comparing-quotes" className={h}>How should you compare quotations and check delivery?</h2>
      <p className={p}>Use one comparison table: the required value in the first column, then each bidder&apos;s quoted bolt grade, nut grade, size, length, coating, certificate type, delivery and validity. Require each deviation to be written as a deviation. A cheaper offer with unspecified nuts, a different coating or no lot traceability is not comparable.</p>
      <p className={p}>On receipt, check the markings against the quoted grade, compare the heat or lot numbers on the certificate with those on the bolting, and keep a sample from each lot if your inspection plan requires it. Mixed lots of look-alike studs are a real risk on a busy site, so keep grades in labelled bags. The <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 material certificates guide</Link> explains the certificate types you can request, and the <Link className={l} href={postUrl(getPost("flanges-gaskets-and-bolting")!)}>flanges, gaskets and bolting overview</Link> shows how bolting sits alongside flange class and gasket choice. Flange class is covered in the <Link className={l} href={postUrl(getPost("asme-b16-5-flange-pressure-classes")!)}>flange pressure class guide</Link>.</p>
      <p className={p}>To send a bolting requirement, use the <Link className={l} href="/oil-and-gas/equipment/flanges-fittings-bolting">Oillinko flanges, fittings and bolting catalogue page</Link> or browse the <Link className={l} href="/">Oillinko equipment and service catalogue</Link>. Enquiries are reviewed and routed manually, and availability, suitability, manufacturing origin and commercial terms are confirmed for each one. This guide does not show that Oillinko stocks or is authorised to supply any particular brand, grade or lot.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
