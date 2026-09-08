import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

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
    a: "API 671 specifies minimum coupling service factors based on type: 1.5 for metallic flexible element couplings, 3.0 for torsional damping and resilient couplings, 1.75 for gear couplings, and 1.5 for quill shaft couplings. These factors are applied to steady-state torque to establish the coupling's continuous torque rating.",
  },
  {
    q: "What does API 686 require for rotating equipment baseplates?",
    a: "API 686 requires that all rotating equipment be installed on baseplates or soleplates, not directly on the foundation with anchor bolts. Baseplates must have machined surfaces extending at least 50 mm beyond equipment feet, radiused outside corners, vertical jacking screws for leveling, and be designed to transfer all applied forces to the foundation through anchor bolts and grout — not through grout adhesion alone.",
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
            href="https://www.api.org/products-and-services/standards"
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
            href="https://www.api.org/products-and-services/standards"
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
              d: "The default choice under API 671 unless the purchaser specifies otherwise. Disc and diaphragm couplings transmit torque through the elastic bending of thin metallic membranes — no lubrication required, zero backlash, and a predictable failure mode. They accommodate angular and axial misalignment directly; parallel offset is handled by using a double-engagement (spacer) configuration with two flex points. API 671 specifies a minimum 1.5 service factor and a minimum continuous service life of five years for this type.",
            },
            {
              t: "Gear couplings",
              d: "Not normally recommended for new applications under API 671. The standard permits gear couplings only where large axial displacements cannot be practically accommodated with disc or diaphragm elements, or where the coupling diameter is restricted and the gear coupling&rsquo;s higher power density is the only type that fits. Gear couplings require regular lubrication, will wear over time, and have a minimum service factor of 1.75 with a minimum design life of three years — the shortest among the four types.",
            },
            {
              t: "Quill shaft couplings",
              d: "A thin, torsionally flexible shaft that connects the driver and driven machine through a hub arrangement, often used on the low-speed side of a gear train or between a motor and a speed-increasing gearbox. Quill shaft couplings carry a minimum service factor of 1.5 and are detailed in Annex D of the standard.",
            },
            {
              t: "Torsional damping and resilient couplings",
              d: "Elastomeric or spring-type elements that add torsional flexibility and damping to the equipment train, typically on the low-speed side. These are sized with a service factor of 3.0 based on steady-state torque and are often used in combination with a metallic flexible element coupling elsewhere in the train to accommodate axial movement and reduce overhung mass. The peak capacity of the elastomeric element must exceed the calculated transient/peak torque by a factor of 1.15.",
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
                ["Metallic flexible element", "1.5", "5 years", "None required"],
                ["Gear", "1.75", "3 years", "Regular greasing / oil"],
                ["Quill shaft", "1.5", "As specified", "None required"],
                ["Torsional damping / resilient", "3.0", "As specified", "None (elastomeric) or oil-filled"],
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
          bolts, and leveling, and applies to all rotating equipment installations
          in petroleum and gas service.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The most important principles are:
        </p>
        <CheckList
          items={[
            "All rotating equipment must be installed on baseplates or soleplates — direct attachment of equipment feet to the foundation with anchor bolts is not permitted (with limited exceptions for large reciprocating compressors).",
            "Baseplates must have sufficient strength and rigidity to transfer all applied forces to the foundation through anchor bolts, not through grout adhesion alone.",
            "Machined mounting surfaces must extend at least 50 mm (2 in.) beyond the outer three sides of equipment feet as installed, and must be flat and coplanar within 150 μm/m (0.002 in./ft) of distance between pads.",
            "Outside corners of baseplates and soleplates must have a minimum 50 mm (2 in.) radius to prevent stress concentration and grout cracking.",
            "Vertical jacking screws with leveling pads must be provided for elevation adjustment — shims and wedges are not permitted without purchaser approval, because they create point loads and prevent grout from being put in compression.",
            "Epoxy grout is the transfer medium between the baseplate and the foundation, and must be specified for its compressive strength, flowability, and thermal expansion coefficient — not merely its &ldquo;non-shrink&rdquo; label.",
            "Foundation mass ratios: a minimum of 3:1 (foundation to rotating equipment mass) for centrifugal machines, and 5:1 to 10:1 for reciprocating machines.",
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
          For both pumps and compressors, the{" "}
          <Link className="text-accent hover:underline" href="/blog/api-610-pump-types-and-classes-explained">
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
            "Confirm the baseplate flatness tolerance: 150 μm/m (0.002 in./ft) across mounting pads, demonstrated in the manufacturer&rsquo;s shop with the baseplate supported at foundation bolt holes only",
            "Specify the coupling guard arrangement and confirm it meets the safety requirements of the site and applicable local regulations",
            "Include the API 671 edition (5th Edition, August 2020) and any supplementary specification (e.g. IOGP S-700) on the datasheet so the manufacturer quotes to the correct requirements",
            "For baseplates, confirm that grout shoulder width is at least 75 mm from the baseplate edge to the foundation edge, and that expansion joints are placed at 1.2–1.8 m (4–6 ft) intervals",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing special-purpose couplings or complete rotating equipment
          packages? Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your coupling datasheet
          </Link>{" "}
          and we will circulate it to verified manufacturers, checking every
          returned offer against the API 671 edition, torsional requirements,
          and baseplate specifications you need confirmed before the order is
          placed.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
