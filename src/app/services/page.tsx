import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Oil and gas equipment procurement services: sourcing, RFQ and tender management, technical specification review, supplier qualification, quality inspection, expediting and export logistics.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Sourcing & Procurement",
    text: "We help source oil and gas equipment, including pipeline fittings, flanges, gaskets, stud bolts, hot tap and line stop equipment and valves. Proposed manufacturer capability, conformance and commercial terms need review before agreement.",
  },
  {
    title: "RFQ & Tender Management",
    text: "We turn bills of quantities and equipment lists into structured RFQs, manage the response process with multiple suppliers, and return a consolidated, comparable offer to your side.",
  },
  {
    title: "Technical Specification Review",
    text: "Compare proposed offers with the required standards, material grades, schedules, ratings and tests. Missing evidence and deviations should be identified for the buyer’s decision.",
  },
  {
    title: "Supplier Qualification & Auditing",
    text: "Supplier qualification requires evidence relevant to the order: production capability, applicable certificates, testing and welding qualifications, quality systems and track record.",
  },
  {
    title: "Quality Inspection (QC)",
    text: "Agree the inspection, testing, witness points and reporting required for the order. The quotation and inspection plan should state what is included and who is responsible.",
  },
  {
    title: "Expediting & Logistics",
    text: "Order tracking, production schedule follow-up, export documentation and freight coordination — from factory to your destination port or site.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Coordinate sourcing, specification review and the inspection and delivery scope agreed for your order."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="mb-8 rounded-lg border border-line bg-white p-5 text-muted">Looking for inspection, calibration, repair, rental or field services? <Link className="font-semibold text-accent underline" href="/oil-and-gas/services">Browse specialist service requirements</Link> and send the scope to Oillinko.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <p className="font-mono text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
