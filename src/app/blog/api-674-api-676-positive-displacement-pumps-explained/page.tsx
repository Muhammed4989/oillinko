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

const post = getPost("api-674-api-676-positive-displacement-pumps-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the actual difference between API 674 and API 676?",
    a: "API 674 covers reciprocating positive displacement pumps — direct-acting and power-frame (crankshaft) types that move fluid with a plunger or piston stroking back and forth in a cylinder. API 676 covers rotary positive displacement pumps — gear, screw, lobe and vane types that move fluid through continuously rotating elements. Both exclude controlled-volume metering pumps, which fall under API 675, and both exclude hydraulically driven pumps.",
  },
  {
    q: "Why choose a positive displacement pump instead of a centrifugal pump built to API 610?",
    a: "A centrifugal pump's flow rate falls as system pressure rises, following its performance curve, and it struggles with high-viscosity or shear-sensitive fluids. A positive displacement pump delivers essentially the same flow per revolution or stroke regardless of discharge pressure, within its rated limits, which makes it the standard choice for high-viscosity fluids (heavy crude, asphalt, lube oils), high-pressure/low-flow duties, and services needing accurate, pressure-independent flow.",
  },
  {
    q: "Does a positive displacement pump need a relief valve even if the pipeline already has one?",
    a: "Yes. A positive displacement pump will keep building pressure against a closed or blocked downstream valve until something fails, since it does not stall the way a centrifugal pump does against shutoff head. API 674 and API 676 both require a relief valve dedicated to protecting the pump and its immediate piping, sized for the pump's full rated capacity, independent of any relief protection elsewhere in the system.",
  },
  {
    q: "What is the difference between direct-acting and power-frame reciprocating pumps under API 674?",
    a: "A direct-acting pump is driven straight by steam or pneumatic pressure on one side of a piston, with no crankshaft — the pumped-side plunger moves in direct response to the driving fluid. A power-frame pump is driven by a motor through a crankshaft and crosshead, converting rotary motion into the plunger's reciprocating stroke, and is the more common arrangement for continuous, motor-driven process duties.",
  },
  {
    q: "What wears out first on a positive displacement pump, and does that affect spare parts planning?",
    a: "On reciprocating pumps, the packing or seal around the plunger and the suction/discharge check valves are usually the first wear items, since they see continuous cyclic loading every stroke; plungers and cylinder liners follow over a longer horizon, especially in abrasive service. On rotary pumps, wear concentrates on the close clearances between the rotating elements themselves — gear teeth, screw rotors, or lobes — and on the bushings or bearings supporting them. Both point to the same procurement habit: order a starter set of the specific wear items (packing, valves, or rotor sets) alongside the pump itself, rather than waiting for the first overhaul to find out lead times on parts that are effectively consumables.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Most process pumps in a plant are centrifugal, built to{" "}
          <Link className="text-accent hover:underline" href="/blog/api-610-pump-types-and-classes-explained">
            API 610
          </Link>
          . But for high-viscosity fluids, high-pressure/low-flow duties, or
          services that need flow largely independent of discharge pressure,
          positive displacement pumps take over — and API 610 does not apply
          to them. Two API standards cover the two mechanical families:{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 674
          </a>{" "}
          for reciprocating pumps and{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 676
          </a>{" "}
          for rotary pumps.
        </p>

        <h2 id="why-positive-displacement-at-all" className="mt-12 text-xl font-bold">
          Why positive displacement at all
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A centrifugal pump adds velocity to a fluid with a spinning
          impeller; how much flow it produces depends on where the system
          resistance curve intersects the pump&rsquo;s own performance curve, and
          flow falls as discharge pressure rises. Efficiency also falls away
          quickly once a centrifugal pump is run far from its best
          efficiency point, whereas a well-selected PD pump holds efficiency
          across a much wider turndown range, which matters for services
          that spend significant time away from a single fixed operating
          point. A positive displacement
          (PD) pump instead traps a fixed volume of fluid and physically
          moves it from suction to discharge each stroke or revolution, so
          flow stays essentially constant regardless of discharge pressure
          (within the pump&rsquo;s pressure rating) and depends mainly on speed.
          That property makes PD pumps the standard choice for fluids too
          viscous for an efficient centrifugal design, for high-pressure,
          low-flow duties such as chemical injection or high-pressure
          cleaning, and for services where accurate, pressure-independent
          flow matters more than raw capacity. The trade-off is that a PD
          pump cannot simply be throttled with a discharge valve the way a
          centrifugal pump can — closing a valve downstream of a running PD
          pump does not reduce its flow, it raises pressure until something
          gives, which is why relief protection sized for the pump itself,
          not just the system, is a fixed requirement rather than a
          site-specific option on both API 674 and API 676 packages.
        </p>

        <h2 id="api-674-reciprocating-pumps" className="mt-12 text-xl font-bold">
          API 674: reciprocating pumps
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 674 (<em>Positive Displacement Pumps — Reciprocating</em>, 3rd
          Edition, December 2010) covers the minimum requirements for
          reciprocating PD pumps and pump units in petroleum, petrochemical
          and gas industry service. A plunger or piston moves back and forth
          in a cylinder, displacing fluid on each stroke through suction and
          discharge check valves. The standard splits the family into two
          drive types:
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Direct-acting",
              d: "The pumped-side plunger is driven straight by steam or pneumatic pressure acting on the opposite side of the piston — no crankshaft or rotating drive train. Common where a site already has a steam or compressed-air utility and wants a simple, self-regulating stroke rate.",
            },
            {
              t: "Power-frame",
              d: "A motor drives a crankshaft and crosshead, converting rotary motion into the plunger's linear stroke — mechanically similar to a reciprocating compressor's drive end. This is the more common arrangement for continuous, motor-driven process duties and is what most API 674 pump packages in a refinery or petrochemical plant use.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Because a reciprocating pump delivers flow in discrete pulses
          rather than a steady stream, API 674 places heavy emphasis on
          pulsation and vibration control — acceptance criteria for
          pulsation dampeners, piping-induced vibration limits, and
          torsional analysis of the drive train — alongside the more
          familiar requirements for materials, bearing life and testing.
          Controlled-volume metering pumps and hydraulically driven pumps
          are explicitly excluded from API 674&rsquo;s scope; they fall under{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 675
          </a>{" "}
          instead.
        </p>

        <h2 id="api-676-rotary-pumps" className="mt-12 text-xl font-bold">
          API 676: rotary pumps
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 676 (<em>Positive Displacement Pumps — Rotary</em>, 4th
          Edition, February 2022) covers rotary PD pumps — gear, screw, lobe
          and vane types — that displace fluid through continuously rotating
          elements rather than a reciprocating stroke. Because the elements
          rotate rather than reverse direction, rotary pumps produce a much
          smoother, less pulsating flow than reciprocating pumps, while
          keeping the same essential advantage of flow that is largely
          independent of discharge pressure. Twin-screw pumps are common
          enough in oil and gas service that API 676 includes a dedicated
          annex on the factors affecting twin-screw efficiency, alongside
          general datasheets and an inspector&rsquo;s checklist that apply across
          all the rotary types it covers. As with API 674, controlled-volume
          and reciprocating pumps are outside its scope, and rotary pumps in
          purely auxiliary services (such as a lube-oil system) can often be
          sourced to a manufacturer&rsquo;s standard design rather than a full API
          676 build, where the purchaser accepts that lower level of
          customization.
        </p>

        <h2 id="api-674-vs-api-676-at-a-glance" className="mt-12 text-xl font-bold">
          API 674 vs API 676 at a glance
        </h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">&nbsp;</th>
                <th className="px-4 py-3">API 674</th>
                <th className="px-4 py-3">API 676</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pump motion", "Reciprocating plunger/piston", "Continuously rotating elements (gear, screw, lobe, vane)"],
                ["Flow character", "Pulsating — needs dampener/pulsation control", "Smooth, near-continuous"],
                ["Typical drive", "Direct-acting (steam/pneumatic) or power-frame (motor + crankshaft)", "Motor through a gearbox or direct coupling"],
                ["Typical duty", "High-pressure, low-flow — injection, high-pressure cleaning, well service", "High-viscosity transfer — heavy crude, asphalt, lube oil, polymer"],
                ["Excludes", "Controlled-volume pumps (API 675), rotary pumps (API 676)", "Controlled-volume pumps (API 675), reciprocating pumps (API 674)"],
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

        <h2 id="where-each-type-shows-up-in-the-field" className="mt-12 text-xl font-bold">
          Where each type shows up in the field
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Reciprocating pumps built to API 674 tend to cluster around
          high-pressure, comparatively low-flow duties: well-service and
          hydraulic fracturing pumps, hydrotest pump skids, high-pressure
          water-jetting units, and chemical injection at pressures beyond
          what a metering pump under API 675 is built for. Their triplex or
          quintuplex plunger arrangements (three or five plungers, phased to
          smooth out the combined pulsation) are chosen specifically to keep
          discharge pulsation manageable at those pressures. Rotary pumps
          built to API 676 cluster instead around viscous, continuous
          transfer duties: gear pumps for lube oil, fuel oil and other
          clean, moderate-viscosity fluids; twin-screw pumps for heavy
          crude, bitumen and multiphase (liquid-and-gas) transfer, where
          their tolerance for entrained gas is a genuine advantage over both
          centrifugal and gear designs; and lobe or vane pumps where gentle,
          low-shear handling matters, such as with fluids prone to
          emulsifying or shearing apart under a spinning gear mesh. Knowing
          which family a service falls into before a request for quotation
          goes out saves a round of vendor questions before a quote can even
          be prepared.
        </p>

        <h2 id="testing-and-materials" className="mt-12 text-xl font-bold">
          Testing and materials
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Both standards require a hydrostatic test of the pressure-containing
          parts and a witnessed (or at minimum documented) performance test
          before shipment, the same principle familiar from{" "}
          <Link className="text-accent hover:underline" href="/blog/api-610-pump-types-and-classes-explained">
            API 610 centrifugal pumps
          </Link>
          . Where PD pumps diverge is in what the performance test actually
          has to demonstrate: rather than a full head-versus-flow curve, the
          test confirms volumetric efficiency (how close actual delivered
          flow comes to the theoretical displacement at rated speed) and, for
          reciprocating pumps, that pulsation levels in the discharge piping
          stay within the levels assumed in the pulsation study. Sealing
          method is another point that needs to be explicit on the
          datasheet rather than left to the vendor&rsquo;s standard offering — many
          rotary and reciprocating PD pumps in less demanding services still
          use a packed gland rather than a mechanical seal, which is
          perfectly acceptable where minor leakage past the packing is
          tolerable, but is a materially different maintenance and emissions
          proposition from a seal built to{" "}
          <Link className="text-accent hover:underline" href="/blog/api-682-mechanical-seal-piping-plans-explained">
            API 682
          </Link>
          . Materials selection follows the fluid rather than a fixed table:
          abrasive or high-solids service pushes toward hardened wear rings
          and clearances on the generous side, while highly viscous but clean
          fluids (heavy crude, bitumen, polymer melts) push toward tighter
          clearances and, on rotary pumps, larger rotor diameters running at
          lower speed to keep shear and internal heating manageable.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A third standard sits alongside these two: API 675 covers
          controlled-volume (metering) pumps — reciprocating or diaphragm
          pumps built specifically for accurate, adjustable dosing rather
          than bulk transfer, such as corrosion inhibitor or methanol
          injection skids. A pump that needs to deliver a precisely
          adjustable, repeatable flow rate at low volume belongs under API
          675, not API 674, even though the underlying reciprocating
          mechanism looks similar at a glance.
        </p>

        <h2 id="what-to-check-on-a-pd-pump-datasheet" className="mt-12 text-xl font-bold">
          What to check on a PD pump datasheet
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Positive displacement pumps raise a few datasheet questions that
          rarely come up with a centrifugal pump, precisely because their
          failure modes are different: a centrifugal pump running against a
          closed valve simply recirculates and heats up, while a PD pump
          keeps displacing fluid regardless, turning a closed valve into an
          overpressure event within seconds rather than minutes.
        </p>
        <CheckList
          items={[
            "A relief valve dedicated to the pump and sized for its full rated capacity is included — a PD pump will keep building pressure against a blocked line rather than stalling",
            "Pulsation dampener sizing and acoustic/vibration analysis are included for reciprocating (API 674) packages operating near piping natural frequencies",
            "NPSH margin is checked at the pump's actual acceleration head, not just the steady-state figure used for centrifugal pumps — reciprocating pumps are far more sensitive to suction piping layout",
            "Materials and clearances are matched to the fluid's viscosity, abrasiveness and temperature range across the full operating envelope, not just the design point",
            "Seal or packing type (mechanical seal vs packed gland) is specified explicitly, since many rotary and reciprocating PD pumps still use packing in less critical services",
            "The edition of API 674 or API 676 the pump and its testing comply with is stated on the datasheet",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a reciprocating or rotary PD pump package? Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your pump datasheet
          </Link>{" "}
          and we will circulate it to verified manufacturers and check every
          returned offer against the standard, materials and testing you
          specified, including the relief valve and pulsation control items
          that are easy for a rushed quotation to leave out. If the pump
          also needs a mechanical seal and support system, see our guide to{" "}
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
