import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              1. Services
            </h2>
            <p>
              {site.legalName} (&quot;Oillinko&quot;) provides sourcing, procurement and
              related consultancy services for oil and gas equipment. Quotations
              obtained through Oillinko are provided in good faith based on
              information supplied by the client; final commercial terms are
              confirmed in writing per order.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              2. Client responsibility
            </h2>
            <p>
              Clients are responsible for providing accurate and complete
              specifications. Oillinko relies on the information provided for
              sourcing and cannot guarantee the accuracy of third-party
              manufacturer offers. Specific technical requirements should be
              confirmed with the client&apos;s engineering team before ordering.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              3. Quotations and orders
            </h2>
            <p>
              All prices, lead times and delivery terms are subject to written
              confirmation. Orders become binding only upon written acceptance
              by both parties. Payment and delivery terms are agreed per order.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              4. Limitation of liability
            </h2>
            <p>
              Oillinko acts as an intermediary and does not manufacture
              equipment. To the extent permitted by law, liability is limited
              to the value of fees paid for the services concerned. Product
              warranties, where applicable, rest with the manufacturer.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              5. Contact
            </h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
