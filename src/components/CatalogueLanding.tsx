import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { catalogueRoot, catalogueSections, catalogueSearchUrl, routedCatalogueFilters, sectionUrl, typeUrl, type CatalogueRoute } from "@/lib/catalogue";
import { topicOverviews } from "@/lib/catalogue-content";
import { site } from "@/lib/site";
import CatalogueExplorer from "@/components/CatalogueExplorer";

export type CatalogueQuery = Record<string,string|string[]|undefined>;
export function landingMetadata(query:CatalogueQuery,route?:CatalogueRoute):Metadata {
 const section=catalogueSections.find(s=>s.kind===route?.kind);
 const title=route?.group?`${route.group.name}${route.kind==="Software"?" Software":""} for Oil & Gas`:section?.name??"Oil & Gas Equipment, Services & Software";
 const description=route?.group?.summary??section?.description??"Explore equipment, specialist services and software across the oil and gas value chain. Read technical information and send your requirements to Oillinko.";
 const url=route?.url??catalogueRoot;
 return {title,description,alternates:{canonical:url},openGraph:{title,description,url},twitter:{title,description},...(Object.values(query).some(Boolean)?{robots:{index:false,follow:true,googleBot:{index:false,follow:true}}}:{})};
}
export default function CatalogueLanding({query,route}:{query:CatalogueQuery;route?:CatalogueRoute}) {
 const filters=routedCatalogueFilters(query,route?{kind:route.kind,...(route.group?{category:route.group.slug}:{})}:{});
 const url=route?.url??catalogueRoot;
 const resolved=catalogueSearchUrl(filters);
 if(resolved.split('?')[0]!==url)redirect(resolved);
 const section=catalogueSections.find(s=>s.kind===route?.kind);
 const title=route?.group?.name??section?.name??"Oil & Gas Equipment, Services & Software";
 const summary=route?.group?.summary??section?.description??"Find equipment, specialist services and software for your project. Explore by product family or industry, read the technical information, and send your requirements to Oillinko.";
 const crumbs=[{name:"Home",path:"/"},{name:"Oil & Gas",path:catalogueRoot},...(section?[{name:section.kind==="Service"?"Services":section.kind==="Software"?"Software":"Equipment",path:sectionUrl(section.kind)}]:[]),...(route?.group?[{name:route.group.name,path:url}]:[])];
 const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:site.domain+c.path}))};
 return <>
  <section className="border-b border-line bg-oil-800"><div className="mx-auto max-w-6xl px-4 py-12">
   <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-muted">{crumbs.map((c,i)=><span key={c.path} className="flex gap-2">{i>0&&<span>/</span>}{i===crumbs.length-1?<span>{c.name}</span>:<Link href={c.path}>{c.name}</Link>}</span>)}</nav>
   <h1 className="max-w-4xl text-3xl font-bold sm:text-4xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{summary}</p>
   <nav aria-label="Catalogue sections" className="mt-7 flex flex-wrap gap-3"><Link href={catalogueRoot} className="rounded border border-line bg-white px-4 py-3 text-sm font-semibold">All requirements</Link>{catalogueSections.map(s=><Link key={s.slug} href={sectionUrl(s.kind)} aria-current={!route?.group&&route?.kind===s.kind?"page":undefined} className="rounded border border-line bg-white px-4 py-3 text-sm font-semibold hover:border-accent">{s.kind==="Service"?"Services":s.kind}</Link>)}<Link href="/industries" className="rounded border border-line bg-white px-4 py-3 text-sm font-semibold">Browse by industry</Link></nav>
  </div></section>
  <CatalogueExplorer filters={filters}/>
  {route?.group&&<section className="mx-auto max-w-6xl px-4 pt-10" aria-label="Category information"><h2 className="text-2xl font-bold">Understanding {route.group.name.toLowerCase()}</h2><p className="mt-3 max-w-4xl leading-7 text-muted">Compare the functions and applications in this category, then use the catalogue filters to narrow your requirement. Each topic includes detailed selection information and an enquiry form.</p><div className="mt-5 grid gap-4 md:grid-cols-2">{route.group.types.map(t=><article id={t.id} key={t.id} className="scroll-mt-24 rounded-xl border border-line bg-white p-5"><h3 className="text-lg font-semibold"><Link className="hover:text-accent" href={typeUrl(route.group!,t)+(filters.origin?`?${new URLSearchParams({origin:filters.origin})}`:"")}>{t.name}</Link></h3><p className="mt-3 leading-7 text-muted">{topicOverviews[t.id][0]}</p><p className="mt-3 leading-7 text-muted">{topicOverviews[t.id][1]}</p></article>)}</div></section>}
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </>;
}
