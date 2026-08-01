import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Oillinko procurement works: send your BOQ, we source and qualify offers from verified manufacturers, check specs, then manage inspection and delivery.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    n: "01",
    title: "Send your requirements",
    text: "Send us your bill of quantities, equipment list, or a description of what your project needs. Files can be attached directly through our RFQ page — Excel, PDF or Word.",
  },
  {
    n: "02",
    title: "Specification review",
    text: "We review your requirements against the applicable standards — API, ANSI, ASME, ASTM — and confirm the scope and expected compliance with you before sourcing begins.",
  },
  {
    n: "03",
    title: "Sourcing",
    text: "We match every line item to qualified manufacturers in our network, prioritizing production capability, certificates and export experience.",
  },
  {
    n: "04",
    title: "Quotation & comparison",
    text: "Suppliers return offers with pricing, lead times and technical documentation. We verify each offer against your specification and consolidate the results into one clear comparison.",
  },
  {
    n: "05",
    title: "Order & inspection",
    text: "Once you approve, we place the order and follow production. Quality inspection — hydrostatic testing, dimensional and material verification — takes place at the factory before dispatch.",
  },
  {
    n: "06",
    title: "Documentation & delivery",
    text: "We manage export documentation and freight, and hand over the full file: certificates, test reports and delivery documents.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A clear process from your equipment list to delivered, compliant equipment — with one point of contact throughout."
      />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-6 rounded-lg border border-line bg-oil-800 p-6"
            >
              <p className="font-mono text-3xl font-bold text-accent">{s.n}</p>
              <div>
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
