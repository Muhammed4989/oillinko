import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Oillinko is an oil and gas equipment sourcing and procurement consultancy based in Istanbul, Turkey, connecting buyers worldwide with verified manufacturers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Oillinko"
        subtitle="A sourcing and procurement consultancy for the oil and gas industry, based in Istanbul — the trading hub between Europe, the Middle East and Asia."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">What we do</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Oil and gas projects depend on equipment that meets exact
                specifications — the right standard, the right material, the
                right schedule, the right certificates. Getting that wrong
                stops projects and costs money. Oillinko exists to make sure it
                goes right.
              </p>
              <p>
                We receive equipment lists and bills of quantities from buyers,
                source each item from verified manufacturers, verify every
                quote against the project&apos;s technical requirements, and
                manage the order through inspection and delivery. Our clients
                get one accountable partner instead of chasing suppliers
                across borders.
              </p>
              <p>
                Based in {site.address}, we work with buyers and suppliers
                worldwide. Our home advantage is the Turkish manufacturing
                base — competitive, quality-certified production of flanges,
                fittings, fasteners, gaskets and specialized pipeline
                equipment — combined with easy access to suppliers across
                Europe, the Gulf and Asia.
              </p>
            </div>
            <h2 className="mt-12 text-2xl font-bold">Our approach</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Specification first",
                  d: "Every inquiry is checked against the client's standards and material requirements before a single supplier is contacted.",
                },
                {
                  t: "Vendor verification",
                  d: "Manufacturers are qualified on real evidence — factory capability, certificates, testing and export track record.",
                },
                {
                  t: "Full accountability",
                  d: "From quote to delivery we follow the order, verify documentation, and keep you informed at every step.",
                },
              ].map((x) => (
                <div key={x.t} className="rounded-lg border border-line bg-oil-800 p-5">
                  <h3 className="font-semibold text-accent">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="font-semibold">At a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted">Headquarters</dt>
                  <dd className="mt-0.5">{site.address}</dd>
                </div>
                <div>
                  <dt className="text-muted">Serving</dt>
                  <dd className="mt-0.5">Buyers &amp; operators worldwide</dd>
                </div>
                <div>
                  <dt className="text-muted">Sourcing from</dt>
                  <dd className="mt-0.5">Turkey, Europe, Gulf, Asia</dd>
                </div>
                <div>
                  <dt className="text-muted">Focus</dt>
                  <dd className="mt-0.5">Pipeline, process &amp; field equipment</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-line bg-oil-800 p-6">
              <h3 className="font-semibold">Get in touch</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  <a className="hover:text-accent" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href={site.whatsappLink}>
                    {site.whatsapp}
                  </a>
                </li>
                <li>
                  <a className="hover:text-accent" href={site.phoneLink}>
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
