import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("hot-tapping-and-line-stopping")!;


const faqs = [
  {
    q: "Is hot tapping safe on a pipeline carrying hydrocarbons?",
    a: "Feasibility and safety depend on the specific line, fluid, condition, engineering assessment and approved procedures. Competent specialists and the operator must establish whether hot tapping is appropriate; it is not suitable for every hydrocarbon service or damaged pipeline.",
  },
  {
    q: "What is the difference between hot tapping and line stopping?",
    a: "Hot tapping is cutting a hole into a live pipeline to create a new connection. Line stopping goes a step further, inserting a plugging head or stopper through that connection to isolate a section of pipe so it can be repaired or modified — the two techniques are usually used together.",
  },
  {
    q: "What pressure class are hot tap saddles typically rated to?",
    a: "There is no default pressure class for every hot tapping project. The complete fitting, valve and machine arrangement must be selected against the actual pressure, temperature, material, line condition and approved engineering basis.",
  },
];

export default function HotTappingGuide() {
  return (
    <>
      <BlogPostHeader post={post} />

      <Prose>
        <h2 id="what-is-hot-tapping" className="text-xl font-bold">What is hot tapping?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Hot tapping is a specialist method of creating a connection to an existing pipeline or other pressure boundary while an engineered arrangement maintains containment. The complete system can involve a fitting, valve, tapping machine and purpose-selected cutting equipment. The actual method and feasibility depend on the line material, condition, fluid and operating envelope. This article explains terminology and purchasing questions; it is not an execution procedure or authorization to work on a live line.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Line stopping uses a specialist stopping arrangement as part of a defined isolation scheme. Its purpose differs from creating a branch connection, even where the two techniques are used on the same project. A stopping head or other device does not by itself establish that a section is safe for maintenance. The operator and competent specialists must define and approve the isolation, verification and work arrangements for the actual pipeline.
        </p>

        <h2 id="why-shut-down-a-pipeline-when-you-can-hot-tap" className="mt-12 text-xl font-bold">When an intervention may be considered</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Operators may evaluate intervention methods where shutdown constraints justify a specialist feasibility assessment. Potential project objectives include:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Adding new branches or tie-ins to an existing mainline",
            "Installing meters, valves or instrumentation without depressurizing",
            "Repairing a defective section with a line stop around the damaged part",
            "Relocating or upgrading sections of aging pipelines",
            "Planned modifications subject to a site-specific integrity assessment",
            "Serving new wells or laterals from an existing trunk line",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>

        <h2 id="the-equipment-that-makes-it-possible" className="mt-12 text-xl font-bold">The equipment that makes it possible</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A hot tap and line stop setup is a matched system of fittings,
          machines and tools. At the connection point, the critical components are:
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Weld-on tapping saddles (one-piece and split)",
              d: "Branch fittings establish a designed connection to the existing line. Welded and mechanical constructions have different application requirements. The fitting design, material and installation approach must be assessed for the actual pipe and approved by the responsible engineering team.",
            },
            {
              t: "Hot tap machines and cutters",
              d: "Mounted on the saddle and valve, the tapping machine drives a shell cutter through the pressurized pipe wall while sealing against pressure. The cut coupon is retained and retrieved with the cutter.",
            },
            {
              t: "Line stop fittings and plugging heads",
              d: "Stopping fittings and heads are selected as a compatible system for the approved isolation scheme. The complete arrangement, operating envelope and verification requirements need specialist assessment; an individual stopping device is not a general authorization for downstream work.",
            },
            {
              t: "Inflatable pneumatic stoppers",
              d: "Inflatable stoppers have product-specific limits for fluid compatibility, differential pressure, restraint and installation. They must not be treated as interchangeable with engineered high-pressure line-stopping systems or assumed suitable for hydrocarbon service without explicit manufacturer and project approval.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="the-standards-that-govern-the-work" className="mt-12 text-xl font-bold">The standards that govern the work</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Hot tapping is a pressure-boundary activity: it is executed against{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.api.org/products-and-services/standards/digital-catalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            API RP 2201
          </a>{" "}
          and related written procedures, not habits. The references buyers and
          contractors should know:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            ["API RP 2201", "Safe hot tapping practices in petroleum and chemical industries — the defining recommended practice for the procedure."],
            ["ASME B31.4 / B31.8", "Pipeline transportation systems for liquids (4) and gas (8) — the design codes of the lines being tapped."],
            ["ASME B31.3", "Process piping — applies where hot taps are made on plant piping."],
            ["ASME Section IX", "Welding qualifications for the welders and procedures used on saddles and fittings."],
            ["Project pressure-temperature rating", "Confirm the rating of the complete arrangement; no single flange class is a universal default."],
            ["EN 10204 Type 3.1", "Material test certificates — traceable verification that the steel is what the spec says it is."],
          ].map(([s, d]) => (
            <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <strong className="text-foreground">{s}</strong> — {d}
              </span>
            </li>
          ))}
        </ul>

        <h2 id="buying-hot-tap-and-line-stop-equipment" className="mt-12 text-xl font-bold">Buying hot tap and line stop equipment</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A useful enquiry identifies the line and branch geometry, material, available wall-condition information, fluid, pressures, temperatures and site arrangement. Provide the drawings and inspection records available to the operator. Identify which items are permanent fittings and which belong to a temporary service package. Ask the supplier to list missing information, exclusions and any site verification needed before the proposal can be finalized. Availability, equipment compatibility and service scope require confirmation for the particular project.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Related: <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/pipeline-intervention">hot tap &amp; line stop equipment</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/flanges-fittings-bolting">pipeline fittings</Link>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing hot tap or line stop equipment?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your line size, pressure class and material
          </Link>{" "}
          so Oillinko can review the requirement and seek an appropriate supplier or specialist response.
        </p>

        <h2 id="isolation-reference" className="mt-12 text-xl font-bold">Isolation planning reference</h2><p className="mt-4 leading-7 text-muted">The <a className="text-accent underline" href="https://www.hse.gov.uk/pubns/books/hsg253.htm">HSE guide to safe isolation of plant and equipment</a> explains the need to select and manage isolation arrangements for the actual asset. It is UK guidance. Applicable local requirements, approved operator procedures and the equipment manufacturer&apos;s instructions remain necessary for the project. Define engineering approval, inspection, mobilization and handover responsibilities before committing to a field package.</p><Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
