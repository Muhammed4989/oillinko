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

const post = getPost("valves-and-actuation-explained")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between API 600 and API 6D valves?",
    a: "API 600 covers steel gate valves for general refinery and plant piping. API 6D covers ball, gate, plug and check valves specifically for pipeline service, with additional requirements around fire safety and full-bore/reduced-bore configurations relevant to pigging operations.",
  },
  {
    q: "Do I need a fire-safe valve?",
    a: "Fire-safe design (tested per API 607 or API 6FA) is typically required for valves in hydrocarbon service where a fire could otherwise cause the soft seat to burn away and the valve to lose its seal. Check your project's piping and instrumentation specification — many oil and gas projects require fire-safe design as standard for isolation valves.",
  },
  {
    q: "How do I choose between pneumatic, electric and hydraulic actuation?",
    a: "Pneumatic actuators are common where instrument air is already available and fast, fail-safe action is needed. Electric actuators suit locations without an air supply and where precise positioning or remote control integration is required. Hydraulic actuators are used for high-torque applications such as large pipeline valves. The choice depends on available utilities, response time, and fail-safe (fail-open/fail-closed) requirements.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          A valve is only as good as the actuator that operates it and the
          standard it is built to. Before comparing two valve quotes, it helps
          to know which family the valve belongs to, what the governing
          standard actually requires, and how the actuation should be
          specified.
        </p>

        <h2 id="the-main-valve-types-in-oil-and-gas-piping" className="mt-12 text-xl font-bold">The main valve types in oil and gas piping</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Gate valves",
              d: "A wedge or parallel gate moves perpendicular to the flow to open or close the line. Designed for fully open or fully closed service — not for throttling — and common as the main isolation valve on process and pipeline connections. Governed by API 600 (large bore) and API 602 (compact, smaller bore).",
            },
            {
              t: "Globe valves",
              d: "The flow path turns through the valve body, giving good throttling control at the cost of higher pressure drop than a gate valve. Used where flow needs to be regulated, not just isolated.",
            },
            {
              t: "Ball valves",
              d: "A bored ball rotates a quarter-turn to open or close. Quick to operate, low pressure drop when fully open, and the dominant choice for pipeline isolation valves under API 6D, available in full-bore (for pigging) or reduced-bore configurations.",
            },
            {
              t: "Check valves",
              d: "Allow flow in one direction only, closing automatically against reverse flow. Common types are swing check, dual-plate (wafer) and piston check, covered by API 594.",
            },
            {
              t: "Butterfly and plug valves",
              d: "A rotating disc (butterfly) or tapered/cylindrical plug provides a compact, lightweight isolation or throttling valve, often used in lower-pressure utility and water service.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="the-standards-behind-the-valve-body" className="mt-12 text-xl font-bold">The standards behind the valve body</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Standard</th>
                <th className="px-4 py-3">Covers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["API 600", "Steel gate valves, flanged and butt-welding ends, for general plant piping"],
                ["API 602", "Compact steel gate, globe and check valves for smaller bore, higher pressure service"],
                ["API 6D", "Ball, gate, plug and check valves specifically for pipeline service"],
                ["API 594", "Check valves — swing, dual-plate and other types"],
                ["ASME B16.34", "Valve design, pressure-temperature ratings, materials and testing"],
                ["API 607 / API 6FA", "Fire-type testing for soft-seated and metal-seated valves"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-accent">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="specifying-actuation" className="mt-12 text-xl font-bold">Specifying actuation</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Actuators mount to the valve stem per the{" "}
          <a
            className="text-accent hover:underline"
            href="https://www.iso.org/standard/89904.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-foreground">ISO 5211</strong>
          </a>{" "}
          interface standard, which keeps the actuator and valve
          interchangeable between manufacturers. When specifying actuation,
          define:
        </p>
        <CheckList
          items={[
            "Actuation type — manual gear, pneumatic (spring-return or double-acting), electric or hydraulic",
            "Fail-safe position — fail-open, fail-closed, or fail-in-place, on loss of power or air supply",
            "Available utilities at site — instrument air pressure, electrical voltage/phase, or hydraulic supply",
            "Speed of operation required — fast-acting emergency shutdown vs slow-closing to avoid surge",
            "Control signal and feedback — on/off, modulating (4-20mA), local/remote control requirements",
            "Area classification — explosion-proof or intrinsically safe rating for the installation zone",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          As with{" "}
          <Link className="text-accent hover:underline" href="/blog/flanges-gaskets-and-bolting">
            flanges and gaskets
          </Link>
          , treat the valve and its actuator as one
          matched package rather than two separate purchases — the actuator&apos;s
          torque output must be sized to the valve&apos;s actual breakaway and
          running torque at the specified pressure differential.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing valves for a project? Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/valves-actuation">
            valves &amp; actuation
          </Link>{" "}
          category, or{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send us your valve list and duty conditions
          </Link>{" "}
          and we will structure the RFQ so every offer is quoted on the same
          standard, testing and actuation basis.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
