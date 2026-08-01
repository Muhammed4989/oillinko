import Link from "next/link";
import { CtaBand, SectionTitle } from "@/components/ui";
import { categories } from "@/lib/equipment";

const steps = [
  {
    n: "01",
    title: "Send us your BOQ",
    text: "Share your bill of quantities, equipment list, or just a description of what your project needs.",
  },
  {
    n: "02",
    title: "We source and quote",
    text: "We match every line item to verified manufacturers, check quotes against your specifications, and return a consolidated offer.",
  },
  {
    n: "03",
    title: "You receive, inspected",
    text: "We manage the order, quality inspection, documentation and delivery — you receive conforming equipment on time.",
  },
];

const reasons = [
  {
    title: "Specs that hold up",
    text: "Every quote is checked against your technical requirements — API, ANSI, ASME, ASTM — before it reaches you.",
  },
  {
    title: "Verified manufacturers only",
    text: "Real factories with real certificates. We qualify suppliers before we ever send them your inquiry.",
  },
  {
    title: "One accountable partner",
    text: "One contract, one point of contact, one delivery. We take responsibility for the whole chain.",
  },
  {
    title: "Based in Istanbul, working worldwide",
    text: "A global trading hub between Europe, the Middle East and Asia — ideal for fast, competitive supply.",
  },
];

export const metadata = {
  title: "Oil & Gas Equipment Sourcing & Procurement | Oillinko",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-oil-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-oil-900 px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Istanbul, Turkey — serving buyers worldwide
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Oil &amp; gas equipment,{" "}
            <span className="text-accent">sourced right</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Oillinko is a sourcing and procurement consultancy for the oil and
            gas industry. We turn your equipment lists into competitive offers
            from verified manufacturers — compliant with the exact
            specifications your project demands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi"
            >
              Request a Quote
            </Link>
            <Link
              href="/equipment"
              className="rounded border border-line bg-oil-900 px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Browse Equipment
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted">
            {["ANSI B16.5", "API 601", "ASME B16.20", "ASTM A193 B7", "EN 10204 3.1"].map(
              (s) => (
                <span key={s} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="How it works"
          title="Three steps from BOQ to delivered equipment"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-line bg-oil-800 p-6">
              <p className="font-mono text-3xl font-bold text-accent">{s.n}</p>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle
            eyebrow="Equipment categories"
            title="What we source"
            subtitle="From line pipe fittings to live-line maintenance equipment — we source across the full range of oil and gas field equipment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/equipment/${c.slug}`}
                className="group rounded-lg border border-line bg-oil-900 p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.short}</p>
                <p className="mt-4 text-xs font-medium text-accent">
                  {c.totalItems} reference items →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="Why Oillinko"
          title="Procurement you can rely on"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-lg font-semibold text-accent">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
