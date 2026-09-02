import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              1. Information we collect
            </h2>
            <p>
              When you submit a request through our RFQ form or contact us by
              email or phone, we receive the information you provide:
              your name, company, email address, phone number and any equipment
              lists or documents you attach. We do not automatically collect
              personal data from browsing beyond standard, anonymous analytics
              (such as page views and referrers).
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              2. How we use your information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              inquiry and to manage the sourcing or procurement work you
              request. Equipment lists you share are used only for the purpose
              of obtaining quotations on your behalf and are not disclosed
              beyond the manufacturers involved in your inquiry, without your
              consent.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              3. Data sharing
            </h2>
            <p>
              We do not sell or rent your personal information. Technical
              details of your equipment requirements may be shared with
              manufacturers strictly for quotation purposes. RFQ submissions
              are processed through a third-party form delivery service
              (FormSubmit) solely to forward your message to our email inbox.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              4. Data retention and security
            </h2>
            <p>
              We retain correspondence and documents as long as needed to
              serve your request and to meet legal or contractual obligations.
              Reasonable measures are taken to protect your data.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-semibold text-foreground">
              5. Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting{" "}
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
