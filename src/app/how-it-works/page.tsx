import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Oillinko procurement works: send your BOQ, review proposed offers and supplier evidence, and agree inspection, documentation and delivery responsibilities.",
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
    text: "We seek offers for the specified items and review proposed production capability, relevant certificates and experience. Availability remains subject to supplier confirmation.",
  },
  {
    n: "04",
    title: "Quotation & comparison",
    text: "Compare supplier pricing, lead times and supporting documents against your specification. Missing evidence and deviations need clarification before you approve an offer.",
  },
  {
    n: "05",
    title: "Order & inspection",
    text: "Once the offer is approved, order follow-up and inspection proceed according to the agreed scope. The inspection plan should specify required tests, checks, records and responsibilities.",
  },
  {
    n: "06",
    title: "Documentation & delivery",
    text: "Documentation and freight coordination follow the agreed commercial scope. Confirm the required certificates, test reports and delivery documents in the order before handover.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A process from your equipment list to an agreed supply plan, with scope, evidence and responsibilities reviewed at each stage."
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
