import BlogListing from "@/components/BlogListing";
import { blogMetadata } from "@/lib/blog-metadata";
type Props={searchParams:Promise<Record<string,string|string[]|undefined>>};
export async function generateMetadata({searchParams}:Props) {
 const query=await searchParams;
 return {...blogMetadata("Oil & Gas Equipment and Procurement Blog","Explore oil and gas equipment guides, service scopes, inspection, material certificates and procurement advice for buyers and engineers.","/blog"),...(Object.keys(query).length?{robots:{index:false,follow:true,googleBot:{index:false,follow:true}}}:{})};
}
export default async function BlogPage({searchParams}:Props) { const query=await searchParams;return <BlogListing q={typeof query.q==="string"?query.q.trim().slice(0,160):""} category={typeof query.category==="string"?query.category.slice(0,100):""}/>; }
