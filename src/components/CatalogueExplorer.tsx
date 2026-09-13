import Link from "next/link";
import { catalogue, catalogueSearchUrl, filterCatalogue, groupUrl, requestUrl, sectors, typeUrl, type CatalogueFilters, type CatalogueGroup, type CatalogueType } from "@/lib/catalogue";
import CatalogueFilterForm from "@/components/CatalogueFilterForm";
function ItemCard({ group, item, origin }: { group: CatalogueGroup; item: CatalogueType; origin: string }) {
 const productUrl = typeUrl(group,item)+(origin?`?${new URLSearchParams({origin})}`:"");
 return <li className="rounded-lg border border-line p-4"><p className="mb-2 text-xs text-muted">{item.kind ?? group.kind}</p><Link className="font-semibold hover:text-accent" href={productUrl}>{item.name}</Link><p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p><Link href={productUrl} className="mt-3 inline-block text-sm font-semibold text-accent">{item.kind === "Service" ? "Service information & enquiry →" : "Product information & enquiry →"}</Link>{origin && <Link href={requestUrl(group.slug,item.id,origin)} className="mt-2 block text-sm text-accent">Request with selected origin →</Link>}</li>;
}
export default function CatalogueExplorer({ filters }: { filters: CatalogueFilters }) {
 const {search, category, sector, kind, application, origin} = filters;
 const groups = filterCatalogue(search, sector, kind, application, category);
 const filtered = !!(search || category || sector || kind || application);
 return <section className="mx-auto max-w-6xl px-4 py-10"><div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
  <aside className="min-w-0"><CatalogueFilterForm key={catalogueSearchUrl(filters)} filters={filters}/></aside>
  <div className="min-w-0"><div className="mb-6 flex flex-wrap items-center justify-between gap-3"><p role="status" className="text-sm text-muted">{groups.length} of {catalogue.length} categories · {groups.reduce((sum,g)=>sum+g.types.length,0)} equipment, service and software types</p><Link href="/rfq" className="text-sm font-semibold text-accent underline">Have a BOQ? Send the whole list</Link></div>
   {filtered && <p className="mb-5 text-sm text-muted">Results for: {[search, catalogue.find(g=>g.slug===category)?.name, sectors.find(s=>s.id===sector)?.name, kind, application].filter(Boolean).join(" · ")}</p>}
   {origin && <p className="mb-5 rounded-lg border border-line bg-white p-4 text-sm">Manufacturing origin requested: <strong>{origin}</strong>. Oillinko will check this requirement for equipment included in your enquiry.</p>}
   {groups.length===0 && <div className="rounded-xl border border-line bg-white p-8"><h2 className="text-xl font-semibold">Tell us what you need</h2><p className="mt-3 text-muted">No catalogue type matches these filters. Broaden your selections or send a model number, drawing or service scope to Oillinko.</p><Link href={requestUrl("other",undefined,origin)} className="mt-5 inline-block rounded bg-accent px-5 py-3 font-semibold text-black">Send your requirement</Link></div>}
   <div className="space-y-6">{groups.map(g => <article key={g.slug} className="rounded-xl border border-line bg-white p-5 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-accent">{[...new Set(g.types.map(t=>t.kind??g.kind))].join(" & ")}</p><h2 className="mt-2 text-xl font-bold"><Link href={groupUrl(g)} className="hover:underline">{g.name}</Link></h2></div><Link href={groupUrl(g)} className="rounded border border-line px-4 py-2 text-sm font-semibold hover:border-accent">Explore category</Link></div>
    <p className="mt-3 leading-relaxed text-muted">{g.summary}</p><div className="mt-4 flex flex-wrap gap-2" aria-label="Industry tags">{[...new Set(g.types.flatMap(t=>t.sectors??g.sectors))].map(id => <Link key={id} href={catalogueSearchUrl({...filters,sector:id})} className="rounded-full bg-oil-800 px-3 py-1.5 text-xs text-muted hover:text-accent">{sectors.find(s=>s.id===id)?.name}</Link>)}</div>
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">{(filtered ? g.types : g.types.slice(0,4)).map(t => <ItemCard key={t.id} group={g} item={t} origin={origin}/>)}</ul>
    {!filtered && g.types.length>4 && <details className="mt-4"><summary className="cursor-pointer py-2 text-sm font-semibold text-accent">Show {g.types.length-4} more requirements</summary><ul className="mt-3 grid gap-3 sm:grid-cols-2">{g.types.slice(4).map(t => <ItemCard key={t.id} group={g} item={t} origin={origin}/>)}</ul></details>}
    <Link href={groupUrl(g)} className="mt-5 inline-block text-sm font-semibold text-accent">Explore the full category →</Link>
   </article>)}</div>
  </div>
 </div></section>;
}
