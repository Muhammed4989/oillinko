import Link from "next/link";
import { filterCatalogue, requestUrl, typeUrl, type CatalogueFilters } from "@/lib/catalogue";
import CatalogueFilterForm from "@/components/CatalogueFilterForm";

export default function CatalogueSearchResults({ filters }: { filters: CatalogueFilters }) {
  const groups = filterCatalogue(filters.search, filters.sector, filters.kind, filters.application, filters.category);
  const count = groups.reduce((total, group) => total + group.types.length, 0);

  return (
    <>
      <h2 id="search-results" className="scroll-mt-24 text-2xl font-bold">Search results</h2>
      <p role="status" className="mt-3 text-muted">{count} matching equipment, service and software {count === 1 ? "type" : "types"}.</p>
      <div className="mt-6 max-w-xl"><CatalogueFilterForm filters={filters} /></div>
      {groups.length === 0 && <p className="mt-8 leading-7 text-muted">No catalogue type matches these selections. Broaden your search or <Link href={requestUrl("other", undefined, filters.origin)} className="text-accent underline">send your requirement</Link> to Oillinko.</p>}
      {groups.map((group) => (
        <section key={group.slug} className="mt-10 border-t border-line pt-8">
          <h2 id={`result-${group.slug}`} className="scroll-mt-24 text-xl font-bold">{group.name}</h2>
          <p className="mt-3 leading-7 text-muted">{group.summary}</p>
          <ul className="mt-5 divide-y divide-line">
            {group.types.map((item) => (
              <li key={item.id} className="py-4">
                <Link href={`${typeUrl(group, item)}${filters.origin ? `?${new URLSearchParams({ origin: filters.origin })}` : ""}`} className="font-semibold text-accent underline underline-offset-4">{item.name}</Link>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
