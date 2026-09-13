import type { Metadata } from "next";
import Link from "next/link";
import { catalogueRoot, groupUrl, sectionUrl, sectors, typeUrl, type CatalogueGroup, type CatalogueType } from "@/lib/catalogue";
import { productSections, topicOverviews } from "@/lib/catalogue-content";
import { site } from "@/lib/site";
import RfqForm from "@/components/RfqForm";

export function productMetadata(group:CatalogueGroup,item:CatalogueType):Metadata {
 const description=topicOverviews[item.id][0];
 const summary=description.length<=160?description:description.slice(0,157).replace(/\s+\S*$/,"")+"…";
 return {title:item.name,description:summary,alternates:{canonical:typeUrl(group,item)},openGraph:{title:item.name,description:summary,url:typeUrl(group,item)},twitter:{title:item.name,description:summary}};
}
export default function CatalogueProduct({group,item}:{group:CatalogueGroup;item:CatalogueType}) {
 const sections=productSections(group,item);const kind=item.kind??group.kind;
 const siblings=group.types.filter(t=>t.id!==item.id);const url=`${site.domain}${typeUrl(group,item)}`;
 const crumbs=[{name:"Home",path:"/"},{name:"Oil & Gas",path:catalogueRoot},{name:kind==="Service"?"Services":kind==="Software"?"Software":"Equipment",path:sectionUrl(kind)},{name:group.name,path:groupUrl(group,kind)},{name:item.name,path:typeUrl(group,item)}];
 const schema=[{"@context":"https://schema.org","@type":"WebPage",name:item.name,description:topicOverviews[item.id][0],url,about:{"@type":"Thing",name:item.name}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:site.domain+c.path}))}];
 return <>
  <section className="border-b border-line bg-oil-800"><div className="mx-auto max-w-6xl px-4 py-12">
   <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-muted">{crumbs.map((c,i)=><span key={c.path} className="flex gap-2">{i>0&&<span>/</span>}{i===crumbs.length-1?<span>{c.name}</span>:<Link href={c.path}>{c.name}</Link>}</span>)}</nav>
   <p className="text-sm font-semibold uppercase tracking-wide text-accent">{kind === "Service" ? "Service information" : kind === "Software" ? "Software & licensing" : "Product information"}</p>
   <h1 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">{item.name}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{item.description}</p>
   <div className="mt-6 flex flex-wrap gap-2">{(item.sectors??group.sectors).map(id=><Link key={id} href={`/industries/${id}`} className="rounded-full border border-line bg-white px-3 py-2 text-sm">{sectors.find(s=>s.id===id)?.name}</Link>)}</div>
  </div></section>
  <section className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_280px]">
   <article id="product-information" data-product-content className="min-w-0 space-y-8">{sections.map((section,index)=><section key={section.title} id={`information-${index}`} className="scroll-mt-24"><h2 className="text-xl font-bold sm:text-2xl">{section.title}</h2>{section.paragraphs.map((paragraph,i)=><p key={i} className="mt-4 leading-7 text-muted">{paragraph}</p>)}</section>)}</article>
   <aside className="min-w-0 space-y-5"><nav aria-label="On this page" className="rounded-xl border border-line bg-white p-5"><h2 className="text-lg font-bold">On this page</h2><ul className="mt-4 space-y-3 text-sm">{sections.map((section,index)=><li key={section.title}><a className="text-accent hover:underline" href={`#information-${index}`}>{section.title}</a></li>)}</ul></nav>
    <div className="rounded-xl border border-line bg-white p-5"><h2 className="text-lg font-bold">Related {kind==="Service"?"services":"requirements"}</h2><ul className="mt-4 space-y-3 text-sm">{siblings.map(t=><li key={t.id}><Link href={typeUrl(group,t)} className="font-semibold text-accent hover:underline">{t.name}</Link></li>)}</ul><Link href={groupUrl(group,kind)} className="mt-5 inline-block text-sm underline">View the complete category</Link></div>
   </aside>
  </section>
  <section id="request" className="scroll-mt-24 border-t border-line bg-oil-800"><div className="mx-auto max-w-3xl px-4 py-12"><h2 className="text-2xl font-bold">Enquire about {item.name.toLowerCase()}</h2><p className="mb-7 mt-4 leading-relaxed text-muted">Send your specification or service scope to Oillinko. Our team reviews your request and contacts you to clarify the next steps.</p><RfqForm key={typeUrl(group,item)} initialCategory={group.name} initialItem={item.name} initialKind={kind} sourcePage={typeUrl(group,item)}/></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </>;
}
