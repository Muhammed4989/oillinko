import { blogCategories } from "@/lib/blog-taxonomy";
import { BlogCover, BlogPageHeader } from "./BlogChrome";
import { blogCover } from "@/lib/blog-cover";
import BlogCategoryGuide from "./BlogCategoryGuide";
import BlogHierarchy from "./BlogHierarchy";

export default function BlogListing() {
  const mainCategories = blogCategories.filter((category) => !category.parent);
  return (
    <>
      <BlogPageHeader crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} label="Oillinko Insights" title="Oil & Gas Equipment, Services & Procurement Blog" description="Practical guides for equipment buyers, engineers and traders. Explore specifications, field service scopes, quality evidence and the decisions behind a complete enquiry." updated={{ date: "2026-09-27", label: "27 September 2026" }} />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:grid-cols-[230px_minmax(0,1fr)] sm:py-14 lg:grid-cols-[280px_minmax(0,1fr)]">
        <BlogHierarchy containerId="blog-content" />
        <article id="blog-content" className="min-w-0">
          <BlogCover src={blogCover} alt="Oil and gas equipment, inspection and procurement" />
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
