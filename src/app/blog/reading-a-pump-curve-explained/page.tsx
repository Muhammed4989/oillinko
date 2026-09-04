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

const post = getPost("reading-a-pump-curve-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between NPSH required and NPSH available?",
    a: "NPSH required (NPSHr) is a property of the pump itself, published by the manufacturer as a curve rising with flow — by the Hydraulic Institute's definition, it is the NPSH at which cavitation has reduced total head by 3%. NPSH available (NPSHa) is a property of your installation: the suction pressure actually presented to the pump, calculated from source pressure, elevation, friction losses and vapor pressure at the pumping temperature. NPSHa must stay above NPSHr, with margin, across the whole operating range you intend to run at, not just at the design point.",
  },
  {
    q: "Why does running a pump far from its best efficiency point cause problems?",
    a: "A centrifugal impeller is hydraulically balanced only near its best efficiency point (BEP). Away from BEP, flow inside the volute or diffuser becomes uneven, which increases radial thrust on the shaft, raises vibration, and accelerates wear on bearings, seals and wear rings. Running well below minimum continuous flow also raises internal recirculation and temperature rise, which can flash the pumped liquid at the impeller eye. API 610 addresses this by defining a preferred operating region around BEP rather than leaving it to judgment.",
  },
  {
    q: "Can I reuse one pump curve if I change the motor speed or trim the impeller?",
    a: "Only within limits, and by applying the affinity laws rather than reusing the original curve directly: flow scales linearly with speed, head scales with the square of speed, and power scales with the cube of speed, for a fixed impeller diameter. Trimming the impeller diameter follows an approximate version of the same relationships, but manufacturers generally only warrant it as reliable for a small trim — commonly cited as within roughly 5-10% of the original diameter — beyond which efficiency no longer scales predictably and a new test curve is the only reliable source.",
  },
  {
    q: "What changed for pump curves under the new API 610 Thirteenth Edition?",
    a: "API 610 Thirteenth Edition, published in June 2026, clarified exactly where NPSHa and NPSHr should be referenced for different pump configurations, introduced a default NPSH margin requirement so a buyer no longer has to specify one from scratch on every datasheet, and extended the minimum 10% rise-to-shutoff requirement to all pump types covered by the standard rather than a subset of them. Projects still specifying the Twelfth Edition (2021) should confirm with their engineering contractor whether the newer edition's defaults apply.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Every centrifugal pump quotation should come with a performance
          curve, and a buyer who cannot read it is relying entirely on the
          vendor&rsquo;s word that the pump fits the job. A single chart
          usually carries three curves stacked over the same flow axis: head
          against flow, efficiency against flow, and NPSH required against
          flow. This guide walks through what each one means, how they
          relate to your actual system, and what to check before you accept
          a quote.
        </p>

        <h2 id="what-a-pump-curve-actually-shows" className="mt-12 text-xl font-bold">
          What a pump curve actually shows
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The main curve on a centrifugal pump datasheet plots head (in
          metres or feet) on the vertical axis against flow rate (in m&sup3;/h
          or gpm) on the horizontal axis, measured at a fixed impeller speed
          and diameter. For a well-behaved centrifugal design the curve
          slopes downward from left to right: head is highest at zero flow
          (shutoff) and falls as flow increases, because more of the
          impeller&rsquo;s energy goes into moving liquid rather than building
          pressure. A single pump casing is usually sold with a family of
          curves, one for each impeller diameter the casing accepts, so the
          first thing to check on a vendor curve sheet is which specific
          diameter line is being quoted against your duty point, not just
          which casing size.
        </p>

        <h2 id="the-duty-point-where-pump-and-system-meet" className="mt-12 text-xl font-bold">
          The duty point: where the pump curve meets the system curve
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A pump curve on its own does not tell you where the pump will
          actually operate — that depends on the system it is connected to.
          Plot a system resistance curve (static lift plus friction losses,
          which rise roughly with the square of flow) on the same axes, and
          the point where the two curves cross is the duty point: the flow
          and head the pump will settle at once installed. Because the
          system curve shifts whenever a control valve throttles, a strainer
          fouls, or a parallel line is brought on or off duty, the real
          operating point moves along the pump curve over time even though
          the pump curve itself never changes. A quotation that only shows a
          single design point without the surrounding curve shape gives you
          no way to judge how the pump will behave as conditions vary.
        </p>

        <h2 id="best-efficiency-point-and-operating-regions" className="mt-12 text-xl font-bold">
          Best efficiency point and operating regions
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The efficiency curve, plotted on the same chart, rises from zero at
          shutoff to a peak and then falls again as flow increases toward
          the end of the curve. That peak is the best efficiency point
          (BEP) — the flow at which the impeller&rsquo;s internal flow paths are
          most hydraulically balanced, and not coincidentally, the flow at
          which the pump runs smoothest and lasts longest.{" "}
          <Link className="text-accent hover:underline" href="/blog/api-610-pump-types-and-classes-explained">
            API 610
          </Link>{" "}
          formalizes how far from BEP a pump is allowed to run with three
          nested bands:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Region</th>
                <th className="px-4 py-3">Typical range of BEP flow</th>
                <th className="px-4 py-3">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Preferred operating region (POR)", "70% - 120%", "Where the pump should spend most of its operating life for full design service life"],
                ["Rated operating region", "80% - 110%", "The tighter band the rated (guarantee) point itself should fall within"],
                ["Allowable operating region (AOR)", "Manufacturer-defined", "The outer hydraulic limits the pump can run at without immediate damage, set by vibration limits rather than a fixed percentage"],
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
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          These bands are not arbitrary paperwork. Operating persistently
          outside them raises radial shaft thrust, increases vibration, and
          shortens bearing and seal life — the pump may still run, but it
          will not last as long or as reliably as one operating inside its
          preferred region. When a vendor&rsquo;s curve places your normal flow
          near the edge of the allowable region rather than inside the
          preferred one, that is a legitimate reason to ask for a different
          impeller trim or a different pump entirely, not something to
          accept because the price was attractive.
        </p>

        <h2 id="rise-to-shutoff-and-curve-shape" className="mt-12 text-xl font-bold">
          Rise to shutoff and curve shape
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A healthy centrifugal pump curve rises continuously from the rated
          point to shutoff, with no flat spot or dip — a flat or dipping
          curve can cause the pump to hunt between two flow points for the
          same head, which is unstable in parallel-pump operation or against
          a control valve. API 610 requires a minimum rise from the rated
          point to the shutoff head, and the newly published{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thirteenth Edition
          </a>{" "}
          (June 2026) extended a minimum 10% rise-to-shutoff requirement to
          all the pump types the standard covers, rather than only some of
          them under the prior Twelfth Edition (2021). Checking that a
          vendor&rsquo;s test or predicted curve actually meets this rise, rather
          than assuming it does, is worth the minute it takes.
        </p>

        <h2 id="npsh-required-vs-npsh-available" className="mt-12 text-xl font-bold">
          NPSH required vs NPSH available
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The third curve on the sheet is NPSH required (NPSHr), which rises
          with flow — the faster liquid moves through the impeller eye, the
          lower the local pressure drops, and the more suction head the pump
          needs to avoid vaporizing the liquid it is trying to pump. By the
          Hydraulic Institute&rsquo;s definition, NPSHr is the NPSH value at which
          cavitation has already reduced the pump&rsquo;s total head by 3% — it
          is a defined test threshold, not the point where damage begins.
          That is why NPSH available (NPSHa), which you calculate from your
          own installation&rsquo;s source pressure, elevation, piping losses and
          the liquid&rsquo;s vapor pressure at pumping temperature, needs a margin
          above NPSHr rather than simply exceeding it. The newly published
          API 610 Thirteenth Edition sets a default NPSH margin requirement
          for the first time and clarifies exactly where NPSHa and NPSHr
          should be referenced on different pump configurations, which
          removes a common source of disagreement between purchaser and
          vendor over whose reference point a quoted figure actually used.
        </p>

        <h2 id="the-affinity-laws-how-curves-shift" className="mt-12 text-xl font-bold">
          The affinity laws: how curves shift with speed
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A pump curve is only valid at the speed and diameter it was
          plotted for. If a variable-speed drive changes the pump&rsquo;s speed,
          the affinity laws describe how the curve moves: flow scales
          directly with speed, head scales with the square of speed, and
          absorbed power scales with the cube of speed, for a fixed impeller
          diameter. Trimming the impeller diameter instead of changing speed
          follows an approximate version of the same relationships, but
          manufacturers generally only stand behind it for a modest trim —
          commonly cited as up to roughly 5-10% off the original diameter —
          beyond which the impeller&rsquo;s internal geometry no longer scales
          cleanly and efficiency drops faster than the simple ratios predict.
          A vendor offering a heavily trimmed impeller to hit an odd duty
          point is worth a direct question about whether the resulting curve
          was actually tested or only calculated from the affinity laws.
        </p>

        <h2 id="running-pumps-in-parallel-or-series" className="mt-12 text-xl font-bold">
          Running pumps in parallel or series
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Curves also have to be read differently once more than one pump is
          involved. Two identical pumps running in parallel do not double
          the flow at a given head — the combined curve is built by adding
          the two pumps&rsquo; flows together at each head value, and because
          the system curve keeps rising with flow, the actual gain in
          combined flow is smaller than doubling, often noticeably so on a
          system with significant friction loss. Two pumps in series do the
          opposite: their combined curve adds head together at each flow
          value, which suits a high-head, comparatively low-flow duty better
          than a single larger pump would. Reading a parallel or series
          arrangement off a single pump&rsquo;s curve, without plotting the
          combined curve against the actual system curve, is a common way
          to overestimate how much a second pump will actually add — and
          it also means each pump&rsquo;s individual operating point shifts away
          from where it would sit running alone, which is worth checking
          against the preferred operating region for both pumps, not just
          one.
        </p>

        <h2 id="what-to-check-on-a-vendor-pump-curve" className="mt-12 text-xl font-bold">
          What to check on a vendor&rsquo;s pump curve
        </h2>
        <CheckList
          items={[
            "The duty point (or your normal and rated flows) falls inside the preferred operating region, not just the allowable region",
            "The curve rises continuously to shutoff, with the minimum rise-to-shutoff the applicable API 610 edition requires",
            "NPSHr at your rated flow, plus the required margin, sits comfortably below your calculated NPSHa",
            "The curve corresponds to the actual impeller diameter quoted, not a nominal or maximum-diameter curve for the casing",
            "Any impeller trim or speed change applied to reach the quoted point is stated, and whether the resulting curve was tested or calculated",
            "The performance test method (HI 14.6 or ISO 9906) and the API 610 edition referenced are both stated on the datasheet",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a centrifugal pump and want the curve checked against your
          system before you commit? <Link className="text-accent hover:underline" href="/rfq">
            Send us your pump datasheet
          </Link>{" "}
          and Oillinko will circulate it to verified manufacturers and
          review every returned curve against your duty point, NPSH margin
          and operating region before it comes back to you. Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or see our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/pump-factory-acceptance-testing-and-commissioning-checklist">
            pump factory acceptance testing and commissioning
          </Link>{" "}
          for what happens once a curve is accepted and the pump goes to
          test.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
