import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArticleCards } from "./BlogNavigation";
import { blogCategories } from "@/lib/blog-taxonomy";
import { BlogBreadcrumbHeader, BlogCover, BlogPageHeader } from "./BlogChrome";
import { blogCover } from "@/lib/blog-cover";
import BlogCategoryGuide from "./BlogCategoryGuide";
import BlogHierarchy from "./BlogHierarchy";

export default function BlogListing({ q = "", category = "" }: { q?: string; category?: string }) {
  const mains = blogCategories.filter(c => !c.parent);
  const posts = [...blogPosts].filter(p => (!category || p.category === category || p.mainCategory === category) && (!q || [p.title, p.description, p.keywords].join(" ").toLowerCase().includes(q.toLowerCase()))).sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  const mainCategories = blogCategories.filter((category) => !category.parent);
  return (
    <>
      <BlogBreadcrumbHeader crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:grid-cols-[230px_minmax(0,1fr)] sm:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
        <BlogHierarchy containerId="blog-content" />
        <article id="blog-content" className="order-1 min-w-0 sm:order-2">
          <BlogPageHeader label="Oillinko Insights" title="Oil & Gas Equipment, Services & Procurement Blog" description="Practical guides for equipment buyers, engineers and traders. Explore specifications, field service scopes, quality evidence and the decisions behind a complete enquiry." updated={{ date: "2026-09-27", label: "27 September 2026" }} />
          <BlogCover src={blogCover} alt="Oil and gas equipment, inspection and procurement" />
 <section className="mt-12" aria-labelledby="all-articles"><h2 id="all-articles" className="text-2xl font-bold">Published articles</h2>
 <form method="get" action="/blog#all-articles" aria-label="Search blog articles" className="mt-5 flex flex-wrap items-end gap-4 rounded-xl border border-line bg-white p-5">
 <label className="min-w-0 flex-1 basis-56 text-sm font-medium">Search articles<input type="search" name="q" defaultValue={q} maxLength={160} placeholder="Pump curves, material certificates…" className="mt-2 block w-full rounded border border-line bg-background p-3"/></label>
 <label className="min-w-0 flex-1 basis-56 text-sm font-medium">Topic<select aria-label="Topic" name="category" defaultValue={category} className="mt-2 block w-full rounded border border-line bg-background p-3"><option value="">All topics</option>{mains.map(main=><optgroup key={main.slug} label={main.name}><option value={main.slug}>All {main.name}</option>{blogCategories.filter(c=>c.parent===main.slug).map(c=><option key={c.slug} value={c.slug}>{c.name}</option>)}</optgroup>)}</select></label>
 <button type="submit" className="rounded bg-accent px-6 py-3 font-semibold text-black">Search</button>{(q||category)&&<Link href="/blog#all-articles" className="px-2 py-3 text-accent underline">Clear filters</Link>}
 </form><p className="mt-5 text-sm text-muted">{posts.length} published {posts.length===1?"article":"articles"}{(q||category)?" match your search":" in the knowledge library"}.</p>
 {posts.length?<ArticleCards posts={posts}/>:<p className="mt-6 rounded-xl border border-line bg-white p-6 text-muted">No published articles match these selections. Explore the category guides above or clear your filters.</p>}
 </section>

          {mainCategories.map((category) => (
            <section key={category.slug} className="mt-12 border-t border-line pt-8">
              <h2 id={`topic-${category.slug}`} className="scroll-mt-24 text-2xl font-bold">{category.name}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-muted">{category.description}</p>
              <BlogCategoryGuide slug={category.slug} />
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
