import Link from "next/link";
import { blogCategories } from "@/lib/blog-taxonomy";
import { blogPosts } from "@/lib/blog";
import { ArticleCards, BlogBreadcrumb, CategoryCards } from "./BlogNavigation";
export default function BlogListing({q="",category=""}:{q?:string;category?:string}) {
 const mains=blogCategories.filter(c=>!c.parent);
 const posts=[...blogPosts].filter(p=>(!category||p.category===category||p.mainCategory===category)&&(!q||[p.title,p.description,p.keywords].join(" ").toLowerCase().includes(q.toLowerCase()))).sort((a,b)=>b.date.localeCompare(a.date)||a.slug.localeCompare(b.slug));
 return <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
 <BlogBreadcrumb items={[{name:"Home",href:"/"},{name:"Blog",href:"/blog"}]}/>
 <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">Oil &amp; Gas Equipment, Services &amp; Procurement Blog</h1>
 <p className="mt-5 max-w-3xl text-lg leading-7 text-muted">Practical guides for equipment buyers, engineers and traders. Explore specifications, field service scopes, quality evidence and the decisions behind a complete enquiry.</p>
 <section className="mt-10" aria-labelledby="blog-topics"><h2 id="blog-topics" className="text-2xl font-bold">Explore by topic</h2><CategoryCards categories={mains}/></section>
 <section className="mt-12" aria-labelledby="all-articles"><h2 id="all-articles" className="text-2xl font-bold">Published articles</h2>
 <form method="get" action="/blog#all-articles" aria-label="Search blog articles" className="mt-5 flex flex-wrap items-end gap-4 rounded-xl border border-line bg-white p-5">
 <label className="min-w-0 flex-1 basis-56 text-sm font-medium">Search articles<input type="search" name="q" defaultValue={q} maxLength={160} placeholder="Pump curves, material certificates…" className="mt-2 block w-full rounded border border-line bg-background p-3"/></label>
 <label className="min-w-0 flex-1 basis-56 text-sm font-medium">Topic<select aria-label="Topic" name="category" defaultValue={category} className="mt-2 block w-full rounded border border-line bg-background p-3"><option value="">All topics</option>{mains.map(main=><optgroup key={main.slug} label={main.name}><option value={main.slug}>All {main.name}</option>{blogCategories.filter(c=>c.parent===main.slug).map(c=><option key={c.slug} value={c.slug}>{c.name}</option>)}</optgroup>)}</select></label>
 <button type="submit" className="rounded bg-accent px-6 py-3 font-semibold text-black">Search</button>{(q||category)&&<Link href="/blog#all-articles" className="px-2 py-3 text-accent underline">Clear filters</Link>}
 </form><p className="mt-5 text-sm text-muted">{posts.length} published {posts.length===1?"article":"articles"}{(q||category)?" match your search":" in the knowledge library"}.</p>
 {posts.length?<ArticleCards posts={posts}/>:<p className="mt-6 rounded-xl border border-line bg-white p-6 text-muted">No published articles match these selections. Explore the category guides above or clear your filters.</p>}
 </section>
 <aside className="mt-12 rounded-xl border border-line bg-oil-800 p-6"><h2 className="text-xl font-semibold">Turn your research into a clear requirement</h2><p className="mt-3 max-w-3xl leading-7 text-muted">Use the <Link href="/oil-and-gas" className="text-accent underline">equipment and services catalogue</Link> to describe your requirement. Your enquiry goes to Oillinko for review and sourcing coordination.</p><Link href="/rfq" className="mt-5 inline-block rounded bg-accent px-6 py-3 font-semibold text-black">Discuss your requirement</Link></aside>
 </div>;
}
