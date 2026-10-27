import type { Metadata } from "next";
import Image from "@/components/SiteImage";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Quality planning for oil and gas procurement: confirm applicable standards, material certification, testing, inspection and documentation for each proposed order.",
  alternates: { canonical: "/quality" },
};

const standards = [
  { code: "ANSI B16.5", text: "Pipe flanges and flanged fittings — dimensions and pressure ratings" },
  { code: "ANSI B16.9", text: "Factory-made wrought butt welding fittings" },
  { code: "API 601 / ASME B16.20", text: "Metallic gaskets for pipe flanges — spiral wound" },
  { code: "API 5L", text: "Line pipe for oil and gas transmission" },
  { code: "API RP 2201", text: "Safe hot tapping practices in petroleum and chemical industries" },
  { code: "ASME B31", text: "Pressure piping code — reinforcement and design" },
  { code: "ASME Section IX", text: "Welding qualifications for welders and procedures" },
  { code: "ASTM A105", text: "Carbon steel forgings for piping applications" },
  { code: "ASTM A234-WPB", text: "Carbon steel pipe fittings for moderate and high temperature" },
  { code: "ASTM A516 Gr. 70", text: "Carbon steel plates for pressure vessels" },
  { code: "ASTM A193 Gr. B7", text: "Alloy steel bolting for high temperature service" },
  { code: "ASTM A194 Gr. 2H", text: "Carbon steel nuts for high pressure service" },
  { code: "ANSI B18.2 / B1.1", text: "Bolt and nut dimensions and unified threads" },
  { code: "EN 10204 Type 3.1", text: "Material test certificates — inspection certificate 3.1" },
];

const checks = [
  {
    title: "Material certification",
    text: "Confirm the required material certificates and traceability for each item, including EN 10204 Type 3.1 where specified, and review the evidence against the order requirements.",
  },
  {
    title: "Hydrostatic testing",
    text: "Agree applicable pressure and leak testing, acceptance requirements and reporting before accepting the proposed supply. Testing must be supported by the records required for the order.",
  },
  {
    title: "Weld compliance",
    text: "Confirm applicable welding procedures, qualifications and records with the proposed supplier, including ASME Section IX where specified for the order.",
  },
  {
    title: "Dimensional verification",
    text: "Define applicable dimensional standards, tolerances, inspection scope and records for the quoted items before order approval.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHeader
        title="Quality & Compliance"
        subtitle="Review the evidence required for each item. Applicable standards, editions, inspection and documentation must be confirmed for the proposed order."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative mb-12 h-56 overflow-hidden rounded-lg border border-line sm:h-72" title="Industrial refinery at night">
          <Image
            src="/images/night-refinery.jpg"
            alt="Industrial refinery at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oil-900/60 to-transparent" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {checks.map((c) => (
            <div key={c.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h2 className="text-lg font-semibold text-accent">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Standards to confirm for your project</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {standards.map((s) => (
              <div
                key={s.code}
                className="rounded-lg border border-line bg-oil-900 p-4"
              >
                <p className="font-mono text-sm font-bold text-accent">{s.code}</p>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
