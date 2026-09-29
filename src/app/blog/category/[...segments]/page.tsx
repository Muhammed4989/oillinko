import { notFound } from "next/navigation";
import { blogPosts, postUrl } from "@/lib/blog";
import { blogCategories, categoryAncestors, categoryUrl } from "@/lib/blog-taxonomy";
import { blogMetadata, postMetadata } from "@/lib/blog-metadata";
import { blogBreadcrumbData } from "@/components/BlogNavigation";
import BlogCategoryGuide from "@/components/BlogCategoryGuide";
import BlogHierarchy from "@/components/BlogHierarchy";
import { BlogBreadcrumbHeader, BlogCover, BlogPageHeader, JsonLd } from "@/components/BlogChrome";
import { categoryCover } from "@/lib/blog-cover";

export const dynamicParams = false;
export function generateStaticParams() { return [...blogCategories.map(categoryUrl),...blogPosts.map(postUrl)].map(url=>({segments:url.split("/").slice(3)})); }
type Props = {params:Promise<{segments:string[]}>};
async function resolve({params}:Props) { const {segments}=await params; const url="/blog/category/"+segments.join("/"); return {category:blogCategories.find(c=>categoryUrl(c)===url),post:blogPosts.find(p=>postUrl(p)===url)}; }
export async function generateMetadata(props:Props) { const {post,category}=await resolve(props);if(post)return postMetadata(post);if(category)return blogMetadata(`${category.name} Guides`,category.description,categoryUrl(category),categoryCover(category.slug));return {}; }
export default async function Page(props:Props) {
 const {post,category}=await resolve(props);
 if(post){const {default:Article}=await import(`@/content/blog/${post.slug}`);return <Article/>;}
 if(!category)notFound();
 const crumbs=[{name:"Blog",href:"/blog"},...categoryAncestors(category).map(c=>({name:c.name,href:categoryUrl(c)}))];
 return <>
   <BlogBreadcrumbHeader crumbs={crumbs} />
   <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:grid-cols-[230px_minmax(0,1fr)] sm:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
     <BlogHierarchy containerId="category-content"/>
     <article id="category-content" className="order-1 min-w-0 sm:order-2">
       <BlogPageHeader label={category.parent ? blogCategories.find(c => c.slug === category.parent)?.name ?? "Blog" : "Oillinko Insights"} title={category.name} description={category.description} updated={{date:"2026-09-27",label:"27 September 2026"}} />
       <BlogCover src={categoryCover(category.slug)} alt={category.name} />
       <p data-category-intro="" className="max-w-3xl text-lg leading-7 text-muted">{category.intro}</p>
       <BlogCategoryGuide slug={category.slug}/>
     </article>
   </div>
   <JsonLd data={blogBreadcrumbData(crumbs)}/>
 </>;
}
