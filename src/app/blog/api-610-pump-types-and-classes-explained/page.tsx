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

const post = getPost("api-610-pump-types-and-classes-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What does the API 610 type designation (e.g. BB3) mean?",
    a: "The first two letters describe the bearing arrangement — OH (overhung), BB (between bearings) or VS (vertically suspended) — and the number identifies the specific configuration within that family, such as casing split (axial vs radial) and number of stages. BB3, for example, is a multistage pump with an axially split casing.",
  },
  {
    q: "Which API 610 type is used for boiler feedwater service?",
    a: "High-head, multistage boiler feedwater duty is typically served by BB3 (axially split, multistage) or BB4/BB5 (radially split, double-casing/barrel) pumps, depending on the discharge pressure. BB3 is common up to moderate-high pressures; BB5 barrel pumps are used where discharge pressure is high enough that an axially split joint is no longer suitable.",
  },
  {
    q: "Is API 610 mandatory, or can a pump comply with a similar in-house spec?",
    a: "API 610 itself is a voluntary industry standard, but most oil, gas and petrochemical operators reference it directly in their procurement specifications, so in practice it is a de facto requirement for critical pump services. Always confirm the exact edition (e.g. 11th or 12th) your project specification calls for, since requirements have tightened between editions.",
  },
  {
    q: "Does API 610 cover the motor and coupling as well as the pump?",
    a: "API 610 sets requirements for the coupling (typically referencing API 671 for special-purpose couplings) and for baseplate design, but the driver itself is usually specified separately — API 541 or API 547 for motors — while API 610 focuses on the pump, its bearings, seal chamber and testing.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          API 610 (<em>Centrifugal Pumps for Petroleum, Petrochemical and
          Natural Gas Industries</em>) is the reference standard for
          centrifugal pumps in hydrocarbon service. Before a datasheet gets to
          dimensions, materials or performance curves, it identifies the pump
          by a short type code — OH2, BB3, VS6 and so on. Knowing what that
          code means lets a buyer sanity-check a quote before it is even
          opened.
        </p>

        <h2 className="mt-12 text-xl font-bold">The three pump families</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          API 610 groups every centrifugal pump configuration into three
          families, based on where the bearings sit relative to the impeller:
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "OH — Overhung",
              d: "The impeller is mounted on the end of a shaft that is supported by bearings on one side only (overhung), outside the pumped fluid. This is the simplest, most compact arrangement and covers the majority of single-stage process pumps in a plant.",
            },
            {
              t: "BB — Between bearings",
              d: "The impeller (or impellers, for multistage pumps) sits between two bearings, one on each side. This arrangement handles higher heads and supports multistage designs, making it the standard choice for high-pressure and high-head services such as boiler feedwater and pipeline boosting.",
            },
            {
              t: "VS — Vertically suspended",
              d: "The pump is mounted vertically, often with the impeller and part of the shaft suspended down into a sump, tank or barrel below grade. Used where the liquid source is below the pump's mounting level, such as vertical turbine or canned/barrel pumps for tank farms and cooling water intakes.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold">Overhung (OH) sub-types</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Configuration</th>
                <th className="px-4 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["OH1", "Horizontal, foot-mounted", "General process service, lower cost"],
                ["OH2", "Horizontal, centerline-mounted", "The default single-stage refinery/process pump"],
                ["OH3", "Vertical in-line, rigidly coupled", "Where floor space is limited"],
                ["OH4", "Vertical in-line, rigidly coupled, close-coupled", "Compact in-line installations"],
                ["OH5", "Close-coupled, vertical in-line", "Small, compact services"],
                ["OH6", "High-speed integral gear pump", "Specialised high-head, low-flow duties"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-xl font-bold">Between-bearings (BB) sub-types</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          This is the family most buyers of boiler feedwater, pipeline and
          high-head process pumps deal with directly:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Configuration</th>
                <th className="px-4 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BB1", "Single stage, axially split casing", "Moderate head, easy maintenance access"],
                ["BB2", "Single stage, radially split casing", "Higher pressure single-stage duty"],
                ["BB3", "Multistage, axially split casing", "High-head services such as boiler feedwater, pipeline boosting"],
                ["BB4", "Multistage, radially split casing", "Very high pressure multistage duty"],
                ["BB5", "Multistage, radially split, double casing (barrel)", "Highest pressure and temperature duty, where a barrel design contains pressure independently of the inner stack"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-xl font-bold">Vertically suspended (VS) sub-types</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          VS pumps range from single-casing diffuser and volute designs (VS1,
          VS2) through axial flow (VS3) and cantilever designs (VS4, VS5) to
          double-casing barrel-mounted vertical turbine pumps (VS6, VS7), used
          for deep sumps, cooling water intakes and tank farm transfer where
          NPSH available at grade would otherwise be insufficient.
        </p>

        <h2 className="mt-12 text-xl font-bold">What API 610 requires regardless of type</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Whichever type code applies, API 610 imposes a common set of
          mechanical and testing requirements that go well beyond a general
          industrial pump standard:
        </p>
        <CheckList
          items={[
            "Bearing life — a minimum L10 bearing life, commonly cited as around 25,000 hours at rated conditions and 16,000 hours at maximum radial/axial load and rated speed",
            "NPSH margin — a defined margin between NPSH available and NPSH required at the rated point",
            "Mechanical seals per API 682, with the seal flush plan (e.g. Plan 11, 23, 32) specified for the service",
            "Coupling per API 671 for special-purpose services, with a coupling guard",
            "Baseplate design suitable for grouting and alignment, with provision for jacking bolts",
            "Hydrostatic testing and a witnessed performance test per API 610 / ISO 9906, at the level of witnessing specified in the purchase order",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Because requirements differ between the 10th, 11th and 12th
          editions, always confirm the exact edition referenced in your
          project specification before finalising a datasheet — a pump built
          to an older edition may not satisfy a newer one on bearing life,
          seal chamber dimensions or testing scope.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing an API 610 pump package? We prepare the RFQ, circulate it to
          verified manufacturers, and check every returned offer against the
          type, class and testing requirements before it reaches you.{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your pump datasheet
          </Link>
          .
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
