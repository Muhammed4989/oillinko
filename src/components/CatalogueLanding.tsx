import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { catalogue, catalogueRoot, catalogueSections, catalogueSearchUrl, routedCatalogueFilters, sectionUrl, type CatalogueRoute } from "@/lib/catalogue";
import { topicOverviews } from "@/lib/catalogue-content";
import { site } from "@/lib/site";
import CatalogueHierarchy from "@/components/CatalogueHierarchy";
import CatalogueSearchResults from "@/components/CatalogueSearchResults";
import TableOfContents from "@/components/TableOfContents";

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
  </div></section>
  <section className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-12 sm:grid-cols-[230px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]" aria-label="Catalogue information">
   <aside className="min-w-0 sm:sticky sm:top-6 sm:max-h-[calc(100vh-3rem)] sm:overflow-y-auto"><div className="max-h-72 overflow-y-auto sm:max-h-none sm:overflow-visible"><CatalogueHierarchy activeKind={route?.kind} activeGroup={route?.group}/></div><div className="mt-5"><TableOfContents containerId="catalogue-content"/></div></aside>
   <article id="catalogue-content" className="min-w-0">
    {Object.values(query).some(Boolean) ? <CatalogueSearchResults filters={filters}/> : route?.group ? route.group.types.filter(t=>(t.kind??route.group!.kind)===route.kind).map(t=><section key={t.id} className="mb-10"><h2 id={t.id} className="scroll-mt-24 text-2xl font-bold">{t.name}</h2>{topicOverviews[t.id].map((paragraph,i)=><p key={i} className="mt-4 leading-7 text-muted">{paragraph}</p>)}</section>) : route?.kind ? catalogueSections.filter(s=>s.kind===route.kind).map(s=><section key={s.slug}><h2 id={s.slug} className="scroll-mt-24 text-2xl font-bold">{s.name}</h2><p className="mt-4 leading-7 text-muted">{s.description}</p>{catalogue.filter(g=>g.types.some(t=>(t.kind??g.kind)===s.kind)).map(g=><section key={g.slug} className="mt-10"><h2 id={g.slug} className="scroll-mt-24 text-xl font-bold">{g.name}</h2><p className="mt-4 leading-7 text-muted">{g.summary}</p></section>)}</section>) : catalogueSections.map(s=><section key={s.slug} className="mb-12"><h2 id={s.slug} className="scroll-mt-24 text-2xl font-bold">{s.name}</h2><p className="mt-4 leading-7 text-muted">{s.description}</p></section>)}
   </article>
  </section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </>;
}
