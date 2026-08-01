import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui";
import { categories } from "@/lib/equipment";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: `/equipment/${slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cat.name} — ${site.name}`,
    serviceType: cat.name,
    description: cat.description,
    provider: { "@type": "Organization", name: site.legalName, url: site.domain },
    areaServed: "Worldwide",
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-oil-800">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oil-900/60 via-oil-900/70 to-oil-900" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Equipment
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {cat.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">{cat.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold">Key specifications</h2>
            <ul className="mt-5 space-y-3">
              {cat.specs.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <svg
                    className="mt-0.5 shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-xl font-bold">Reference items</h2>
            <p className="mt-2 text-sm text-muted">
              Sample line items from client bills of quantities we have sourced
              in this category. Your requirement can be entirely different —
              we source to your list.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 text-right">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.sampleItems.map((i) => (
                    <tr key={i.ref} className="border-b border-line/60 last:border-0">
                      <td className="px-4 py-3 font-mono text-xs text-accent">{i.ref}</td>
                      <td className="px-4 py-3 text-muted">{i.description}</td>
                      <td className="px-4 py-3 text-right text-muted">{i.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Standards
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.standards.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-oil-900 px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Need this equipment?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Send us your quantities and required specifications. We&apos;ll
                return competitive offers from verified manufacturers.
              </p>
              <a
                href="/rfq"
                className="mt-4 inline-block rounded bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-accent-hi"
              >
                Request a Quote
              </a>
            </div>
          </aside>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CtaBand />
    </>
  );
}
