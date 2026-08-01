import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";
import { categories } from "@/lib/equipment";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Oil and gas equipment we source: hot tap & line stop equipment, pipeline fittings, flanges, gaskets, stud bolts and pipe cutters — to API, ANSI, ASME and ASTM standards.",
  alternates: { canonical: "/equipment" },
};

export default function EquipmentIndexPage() {
  return (
    <>
      <PageHeader
        title="Equipment"
        subtitle="The oil and gas equipment we source — every category backed by verified manufacturers and international specification compliance."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/equipment/${c.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-oil-800 p-6 transition-colors hover:border-accent"
            >
              <h2 className="text-xl font-semibold transition-colors group-hover:text-accent">
                {c.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {c.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.standards.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-oil-900 px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-accent">
                {c.totalItems} reference items in our catalogue →
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
