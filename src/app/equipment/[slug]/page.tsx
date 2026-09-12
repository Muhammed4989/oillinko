import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/equipment";
import { catalogue, getGroup, requestUrl, sectors } from "@/lib/catalogue";
import { site } from "@/lib/site";

export const dynamicParams=false;
export function generateStaticParams(){return catalogue.map(g=>({slug:g.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const group=getGroup(slug);if(!group)return {};return {title:`${group.name} — Sourcing & RFQ`,description:group.summary,alternates:{canonical:`/equipment/${slug}`}};}
const guides:Record<string,string>={"pumps-rotating-equipment":"api-610-pump-types-and-classes-explained","valves-actuation":"valves-and-actuation-explained","flanges-fittings-bolting":"flanges-gaskets-and-bolting","gaskets-sealing":"gaskets-and-sealing-products-explained","pressure-vessels-tanks":"pressure-vessels-tanks-and-heat-exchangers-explained","wellhead-production-equipment":"wellhead-and-christmas-tree-equipment-explained","pipeline-intervention-equipment":"hot-tapping-and-line-stopping"};
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const group=getGroup(slug);if(!group)notFound();const legacy=categories.find(c=>c.slug===slug);
 const related=catalogue.filter(g=>g.slug!==slug&&g.sectors.some(s=>group.sectors.includes(s))).slice(0,4);
 const structured=[{"@context":"https://schema.org","@type":"Service",name:`${group.name} sourcing`,description:group.summary,provider:{"@type":"Organization",name:site.name,url:site.domain},url:`${site.domain}/equipment/${slug}`},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:site.domain},{"@type":"ListItem",position:2,name:"Catalogue",item:`${site.domain}/equipment`},{"@type":"ListItem",position:3,name:group.name,item:`${site.domain}/equipment/${slug}`}]}];
 return <>
  <section className="border-b border-line bg-oil-800"><div className="mx-auto max-w-6xl px-4 py-12">
   <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-muted"><Link href="/">Home</Link><span>/</span><Link href="/equipment">Catalogue</Link><span>/</span><span>{group.name}</span></nav>
   <p className="text-sm font-semibold uppercase tracking-wide text-accent">{group.kind} enquiries</p><h1 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">{group.name}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{group.summary}</p>
   <div className="mt-6 flex flex-wrap gap-2">{group.sectors.map(id=><Link key={id} className="rounded-full border border-line bg-white px-3 py-2 text-sm" href={`/industries/${id}`}>{sectors.find(s=>s.id===id)?.name}</Link>)}</div>
   <Link href={requestUrl(slug)} className="mt-7 inline-block rounded bg-accent px-6 py-3 font-semibold text-black">Send your requirement to Oillinko</Link>
  </div></section>
  <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_280px]">
   <div className="min-w-0"><h2 className="text-2xl font-bold">Equipment types & enquiry checklists</h2><p className="mt-3 text-muted">Select the closest requirement below. The checklist helps us request a comparable quotation; attach your datasheet or drawing when available.</p>
    <nav aria-label="On this page" className="my-6 flex flex-wrap gap-2">{group.types.map(t=><a key={t.id} href={`#${t.id}`} className="rounded border border-line px-3 py-2 text-sm text-accent">{t.name}</a>)}</nav>
    <div className="space-y-6">{group.types.map(t=><article id={t.id} key={t.id} className="scroll-mt-24 rounded-xl border border-line bg-white p-6"><h3 className="text-xl font-semibold">{t.name}</h3><p className="mt-3 leading-relaxed text-muted">{t.description}</p><h4 className="mt-5 font-semibold">Include in your request</h4><ul className="mt-3 grid list-inside list-disc gap-2 text-muted sm:grid-cols-2">{t.requirements.map(r=><li key={r}>{r}</li>)}</ul><Link className="mt-6 inline-block rounded border border-line px-4 py-3 font-semibold text-accent hover:border-accent" href={requestUrl(slug,t.id)}>Request {t.name.toLowerCase()} →</Link></article>)}</div>
    {legacy&&legacy.standards.length>1&&<div className="mt-8 rounded-xl border border-line p-6"><h2 className="text-xl font-bold">Specification references</h2><p className="mt-3 text-muted">These references may apply to equipment within this family. State the exact standard and edition required for your item; applicability and supplier documentation are reviewed for each inquiry.</p><div className="mt-4 flex flex-wrap gap-2">{legacy.standards.map(s=><span key={s} className="rounded border border-line px-3 py-2 text-sm">{s}</span>)}</div></div>}
   </div>
   <aside className="space-y-5"><div className="rounded-xl border border-line bg-oil-800 p-6"><h2 className="text-lg font-bold">Your request stays with Oillinko</h2><p className="mt-3 text-sm leading-relaxed text-muted">Our team receives and reviews your inquiry. We clarify missing details and coordinate sourcing manually.</p><p className="mt-3 text-sm leading-relaxed text-muted">Catalogue coverage is a guide to enquiries we can review. Stock, availability, lead time and any required approvals are confirmed in the quotation.</p></div>
    <div className="rounded-xl border border-line bg-white p-6"><h2 className="text-lg font-bold">Country of origin</h2><p className="mt-3 text-sm leading-relaxed text-muted">Specify the manufacturing country you require, any excluded origins and whether alternatives are acceptable. Brand location and shipping country are not proof of manufacturing origin. Request origin documentation if your project requires it.</p></div>
    <div className="rounded-xl border border-line bg-white p-6"><h2 className="text-lg font-bold">Complete BOQ or mixed enquiry?</h2><p className="mt-3 text-sm text-muted">Send all items in one request with quantities, units, delivery location and required date.</p><Link href="/rfq" className="mt-4 inline-block font-semibold text-accent">Upload your BOQ →</Link></div>
    {guides[slug]&&<Link href={`/blog/${guides[slug]}`} className="block rounded-xl border border-line p-6 font-semibold text-accent">Read the related equipment guide →</Link>}
   </aside>
  </section>
  <section className="mx-auto max-w-6xl px-4 pb-14"><h2 className="text-2xl font-bold">Related categories</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{related.map(g=><Link key={g.slug} href={`/equipment/${g.slug}`} className="rounded-lg border border-line bg-white p-5 font-semibold hover:text-accent">{g.name} →</Link>)}</div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}} />
 </>;
}
