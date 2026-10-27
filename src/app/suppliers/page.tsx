import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Oil & Gas Equipment & Material Suppliers — Evidence and Qualification",
  description:
    "Review proposed oil and gas suppliers against project-specific requirements for production capability, certificates, testing, qualifications and delivery evidence.",
  alternates: { canonical: "/suppliers" },
};

const regions = [
  {
    title: "Türkiye",
    text: "A key sourcing market, where our Istanbul office is based. Manufacturers there are competitive across flanges, fittings, fasteners, gaskets and specialized pipeline equipment — with short logistics lines to the Middle East, Caucasus and Europe.",
  },
  {
    title: "Europe",
    text: "For projects that require EU-manufactured components, certified raw material or specific brand compliance, we source across European production centers.",
  },
  {
    title: "Gulf & Middle East",
    text: "For proposed regional suppliers, request evidence of experience with the standards, documentation and delivery needs of your project.",
  },
  {
    title: "Asia",
    text: "Assess proposed production against your requirements, using factory evidence, applicable certificates and quoted commercial terms.",
  },
];

const criteria = [
  "Evidence of an actual production facility and relevant capability",
  "Material test certificates (EN 10204 Type 3.1) and traceability",
  "Testing capability: hydrostatic, dimensional, where applicable",
  "Welding qualifications per ASME Section IX where applicable",
  "Export experience with oil and gas buyers",
  "Consistent delivery performance and responsive communication",
];

export default function SuppliersPage() {
  return (
    <>
      <PageHeader
        title="Supplier Network"
        subtitle="Evaluate the proposed factory and its evidence against your order requirements before approving an offer. Supplier status and availability need confirmation for each request."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 rounded-xl border border-line bg-white p-6 sm:p-8"><h2 className="text-xl font-bold">Explore companies across the global industry</h2><p className="mt-3 leading-relaxed text-muted">Browse our independent directory of equipment manufacturers, technology providers, engineering companies and energy operators by specialty. A directory entry does not confirm an Oillinko supplier relationship or availability for your request.</p><Link href="/oil-and-gas/companies" className="mt-4 inline-block font-semibold text-accent underline">Explore the global company directory</Link></div>
        <div className="grid gap-6 md:grid-cols-2">
          {regions.map((r) => (
            <div key={r.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h2 className="text-lg font-semibold text-accent">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-line bg-oil-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Evidence to request before manufacturer approval</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {criteria.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
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
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
