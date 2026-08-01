import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Oillinko serves upstream, midstream and downstream oil and gas: drilling, pipelines, terminals, refineries, petrochemical and power plants.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    title: "Upstream — Exploration & Production",
    text: "Field equipment for drilling and production facilities: fittings, flanges, fasteners and maintenance tooling that hold up in harsh field conditions.",
  },
  {
    title: "Midstream — Pipelines & Terminals",
    text: "The heart of our experience: line pipe fittings, hot tap and line stop equipment, saddles, pneumatic stoppers, gaskets and bolting for pipeline construction, tie-ins and live-line maintenance.",
  },
  {
    title: "Downstream — Refineries & Petrochemicals",
    text: "Process piping components for refineries and petrochemical plants, sourced to the class ratings and material grades those units require.",
  },
  {
    title: "Gas & LPG Facilities",
    text: "Equipment for natural gas transmission, LPG plants and distribution systems, including stoppers and sealing products compatible with gas service.",
  },
  {
    title: "Power & Utilities",
    text: "Piping components and consumables for thermal and combined-cycle power plants, and utility piping networks.",
  },
  {
    title: "Water & Industrial Piping",
    text: "Flanged connections, fittings and gaskets for water transmission and general industrial piping systems.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="From live pipeline maintenance to new process construction — we source equipment across the full oil and gas value chain."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((x) => (
            <div key={x.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h2 className="text-lg font-semibold text-accent">{x.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
