import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Technical Guides & Knowledge Base | Oillinko",
  description:
    "Oil and gas equipment knowledge base: hot tapping and line stopping, flanges and bolting, pipeline fittings, and how to prepare a bill of quantities for procurement.",
  keywords:
    "oil and gas equipment guide, hot tapping guide, flange bolting guide, pipeline fittings guide, bill of quantities",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        title="Technical Guides"
        subtitle="Practical knowledge for buyers of oil and gas equipment — written from the field, not from marketing materials. Learn the equipment, the standards, and how to procure it right the first time."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group overflow-hidden rounded-lg border border-line bg-oil-800 transition-colors hover:border-accent"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oil-900/80 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full border border-line bg-oil-900/90 px-3 py-1 text-xs text-muted">
                  {g.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted">{g.readTime}</p>
                <h2 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
                  {g.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.short}</p>
                <p className="mt-4 text-xs font-medium text-accent">Read guide →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-line bg-oil-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Can&apos;t find what you need?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            These guides cover the equipment we source most. If your project
            touches something else — valves, instrumentation, pipe, storage
            tank fittings — send us your list and we will source it to your
            specification, standards and budget.
          </p>
          <Link
            href="/rfq"
            className="mt-5 inline-block rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi"
          >
            Request a Quote
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}