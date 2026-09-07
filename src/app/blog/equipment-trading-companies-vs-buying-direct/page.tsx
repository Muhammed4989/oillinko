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

const post = getPost("equipment-trading-companies-vs-buying-direct")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "Is buying through a trading company more expensive than buying direct?",
    a: "Not necessarily, and there is no fixed rule. A trading company adds its own margin, but that can be offset — or more than offset — by consolidated freight, avoiding a poor-fit vendor, or pooling your order with others to reach a factory's minimum order quantity. Whether it nets out cheaper depends on the specific order, not the sourcing route in general.",
  },
  {
    q: "Can I use a sourcing partner for one item and go direct for everything else on the same project?",
    a: "Yes. Most buyers mix both routes on the same project — going direct for a manufacturer they already know well, and routing everything else through a sourcing partner. There is usually no exclusivity requirement either way.",
  },
  {
    q: "Does going through a sourcing partner mean I lose contact with the manufacturer?",
    a: "No. You still receive the full technical documentation, manufacturer's data book and certificates the equipment carries. What typically changes is who handles day-to-day commercial coordination and scheduling — that routes through the sourcing partner instead of a separate conversation with each factory's export department.",
  },
  {
    q: "What happens if the manufacturer a sourcing partner selected turns out to be a poor fit?",
    a: "Vetting reduces this risk but cannot eliminate it entirely — no screening process can fully substitute for a factory's actual performance on your specific order. A sourcing partner that stands behind its vetting should be willing to requote the item with an alternative qualified manufacturer rather than leaving you to resolve it directly with the factory.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          An oil & gas equipment buyer sourcing a pump package, a lot of
          valves or a pressure vessel has two basic routes to a quote:
          contact the manufacturer directly, or route the request through a
          trading or sourcing company that works with several manufacturers.
          Neither route is universally better. The difference shows up in
          lead time, minimum order quantities, vendor vetting, inspection
          coordination and how many separate vendor relationships you end up
          managing. This article sets out what actually changes between the
          two, so you can decide which fits a given order, rather than
          defaulting to whichever route your team happened to use last time.
        </p>

        <h2 id="what-changes-when-you-buy-direct" className="mt-12 text-xl font-bold">
          What changes when you buy direct from the manufacturer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Buying direct means a one-to-one commercial relationship with the
          factory&apos;s own sales and export team. You negotiate price and
          terms directly, and you are subject to that single factory&apos;s
          production backlog, its minimum order quantity (MOQ) policy, and
          however its export documentation process happens to work for your
          country and incoterm. Everything upstream of the purchase order is
          also on you: checking whether the factory&apos;s quality
          certifications are current, whether it has actually exported this
          class of equipment to a similar destination before, reviewing the
          quote line by line against your specification, and arranging your
          own inspection or witnessing if a factory acceptance test is
          required. None of this is difficult if you already do it
          routinely — it just means the workload sits entirely with your own
          team.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Buying direct also means the commercial relationship, including
          any price history and payment terms you build up over repeat
          orders, sits with your organisation rather than a third party.
          For a buyer with an established procurement department and a
          long-standing account with a specific factory, that is often
          exactly the point — there is no reason to add an intermediary to
          a relationship that already works well and where the factory&apos;s
          MOQ, lead time and export process are already a known quantity.
        </p>

        <h2 id="what-changes-when-a-sourcing-partner-is-involved" className="mt-12 text-xl font-bold">
          What changes when a sourcing or trading company is involved
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          With a sourcing partner in between, the same request for quotation
          (RFQ) is issued once and circulated in parallel to several
          manufacturers the partner has already vetted, rather than being
          rewritten and re-sent to each factory separately. The partner&apos;s
          own technical staff review the returned quotes against your
          specification before you see them, filtering out offers that
          quietly miss a material grade, pressure class or testing
          requirement. If the order spans more than one product category —
          say pumps from one factory and valves from another — a sourcing
          partner can consolidate the cargo into one shipment under one set
          of shipping documents, instead of you tracking two or three
          separate consignments. You also deal with a single commercial
          point of contact, ideally one already operating in your language
          and a workable time zone, instead of coordinating with several
          export departments on their own schedules.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          None of this removes the buyer&apos;s own decision-making. A sourcing
          partner narrows the field to vendors and quotes worth your time,
          and coordinates the logistics around the order — it does not
          choose the winning bid for you, and it should not be expected to
          absorb technical decisions that belong with your own engineering
          team. What it changes is how much of the surrounding
          administrative and coordination work you have to do yourself to
          get there.
        </p>

        <h2 id="direct-vs-sourcing-partner-side-by-side" className="mt-12 text-xl font-bold">
          Direct vs. sourcing partner, side by side
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The trade-offs are rarely all-or-nothing, but they follow a
          consistent pattern across most orders. It is worth reading this
          less as &quot;one column is always better&quot; and more as a map of
          which tasks move from your desk to someone else&apos;s when a
          sourcing partner is added:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Factor</th>
                <th className="px-4 py-3">Buying direct</th>
                <th className="px-4 py-3">Through a sourcing partner</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Vendor vetting", "Your own responsibility, each time", "Already done before the RFQ is sent"],
                ["Production scheduling", "Fixed to that one factory's backlog", "Can be weighed across qualified alternatives"],
                ["Minimum order quantity", "Set by the single factory", "Sometimes absorbed by pooling with other demand"],
                ["Multi-vendor shipments", "You manage each consignment separately", "Can be consolidated under one contact"],
                ["Inspection / witnessing", "You book and track it yourself", "Coordinated as part of the order"],
                ["Language & time zone", "Whatever the factory's export team offers", "Matched to you where the partner supports it"],
                ["Commercial relationship", "Direct with the factory, long-term", "With the partner; they manage the factory side"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="when-buying-direct-usually-makes-more-sense" className="mt-12 text-xl font-bold">
          When buying direct usually makes more sense
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Buying direct tends to work best when most of the following are
          true at the same time, rather than just one of them:
        </p>
        <CheckList
          items={[
            "A single, large order from one manufacturer you already have an established, verified relationship with",
            "Your own team already handles vendor vetting, technical quote review and inspection scheduling routinely",
            "The order comfortably meets that factory's minimum order quantity on its own",
            "The manufacturer's export team already has a track record shipping to your country and preferred incoterm",
            "You want to hold the commercial relationship and price history directly for repeat orders",
          ]}
        />

        <h2 id="when-a-sourcing-partner-usually-makes-more-sense" className="mt-12 text-xl font-bold">
          When a sourcing partner usually makes more sense
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The reverse pattern is just as consistent — a sourcing partner
          tends to earn its keep when several of these apply:
        </p>
        <CheckList
          items={[
            "The order spans several product categories from different manufacturers you would otherwise vet and manage separately",
            "You don't have an existing, verified relationship with a suitable factory for this specification",
            "The order size sits below a factory's usual MOQ on its own, but works once pooled with other demand",
            "You want an independent technical read on quotes before committing to a purchase order",
            "Language, time zone or export-documentation differences make direct negotiation slower than it needs to be",
          ]}
        />

        <h2 id="many-buyers-use-both-depending-on-the-order" className="mt-12 text-xl font-bold">
          Many buyers use both, depending on the order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          In practice, this is rarely a once-and-for-all decision for an
          entire procurement department. A buyer with a long-standing
          account for, say, a specific pump line may go direct for repeat
          orders of that item, while routing a one-off requirement for
          valves, gaskets and instrumentation from three unfamiliar
          factories through a sourcing partner on the same project. The
          two routes are not mutually exclusive, and treating the choice
          order-by-order — rather than adopting one policy for every
          purchase — usually produces the better outcome across a full
          project scope.
        </p>

        <h2 id="a-short-framework-for-deciding" className="mt-12 text-xl font-bold">
          A short framework for deciding
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Before defaulting to whichever route you used last time, it is
          worth asking four questions specific to the order in front of you:
          Do I already have a vetted relationship with the right factory for
          this exact specification? Is this a single-category order or does
          it span several product types from different manufacturers? Does
          my team have the in-house capacity to vet a new vendor, review
          quotes technically and schedule inspection this quarter? And is
          the order size comfortably above typical MOQs, or uncomfortably
          below them? A buyer who answers &quot;yes, yes, yes, above&quot; usually
          does fine going direct. A buyer who answers &quot;no&quot; to any two of
          the first three questions is usually better served routing the
          order through a sourcing partner instead.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          For a closer look at what that coordination work actually
          involves, see{" "}
          <Link
            className="text-accent hover:underline"
            href="/blog/what-an-oil-gas-equipment-sourcing-partner-actually-does"
          >
            what a sourcing partner actually does beyond placing the order
          </Link>
          . And whichever route you choose, a clear{" "}
          <Link className="text-accent hover:underline" href="/blog/how-to-write-a-bill-of-quantities">
            bill of quantities
          </Link>{" "}
          is what makes the resulting quotes comparable in the first place.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          If you would rather not manage vendor vetting, multi-factory
          coordination and inspection scheduling on your own,{" "}
          <Link className="text-accent hover:underline" href="/rfq">
            send Oillinko your RFQ or bill of quantities
          </Link>{" "}
          and we will circulate it to verified manufacturers, review the
          quotes against your specification, and coordinate shipment as a
          single point of contact.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
