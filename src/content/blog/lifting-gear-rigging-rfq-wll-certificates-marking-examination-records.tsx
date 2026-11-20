import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("lifting-gear-rigging-rfq-wll-certificates-marking-examination-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A lifting gear RFQ should state the item type, the working load limit (WLL) or safe working load, the governing standard, the material grade and construction, the end fittings, the marking you expect, and the certificate and examination records that must arrive with every item. &quot;10 shackles, 25 t&quot; leaves each of those open, and lifting gear is exactly where an unmarked or uncertified item is not just a quality defect but a safety and legal one.</p>
      <p className={p}>This guide is for procurement and maintenance teams buying slings, shackles, hooks, eyebolts, hoists, beam clamps and similar lifting accessories, and offshore lifting sets. It is an enquiry checklist. Rigging design, lift planning and the choice of WLL belong to the competent lifting engineer, and the legal requirements depend on the country of use; this guide does not replace them.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a lifting gear RFQ built from item type, rated load, standard, marking and certificate records."/>
        <figcaption className="mt-3 text-sm text-muted">Five parts of a lifting gear enquiry that make quotations comparable.</figcaption>
      </figure>
      <h2 id="rules" className={h}>Which rules and standards govern lifting gear?</h2>
      <p className={p}>It depends on the country and the application. In Great Britain the Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) apply; the Health and Safety Executive says that lifting equipment and accessories must be clearly marked with their safe working loads, that thorough examination is carried out by a competent person who writes a report with the examination date, the next due date and any defects, and that the default interval for accessories is six months unless an examination scheme sets another. For offshore containers and lifting sets, DNV-ST-E271 (formerly DNV 2.7-1) covers design, manufacture, testing, certification, marking and periodic inspection, and EN 12079 is the related European series, with periodic inspection in a separate part. Product standards for slings, hooks and hardware, such as the ASME B30 series or the European EN 13414 series, apply by contract or jurisdiction. We checked the HSE and DNV descriptions on 20 November 2026, did not read the product standards and quote no WLL or proof-load values. Name the governing rules and editions in the RFQ and ask bidders to state which they certify to.</p>
      <h2 id="item-definition" className={h}>How should each item be defined?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Type and form: wire rope sling (leg count, end terminations), chain sling, round or webbing sling, shackle (bow or dee, pin type), hook (with or without latch), eyebolt, swivel, beam clamp, hoist, spreader or lifting beam.</li>
        <li>Rating: WLL or SWL for each configuration, including the angle or mode factors you want marked, and the lift geometry the rating assumes.</li>
        <li>Size and length: nominal size, working length measured as the standard defines it, and end fitting dimensions.</li>
        <li>Material and grade: for example the chain or forged steel grade, wire rope construction and core, or synthetic material, as the standard allows.</li>
        <li>Environment: temperature range, seawater or chemical exposure, hazardous-area use, and whether offshore marine-grade finish is needed.</li>
        <li>Standard and edition, and whether the item is to be CE or UKCA marked where that applies.</li>
      </ul>
      <h2 id="marking" className={h}>What marking and identification should be required?</h2>
      <p className={p}>Specify the marking on the item itself: the WLL, the unique identification number, the manufacturer or supplier identification, the grade or standard where applicable, and any required traceability code. A tag or plate that can fall off is weaker than a stamp, so say which you want for each type. The identification number must match the certificate, and you should check this at receipt with the same discipline as in the <Link className={l} href={postUrl(getPost("heat-number-traceability-mill-certificates")!)}>heat number traceability guide</Link>. Do not accept unmarked items with a loose certificate.</p>
      <h2 id="certificates" className={h}>Which certificates and records should arrive with each item?</h2>
      <p className={p}>Ask for a manufacturer&apos;s declaration or certificate of conformity for each product or batch, a test certificate where the standard or your procedure requires a proof test, and material certificates for load-bearing parts at the type you specify; the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 certificates guide</Link> explains those types. Where a competent person must examine the equipment before first use, say whether the supplier or a third party supplies the report and who the examiner is. A third-party examiner&apos;s competence can be checked in the same way as described in the <Link className={l} href={postUrl(getPost("third-party-inspector-credential-verification-rfq-scope")!)}>third-party inspector credential guide</Link>. Define the certificate language, format and the item identification it must cite, and decide whether certificates are needed before dispatch or with the goods. Equipment whose test instruments matter can also refer to the <Link className={l} href={postUrl(getPost("iso-17025-laboratory-scope-test-report-equipment-rfq")!)}>ISO 17025 scope guide</Link>.</p>
      <h2 id="inspection" className={h}>What inspection and witness points are sensible?</h2>
      <p className={p}>For critical or high-value items, agree witness or hold points: proof load testing, visual and dimensional checks, and a pre-shipment inspection of marking and certificates against the order. Set these out in an inspection and test plan as in the <Link className={l} href={postUrl(getPost("inspection-test-plans-hold-vs-witness-points")!)}>hold versus witness points guide</Link>. On receipt, check marking, condition and certificates before the item enters service, and record the result. Where used equipment, refurbished gear or hired items are offered, require a current examination report and a clear statement of history; do not accept equipment with an expired examination date.</p>
      <h2 id="packing-delivery" className={h}>How should packing and delivery be handled?</h2>
      <p className={p}>Specify packing that protects wire rope and synthetic slings from damage and contamination, stops marking from being obscured, and keeps certificates attached to or travelling with the correct item. Compare delivery terms with the <Link className={l} href={postUrl(getPost("exw-vs-fca-oil-gas-equipment-buyers")!)}>EXW and FCA guide</Link>, and see the <Link className={l} href={postUrl(getPost("export-packing-oil-gas-equipment-rfq")!)}>export packing guide</Link> for the general approach. Check the <Link className={l} href={postUrl(getPost("invoice-packing-list-origin-document-reconciliation")!)}>invoice and packing list reconciliation guide</Link> against the documents that arrive.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Use one table with the item list as rows: type, rating, standard and edition, material, marking, certificate type, examination arrangement, packing, delivery and validity. Treat missing certificates, a different standard or an unmarked item as deviations, not savings. A lower price may mean no proof test, a lower-grade chain, no individual identification or certificates by batch only. Issue clarifications to all bidders together, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send a lifting gear requirement, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/tools-lifting-maintenance/cranes-hoists-and-lifting-gear">cranes, hoists and lifting gear</Link> catalogue entry or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; specification, manufacturing origin, availability, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular lifting product.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
