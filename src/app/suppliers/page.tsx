import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Supplier Network",
  description:
    "Oillinko's supplier network: verified oil and gas equipment manufacturers across Europe, the Gulf, the Middle East and Asia — qualified on factory capability, certificates and export track record.",
  alternates: { canonical: "/suppliers" },
};

const regions = [
  {
    title: "Türkiye",
    text: "A key sourcing market, close to our regional office in Istanbul. Manufacturers there are competitive across flanges, fittings, fasteners, gaskets and specialized pipeline equipment — with short logistics lines to the Middle East, Caucasus and Europe.",
  },
  {
    title: "Europe",
    text: "For projects that require EU-manufactured components, certified raw material or specific brand compliance, we source across European production centers.",
  },
  {
    title: "Gulf & Middle East",
    text: "Regional suppliers experienced with the standards, documentation and delivery expectations of Middle Eastern oil and gas operators.",
  },
  {
    title: "Asia",
    text: "Cost-competitive production for non-critical items, selected only where factory quality and certificates can be verified.",
  },
];

const criteria = [
  "Real production facility — verified, not just a trading website",
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
        subtitle="The quality of an offer depends on the quality of the factory behind it. We build and maintain a network of verified manufacturers."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {regions.map((r) => (
            <div key={r.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h2 className="text-lg font-semibold text-accent">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-line bg-oil-800 p-6 sm:p-8">
          <h2 className="text-xl font-bold">How we qualify a manufacturer</h2>
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
