import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("valve-actuator-replacement-rfq-compatibility")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  mounting: "https://www.iso.org/standard/89904.html",
  selection: "https://www.bray.com/docs/default-source/technical-bulletin/en_tb-1005_act-selectguide-ball-valves.pdf?sfvrsn=62c05fda_40",
  limits: "https://www.bray.com/docs/default-source/manuals-guides/technical-manuals/en-tsm-s98h-sya.pdf",
  configurations: "https://www.rotork.com/en/products/heavy-duty-fluid-actuators/rh/rh-heavy-duty",
};
const faqs = [
  {
    q: "Does matching ISO 5211 mounting make an actuator interchangeable?",
    a: "No. The attachment is one interface. Confirm the drive connection, mounting assembly, output throughout travel, valve limits, utilities, control signals and required failure response before accepting a replacement.",
  },
  {
    q: "Can I select a replacement from the old actuator nameplate alone?",
    a: "The nameplate helps identify the installed unit, but the supplier also needs the valve duty, required operating output, mounting arrangement, available supply and control requirements. Ask for a documented replacement assessment and disclose any changes since the original installation.",
  },
  {
    q: "What should the replacement actuator quotation include?",
    a: "Request the complete model code, sizing basis, interface drawing, retained and new accessories, wiring or pneumatic diagrams, agreed testing, applicable documentation and explicit deviations. Clarify responsibility for assembly and site commissioning.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        A valve actuator replacement can look straightforward when the old
        nameplate is readable and the mounting holes appear to match. Yet a
        replacement may fit physically while delivering unsuitable output,
        responding differently to a lost signal or requiring controls that
        the installation does not provide. A useful RFQ connects the valve,
        actuator and control package before a supplier prices an equivalent.
        That connection is especially important when the original model is
        discontinued or only part of the assembly will be replaced.
      </p>
      <p className={paragraph}>
        This guide helps buyers collect evidence for technical review. It
        does not prescribe actuator settings, spring changes or installation
        procedures. Start by deciding whether the purchase covers a bare
        actuator, an actuator with mounting kit, or a tested valve automation
        package. Those are different supply boundaries. Use the existing
        <Link className={link} href={postUrl(getPost("valves-and-actuation-explained")!)}> valves and actuation overview</Link>{" "}for
        the broader equipment families, then prepare the replacement-specific
        information below.
      </p>
      <figure className="mt-8">
        <Image src={post.image} width={1200} height={630}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-xl border border-line"
          alt="Three connected review areas for valve actuator replacement: valve duty, mechanical interface and control package." />
        <figcaption className="mt-3 text-sm text-muted">A matching attachment is one part of the replacement review. The drawing is a requirements map, not an actuator design.</figcaption>
      </figure>

      <h2 id="replacement-scope-and-identity" className={heading}>Identify what stays and what changes</h2>
      <p className={paragraph}>
        Record the valve tag, manufacturer, model, nominal size, pressure
        designation and current service conditions. Identify the actuator
        separately, including its complete model code, serial number and
        configured options. Add available datasheets, assembly drawings and
        nameplate photographs. If a gearbox, stem extension or custom bracket
        sits between the actuator and valve, include its identification. A
        photograph can reveal the arrangement, but it cannot establish hidden
        dimensions or the actual valve operating requirement.
      </p>
      <p className={paragraph}>
        List the accessories that will be retained, replaced or supplied
        separately. A positioner, solenoid valve, limit-switch box, local panel
        or manual override can materially affect the package. Record changes
        made since the original purchase, including altered service or control
        requirements. If the condition of the valve itself is uncertain,
        resolve whether an assessment is needed. The
        <Link className={link} href={postUrl(getPost("control-valve-repair-rfq-scope-tests-reports")!)}> control valve repair RFQ guide</Link>{" "}explains
        how to separate diagnosis from an authorized repair scope.
      </p>

      <h2 id="torque-thrust-and-travel" className={heading}>Request a sizing basis tied to the valve</h2>
      <p className={paragraph}>
        Identify whether the valve requires part-turn, multi-turn or linear
        motion, and obtain the required travel and operating output from its
        manufacturer. For rotary equipment, torque requirements can differ
        across the opening and closing strokes. Do not replace that information
        with the old actuator&apos;s maximum nameplate output. Bray&apos;s
        <a className={link} href={sources.selection} target="_blank" rel="noopener noreferrer"> ball valve actuator selection bulletin</a>{" "}illustrates
        why seat material, service, pressure and operating frequency enter
        its product-specific sizing assessment. Its tables and factors are
        not universal values for other valves.
      </p>
      <p className={paragraph}>
        Require the proposed actuator&apos;s output to be checked across the
        relevant travel and supply conditions. A spring-return unit needs
        attention to the powered and spring strokes; Bray&apos;s bulletin
        explicitly treats both in its selection example. Ask the supplier
        to identify assumptions, applied margins and the source of the
        valve data. A quotation stating only that an actuator is oversized
        leaves those questions unanswered. Linear equipment requires its own
        thrust and stroke assessment rather than a rotary torque comparison.
      </p>
      <p className={paragraph}>
        Also obtain the valve&apos;s applicable mechanical limits. Bray&apos;s
        <a className={link} href={sources.limits} target="_blank" rel="noopener noreferrer"> Series 98H sizing manual</a>{" "}identifies
        maximum allowable stem torque, or MAST, and the minimum available
        pressure used for sizing. These illustrate two separate concerns:
        producing enough output at the stated supply and respecting what
        the driven assembly can accept. Ask the responsible engineer and
        supplier to demonstrate both for the proposed package. Do not choose
        an arbitrary safety factor or assume that the largest available
        actuator is automatically the safest replacement.
      </p>

      <h2 id="mounting-and-drive-connection" className={heading}>Check the complete mechanical interface</h2>
      <p className={paragraph}>
        <a className={link} href={sources.mounting} target="_blank" rel="noopener noreferrer">ISO 5211:2026</a>{" "}covers
        part-turn actuator attachments, including flange and driving-component
        dimensions and interface torque references. Its published scope excludes
        the attachment of an intermediate support to the valve. Consequently,
        quoting an ISO mounting designation does not settle the complete
        installation. State the applicable edition and request an arrangement
        drawing identifying the valve, coupling, bracket, gearbox if present,
        and actuator. Control-valve attachments under this document require
        agreement between purchaser and supplier.
      </p>
      <p className={paragraph}>
        Confirm the drive shape, engagement dimensions, orientation, required
        rotation or travel and mounting hardware through approved drawings.
        Include clearance around nearby piping, insulation and structures,
        together with access needed for the specified manual operation and
        servicing. Assign responsibility for checking the mounting assembly
        and support loads. Where dimensions are unavailable, request a
        defined survey or engineering review before accepting a direct-fit
        claim. Keep that work separate from assumptions made from an
        unscaled photograph or an old catalogue sketch.
      </p>

      <h2 id="utilities-and-control-package" className={heading}>Match utilities, signals and accessories</h2>
      <p className={paragraph}>
        Describe the supply actually available at the equipment. For pneumatic
        or hydraulic systems, provide the specified medium and available
        pressure range, together with project requirements for its condition.
        For electric actuators, state voltage, phase, frequency and control
        supply where applicable. Ask the supplier to disclose relevant power
        or flow demand. An actuator selected around a nominal utility value
        may require further review if the actual guaranteed supply is different.
        Record unresolved utility information as a quotation qualification.
      </p>
      <p className={paragraph}>
        Document commands, position feedback, local and remote operation,
        communications and the interface to any existing positioner or
        controller. Provide the relevant wiring and pneumatic diagrams for
        comparison. Similar connector appearance or a shared signal description
        does not prove that the complete control arrangement is interchangeable.
        Include ambient conditions, ingress protection and the project&apos;s
        hazardous-area requirements. Request applicable documentation for the
        actual offered configuration and accessories rather than relying on
        a general certificate covering an unspecified product family.
      </p>

      <h2 id="failure-response-and-duty" className={heading}>Define failure response and operating duty explicitly</h2>
      <p className={paragraph}>
        Write the required valve response for loss of motive supply, control
        power and command signal as separate scenarios. Do not assume those
        events produce the same result. Rotork&apos;s
        <a className={link} href={sources.configurations} target="_blank" rel="noopener noreferrer"> RH product description</a>{" "}lists
        double-acting and spring-return configurations, fail-open or fail-close
        arrangements, and on/off or modulating applications. That variety
        shows why a range name alone is incomplete identification. Ask for
        the offered configuration and supporting control diagram; the cited
        product features are not a recommendation for an unreviewed application.
      </p>
      <p className={paragraph}>
        Obtain the required failure behavior from the approved process and
        control basis. A buyer should not choose a safe position from the
        valve&apos;s location or presumed purpose. State required travel times,
        operating frequency and whether the duty is occasional isolation
        or continuing modulation. Any emergency or safety-related function
        needs review of the complete arrangement by the responsible team.
        Product claims alone do not establish that an installed function
        meets the project requirement, and a faster replacement is not
        automatically an acceptable change.
      </p>

      <h2 id="replacement-quotation-and-acceptance" className={heading}>Make the quotation and acceptance package reviewable</h2>
      <p className={paragraph}>
        Request the full proposed model code, sizing assessment, interface
        drawing, accessory list and explicit deviations. Separate supply,
        assembly, testing, installation and commissioning responsibilities.
        Agree which functions will be demonstrated before dispatch and what
        remains to be verified at site under approved procedures. The
        <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}> third-party inspection guide</Link>{" "}helps
        define witness responsibilities and reporting. Keep the accepted
        drawings and configuration records connected to the actual equipment
        identifiers so receiving personnel can check what was supplied.
      </p>
      <p className={paragraph}>
        Include quantity, required delivery date, destination, documentation
        needs and whether alternatives are permitted. Compare quotations on
        the same assembly boundary, including any mounting kit, accessory
        replacement or engineering work. Send the evidence through the
        <Link className={link} href="/oil-and-gas/equipment/valves/actuators-and-positioners"> actuators and positioners enquiry page</Link>{" "}or
        <Link className={link} href="/rfq"> submit an actuator replacement RFQ</Link>.
        Oillinko reviews requirements and coordinates enquiries manually with
        suitable providers. Availability, technical suitability, manufacturer
        support and commercial terms are confirmed for the specific request.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
