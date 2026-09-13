"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { applications, catalogue, catalogueFilterKeys, catalogueSearchUrl, originCountries, readCatalogueFilters, sectors, type CatalogueFilters } from "@/lib/catalogue";

export default function CatalogueFilterForm({ filters }: { filters: CatalogueFilters }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [category,setCategory]=useState(filters.category);
  const [kind,setKind]=useState(filters.kind);
  const control = "mt-2 w-full min-w-0 rounded-md border border-line bg-white px-3 py-3 text-base text-foreground";
  return <form action="/oil-and-gas" method="get" onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(catalogueFilterKeys.map(key => [key, String(data.get(key) ?? "")]));
    startTransition(() => router.push(catalogueSearchUrl(readCatalogueFilters(values))));
  }} aria-label="Catalogue filters" aria-busy={pending} className="rounded-xl border border-line bg-oil-800 p-5">
    <h2 className="text-lg font-semibold">Find equipment & services</h2>
    <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-search">Search equipment or requirement</label><input id="catalogue-search" name="search" type="search" defaultValue={filters.search} maxLength={160} className={control} placeholder="Thermowell, MWD, tank cleaning…"/>
    <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-category">Equipment / service category</label><select id="catalogue-category" name="category" value={category} onChange={e=>{const value=e.target.value;setCategory(value);const group=catalogue.find(g=>g.slug===value);if(group&&kind&&!group.types.some(t=>t.kind===kind))setKind("");}} className={control}><option value="">All categories</option>{catalogue.map(g => <option key={g.slug} value={g.slug}>{g.name}</option>)}</select>
    <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-sector">Industry sector</label><select id="catalogue-sector" name="sector" defaultValue={filters.sector} className={control}><option value="">All sectors</option>{sectors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select>
    <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-kind">Requirement type</label><select id="catalogue-kind" name="kind" value={kind} onChange={e=>{const value=e.target.value;setKind(value);const group=catalogue.find(g=>g.slug===category);if(group&&value&&!group.types.some(t=>t.kind===value))setCategory("");}} className={control}><option value="">All requirement types</option><option>Equipment</option><option>Service</option><option>Software</option></select>
    <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-application">Project need</label><select id="catalogue-application" name="application" defaultValue={filters.application} className={control}><option value="">All project needs</option>{applications.map(a => <option key={a}>{a}</option>)}</select>
    <div className="mt-6 border-t border-line pt-5"><label className="block text-sm font-medium" htmlFor="catalogue-origin">Required country of origin</label><input id="catalogue-origin" name="origin" defaultValue={filters.origin} list="catalogue-countries" maxLength={100} placeholder="No preference, or enter a country" className={control}/><datalist id="catalogue-countries">{originCountries.map(c => <option key={c} value={c}/>)}</datalist><p className="mt-2 text-xs leading-relaxed text-muted">For equipment in your request: this manufacturing-origin preference is added to the RFQ. Origin is confirmed for the actual offer. Delivery and service location are separate.</p></div>
    <button type="submit" disabled={pending} className="mt-6 w-full rounded bg-accent px-4 py-3 font-semibold text-black disabled:opacity-60">{pending ? "Searching…" : "Search catalogue"}</button>
    <Link href="/oil-and-gas" className="mt-4 inline-block text-sm font-semibold text-accent underline">Clear selections</Link>
  </form>;
}
