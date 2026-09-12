"use client";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { applications, catalogue, filterCatalogue, originCountries, requestUrl, sectors } from "@/lib/catalogue";
function subscribe(callback: ()=>void) { window.addEventListener("hashchange",callback); return ()=>window.removeEventListener("hashchange",callback); }
const snapshot=()=>window.location.hash;
const serverSnapshot=()=>"";
export default function CatalogueExplorer() {
 const hash=useSyncExternalStore(subscribe,snapshot,serverSnapshot);
 const params=new URLSearchParams(hash.replace(/^#/,""));
 const search=params.get("search")||"", sector=params.get("sector")||"", kind=params.get("kind")||"", application=params.get("application")||"", origin=params.get("origin")||"";
 const groups=filterCatalogue(search,sector,kind,application);
 const update=(key:string,value:string)=>{const next=new URLSearchParams(window.location.hash.slice(1));if(value)next.set(key,value);else next.delete(key);window.history.replaceState(null,"",`${window.location.pathname}${next.size?`#${next}`:""}`);window.dispatchEvent(new HashChangeEvent("hashchange"));};
 const control="mt-2 w-full rounded-md border border-line bg-white px-3 py-3 text-base text-foreground";
 return <section className="mx-auto max-w-6xl px-4 py-10"><div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
  <aside className="rounded-xl border border-line bg-oil-800 p-5 lg:sticky lg:top-20" aria-label="Catalogue filters">
   <h2 className="text-lg font-semibold">Find equipment & services</h2>
   <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-search">Search equipment or requirement</label><input id="catalogue-search" type="search" value={search} onChange={e=>update("search",e.target.value)} className={control} placeholder="Thermowell, valve, drilling…" />
   <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-sector">Industry sector</label><select id="catalogue-sector" value={sector} onChange={e=>update("sector",e.target.value)} className={control}><option value="">All sectors</option>{sectors.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select>
   <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-kind">Requirement type</label><select id="catalogue-kind" value={kind} onChange={e=>update("kind",e.target.value)} className={control}><option value="">Equipment & services</option><option>Equipment</option><option>Service</option></select>
   <label className="mt-5 block text-sm font-medium" htmlFor="catalogue-application">Project need</label><select id="catalogue-application" value={application} onChange={e=>update("application",e.target.value)} className={control}><option value="">All project needs</option>{applications.map(a=><option key={a}>{a}</option>)}</select>
   <div className="mt-6 border-t border-line pt-5"><label className="block text-sm font-medium" htmlFor="catalogue-origin">Required country of origin</label><select id="catalogue-origin" value={origin} onChange={e=>update("origin",e.target.value)} className={control}><option value="">No origin preference</option>{originCountries.map(c=><option key={c}>{c}</option>)}</select><p className="mt-2 text-xs leading-relaxed text-muted">Your manufacturing-origin preference is added to the RFQ. It does not imply verified origin or availability for the equipment shown. Delivery country is requested separately.</p></div>
   <button className="mt-5 text-sm font-semibold text-accent underline" onClick={()=>{window.history.replaceState(null,"",window.location.pathname);window.dispatchEvent(new HashChangeEvent("hashchange"));}}>Clear selections</button>
  </aside>
  <div className="min-w-0"><div className="mb-6 flex flex-wrap items-center justify-between gap-3"><p role="status" aria-live="polite" className="text-sm text-muted">{groups.length} of {catalogue.length} categories · {groups.reduce((sum,g)=>sum+g.types.length,0)} equipment and service types</p><Link href="/rfq" className="text-sm font-semibold text-accent underline">Have a BOQ? Send the whole list</Link></div>
   {origin&&<p className="mb-5 rounded-lg border border-line bg-white p-4 text-sm">Origin requested: <strong>{origin}</strong>. Oillinko will check this requirement when reviewing your inquiry.</p>}
   {groups.length===0&&<div className="rounded-xl border border-line bg-white p-8"><h2 className="text-xl font-semibold">Tell us what you need</h2><p className="mt-3 text-muted">No catalogue type matches these filters. Send a model number, drawing or equipment list to Oillinko for manual review.</p><Link href={requestUrl("other",undefined,origin)} className="mt-5 inline-block rounded bg-accent px-5 py-3 font-semibold text-black">Send your requirement</Link></div>}
   <div className="space-y-6">{groups.map(g=><article key={g.slug} className="rounded-xl border border-line bg-white p-5 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-accent">{g.kind}</p><h2 className="mt-2 text-xl font-bold"><Link href={`/equipment/${g.slug}`} className="hover:underline">{g.name}</Link></h2></div><Link href={requestUrl(g.slug,undefined,origin)} className="rounded border border-line px-4 py-2 text-sm font-semibold hover:border-accent">Request a quote</Link></div>
    <p className="mt-3 leading-relaxed text-muted">{g.summary}</p><div className="mt-4 flex flex-wrap gap-2" aria-label="Industry tags">{g.sectors.map(id=><button key={id} onClick={()=>update("sector",id)} className="rounded-full bg-oil-800 px-3 py-1.5 text-xs text-muted hover:text-accent">{sectors.find(s=>s.id===id)?.name}</button>)}</div>
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">{g.types.map(t=><li key={t.id} className="rounded-lg border border-line p-4"><Link className="font-semibold hover:text-accent" href={`/equipment/${g.slug}#${t.id}`}>{t.name}</Link><p className="mt-2 text-sm leading-relaxed text-muted">{t.description}</p><Link href={requestUrl(g.slug,t.id,origin)} className="mt-3 inline-block text-sm font-semibold text-accent">Enquire about this →</Link></li>)}</ul><Link href={`/equipment/${g.slug}`} className="mt-5 inline-block text-sm font-semibold text-accent">Specifications & enquiry checklist →</Link>
   </article>)}</div>
  </div>
 </div></section>;
}
