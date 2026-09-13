import Link from "next/link";
import Image from "next/image";
import { postUrl, postsInCategory, type BlogPost } from "@/lib/blog";
import { categoryUrl, type BlogCategory } from "@/lib/blog-taxonomy";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };
export function BlogBreadcrumb({ items }: { items: Crumb[] }) {
  return <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted"><ol className="flex flex-wrap gap-x-2 gap-y-2">{items.map((item,i)=><li key={item.href} className="inline-flex max-w-full items-baseline gap-2 break-words">{i>0&&<span aria-hidden="true">/</span>}{i===items.length-1?<span aria-current="page">{item.name}</span>:<Link href={item.href} className="text-accent underline underline-offset-4">{item.name}</Link>}</li>)}</ol></nav>;
}
export function blogBreadcrumbData(items: Crumb[]) { return {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:site.domain+c.href}))}; }
export function CategoryCards({ categories }: { categories: BlogCategory[] }) {
  return <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(c=><Link key={c.slug} href={categoryUrl(c)} className="rounded-xl border border-line bg-white p-5 hover:border-accent"><h3 className="font-semibold">{c.name}</h3><p className="mt-2 text-sm leading-6 text-muted">{c.description}</p><p className="mt-4 text-sm font-medium text-accent">{postsInCategory(c.slug).length} articles · Explore guide →</p></Link>)}</div>;
}
export function ArticleCards({ posts }: { posts: BlogPost[] }) {
  if(!posts.length)return <p className="mt-5 rounded-xl border border-line bg-white p-6 text-muted">This category guide is available now. Additional articles will be published here as they are ready.</p>;
  return <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map(post=><Link data-post-card={post.slug} key={post.slug} href={postUrl(post)} className="overflow-hidden rounded-xl border border-line bg-white hover:border-accent">
    <div className="relative aspect-[16/7]"><Image src={post.image} alt="" fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover"/></div>
    <div className="p-5"><p className="text-xs text-muted"><time dateTime={post.date}>{post.dateLabel}</time> · {post.readTime}</p><h3 className="mt-3 text-lg font-semibold">{post.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{post.short}</p><p className="mt-4 text-sm font-medium text-accent">Read article →</p></div>
  </Link>)}</div>;
}
