import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import {
  BlogPostHeader, Faq, JsonLd, Prose, RelatedPosts,
  articleJsonLd, breadcrumbJsonLd, faqJsonLd,
} from "@/components/BlogChrome";
import { getPost, postUrl } from "@/lib/blog";

const post = getPost("control-valve-repair-rfq-scope-tests-reports")!;
const paragraph = "mt-4 text-sm leading-relaxed text-muted sm:text-base";
const heading = "mt-12 text-xl font-bold";
const link = "text-accent underline underline-offset-4";
const sources = {
  diagnostics: "https://www.emerson.com/en/final-control/catalog/products-and-software/valve-software/control-valve-diagnostics",
  testing: "https://webstore.iec.ch/en/publication/31136",
  isolation: "https://www.hse.gov.uk/pubns/books/hsg253.htm",
};
const faqs = [
  {
    q: "What should I send with a control valve repair enquiry?",
    a: "Send the equipment tag, valve, actuator and positioner identification, current datasheet, observed symptoms, available diagnostic records, service conditions and required return date. Identify missing information and state whether you are ordering assessment or a defined repair.",
  },
  {
    q: "Does a valve diagnostic report prove seat tightness?",
    a: "Only if the report includes an appropriate seat-leakage examination with its stated method, conditions and acceptance criteria. A report showing travel or positioner performance alone does not establish seat-leakage acceptance.",
  },
  {
    q: "Can the workshop replace obsolete parts without approval?",
    a: "The purchase agreement should define that authority. Request the proposed part, configuration differences, technical justification and revised price before approving substitutions that change the agreed repair scope.",
  },
];

