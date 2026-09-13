import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import CatalogueExplorer from "@/components/CatalogueExplorer";
import { readCatalogueFilters } from "@/lib/catalogue";
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
 const query = await searchParams;
 const filtered = Object.values(query).some(value => Array.isArray(value) ? value.some(Boolean) : !!value);
 return { title: "Oil & Gas Equipment & Services Catalogue", description: "Browse oil and gas equipment and services by category, sector and project need. Read product information and send your requirement to Oillinko.", alternates: { canonical: "/equipment" }, ...(filtered ? { robots: { index: false, follow: true } } : {}) };
}
export default async function EquipmentPage({ searchParams }: Props) {
 const filters = readCatalogueFilters(await searchParams);
 return <><PageHeader title="Equipment & Services Catalogue" subtitle="Choose a category, sector or requirement, then search. Explore product information and services across the oil and gas value chain."/><CatalogueExplorer filters={filters}/></>;
}
