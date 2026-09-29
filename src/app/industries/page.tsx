import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { PageHeader } from "@/components/ui";
import { filterCatalogue, sectors } from "@/lib/catalogue";
import { industryImages } from "@/lib/industry-images";
export const metadata: Metadata={title:"Oil & Gas Industries — Equipment & Services",description:"Explore sourcing requirements across exploration, drilling, production, pipelines, refining, gas, offshore, power and water sectors.",alternates:{canonical:"/industries"}};
export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Explore by Industry"
        subtitle="Find equipment and services by the part of the oil and gas value chain you work in. A category can serve more than one sector."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 text-left">
        <div className="space-y-7">
          {sectors.map((sector, index) => (
            <Link
              href={`/industries/${sector.id}`}
              key={sector.id}
              className="group grid overflow-hidden rounded-2xl border border-line bg-oil-900 shadow-sm transition-shadow hover:shadow-md md:grid-cols-[40%_1fr]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-oil-800 md:aspect-auto md:min-h-72">
                <SiteImage
                  src={industryImages[sector.id].src}
                  alt={industryImages[sector.id].alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1152px) 40vw, 448px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex items-center gap-3" aria-hidden="true">
                  <span className="text-sm font-semibold tabular-nums text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-accent" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-3xl">
                  {sector.name}
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted">
                  {sector.description}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="font-semibold text-accent">
                    Explore sector <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-muted">
                    {filterCatalogue("", sector.id, "", "").length} relevant categories
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
