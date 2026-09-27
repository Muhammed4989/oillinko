import type { Metadata } from "next";
import { site } from "./site";
import { postUrl, type BlogPost } from "./blog";
import { blogCover, postCover } from "./blog-cover";
export function blogMetadata(title: string, description: string, url: string, image = blogCover): Metadata {
 return {title,description,alternates:{canonical:url},openGraph:{type:"website",siteName:site.name,locale:"en_US",title,description,url,images:[{url:image,width:1600,height:900,alt:title}]},twitter:{card:"summary_large_image",title,description,images:[image]}};
}
export function postMetadata(post: BlogPost): Metadata {
 const image=postCover(post.slug);
 const base=blogMetadata(post.title,post.description,postUrl(post),image);
 return {...base,keywords:post.keywords,authors:[{name:site.name,url:site.domain}],openGraph:{...base.openGraph,type:"article",publishedTime:post.date,modifiedTime:post.dateModified,authors:[site.domain],images:[{url:image,alt:post.title}]},twitter:{...base.twitter,images:[image]}};
}
