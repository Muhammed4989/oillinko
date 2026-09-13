import { permanentRedirect } from "next/navigation";
import { catalogueSearchUrl, readCatalogueFilters } from "@/lib/catalogue";
import type { CatalogueQuery } from "@/components/CatalogueLanding";
export default async function LegacyCatalogue({searchParams}:{searchParams:Promise<CatalogueQuery>}) {
 const filters=readCatalogueFilters(await searchParams);
 const selected=filters.category||filters.sector||filters.kind||filters.search||filters.application;
 permanentRedirect(`https://oillinko.com${catalogueSearchUrl(selected?filters:{...filters,kind:"Equipment"})}`);
}
