import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { categoryName, getRelatedPosts, postUrl, type BlogPost } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";
import { getBlogCategory, categoryAncestors, categoryUrl } from "@/lib/blog-taxonomy";
import { BlogBreadcrumb, blogBreadcrumbData } from "@/components/BlogNavigation";

function postCrumbs(post: BlogPost) { return [{name:"Blog",href:"/blog"},...categoryAncestors(getBlogCategory(post.category)!).map(c=>({name:c.name,href:categoryUrl(c)})),{name:post.title,href:postUrl(post)}]; }
export function breadcrumbJsonLd(post: BlogPost) { return blogBreadcrumbData(postCrumbs(post)); }

export function articleJsonLd(post: BlogPost, opts?: { dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${site.domain}${post.image}`,
    author: { "@type": "Organization", name: site.legalName, url: site.domain },
    publisher: { "@type": "Organization", name: site.legalName, url: site.domain },
    datePublished: post.date,
    dateModified: opts?.dateModified ?? post.dateModified,
    mainEntityOfPage: `${site.domain}${postUrl(post)}`,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g,"\\u003c") }}
        />
      ))}
    </>
  );
}

export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <section className="border-b border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <BlogBreadcrumb items={postCrumbs(post)} />
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          {categoryName(post.category)}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{post.tagline}</p>
        <p className="mt-3 text-sm text-muted">
          By {site.name} &middot; Published <time dateTime={post.date}>{post.dateLabel}</time> &middot; Updated <time dateTime={post.dateModified}>{post.dateModified}</time> &middot; {post.readTime}
        </p>
      </div>
    </section>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold">Frequently asked questions</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-lg border border-line bg-oil-800 p-5 open:pb-5"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <svg
                  className="shrink-0 text-accent transition-transform group-open:rotate-45"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function RelatedPosts({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post);
  const category = getBlogCategory(post.category)!;
  return (
    <section className="border-t border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold">Related reading</h2>
        <p className="mt-4 text-sm leading-7 text-muted">Continue with the <Link className="text-accent underline" href={categoryUrl(category)}>{category.name.toLowerCase()} guide</Link>, or explore {category.catalogue.map((link,i)=><span key={link.href}>{i>0?" and ":""}<Link className="text-accent underline" href={link.href}>{link.label.toLowerCase()}</Link></span>)}.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={postUrl(r)}
              className="group overflow-hidden rounded-lg border border-line bg-oil-900 transition-colors hover:border-accent"
            >
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oil-900/80 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted">{categoryName(r.category)}</p>
                <h3 className="mt-1.5 text-sm font-semibold transition-colors group-hover:text-accent">
                  {r.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-12">
      <TableOfContents variant="sidebar" />
      <article id="post-content" className="min-w-0 max-w-3xl lg:col-start-2 lg:row-start-1">
        <TableOfContents variant="inline" />
        {children}
      </article>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
          <svg
            className="mt-0.5 shrink-0"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}
