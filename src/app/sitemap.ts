import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts, postUrl } from "@/lib/blog";
import { blogCategories, categoryUrl } from "@/lib/blog-taxonomy";
import { catalogueRoot, catalogueRoutes, sectors } from "@/lib/catalogue";

export default function sitemap(): MetadataRoute.Sitemap {
 const staticPages=["","/about","/services","/how-it-works","/quality",catalogueRoot,"/oil-and-gas/companies","/industries","/suppliers","/blog","/rfq","/contact","/image-credits"].map(p=>({url:site.domain+p,changeFrequency:"monthly" as const,priority:p===""?1:p==="/image-credits"?0.3:0.8}));
 const cataloguePages=catalogueRoutes().map(r=>({url:site.domain+r.url,changeFrequency:"monthly" as const,priority:r.item?0.7:0.9}));
 const sectorPages=sectors.map(s=>({url:`${site.domain}/industries/${s.id}`,changeFrequency:"monthly" as const,priority:0.8}));
 const blogPages=blogPosts.map(p=>({url:site.domain+postUrl(p),lastModified:new Date(p.dateModified),changeFrequency:"monthly" as const,priority:0.7}));
 const blogCategoryPages=blogCategories.map(c=>({url:site.domain+categoryUrl(c),changeFrequency:"monthly" as const,priority:0.8}));
 return [...staticPages,...cataloguePages,...sectorPages,...blogPages,...blogCategoryPages];
}
