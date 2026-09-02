import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Oillinko is an international oil and gas equipment sourcing and procurement consultancy, headquartered in Istanbul, Turkey, with regional offices in London, Erbil and Amman.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Oillinko"
        subtitle="An international sourcing and procurement consultancy for the oil and gas industry — head office in Istanbul, with regional offices in London, Erbil and Amman, serving buyers across the Middle East, Europe, Asia and beyond."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative mb-12 h-64 overflow-hidden rounded-lg border border-line sm:h-80">
          <Image
            src="/images/about-refinery.jpg"
            alt="Oil refinery complex near water"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oil-900/60 to-transparent" />
        </div>
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
                Operating from our head office in {site.headOffice.city},{" "}
                {site.headOffice.country}, and regional offices in Istanbul,
                Erbil and Amman, we work with buyers and suppliers worldwide.
                Our sourcing network spans certified production of flanges,
                fittings, fasteners, gaskets and specialized pipeline
                equipment across Europe, the Gulf and Asia — combined with
                fast access to suppliers and a single point of contact from
                quote to delivery.
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
                  <dt className="text-muted">Head Office</dt>
                  <dd className="mt-0.5">{site.headOffice.address}</dd>
                </div>
                <div>
                  <dt className="text-muted">Serving</dt>
                  <dd className="mt-0.5">Buyers &amp; operators worldwide</dd>
                </div>
                <div>
                  <dt className="text-muted">Sourcing from</dt>
                  <dd className="mt-0.5">Europe, Gulf, Asia &amp; beyond</dd>
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
                  {site.headOffice.city}:{" "}
                  <a
                    className="hover:text-accent"
                    href={`tel:${site.headOffice.phone.replace(/\s/g, "")}`}
                  >
                    {site.headOffice.phone}
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
