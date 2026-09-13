import Link from "next/link";
import { categoryGuide, guideLink } from "@/lib/blog-guides";

export function GuideParagraph({ text }: { text: string }) {
  return <p className="mt-4 text-base leading-7 text-muted" data-guide-paragraph="">{text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!match) return part;
    const href = guideLink(match[2]);
    return href.startsWith("/") ? <Link key={i} className="text-accent underline underline-offset-4" href={href}>{match[1]}</Link> : <a key={i} className="text-accent underline underline-offset-4" href={href}>{match[1]}</a>;
  })}</p>;
}
export default function BlogCategoryGuide({ slug }: { slug: string }) {
  const sections = categoryGuide(slug);
  return <details className="blog-guide mt-4 rounded-xl border border-line bg-white" data-category-guide={slug}>
    <summary className="cursor-pointer px-5 py-3 font-semibold text-accent"><span className="read-more">Read more</span><span className="read-less">Read less</span><span className="sr-only"> about this category</span></summary>
    <div className="max-w-4xl px-5 pb-7 sm:px-8">{sections.map((section,i)=><section key={section.heading} className="mt-8" aria-labelledby={`guide-section-${i}`}>
      <h2 id={`guide-section-${i}`} className="text-xl font-semibold">{section.heading}</h2>
      {section.paragraphs.map((text,j)=><GuideParagraph key={j} text={text}/>)}
    </section>)}</div>
  </details>;
}
