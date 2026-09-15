import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { BlogPostHeader, CheckList, Faq, JsonLd, Prose, RelatedPosts, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post=getPost("export-packing-oil-gas-equipment-rfq")!;
const paragraph="mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading="mt-12 text-xl font-bold";
const link="text-accent underline underline-offset-4";
const faqs=[
  {q:"Is seaworthy packing a complete purchase specification?",a:"No. Describe the equipment, transport route, handling, exposure and storage assumptions. Ask for a packing proposal with defined protection, package data, documentation and responsibilities rather than relying on that phrase alone."},
  {q:"Does an ISPM 15 mark prove that a crate protects equipment?",a:"No. ISPM 15 concerns phytosanitary risks associated with wood packaging. Equipment protection, structural suitability and preservation need their own review. Confirm applicable wood-packaging requirements for the actual shipment."},
  {q:"What should an equipment packing list identify?",a:"Identify each package and its contents, dimensions and weights, then connect equipment tags, purchase-order lines and loose accessories to those package numbers. Keep preliminary estimates distinct from final dispatch data."},
];

export default function Page(){return <>
  <BlogPostHeader post={post}/>
  <Prose>
    <p className={paragraph}>
      Export packing for oil and gas equipment should be specified before
      the goods reach the dispatch area. A quotation saying seaworthy packing
      included does not explain how a valve, pump assembly or instrument
      will be protected, which storage conditions were assumed, or whether
      loose accessories can be identified on arrival. These gaps can leave
      the buyer comparing different scopes under the same description.
      Request a packing proposal that connects the equipment, journey and
      receiving arrangements to clear deliverables.
    </p>
    <p className={paragraph}>
      Three questions deserve separate answers: how the item is protected,
      how the packed cargo is handled and secured for transport, and how
      every package is documented. This guide addresses the information to
      request and review. It does not provide a crate design, preservation
      recipe or lifting and lashing procedure. Those depend on the supplied
      equipment and actual transport arrangement. Resolve them with the
      manufacturer and competent packing and logistics providers rather than
      copying a method from an unrelated shipment.
    </p>
    <figure className="mt-8">
      <Image src={post.image} width={1200} height={630} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-xl border border-line" alt="Export packing review connects equipment protection, transport handling and package-level records before release."/>
      <figcaption className="mt-3 text-sm text-muted">Three connected deliverables for the enquiry. This is a planning diagram, not a packing or lifting design.</figcaption>
    </figure>

    <h2 id="journey-and-storage" className={heading}>Define the journey and storage assumptions</h2>
    <p className={paragraph}>
      Tell the supplier the intended transport modes, collection point,
      destination and any expected transshipment or consolidation. Identify
      whether equipment will go directly into a controlled store or may
      wait before installation. Provide the expected storage duration and
      environment as project inputs, and distinguish confirmed arrangements
      from estimates. A manufacturer proposing protection for a short,
      sheltered journey needs to know if the project actually anticipates
      prolonged storage or repeated handling between different facilities.
    </p>
    <p className={paragraph}>
      Ask the proposal to state its assumptions and limitations in writing.
      Establish what happens if shipment or installation is delayed, who
      reviews continued suitability, and who can authorize revised protection.
      The <Link className={link} href={postUrl(getPost("consolidated-shipments-and-multi-vendor-orders")!)}>consolidated shipment guide</Link>{" "}explains
      how combining vendors changes readiness and handling responsibilities.
      Here, the specific concern is what remains protected and identifiable
      while the equipment waits. An equipment completion date should not
      silently become the start of an unlimited preservation commitment.
    </p>

    <h2 id="equipment-protection" className={heading}>Separate equipment protection from the outer package</h2>
    <p className={paragraph}>
      Request a description of the proposed protection for the actual item:
      exposed connections, machined surfaces, delicate instruments, electrical
      accessories and any parts shipped separately. Identify which components
      need individual protection and which remain installed on an assembly.
      A sturdy outer case is not a complete explanation of contamination,
      moisture or contact protection inside it. Ask the manufacturer to
      identify approved materials and methods, including any restrictions
      on products that could contact the equipment or its process surfaces.
    </p>
    <p className={paragraph}>
      Keep preservation requirements tied to the relevant equipment manual
      and supplier instructions. Obtain the preparation record, packing date,
      stated storage conditions and any required inspection or renewal
      arrangements. If the package must be opened for inspection, define
      who restores the specified protection and updates the record. Avoid
      prescribing a universal desiccant quantity, coating or maintenance
      interval. The buyer needs an accountable preservation scope that the
      receiving team can follow, including the information needed before
      unpacking and eventual installation.
    </p>

    <h2 id="wood-packaging-scope" className={heading}>Check wood packaging requirements separately</h2>
    <p className={paragraph}>
      The IPPC&apos;s <a className={link} href="https://www.ippc.int/en/core-activities/standards-setting/ispms/" target="_blank" rel="noopener noreferrer">current adopted standards listing for ISPM 15</a>{" "}describes
      phytosanitary measures for raw-wood packaging used in international
      trade, including dunnage. It distinguishes this material from wood
      processed so that it is free from pests, with plywood given as an
      example. Do not assess a mixed-material package from the case panels
      alone: ask the packer to identify its construction and the relevant
      supporting or bracing materials when determining the applicable scope.
    </p>
    <p className={paragraph}>
      Confirm the current requirements for the shipment with the appointed
      logistics provider and relevant plant-protection authority. Request
      appropriate compliance evidence for regulated wood packaging and
      record any changes if packages are repaired or repacked. An ISPM 15
      mark addresses a different question from equipment protection; it does
      not establish crate strength, moisture resistance or the condition of
      the contents. Keep the wood-packaging review distinct from the
      manufacturer&apos;s preservation proposal and the carrier&apos;s cargo
      acceptance requirements. No particular destination&apos;s clearance outcome
      can be guaranteed from a generic packing description.
    </p>

    <h2 id="handling-and-securing" className={heading}>Give the transport planner usable cargo data</h2>
    <p className={paragraph}>
      Obtain the proposed package count, external dimensions, net and gross
      weights, and any manufacturer-defined orientation or handling restrictions.
      Identify which figures are estimates and when final data will be
      available. An unpacked catalogue weight cannot describe a finished
      crate or skid. Ask for the relevant handling information and approved
      drawings where needed, including designated lifting interfaces and
      support requirements. Let the responsible transport specialists assess
      loading and securing against those inputs; a shipping label does
      not replace an engineered handling arrangement.
    </p>
    <p className={paragraph}>
      The <a className={link} href="https://www.imo.org/en/ourwork/safety/pages/ctu-code.aspx" target="_blank" rel="noopener noreferrer">IMO explanation of the 2014 CTU Code</a>{" "}identifies
      it as non-mandatory guidance for packing and handling cargo transport
      units across sea and land transport. Its coverage includes those
      packing, securing, receiving and unpacking units. Use the applicable
      guidance and project requirements to clarify responsibilities with the
      providers. Packaging the equipment and securing its package inside
      a container are separate tasks that must work together. State who
      performs each and who reviews changes to the transport plan.
    </p>

    <h2 id="packing-list-and-identity" className={heading}>Connect the packing list to every equipment line</h2>
    <p className={paragraph}>
      The U.S. International Trade Administration&apos;s <a className={link} href="https://www.trade.gov/packing-list" target="_blank" rel="noopener noreferrer">packing-list guidance</a>{" "}describes
      a package-level record of contents, weights and measurements. For
      project equipment, extend that identification to purchase-order lines,
      equipment tags and serial numbers where applicable. Use consistent
      package references on the records and external identification. Receiving
      personnel should be able to locate an item without assuming that
      every case contains one complete assembly. Keep the final list aligned
      with the actual dispatch configuration after any repacking or split shipment.
    </p>
    <p className={paragraph}>
      Consider a pump set whose coupling guard, instrument accessories and
      spare seals travel separately. This is an illustrative planning example,
      not an Oillinko shipment record. Each loose item needs a package
      location and a connection to its parent equipment. Agree how drawings,
      certificates and preservation instructions will be delivered too. A
      packing list establishes what is packed; it does not replace material
      evidence or functional acceptance records. The <Link className={link} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>material certificate guide</Link>{" "}addresses
      a different part of that documentation package.
    </p>

    <h2 id="packing-release-and-rfq" className={heading}>Agree release evidence and compare complete offers</h2>
    <p className={paragraph}>
      Specify what must be reviewed before dispatch: the packing description,
      final cargo list, applicable wood-packaging evidence, preservation
      instructions and agreed photographs. If an inspection is required
      before case closure, identify the notice period and who authorizes
      release. The <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>third-party inspection guide</Link>{" "}helps
      define witness responsibilities. Photographs can support a record of
      visible condition, but do not establish unseen protection or prove
      that a packing design is suitable for every handling event.
    </p>
    <p className={paragraph}>
      Compare the included packing, preservation, loading, documentation and
      any storage or repacking services as separate commercial items. Use
      the <Link className={link} href={postUrl(getPost("exw-vs-fca-oil-gas-equipment-buyers")!)}>EXW versus FCA buyer guide</Link>{" "}for
      the agreed handover responsibilities. Submit the equipment list and
      journey assumptions through Oillinko&apos;s <Link className={link} href="/oil-and-gas/services/freight-expediting-and-project-logistics">project logistics enquiry page</Link>.
      Oillinko reviews the requirement and coordinates it manually with
      suitable providers; packing methods, availability, responsibilities and
      commercial terms are confirmed for the specific enquiry.
    </p>
    <CheckList items={[
      "Equipment list and separately shipped accessories",
      "Journey, handling and storage assumptions",
      "Manufacturer-approved protection and preservation scope",
      "Package construction and applicable wood-packaging evidence",
      "Final package identifiers, contents, dimensions and weights",
      "Packing, securing, inspection and release responsibilities",
      "Explicit exclusions and the process for delays or repacking",
    ]}/>
    <Faq faqs={faqs}/>
  </Prose>
  <RelatedPosts post={post}/>
  <JsonLd data={[articleJsonLd(post),breadcrumbJsonLd(post),faqJsonLd(faqs)]}/>
  <CtaBand/>
</>;}
