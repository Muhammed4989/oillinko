import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("spiral-wound-gasket-identification-rfq")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  standard: "https://www.asme.org/codes-standards/find-codes-standards/b16-20-metallic-gaskets-pipe-flanges",
  manual: "https://www.garlock.com/userfiles/docs/manuals/tm011-garlock-metal-gasket-tech-manual-gmg-1-1-2019en.pdf",
  flange: "https://legacy.garlock.com/sites/default/files/documents/en/Know%20Your%20Flange%20Type%20when%20using%20Spiral%20Wound%20Gaskets%20-%20TECHNICAL%20BULLETIN.pdf",
};
const faqs = [
  {
    q: "Is a spiral wound gasket identified by size and class alone?",
    a: "No. Confirm the flange standard and facing, gasket construction, winding and filler, inner and outer ring materials, and applicable dimensions or drawing. The flange type and bore can also affect the suitability of the selected gasket.",
  },
  {
    q: "Does 316L describe every metal component in the gasket?",
    a: "Not necessarily. A description may refer only to the winding. Specify the winding, inner ring and outer ring separately, and ask the supplier to identify each component in the offered construction.",
  },
  {
    q: "Can I order a replacement from the gasket color?",
    a: "Use color as a supporting identification cue, then check the manufacturer's current marking guide, permanent markings and purchase records. A photograph or color alone does not establish the complete construction or suitability for the service.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        Spiral wound gasket identification starts with a practical problem: a
        stores description such as &ldquo;4-inch, Class 300, stainless steel and
        graphite&rdquo; can leave several purchasing decisions unresolved.
        Which metal is the winding? Is there an inner ring, and what is it made
        from? Which flange arrangement must the gasket fit? Two offers can repeat
        that short description while proposing different constructions. A buyer
        needs to resolve those differences before treating the prices as comparable.
      </p>
      <p className={paragraph}>
        This guide explains how to turn available markings and engineering records
        into an identifiable replacement requirement. It concerns static spiral
        wound gaskets, not pump mechanical seals or machined ring-joint gaskets.
        Start with the approved joint specification and use the old item as
        supporting evidence. An unidentified gasket found in stores is not, by
        itself, proof of the construction required by the installed equipment.
      </p>

      <figure className="mt-8">
        <Image src={post.image} width={1200} height={630}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-xl border border-line"
          alt="A schematic gasket separates the outer ring, winding and filler, and inner ring into four material fields for an enquiry." />
        <figcaption className="mt-3 text-sm text-muted">Example with both rings. The illustration is not to scale; its colors are explanatory, not material identification codes.</figcaption>
      </figure>

      <h2 id="four-material-fields" className={heading}>Separate four material fields in the enquiry</h2>
      <p className={paragraph}>
        A spiral wound sealing element combines a metal winding with a softer
        filler. Depending on the specified design, it can also have an outer
        centering ring and an inner ring. These are distinct components, not
        interchangeable names for one metal part. Garlock&apos;s <a className={link} href={sources.manual} target="_blank" rel="noopener noreferrer">2019 metallic gasket manual, pages 5 and 9</a>{" "}
        illustrates the construction and distinguishes winding, filler and ring
        information when ordering. Its product descriptions are manufacturer
        references, not a declaration that every gasket has the same arrangement.
      </p>
      <p className={paragraph}>
        Give each component its own field in the purchase description. For example,
        &ldquo;316L winding, graphite filler, inner ring material to be confirmed,
        outer ring material to be confirmed&rdquo; exposes the missing decisions.
        It is more useful than silently extending the winding grade to both rings.
        Ask the supplier to return a fully populated construction description and
        flag deviations against the project requirement. Do not approve a blank
        field by assuming that a familiar catalogue style supplies the answer.
      </p>

      <h2 id="markings-and-colors" className={heading}>Use markings to identify, then verify the record</h2>
      <p className={paragraph}>
        Obtain readable photographs of the complete gasket, its permanent
        markings and the package label. Record the manufacturer, visible size and
        class designation, material abbreviations, product reference and any batch
        information exactly as found. Keep an uncertain character marked as
        uncertain; a guessed letter in an alloy or part designation can send the
        enquiry toward a different item. If the markings conflict with the stock
        record, ask for technical clarification before choosing either as authoritative.
      </p>
      <p className={paragraph}>
        The same Garlock manual shows guide-ring edge colors and stripes for
        material identification on page 24. Such markings are helpful cues, but
        a colored ring should not replace the complete product record. Paint
        condition, lighting and an incomplete photograph can make an apparent
        match unreliable. Ask the proposed manufacturer to interpret its markings
        using the applicable current guide. Confirm which component each material
        abbreviation describes, and retain the written clarification with the
        quotation rather than relying on a verbal identification.
      </p>

      <h2 id="flange-standard-and-bore" className={heading}>Identify the flange standard, facing and bore</h2>
      <p className={paragraph}>
        <a className={link} href={sources.standard} target="_blank" rel="noopener noreferrer">ASME B16.20-2023</a>{" "}covers
        materials, dimensions, tolerances and markings for specified metallic
        gasket types. Its reference flange standards include ASME B16.5 and
        B16.47. Naming B16.20 alone does not fully describe the mating connection
        or establish service suitability. State the applicable project edition,
        flange standard, nominal size, class and facing. Where B16.47 applies,
        identify the required series. Resolve incomplete flange records with the
        responsible engineer instead of selecting a dimension table by appearance.
      </p>
      <p className={paragraph}>
        Flange type and bore deserve their own check. Garlock&apos;s <a className={link} href={sources.flange} target="_blank" rel="noopener noreferrer">2015 bulletin on flange types and spiral wound gaskets</a>{" "}explains
        how a larger bore can leave part of a gasket unsupported in some
        arrangements. Its practical implication for an RFQ is to include the
        flange type, pipe schedule or confirmed bore, and available joint drawing.
        The bulletin is background, not a current dimensional approval for your
        joint. Have the proposed gasket checked against the applicable standard,
        manufacturer information and actual mating geometry.
      </p>

      <h2 id="rings-and-service" className={heading}>Make ring configuration and service review explicit</h2>
      <p className={paragraph}>
        Specify whether the required construction has an inner ring, an outer ring
        or both, with the approved drawing or manufacturer reference where available.
        If an offer substitutes a different ring arrangement, record it as a
        technical deviation. The buyer should request the reason and obtain the
        appropriate engineering decision. A shorter lead time or a similar-looking
        gasket does not establish equivalence. Keep any approval tied to the
        particular line item and service rather than applying it across all spares.
      </p>
      <p className={paragraph}>
        Attach the service information needed for material review: process medium,
        relevant concentrations, operating and design conditions, and any specified
        cleaning exposure or cycling. Identify project restrictions on fillers,
        metallic grades or approved products. Request written confirmation for the
        proposed construction under those stated conditions. A broad label such
        as chemical resistant, high temperature or fire safe is not a substitute
        for the applicable technical evidence. This enquiry guide provides no
        universal material limits or tightening settings.
      </p>

      <h2 id="dimensions-and-alternatives" className={heading}>Compare dimensions without guessing from a used gasket</h2>
      <p className={paragraph}>
        Use a controlled drawing when the gasket is nonstandard or equipment-specific.
        Distinguish the sealing element dimensions from the inner-ring opening
        and the outer-ring diameter, and identify the required thicknesses and
        tolerances. A single unlabeled inside or outside diameter can describe
        the wrong feature. Ask the supplier to mark its proposed dimensions on
        a drawing using the same reference points as the enquiry. Measurements
        from a used or distorted sample need engineering interpretation.
      </p>
      <p className={paragraph}>
        When comparing offers, keep the quoted part number, drawing revision,
        complete materials and declared exceptions together. If one supplier
        groups multiple requested size/class items under one stock code, ask it
        to explain the dimensional basis and have that grouping reviewed. Do not
        assume universal interchangeability, or universal incompatibility, solely
        from the class labels. The <Link className={link} href={postUrl(getPost("flanges-gaskets-and-bolting")!)}>flanges, gaskets and bolting guide</Link>{" "}provides
        the wider context for reviewing the connection as an assembly.
      </p>

      <h2 id="receiving-and-rfq" className={heading}>Carry the identification through to receiving</h2>
      <p className={paragraph}>
        Specify quantities as individual gaskets or clearly defined sets, and
        ask for packaging labels linked to the purchase line. Agree the required
        material and conformity records before placing the order. The <Link className={link} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 material document guide</Link>{" "}helps
        distinguish document types; it does not mean every gasket automatically
        requires the same certificate. Ask how any requested evidence will identify
        the supplied components or batch. State manufacturing-origin requirements
        separately from the supplier&apos;s dispatch location.
      </p>
      <p className={paragraph}>
        At receiving, compare the agreed description, markings, quantities and
        documentation, and record visible damage or discrepancies through the
        project&apos;s acceptance process. Retain item identity when packaging is
        opened or spares are separated for different assets. For sourcing, send
        the confirmed fields and clearly marked gaps through Oillinko&apos;s <Link className={link} href="/oil-and-gas/equipment/gaskets-seals/spiral-wound-gaskets">spiral wound gasket requirements page</Link>{" "}or
        <Link className={link} href="/rfq"> submit a gasket enquiry</Link>.
        Requests reach Oillinko for manual review and supplier coordination;
        the offered product, availability and supporting records are confirmed
        against the specific enquiry.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
