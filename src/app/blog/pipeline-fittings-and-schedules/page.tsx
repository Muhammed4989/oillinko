import type { Metadata } from "next";
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

const post = getPost("pipeline-fittings-and-schedules")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What does a long radius (LR) elbow mean?",
    a: "Long radius means the elbow's centerline bend radius is 1.5 times the nominal pipe size. It is the default in pipeline service because the gentler curve reduces turbulence and pressure drop compared with a short radius elbow.",
  },
  {
    q: "How is a reducing tee sized and written on a BOQ?",
    a: 'Always run × run × branch. A tee reducing from a 12" main run to an 8" branch is written 12" × 12" × 8", not just "12x8 tee" — the notation tells the supplier exactly which opening is the smaller one.',
  },
  {
    q: "Does the fitting schedule have to match the pipe schedule?",
    a: "Yes. A fitting butt-welded to a Sch. 40 pipe run must itself be Sch. 40 (or the matching bore), because the weld ends must align and the joint must hold the same design pressure as the line either side of it.",
  },
];

export default function FittingsGuide() {
  return (
    <>
      <BlogPostHeader post={post} />

      <Prose>
        <h2 id="what-counts-as-a-pipeline-fitting" className="text-xl font-bold">What counts as a pipeline fitting</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Pipeline fittings are the manufactured pieces that change the
          direction, size or branching of a piping run. In oil and gas the
          overwhelming majority are <strong className="text-foreground">butt-weld
          fittings</strong> — their ends are beveled so they are welded directly to the
          matched pipe, creating a smooth, strong, inspectable joint. The three
          families every buyer needs are elbows, tees and reducers.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              t: "Elbows — 90°, 45° (and 180°)",
              d: "The most specified fitting of all, normally supplied as long-radius (LR), meaning the centerline radius is 1.5 × nominal pipe size — the default in pipeline service because it reduces turbulence and pressure drop. 45° elbows steer a run through gentler turns. LR elbows to ANSI B16.9 are interchangeable between suppliers.",
            },
            {
              t: "Tees — equal and reducing",
              d: 'A tee takes a branch off the main run or joins three pipe runs. An equal tee has all three openings the same nominal size (e.g. 8" × 8" × 8"); a reducing tee has a smaller branch (e.g. 12" × 12" × 8"). The dimensioned notation is always run × run × branch.',
            },
            {
              t: "Reducers — concentric and eccentric",
              d: 'Reducers step the pipe run down to a smaller size, e.g. 10" × 6". A concentric reducer keeps the centerline straight — used where flow is not carrying a heavy phase. An eccentric reducer flattens one side, used on pump suctions and horizontal piping where the line must drain or avoid air pockets.',
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-base font-semibold text-accent">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 id="schedules-what-the-wall-thickness-means" className="mt-12 text-xl font-bold">Schedules: what the wall thickness means</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The nominal size (e.g. NPS 8) is the outside diameter family, but the
          wall thickness is set by the <strong className="text-foreground">schedule</strong>
          number. Standard schedules you will see on carbon steel fitting lists:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Schedule</th>
                <th className="px-4 py-3">Wall thickness</th>
                <th className="px-4 py-3">Typical service</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sch. STD", 'The long-standing "standard" wall', "General-purpose carbon steel process and pipeline service"],
                ["Sch. 40", "STD thickness on most sizes up to NPS 10", "The default for a wide range of liquid and gas service"],
                ["Sch. 80", "Thicker wall, higher pressure capability", "High-pressure lines and smaller bores"],
                ["Sch. XS / XXS", "Extra strong / double extra strong", "Severe service, high pressure and mechanical loads"],
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
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The fitting schedule must match the pipe schedule of the line it serves:
          a Sch. 40 pipe run needs Sch. STD fittings butt-welded to it, because the
          ends must align and the weld joint must hold the same design pressure.
          When in doubt, put the schedule on the BOQ — &quot;Sch. STD&quot; and &quot;Sch. 40&quot;
          are written differently from one supplier to another, so spell it out.
        </p>

        <h2 id="materials-astm-a234-wpb-and-beyond" className="mt-12 text-xl font-bold">Materials: ASTM A234 WPB and beyond</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For carbon steel butt-weld fittings the standard grade is{" "}
          <strong className="text-foreground">ASTM A234 WPB</strong> — the fitting
          companion to carbon steel pipe (ASTM A106 / API 5L), suitable for
          temperatures from roughly −20°F to 400°F and widely used in field
          equipment. Fittings can also be supplied in higher-strength or
          low-temperature grades where the pipe specification demands them. The
          material certificate (EN 10204 Type 3.1) is how you prove the grade.
        </p>

        <h2 id="six-fields-that-complete-a-fittings-line-item" className="mt-12 text-xl font-bold">Six fields that complete a fittings line item</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            'Type — elbow, tee, reducer (not just "fitting")',
            "Angle or configuration — 90°, 45°, equal or reducing",
            'Nominal size(s), e.g. 12" × 12" × 8"',
            "Schedule / wall thickness, e.g. Sch. STD",
            "Material and standard, e.g. ASTM A234 WPB, ANSI B16.9",
            "Ends and quantities, e.g. beveled ends, qty per the drawing",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
              <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Related:{" "}
          <Link className="text-accent hover:underline" href="/equipment/flanges-fittings-bolting">pipeline fittings</Link> ·{" "}
          <Link className="text-accent hover:underline" href="/blog/how-to-write-a-bill-of-quantities">how to write a bill of quantities</Link>
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
