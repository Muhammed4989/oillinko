import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { catalogue, sectors, typeUrl, type SectorId } from "@/lib/catalogue";
import { industryGuides } from "@/lib/industry-guides";
import { industryImages } from "@/lib/industry-images";

export default function IndustryGuide({ sector }: { sector: SectorId }) {
  const guide = industryGuides[sector];
  if (!guide) return null;
  const image = industryImages[sector];
  const sectorName = sectors.find(item => item.id === sector)?.name;
  const related = catalogue.flatMap(group => group.types
    .filter(item => guide.topicIds.includes(item.id))
    .map(item => ({ name: item.name, url: typeUrl(group, item) })));

  return <details className="mb-8 rounded-xl border border-line bg-white p-5 sm:p-7">
    <summary className="cursor-pointer text-lg font-semibold text-foreground">Read the {sectorName} procurement guide</summary>
    <article data-sector-guide={sector} className="mt-6 space-y-7">
      <h2 className="text-2xl font-bold">{guide.title}</h2>
      <figure>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <SiteImage src={image.src} alt={image.alt} fill sizes="(max-width: 1023px) calc(100vw - 88px), 752px" className="object-cover" />
        </div>
        <figcaption className="mt-2 text-xs text-muted">Illustrative industry scene.</figcaption>
      </figure>
      {guide.sections.map(section => <section key={section.title}>
        <h3 className="text-xl font-semibold">{section.title}</h3>
        {section.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 leading-7 text-muted">{paragraph}</p>)}
      </section>)}
      <nav aria-label="Related requirement guides" className="border-t border-line pt-5">
        <h3 className="font-semibold">Explore a specific requirement</h3>
        <ul className="mt-3 space-y-2">{related.map(item => <li key={item.url}><Link href={item.url} className="text-accent underline">{item.name}</Link></li>)}</ul>
      </nav>
    </article>
  </details>;
}
