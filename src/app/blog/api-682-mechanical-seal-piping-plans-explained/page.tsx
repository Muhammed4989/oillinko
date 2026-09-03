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

const post = getPost("api-682-mechanical-seal-piping-plans-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between Plan 52 and Plan 53?",
    a: "Both support a dual-seal (two seals in series) arrangement, but the support fluid pressure runs opposite directions. Plan 52 holds the buffer fluid at a pressure below the seal chamber (process) pressure, so it is a containment and monitoring circuit, not a barrier — if the inboard seal leaks, process fluid enters the buffer fluid, which is vented or drained, not the atmosphere. Plan 53 (53A/53B/53C) holds the barrier fluid at a pressure above the seal chamber pressure, so any leakage path runs from the barrier fluid into the process, keeping the hazardous process fluid fully contained between two seals at all times.",
  },
  {
    q: "Is Plan 11 always the right default for a single mechanical seal?",
    a: "Plan 11 is the default starting point in API 682 because it needs no external equipment — it simply recirculates process fluid from pump discharge, through a restriction orifice, into the seal chamber. It works well for clean, non-abrasive fluids with an adequate margin above their vapor pressure. If the process fluid is abrasive, prone to polymerizing, too viscous, or too close to flashing at seal chamber conditions, Plan 11 will shorten seal life quickly and a different plan (23, 32, or a dual arrangement) is usually specified instead.",
  },
  {
    q: "When would a buyer specify Plan 32 instead of Plan 11?",
    a: "Plan 32 injects a clean, compatible fluid from an external source directly into the seal chamber, rather than relying on the process stream itself. It is specified when the process fluid is unsuitable for lubricating and cooling the seal faces on its own — for example, slurries, fluids that crystallize or polymerize on a pressure drop, or streams with insufficient margin above their vapor pressure. Because Plan 32 consumes flush fluid continuously (it is a once-through, not recirculating, system), the injected fluid must be compatible with the process since a small amount will dilute it.",
  },
  {
    q: "Do all pumps need a dual seal with Plan 52 or Plan 53?",
    a: "No. API 682 groups seals into arrangements — Arrangement 1 (single seal), Arrangement 2 (dual unpressurized/tandem, typically with Plan 52) and Arrangement 3 (dual pressurized, typically with Plan 53A/B/C) — and the choice depends on the process fluid's hazard classification, not on pump size or head. A single seal with an appropriate flush plan (11, 23 or 32) is standard for services where atmospheric emissions are acceptable within regulatory limits. Dual seals are specified for flammable, toxic, or environmentally sensitive fluids where zero or near-zero fugitive emissions are required.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            API 682
          </a>{" "}
          (<em>Pumps — Shaft Sealing Systems for Centrifugal and Rotary
          Pumps</em>, 4th Edition, 2014, reaffirmed 2022) does not just define
          the mechanical seal itself — it also defines the numbered piping
          plans that keep the seal alive. A seal quote or datasheet that just
          says &ldquo;API 682 seal&rdquo; without a plan number is
          incomplete. Here is what Plans 11, 23, 32, 52 and 53 actually do,
          how they relate to the seal&rsquo;s Category and Arrangement, and how to
          tell which one a given service needs.
        </p>

        <h2 id="what-a-piping-plan-actually-is" className="mt-12 text-xl font-bold">
          What a piping plan actually is
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A mechanical seal fails quickly if its faces run dry, overheat, or
          are exposed to solids. A piping plan is the standardized circuit of
          tubing, orifices, coolers and reservoirs built around the seal
          chamber to prevent that — circulating, cooling, filtering or
          replenishing the fluid that lubricates the seal faces. API 682
          assigns each configuration a plan number so that a purchase order
          can specify &ldquo;Plan 23&rdquo; and every seal vendor builds the
          same circuit, rather than each supplier inventing its own flush
          arrangement. The 4th edition covers more than thirty plan
          variations in total; the five below account for the large majority
          of what actually appears on process pump datasheets. Getting the
          plan wrong is not a paperwork issue — an underspecified flush
          circuit is one of the most common causes of early seal failure in
          the field, well before the seal faces themselves reach the end of
          their design life.
        </p>

        <h2 id="seal-category-and-arrangement-first" className="mt-12 text-xl font-bold">
          Category and Arrangement come before the plan number
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Before a piping plan is chosen, API 682 first classifies the seal
          itself along two independent axes. <strong>Category</strong>{" "}
          describes the pump type and duty the seal is qualified for and the
          depth of testing and documentation behind it: Category 1 covers
          general, non-API-610 pump services with a comparatively modest
          pressure and temperature window; Category 2 is qualified for
          API 610 pumps across a wider pressure and temperature range; and
          Category 3 carries the most extensive qualification testing, for
          the most critical or hazardous duties. <strong>Arrangement</strong>{" "}
          instead describes how many seals are fitted and how they relate to
          each other — Arrangement 1 is a single seal, Arrangement 2 is a
          dual unpressurized (tandem) pair sharing a buffer fluid, and
          Arrangement 3 is a dual pressurized pair sharing a barrier fluid.
          The piping plan is then selected to suit whichever Arrangement was
          chosen: Plans 11, 23 and 32 support Arrangement 1, Plan 52 supports
          Arrangement 2, and Plan 53 (in its 53A, 53B or 53C form) supports
          Arrangement 3. A datasheet that specifies a plan number without
          also confirming Category and Arrangement is only giving half the
          picture.
        </p>

        <h2 id="single-seal-flush-plans-11-23-and-32" className="mt-12 text-xl font-bold">
          Single-seal flush plans: 11, 23 and 32
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          These three plans all support a single seal (API 682 Arrangement
          1). They differ in where the flush fluid comes from and whether it
          is cooled before it reaches the seal chamber.
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Plan 11 — discharge recirculation",
              d: "The default flush plan for most single seals. Fluid is taken from the pump discharge, passed through a restriction orifice to drop pressure, and fed into the seal chamber. No external equipment is needed. Suits clean, non-abrasive fluids with adequate margin above their vapor pressure at seal chamber conditions.",
            },
            {
              t: "Plan 23 — recirculation through a cooler",
              d: "A closed loop within the seal chamber itself: a pumping ring circulates a small volume of fluid out through a heat exchanger and back in, cooled. Used when the process temperature is too high for the seal faces or for the fluid's own vapor margin, even though the fluid is otherwise clean enough for Plan 11. Because the loop is closed, the cooler duty is much smaller than an equivalent once-through system.",
            },
            {
              t: "Plan 32 — external flush injection",
              d: "A clean, compatible fluid from an outside source is injected continuously into the seal chamber at controlled flow and pressure, and is not recirculated. Specified when the process fluid itself cannot do the job — abrasive slurries, fluids that crystallize or polymerize as pressure drops, or streams with no usable margin above their vapor pressure. Because Plan 32 is once-through, the injected fluid must be chemically compatible with the process, since a small amount will mix into it.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="dual-seal-plans-52-and-53" className="mt-12 text-xl font-bold">
          Dual-seal plans: 52 and 53
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          When a single seal&rsquo;s fugitive emissions are not acceptable —
          because the process fluid is flammable, toxic, or otherwise
          environmentally restricted — API 682 specifies a dual-seal
          arrangement: two seals in series with a support fluid circulating
          between them. Plan 52 and Plan 53 both feed that space, but at
          opposite pressures relative to the process, which changes what
          happens if a seal leaks.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Seal arrangement</th>
                <th className="px-4 py-3">Support fluid pressure</th>
                <th className="px-4 py-3">If the inboard seal leaks</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Plan 52",
                  "Dual unpressurized (tandem) — Arrangement 2",
                  "Buffer fluid held below seal chamber pressure",
                  "Process fluid enters the buffer fluid, which is vented or drained — a containment/monitoring circuit, not primary sealing",
                ],
                [
                  "Plan 53 (A/B/C)",
                  "Dual pressurized — Arrangement 3",
                  "Barrier fluid held above seal chamber pressure",
                  "Barrier fluid enters the process instead — the hazardous fluid never reaches the outboard seal or atmosphere",
                ],
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
          Plan 53 itself has three sub-variants depending on how the barrier
          fluid is pressurized: 53A uses a reservoir with a nitrogen gas
          blanket and is the simplest, but the barrier fluid can absorb some
          of that gas; 53B uses a sealed bladder accumulator, avoiding gas
          entrainment and generally favored above roughly 10 bar (150 psi)
          differential pressure; and 53C uses a piston accumulator, which
          tracks fluctuating process pressure automatically and suits pumps
          where suction or discharge pressure varies during operation.
        </p>

        <h2 id="other-plans-worth-knowing" className="mt-12 text-xl font-bold">
          Other plans worth knowing
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Plans 11, 23, 32, 52 and 53 cover most process pump datasheets, but
          a few other plan numbers come up often enough to be worth
          recognizing. <strong>Plan 13</strong> is the mirror image of Plan
          11: instead of taking flush fluid from pump discharge, it returns
          seal chamber fluid back to the pump suction, which is typically
          used on vertical pumps or where seal chamber pressure needs to stay
          close to suction pressure. <strong>Plan 21</strong> is closely
          related to Plan 23 — fluid is taken from discharge, cooled through
          a heat exchanger, and fed into the seal chamber — but it is
          once-through rather than a closed recirculating loop, so it needs a
          larger cooler for the same duty. <strong>Plan 62</strong> is not a
          flush plan at all but a quench: a low-pressure stream, often steam
          or water, injected on the atmosphere side of a single seal to stop
          the product from coking, crystallizing or icing at the outboard
          face rather than to lubricate the seal itself. Seeing one of these
          on a datasheet alongside a Plan 11 or 23 circuit is normal and does
          not indicate a dual-seal arrangement.
        </p>

        <h2 id="why-getting-the-plan-right-matters" className="mt-12 text-xl font-bold">
          Why getting the plan right matters
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A mechanical seal that is otherwise correctly selected — right
          face materials, right spring design, right elastomer for the
          process fluid — will still fail early if the piping plan around it
          is wrong for the service. Running Plan 11 on a fluid close to its
          vapor pressure lets the flush flash across the orifice, starving
          the faces of liquid lubrication and causing rapid dry-running
          damage. Undersizing a Plan 23 cooler leaves the seal chamber
          running hotter than the seal&rsquo;s temperature rating, accelerating
          elastomer and lubricant degradation even though the plan number on
          the datasheet looks correct. On dual-seal systems, a Plan 52
          reservoir without proper level and pressure instrumentation can
          mask a failing inboard seal for weeks, since there is no alarm
          until the buffer fluid is visibly consumed or contaminated — by
          which point the outboard seal may already be running in
          conditions it was never designed for. None of these are the seal
          cartridge&rsquo;s fault; they are piping plan design and monitoring
          decisions, which is exactly why API 682 treats the plan as
          integral to the seal specification, not an afterthought bolted on
          by whichever contractor happens to route the tubing.
        </p>

        <h2 id="what-to-check-on-a-seal-datasheet" className="mt-12 text-xl font-bold">
          What to check on a seal datasheet
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A pump quote that specifies &ldquo;mechanical seal per API 682&rdquo;
          without further detail leaves too much to the vendor&rsquo;s discretion.
          Before accepting an offer, confirm:
        </p>
        <CheckList
          items={[
            "The piping plan number (11, 23, 32, 52, 53A/B/C, or another) is stated explicitly, not left as 'seal manufacturer standard'",
            "The seal Category (1, 2 or 3) and Arrangement (1, 2 or 3) match the process fluid's hazard classification, not just the pressure and temperature",
            "For Plan 32, the source and compatibility of the external flush fluid is confirmed against the process stream",
            "For Plan 52/53, the buffer or barrier fluid type, reservoir size, and instrumentation (level, pressure, temperature alarms) are specified on the datasheet, not left implicit",
            "The vendor has stated which edition of API 682 the seal and its qualification testing comply with",
            "Seal chamber dimensions match the pump's bearing bracket per API 682 Annex, so the seal is not a field-fit compromise",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a pump package with a specific seal plan already defined?
          Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your pump and seal datasheet
          </Link>{" "}
          and we will circulate it to verified manufacturers and check every
          returned offer against the plan and arrangement you specified. For
          the pump side of the same datasheet, see our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/api-610-pump-types-and-classes-explained">
            API 610 pump types and classes
          </Link>
          , and for the gasket and flange side of the connection, see{" "}
          <Link className="text-accent hover:underline" href="/blog/gaskets-and-sealing-products-explained">
            gaskets and sealing products explained
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
