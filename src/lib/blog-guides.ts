import fs from "node:fs";
import path from "node:path";
import { getPost, postUrl } from "./blog";
import { getBlogCategory, categoryUrl } from "./blog-taxonomy";

export type GuideSection = { heading: string; paragraphs: string[] };
export function categoryGuide(slug: string): GuideSection[] {
  if (!getBlogCategory(slug)) throw new Error(`Unknown blog category: ${slug}`);
  const text = fs.readFileSync(path.join(process.cwd(), "src/content/blog-categories", `${slug}.md`), "utf8");
  return text.trim().split(/^## /m).filter(Boolean).map(block => {
    const [heading, ...body] = block.trim().split("\n");
    return { heading: heading.trim(), paragraphs: body.join("\n").trim().split(/\n\s*\n/).map(p => p.replace(/\s+/g," ").trim()).filter(Boolean) };
  });
}
export function guideLink(href: string) {
  if (href.startsWith("post:")) { const post = getPost(href.slice(5)); if (!post) throw new Error(`Unpublished article: ${href}`); return postUrl(post); }
  if (href.startsWith("category:")) { const category = getBlogCategory(href.slice(9)); if (!category) throw new Error(`Unknown category: ${href}`); return categoryUrl(category); }
  return href;
}
export function guideWordCount(sections: GuideSection[]) {
  return sections.flatMap(s => s.paragraphs).join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").match(/\b[\w]+(?:['’-][\w]+)*\b/g)?.length ?? 0;
}
