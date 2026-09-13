import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { sectors, catalogueSearchUrl, routedCatalogueFilters } from "@/lib/catalogue";
import { PageHeader } from "@/components/ui";
import CatalogueExplorer from "@/components/CatalogueExplorer";
import type { CatalogueQuery } from "@/components/CatalogueLanding";
type Props={params:Promise<{sector:string}>;searchParams:Promise<CatalogueQuery>};
export const dynamicParams=false;
export function generateStaticParams(){return sectors.map(s=>({sector:s.id}));}
export async function generateMetadata({params,searchParams}:Props):Promise<Metadata>{
 const {sector}=await params;const s=sectors.find(s=>s.id===sector);if(!s)return {};
 const query=await searchParams;const title=`${s.name} Equipment & Services`;const url=`/industries/${s.id}`;
 return {title,description:s.description,alternates:{canonical:url},openGraph:{title,description:s.description,url},...(Object.values(query).some(Boolean)?{robots:{index:false,follow:true,googleBot:{index:false,follow:true}}}:{})};
}
export default async function SectorPage({params,searchParams}:Props){
 const {sector}=await params;const s=sectors.find(s=>s.id===sector);if(!s)notFound();
 const filters=routedCatalogueFilters(await searchParams,{sector:s.id});const target=catalogueSearchUrl(filters);
 if(target.split('?')[0]!==`/industries/${s.id}`)redirect(target);
 return <><PageHeader title={s.name} subtitle={s.description}/><section className="mx-auto max-w-6xl px-4 pt-10"><nav aria-label="Breadcrumb" className="mb-6 flex gap-3 text-sm text-muted"><Link href="/oil-and-gas">Oil &amp; Gas</Link><span>/</span><Link href="/industries">Industries</Link><span>/</span><span>{s.name}</span></nav><p className="max-w-3xl text-lg leading-relaxed text-muted">Explore equipment, services and software used in this sector. Choose a requirement type or category to refine the catalogue. Each product or service has its own information page with selection guidance and a request form.</p></section><CatalogueExplorer filters={filters}/></>;
}
