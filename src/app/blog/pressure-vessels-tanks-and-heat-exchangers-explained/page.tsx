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

const post = getPost("pressure-vessels-tanks-and-heat-exchangers-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between API 650 and API 620 tanks?",
    a: "API 650 covers welded steel tanks for oil storage at atmospheric pressure (essentially no internal pressure above atmospheric). API 620 covers large, welded, low-pressure storage tanks designed for a small internal pressure above atmospheric, which requires different design and stress calculations than a purely atmospheric tank.",
  },
  {
    q: "What does a TEMA class (B, C, R) mean for a heat exchanger?",
    a: "TEMA classes describe the service severity the exchanger is designed for: Class R is for the most severe petroleum and related processing applications, Class C is for generally moderate service, and Class B is for chemical process service. The class affects design margins, materials and construction details, not just the physical dimensions.",
  },
  {
    q: "Does ASME Section VIII Division 1 or Division 2 apply to my vessel?",
    a: "Division 1 is the more commonly used, general-purpose set of design rules and is sufficient for most conventional pressure vessels. Division 2 uses more detailed stress analysis and allows higher allowable stresses, typically justified for higher-pressure or weight-sensitive designs where the more rigorous (and more expensive) analysis pays off in reduced wall thickness. Your process engineer or the project specification should state which applies.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Pressure vessels, storage tanks and heat exchangers are each
          governed by a different code family, and mixing them up on a
          specification is a common source of confusion for buyers who are
          used to piping and valve standards. Here is which code applies to
          which piece of equipment, and what each one actually covers.
        </p>

        <h2 id="pressure-vessels-asme-section-viii" className="mt-12 text-xl font-bold">Pressure vessels — ASME Section VIII</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Separators, scrubbers, filter vessels, knockout drums and reactors
          are designed and fabricated to{" "}
          <strong className="text-foreground">ASME Section VIII</strong>, the
          Boiler and Pressure Vessel Code&apos;s rules for unfired pressure
          vessels. Division 1 covers general design-by-rule methods suitable
          for most conventional vessels; Division 2 uses more detailed
          design-by-analysis methods, generally chosen for higher-pressure or
          weight-critical vessels where the extra engineering pays for
          itself. Materials are selected per ASME Section II, with full
          traceability back to the vessel through its material certificates.
        </p>

        <h2 id="storage-tanks-api-650-and-api-620" className="mt-12 text-xl font-bold">Storage tanks — API 650 and API 620</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "API 650 — Welded Tanks for Oil Storage",
              d: "Covers atmospheric or near-atmospheric welded steel tanks — the large cylindrical tanks seen in tank farms for crude, refined products and produced water. Design is by prescriptive rules based on tank diameter, height and product.",
            },
            {
              t: "API 620 — Large, Welded, Low-Pressure Storage Tanks",
              d: "Covers tanks designed for internal pressures above atmospheric but still relatively low — used where a small positive pressure (for vapor control or process reasons) rules out a standard API 650 atmospheric design.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="heat-exchangers-tema-class" className="mt-12 text-xl font-bold">Heat exchangers — TEMA class</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Shell-and-tube heat exchangers combine a pressure vessel (the
          shell, governed by ASME Section VIII) with a bundle of tubes
          designed and constructed to{" "}
          <strong className="text-foreground">TEMA</strong> (Tubular
          Exchanger Manufacturers Association) standards. TEMA defines three
          classes of mechanical design severity — R for the most demanding
          petroleum and related processing service, C for generally moderate
          service, and B for chemical process service — governing design
          margins, tube bundle construction and maintenance features such as
          removable bundles.
        </p>

        <h2 id="what-to-include-on-the-specification" className="mt-12 text-xl font-bold">What to include on the specification</h2>
        <CheckList
          items={[
            "Governing code — ASME Section VIII (vessel), API 650/620 (tank), or TEMA class (heat exchanger)",
            "Design pressure and temperature, and the process fluid and its properties",
            "Materials of construction, with the applicable ASME Section II grade",
            "Corrosion allowance",
            "Inspection and testing scope — hydrostatic/pneumatic test, NDT extent, and any third-party inspection requirement",
            "Nameplate and documentation package required (data book, U-stamp or national board registration where applicable)",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          For the inspection and certification side of these packages, see
          our guides to{" "}
          <Link className="text-accent hover:underline" href="/blog/third-party-inspection-tpi-oil-and-gas-equipment">
            third-party inspection
          </Link>{" "}
          and{" "}
          <Link className="text-accent hover:underline" href="/blog/en-10204-material-certificates-explained">
            EN 10204 material certificates
          </Link>
          .
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a vessel, tank or exchanger package?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your process datasheet
          </Link>{" "}
          and we will source it against the correct code and inspection basis.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
