import type { Metadata } from "next";
import Link from "next/link";
import { catalogueRoot, groupUrl, sectionUrl, typeUrl, type CatalogueGroup, type CatalogueType } from "@/lib/catalogue";
import { productSections, topicOverviews } from "@/lib/catalogue-content";
import { site } from "@/lib/site";
import CatalogueHierarchy from "@/components/CatalogueHierarchy";
import TableOfContents from "@/components/TableOfContents";
import RfqForm from "@/components/RfqForm";
import BreadcrumbBar from "@/components/BreadcrumbBar";

export function productMetadata(group:CatalogueGroup,item:CatalogueType):Metadata {
 const description=topicOverviews[item.id][0];
 const summary=description.length<=160?description:description.slice(0,157).replace(/\s+\S*$/,"")+"…";
 return {title:item.name,description:summary,alternates:{canonical:typeUrl(group,item)},openGraph:{title:item.name,description:summary,url:typeUrl(group,item)},twitter:{title:item.name,description:summary}};
}
export default function CatalogueProduct({group,item}:{group:CatalogueGroup;item:CatalogueType}) {
 const sections=productSections(group,item);const kind=item.kind??group.kind;
 const url=`${site.domain}${typeUrl(group,item)}`;
 const crumbs=[{name:"Home",path:"/"},{name:"Oil & Gas",path:catalogueRoot},{name:kind==="Service"?"Services":kind==="Software"?"Software":"Equipment",path:sectionUrl(kind)},{name:group.name,path:groupUrl(group,kind)},{name:item.name,path:typeUrl(group,item)}];
 const schema=[{"@context":"https://schema.org","@type":"WebPage",name:item.name,description:topicOverviews[item.id][0],url,about:{"@type":"Thing",name:item.name}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:site.domain+c.path}))}];
 return <>
  <BreadcrumbBar>
   <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-muted">{crumbs.map((c,i)=><span key={c.path} className="flex gap-2">{i>0&&<span aria-hidden="true">/</span>}{i===crumbs.length-1?<span aria-current="page">{c.name}</span>:<Link href={c.path}>{c.name}</Link>}</span>)}</nav>
  </BreadcrumbBar>
  <section className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-12 sm:grid-cols-[230px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
   <aside className="order-2 min-w-0 sm:order-1 sm:sticky sm:top-6 sm:max-h-[calc(100vh-3rem)] sm:overflow-y-auto"><div className="max-h-72 overflow-y-auto sm:max-h-none sm:overflow-visible"><CatalogueHierarchy activeKind={kind} activeGroup={group} activeItem={item}/></div><div className="mt-5"><TableOfContents containerId="product-information"/></div></aside>
   <article id="product-information" data-product-content className="order-1 min-w-0 sm:order-2 space-y-8">
    <header><h1 id="information-0" className="scroll-mt-24 text-3xl font-bold sm:text-4xl">{item.name}</h1><p className="mt-5 text-lg leading-relaxed text-muted">{item.description}</p></header>
    {sections.map((section,index)=><section key={section.title}>{index > 0 && <h2 id={`information-${index}`} className="scroll-mt-24 text-xl font-bold sm:text-2xl">{section.title}</h2>}{section.paragraphs.filter(paragraph => paragraph !== item.description).map((paragraph,i)=><p key={i} className="mt-4 leading-7 text-muted">{paragraph}</p>)}</section>)}
   </article>
  </section>
  <section id="request" className="scroll-mt-24 border-t border-line bg-oil-800"><div className="mx-auto max-w-3xl px-4 py-12"><h2 className="text-2xl font-bold">Enquire about {item.name.toLowerCase()}</h2><p className="mb-7 mt-4 leading-relaxed text-muted">Send your specification or service scope to Oillinko. Our team reviews your request and contacts you to clarify the next steps.</p><RfqForm key={typeUrl(group,item)} initialCategory={group.name} initialItem={item.name} initialKind={kind} sourcePage={typeUrl(group,item)}/></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </>;
}
