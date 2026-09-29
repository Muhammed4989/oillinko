import { site } from "@/lib/site";
import { categoryName, postUrl, type BlogPost } from "@/lib/blog";
import BlogHierarchy from "@/components/BlogHierarchy";
import { getBlogCategory, categoryAncestors, categoryUrl } from "@/lib/blog-taxonomy";
import { BlogBreadcrumb, blogBreadcrumbData } from "@/components/BlogNavigation";
import { postCover } from "@/lib/blog-cover";
import Image from "@/components/SiteImage";

function postCrumbs(post: BlogPost) { return [{name:"Blog",href:"/blog"},...categoryAncestors(getBlogCategory(post.category)!).map(c=>({name:c.name,href:categoryUrl(c)})),{name:post.title,href:postUrl(post)}]; }
export function breadcrumbJsonLd(post: BlogPost) { return blogBreadcrumbData(postCrumbs(post)); }

export function articleJsonLd(post: BlogPost, opts?: { dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${site.domain}${postCover(post.slug)}`,
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

export function BlogPageHeader({ crumbs, label, title, description, published, updated, readTime }: { crumbs: { name: string; href: string }[]; label: string; title: string; description: string; published?: { date: string; label: string }; updated?: { date: string; label: string }; readTime?: string }) {
  return (
    <section className="border-b border-line bg-oil-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <BlogBreadcrumb items={crumbs} />
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-muted">{description}</p>
        <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
          <span>By {site.name}</span>
          {published && <><span aria-hidden="true">&middot;</span><span>Published <time dateTime={published.date}>{published.label}</time></span></>}
          {updated && <><span aria-hidden="true">&middot;</span><span>Updated <time dateTime={updated.date}>{updated.label}</time></span></>}
          {readTime && <><span aria-hidden="true">&middot;</span><span>{readTime}</span></>}
        </p>
      </div>
    </section>
  );
}

export function BlogPostHeader({ post }: { post: BlogPost }) {
  const updatedLabel = new Date(`${post.dateModified}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return <BlogPageHeader crumbs={postCrumbs(post)} label={categoryName(post.category)} title={post.title} description={post.tagline || post.description} published={{ date: post.date, label: post.dateLabel }} updated={{ date: post.dateModified, label: updatedLabel }} readTime={post.readTime} />;
}

export function BlogCover({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={1600} height={900} priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 850px" className="mb-8 aspect-[16/9] w-full rounded-lg object-cover" />;
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

export function RelatedPosts({ post }: { post: BlogPost }) { void post; return null; }

export function Prose({ children, post }: { children: React.ReactNode; post: BlogPost }) {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-14 sm:grid-cols-[230px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
      <BlogHierarchy containerId="post-content" />
      <article id="post-content" className="min-w-0 max-w-3xl">
        <BlogCover src={postCover(post.slug)} alt={post.title} />
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
