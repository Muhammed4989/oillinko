import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { filterCatalogue, sectors } from "@/lib/catalogue";
export const metadata: Metadata={title:"Oil & Gas Industries — Equipment & Services",description:"Explore sourcing requirements across exploration, drilling, production, pipelines, refining, gas, offshore, power and water sectors.",alternates:{canonical:"/industries"}};
export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Explore by Industry"
        subtitle="Find equipment and services by the part of the oil and gas value chain you work in. A category can serve more than one sector."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 text-left">
        <div className="divide-y divide-line">
          {sectors.map((sector) => (
            <Link
              href={`/industries/${sector.id}`}
              key={sector.id}
              className="group block py-6 first:pt-0 last:pb-0"
            >
              <h2 className="text-xl font-semibold group-hover:text-accent">
                {sector.name}
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                {sector.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-accent">
                {filterCatalogue("", sector.id, "", "").length} relevant categories →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
