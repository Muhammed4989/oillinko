import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Oil and Gas Industry Suppliers: How to Evaluate Them",
  description:
    "How to evaluate oil and gas material and equipment suppliers: the evidence to request on production capability, certificates, testing, qualifications and delivery.",
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

const faqs = [
  {
    q: "What do oil and gas industry suppliers provide?",
    a: "Oil and gas industry suppliers provide equipment, materials and services to operators, contractors and EPC companies, for example pumps, valves, flanges, fittings, gaskets, pressure vessels, instrumentation and inspection services. What a supplier can actually deliver depends on its facility, approvals and the specification of each order.",
  },
  {
    q: "How do you evaluate an oil and gas material supplier?",
    a: "Compare the supplier evidence with the written requirement for the order: proof of the production facility, material test certificates such as EN 10204 Type 3.1 with traceability, testing capability, applicable welding qualifications and export or delivery history. Ask for these documents before approving an offer, and confirm availability and commercial terms for each request.",
  },
  {
    q: "Does a directory listing mean a company is an Oillinko supplier?",
    a: "No. The company directory is an independent reference. A directory entry does not confirm an Oillinko supplier relationship, stock or availability for your request.",
  },
  {
    q: "How can I find suppliers for a specific oil and gas equipment list?",
    a: "Send your bill of quantities or equipment list through the RFQ form. Oillinko, based in Istanbul, reviews the requirement and coordinates supplier enquiries; supplier status, specification, origin and availability are confirmed for each request.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
        <div className="mt-14">
          <h2 className="text-xl font-bold">Oil and gas supplier questions, answered</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg border border-line bg-oil-800 p-6">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>
      <CtaBand />
    </>
  );
}
