import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hot Tapping & Line Stopping Guide | Oillinko",
  description:
    "What hot tapping and line stopping are, when operators use them, the equipment involved — weld-on saddles, line stop fittings, pneumatic stoppers — and the standards (API RP 2201, ASME B31) that govern the work.",
  keywords:
    "hot tapping, line stopping, hot tap saddle, line stop equipment, pneumatic stopper, API RP 2201, live pipeline maintenance, stople fitting",
  alternates: { canonical: "/guides/hot-tapping-and-line-stopping" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hot tapping & line stopping: modifying live pipelines without shutdown",
  description: metadata.description,
  author: { "@type": "Organization", name: site.legalName, url: site.domain },
  publisher: { "@type": "Organization", name: site.legalName, url: site.domain },
  datePublished: "2026-01-01",
};

export default function HotTappingGuide() {
  return (
    <>
      <section className="border-b border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Guide · Pipeline maintenance
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Hot tapping &amp; line stopping: modifying live pipelines without shutdown
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The most valuable minute of production is the minute that never
            stops. That is why operators choose hot tapping and line stopping
            over shutdown.
          </p>
          <p className="mt-3 text-sm text-muted">7 min read · Updated 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-xl font-bold">What is hot tapping?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Hot tapping is the process of cutting a hole into a pipeline while it
          remains under pressure and in service. A branch connection — a welded
          or bolted saddle — is installed on the live line, a tapping machine is
          mounted on top, and a cutter drills through the wall without releasing
          pressure. The cut coupon is captured and retrieved, the tapping valve
          is closed, and the line continues flowing while a new connection is
          created.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Line stopping goes one step further: after the line is tapped, a
          plugging head or inflatable stopper is inserted through the fitting to
          isolate a section of pipe. That section can then be repaired, replaced
          or modified safely — while the rest of the system keeps operating.
        </p>

        <h2 className="mt-12 text-xl font-bold">Why shut down a pipeline when you can hot tap?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Operators hot tap to avoid the cost, risk and lost production of a
          full shutdown. Typical applications:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Adding new branches or tie-ins to an existing mainline",
            "Installing meters, valves or instrumentation without depressurizing",
            "Repairing a defective section with a line stop around the damaged part",
            "Relocating or upgrading sections of aging pipelines",
            "Emergency isolation during leaks or integrity failures",
            "Serving new wells or laterals from an existing trunk line",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-bold">The equipment that makes it possible</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A hot tap and line stop setup is a matched system of fittings,
          machines and tools. At the connection point, the critical components are:
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Weld-on tapping saddles (one-piece and split)",
              d: "The saddle is welded to the live line to reinforce the branch point and provide the pressure boundary. One-piece saddles are a single integral construction; split (two-piece) saddles are bolted or welded around the pipe in two matching halves — useful on larger diameters or where access is limited. Reinforced per ASME B31 and API RP 2201, typically in carbon steel to ASTM A105 or A516 Gr. 70.",
            },
            {
              t: "Hot tap machines and cutters",
              d: "Mounted on the saddle and valve, the tapping machine drives a shell cutter through the pressurized pipe wall while sealing against pressure. The cut coupon is retained and retrieved with the cutter.",
            },
            {
              t: "Line stop fittings and plugging heads",
              d: "A plugging head (or 'stopple') is inserted through the fitting to physically isolate the downstream section. The isolated section is then drained and worked on safely.",
            },
            {
              t: "Inflatable pneumatic stoppers",
              d: "Flexible stoppers with rubber sealing strips that are inflated inside the line to temporarily plug it — a fast, low-cost option for isolating smaller lines during repairs, supplied leak-tested with air hose, valve and key.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold">The standards that govern the work</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Hot tapping is a pressure-boundary activity: it is executed against
          written procedures, not habits. The references buyers and contractors
          should know:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            ["API RP 2201", "Safe hot tapping practices in petroleum and chemical industries — the defining recommended practice for the procedure."],
            ["ASME B31.4 / B31.8", "Pipeline transportation systems for liquids (4) and gas (8) — the design codes of the lines being tapped."],
            ["ASME B31.3", "Process piping — applies where hot taps are made on plant piping."],
            ["ASME Section IX", "Welding qualifications for the welders and procedures used on saddles and fittings."],
            ["ASME Class 600 rating", "Typical pressure rating of tapping saddles and associated fittings."],
            ["EN 10204 Type 3.1", "Material test certificates — traceable verification that the steel is what the spec says it is."],
          ].map(([s, d]) => (
            <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <strong className="text-foreground">{s}</strong> — {d}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-bold">Buying hot tap and line stop equipment</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          When you source saddles, fittings and stoppers, the specification
          should capture five things: the line size and wall thickness to be
          tapped, the branch size, the pressure class of the connection, the
          material grade and standard, and the quantity of stoppers (with sizes)
          needed for isolation work. We source this category every week — from
          one-piece and split saddles to pneumatic stoppers from 4&quot; to
          42&quot;.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Related: <Link className="text-accent hover:underline" href="/equipment/hot-tap-line-stop">hot tap &amp; line stop equipment</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/equipment/pipeline-fittings">pipeline fittings</Link>
        </p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CtaBand />
    </>
  );
}