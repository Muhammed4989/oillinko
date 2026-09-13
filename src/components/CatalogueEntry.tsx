"use client";
import { useRouter } from "next/navigation";
import { catalogueSearchUrl, sectors } from "@/lib/catalogue";
export default function CatalogueEntry() {
 const router=useRouter();
 return <form action="/equipment" method="get" onSubmit={e=>{e.preventDefault();const d=new FormData(e.currentTarget);router.push(catalogueSearchUrl({search:String(d.get("search")||""),sector:String(d.get("sector")||"")}));}} className="mt-8 max-w-3xl rounded-xl bg-white p-4 text-[#142b40] shadow-lg">
  <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_200px_auto]"><div><label htmlFor="home-search" className="mb-1 block text-xs font-semibold">What are you looking for?</label><input id="home-search" name="search" type="search" placeholder="Equipment, component or service" className="w-full rounded border border-[#c9d7e2] px-3 py-3 text-base" /></div><div><label htmlFor="home-sector" className="mb-1 block text-xs font-semibold">Industry sector</label><select id="home-sector" name="sector" className="w-full rounded border border-[#c9d7e2] px-3 py-3 text-base"><option value="">All sectors</option>{sectors.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></div><button type="submit" className="self-end rounded bg-accent px-5 py-3 font-semibold text-black">Search</button></div>
 </form>;
}
