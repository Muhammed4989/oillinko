"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogPosts, postUrl, postsInCategory } from "@/lib/blog";
import { blogCategories, categoryChildren, categoryUrl } from "@/lib/blog-taxonomy";
import TableOfContents from "@/components/TableOfContents";

export default function BlogHierarchy({ containerId }: { containerId: string }) {
  const pathname = usePathname();
  const currentPost = blogPosts.find((post) => postUrl(post) === pathname);
  const currentCategory = blogCategories.find((category) => categoryUrl(category) === pathname);
  const activeSlug = currentPost?.category ?? currentCategory?.slug;
  const mainCategories = blogCategories.filter((category) => !category.parent);

  return (
    <aside className="order-2 min-w-0 sm:order-1 sm:sticky sm:top-6 sm:max-h-[calc(100vh-3rem)] sm:overflow-y-auto">
      <nav aria-label="Blog hierarchy" className="max-h-72 overflow-y-auto rounded-lg border border-line bg-white sm:max-h-none sm:overflow-visible">
        <Link href="/blog" aria-current={pathname === "/blog" ? "page" : undefined} className="block border-b border-line px-4 py-4 font-bold">
          Blog
        </Link>
        <div className="divide-y divide-line">
          {mainCategories.map((main) => {
            const children = categoryChildren(main.slug);
            const mainActive = activeSlug === main.slug || children.some((child) => child.slug === activeSlug);
            return (
              <details key={`${pathname}-${main.slug}`} open={mainActive} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-3 text-sm font-semibold marker:content-none">
                  <Link href={categoryUrl(main)} aria-current={currentCategory?.slug === main.slug ? "page" : undefined} className={currentCategory?.slug === main.slug ? "text-accent" : "hover:text-accent"}>{main.name}</Link>
                  <span aria-hidden="true" className="text-muted group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-muted group-open:inline">-</span>
                </summary>
                <div className="border-t border-line py-1">
                  {children.map((child) => {
                    const childActive = activeSlug === child.slug;
                    return (
                      <details key={`${pathname}-${child.slug}`} open={childActive} className="group/category">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-2 pl-6 text-sm marker:content-none">
                          <Link href={categoryUrl(child)} aria-current={currentCategory?.slug === child.slug ? "page" : undefined} className={currentCategory?.slug === child.slug ? "font-semibold text-accent" : "text-muted hover:text-accent"}>{child.name}</Link>
                          <span aria-hidden="true" className="text-muted group-open/category:hidden">+</span>
                          <span aria-hidden="true" className="hidden text-muted group-open/category:inline">-</span>
                        </summary>
                        <ul className="ml-6 border-l border-line py-1">
                          {postsInCategory(child.slug).map((post) => (
                            <li key={post.slug}>
                              <Link href={postUrl(post)} aria-current={currentPost?.slug === post.slug ? "page" : undefined} className={`block px-4 py-2 text-sm leading-5 ${currentPost?.slug === post.slug ? "border-l-4 border-accent bg-oil-800 font-semibold" : "text-muted hover:bg-oil-800 hover:text-accent"}`}>{post.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                  {postsInCategory(main.slug).filter((post) => post.category === main.slug).map((post) => (
                    <Link key={post.slug} href={postUrl(post)} aria-current={currentPost?.slug === post.slug ? "page" : undefined} className={`block px-6 py-2 text-sm leading-5 ${currentPost?.slug === post.slug ? "bg-oil-800 font-semibold" : "text-muted hover:text-accent"}`}>{post.title}</Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </nav>
      <div className="mt-5"><TableOfContents containerId={containerId} variant="sidebar" /></div>
    </aside>
  );
}
