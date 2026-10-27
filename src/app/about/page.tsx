import type { Metadata } from "next";
import Image from "@/components/SiteImage";
import { CtaBand, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Oillinko is an international oil and gas equipment sourcing and procurement consultancy, with its office in Istanbul, Turkey.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Oillinko"
        subtitle="An international sourcing and procurement consultancy for the oil and gas industry — office in Istanbul, serving buyers across the Middle East, Europe, Asia and beyond."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative mb-12 h-64 overflow-hidden rounded-lg border border-line sm:h-80" title="Oil refinery complex near water">
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
                stops projects and costs money. Oillinko helps buyers define and assess these
                procurement requirements.
              </p>
              <p>
                We receive equipment lists and bills of quantities from buyers,
                use those requirements to guide sourcing enquiries, and assess
                proposed quotations against the agreed technical scope.
                Manufacturer qualification, inspection, documentation and
                delivery responsibilities need to be agreed for each order.
              </p>
<p>
                Operating from our head office in {site.headOffice.city},{" "}
                {site.headOffice.country}, we work with buyers and suppliers worldwide.
                Our sourcing enquiries cover flanges,
                fittings, fasteners, gaskets and specialized pipeline
                equipment. Origin, conformity documents, availability and
                delivery terms require confirmation for the proposed item
                and order; a catalogue description is not proof of certification.
              </p>
            </div>
            <h2 className="mt-12 text-2xl font-bold">Our approach</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Specification first",
                  d: "Start with the applicable standards, material requirements and scope so quotations can be compared on the same basis.",
                },
                {
                  t: "Vendor verification",
                  d: "Request relevant capability, certificate and testing evidence for the proposed manufacturer and scope. Verify document applicability before approval.",
                },
                {
                  t: "Full accountability",
                  d: "Agree who handles documentation, inspection, delivery updates and exceptions in the written order scope.",
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
