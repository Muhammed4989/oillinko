import type { Metadata } from "next";
import { CtaBand, PageHeader } from "@/components/ui";
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
        subtitle="Send us your bill of quantities or equipment list. We'll return competitive offers from verified manufacturers, verified against your specifications."
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="rounded-xl border border-line bg-oil-800 p-6 sm:p-8">
          <RfqForm />
        </div>
        <div className="mt-6 rounded-lg border border-line bg-oil-800 p-6 text-sm leading-relaxed text-muted">
          <p className="font-semibold text-foreground">Prefer email or WhatsApp?</p>
          <p className="mt-2">
            Send your documents directly to{" "}
            <a className="text-accent hover:underline" href="mailto:info@oillinko.com">
              info@oillinko.com
            </a>{" "}
            or message us on WhatsApp at{" "}
            <a className="text-accent hover:underline" href="https://wa.me/905303072274">
              +90 530 307 2274
            </a>
            . We respond within 24 hours.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
