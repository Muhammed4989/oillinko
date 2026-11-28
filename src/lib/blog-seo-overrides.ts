// Shorter search-result titles and descriptions for recent RFQ guides.
// Used only for <title>, meta description, Open Graph and Twitter text.
// The visible H1, URL, canonical and article schema headline are unchanged.
export type SeoOverride = { title: string; description: string };

export const blogSeoOverrides: Record<string, SeoOverride> = {
  "temperature-sensor-rtd-thermocouple-rfq-iec-60751-iec-60584-1-element-class-wiring-records": {
    title: "Temperature Sensor RFQ: RTD, Thermocouple, Class",
    description: "What to put in a temperature sensor RFQ: RTD or thermocouple, IEC 60751 / 60584-1 class, wiring, sheath, thermowell fit and calibration records."
  },
  "pressure-gauge-rfq-en-837-asme-b40-100-range-accuracy-case-connection-records": {
    title: "Pressure Gauge RFQ: EN 837, Range, Accuracy, Records",
    description: "What to put in a pressure gauge RFQ: EN 837 or ASME B40.100, range, accuracy class, connection, materials, case and certificates."
  },
  "api-650-storage-tank-rfq-data-sheet-design-basis-foundation-records": {
    title: "API 650 Tank RFQ: Data Sheet, Design Basis, Records",
    description: "What to put in an API 650 storage tank RFQ: data sheet, design basis, corrosion allowance, foundation responsibility, fabrication scope and records."
  },
  "well-intervention-services-rfq-wireline-slickline-coiled-tubing-scope": {
    title: "Well Intervention RFQ: Wireline and Coiled Tubing",
    description: "How to write a well intervention services RFQ: well data, objective, method, barrier responsibility, equipment evidence and handover records."
  },
  "wellhead-decommissioning-well-abandonment-service-rfq-scope-regulator-records": {
    title: "Wellhead Decommissioning and Abandonment RFQ",
    description: "Prepare a wellhead decommissioning and well abandonment RFQ: governing rules, well condition, scope split, wellhead removal and handover records."
  },
  "bulk-piping-material-rfq-mto-piping-class-allowances-equivalent-offers": {
    title: "Bulk Piping Material RFQ from an MTO",
    description: "Turn a piping MTO into a quotable RFQ: piping class per line, complete item descriptions, allowances, equivalent offers and revision control."
  },
  "api-5ct-casing-tubing-rfq-grade-psl-connection-length-records": {
    title: "API 5CT Casing and Tubing RFQ: Grade, PSL, Threads",
    description: "What to include in an API 5CT casing and tubing RFQ: edition, size and grade, PSL, connections, sour-service needs, records and licence checks."
  },
  "oil-gas-separator-rfq-api-12j-process-data-internals-vessel-records": {
    title: "Oil and Gas Separator RFQ: API 12J, Data, Records",
    description: "Separator RFQ checklist: API 12J context, process data sheet, vessel basis, internals, nozzles and instruments, relief devices and handover records."
  },
  "pig-launcher-receiver-rfq-pipeline-data-closure-interlock-records": {
    title: "Pig Launcher and Receiver RFQ: Closure and Records",
    description: "Prepare a pig launcher or receiver RFQ: pipeline data, trap layout, closure and interlock, code basis and the records bidders must supply."
  },
  "orifice-plate-meter-run-rfq-iso-5167-aga-3-process-data-records": {
    title: "Orifice Plate RFQ: ISO 5167, AGA 3, Meter Run",
    description: "What to include in an orifice plate and meter run RFQ: ISO 5167 and AGA 3 context, process data, plate and holder, installation and records."
  },
  "pressure-relief-valve-testing-repair-service-rfq-as-received-vr-records": {
    title: "Relief Valve Repair RFQ: As-Received Test and VR",
    description: "Prepare a relief valve testing and repair RFQ: valve list, as-received test, repair scope, National Board VR accreditation and per-valve records."
  },
  "sacrificial-anode-rfq-iso-15589-dnv-rp-b401-alloy-dimensions-test-records": {
    title: "Sacrificial Anode RFQ: Alloy, Tests and Records",
    description: "What to include in a sacrificial anode RFQ: ISO 15589 and DNV-RP-B401 context, alloy, dimensions, core, test records, traceability and packing."
  },
  "lifting-gear-rigging-rfq-wll-certificates-marking-examination-records": {
    title: "Lifting Gear RFQ: WLL, Marking and Certificates",
    description: "What to put in a lifting gear and rigging RFQ: working load limit, standard, marking, certificates, examination records, inspection and packing."
  },
  "hydrostatic-pressure-test-service-rfq-boundary-medium-gauges-records": {
    title: "Hydrostatic Test Service RFQ: Boundary and Records",
    description: "Prepare a hydrostatic pressure test service RFQ: test boundary, pressure basis, medium and water quality, gauges, safety interfaces and records."
  },
  "level-transmitter-replacement-rfq-technology-process-data-interface-emulsion-records": {
    title: "Level Transmitter RFQ: Technology and Process Data",
    description: "Replacing a level transmitter? Specify technology, process data, interface and emulsion conditions, outputs and records so offers compare."
  },
  "sil-rated-instruments-valves-rfq-safety-manual-certificate-proof-test-records": {
    title: "SIL-Rated Device RFQ: Safety Manual and Proof Test",
    description: "What to ask for in an RFQ for SIL-rated transmitters and valves: safety function data, safety manual, certificate scope, failure data and proof testing."
  },
  "fixed-gas-detector-rfq-gas-technology-iec-60079-29-calibration-records": {
    title: "Fixed Gas Detector RFQ: Technology and Calibration",
    description: "Fixed gas detector RFQ checklist: target gases, catalytic, infrared or electrochemical technology, IEC 60079-29 edition, certificates and calibration."
  },
  "rupture-disc-rfq-burst-pressure-manufacturing-range-coincident-temperature-iso-4126-2": {
    title: "Rupture Disc RFQ: Burst Pressure and ISO 4126-2",
    description: "Rupture disc RFQ guide: burst pressure at coincident temperature, manufacturing range, holder, ISO 4126-2 context and records to request."
  }
};
