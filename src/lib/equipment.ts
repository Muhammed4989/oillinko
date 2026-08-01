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
    slug: "hot-tap-line-stop",
    name: "Hot Tap & Line Stop Equipment",
    short: "Saddles & pneumatic stoppers for live pipeline work",
    tagline: "Hot tapping and line stop equipment that keeps pipelines running",
  image: "/images/refinery-hazy-unsplash.jpg",
    description:
      "One-piece and split (two-piece) weld-on saddles for permanent installation on live oil and gas pipelines, suitable for Hot Tapping and Line Stop / Stopple operations without pipeline shutdown, plus inflatable pneumatic stoppers (balloons) with rubber strips for temporary plugging of pipelines from 4\" to 42\".",
    specs: [
      "One-piece saddle: integral construction, ASME Class 600 minimum",
      "Split saddle: two matching halves, bolted or welded around the pipe",
      "Carbon steel to ASTM A105 or ASTM A516 Gr. 70",
      "Reinforcement designed per ASME B31 and API RP 2201",
      "Welding per ASME Section IX, hydrostatically tested after fabrication",
      "EN 10204 Type 3.1 material test certificates",
      "Pneumatic stoppers suitable for pipe schedule 20 to 80",
      "Stopper material resistant to crude oil, natural gas, LPG and NGL",
      "Stoppers supplied leak tested with air hose, air valve and key",
    ],
    standards: [
      "ASME Class 600",
      "API 5L",
      "API RP 2201",
      "ASME B31",
      "ASME Section IX",
      "EN 10204 Type 3.1",
    ],
    sampleItems: [
      { ref: "HT-01", description: "One-piece saddle 6\" x 12\" for hot tapping", qty: 10 },
      { ref: "HT-04", description: "One-piece saddle 16\" x 8\" for hot tapping", qty: 10 },
      { ref: "HT-29", description: "Two-piece saddle Class 600, 20\" x 16\" x 20\"", qty: 2 },
      { ref: "HT-46", description: "Two-piece saddle Class 600, 32\" x 30\" x 32\"", qty: 4 },
      { ref: "HT-64", description: "Two-piece saddle Class 600, 48\" x 36\" x 48\"", qty: 2 },
      { ref: "PS-17", description: "Pneumatic stopper (balloon), size 42\"", qty: 12 },
    ],
    totalItems: 81,
  },
  {
    slug: "pipeline-fittings",
    name: "Pipeline Fittings",
    short: "Seamless butt weld elbows, tees and reducers",
    tagline: "Seamless butt weld elbows, tees and reducers to ANSI B16.9",
  image: "/images/pipes-plant.jpg",
    description:
      "Seamless butt weld fittings — 45° and 90° elbows, equal and reducing tees, and concentric reducers — manufactured to ANSI B16.9 with beveled ends, in carbon steel to ASTM A234-WPB, Sch. STD.",
    specs: [
      "Seamless construction, butt weld, beveled ends",
      "Material ASTM A234-WPB (carbon steel)",
      "Schedule: STD",
      "Dimensions per ANSI B16.9",
      "45° and 90° elbows; equal and reducing tees; concentric reducers",
    ],
    standards: ["ANSI B16.9", "ASTM A234-WPB"],
    sampleItems: [
      { ref: "EL-12", description: "90° long radius elbow, seamless, 12\" x Sch. STD", qty: 8 },
      { ref: "TE-01", description: "Equal tee, seamless, 8\" x 8\" x 8\"", qty: 10 },
      { ref: "TE-14", description: "Reducing tee, seamless, 12\" x 12\" x 8\"", qty: 4 },
      { ref: "RD-03", description: "Concentric reducer, 10\" x 6\"", qty: 6 },
    ],
    totalItems: 48,
  },
  {
    slug: "flanges",
    name: "Flanges",
    short: "Weld neck, blind and slip-on flanges, Class 150–600",
    tagline: "Weld neck, blind and slip-on flanges per ANSI B16.5",
  image: "/images/night-refinery.jpg",
    description:
      "Raised face flanges — weld neck, blind and slip-on types — manufactured to ANSI B16.5 in carbon steel to ASTM A105, available in Class 150, 300 and 600.",
    specs: [
      "Types: Weld Neck, Blind, Slip-On",
      "Raised Face (RF)",
      "Manufactured to ANSI B16.5",
      "Material ASTM A105 (carbon steel)",
      "Classes 150, 300 and 600",
      "Weld neck flanges available in Sch. 40 / STD / 80 as specified",
    ],
    standards: ["ANSI B16.5", "ASTM A105"],
    sampleItems: [
      { ref: "FL-04", description: "Weld neck flange, 10\" x 600, Sch. 40, RF", qty: 30 },
      { ref: "FL-27", description: "Blind flange, 12\" x 600, RF", qty: 50 },
      { ref: "FL-36", description: "Slip-on flange, 6\" x 150, RF", qty: 100 },
      { ref: "FL-11", description: "Weld neck flange, 6\" x 600, RF", qty: 50 },
    ],
    totalItems: 37,
  },
  {
    slug: "gaskets",
    name: "Gaskets",
    short: "Spiral wound gaskets per API 601 / ASME B16.20",
    tagline: "Spiral wound gaskets for high-integrity flange sealing",
  image: "/images/about-refinery.jpg",
    description:
      "Spiral wound gaskets manufactured to API 601 / ASME B16.20 with stainless steel (AISI 304) windings and graphite filler — the standard choice for oil and gas flange connections.",
    specs: [
      "Spiral wound construction",
      "Windings: AISI 304 stainless steel",
      "Filler: graphite",
      "Manufactured to API 601 and ASME B16.20",
    ],
    standards: ["API 601", "ASME B16.20", "AISI 304"],
    sampleItems: [
      { ref: "GS-05", description: "Spiral wound gasket, 4\" x 600, graphite filler", qty: 60 },
      { ref: "GS-12", description: "Spiral wound gasket, 12\" x 300", qty: 40 },
      { ref: "GS-18", description: "Spiral wound gasket, 6\" x 150", qty: 80 },
      { ref: "GS-27", description: "Spiral wound gasket, 2\" x 600", qty: 100 },
    ],
    totalItems: 28,
  },
  {
    slug: "stud-bolts",
    name: "Stud Bolts & Nuts",
    short: "ASTM A193 B7 stud bolts with A194 2H nuts",
    tagline: "ASTM A193 B7 stud bolts with ASTM A194 2H heavy hex nuts",
  image: "/images/train-refinery.jpg",
    description:
      "Screwed stud bolts in ASTM A193 Gr. B7 with nuts in ASTM A194 Gr. 2H, threaded to ANSI B1.1 (2A bolts / 2B nuts) with dimensions per ANSI B18.2 — supplied with one or two nuts as specified.",
    specs: [
      "Stud bolts: ASTM A193 Gr. B7",
      "Nuts: ASTM A194 Gr. 2H",
      "Threads per ANSI B1.1 (2A / 2B)",
      "Dimensions per ANSI B18.2",
      "Full thread or partial thread as specified",
      "Supplied with two nuts (heavy hex) as required",
    ],
    standards: ["ASTM A193 Gr. B7", "ASTM A194 Gr. 2H", "ANSI B1.1", "ANSI B18.2"],
    sampleItems: [
      { ref: "SB-01", description: "Stud bolt 1\" x 7\" with two nuts", qty: 1000 },
      { ref: "SB-02", description: "Stud bolt 5/8\" x 3-1/2\"", qty: 3000 },
      { ref: "SB-11", description: "Stud bolt 3/4\" x 4\"", qty: 2000 },
      { ref: "SB-33", description: "Stud bolt 1-7/8\" x 13-1/2\" with two nuts", qty: 1000 },
    ],
    totalItems: 33,
  },
  {
    slug: "pipe-cutters",
    name: "Pipe Cutters",
    short: "Manual and steel pipe cutters for every size range",
    tagline: "Manual and steel pipe cutters for on-site cutting",
  image: "/images/hero-refinery.jpg",
    description:
      "Manual and steel pipe cutters covering every line size from 4\" to 26\" — practical, field-proven tools for cutting line pipe during installation and maintenance work.",
    specs: [
      "Manual and steel cutter types",
      "Size ranges from 4\" up to 26\"",
      "Field-proven designs (e.g. REED type)",
      "Suitable for carbon steel line pipe",
    ],
    standards: ["Industry standard tooling"],
    sampleItems: [
      { ref: "PC-01", description: "Manual pipe cutter 4\" x 6\" (REED type)", qty: 15 },
      { ref: "PC-04", description: "Manual pipe cutter 10\" - 14\"", qty: 20 },
      { ref: "PC-07", description: "Steel pipe cutter 24\" - 26\"", qty: 15 },
    ],
    totalItems: 7,
  },
];