export default function Page() {
  return <>
    <BlogPostHeader post={post} />
    <Prose>
      <p className={paragraph}>
        A control valve repair quotation should explain which problem the work
        is intended to resolve and how the result will be demonstrated. An offer
        for an overhaul can cover very different tasks: inspection of the valve
        internals, actuator work, positioner checks, replacement parts or testing.
        A buyer needs those boundaries before comparing prices. Otherwise, a
        seemingly complete offer may leave the component associated with the
        reported fault outside the repair scope.
      </p>
      <p className={paragraph}>
        This guide covers the commercial and technical information to request
        when a process control valve needs assessment or repair. It helps
        procurement teams assemble an enquiry for qualified review. It does not
        provide disassembly instructions or authorize work on an installed valve.
        The equipment manufacturer&apos;s instructions, the operator&apos;s
        approved arrangements and the applicable project requirements remain
        the basis for deciding how the work can be performed.
      </p>

      <figure className="mt-8">
        <Image src={post.image} width={1200} height={630}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-xl border border-line"
          alt="A repair record connects the condition received, the approved work and the evidence returned with the same valve tag." />
        <figcaption className="mt-3 text-sm text-muted">Keep the asset identity consistent from assessment through final acceptance. Original explanatory illustration; no actual test results are shown.</figcaption>
      </figure>

      <h2 id="identify-valve-assembly" className={heading}>Identify the whole control valve assembly</h2>
      <p className={paragraph}>
        Record the valve body, actuator and positioner separately. Include
        manufacturer, model, serial number and the plant tag, with readable
        nameplate photographs where available. Attach the current valve
        datasheet and record any known modifications. An old purchase order
        may describe the original assembly while the installed equipment has
        since received a different actuator or controller. Mark an uncertain
        configuration as unconfirmed rather than assuming the original record
        is still correct.
      </p>
      <p className={paragraph}>
        Describe the process fluid and the operating conditions relevant to the
        complaint. Include the specified materials, connection details and
        control requirements so the reviewer can understand what must be
        preserved. The <Link className={link} href={postUrl(getPost("valves-and-actuation-explained")!)}>valves and actuation equipment guide</Link>{" "}provides
        background on these interfaces. Identify accessories supplied with the
        assembly and those staying on site. A workshop should not have to infer
        whether a missing regulator, solenoid or feedback device is excluded,
        unavailable or simply packed in a separate box.
      </p>

      <h2 id="as-found-evidence" className={heading}>Describe symptoms and preserve as-found evidence</h2>
      <p className={paragraph}>
        Write down what was observed, when it happened and under which conditions.
        For example, distinguish a position indication that fluctuates from a
        measured process variable that oscillates. Attach available trend plots,
        alarm history and earlier service reports, with timestamps and tag
        references. Those observations help the technical reviewer frame an
        assessment; they do not by themselves establish that the valve internals
        require replacement. Avoid turning an operator&apos;s reported symptom
        into a confirmed failure mechanism on the purchase order.
      </p>
      <p className={paragraph}>
        Emerson&apos;s <a className={link} href={sources.diagnostics} target="_blank" rel="noopener noreferrer">control valve diagnostics overview</a>{" "}describes
        information about supply pressure, air leakage, friction, dead band and
        calibration. The available measurements depend on the installed
        equipment and diagnostic capability. Ask which records can be provided
        for your assembly and how they will be interpreted. Agree what
        as-found evidence should be captured before adjustment or repair changes
        its condition. If a requested test is unsuitable for the received
        condition, require the limitation to be explained in the assessment.
      </p>

      <h2 id="assessment-and-repair-price" className={heading}>Separate assessment from the repair price</h2>
      <p className={paragraph}>
        When internal condition is unknown, request a priced assessment stage
        with defined deliverables. These can include component identification,
        inspection findings, photographs, measurements and a proposed repair
        scope. State the permitted extent of dismantling and who can approve
        additional work. Ask what happens if repair is declined: whether the
        assembly will be returned dismantled or reassembled, how loose parts
        will be identified and which charges remain payable under the quotation.
      </p>
      <p className={paragraph}>
        The subsequent proposal should connect each recommendation to a finding.
        Separate labor, replacement parts, specialist processes, testing and
        documentation instead of accepting a single unexplained overhaul figure.
        Identify provisional items and the event that makes their price firm.
        A commercial approval can then refer to an agreed scope revision. This
        also makes it easier to compare repair with a replacement assembly if
        the assessment finds that the proposed work is extensive or key parts
        cannot be obtained in time.
      </p>

      <h2 id="parts-and-configuration" className={heading}>Review parts and configuration changes</h2>
      <p className={paragraph}>
        Request a parts list that distinguishes items retained, repaired and
        replaced. Ask for the proposed part references, material identification
        and source, and require alternatives to be declared. Review any proposed
        change to trim, packing, actuator or positioner with the responsible
        engineer. A similar external appearance is not sufficient evidence of
        interchangeability. The proposal should explain what remains equivalent
        to the specified assembly and which characteristics need a new
        technical review.
      </p>
      <p className={paragraph}>
        Keep restoration and modification visible as separate decisions. If a
        workshop recommends a different trim arrangement or a new controller,
        request the reason, supporting selection information and effect on the
        agreed scope. Confirm which drawings, settings records and spare-parts
        references will be updated. Where material inspection documents are
        required, define them for the relevant supplied parts using the <Link className={link} href={postUrl(getPost("en-10204-material-certificates-explained")!)}>EN 10204 documentation guide</Link>.
        A generic workshop certificate should not silently replace the specified
        material evidence.
      </p>

      <h2 id="repair-acceptance-tests" className={heading}>Agree tests and acceptance before authorizing repair</h2>
      <p className={paragraph}>
        Ask the repairer to identify the proposed examinations and what each
        one demonstrates. Movement and control response, seat leakage and
        pressure-boundary integrity are different acceptance questions. A
        statement that the valve was tested is incomplete without the scope,
        conditions, measured result and acceptance criterion. Require the
        responsible reviewer to select the appropriate tests for the actual
        design and work performed; do not insert a universal pressure or leakage
        limit into every repair enquiry.
      </p>
      <p className={paragraph}>
        <a className={link} href={sources.testing} target="_blank" rel="noopener noreferrer">IEC 60534-4:2021</a>{" "}addresses
        inspection and routine testing of control valves within its stated
        scope. Its actuator requirements apply only to pneumatic actuators,
        and it has service exclusions. Naming this standard does not
        automatically establish a complete acceptance basis for every repaired
        assembly. Ask the technical reviewer which requirements and edition
        apply, which additional project conditions are needed and how the
        report will document conformance. Arrange any witness or review points
        before the workshop schedules testing.
      </p>

      <h2 id="workshop-and-site-boundaries" className={heading}>Connect workshop work with the site schedule</h2>
      <p className={paragraph}>
        Identify who handles removal, preparation for shipment, transport,
        reinstallation and return-to-service checks. Confirm the receiving
        workshop&apos;s requirements for equipment previously exposed to the
        process fluid. HSE&apos;s <a className={link} href={sources.isolation} target="_blank" rel="noopener noreferrer">safe isolation guidance for plant and equipment</a>{" "}explains
        why intrusive maintenance requires planned controls; it is UK guidance,
        not a replacement for applicable local rules. A repair booking does
        not establish that the installed equipment is safe to disconnect or
        that a returned assembly is ready for plant operation.
      </p>
      <p className={paragraph}>
        Ask when the quoted turnaround starts and which dependencies can change
        it. Receipt at the workshop, completion of assessment, parts approval
        and availability of replacements may be different milestones. Give the
        required site return date, allowing for transport and the operator&apos;s
        acceptance activities. The <Link className={link} href={postUrl(getPost("third-party-inspection-tpi-oil-and-gas-equipment")!)}>third-party inspection guide</Link>{" "}helps
        define who reviews or witnesses the agreed work. Specify preservation,
        packing and storage instructions if reinstallation will be delayed.
      </p>

      <h2 id="repair-report-and-enquiry" className={heading}>Request a repair record the next buyer can use</h2>
      <p className={paragraph}>
        The final as-left report should identify the same asset as the as-found
        assessment and show what changed. Request the approved scope revision,
        installed parts, final configuration, test results and any outstanding
        limitations. Keep recommended future work separate from work actually
        completed. Ask the repairer to explain any difference between the
        accepted proposal and the final record before commercial closeout.
        These details make the next maintenance or spare-parts enquiry much
        more reliable than a brief label saying serviced.
      </p>
      <p className={paragraph}>
        To prepare a sourcing enquiry, combine the assembly identification,
        observed symptoms, available reports and expected deliverables with
        the required schedule. Use Oillinko&apos;s <Link className={link} href="/oil-and-gas/services/inspection-engineering">inspection, engineering and repair requirements page</Link>{" "}or
        <Link className={link} href="/rfq"> submit the control valve repair brief</Link>.
        The enquiry reaches Oillinko for manual review and provider coordination.
        The actual provider, equipment coverage, qualifications, repair scope
        and commercial terms are confirmed for the requirement. This guide
        does not imply that Oillinko operates a repair workshop or holds
        manufacturer repair authorization.
      </p>
      <Faq faqs={faqs} />
    </Prose>
    <RelatedPosts post={post} />
    <JsonLd data={[articleJsonLd(post), breadcrumbJsonLd(post), faqJsonLd(faqs)]} />
    <CtaBand />
  </>;
}
