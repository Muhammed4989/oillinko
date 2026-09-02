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

const post = getPost("wellhead-and-christmas-tree-equipment-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between a wellhead and a Christmas tree?",
    a: "The wellhead is the structural and pressure-containing assembly at the surface that supports the casing and tubing strings and seals the annuli between them. The Christmas tree is the assembly of valves and fittings mounted on top of the wellhead that controls the flow of produced fluid once the well is completed.",
  },
  {
    q: "What do API 6A pressure classes mean?",
    a: "API 6A defines a series of standard working pressure ratings (commonly referenced as PSL — Product Specification Level — and pressure classes such as 2,000, 3,000, 5,000, 10,000 and 15,000 psi) that wellhead and Christmas tree equipment is rated to, selected based on the well's expected shut-in and operating pressures.",
  },
  {
    q: "What is sour service and why does it matter for wellhead equipment?",
    a: 'Sour service means the produced fluid contains hydrogen sulfide (H2S), which can cause a specific type of material failure called sulfide stress cracking in susceptible steels. Equipment for sour wells must be manufactured from materials qualified under NACE MR0175 / ISO 15156, which is a materials qualification standard, not a strength rating.',
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Wellhead and Christmas tree equipment sits at the point where the
          well meets the surface — it is the pressure boundary for
          everything below it, which is why it is one of the most tightly
          standardised equipment categories in oil and gas. Here is what the
          assembly consists of and how it is specified.
        </p>

        <h2 className="mt-12 text-xl font-bold">What the assembly consists of</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Casing and tubing head spools",
              d: "Stacked spools that support each successive casing string as the well is drilled, and finally the production tubing, each with its own seal and hanger, matched to the well's specific casing programme.",
            },
            {
              t: "Wellhead",
              d: "The complete stacked assembly of casing and tubing heads that seals the annuli between the strings and provides the mounting point for the Christmas tree above it.",
            },
            {
              t: "Christmas tree",
              d: "The assembly of valves — typically a master valve, wing valve(s) and swab valve — mounted above the wellhead to control and monitor flow once the well is producing.",
            },
            {
              t: "Production choke",
              d: "A manual or adjustable restriction downstream of the tree that controls the flow rate and pressure drop from the well into the flowline.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold">API 6A: pressure and material classes</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          <strong className="text-foreground">API 6A</strong> (Wellhead and
          Christmas Tree Equipment) is the governing standard for this
          category, setting requirements for design, materials, testing and
          marking. Two selections drive most of the specification:
        </p>
        <CheckList
          items={[
            "Pressure rating — sized to the well's expected shut-in and operating pressure, from lower ratings up to high-pressure classes such as 10,000 or 15,000 psi",
            "Material class — selected for the produced fluid; sour (H2S-containing) service requires materials qualified under NACE MR0175 / ISO 15156, distinct from the pressure rating itself",
            "Temperature class — matched to the expected wellbore and surface temperature range",
            "Product Specification Level (PSL) — sets the testing and documentation rigour required from the manufacturer",
          ]}
        />

        <h2 className="mt-12 text-xl font-bold">What to confirm before you specify</h2>
        <CheckList
          items={[
            "Casing and tubing sizes and weights, to match head spool bore and hangers",
            "Expected shut-in and working pressure, to select the API 6A pressure class",
            "Produced fluid composition, including H2S content, to determine material class and sour-service requirements",
            "Temperature range at the wellhead",
            "Connection type between spools — flanged or clamp-type hub connections",
            "Testing and documentation level (PSL) required by the operator's specification",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Because a wellhead assembly is stacked from multiple vendors&apos;
          components in some cases, confirming that connection types and
          pressure ratings are consistent from the casing head up through the
          tree is essential — a mismatch discovered at the wellsite is far
          more costly than one caught on the datasheet.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing wellhead or Christmas tree equipment?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your well design and produced fluid data
          </Link>{" "}
          and we will structure the RFQ against the correct API 6A class.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
