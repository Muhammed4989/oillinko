import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/equipment";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/how-it-works",
    "/quality",
    "/equipment",
    "/industries",
    "/suppliers",
    "/blog",
    "/rfq",
    "/contact",
  ].map((p) => ({
    url: `${site.domain}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${site.domain}/equipment/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}
