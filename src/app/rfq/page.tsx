import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";
import RfqForm from "@/components/RfqForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send your bill of quantities (BOQ) or equipment list to Oillinko and receive competitive offers from verified oil and gas equipment manufacturers — checked against your specifications.",
  alternates: { canonical: "/rfq" },
};

export default function RfqPage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        subtitle="Send us your bill of quantities or equipment list. We'll review your requirements and contact suitable suppliers for quotations."
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="rounded-xl border border-line bg-oil-800 p-6 sm:p-8">
          <RfqForm />
        </div>
        <div className="mt-6 rounded-lg border border-line bg-oil-800 p-6 text-sm leading-relaxed text-muted">
          <p className="font-semibold text-foreground">Prefer email or phone?</p>
          <p className="mt-2">
            Send your documents directly to{" "}
            <a className="text-accent hover:underline" href="mailto:info@oillinko.com">
              info@oillinko.com
            </a>{" "}
            or call our office at{" "}
            <a className="text-accent hover:underline" href={`tel:${site.headOffice.phone.replace(/\s/g, "")}`}>
              {site.headOffice.phone}
            </a>
            . We aim to acknowledge your request within one business day.
          </p>
        </div>
      </section>
    </>
  );
}
