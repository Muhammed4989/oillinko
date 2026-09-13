import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import { catalogueRoot, catalogueRoutes, sectors } from "@/lib/catalogue";

export default function sitemap(): MetadataRoute.Sitemap {
 const staticPages=["","/about","/services","/how-it-works","/quality",catalogueRoot,"/industries","/suppliers","/blog","/rfq","/contact"].map(p=>({url:site.domain+p,changeFrequency:"monthly" as const,priority:p===""?1:0.8}));
 const cataloguePages=catalogueRoutes().map(r=>({url:site.domain+r.url,changeFrequency:"monthly" as const,priority:r.item?0.7:0.9}));
 const sectorPages=sectors.map(s=>({url:`${site.domain}/industries/${s.id}`,changeFrequency:"monthly" as const,priority:0.8}));
 const blogPages=blogPosts.map(p=>({url:`${site.domain}/blog/${p.slug}`,lastModified:new Date(p.date),changeFrequency:"monthly" as const,priority:0.7}));
 return [...staticPages,...cataloguePages,...sectorPages,...blogPages];
}
