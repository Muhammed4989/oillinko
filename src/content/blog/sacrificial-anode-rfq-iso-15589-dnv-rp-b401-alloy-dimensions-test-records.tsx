import Link from "next/link";
import Image from "@/components/SiteImage";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("sacrificial-anode-rfq-iso-15589-dnv-rp-b401-alloy-dimensions-test-records")!;
const p = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const h = "mt-12 text-xl font-bold";
const l = "text-accent underline underline-offset-4";

export default function Article() {
  return <>
    <BlogPostHeader post={post}/>
    <Prose post={post}>
      <p className={p}>A sacrificial anode RFQ should state the governing specification and edition, the anode alloy and type, the dimensions, weight and core or attachment design, the environment it will work in, the tolerances, and the inspection, chemical analysis and electrochemical test records you expect with each batch. &quot;20 kg aluminium anodes&quot; gives a supplier the weight and nothing that decides whether the anodes will protect the structure or pass your own quality checks.</p>
      <p className={p}>This guide is for procurement teams buying galvanic (sacrificial) anodes for pipelines, offshore structures, tanks and similar steel assets. It is an enquiry checklist. The cathodic protection design, the number of anodes, their mass and their layout belong to the corrosion engineer; this guide does not calculate them or give acceptance values.</p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Diagram showing a sacrificial anode RFQ built from specification, alloy, geometry, environment and test records."/>
        <figcaption className="mt-3 text-sm text-muted">Five parts of an anode enquiry that make quotations comparable.</figcaption>
      </figure>
      <h2 id="standards" className={h}>Which standards and design documents apply?</h2>
      <p className={p}>Public listings describe ISO 15589-1 as covering cathodic protection of onshore pipelines, from pre-installation surveys through design, materials, installation, operation and maintenance, and ISO 15589-2 (a 2024 edition is listed) as covering offshore pipelines, including risers and flexible pipe, with retrofit and repair. For offshore structures and general galvanic anode design, DNV-RP-B401 (listed with a May 2021 edition) addresses cathodic protection design using aluminium or zinc anodes, including specification of their manufacture and installation. We checked these listings on 19 November 2026 and have not read the standards; one listing even suggests a newer edition of ISO 15589-1 may have replaced the 2015 text, so confirm editions with the publishers. Project or company specifications such as NORSOK M-503 may add detailed anode inspection requirements. Name the governing document and edition in the RFQ and ask bidders to state which edition they certify to.</p>
      <h2 id="alloy" className={h}>How should the alloy and anode type be defined?</h2>
      <p className={p}>State the alloy family (aluminium-based or zinc-based) and any project designation, and make clear who chooses it. Alloy suitability depends on the environment (seawater, brackish water, buried soil or sediment, temperature), so give the operating conditions and the service life used in the design. The chemical composition limits and electrochemical performance requirements come from the standard and the project specification; ask the bidder to quote against them and to list any deviation. If the anode is a particular shape (bracelet, stand-off, flush-mounted, hull or tank anode, or a buried type with backfill), give the drawing or shape code. For buried anodes, say whether backfill and lead wire are included.</p>
      <h2 id="geometry" className={h}>What dimensions, core and tolerances must be fixed?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted sm:text-base">
        <li>Net and gross weight, with the tolerance the design allows, and whether weight is checked per anode or per batch.</li>
        <li>Dimensions and tolerances from the drawing, including length, cross-section and the anode&apos;s overall envelope.</li>
        <li>Core: material, dimensions, surface preparation and coating or galvanising, with weld and fabrication requirements and the core material certificate; see the <Link className={l} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 certificates guide</Link>.</li>
        <li>Attachment method: weld-on, bolted or clamped, with the interface to the structure defined by the structural or pipeline engineer.</li>
        <li>Marking: batch or heat identification on each anode so records can be traced to the installed item.</li>
      </ul>
      <h2 id="inspection" className={h}>Which inspection and test records should arrive with the batch?</h2>
      <p className={p}>Older versions of NORSOK M-503, as summarised in public copies, list the topics an anode inspection programme covers: chemical analysis, anode weight and dimensions, surface irregularities and cracks, internal defects checked destructively on samples, and electrochemical quality-control testing. Whether these apply, and at what frequency, depends on the specification you name, so state it. Ask for the chemical analysis certificate for each cast or heat, the weight and dimension report, the visual inspection record, the core inspection record, and the electrochemical test report for the batch, with the test method and laboratory named. Ask whether the test laboratory has an accreditation scope that covers the method, using the <Link className={l} href={postUrl(getPost("iso-17025-laboratory-scope-test-report-equipment-rfq")!)}>ISO 17025 scope guide</Link>. Define who witnesses the casting, sampling and tests, using the <Link className={l} href={postUrl(getPost("inspection-test-plans-hold-vs-witness-points")!)}>inspection and test plan guide</Link>, and consider independent verification as described in the <Link className={l} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>third-party inspection overview</Link>.</p>
      <h2 id="traceability" className={h}>How do you keep batches traceable?</h2>
      <p className={p}>The anode alloy composition is only meaningful if it is tied to the anodes delivered. Require each anode to carry the batch or cast number that appears on the certificate, and the packing list to show the batch per package. Compare the markings and weights against the certificates on receipt, and retain the records with the asset. The same discipline as in the <Link className={l} href={postUrl(getPost("heat-number-traceability-mill-certificates")!)}>heat number traceability guide</Link> applies, and a quick material check on cores can use the <Link className={l} href={postUrl(getPost("positive-material-identification-xrf-oes-buyers-guide")!)}>positive material identification guide</Link> where suitable.</p>
      <h2 id="packing" className={h}>What should the RFQ say about packing and delivery?</h2>
      <p className={p}>Anodes are heavy, and damage to cores or coating during transport is a real risk. Specify packing (pallets or crates, strapping, protection of the core and leads), marking of packages, the weight per package and the delivery term. See the <Link className={l} href={postUrl(getPost("export-packing-oil-gas-equipment-rfq")!)}>export packing guide</Link> and compare terms with the <Link className={l} href={postUrl(getPost("exw-vs-fca-oil-gas-equipment-buyers")!)}>EXW and FCA guide</Link>. If the shipment includes wood packaging for export, confirm the marking as in the <Link className={l} href={postUrl(getPost("ispm-15-wood-packaging-mark-verification")!)}>ISPM 15 verification guide</Link>.</p>
      <h2 id="comparing" className={h}>How should you compare quotations?</h2>
      <p className={p}>Lay bidders against the RFQ lines: standard and edition, alloy and chemistry basis, anode shape and weight, core material and fabrication, tolerances, test and inspection scope, witness arrangement, records, packing, lead time and exclusions. A low price may mean a different alloy basis, a smaller test scope, or no electrochemical testing. Ask each bidder to list deviations and answer clarifications for all bidders together, as in the <Link className={l} href={postUrl(getPost("equipment-rfq-revision-control-bid-clarifications")!)}>RFQ revision control guide</Link>.</p>
      <p className={p}>To send a cathodic protection requirement, see the Oillinko <Link className={l} href="/oil-and-gas/equipment/pipeline-intervention/cathodic-protection-equipment">cathodic protection equipment</Link> catalogue entry or start from the <Link className={l} href="/">Oillinko catalogue</Link>. Enquiries are reviewed and routed manually; specification, manufacturing origin, availability, conformity and commercial terms are confirmed for each request. This guide does not show that Oillinko or any listed company supplies a particular anode.</p>
    </Prose>
    <RelatedPosts post={post}/>
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post)]}/>
    <CtaBand/>
  </>;
}
