import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CompanyFilterForm from "@/components/CompanyFilterForm";
import CompanyDirectoryGuide from "@/components/CompanyDirectoryGuide";
import RfqForm from "@/components/RfqForm";
import { companies, companyDirectoryPath, companyRoles, companySearchUrl, companySpecialties, filterCompanies, readCompanyFilters } from "@/lib/companies";
import { site } from "@/lib/site";
import logoRecords from "@/lib/company-logos.json";
import { companyProfilePath, getCompanyProfile } from "@/lib/company-profiles";

const logos: Record<string, { src: string; sourcePage: string; attribution?: string | null; license?: string | null; licenseUrl?: string | null }> = logoRecords;

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const title = "Global Oil & Gas Companies & Manufacturers Directory";
const description = "Explore oil and gas manufacturers, technology providers, engineering companies and energy operators worldwide. Search by company type and specialty.";

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = await searchParams;
  const index = Object.values(query).every(value => !value || (Array.isArray(value) && !value.length));
  return {
    title, description,
    alternates: { canonical: companyDirectoryPath },
    robots: { index, follow: true, googleBot: { index, follow: true } },
    openGraph: { title, description, url: site.domain + companyDirectoryPath },
    twitter: { title, description },
  };
}

export default async function CompaniesPage({ searchParams }: Props) {
  const query = await searchParams;
  const filters = readCompanyFilters(query);
  const results = filterCompanies(filters);
  const selectedCompany = companies.find(company => company.id === query.company);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": site.domain + companyDirectoryPath, name: title, description, url: site.domain + companyDirectoryPath, mainEntity: { "@id": site.domain + companyDirectoryPath + "#company-list" } },
      { "@type": "ItemList", "@id": site.domain + companyDirectoryPath + "#company-list", numberOfItems: results.length, itemListElement: results.map((company, position) => ({ "@type": "ListItem", position: position + 1, item: { "@type": "Organization", name: company.name, url: company.website, description: company.description } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.domain }, { "@type": "ListItem", position: 2, name: "Oil & Gas", item: site.domain + "/oil-and-gas" }, { "@type": "ListItem", position: 3, name: "Companies", item: site.domain + companyDirectoryPath }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="border-b border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-sm text-muted"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/oil-and-gas">Oil & Gas</Link><span aria-hidden="true">/</span><span aria-current="page">Companies</span></nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The global industry, in one place</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">Global oil & gas<br className="hidden sm:block" /> company directory.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">Explore equipment manufacturers, oilfield technology providers, engineering companies and energy operators. Connect an industry name with the equipment, services and project requirements behind it.</p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 text-sm"><span><strong className="text-xl">{companies.length}</strong> company references</span><span><strong className="text-xl">{Object.keys(companyRoles).length}</strong> company types</span><span><strong className="text-xl">{Object.keys(companySpecialties).length}</strong> specialties</span></div>
        </div>
      </section>
      <section aria-labelledby="directory-title" className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="directory-title" className="mb-5 text-2xl font-bold">Explore the directory</h2>
        <CompanyFilterForm key={companySearchUrl(filters)} filters={filters} />
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted">An independent industry reference. Listings do not imply a customer relationship, partnership, authorised distribution or endorsement of Oillinko. Headquarters identify the company base; product manufacturing origin is confirmed separately for each offer.</p>
        <p role="status" className="my-6 text-sm font-medium">{results.length} of {companies.length} companies · A–Z</p>
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map(company => <li key={company.id} id={company.id} data-company-id={company.id} className="flex min-w-0 scroll-mt-24 flex-col rounded-xl border border-line bg-white p-6">
            <div className="flex h-24 items-center justify-center border-b border-line pb-5">{logos[company.id] ? <Image src={logos[company.id].src} alt={`${company.name} logo`} width={160} height={70} className="h-[70px] w-40 object-contain" /> : <span className="text-center text-2xl font-bold tracking-tight">{company.name}</span>}</div>
            <h3 className="mt-5 text-xl font-bold">{company.name}</h3>
            <p className="mt-5 text-sm font-semibold text-accent">{companyRoles[company.role]}</p>
            <p className="mt-2 text-sm text-muted">Headquarters: {company.headquarters}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{company.description}</p>
            <ul aria-label={`${company.name} specialties`} className="mt-5 flex flex-wrap gap-2">{company.specialties.map(id => <li key={id}><Link href={companySearchUrl({ ...filters, specialty: id })} className="inline-block rounded-full border border-line bg-oil-800 px-3 py-1.5 text-sm hover:border-accent">{companySpecialties[id].name}</Link></li>)}</ul>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-6 text-sm font-semibold"><a href={company.website} target="_blank" rel="noopener noreferrer" className="text-accent underline" aria-label={`${company.name} official website (opens in new tab)`}>Official website ↗</a><Link href={companySpecialties[company.specialties[0]].href} className="underline">Related equipment & services</Link></div>
            {getCompanyProfile(company.id) && <Link href={companyProfilePath(company.id)} className="mt-4 text-center text-sm font-semibold text-accent underline">View company profile & catalogue</Link>}
            <Link href={`${companySearchUrl(filters)}${companySearchUrl(filters).includes("?") ? "&" : "?"}company=${company.id}#company-enquiry`} className="mt-5 rounded-md border border-line px-4 py-2.5 text-center text-sm font-semibold hover:border-accent">Discuss a requirement with Oillinko</Link>
          </li>)}
        </ul>
        {results.length === 0 && <div className="rounded-xl border border-line bg-white p-8"><h3 className="text-xl font-bold">No companies match these selections</h3><p className="mt-3 text-muted">Try a broader keyword or remove a filter. You can still send Oillinko a requirement for a company or product not listed here.</p><Link href={companyDirectoryPath} className="mt-5 inline-block font-semibold text-accent underline">Show all companies</Link></div>}
        <details className="mt-8 rounded-lg border border-line bg-white p-5 text-sm text-muted"><summary className="cursor-pointer font-semibold text-foreground">About these references & logo credits</summary><p className="mt-4 leading-relaxed">Company reference review dates are stored per listing; this directory was last updated on 22 September 2026. Names and brand marks identify the organisations listed; they do not represent an affiliation with Oillinko. Selected logos are sourced from official company materials or the credited Commons files. Where a suitable logo is unavailable, the company is identified by name.</p><p className="mt-3 leading-relaxed">Logos have been converted to PNG, proportionally resized and centred on white. Original artwork is unchanged. The credited WEG and Endress+Hauser PNG versions remain available under the respective share-alike licences linked below.</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{Object.entries(logos).map(([id, logo]) => <li key={id}><a href={logo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline">{companies.find(company => company.id === id)?.name} logo source</a>{logo.attribution && <span> — {logo.attribution}</span>}{logo.licenseUrl && <span> <a href={logo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">{logo.license}</a></span>}</li>)}</ul></details>
      </section>
      <CompanyDirectoryGuide />
      <section id="company-enquiry" aria-labelledby="company-enquiry-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Your enquiry, reviewed by Oillinko</p>
        <h2 id="company-enquiry-title" className="mt-3 text-3xl font-bold">Tell us what your project needs</h2>
        <p className="mt-4 leading-relaxed text-muted">Share your equipment list, brand or model reference, or service scope. Oillinko will review the requirement and coordinate sourcing with you.</p>
        {selectedCompany && <p className="mt-5 rounded-md border border-line bg-oil-800 p-4">Company reference: <strong>{selectedCompany.name}</strong>. Add the specific model, item or project scope below.</p>}
        <div className="mt-7 rounded-xl border border-line bg-white p-5 sm:p-8"><RfqForm key={selectedCompany?.id ?? "general"} initialItem={selectedCompany ? `${selectedCompany.name} — model / project reference` : ""} sourcePage={companyDirectoryPath + (selectedCompany ? `?company=${selectedCompany.id}` : "")} /></div>
      </section>
    </>
  );
}
