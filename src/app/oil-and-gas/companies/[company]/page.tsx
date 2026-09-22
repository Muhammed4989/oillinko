import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RfqForm from "@/components/RfqForm";
import { companies, companyDirectoryPath } from "@/lib/companies";
import { companyProfilePath, companyProfiles, getCompanyProfile } from "@/lib/company-profiles";
import { site } from "@/lib/site";

type Props = { params: Promise<{ company: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return companyProfiles.map(profile => ({ company: profile.companyId })); }

function resolve(companyId: string) {
  const company = companies.find(candidate => candidate.id === companyId);
  const profile = getCompanyProfile(companyId);
  if (!company || !profile) notFound();
  return { company, profile };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company: companyId } = await params;
  const { company } = resolve(companyId);
  const path = companyProfilePath(company.id);
  const title = `${company.name} | Industrial Valve Manufacturer Profile`;
  const description = `${company.name} company profile, industrial valve range, supplied product catalogue and RFQ qualification notes for Oillinko buyers.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: site.domain + path, type: "website" },
    twitter: { title, description },
  };
}

export default async function CompanyProfilePage({ params }: Props) {
  const { company: companyId } = await params;
  const { company, profile } = resolve(companyId);
  const path = companyProfilePath(company.id);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${site.domain}${path}#company`, name: company.name, url: company.website, description: company.description, address: { "@type": "PostalAddress", addressCountry: company.headquarters }, sameAs: profile.sourceLinks.map(source => source.href) },
      { "@type": "WebPage", "@id": `${site.domain}${path}`, name: company.name, url: `${site.domain}${path}`, about: { "@id": `${site.domain}${path}#company` }, isPartOf: { "@id": `${site.domain}${companyDirectoryPath}` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
        { "@type": "ListItem", position: 2, name: "Oil & Gas", item: `${site.domain}/oil-and-gas` },
        { "@type": "ListItem", position: 3, name: "Companies", item: `${site.domain}${companyDirectoryPath}` },
        { "@type": "ListItem", position: 4, name: company.name, item: `${site.domain}${path}` },
      ] },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="border-b border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-sm text-muted"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/oil-and-gas">Oil & Gas</Link><span aria-hidden="true">/</span><Link href={companyDirectoryPath}>Companies</Link><span aria-hidden="true">/</span><span aria-current="page">{company.name}</span></nav>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Independent manufacturer reference</p>
        <h1 className="mt-3 max-w-5xl text-3xl font-bold tracking-tight sm:text-5xl">{company.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">China-based industrial valve manufacturer listed as a prospective source for project-specific enquiries. Oillinko reviews each requirement and coordinates quotations manually.</p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm"><span className="rounded-full border border-line px-3 py-1.5">Headquarters: {company.headquarters}</span><span className="rounded-full border border-line px-3 py-1.5">Company type: Equipment manufacturer</span><span className="rounded-full border border-line px-3 py-1.5">Reviewed: {profile.reviewedOn}</span></div>
      </div>
    </section>

    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950"><strong>Qualification status:</strong> This is an independent directory profile for a prospective source. It does not imply appointment, authorised distribution, project approval or confirmed stock. Product compliance and manufacturing origin are verified against the specific quotation.</div>
          {profile.sections.map(section => <section key={section.heading} className="mt-10"><h2 className="text-2xl font-bold">{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph.slice(0, 70)} className="mt-4 leading-8 text-muted">{paragraph}</p>)}</section>)}

          <section className="mt-12" aria-labelledby="product-families"><h2 id="product-families" className="text-2xl font-bold">Relevant product families</h2><p className="mt-4 leading-8 text-muted">These links explain the neutral technical requirements used for buyer enquiries. They do not identify or assign a supplier on the catalogue page.</p><ul className="mt-6 grid gap-4 sm:grid-cols-2">{profile.productFamilies.map(family => <li key={family.name} className="rounded-xl border border-line bg-white p-5"><h3 className="font-bold">{family.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{family.description}</p><Link href={family.href} className="mt-4 inline-block text-sm font-semibold text-accent underline">Review technical requirements</Link></li>)}</ul></section>

          <section className="mt-12" aria-labelledby="sources"><h2 id="sources" className="text-2xl font-bold">Sources and review basis</h2><p className="mt-4 leading-8 text-muted">Profile facts were checked against the catalogue supplied to Oillinko and the manufacturer&apos;s official pages on {profile.reviewedOn}. External statements remain attributable to the manufacturer and must be reconfirmed for an order.</p><ul className="mt-4 list-disc space-y-2 pl-5">{profile.sourceLinks.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-accent underline">{source.label} ↗</a></li>)}</ul></section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-white p-5"><h2 className="text-lg font-bold">Catalogue reviewed</h2><p className="mt-2 text-sm leading-relaxed text-muted">Oillinko reviewed the 87-page product catalogue supplied by the manufacturer. The file is retained for sourcing review and is not published on the website.</p></div>
          <div className="rounded-xl border border-line bg-oil-800 p-5"><h2 className="text-lg font-bold">Official company reference</h2><p className="mt-2 text-sm leading-relaxed text-muted">Company identity and external contact information are shown here only because this is the company&apos;s own directory profile.</p><a href={company.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-accent underline">Visit official website ↗</a></div>
        </aside>
      </div>

      <section id="company-enquiry" aria-labelledby="company-enquiry-title" className="mx-auto mt-16 max-w-3xl scroll-mt-24 border-t border-line pt-14"><p className="text-sm font-semibold uppercase tracking-wider text-accent">Enquiry managed by Oillinko</p><h2 id="company-enquiry-title" className="mt-3 text-3xl font-bold">Request a quotation for this valve range</h2><p className="mt-4 leading-relaxed text-muted">Send the valve datasheet, quantity, project standards, documentation requirements, required manufacturing origin and delivery country. Your request comes to Oillinko for review and manual supplier coordination.</p><div className="mt-7 rounded-xl border border-line bg-white p-5 sm:p-8"><RfqForm initialCategory="Valves & Actuation" initialItem={`${company.name} — valve model / project reference`} initialKind="Equipment" sourcePage={path} /></div></section>
    </main>
  </>;
}
