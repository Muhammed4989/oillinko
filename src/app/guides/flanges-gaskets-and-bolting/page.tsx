import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flanges, Gaskets & Bolting Guide | Oillinko",
  description:
    "How ANSI/ASME B16.5 flanges, ASME B16.20 spiral wound gaskets and ASTM A193/A194 stud bolts form one bolted connection — flange types, pressure classes, facings and bolting, explained for equipment buyers.",
  keywords:
    "ANSI B16.5 flanges, ASME B16.20 spiral wound gaskets, spiral wound gasket, stud bolts ASTM A193 B7, ASTM A194 2H, weld neck flange, blind flange",
  alternates: { canonical: "/guides/flanges-gaskets-and-bolting" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flanges, gaskets & bolting: spec them as one matched set",
  description: metadata.description,
  author: { "@type": "Organization", name: site.legalName, url: site.domain },
  publisher: { "@type": "Organization", name: site.legalName, url: site.domain },
  datePublished: "2026-01-01",
};

export default function FlangesGuide() {
  return (
    <>
      <section className="border-b border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Guide · Flanged connections
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Flanges, gaskets &amp; bolting: one connection, one matched set
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A flange, a gasket and a set of stud bolts are not three separate parts —
            they are one machine connection. Specify them as a set.
          </p>
          <p className="mt-3 text-sm text-muted">8 min read · Updated 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-xl font-bold">Why flanged connections dominate oil and gas piping</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Flanged connections give plant operators a maintenance point that welded
          connections cannot. Pumps, valves, vessels and instruments must be
          removable, and pipelines must be temporarily separated for cleaning,
          testing or tie-in. Every one of those joints uses the same three
          elements: two flanges rated to the same pressure class, a gasket that
          seals the facing, and stud bolts with nuts that hold the assembly
          together. If any of the three is under-specified, the joint fails — and
          a leaking flange joint in hydrocarbon service is a serious incident
          waiting to happen. Treat the connection as one system.
        </p>

        <h2 className="mt-12 text-xl font-bold">Flanges: ASME B16.5 types and pressure classes</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The defining standard for flanges from NPS 1/2 to NPS 24 is{" "}
          <strong className="text-foreground">ASME B16.5</strong>. It fixes the
          dimensions, pressure classes, facings and materials so that flanges from
          different factories can still be bolted together. Common flange types
          in oil and gas are:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Flange type</th>
                <th className="px-4 py-3">How it is joined to the pipe</th>
                <th className="px-4 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Weld neck", "Butt-welded to the pipe; bore matches the pipe", "Main process and hazardous service — the default in oil and gas"],
                ["Slip-on", "Placed over the pipe and fillet-welded", "General purpose, lower class service"],
                ["Blind", "No bore — closes the end of a line or vessel", "Flange ends, valves, test boundaries"],
                ["Socket weld", "Pipe fits inside the socket, fillet-welded", "Small-bore high-pressure lines"],
                ["Lap joint", "A stub end backs the loose flange", "Lines that are taken apart frequently"],
                ["Threaded", "Screwed onto the pipe", "Small, low-pressure, non-critical duty"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Pressure classes under ASME B16.5 are{" "}
          <strong className="text-foreground">150, 300, 600, 900, 1500 and 2500</strong>.
          Higher classes mean thicker, stronger flanges and a higher pressure
          rating — and a Class 600 flange can never be mixed with a Class 300
          one. Raised face (RF) is the standard facing for most classes; ring-type
          joint (RTJ) facings are used for higher classes and larger sizes where
          gasket retention is critical.
        </p>

        <h2 className="mt-12 text-xl font-bold">Gaskets: sealing the face</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For the joint to seal, the gasket must match the flange size, class and
          service. The industrial workhorse is the{" "}
          <strong className="text-foreground">spiral wound gasket per ASME B16.20</strong>:
          a stainless steel strip winding (commonly AISI 304 or higher alloy) and a
          filler such as graphite, spiralled into a flat gasket that seals under
          bolt load and spring-back. API 601 covers spiral wound gaskets for
          refinery service. Select the winding and filler to the process fluid
          and temperature, not just the flange size.
        </p>

        <h2 className="mt-12 text-xl font-bold">Stud bolts: ASTM A193 B7 and A194 2H</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The bolts that hold a flanged joint in tension are threaded rods with a
          heavy hex nut at each end. The established pairing for high-pressure,
          high-temperature hydrocarbon service is:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            ["Stud bolt — ASTM A193 Gr. B7", "A chromium-molybdenum carbon steel, quenched and tempered, with the strength to hold a Class 150–2500 joint at high flanging pressure."],
            ["Nut — ASTM A194 Gr. 2H", "A heavy hex nut of low-alloy steel, hardened, designed so a failure happens in the nut threads rather than the bolt."],
            ["Threads and dimensions", "Threads per ANSI B1.1 (class 2 is common); dimensions per ANSI B18.2. Bolts are supplied with one or two heavy hex nuts as specified."],
            ["Corrosion-resistant service", "For aggressive service, A193 Gr. B8M (316 stainless) or low-hardness variants are used instead of plain B7."],
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

        <h2 className="mt-12 text-xl font-bold">Specify the whole set</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          When adding flanged connections to your equipment list, include every
          element — not just the flange:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Flange size, type and class — e.g. weld neck, size, Class 600, RF",
            "Material grade — e.g. ASTM A105 carbon steel",
            "Gasket — size, class and type — e.g. spiral wound with graphite filler",
            "Bolting — stud bolts A193 Gr. B7 with A194 Gr. 2H nuts, dimensions and quantity",
            "Material certificates — EN 10204 Type 3.1 for all pressure-containing parts",
            "Coatings for bolts and flanges where corrosive atmosphere",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Related:{" "}
          <Link className="text-accent hover:underline" href="/equipment/flanges">flanges</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/equipment/gaskets">gaskets</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/equipment/stud-bolts">stud bolts &amp; nuts</Link>
        </p>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CtaBand />
    </>
  );
}