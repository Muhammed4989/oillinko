import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, postUrl, postsInCategory } from "@/lib/blog";
import { blogCategories, categoryAncestors, categoryChildren, categoryUrl } from "@/lib/blog-taxonomy";
import { blogMetadata, postMetadata } from "@/lib/blog-metadata";
import { BlogBreadcrumb, blogBreadcrumbData, ArticleCards, CategoryCards } from "@/components/BlogNavigation";
import BlogCategoryGuide from "@/components/BlogCategoryGuide";
import { JsonLd } from "@/components/BlogChrome";

export const dynamicParams = false;
export function generateStaticParams() { return [...blogCategories.map(categoryUrl),...blogPosts.map(postUrl)].map(url=>({segments:url.split("/").slice(3)})); }
type Props = {params:Promise<{segments:string[]}>};
async function resolve({params}:Props) { const {segments}=await params; const url="/blog/category/"+segments.join("/"); return {category:blogCategories.find(c=>categoryUrl(c)===url),post:blogPosts.find(p=>postUrl(p)===url)}; }
export async function generateMetadata(props:Props) { const {post,category}=await resolve(props);if(post)return postMetadata(post);if(category)return blogMetadata(`${category.name} Guides`,category.description,categoryUrl(category));return {}; }
export default async function Page(props:Props) {
 const {post,category}=await resolve(props);
 if(post){const {default:Article}=await import(`@/content/blog/${post.slug}`);return <Article/>;}
 if(!category)notFound();
 const crumbs=[{name:"Blog",href:"/blog"},...categoryAncestors(category).map(c=>({name:c.name,href:categoryUrl(c)}))];
 const children=categoryChildren(category.slug),posts=postsInCategory(category.slug);
 return <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
   <BlogBreadcrumb items={crumbs}/><h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h1>
   <p data-category-intro="" className="mt-4 line-clamp-2 max-w-3xl text-lg text-muted">{category.intro}</p>
   <BlogCategoryGuide slug={category.slug}/>
   {children.length>0&&<section className="mt-10" aria-labelledby="subcategories"><h2 id="subcategories" className="text-2xl font-bold">Explore {category.name.toLowerCase()} topics</h2><CategoryCards categories={children}/></section>}
   <section className="mt-12" aria-labelledby="category-articles"><h2 id="category-articles" className="text-2xl font-bold">Articles in {category.name}</h2><ArticleCards posts={posts}/></section>
   <aside className="mt-12 rounded-xl border border-line bg-oil-800 p-6"><h2 className="text-xl font-semibold">Related equipment and service requirements</h2><ul className="mt-4 space-y-3">{category.catalogue.map(link=><li key={link.href}><Link href={link.href} className="text-accent underline underline-offset-4">{link.label}</Link></li>)}</ul><p className="mt-4 text-sm text-muted">Enquiries go to Oillinko for review and sourcing coordination. Product availability and service scope are confirmed for each requirement.</p></aside>
   <JsonLd data={blogBreadcrumbData(crumbs)}/>
 </div>;
}
