import { notFound } from "next/navigation";
import { catalogueRoot, catalogueRoutes } from "@/lib/catalogue";
import CatalogueLanding, { landingMetadata, type CatalogueQuery } from "@/components/CatalogueLanding";
import CatalogueProduct, { productMetadata } from "@/components/CatalogueProduct";
type Props={params:Promise<{path:string[]}>;searchParams:Promise<CatalogueQuery>};
const routes=catalogueRoutes();
export const dynamicParams=false;
export function generateStaticParams() { return routes.map(r=>({path:r.url.slice(catalogueRoot.length+1).split('/')})); }
async function resolve(params:Props['params']) { const {path}=await params;const route=routes.find(r=>r.url===`${catalogueRoot}/${path.join('/')}`);if(!route)notFound();return route; }
export async function generateMetadata({params,searchParams}:Props) {
 const route=await resolve(params);
 return route.item&&route.group?productMetadata(route.group,route.item):landingMetadata(await searchParams,route);
}
export default async function Page({params,searchParams}:Props) {
 const route=await resolve(params);
 if(route.item&&route.group)return <CatalogueProduct group={route.group} item={route.item}/>;
 return <CatalogueLanding route={route} query={await searchParams}/>;
}
