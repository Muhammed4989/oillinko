import Link from "next/link";

const sections = [
  {
    title: "Start with the company's role in the supply chain",
    paragraphs: [
      "A global oil and gas company directory becomes useful when it explains what each organisation actually does. An equipment manufacturer designs or produces a defined product range. An oilfield technology provider may combine tools, software and field personnel. An engineering company develops or delivers a project scope. An operator owns or operates assets and purchases equipment and services for those assets. These roles overlap in some businesses, but they are not interchangeable when preparing an enquiry.",
      "Use the company-type filter to narrow your starting point, then add a specialty. An operator reference can help you understand an industry or project context. It does not identify the manufacturer of every pump, valve or instrument installed at that operator's facilities.",
    ],
  },
  {
    title: "Match the specialty to a defined requirement",
    paragraphs: [
      "A familiar company name is only the beginning of equipment selection. Within pumps and fluid handling, the required liquid, flow, pressure and operating conditions determine the relevant equipment family. Within instrumentation, a level transmitter, pressure sensor and gas analyser have different selection inputs. A company with several business lines may therefore appear under multiple specialties in this directory without representing the same product in each one.",
      "Follow the related equipment and service links to develop a clearer scope. Search by a company name when a specification identifies a preferred brand, or by a specialty when you are still establishing the type of equipment or support required.",
    ],
  },
  {
    title: "Keep headquarters and manufacturing origin separate",
    paragraphs: [
      "The headquarters shown on a company card describe its corporate base or the specifically identified principal offices. They do not establish where a particular item was manufactured. International companies can operate factories in several countries, source components from different locations and offer different production routes across their product ranges. The same brand can therefore appear on products with different countries of manufacture.",
      "If your project requires or excludes a manufacturing origin, state that condition in the enquiry. Ask for confirmation against the proposed model and supply route, together with the relevant origin documentation. Delivery country is another separate field: it identifies where the equipment is needed, rather than where it was made.",
    ],
  },
  {
    title: "Distinguish a brand, a model and a supplier offer",
    paragraphs: [
      "A manufacturer listing is a reference to an organisation and its broad capabilities. A model identifies a particular product family or configuration. A supplier offer adds commercial details such as quantity, condition, availability, price and delivery terms. Treating these as separate pieces of information helps prevent a general catalogue entry from being mistaken for a confirmed offer or stock position.",
      "For replacement parts, provide the complete ordering code and available nameplate details. Where a code has changed, request a documented cross-reference and a list of differences. If equivalent products are acceptable, explain which specifications are mandatory and which options can be considered before asking suppliers to propose alternatives.",
    ],
  },
  {
    title: "Prepare comparable equipment and service enquiries",
    paragraphs: [
      "Equipment requests normally begin with item descriptions, quantities, model references and the available technical specification. Useful supporting information includes drawings, process conditions, electrical requirements, connections and the documentation expected with delivery. A bill of quantities with consistent item numbers makes it easier to compare offers from several sources and trace clarifications back to the original requirement.",
      "Service enquiries need a different starting point: the asset, site, work boundaries, access conditions, schedule and expected deliverables. Identify who provides tools, consumables and site support where these affect the scope. A service-company reference alone does not establish mobilisation availability or confirm that every part of a requested scope is included.",
    ],
  },
  {
    title: "Review technical fit before comparing the final price",
    paragraphs: [
      "A meaningful comparison checks what is included in each proposal. A lower unit price may reflect a different configuration, omitted accessories, a different inspection scope or another delivery basis. Ask suppliers to identify deviations clearly and to separate optional items, freight and other charges so that the alternatives can be assessed on a consistent basis.",
      "Company recognition does not replace product-level verification. Check that the offered model addresses the specified duty and that the proposed documentation covers the actual item. Any project-specific approval, material certificate, warranty or inspection requirement should be confirmed in the quotation and reviewed with the responsible technical team before an order is placed.",
    ],
  },
  {
    title: "Use the directory as a starting point for sourcing",
    paragraphs: [
      "This directory presents a selected cross-section of the global industry, from equipment manufacturers and specialist technology providers to engineering businesses and energy operators. It is not an exhaustive list, a ranking or a statement that every listed company supplies every country. Follow the official website links for current company information, product literature and the organisation's own contact channels.",
      "When you want Oillinko to help with sourcing, send the requirement through the enquiry form below. Our team reviews the information and coordinates suitable enquiries. A company name can be included as a brand or project reference, while the actual supply route, commercial terms and manufacturing origin are established for the particular request.",
    ],
  },
];

export default function CompanyDirectoryGuide() {
  return (
    <section id="sourcing-guide" aria-labelledby="sourcing-guide-title" className="border-y border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div><p className="text-sm font-semibold uppercase tracking-wider text-accent">For buyers & traders</p><h2 id="sourcing-guide-title" className="mt-3 text-3xl font-bold">From a company name to a useful enquiry</h2><p className="mt-4 leading-relaxed text-muted">A practical guide to using global manufacturer and industry references in oil and gas procurement.</p><Link href="/oil-and-gas" className="mt-6 inline-block font-semibold text-accent underline">Browse equipment & services</Link></div>
          <div className="space-y-9" data-company-guide="">{sections.map(section => <article key={section.title}><h3 className="text-xl font-bold">{section.title}</h3>{section.paragraphs.map(paragraph => <p key={paragraph.slice(0,40)} className="mt-3 text-base leading-7 text-muted">{paragraph}</p>)}</article>)}</div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-7 text-sm font-semibold text-accent"><Link href="/blog/how-to-write-a-bill-of-quantities" className="underline">Preparing a bill of quantities</Link><Link href="/blog/common-reasons-an-rfq-goes-to-the-wrong-supplier" className="underline">Choosing the right RFQ recipient</Link><Link href="/suppliers" className="underline">Oillinko’s supplier qualification approach</Link></div>
      </div>
    </section>
  );
}
