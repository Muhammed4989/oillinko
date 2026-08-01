import type { Metadata } from "next";
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
    text: "We source oil and gas equipment — pipeline fittings, flanges, gaskets, stud bolts, hot tap and line stop equipment, valves and more — from qualified manufacturers that meet your specification and budget.",
  },
  {
    title: "RFQ & Tender Management",
    text: "We turn bills of quantities and equipment lists into structured RFQs, manage the response process with multiple suppliers, and return a consolidated, comparable offer to your side.",
  },
  {
    title: "Technical Specification Review",
    text: "Every quote is checked against your technical requirements — standards, material grades, schedules, class ratings and test requirements — so non-conforming offers are filtered out before they reach you.",
  },
  {
    title: "Supplier Qualification & Auditing",
    text: "Manufacturers are qualified on evidence: factory capability, welding and testing facilities, certificates (EN 10204 Type 3.1), quality systems and export track record.",
  },
  {
    title: "Quality Inspection (QC)",
    text: "Hydrostatic testing, dimensional checks, material verification and document review — carried out at the factory before dispatch, with reports delivered to your side.",
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
        subtitle="Everything between a bill of quantities and delivered, compliant equipment — handled by one accountable partner."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
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
