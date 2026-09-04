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

const post = getPost("pump-factory-acceptance-testing-and-commissioning-checklist")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

const faqs = [
  {
    q: "What is the difference between a witnessed and an unwitnessed factory test?",
    a: "A witnessed test is performed with the buyer or its third-party inspector physically present, able to verify the test setup, instrument calibration and results in real time. An unwitnessed (documented) test is run by the manufacturer alone, with results reported afterward in a certified test report. Between the two sits an observed or monitored level, where the inspector reviews the setup and may check in on the test without being present for the full duration. The level required is a purchasing decision, stated in the RFQ and purchase order, not something left to the vendor's discretion once the order is placed.",
  },
  {
    q: "Do all pumps need a mechanical run test?",
    a: "No. A mechanical run test is typically specified for pumps in critical or continuous services, or where the buyer's specification or API 610 datasheet calls for it explicitly, rather than for every pump regardless of service. It is common practice to run it for a period at rated conditions once bearing temperatures have stabilized, checking vibration, bearing temperature and seal or packing leakage against acceptance limits, but the requirement itself is a datasheet decision agreed before the order is placed, not an automatic default on every pump.",
  },
  {
    q: "What is a string test and when is it worth requesting?",
    a: "A string test (also called a complete unit test) runs the pump coupled to its actual job driver, gearbox and other train components together, rather than testing the pump alone against a test-stand motor. It reveals coupled-train issues — torsional behavior, coupling spacer dynamics, combined vibration signatures — that a bare pump test cannot show. It is optional under API 610 and adds cost and schedule, so it is usually reserved for large or critical trains (compressor-class drivers, gearboxes, multistage high-speed pumps) rather than requested as standard practice on every order.",
  },
  {
    q: "What is the actual difference between FAT and commissioning?",
    a: "Factory acceptance testing (FAT) happens at the manufacturer's works before shipment, confirming the pump meets its hydraulic, mechanical and material requirements in a controlled test-stand environment. Commissioning happens on site after installation, confirming the pump as actually installed — with its real piping, alignment, instrumentation and control system — is ready for and then successfully reaches normal operation. A pump can pass FAT cleanly and still fail commissioning if site alignment, piping strain, or auxiliary systems were not handled correctly, which is why the two are separate checkpoints rather than one continuous approval.",
  },
];

