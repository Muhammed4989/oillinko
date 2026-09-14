import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  CheckList,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("gaskets-and-sealing-products-explained")!;


const faqs = [
  {
    q: "When is a ring-type joint (RTJ) gasket required instead of a spiral wound gasket?",
    a: "Use the gasket type specified for the actual joint. RTJ gaskets require the matching ring groove, profile and material requirements; pressure class alone does not determine the gasket type. Do not substitute an RTJ and a spiral wound gasket merely because size and class appear to match.",
  },
  {
    q: "What filler material should a spiral wound gasket use?",
    a: "Graphite filler is the most common choice for general hydrocarbon service up to moderate temperatures; PTFE filler is used for more chemically aggressive or lower-temperature services. The correct filler depends on the process fluid, temperature and chemical compatibility — always confirm against the process datasheet rather than defaulting to graphite.",
  },
  {
    q: "Can a gasket for one flange class be used on another?",
    a: "Do not infer interchangeability from class labels alone. Some dimensions or product designs can cover multiple designations, while others cannot. Confirm the applicable flange standard, facing, bore, gasket dimensions and construction against the approved joint requirements and manufacturer information.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          A gasket must be selected for the complete flange joint and service.
          Metallic gasket requirements are addressed by{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.asme.org/codes-standards/find-codes-standards/b16-20-metallic-gaskets-pipe-flanges"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASME B16.20
          </a>
          , within its stated scope. The gasket construction, flange geometry,
          materials, bolting and approved assembly requirements work together.
          Here is how
          the main gasket types used in oil and gas piping differ, and when
          each one applies.
        </p>

        <h2 id="the-main-gasket-types" className="mt-12 text-xl font-bold">The main gasket types</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Spiral wound gaskets (ASME B16.20)",
              d: "A formed metal winding and a softer filler make up the sealing element. Inner and outer rings may be part of the specified construction. Select the materials and geometry for the actual joint and service; nominal size alone does not identify the complete product.",
            },
            {
              t: "Ring-type joint (RTJ) gaskets",
              d: "A solid metal ring, oval or octagonal in cross-section, that seats into a matching machined groove in the flange face. Specified for compatible ring-joint flange faces and approved service conditions. Ring-joint and spiral-wound gaskets are not interchangeable based on pressure class or size alone.",
            },
            {
              t: "Kammprofile (grooved metal) gaskets",
              d: "A grooved metal core with a soft facing forms the sealing construction. Required seating load and performance depend on the particular product and joint. Ask for the manufacturer's applicable selection data rather than assuming one gasket family always needs less load than another.",
            },
            {
              t: "Non-metallic sheet gaskets (ASME B16.21)",
              d: "Flat sealing products made from specified sheet materials, including suitable fiber composites or PTFE formulations. Their application depends on the material, process conditions and joint requirements; the product family alone does not establish a service limit.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="what-to-specify-on-a-gasket-line-item" className="mt-12 text-xl font-bold">What to specify on a gasket line item</h2>
        <CheckList
          items={[
            "Gasket type — spiral wound, RTJ, kammprofile or sheet",
            "Size and pressure class to match the flange exactly",
            "Winding/core material — e.g. AISI 304 or 316 stainless",
            "Filler or facing material — graphite, PTFE, or as required by the process fluid",
            "Facing type — raised face (RF) or ring-type joint (RTJ) groove",
            "Any special coatings or inner/outer ring requirements",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Tie each gasket purchase to the relevant flange or joint reference,
          including when buying replacements separately. See our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/category/oil-and-gas-equipment/piping-flanges-fittings/flanges-gaskets-and-bolting">
            flanges, gaskets and bolting
          </Link>{" "}
          for how the three elements work as one connection.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For a replacement with incomplete markings, the{" "}
          <Link className="text-accent hover:underline" href={postUrl(getPost("spiral-wound-gasket-identification-rfq")!)}>
            spiral wound gasket identification and RFQ guide
          </Link>{" "}
          explains how to distinguish winding, filler and ring materials and
          confirm the flange information before comparing quotations.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Need gaskets matched to an existing flange schedule? Browse our{" "}
          <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/gaskets-seals">
            gaskets &amp; sealing products
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your flange list
          </Link>{" "}
          for review and supplier quotation coordination.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
