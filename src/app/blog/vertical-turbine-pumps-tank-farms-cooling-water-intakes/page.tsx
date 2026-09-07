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

const post = getPost("vertical-turbine-pumps-tank-farms-cooling-water-intakes")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between a VS1 and a VS6 vertical turbine pump?",
    a: "Both are wet-pit designs suspended into a sump, tank or can, but VS1 is a single-casing diffuser pump with the discharge routed straight up through the column to a baseplate at grade, while VS6 is a double-casing (\"can\") diffuser pump, where an outer barrel contains the pumped fluid and allows the pump to be installed above grade with the required submergence built into the can itself rather than a deep civil sump.",
  },
  {
    q: "Why do vertical turbine pumps need less NPSH margin than an equivalent horizontal pump?",
    a: "The impellers sit down inside the sump, tank or can, below the liquid level at grade, so the pump benefits from the static head of that liquid column instead of having to lift the liquid up to a suction nozzle. This largely removes suction lift from the NPSH calculation, which is why vertical turbine designs are the standard choice wherever NPSH available at grade would otherwise be marginal.",
  },
  {
    q: "Do vertical turbine pumps need a separate intake design study?",
    a: "For any wet-pit or sump installation, yes — the pump manufacturer's performance guarantee assumes the flow arriving at the impeller eye is uniform and free of air-entraining vortices. ANSI/HI 9.8 covers intake design (sump dimensions, minimum submergence, bay spacing, screens and anti-vortex devices), and a physical or CFD model study is commonly required for larger or more critical installations.",
  },
  {
    q: "Is the shaft on a vertical turbine pump lubricated by the pumped product or separately?",
    a: "Both arrangements exist. An open lineshaft design uses the pumped liquid itself to lubricate the lineshaft bearings, which is simple and common in clean water service. Where the product is not suitable as a lubricant — for example if it is dirty, corrosive or must not be diluted — an enclosed lineshaft design carries the shaft inside a separate tube with its own oil or grease lubrication, isolated from the pumped fluid.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Tank farm transfer and cooling water intake duties share one
          constraint a horizontal pump cannot solve cheaply: the liquid level
          the pump must draw from sits well below grade, and NPSH available at
          a horizontal suction nozzle would be too low to trust across the
          full operating range. The fix, codified in{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 610
          </a>{" "}
          as the vertically suspended (VS) pump family, is to put the
          impellers down at the liquid instead of trying to lift the liquid
          up to the pump. This article covers how the VS sub-types differ,
          which ones actually get specified for tank farms and cooling water
          intakes, and the intake-design and testing details that decide
          whether the installed pump performs the way the datasheet promised.
        </p>

        <h2 id="why-vertical-instead-of-horizontal" className="mt-12 text-xl font-bold">Why vertical instead of horizontal</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A vertically suspended pump hangs its impellers, bowls or first
          stage down inside a wet pit, sump, tank or can, below the liquid
          surface at grade, with only the driver and discharge head sitting
          above ground. Because the impeller is already submerged, the pump
          gains the static head of the liquid column above it instead of
          having to lift liquid up to a suction nozzle before it can even
          begin developing head. That is why VS pumps are the default choice
          for tank farm transfer from low-lying storage, and for cooling
          water intakes drawing from a river, sea, or reservoir intake
          structure where the available water level can vary and NPSH margin
          at grade would otherwise be marginal or negative. The trade-off is
          civil cost and access: a horizontal pump in a pump house is simpler
          to inspect and maintain than a unit with its wet end sitting three,
          six or more metres below a removable deck, so the vertical
          configuration is usually chosen because the NPSH problem leaves no
          practical alternative, not because it is the cheaper or easier
          option to own. Variable frequency drives are common on cooling
          water and tank transfer duties too, since a VS pump running
          continuously often needs to track a varying flow demand rather
          than run fixed-speed against a throttled discharge valve, and
          buyers should confirm the motor and any downstream instrumentation
          are specified for variable-speed duty from the outset rather than
          added as an afterthought once the pump is already on order.
        </p>

        <h2 id="the-api-610-vs-sub-types" className="mt-12 text-xl font-bold">The API 610 VS sub-types</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 610 (13th edition, published June 2026) groups vertically
          suspended pumps into single-casing and double-casing designs, each
          with several configurations depending on the impeller type and how
          the discharge column is arranged:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Casing</th>
                <th className="px-4 py-3">Configuration</th>
                <th className="px-4 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["VS1", "Single", "Wet-pit diffuser pump, discharge through the column", "Deep sumps and pits, tank farm transfer"],
                ["VS2", "Single", "Wet-pit volute pump, discharge through the column", "Moderate flow/head sump service"],
                ["VS3", "Single", "Axial-flow impeller, discharge through the column", "High flow, low head — large water transfer"],
                ["VS4", "Single", "Line-shaft sump pump, separate discharge column", "Deep installations needing multiple lineshaft bearings"],
                ["VS5", "Single", "Cantilever sump pump, unsupported shaft, no submerged bearings", "Sumps with dirty or abrasive liquid where a submerged bearing is undesirable"],
                ["VS6", "Double (can)", "Multistage diffuser pump inside an outer barrel", "Cooling water intakes and tank farms where a deep civil sump is impractical"],
                ["VS7", "Double (can)", "Single-stage volute pump inside an outer barrel", "Similar to VS6, lower head, single-stage duty"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                  <td className="px-4 py-3 text-muted">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          VS6 and VS7 &ldquo;can&rdquo; pumps are the configuration most often called out
          specifically as a vertical turbine pump in tank farm and refinery
          service, because the outer barrel supplies the submergence the
          impellers need without a deep concrete sump — the can itself is
          simply set into a shallower excavation or mounted at grade. VS1
          through VS5 remain common for water and firewater duties where a
          concrete wet pit or sump is being built anyway as part of the site
          civil works, so the extra cost of a can is not justified.
        </p>

        <h2 id="tank-farm-transfer-service" className="mt-12 text-xl font-bold">Tank farm transfer service</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          In a tank farm, vertical turbine pumps are typically used for
          product transfer between tanks, loading to pipeline or truck/rail
          racks, and firewater duty from a dedicated storage tank. The can
          (VS6/VS7) arrangement is common here because it avoids excavating a
          deep sump next to a tank foundation, and because the barrel can be
          sized to give the required submergence even when the source tank is
          drawn down close to its low working level. Buyers should confirm
          NPSH available is checked against the lowest operating level in the
          source tank, not just the normal level, since that is the condition
          that actually governs cavitation risk. On multi-product tank farms
          it is also worth confirming the wetted materials proposed suit the
          full range of products the pump may see over its life, not only the
          product it is being commissioned on, since a can pump is
          considerably more disruptive to pull for a materials change than a
          horizontal end-suction pump would be.
        </p>

        <h2 id="cooling-water-intake-service" className="mt-12 text-xl font-bold">Cooling water intake service</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Cooling water intakes draw continuously from a river, sea, canal or
          reservoir, often through a screened intake structure, and typically
          run 24/7 with high reliability expectations since a trip can force
          a process or power unit offline. Vertical wet-pit or can pumps suit
          this duty because they tolerate a fluctuating source water level
          without re-priming, and because the pump station footprint can be
          kept compact relative to a horizontal split-case alternative pulling
          from the same structure. Materials selection matters more here than
          in clean tank service — bronze, duplex stainless or coated
          carbon steel impellers and wear rings are common choices depending
          on water chemistry, biofouling potential and whether the source is
          fresh, brackish or seawater. Seawater and brackish intakes in
          particular tend to call for higher-alloy trims and, in some cases,
          cathodic protection on the can or column, so it is worth stating the
          water source and salinity explicitly on the inquiry rather than
          leaving the manufacturer to assume &ldquo;cooling water&rdquo; means fresh
          water.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Screening is worth specifying explicitly as part of the same
          enquiry rather than leaving it to the civil contractor. Trash
          racks stop large debris before it reaches the pump, while
          traveling or fixed screens downstream of the racks catch finer
          material that would otherwise foul impeller passages or wear rings
          over time. Screen mesh size and approach velocity both feed
          directly into the intake design calculation in the next section,
          so it is worth settling them before the sump or can geometry is
          finalised rather than treating screening as a separate, later
          decision.
        </p>

        <h2 id="npsh-margin-and-intake-design" className="mt-12 text-xl font-bold">NPSH margin and intake design</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A vertical turbine pump&rsquo;s real-world performance depends as much on
          how the sump, pit or can is shaped as on the pump itself. Poor
          intake design — insufficient submergence, sharp approach angles,
          uneven bay spacing on multi-pump installations — creates
          air-entraining vortices and pre-swirl at the impeller eye, which
          shows up as reduced head, lower efficiency, and vibration that a
          factory test on a clean test loop will never reveal. ANSI/HI 9.8
          (Rotodynamic Pumps for Pump Intake Design) sets out minimum
          submergence, bay geometry and anti-vortex device guidance for both
          suction piping and wet-pit installations, and is the reference most
          specifications point to when a physical or CFD model study is
          required for larger or more critical intakes.
        </p>
        <CheckList
          items={[
            "NPSH available checked at the lowest anticipated operating level, not the normal level",
            "Minimum submergence over the bell/suction confirmed against ANSI/HI 9.8, not just the pump vendor's rule of thumb",
            "Bay spacing and approach geometry reviewed for multi-pump installations to avoid one pump's wake disturbing its neighbour",
            "Trash racks or screens sized so intake velocity stays low enough to limit debris carry-over and vortex formation",
            "A physical or CFD model study specified where the intake is large, unusual in geometry, or feeding critical service",
          ]}
        />

        <h2 id="column-lineshaft-and-bearing-arrangement" className="mt-12 text-xl font-bold">Column, lineshaft and bearing arrangement</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Two lubrication arrangements cover most vertical turbine pumps.
          An open lineshaft design uses the pumped liquid itself to lubricate
          the lineshaft bearings running down inside the column — simple and
          economical, and the usual choice for clean water such as a
          dedicated firewater or clean cooling water source. Where the
          pumped liquid is dirty, corrosive, or simply unsuitable as a
          bearing lubricant, an enclosed lineshaft design carries the shaft
          inside a separate tube with its own oil or grease lubrication,
          fully isolated from the process fluid — the more common choice for
          product transfer duties in a tank farm. Buyers should confirm which
          arrangement a quote assumes, since it changes both price and
          maintenance interval, and is not always obvious from a short
          datasheet description alone. Lineshaft bearing spacing and material
          (typically rubber, bronze or a composite such as a fluoropolymer
          blend) should also be confirmed against the actual setting depth,
          since a column length quoted generically rather than against the
          real submergence and sump depth is a common source of a pump that
          arrives too short — or unnecessarily long — for the installation.
        </p>

        <h2 id="maintenance-and-pull-out-access" className="mt-12 text-xl font-bold">Maintenance and pull-out access</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A detail that is easy to underweight at enquiry stage is how the
          pump actually gets pulled for maintenance once it is installed. A
          deep-set wet-pit VS1/VS2 pump may need the full column and bowl
          assembly lifted clear of the pit, which means confirming crane or
          hoist access and headroom above the pump before the civil design is
          finalised, not after. A can-mounted VS6/VS7 pump is generally
          easier in this respect, since the bowl assembly can be withdrawn
          from the can without disturbing the discharge piping, but it still
          needs a clear vertical lift path and enough laydown space at grade
          for the full column length. Buyers specifying a vertical pump for
          the first time sometimes size the pump correctly but overlook the
          maintenance envelope around it, which turns a routine bowl
          overhaul into a scaffolding and rigging exercise that was never
          budgeted for.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          It is worth asking the manufacturer, at quotation stage, for the
          expected pull-out length and weight of the longest single section,
          and confirming that against what your site can actually lift and
          lay down. This is a simple question that a manufacturer or
          sourcing partner familiar with vertical turbine pumps will answer
          without hesitation, and one that a generic reseller working purely
          from a catalogue often cannot.
        </p>

        <h2 id="factory-testing-a-vertical-pump" className="mt-12 text-xl font-bold">Factory testing a vertical pump</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A VS pump cannot be fully performance-tested on a standard
          horizontal test loop, because its behaviour depends on how it sits
          in a sump or can. Manufacturers instead test vertical pumps in a
          vertical test sump or pit sized to reproduce realistic submergence,
          and for can-mounted VS6/VS7 designs the pump is often tested
          complete with a test can, or with the actual can where practical, as
          a combined &ldquo;string test&rdquo; rather than testing the bowl assembly
          alone. Hydraulic performance is still verified against{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.iso.org/standard/41202.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO 9906
          </a>{" "}
          acceptance grades, but buyers should confirm at enquiry stage
          whether the quoted price includes a witnessed test, and whether
          that test will be run at the pump&rsquo;s actual setting depth and column
          length rather than a shortened test configuration — a detail that
          is easy to overlook until the test report arrives with a footnote
          about it.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a vertical turbine pump package for a tank farm or cooling
          water intake? Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your pump datasheet
          </Link>
          . Oillinko will circulate it to verified manufacturers experienced
          with the specific VS configuration and intake conditions your
          project needs, and check the returned offers against submergence,
          NPSH margin, lubrication arrangement and test scope before they
          reach you.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
