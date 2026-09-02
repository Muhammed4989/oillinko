import Link from "next/link";
import Image from "next/image";
import { CtaBand, SectionTitle } from "@/components/ui";
import { categories } from "@/lib/equipment";
import { blogPosts } from "@/lib/blog";

const latestPosts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 4);

const steps = [
  {
    n: "01",
    title: "Send us your BOQ",
    text: "Share your bill of quantities, equipment list, or just a description of what your project needs.",
  },
  {
    n: "02",
    title: "We source and quote",
    text: "We match every line item to verified manufacturers, check quotes against your specifications, and return a consolidated offer.",
  },
  {
    n: "03",
    title: "You receive, inspected",
    text: "We manage the order, quality inspection, documentation and delivery — you receive conforming equipment on time.",
  },
];

const reasons = [
  {
    title: "Specs that hold up",
    text: "Every quote is checked against your technical requirements — API, ANSI, ASME, ASTM — before it reaches you.",
  },
  {
    title: "Verified manufacturers only",
    text: "Real factories with real certificates. We qualify suppliers before we ever send them your inquiry.",
  },
  {
    title: "One accountable partner",
    text: "One contract, one point of contact, one delivery. We take responsibility for the whole chain.",
  },
  {
    title: "Global network, regional reach",
    text: "Head office in Istanbul, with regional offices in London, Erbil and Amman — fast, local access to markets and manufacturers worldwide.",
  },
];

const faqs = [
  {
    q: "What equipment does Oillinko source?",
    a: "We source oil and gas equipment across pipeline construction, maintenance and live-line work: hot tap and line stop equipment (saddles, line stop fittings, pneumatic stoppers), pipeline fittings, flanges, spiral wound gaskets, stud bolts and nuts, pipe cutters — plus valves and related items on a project basis, to your specification and standards.",
  },
  {
    q: "Do you supply to our material certificates and standards?",
    a: "Yes. Every item is sourced to the standard you specify — API, ANSI, ASME, ASTM — and pressure-containing parts are supplied with material certificates (typically EN 10204 Type 3.1) and hydrostatic / dimensional test reports where required.",
  },
  {
    q: "Can you source our exact bill of quantities?",
    a: "That is our core service. Send us your bill of quantities or equipment list — Excel, PDF or Word — and we turn it into a structured RFQ, check every offer against your specification, and return one consolidated, comparable quote.",
  },
  {
    q: "Can you supply small quantities and spares?",
    a: "Yes. We regularly supply line pipe fittings, flanges, gaskets, stud bolts and stoppers in maintenance quantities — a few pieces or a few thousand. If it can be specified, it can be bundled and sourced.",
  },
  {
    q: "How fast do you respond to an RFQ?",
    a: "We respond within one business day to every request, confirming the specification review and the expected return of the consolidated offer. For urgent maintenance requirements, contact us directly by phone or email.",
  },
  {
    q: "Which countries and terms do you deliver to?",
    a: "We ship worldwide from our manufacturing network across Europe, the Gulf and Asia, on the Incoterm you prefer — EXW, FOB, CFR, CIF or DAP. We manage export documentation and freight coordination to your site or port.",
  },
];

export const metadata = {
  title: "Oil & Gas Equipment Sourcing & Procurement | Oillinko",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Image
          src="/images/hero-refinery.jpg"
          alt="Oil refinery at sunset — oil and gas equipment sourcing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oil-900/80 via-oil-900/70 to-oil-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-oil-900/90 to-oil-900/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-oil-900 px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Istanbul, Turkey — serving buyers worldwide
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Oil &amp; gas equipment,{" "}
            <span className="text-accent">sourced right</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Oillinko is a sourcing and procurement consultancy for the oil and
            gas industry. We turn your equipment lists into competitive offers
            from verified manufacturers — compliant with the exact
            specifications your project demands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi"
            >
              Request a Quote
            </Link>
            <Link
              href="/equipment"
              className="rounded border border-line bg-oil-900 px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Browse Equipment
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted">
            {["ANSI B16.5", "API 601", "ASME B16.20", "ASTM A193 B7", "EN 10204 3.1"].map(
              (s) => (
                <span key={s} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="How it works"
          title="Three steps from BOQ to delivered equipment"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-line bg-oil-800 p-6">
              <p className="font-mono text-3xl font-bold text-accent">{s.n}</p>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-oil-800">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle
            eyebrow="Equipment categories"
            title="What we source"
            subtitle="From line pipe fittings to live-line maintenance equipment — we source across the full range of oil and gas field equipment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/equipment/${c.slug}`}
                className="group overflow-hidden rounded-lg border border-line bg-oil-900 transition-colors hover:border-accent"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oil-900/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.short}</p>
                  <p className="mt-4 text-xs font-medium text-accent">
                    {c.totalItems} reference items →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="Why Oillinko"
          title="Procurement you can rely on"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="text-lg font-semibold text-accent">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="Blog"
          title="Latest from the blog"
          subtitle="Practical, technical — learn the standards and the parts so you can source them with confidence."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((g) => (
            <Link
              key={g.slug}
              href={`/blog/${g.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-oil-800 transition-colors hover:border-accent"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oil-900/80 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-muted">{g.readTime}</p>
                <h3 className="mt-1.5 text-base font-semibold transition-colors group-hover:text-accent">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.short}</p>
                <p className="mt-4 mt-auto pt-3 text-xs font-medium text-accent">
                  Read article →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-hi"
          >
            View all articles →
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-oil-800">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions buyers ask us first"
            subtitle="The answers we give most often when a project, a plant or a maintenance team needs equipment sourced right."
          />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-line bg-oil-900 open:border-accent"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg
                    className="shrink-0 text-accent transition-transform group-open:rotate-45"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
