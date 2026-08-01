import type { Metadata } from "next";
import Image from "next/image";
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
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-oil-800 transition-colors hover:border-accent"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oil-800/80 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
