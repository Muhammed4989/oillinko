import type { Metadata } from "next";
import { site } from "./site";
import { postUrl, type BlogPost } from "./blog";
export function blogMetadata(title: string, description: string, url: string): Metadata {
 return {title,description,alternates:{canonical:url},openGraph:{type:"website",siteName:site.name,locale:"en_US",title,description,url,images:[{url:"/images/refinery-hazy-unsplash.jpg",width:1600,height:1067,alt:"Oillinko oil and gas knowledge guides"}]},twitter:{card:"summary_large_image",title,description,images:["/images/refinery-hazy-unsplash.jpg"]}};
}
export function postMetadata(post: BlogPost): Metadata {
 const base=blogMetadata(post.title,post.description,postUrl(post));
 return {...base,keywords:post.keywords,authors:[{name:site.name,url:site.domain}],openGraph:{...base.openGraph,type:"article",publishedTime:post.date,modifiedTime:post.dateModified,authors:[site.domain],images:[{url:post.image,alt:post.title}]},twitter:{...base.twitter,images:[post.image]}};
}
