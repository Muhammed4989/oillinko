import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  CheckList,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("api-671-couplings-and-baseplate-design")!;


const faqs = [
  {
    q: "What is API 671 and what does it cover?",
    a: "API 671 (Special-purpose Couplings for Petroleum, Chemical, and Gas Industry Services), 5th Edition, August 2020, specifies requirements for couplings used to transmit power between the rotating shafts of two machines in special-purpose applications. It covers design, materials of construction, manufacturing quality, inspection, and testing of gear, metallic flexible element, quill shaft, and torsionally resilient/damping couplings.",
  },
  {
    q: "Which coupling type does API 671 default to?",
    a: "Unless the purchaser specifies otherwise, the coupling shall be a metallic flexible element coupling (disc or diaphragm type). Gear couplings are not normally recommended for new applications and are only used when large axial displacements or space restrictions make a metallic flexible element impractical.",
  },
  {
    q: "What service factors does API 671 require?",
    a: "The applicable factor depends on coupling construction, loading and the specified edition. Ask the manufacturer to state the continuous and transient torque basis, selected factor and compliance with the project specification. Do not use an isolated factor as a complete sizing calculation.",
  },
  {
    q: "What does API 686 require for rotating equipment baseplates?",
    a: "Confirm the applicable API 686 edition and purchaser requirements for mounting, alignment, grout, anchorage and installation. The responsible structural and machinery engineers must approve the arrangement and tolerances for the actual package; this article does not provide a universal foundation design.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          The coupling between a driver and driven machine is one of the most
          overlooked components in a rotating equipment train, yet a coupling
          failure on an unspared centrifugal compressor or critical process pump
          can shut down an entire unit.{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards/digital-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 671
          </a>{" "}
          (<em>Special-purpose Couplings for Petroleum, Chemical, and Gas
          Industry Services</em>, 5th Edition, August 2020) exists precisely for
          these high-consequence services — large, high-speed, continuously
          operating machines that are often unspared and critical to the
          continued operation of the installation. Alongside the coupling
          itself, the baseplate that supports the equipment train is governed by{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards/digital-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 686
          </a>{" "}
          (<em>Machinery Installation and Installation Design</em>), and
          together these two documents define much of what determines whether
          an equipment package stays aligned and vibration-free for years or
          starts drifting within months.
        </p>

        <h2 id="what-api-671-covers" className="mt-12 text-xl font-bold">
          What API 671 covers — and what it deliberately leaves out
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 671 specifies requirements for couplings that transmit power
          between the rotating shafts of two machines in special-purpose
          applications in the petroleum, petrochemical, and gas industries. The
          standard covers the design, materials of construction, manufacturing
          quality, inspection, and testing of the coupling itself — but it
          deliberately does not define criteria for selecting which coupling
          type to use on a given application. That selection is the
          purchaser&rsquo;s responsibility, based on the machinery train&rsquo;s
          torsional characteristics, speed, misalignment conditions, and
          transient loading.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The couplings covered are designed to accommodate three types of
          shaft misalignment without imposing unacceptable mechanical loading on
          the coupled machines: parallel (lateral) offset, angular
          misalignment, and axial displacement. Clutch, hydraulic,
          eddy-current, rigid, radial spline, chain, and bellows couplings are
          explicitly excluded from the standard&rsquo;s scope.
        </p>

        <h2 id="coupling-types-under-api-671" className="mt-12 text-xl font-bold">
          The four coupling types under API 671
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Metallic flexible element (disc / diaphragm)",
              d: "The default choice under API 671 unless the purchaser specifies otherwise. Disc and diaphragm couplings transmit torque through the elastic bending of thin metallic membranes — no lubrication required, zero backlash, and a predictable failure mode. They accommodate angular and axial misalignment directly; parallel offset is handled by using a double-engagement (spacer) configuration with two flex points. Confirm the design factor and fatigue-life basis against the specified edition and actual loading.",
            },
            {
              t: "Gear couplings",
              d: "Not normally recommended for new applications under API 671. The standard permits gear couplings only where large axial displacements cannot be practically accommodated with disc or diaphragm elements, or where the coupling diameter is restricted and the gear coupling&rsquo;s higher power density is the only type that fits. Gear couplings require regular lubrication, will wear over time, and need an agreed wear and maintenance basis for the application.",
            },
            {
              t: "Quill shaft couplings",
              d: "A thin, torsionally flexible shaft that connects the driver and driven machine through a hub arrangement, often used on the low-speed side of a gear train or between a motor and a speed-increasing gearbox. Quill shaft couplings require assessment of the shaft, hubs and torsional behavior for the specified drive train.",
            },
            {
              t: "Torsional damping and resilient couplings",
              d: "Elastomeric or spring-type elements that add torsional flexibility and damping to the equipment train, typically on the low-speed side. Their sizing must address steady-state and transient torque; they may be used in combination with a metallic flexible element coupling elsewhere in the train to accommodate axial movement and reduce overhung mass. Confirm peak capacity and the applicable design factors with the manufacturer.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="service-factors-and-design-life" className="mt-12 text-xl font-bold">
          Service factors and minimum design life
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 671 ties service factors directly to coupling type, reflecting the
          different fatigue and wear characteristics of each design. The
          purchaser specifies the operating conditions — steady-state torque,
          maximum driver power, rated torque, transient peak torque, trip
          condition torque, and continuous cyclic loading — and the coupling
          manufacturer sizes the element to meet or exceed the applicable
          service factor across all of these conditions.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Coupling type</th>
                <th className="px-4 py-3">Min. service factor</th>
                <th className="px-4 py-3">Min. design life</th>
                <th className="px-4 py-3">Lubrication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Metallic flexible element", "Per approved specification", "Per fatigue assessment", "Typically none for flexible elements"],
                ["Gear", "Per approved specification", "Per wear assessment", "Manufacturer-specified lubrication"],
                ["Quill shaft", "Per approved specification", "As specified", "Confirm the complete assembly"],
                ["Torsional damping / resilient", "Per torsional assessment", "As specified", "Depends on construction"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                  <td className="px-4 py-3 text-muted">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="dbse-and-spacer-length" className="mt-12 text-xl font-bold">
          DBSE and spacer length
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Distance Between Shaft Ends (DBSE) is a critical dimension on any
          API 671 coupling datasheet. It is measured from the extreme end of
          one shaft (including any threaded end) to the extreme end of the next
          shaft, or in the case of integral flanges, between the mating faces.
          A spacer coupling with adequate DBSE allows the coupling element to be
          removed for maintenance without moving the driver or driven machine —
          a practical requirement on pumps and compressors where alignment is
          time-consuming and where any disturbance risks introducing soft foot
          or piping strain. The DBSE must be specified on the datasheet and
          matched to the equipment layout drawing, and the coupling
          manufacturer&rsquo;s rated torque and misalignment capacity must be
          verified at the specified DBSE, since these change with spacer length.
        </p>

        <h2 id="baseplate-design-api-686" className="mt-12 text-xl font-bold">
          Baseplate design under API 686
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A coupling transmits torque between shafts, but the baseplate
          transmits every other force — dead weight, live load, piping strain,
          thermal expansion, and the dynamic loads from unbalanced rotor
          forces — into the concrete foundation. API 686
          (<em>Machinery Installation and Installation Design</em>) sets the
          requirements for baseplate and soleplate design, grouting, anchor
          bolts, and leveling, and provides installation guidance for machinery projects
          in petroleum and gas service.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The most important principles are:
        </p>
        <CheckList
          items={[
            "Specify the approved mounting arrangement and identify the boundaries between machinery package, support structure and foundation.",
            "Baseplates must have sufficient strength and rigidity to transfer all applied forces to the foundation through anchor bolts, not through grout adhesion alone.",
            "Confirm the required mounting surface dimensions, flatness, coplanarity and the measurement method against the approved specification.",
            "Review baseplate details and stress-concentration concerns with the machinery and structural designers.",
            "Define the approved leveling and alignment provisions, including the permitted adjustment methods and installation procedure.",
            "Select grout and its installation requirements using the approved design and grout manufacturer instructions.",
            "Establish foundation dimensions and dynamic behavior through the applicable engineering design; do not rely on a universal equipment-to-foundation mass ratio.",
          ]}
        />

        <h2 id="what-changes-between-pump-and-compressor" className="mt-12 text-xl font-bold">
          What changes between pump and compressor installations
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 610 centrifugal pumps typically arrive as a complete,
          factory-assembled package — pump, driver, coupling, and baseplate
          assembled and aligned at the manufacturer&rsquo;s shop. The coupling
          type is usually specified by the pump manufacturer to match the
          baseplate layout and DBSE, and the purchaser confirms the selection
          on the datasheet. Centrifugal compressors, by contrast, are more
          likely to be assembled on-site, with the coupling selection and DBSE
          determined by the layout engineer and the torsional analysis of the
          complete equipment train. The coupling manufacturer receives the
          torsional analysis results — torque at every operating condition,
          speeds, and transient events — and sizes the coupling accordingly.
          For pump packages, the{" "}
          <Link className="text-accent hover:underline" href="/blog/category/oil-and-gas-equipment/pumps-rotating-equipment/api-610-pump-types-and-classes-explained">
            API 610
          </Link>{" "}
          standard explicitly references API 671 for special-purpose couplings,
          and API 686 governs the foundation and installation.
        </p>

        <h2 id="inspection-and-testing" className="mt-12 text-xl font-bold">
          Inspection and testing
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 671 requires the coupling manufacturer to provide a
          manufacturer&rsquo;s data report covering materials, dimensions, and
          test results. The standard requires a visual and dimensional
          inspection, verification of material certifications, and — for
          metallic flexible element couplings — confirmation that the flex
          elements meet the specified fatigue life at the rated conditions.
          Torsional analysis of the complete equipment train is not performed
          by the coupling manufacturer; it is a system-level study that
          the purchaser or engineer provides, and the coupling is sized to
          meet the resulting requirements. IOGP S-700, the supplementary
          specification published by the International Association of Oil and
          Gas Producers, adds additional requirements for procurement,
          including data sheets, quality requirements, and information
          requirements that overlay API 671 for projects that adopt the
          JIP33 framework.
        </p>

        <h2 id="what-to-check-on-rfq" className="mt-12 text-xl font-bold">
          What to check on a coupling or baseplate RFQ
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A coupling datasheet is deceptively simple — one page of fields — but
          an incomplete datasheet leads to either an oversized coupling (wasted
          money and overhung mass) or an undersized one (premature fatigue
          failure). The baseplate specification is equally important, because a
          baseplate that cannot hold flatness after grouting will undermine the
          best coupling and alignment in the plant.
        </p>
        <CheckList
          items={[
            "Specify the coupling type explicitly on the datasheet (metallic flexible element, gear, quill shaft, or torsional damping/resilient) — do not leave it to the manufacturer to guess",
            "Provide the complete torsional analysis, including steady-state, rated, transient peak, trip, and continuous cyclic torque at all operating speeds",
            "State the DBSE and verify it matches the equipment layout drawing and allows coupling element removal without moving the machinery",
            "Confirm the specified baseplate flatness tolerance, support condition and inspection method before accepting the dimensional report.",
            "Specify the coupling guard arrangement and confirm it meets the safety requirements of the site and applicable local regulations",
            "Include the API 671 edition (5th Edition, August 2020) and any supplementary specification (e.g. IOGP S-700) on the datasheet so the manufacturer quotes to the correct requirements",
            "For baseplates, agree grout shoulder geometry and expansion joint details with the responsible designer and grout manufacturer.",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing special-purpose couplings or complete rotating equipment
          packages? Browse our{" "}
          <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/pumps">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your coupling datasheet
          </Link>{" "}
          and Oillinko will circulate it to potential manufacturers, checking
          every returned offer against the API 671 edition, torsional
          requirements, and baseplate specifications you need confirmed before
          the order is placed.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
