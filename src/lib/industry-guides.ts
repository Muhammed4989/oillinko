import type { SectorId } from "./catalogue";

type IndustryGuide = {
  title: string;
  description: string;
  reviewedOn: string;
  sections: { title: string; paragraphs: string[] }[];
  topicIds: string[];
};

export const industryGuides: Partial<Record<SectorId, IndustryGuide>> = {
  offshore: {
    title: "Preparing an offshore or marine equipment enquiry",
    description: "Plan offshore and marine equipment enquiries with clear seawater duty, installation interfaces, inspection records and delivery boundaries.",
    reviewedOn: "2026-10-02",
    topicIds: ["cathodic-protection-equipment", "wellheads-and-christmas-trees", "inspection-ndt-and-material-testing"],
    sections: [
      { title: "Begin with the asset and the work package", paragraphs: [
        "Offshore and marine purchasing covers several different installations: production platforms, subsea equipment, support vessels and the shore-based facilities that serve them. Identify the asset and the system before selecting a catalogue category. A seawater utility valve, a pressure-containing production component and a vessel treatment package can all appear in a marine enquiry while having different design, inspection and approval requirements. Explain whether the work is a new installation, a replacement, maintenance or a specialist service. This gives a reviewer the context needed to interpret the technical schedule.",
        "Break a mixed request into identifiable line items and work packages. Separate equipment supply, fabrication, inspection, installation support and commissioning when different parties perform them. Provide a controlled bill of quantities and the available drawings, with each clarification linked to an item number. Mark information that is still provisional. A complete package may be convenient commercially, but the proposal still needs to identify its boundaries and the interfaces supplied by the buyer, shipyard, operator or another contractor."
      ] },
      { title: "Describe seawater and external exposure separately", paragraphs: [
        "State which parts contact seawater or another process fluid and which parts face only the external marine environment. Give the relevant fluid analysis, operating and design conditions, and any approved material or coating requirements. Salinity, suspended matter, treatment chemicals and temperature can affect the engineering review. An item described as marine grade is not a complete material specification. Identify the specified body, trim, seals, fasteners and protective system where these are controlled by the project.",
        "For material-sensitive duties, request a documented response to the required grades and supporting records. Distinguish a proposed alternative from a confirmed match. Corrosion protection can involve coatings, cathodic protection, material selection and monitoring, with different responsibilities for design and supply. Provide the approved basis for the relevant system. Do not infer manufacturing origin from a brand, sales office or shipping point; state any origin restriction and ask for confirmation for each offered item."
      ] },
      { title: "Check installation and utility interfaces", paragraphs: [
        "Space, maintenance access, mass and connecting geometry matter on a vessel or offshore installation. Provide the current arrangement drawings and the dimensions needed to evaluate replacement or installation. Record flange or thread references, electrical supply and control interfaces, and any classification or environmental requirements set by the responsible design. Equipment offered with an actuator or control panel should identify the included assembly and the utilities it requires. Similar nominal sizes do not establish compatibility with an existing connection or foundation.",
        "Subsea and topside requirements should be distinguished explicitly. Water depth, access method and intervention interfaces can change the equipment or service scope, but the buyer should use the approved project basis rather than infer operating limits from a general product family. List integration, mounting and site testing as separate responsibilities. Ask how the offered package will be checked against the supplied drawings and what information must be confirmed before release for manufacture."
      ] },
      { title: "Connect approvals and inspection to the actual equipment", paragraphs: [
        "Approval evidence must relate to the particular product and installation. For example, ballast water management systems used for convention compliance require the applicable Administration's type approval under the relevant approval framework. This is a different question from whether a company supplies marine equipment. The project team should identify the vessel, flag, applicable requirements and the survey or commissioning scope. Ask for the offered configuration and its documented approval coverage, and keep installation acceptance separate from a broad catalogue statement.",
        "For other packages, define the inspection and release records appropriate to their function. Material traceability, examination reports, pressure-test records and functional checks are different forms of evidence. Specify the required dossier, witnessing points and acceptance authority before comparing offers. If the work is a service, state the examination coverage, access arrangements and required personnel qualifications. A report should identify the examined asset and any limitations so it can support the intended engineering decision."
      ] },
      { title: "Plan preservation, logistics and handover", paragraphs: [
        "Identify the dispatch point, delivery destination and required arrival date separately. The project schedule may depend on a vessel call, yard period or offshore work window, so distinguish production lead time from transport and mobilisation. Confirm packing dimensions, mass, preservation and storage instructions. Handling or lifting provisions need the appropriate engineering and documentation; inclusion of a fabricated frame does not establish that every offshore lifting requirement is satisfied.",
        "Compare the complete supply or service scope before the final commercial total. Identify spares, accessories, field connections, documentation, training and attendance as inclusions or exclusions. Record deviations for technical review and keep any promised delivery subject to the actual proposal. Submit the specification or whole equipment list to Oillinko when the requirement spans several categories. Our team reviews the enquiry and coordinates clarification; catalogue coverage does not establish reserved inventory, an appointed specialist or project approval."
      ] }
    ]
  },
  water: {
    title: "Defining a water treatment and environmental equipment package",
    description: "Prepare water treatment equipment requests using feed analysis, required outlet quality, utilities, waste streams and acceptance evidence.",
    reviewedOn: "2026-10-02",
    topicIds: ["metering-and-dosing-pumps", "calibration-and-instrument-repair", "inspection-ndt-and-material-testing"],
    sections: [
      { title: "Identify the water stream and the intended result", paragraphs: [
        "Water and environmental equipment enquiries begin with the source and destination of the stream. Produced water, intake water, industrial process water, cooling water and wastewater have different characteristics and treatment objectives. State whether the outlet is intended for reuse, reinjection, further treatment or a permitted discharge. The responsible project team should define the required quality and applicable acceptance basis. A label such as clean water or oily water is not enough to select a treatment process or compare performance proposals.",
        "Describe the current installation and the change required. A new treatment train, replacement filter, dosing skid and monitoring instrument are different packages even when they serve the same water system. Identify what already exists and what the offered equipment must connect to. Where the process has not been selected, request a defined study or treatment proposal rather than assume that equipment supply includes process design. Keep investigation, design, supply, installation and operating support visible as separate work boundaries."
      ] },
      { title: "Supply representative feed data and operating cases", paragraphs: [
        "Provide the available water analysis with sample locations, dates and the operating conditions represented. Relevant information can include suspended and dissolved constituents, hydrocarbons, salinity, temperature and the chemicals already used in the process. Identify which values are measured, estimated or still awaiting analysis. Produced water can contain a mixture of salts, hydrocarbons, solids and residual treatment chemicals; removing one constituent does not establish that the complete outlet quality has been achieved.",
        "Define flow cases and expected variability, including continuous, intermittent and peak conditions where they matter. A single average flow can hide a short-duration load that affects buffer capacity or treatment performance. Describe seasonal changes, cleaning streams or process events that alter the feed. If representative data are unavailable, agree the sampling, laboratory or trial work needed to reduce uncertainty. The proposal should identify the feed envelope on which its performance assessment depends and explain what happens commercially when the actual feed differs."
      ] },
      { title: "Compare a treatment train and its supporting utilities", paragraphs: [
        "Treatment may require several stages with different purposes. Separation, filtration, chemical dosing and monitoring should be considered against the required result and the actual stream, not selected from their names alone. Ask the technical response to explain each included stage, its design basis and the interfaces between stages. Identify tanks, pumps, piping, instruments and controls included with the package. A price for the principal treatment vessel can omit the equipment needed to operate or connect it.",
        "List electrical supply, available pressure, wash water, instrument air and other utilities required by the proposed arrangement. Record space, connection geometry and maintenance access. For dosing, provide chemical identity, concentration, compatibility requirements and the required control interface rather than only a pump flow. Clarify which consumables, initial charges and spare elements are included. Ask for expected consumption and maintenance information on the documented duty, with assumptions stated instead of treating an indicative figure as a guaranteed operating cost."
      ] },
      { title: "Define waste handling and performance acceptance", paragraphs: [
        "A treatment package can create concentrated waste, sludge, spent filters, backwash or cleaning streams. Ask the proposal to identify these outputs, their connection points and the responsibilities for collection, treatment and disposal. The environmental assessment and applicable project requirements should guide these arrangements. General industry guidance is useful context, but it does not replace the site's permits or establish a universal discharge limit for every jurisdiction and water stream.",
        "Agree how performance will be assessed: feed conditions, outlet parameters, measurement methods, sampling points and the duration or operating cases of the acceptance work. Distinguish a workshop function test from a site demonstration with the actual feed. If independent sampling or laboratory analysis is required, state who supplies it and which scope is needed. Define the response to results outside the agreed basis. An outlet-quality statement is useful only when its conditions, measurement evidence and acceptance responsibilities are clear."
      ] },
      { title: "Keep monitoring, service and delivery boundaries clear", paragraphs: [
        "Measurement equipment should be matched to the range, fluid matrix and installation. State sample conditioning, process connections, required outputs and maintenance access where relevant. For calibration or instrument repair, identify whether the scope covers an individual sensor, transmitter output or the complete installed loop. Request results and uncertainty appropriate to the use, and agree any conformity decision rule. A general calibration certificate cannot establish performance for every constituent measured in a water treatment process.",
        "Compare delivery, installation, commissioning and support as distinct items. Confirm the manufacturing origin of equipment separately from the delivery country and service location. Identify documentation, training, spare parts and technical attendance included in the offer. Where the requirement is still developing, send the available analysis, layout and desired result to Oillinko with the uncertainties clearly marked. Our team reviews the information and coordinates the enquiry; a catalogue entry describes a requirement family rather than a preselected process, approved supplier or guaranteed treatment result."
      ] }
    ]
  }
};
