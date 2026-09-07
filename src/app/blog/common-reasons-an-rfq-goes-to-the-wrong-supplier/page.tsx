import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader,
  CheckList,
  Faq,
  JsonLd,
  Prose,
  RelatedPosts,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/components/BlogChrome";
import { getPost } from "@/lib/blog";

const post = getPost("common-reasons-an-rfq-goes-to-the-wrong-supplier")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Is a supplier who can't quote my spec necessarily acting in bad faith?",
    a: "Usually not. Most mismatched RFQs land on a genuine manufacturer who simply doesn't build the item in question, or doesn't hold the specific standard qualification asked for — for instance a valve factory receiving a request for forged fittings. Bad faith exists in the market, but a slow reply, a vague quote, or a polite decline is far more often just a capability mismatch than a deliberate misrepresentation.",
  },
  {
    q: "How can a buyer check a vendor's real specialization before sending an RFQ?",
    a: "Ask directly for reference production of the exact item and standard, not just the product family — a company that makes valves does not automatically forge fittings, even though both might appear under 'pipeline equipment' in a directory listing. A specific, recent production reference for the same standard and size range is a stronger signal than a general capability statement.",
  },
  {
    q: "Why would a large factory ignore or deprioritize a small RFQ?",
    a: "Manufacturing capacity is finite and factories naturally prioritize orders that make efficient use of a production run — a request for a handful of pieces can sit behind a queue of larger orders, or get quoted at a price that reflects the factory's lack of interest rather than the item's real cost. This is less about the buyer being unimportant and more about how a factory schedules its floor.",
  },
  {
    q: "Does going through a sourcing partner guarantee a better-fit supplier?",
    a: "It shifts the vetting work rather than eliminating the need for it. A sourcing partner that actually maintains verified manufacturer relationships and checks quotes against the spec before passing them on removes most of the mismatch risk described here; one that simply forwards an RFQ to whichever contacts it has on file does not add much beyond what a buyer could find with their own search.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          An RFQ that goes out to ten suppliers and comes back with three
          vague quotes, two outright declines and five silences is not
          usually a sign of a bad market — it is usually a sign the RFQ went
          to the wrong ten suppliers. Here are the specific, recurring
          reasons that happens, and what a sourcing partner should be doing
          before an RFQ is ever sent to filter for genuine fit rather than
          just contact-list coverage.
        </p>

        <h2 id="wrong-supplier-does-not-mean-a-scam" className="mt-12 text-xl font-bold">
          &ldquo;Wrong supplier&rdquo; usually does not mean a scam
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          It is tempting to read a bad batch of RFQ responses as evidence of
          an unreliable supplier market. In practice, the far more common
          cause is a mismatch between what the RFQ asked for and what the
          recipient actually does, makes, or has capacity for at that
          moment. A mismatched RFQ still costs real time — every vague or
          off-spec quote has to be read, clarified or rejected — but the fix
          is upstream of supplier evaluation: it is sending the request to
          the right list in the first place.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The time cost compounds quickly on a project with a real schedule.
          A single mismatched RFQ costs a few days of back-and-forth before
          it is abandoned; a batch of ten RFQs where six were sent to the
          wrong type of supplier can cost weeks, since the buyer typically
          does not find out a given quote is unusable until well into the
          clarification process, and by then the window to send a
          replacement RFQ to a better-fitting vendor and still hit the
          original delivery date may already have closed. The practical
          upshot is that supplier vetting is not a nice-to-have quality
          step layered on top of sourcing — on a schedule-driven project, it
          is what keeps the schedule itself intact.
        </p>

        <h2 id="trading-company-vs-manufacturer-confusion" className="mt-12 text-xl font-bold">
          Trading company vs. manufacturer confusion
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A significant share of listings on general B2B directories are
          trading companies or agents, not the factories that actually
          produce the goods — and the listing does not always make that
          distinction obvious. Sending an RFQ that assumes direct factory
          pricing and factory-level technical answers to what is actually a
          reseller produces a quote that looks plausible but carries an
          unknown markup and a second, invisible layer of communication
          between the buyer and whoever is really making the part. This is
          not automatically a problem — a well-run trading relationship can
          still deliver good pricing and service — but the buyer should know
          which one they are dealing with, since technical questions about
          manufacturing process, material traceability or production
          capacity need to reach an actual factory to be answered
          accurately.
        </p>

        <h2 id="specialization-mismatch" className="mt-12 text-xl font-bold">
          The vendor&rsquo;s real specialization doesn&rsquo;t match the spec
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Broad category listings hide a lot of specialization detail. A
          company listed under &ldquo;pipeline equipment&rdquo; might
          specialize in butt-weld fittings and have never forged a flange;
          another might build cast valve bodies but have no in-house forging
          capacity for a fitting spec that calls for it. Because these
          products often sit next to each other on a buyer&rsquo;s bill of
          quantities, it is easy to assume they come from the same type of
          factory — they frequently do not. An RFQ sent without checking the
          vendor&rsquo;s actual production method against the standard being
          requested (forged vs. cast, seamless vs. welded, machined vs.
          fabricated) routinely reaches a company that could technically
          reply, but would be sourcing the item from a third party itself
          rather than manufacturing it — adding a hidden layer the buyer
          thought they had avoided by going to a &ldquo;manufacturer&rdquo;
          directly.
        </p>

        <h2 id="capacity-mismatch" className="mt-12 text-xl font-bold">
          Capacity mismatch: too small, too large, or too specialized
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Fit is not only about product type — it is also about whether the
          quantity and timeline in the RFQ suit how the vendor actually
          runs its production floor. A large, export-focused factory may
          give a slow, unenthusiastic response to a request for a handful
          of pieces, since a small order does not justify opening a
          production run at a competitive price. Conversely, a smaller
          workshop capable of excellent quality on a modest order can be the
          wrong choice for a large multi-hundred-piece requirement with a
          fixed delivery date, simply because it lacks the parallel capacity
          to hit that volume on schedule. Neither vendor is a bad supplier
          in the abstract — each is a mismatch for that specific RFQ&rsquo;s
          scale, which only becomes visible once someone actually checks
          production capacity against order size rather than sending the
          same RFQ to every name on a list regardless of typical order
          profile.
        </p>

        <h2 id="geography-and-communication-mismatches" className="mt-12 text-xl font-bold">
          Geography, language and Incoterm familiarity mismatches
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A vendor can be a genuinely good manufacturer and still be a poor
          fit for a specific buyer because of gaps that have nothing to do
          with production quality. A factory accustomed to domestic sales
          may have never quoted an export shipment on{" "}
          <a
            className="text-accent hover:underline"
            href="https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Incoterms&reg; 2020
          </a>{" "}
          terms before, and can misquote the point at which risk and cost
          transfer, or omit export packing and documentation costs entirely
          because it has never had to price them. A time zone gap of eight
          hours or more turns a same-day technical clarification into a
          two-day exchange, which is manageable for a single RFQ but becomes
          a serious drag across a multi-vendor project running on a fixed
          schedule. None of this means the vendor cannot ultimately deliver
          a good product — it means the RFQ process itself will take
          noticeably longer and carry more room for misunderstanding on
          commercial terms, which is worth knowing before committing to a
          delivery date that assumes smooth, fast communication.
        </p>

        <h2 id="no-spec-cross-check-before-quoting" className="mt-12 text-xl font-bold">
          No spec cross-check before the quote goes out
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The most costly version of a wrong-supplier RFQ is the one that
          comes back looking right. A vendor unfamiliar with a specific
          standard&rsquo;s exact requirements can quote a product that
          resembles the specification closely enough to pass a quick review,
          while differing on a detail that only surfaces at inspection or
          during installation — a pressure class, a facing type, or a
          material grade substituted for something &ldquo;equivalent.&rdquo;
          This is less a supplier-selection problem than a quote-review
          problem, but the two compound each other: a vendor genuinely
          unfamiliar with the standard is also the one least likely to flag
          its own quote as a partial match, since it may not fully recognize
          the gap itself.
        </p>

        <h2 id="how-a-sourcing-partner-filters-for-fit" className="mt-12 text-xl font-bold">
          How a sourcing partner filters for fit before an RFQ goes out
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The fixes for all of the above happen before quotes are requested,
          not after they come back. A sourcing partner maintaining verified
          manufacturer relationships should be able to say, before an RFQ is
          sent:
        </p>
        <CheckList
          items={[
            "Whether each recipient is the actual manufacturer or a reseller, and disclose that distinction to the buyer up front",
            "Whether the recipient's production method (forged, cast, seamless, welded, machined) matches what the specification actually requires",
            "Whether the requested quantity and delivery date suit that vendor's typical order size and current production load",
            "Which vendors on the list have a demonstrated, recent production reference for the exact standard and class being requested",
            "Whether returned quotes are checked line-by-line against the requested standard before being passed to the buyer, not simply forwarded as received",
          ]}
        />
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          This filtering is most of what separates a sourcing partner worth
          using from a simple RFQ-forwarding service — the value is in
          knowing, ahead of time, which of dozens of possible recipients
          actually fit a given request. Oillinko circulates every RFQ only
          to manufacturers already vetted against this kind of fit, and
          checks every returned quote against the requested standard before
          it reaches the buyer.{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            Send us your specification
          </Link>{" "}
          and we will tell you plainly if something in it does not match
          what a given vendor actually builds, rather than passing along a
          quote that only looks right. If your project spans several
          vendors at once, see our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/consolidated-shipments-and-multi-vendor-orders">
            consolidated shipments and multi-vendor orders
          </Link>{" "}
          for what happens after the right suppliers are found.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
