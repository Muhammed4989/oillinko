import type { Metadata } from "next";
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
import { getPost } from "@/lib/blog";

const post = getPost("gaskets-and-sealing-products-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "When is a ring-type joint (RTJ) gasket required instead of a spiral wound gasket?",
    a: "RTJ gaskets are typically used at higher pressure classes (commonly Class 900 and above) and where the flange facing is machined with a matching ring groove, giving a more robust metal-to-metal seal than a spiral wound gasket can provide at those pressures.",
  },
  {
    q: "What filler material should a spiral wound gasket use?",
    a: "Graphite filler is the most common choice for general hydrocarbon service up to moderate temperatures; PTFE filler is used for more chemically aggressive or lower-temperature services. The correct filler depends on the process fluid, temperature and chemical compatibility — always confirm against the process datasheet rather than defaulting to graphite.",
  },
  {
    q: "Can a gasket for one flange class be used on another?",
    a: "No — a gasket is sized to a specific flange size and class, since the raised face dimensions and the gasket's compressed width and inner/outer diameter must match the flange facing precisely for a proper seal.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          A flange only seals as well as the gasket between the two faces.
          Get the gasket type, filler or facing wrong and the flange class,
          bolting and material grade around it stop mattering. Here is how
          the main gasket types used in oil and gas piping differ, and when
          each one applies.
        </p>

        <h2 id="the-main-gasket-types" className="mt-12 text-xl font-bold">The main gasket types</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Spiral wound gaskets (API 601 / ASME B16.20)",
              d: "The industrial default for flanged connections in oil and gas. A metal strip — typically stainless steel — is wound alternately with a filler material (graphite or PTFE) into a flat, resilient gasket that seals under bolt load and maintains sealing pressure as the joint relaxes over time.",
            },
            {
              t: "Ring-type joint (RTJ) gaskets",
              d: "A solid metal ring, oval or octagonal in cross-section, that seats into a matching machined groove in the flange face. Used at higher pressure classes and larger sizes where a spiral wound gasket's compressibility is no longer sufficient to guarantee sealing.",
            },
            {
              t: "Kammprofile (grooved metal) gaskets",
              d: "A solid metal core with concentric grooves, faced with a thin soft layer (often graphite). Kammprofile gaskets need lower bolt load to seal than spiral wound gaskets, making them useful on older or lighter flanges, or where a very reliable seal is required at moderate bolt loads.",
            },
            {
              t: "Non-metallic sheet gaskets (ASME B16.21)",
              d: "Flat gaskets cut from compressed non-asbestos or PTFE sheet material, used for lower-pressure, less critical services such as utility water or low-pressure air lines.",
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
          Because a gasket is only correct in combination with its flange and
          bolting, always order it alongside the flange line item rather than
          as a separate generic purchase — see our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/flanges-gaskets-and-bolting">
            flanges, gaskets and bolting
          </Link>{" "}
          for how the three elements work as one connection.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Need gaskets matched to an existing flange schedule?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your flange list
          </Link>{" "}
          and we will quote the matching gasket set.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
