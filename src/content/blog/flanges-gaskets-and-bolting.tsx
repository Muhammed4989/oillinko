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

const post = getPost("flanges-gaskets-and-bolting")!;


const faqs = [
  {
    q: "Can a Class 300 flange be bolted to a Class 600 flange?",
    a: "Do not assume flanges of different classes are interchangeable. The responsible engineer must verify the exact dimensions, facing, bolting and rating of the proposed joint. A matching bolt pattern alone does not approve a mixed-class connection.",
  },
  {
    q: "What is the difference between RF and RTJ facing?",
    a: "Raised face (RF) joints use a gasket on the raised sealing surface. Ring-type joint (RTJ) joints use a compatible metal ring gasket in the specified grooves. Facing, ring geometry and materials must match the approved connection; pressure class alone does not select the facing.",
  },
  {
    q: "Why is ASTM A193 Gr. B7 paired with A194 Gr. 2H nuts?",
    a: "B7 studs and 2H nuts are a common specified combination, but selection depends on the approved joint requirements. Grade 2H is quenched-and-tempered medium-carbon steel with specified mechanical requirements. The nut should not be described as an intentional weak point or a safeguard against overtightening.",
  },
];

export default function FlangesGuide() {
  return (
    <>
      <BlogPostHeader post={post} />

      <Prose>
        <h2 id="why-flanged-connections-dominate-oil-and-gas-piping" className="text-xl font-bold">Why flanged connections dominate oil and gas piping</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Flanged connections give plant operators a maintenance point that welded
          connections cannot. Pumps, valves, vessels and instruments must be
          removable, and pipelines must be temporarily separated for cleaning,
          testing or tie-in. Every one of those joints uses the same three
          elements: compatible flanges, a gasket that
          seals the facing, and stud bolts with nuts that hold the assembly
          together. Incomplete specification can compromise the joint.
          Treat the connection as one system and follow the approved design
          and assembly requirements.
        </p>

        <h2 id="flanges-asme-b16-5-types-and-pressure-classes" className="mt-12 text-xl font-bold">Flanges: ASME B16.5 types and pressure classes</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The defining standard for flanges from NPS 1/2 to NPS 24 is{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.asme.org/codes-standards/find-codes-standards/b16-5-pipe-flanges-flanged-fittings-nps-1-2-nps-24-metric-inch-standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-foreground">ASME B16.5</strong>
          </a>
          . It fixes the
          dimensions, pressure-temperature ratings and other requirements within
          its scope. Confirm the exact product and interface. Common flange types
          in oil and gas are:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Flange type</th>
                <th className="px-4 py-3">How it is joined to the pipe</th>
                <th className="px-4 py-3">Typical use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Weld neck", "Butt-welded to the pipe", "Confirm bore, end preparation and project requirements"],
                ["Slip-on", "Placed over the pipe and fillet-welded", "Use where permitted by the approved piping specification"],
                ["Blind", "No bore — closes the end of a line or vessel", "Flange ends, valves, test boundaries"],
                ["Socket weld", "Pipe fits inside the socket, fillet-welded", "Small-bore high-pressure lines"],
                ["Lap joint", "A stub end backs the loose flange", "Lines that are taken apart frequently"],
                ["Threaded", "Screwed onto the pipe", "Confirm thread and permitted service in the project specification"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Pressure classes under ASME B16.5 are{" "}
          <strong className="text-foreground">150, 300, 400, 600, 900, 1500 and 2500</strong>.
          The rating must be reviewed for the applicable material and temperature;
          the class number is not a pressure value in psi. Size limits depend on
          class, and the facing must be specified separately. Read the{" "}
          <Link className="text-accent hover:underline" href="/blog/category/oil-and-gas-equipment/piping-flanges-fittings/asme-b16-5-flange-pressure-classes">flange pressure class buyer guide</Link>{" "}
          before comparing rating descriptions or proposed substitutes.
        </p>

        <h2 id="gaskets-sealing-the-face" className="mt-12 text-xl font-bold">Gaskets: sealing the face</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For the joint to seal, the gasket must match the flange size, class and
          service. The industrial workhorse is the{" "}
          <strong className="text-foreground">spiral wound gasket per ASME B16.20</strong>:
          a stainless steel strip winding (commonly AISI 304 or higher alloy) and a
          filler such as graphite, spiralled into a flat gasket that seals under
          bolt load and spring-back. Specify the applicable ASME B16.20 edition
          and project requirements. Select the winding and filler to the process fluid
          and temperature, not just the flange size.
        </p>

        <h2 id="stud-bolts-astm-a193-b7-and-a194-2h" className="mt-12 text-xl font-bold">Stud bolts: ASTM A193 B7 and A194 2H</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The bolts that hold a flanged joint in tension are threaded rods with a
          heavy hex nut at each end, made to{" "}
          <a
            className="text-accent hover:underline"
            href="https://store.astm.org/a0193_a0193m-24a.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASTM
          </a>{" "}
          material grades. The established pairing for high-pressure,
          high-temperature hydrocarbon service is:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            ["Stud bolt — ASTM A193 Gr. B7", "Quenched-and-tempered chromium-molybdenum alloy steel. Confirm the material and mechanical requirements against the approved joint specification."],
            ["Nut — ASTM A194 Gr. 2H", "Quenched-and-tempered medium-carbon steel with specified mechanical requirements; not an intentional weak link in the joint."],
            ["Threads and dimensions", "Specify diameter, thread, length and the applicable dimensional requirements. Define how many nuts and other accessories form each ordered set."],
            ["Other service requirements", "Alternative fastener materials and coatings require technical selection for the actual environment; do not substitute grades from a generic corrosion-resistant description."],
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

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Manufacturer reference: <a className="text-accent hover:underline" href="https://www.portlandbolt.com/technical/specifications/astm-a194/" target="_blank" rel="noopener noreferrer">Portland Bolt&apos;s ASTM A194 technical table</a>{" "}
          identifies Grade 2H material and mechanical requirements. Use the
          applicable specification and project requirements for acceptance.
        </p>

        <h2 id="specify-the-whole-set" className="mt-12 text-xl font-bold">Specify the whole set</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          When adding flanged connections to your equipment list, include every
          element — not just the flange:
        </p>
        <CheckList
          items={[
            "Flange size, type and class — e.g. weld neck, size, Class 600, RF",
            "Material grade — e.g. ASTM A105 carbon steel",
            "Gasket — size, class and type — e.g. spiral wound with graphite filler",
            "Bolting — stud bolts A193 Gr. B7 with A194 Gr. 2H nuts, dimensions and quantity",
            "Material certificates — EN 10204 Type 3.1 for all pressure-containing parts",
            "Coatings for bolts and flanges where corrosive atmosphere",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Related:{" "}
          <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/flanges-fittings-bolting">flanges, fittings &amp; bolting</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/oil-and-gas/equipment/gaskets-seals">gaskets &amp; sealing products</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/blog/category/inspection-material-quality/materials-documentation/en-10204-material-certificates-explained">EN 10204 certificates</Link>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a flanged connection package?{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your flange, gasket and bolt list
          </Link>{" "}
          and we will quote it as one matched set.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