export default function Page() {
  return (
    <>
      <BlogPostHeader post={post} />
      <Prose>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          A pump that passes every factory test can still fail on site, and a
          pump that was never properly tested at the factory can hide a
          problem until it is far more expensive to fix. Factory acceptance
          testing (FAT) and site commissioning are two separate checkpoints
          that catch different classes of problems, and a buyer who treats
          them as one continuous approval usually finds out the difference
          the hard way. Here is what each stage should actually cover.
        </p>

        <h2 id="fat-and-commissioning-two-different-checkpoints" className="mt-12 text-xl font-bold">
          FAT and commissioning: two different checkpoints
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          FAT happens at the manufacturer&rsquo;s works, before the pump ships,
          on a test stand built and calibrated by the vendor. It confirms
          the pump itself — as built — meets its hydraulic performance,
          mechanical integrity and material requirements under controlled
          conditions. Commissioning happens afterward, on site, once the
          pump has been installed on its actual foundation with its actual
          piping, coupling alignment, instrumentation and control system.
          Commissioning confirms the installation as a whole, not just the
          pump, is ready to run and then actually reaches stable operation.
          A pump can pass FAT without a single deviation and still run into
          trouble at commissioning if the piping was not properly supported,
          the foundation grouting settled, or the alignment shifted during
          transport — which is precisely why relying on FAT results alone
          and skipping a disciplined commissioning checklist is a false
          economy.
        </p>

        <h2 id="witness-levels-what-the-buyer-actually-attends" className="mt-12 text-xl font-bold">
          Witness levels: what the buyer actually attends
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Not every test needs the buyer standing at the test stand. Most
          specifications define a small set of witness levels, similar to
          the logic covered in our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/third-party-inspection-tpi-oil-and-gas-equipment">
            third-party inspection
          </Link>
          : witnessed, where the buyer or its inspector is physically present
          for the full test; observed or monitored, where the inspector
          reviews the setup and checks in without necessarily staying for
          the entire duration; and documented (unwitnessed) review, where the
          manufacturer runs the test alone and reports results afterward in
          a certified report. Which level applies to which test — hydrostatic,
          performance, mechanical run, NPSH — needs to be agreed and written
          into the purchase order before the pump is built, not requested
          after the manufacturer has already scheduled its own internal test
          date. A vendor is under no obligation to delay or repeat a test
          because a witness request arrived late.
        </p>

        <h2 id="the-core-factory-tests" className="mt-12 text-xl font-bold">
          The core factory tests
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A typical centrifugal pump FAT package for oil and gas service
          draws on several distinct tests, each checking a different
          failure mode rather than repeating the same check:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-oil-800 text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Test</th>
                <th className="px-4 py-3">What it confirms</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hydrostatic test", "Pressure-containing parts (casing, cover) hold rated test pressure without leakage or structural failure"],
                ["Performance test", "Head, flow and efficiency match the quoted curve, per HI 14.6 or ISO 9906, across multiple points across the operating range rather than one design point"],
                ["NPSH test", "The pump's actual NPSH-required curve, not just a calculated estimate, confirmed at the flow points that matter most to the buyer's operating range"],
                ["Mechanical run test", "Bearing temperature, vibration and seal or packing leakage stay within limits at rated conditions over a sustained run once temperatures stabilize"],
                ["String test (optional)", "The pump running coupled to its actual driver, gearbox and other train components, revealing coupled-train vibration or torsional issues a bare pump test cannot show"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-line/60 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{r[0]}</td>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Not every service warrants all five. Hydrostatic and performance
          tests are close to universal; NPSH testing, a full mechanical run
          test and a string test are more commonly reserved for critical,
          continuous or high-energy services, and should be called out
          explicitly on the datasheet or inspection and test plan rather
          than assumed.
        </p>

        <h2 id="what-a-fat-checklist-should-actually-cover" className="mt-12 text-xl font-bold">
          What a FAT checklist should actually cover
        </h2>
        <CheckList
          items={[
            "Calibration certificates for the test instruments (pressure gauges, flow meters, vibration probes) are current and traceable, not just present",
            "Material and NDE reports for pressure-containing parts have been reviewed and closed out before the test starts, not left as an open item",
            "The performance test covers multiple points across the operating range, not only the single rated point",
            "Vibration and bearing temperature readings are compared against a stated acceptance limit, not just recorded for the file",
            "Any punch-list items raised during the test are documented in writing with an agreed close-out date, not verbally waived on the shop floor",
            "The manufacturer's data book draft, or at minimum the test report itself, is issued before the pump ships, not weeks afterward",
          ]}
        />

        <h2 id="site-commissioning-after-fat" className="mt-12 text-xl font-bold">
          Site commissioning: what changes after FAT
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Once the pump arrives on site, commissioning re-checks several
          things FAT could not test, because they depend on the actual
          installation rather than the pump alone: coupling alignment is
          rechecked after transport and after the piping is fully bolted up,
          since piping strain on the pump nozzles can pull a perfectly
          aligned pump out of tolerance; suction and discharge piping is
          flushed and checked for cleanliness, since factory testing runs on
          clean water while site piping can carry mill scale or construction
          debris that damages a mechanical seal within minutes of startup;
          motor insulation resistance is tested after any period of storage
          or transport, since moisture ingress during shipping is common;
          and the seal support system, if fitted, is functionally checked —
          flush, buffer or barrier fluid circulating and at the correct
          pressure — before the pump is started, not confirmed after the
          fact from a leaking seal. A brief, low-load initial run with close
          monitoring of vibration, bearing temperature and seal condition
          normally precedes handing the pump over to full continuous
          operation.
        </p>

        <h2 id="spares-and-consumables-to-have-ready-at-commissioning" className="mt-12 text-xl font-bold">
          Spares and consumables to have ready at commissioning
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A pump that passes FAT and arrives on site cannot actually be
          commissioned without a handful of items that are easy to leave off
          a purchase order because they seem minor compared to the pump
          itself. Gaskets and fasteners for the suction and discharge flanges
          are frequently assumed to be supplied locally, and just as
          frequently turn out not to match the pump&rsquo;s flange rating or bolt
          pattern when the installation crew actually needs them. The
          correct grade and quantity of bearing lubricant, and flush or
          barrier fluid for the seal support system if one is fitted, need
          to be on site and confirmed compatible with the process fluid and
          ambient conditions before first start, not sourced from whatever
          the site warehouse happens to stock. A basic commissioning spares
          set — typically the gasket, O-ring and consumable items likely to
          be disturbed during installation and initial alignment checks — is
          worth ordering alongside the pump rather than treated as a
          separate purchase raised only once the installation crew
          discovers something is missing. None of this replaces a proper
          capital and insurance spares strategy for the life of the pump; it
          is simply the short list that determines whether commissioning can
          start on the date the schedule assumes it will.
        </p>

        <h2 id="common-fat-pitfalls-buyers-should-watch-for" className="mt-12 text-xl font-bold">
          Common FAT pitfalls buyers should watch for
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          A few recurring issues account for most of the disputes that
          surface after a pump has already shipped. A witness request that
          arrives after the manufacturer has already scheduled and run the
          test internally leaves the buyer with only a documented report and
          no leverage to request a repeat. A performance test limited to the
          single rated point, rather than several points spanning the
          operating range, can hide a curve shape problem that only shows up
          away from that one point. Vibration and bearing temperature
          readings recorded without a stated acceptance limit to compare
          them against are effectively unverifiable after the fact. And
          punch-list items agreed verbally on the shop floor, without a
          written close-out date, have a habit of resurfacing as unresolved
          only once the pump is already on a ship. None of these require
          expensive fixes — they require agreeing the inspection and test
          plan, in writing, before the pump goes into production rather than
          after.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          Sourcing a pump and want the inspection and test plan set correctly
          from the start? <Link className="text-accent hover:underline" href="/rfq">
            Send us your pump datasheet
          </Link>{" "}
          and Oillinko will agree the witness level, test scope and
          documentation requirements with the manufacturer before the order
          is placed, and coordinate the FAT itself so nothing is scheduled
          without your knowledge. Browse our{" "}
          <Link className="text-accent hover:underline" href="/equipment/pumps-rotating-equipment">
            pumps &amp; rotating equipment
          </Link>{" "}
          category, or see our guide to{" "}
          <Link className="text-accent hover:underline" href="/blog/reading-a-pump-curve-explained">
            reading a pump curve
          </Link>{" "}
          to know what the performance test result should actually look
          like before you sign off on it.
        </p>

        <Faq faqs={faqs} />
      </Prose>
      <RelatedPosts post={post} />
      <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
      <CtaBand />
    </>
  );
}
