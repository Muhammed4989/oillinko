export type SampleItem = {
  ref: string;
  description: string;
  qty: number;
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
  standards: string[];
  sampleItems: SampleItem[];
  totalItems: number;
};

export const categories: Category[] = [
  {
    slug: "pumps-rotating-equipment",
    name: "Pumps & Rotating Equipment",
    short: "Centrifugal, positive displacement and metering pumps",
    tagline: "Centrifugal and positive displacement pumps built to API standards",
    image: "/images/night-refinery.jpg",
    description:
      "Centrifugal pumps (API 610 — overhung, between-bearings and vertically suspended types), reciprocating and rotary positive displacement pumps (API 674 / API 676) and metering pumps (API 675), sourced complete with mechanical seals, couplings and baseplates to match your process conditions.",
    specs: [
      "Centrifugal pumps per API 610 — OH, BB and multistage BB3/BB5 configurations",
      "Reciprocating positive displacement pumps per API 674",
      "Rotary positive displacement pumps per API 676",
      "Controlled-volume metering pumps per API 675",
      "Mechanical seals and seal support systems per API 682",
      "Special-purpose couplings per API 671",
      "Materials, hydrostatic and performance testing selected to service and datasheet",
      "Third-party witnessed factory testing arranged on request",
    ],
    standards: ["API 610", "API 674", "API 675", "API 676", "API 682", "API 671"],
    sampleItems: [
      { ref: "PM-01", description: "Multistage centrifugal pump, API 610 BB3, boiler feedwater service", qty: 2 },
      { ref: "PM-02", description: "Horizontal centrifugal pump, API 610 OH2, process transfer", qty: 4 },
      { ref: "PM-03", description: "Reciprocating metering pump, API 675, chemical injection", qty: 3 },
      { ref: "PM-04", description: "Vertical turbine pump, API 610 VS, cooling water intake", qty: 2 },
    ],
    totalItems: 24,
  },
  {
    slug: "valves-actuation",
    name: "Valves & Actuation",
    short: "Gate, globe, check, ball and control valves with actuation",
    tagline: "Gate, ball, check and control valves to API and ASME valve standards",
    image: "/images/train-refinery.jpg",
    description:
      "Gate, globe, check, ball, butterfly and plug valves for process and pipeline service, manufactured to API 600, API 602, API 6D and ASME B16.34, supplied manual or fitted with pneumatic, electric or hydraulic actuation to ISO 5211 mounting.",
    specs: [
      "Steel gate, globe and check valves per API 600 and API 602",
      "Pipeline ball, gate, plug and check valves per API 6D",
      "Design and pressure-temperature ratings per ASME B16.34",
      "Check valves per API 594",
      "Fire-safe design and testing per API 607 / API 6FA where specified",
      "Actuator mounting per ISO 5211 — manual gear, pneumatic, electric or hydraulic",
      "Face-to-face dimensions per ASME B16.10 / API 6D as applicable",
    ],
    standards: ["API 600", "API 602", "API 6D", "API 594", "ASME B16.34", "ISO 5211"],
    sampleItems: [
      { ref: "VL-01", description: "Trunnion-mounted ball valve, API 6D, Class 600, pneumatic actuator", qty: 6 },
      { ref: "VL-02", description: "Gate valve, API 600, Class 300, gear operated", qty: 10 },
      { ref: "VL-03", description: "Dual-plate check valve, API 594, Class 150", qty: 8 },
      { ref: "VL-04", description: "Compact steel globe valve, API 602, Class 800", qty: 12 },
    ],
    totalItems: 40,
  },
  {
    slug: "flanges-fittings-bolting",
    name: "Flanges, Fittings & Bolting",
    short: "Weld neck, blind and slip-on flanges, butt-weld fittings and stud bolts",
    tagline: "Flanges, butt-weld fittings and stud bolts — specified and supplied as one matched connection",
    image: "/images/pipes-plant.jpg",
    description:
      "Weld neck, blind, slip-on and socket weld flanges to ASME B16.5, seamless butt-weld elbows, tees and reducers to ANSI B16.9, and stud bolts with heavy hex nuts to ASTM A193/A194 — the piping components that make up every flanged and welded connection in a plant or pipeline.",
    specs: [
      "Flanges: weld neck, blind, slip-on, socket weld — ASME B16.5, Class 150–2500",
      "Butt-weld fittings: 45° and 90° elbows, equal and reducing tees, concentric and eccentric reducers — ANSI B16.9",
      "Carbon steel to ASTM A105 (flanges) and ASTM A234 WPB (fittings); alloy and stainless grades on request",
      "Stud bolts ASTM A193 Gr. B7 with ASTM A194 Gr. 2H heavy hex nuts, threaded per ANSI B1.1",
      "Face-to-face and end-to-end dimensions per ASME B16.10",
      "EN 10204 Type 3.1 material certificates as standard; Type 3.2 on request",
    ],
    standards: ["ASME B16.5", "ANSI B16.9", "ASTM A105", "ASTM A234 WPB", "ASTM A193 / A194"],
    sampleItems: [
      { ref: "FL-01", description: "Weld neck flange, 10\" x Class 600, RF, ASTM A105", qty: 30 },
      { ref: "FT-02", description: "90° long radius elbow, seamless, 12\" x Sch. STD", qty: 8 },
      { ref: "FT-03", description: "Reducing tee, seamless, 12\" x 12\" x 8\"", qty: 4 },
      { ref: "SB-04", description: "Stud bolt 1\" x 7\", ASTM A193 Gr. B7, with two nuts", qty: 1000 },
    ],
    totalItems: 85,
  },
  {
    slug: "gaskets-sealing",
    name: "Gaskets & Sealing Products",
    short: "Spiral wound, ring joint and non-metallic gaskets",
    tagline: "Spiral wound, ring-type joint and non-metallic gaskets for every flange class",
    image: "/images/about-refinery.jpg",
    description:
      "Spiral wound gaskets to API 601 / ASME B16.20, ring-type joint (RTJ) gaskets for high-pressure classes, kammprofile gaskets for critical or low-load applications, and non-metallic sheet gaskets to ASME B16.21 — matched to flange size, class and process fluid.",
    specs: [
      "Spiral wound gaskets per API 601 / ASME B16.20 — stainless steel winding, graphite or PTFE filler",
      "Ring-type joint (RTJ) gaskets for Class 600 and above",
      "Kammprofile (grooved metal) gaskets for critical or low-bolt-load service",
      "Non-metallic sheet gaskets per ASME B16.21",
      "Filler and winding material selected to process fluid, pressure and temperature",
    ],
    standards: ["API 601", "ASME B16.20", "ASME B16.21"],
    sampleItems: [
      { ref: "GK-01", description: "Spiral wound gasket, 6\" x Class 600, graphite filler", qty: 60 },
      { ref: "GK-02", description: "Ring-type joint gasket, R-24, Class 900", qty: 20 },
      { ref: "GK-03", description: "Kammprofile gasket, 8\" x Class 300, graphite facing", qty: 15 },
      { ref: "GK-04", description: "Non-metallic sheet gasket, 4\" x Class 150", qty: 100 },
    ],
    totalItems: 32,
  },
  {
    slug: "pressure-vessels-tanks",
    name: "Pressure Vessels, Tanks & Heat Exchangers",
    short: "ASME Section VIII vessels, API 650/620 tanks, shell-and-tube exchangers",
    tagline: "Pressure vessels, storage tanks and heat exchangers built to ASME, API and TEMA",
    image: "/images/hero-refinery.jpg",
    description:
      "Pressure vessels designed and fabricated to ASME Section VIII, atmospheric and low-pressure storage tanks to API 650 and API 620, and shell-and-tube heat exchangers built to TEMA class, complete with the material certification and inspection package your project specifies.",
    specs: [
      "Pressure vessels per ASME Section VIII Division 1 or 2",
      "Welded steel storage tanks per API 650",
      "Large low-pressure storage tanks per API 620",
      "Shell-and-tube heat exchangers per TEMA class (B, C or R)",
      "Materials per ASME Section II, with mill certificates traceable to the vessel or tank",
      "Hydrostatic/pneumatic testing and NDT scope per the governing code",
    ],
    standards: ["ASME Section VIII", "API 650", "API 620", "TEMA", "ASME Section II"],
    sampleItems: [
      { ref: "PV-01", description: "Horizontal separator vessel, ASME Section VIII Div. 1", qty: 1 },
      { ref: "PV-02", description: "Welded steel storage tank, API 650, fixed roof", qty: 2 },
      { ref: "PV-03", description: "Shell-and-tube heat exchanger, TEMA Class C", qty: 3 },
    ],
    totalItems: 14,
  },
  {
    slug: "wellhead-production-equipment",
    name: "Wellhead & Production Equipment",
    short: "Wellheads, Christmas trees and production chokes",
    tagline: "Wellhead and Christmas tree equipment to API 6A, matched to your well design",
    image: "/images/refinery-night-unsplash.jpg",
    description:
      "Surface wellheads, casing and tubing head spools, and Christmas tree assemblies manufactured to API 6A, plus production chokes and associated valves, specified to the well's pressure rating, temperature class and material class for the produced fluid.",
    specs: [
      "Wellheads and Christmas trees per API 6A",
      "Pressure ratings from 2,000 to 15,000 psi (API 6A PSL/PR classes) as specified",
      "Material class selected per API 6A for sour (H2S) or sweet service",
      "Casing and tubing head spools matched to the well's casing programme",
      "Production chokes — manual or adjustable — matched to flowline conditions",
      "Factory acceptance testing and documentation per API 6A Annex requirements",
    ],
    standards: ["API 6A", "API 6D", "NACE MR0175 / ISO 15156 (sour service)"],
    sampleItems: [
      { ref: "WH-01", description: "Wellhead assembly, API 6A, 5,000 psi, sweet service", qty: 1 },
      { ref: "WH-02", description: "Christmas tree, API 6A, 5,000 psi", qty: 1 },
      { ref: "WH-03", description: "Adjustable production choke, API 6A", qty: 2 },
    ],
    totalItems: 10,
  },
  {
    slug: "pipeline-intervention-equipment",
    name: "Pipeline Intervention Equipment",
    short: "Hot tap saddles, line stop fittings and pneumatic stoppers",
    tagline: "Hot tap and line stop equipment that keeps pipelines running",
    image: "/images/refinery-hazy-unsplash.jpg",
    description:
      "One-piece and split (two-piece) weld-on saddles for permanent installation on live oil and gas pipelines, suitable for hot tapping and line stop / stopple operations without pipeline shutdown, plus inflatable pneumatic stoppers with rubber strips for temporary plugging of pipelines from 4\" to 42\".",
    specs: [
      "One-piece saddle: integral construction, ASME Class 600 minimum",
      "Split saddle: two matching halves, bolted or welded around the pipe",
      "Carbon steel to ASTM A105 or ASTM A516 Gr. 70",
      "Reinforcement designed per ASME B31 and API RP 2201",
      "Welding per ASME Section IX, hydrostatically tested after fabrication",
      "Pneumatic stoppers suitable for pipe schedule 20 to 80",
      "Stopper material resistant to crude oil, natural gas, LPG and NGL",
    ],
    standards: ["API RP 2201", "ASME B31", "ASME Section IX", "ASME Class 600"],
    sampleItems: [
      { ref: "HT-01", description: "One-piece saddle, 6\" x 12\", for hot tapping", qty: 10 },
      { ref: "HT-02", description: "Two-piece saddle, Class 600, 20\" x 16\" x 20\"", qty: 2 },
      { ref: "PS-03", description: "Pneumatic stopper (balloon), size 42\"", qty: 6 },
    ],
    totalItems: 20,
  },
];
