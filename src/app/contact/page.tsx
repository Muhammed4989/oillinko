import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Oillinko — international oil and gas equipment sourcing and procurement consultancy, head office in Istanbul, Turkey, with regional offices in London, Erbil and Amman.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "Best for detailed inquiries and documents",
  },
  {
    title: `${site.headOffice.city} — Head Office`,
    value: site.headOffice.phone,
    href: `tel:${site.headOffice.phone.replace(/\s/g, "")}`,
    hint: site.headOffice.country,
  },
  ...site.offices.map((o) => ({
    title: `${o.city} — ${o.label}`,
    value: o.phone,
    href: `tel:${o.phone.replace(/\s/g, "")}`,
    hint: o.country,
  })),
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have an equipment list, a project requirement, or a question about sourcing? We respond within 24 hours."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-lg border border-line bg-oil-800 p-6 transition-colors hover:border-accent"
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
                {c.title}
              </h2>
              <p className="mt-3 text-lg font-semibold">{c.value}</p>
              <p className="mt-1 text-sm text-muted">{c.hint}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-oil-800 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Head Office
          </h2>
          <p className="mt-3 text-lg font-semibold">{site.headOffice.address}</p>
          <p className="mt-1 text-sm text-muted">
            Serving the global oil and gas market from Turkey, with regional
            presence across the UK, the Middle East and beyond.
          </p>
        </div>
      </section>
    </>
  );
}