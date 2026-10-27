import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Oillinko — international oil and gas equipment sourcing and procurement consultancy, with its office in Istanbul, Turkey.",
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
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have an equipment list, a project requirement, or a question about sourcing? Send the details so we can review the scope and clarify the next steps."
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
            Serving international oil and gas buyers from our Istanbul office.
            Sourcing and delivery scope are confirmed for each enquiry.
          </p>
        </div>
      </section>
    </>
  );
}