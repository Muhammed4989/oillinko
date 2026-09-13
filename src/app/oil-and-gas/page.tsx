import CatalogueLanding, { landingMetadata, type CatalogueQuery } from "@/components/CatalogueLanding";
type Props={searchParams:Promise<CatalogueQuery>};
export async function generateMetadata({searchParams}:Props) { return landingMetadata(await searchParams); }
export default async function Page({searchParams}:Props) { return <CatalogueLanding query={await searchParams}/>; }
