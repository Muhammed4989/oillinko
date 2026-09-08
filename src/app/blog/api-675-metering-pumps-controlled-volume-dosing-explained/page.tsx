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

const post = getPost("api-675-metering-pumps-controlled-volume-dosing-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What does API 675 actually require of a metering pump?",
    a: "API 675 requires steady-state accuracy within ±1%, linearity within ±3%, and repeatability within ±3% of rated flow, each measured across the turndown ratio from 10% to 100% of rated capacity. The pump must be adjustable over this range while running, and rated capacity must be at least 110% of the maximum capacity specified.",
  },
  {
    q: "What is the difference between a hydraulic diaphragm and a packed plunger under API 675?",
    a: "A hydraulic diaphragm pump uses a flexible PTFE or elastomer diaphragm that is actuated by hydraulic oil from a piston, isolating the process fluid from the drive mechanism. A packed plunger pump displaces fluid directly using a reciprocating plunger sliding through a packed stuffing box. Both designs must meet the same accuracy and testing requirements under API 675, but the diaphragm type is preferred where the process fluid is toxic, corrosive, or where zero leakage from the liquid end is required.",
  },
  {
    q: "Is API 675 required for every chemical injection pump in a refinery?",
    a: "Not every dosing service justifies API 675. The standard is intended for hydrocarbon and high-consequence services — refinery chemical injection, gas processing, offshore platforms, and pipeline additive injection — where a dosing failure creates a safety or environmental event. Municipal water treatment, effluent plants, and general process dosing rarely justify the additional cost.",
  },
  {
    q: "What does API 675 require for diaphragm pumps regarding rupture detection?",
    a: "Hydraulically actuated diaphragm pumps under API 675 must provide diaphragm rupture detection — typically a pressure sensor or switch in the hydraulic circuit that alarms if the secondary diaphragm is breached and process fluid enters the hydraulic oil. This is one of the most common requirements that distinguishes an API 675 pump from a general-purpose metering pump.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Not every dosing pump in a plant needs a standard behind it — but for
          services where an under-dose or over-dose of a chemical has safety,
          environmental, or production consequences, a general-purpose metering
          pump is not enough.{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 675
          </a>{" "}
          (<em>Positive Displacement Pumps — Controlled Volume for Petroleum,
          Chemical, and Gas Industry Services</em>, 3rd Edition, November 2012)
          is the API standard that defines what a controlled-volume metering pump
          must actually deliver — tested accuracy, mandatory design features,
          and a documentation package that ties the pump&rsquo;s performance
          to the contract rather than a catalogue brochure.
        </p>

        <h2 id="what-api-675-covers" className="mt-12 text-xl font-bold">
          What API 675 covers
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 675 covers the minimum requirements for reciprocating,
          controlled-volume pumps and pump units for use in the petroleum,
          petrochemical, and gas industry services. The two pump constructions
          within its scope are hydraulic diaphragm and packed plunger designs.
          Rotary positive displacement pumps are not included, and diaphragm
          pumps that use direct mechanical actuation (e.g. solenoid-driven or
          direct-drive diaphragm pumps) are also excluded — those fall under{" "}
          <Link className="text-accent hover:underline" href="/blog/api-674-api-676-positive-displacement-pumps-explained">
            API 674
          </Link>{" "}
          or no specific API standard at all.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The standard covers the complete pump unit: liquid end, drive,
          gearbox, capacity adjustment mechanism, baseplate, relief arrangement,
          and instrumentation. It extends to multiplex arrangements where
          several liquid ends share one common drive. The standard requires the
          purchaser to specify certain details and features — it is a purchase
          specification, not a design manual, and the accuracy figures it
          specifies are contractual claims that the manufacturer must demonstrate
          through testing.
        </p>

        <h2 id="hydraulic-diaphragm-vs-packed-plunger" className="mt-12 text-xl font-bold">
          Hydraulic diaphragm vs packed plunger
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Hydraulic diaphragm",
              d: "A piston moves hydraulic oil (typically silicone oil) in a cavity behind a flexible PTFE or elastomer diaphragm. The hydraulic oil transmits the piston&rsquo;s displacement evenly across the diaphragm surface, which flexes to draw in and discharge the process fluid through check valves. This design isolates the process fluid entirely from the drive mechanism and is the preferred choice where the fluid is toxic, corrosive, or where leakage past a plunger packing is unacceptable. API 675 requires diaphragm rupture detection on this type — typically a pressure sensor or switch in the hydraulic circuit that alarms if the secondary diaphragm is breached. Double-diaphragm designs with a fluid-filled intermediate chamber are also covered.",
            },
            {
              t: "Packed plunger",
              d: "A reciprocating plunger slides through a packed stuffing box, displacing fluid directly in the cylinder on each stroke through suction and discharge check valves. This is a simpler, more robust design with fewer failure modes than a diaphragm, and is suitable for fluids that are compatible with the plunger and packing materials and where minor leakage past the packing is tolerable. API 675 requires a lantern ring in the stuffing box for flushing or adding lubricant to the packing, with drilled and tapped holes on the top and bottom of the pump body for inlet and outlet. Packed-plunger pumps require an external relief valve mounted in the purchaser&rsquo;s piping, unlike diaphragm pumps which use an integral hydraulic relief valve.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="performance-requirements" className="mt-12 text-xl font-bold">
          The three numbers that define API 675 performance
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Three measured properties define what API 675 actually requires of a
          metering pump, and a specification must cite all three to be
          meaningful:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Requirement</th>
                <th className="px-4 py-3">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Steady-state accuracy", "Within ±1% of rated flow", "At any fixed stroke length setting, the actual delivered flow stays within 1% of the set point over a sustained run"],
                ["Linearity", "Within ±3% of rated flow", "As stroke length is adjusted from 10% to 100% of rated capacity, the actual delivered flow follows a straight line against the dial setting within ±3%"],
                ["Repeatability", "Within ±3% of rated flow", "If the pump is set to the same stroke length and run repeatedly, each run delivers the same flow within ±3% of the previous runs"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          All three figures apply across the turndown ratio from 10% to 100%
          of rated capacity — this is the range over which the manufacturer
          guarantees accuracy. Turndown beyond 10:1 is achieved by variable
          speed operation or by using multiple pumps in parallel, and those
          conditions fall outside the accuracy envelope the standard defines.
          Rated capacity must be at least 110% of the maximum capacity
          specified, giving the purchaser a margin above the design duty.
        </p>

        <h2 id="turndown-ratio" className="mt--12 text-xl font-bold">
          Turndown ratio — what 10:1 actually means
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The turndown ratio is the ratio between the pump&rsquo;s maximum
          rated flow and the minimum flow at which accuracy, linearity, and
          repeatability are still guaranteed. API 675 requires a minimum
          turndown ratio of 10:1 — so a pump rated at 100 litres per hour
          must maintain ±1% accuracy at flows as low as 10 litres per hour.
          Below 10% of rated capacity, the manufacturer does not guarantee the
          standard&rsquo;s accuracy figures. Stroke length adjustment is
          performed manually via a scaled rotary dial or remotely via an
          Actuated Capacity Controller (ACC) that receives signals from a PLC
          or control system, and adjustment must be possible while the pump is
          running — stopping the pump to change the dose is not acceptable under
          the standard.
        </p>

        <h2 id="relief-valve-and-safety" className="mt-12 text-xl font-bold">
          Relief valve and safety requirements
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Like all positive displacement pumps, a controlled-volume pump will
          keep building pressure against a closed or blocked downstream valve
          until something fails. API 675 addresses this with two different
          relief valve arrangements depending on pump type:
        </p>
        <CheckList
          items={[
            "Diaphragm pumps must have an integral, adjustable hydraulic relief valve to protect the drive mechanism from excessive discharge pressure — set at least 10% or 175 kPa (25 psi) over rated discharge pressure, whichever is greater",
            "Packed-plunger pumps require an external relief valve in the purchaser&rsquo;s piping, sized for the pump&rsquo;s full rated capacity",
            "Relief valves must be self-seating and easily accessible for adjustment, repair, or replacement",
            "Gears in the pump drive assembly must be all-metal, designed with AGMA criteria, and carry a minimum service factor of 1.5",
            "Bearings must be selected for a defined minimum rated life",
            "Capacity adjustment must include a locking arrangement to prevent accidental drift from the set point",
          ]}
        />

        <h2 id="diaphragm-rupture-detection" className="mt-12 text-xl font-bold">
          Diaphragm rupture detection
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          This is the requirement that most often distinguishes an API 675
          hydraulic diaphragm pump from a general-purpose metering pump. A
          double-diaphragm design includes a secondary diaphragm behind the
          primary process-side diaphragm, with a fluid-filled intermediate
          chamber between them. If the primary diaphragm is breached, process
          fluid enters the intermediate chamber and contaminates the hydraulic
          oil — a pressure sensor or switch in the hydraulic circuit detects
          the change and triggers an alarm. Without this feature, a diaphragm
          failure would allow process fluid to migrate into the hydraulic oil
          and eventually into the drive mechanism, potentially causing
          undetected dosing errors or mechanical damage. For
          high-consequence services — corrosion inhibitor injection on a
          production platform, methanol injection on a gas processing plant —
          this detection feature is not optional; it is what makes the
          difference between a monitored injection system and an unmonitored
          one.
        </p>

        <h2 id="testing-and-documentation" className="mt-12 text-xl font-bold">
          Testing and documentation
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 675 requires a hydrostatic test of the pressure-containing parts
          and a witnessed performance test before shipment. The performance test
          confirms that the pump meets the accuracy, linearity, and repeatability
          figures at the specified conditions. If specified by the purchaser, a
          mechanical running test (typically 1–4 hours) is also performed.
          Documentation includes Certified Material Test Reports (CMTRs) for
          wetted parts, the manufacturer&rsquo;s data and drawing requirements
          (often called VDDRs), an inspector&rsquo;s checklist, and the test
          results. The manufacturer&rsquo;s data sheets — which define site
          details, performance criteria, and equipment furnished — are the
          contractual link between the purchaser&rsquo;s process requirements
          and the pump that gets built. An incomplete or generic datasheet is
          the most common specification error: it leaves the manufacturer to
          guess at the test scope and produces quotations that cannot be
          compared.
        </p>

        <h2 id="where-api-675-shows-up" className="mt-12 text-xl font-bold">
          Where API 675 metering pumps show up in the field
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 675 pumps appear in services where the dose matters and where
          an under-dose or over-dose has consequences beyond a minor process
          upset. Common applications include corrosion inhibitor injection
          (film-forming amines, oxygen scavengers) on offshore platforms and
          in refinery crude units, methanol injection for gas hydrate
          prevention in subsea and pipeline systems, polymer and flocculant
          dosing in produced water treatment, scale inhibitor injection in
          water injection systems, and chemical injection skids for pH control
          and neutralisation. The standard is less common in municipal water
          treatment and general industrial dosing, where the cost premium of
          an API 675 package — with its tested accuracy, documentation, and
          mandatory design features — is not justified by the consequences
          of a dosing error.
        </p>

        <h2 id="what-to-check-on-rfq" className="mt-12 text-xl font-bold">
          What to check on an API 675 datasheet or RFQ
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Citing API 675 on a datasheet without selecting any of the optional
          requirements leaves the manufacturer to guess at the test and
          certification scope, and produces quotations that cannot be compared.
          Specifying a duty that no controlled-volume pump can hold — such as a
          turndown far beyond 10:1 — means the accuracy figures are not
          contractually enforceable at the actual operating point. The datasheet
          must be complete and explicit.
        </p>
        <CheckList
          items={[
            "State the API 675 edition (3rd Edition, November 2012) and select which optional requirements apply — do not just cite the standard without specifying the test scope",
            "Specify the turndown ratio as 10:1 or state the actual turndown needed; if more than 10:1 is required, explain how variable speed or multiple pumps will cover the range",
            "Specify whether the pump is hydraulic diaphragm or packed plunger — this determines the relief valve arrangement and whether diaphragm rupture detection is required",
            "State the process fluid, temperature, viscosity, specific gravity, and whether the fluid is abrasive, corrosive, or shear-sensitive — diaphragm and packing material selection depends on this",
            "Specify the required suction conditions: NPSH available and NPIP (Net Positive Inlet Pressure) — controlled-volume pumps are more sensitive to suction-side conditions than centrifugal pumps because of the acceleration head",
            "Include the discharge pressure, required flow rate, and the number of pump heads in any multiplex arrangement",
            "Specify the electrical area classification (IEC 60079 or NFPA 70 / API 500) and whether the pump requires an Actuated Capacity Controller (ACC) for remote stroke adjustment",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing API 675 metering pumps or chemical injection skids? Browse
          our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your metering pump datasheet
          </Link>{" "}
          and Oillinko will circulate it to verified manufacturers, checking
          every returned offer against the API 675 edition, accuracy
          requirements, and testing scope you need confirmed before the order is
          placed. If the pump also needs a mechanical seal or support system, see
          our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/api-682-mechanical-seal-piping-plans-explained">
            API 682 seal piping plans
          </Link>
          .
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
