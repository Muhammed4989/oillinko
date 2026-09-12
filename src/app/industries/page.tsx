import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { catalogue, sectors } from "@/lib/catalogue";
export const metadata: Metadata={title:"Oil & Gas Industries — Equipment & Services",description:"Explore sourcing requirements across exploration, drilling, production, pipelines, refining, gas, offshore, power and water sectors.",alternates:{canonical:"/industries"}};
export default function IndustriesPage(){return <><PageHeader title="Explore by Industry" subtitle="Find equipment and services by the part of the oil and gas value chain you work in. A category can serve more than one sector."/><section className="mx-auto max-w-6xl px-4 py-12"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{sectors.map(s=><Link href={`/industries/${s.id}`} key={s.id} className="rounded-xl border border-line bg-white p-6 hover:border-accent"><h2 className="text-xl font-semibold">{s.name}</h2><p className="mt-3 leading-relaxed text-muted">{s.description}</p><p className="mt-5 text-sm font-semibold text-accent">{catalogue.filter(g=>g.sectors.includes(s.id)).length} relevant categories →</p></Link>)}</div></section></>;}
