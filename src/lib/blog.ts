export type BlogCategory = {
  slug: string;
  name: string;
};

export const blogCategories: BlogCategory[] = [
  { slug: "buyers-guides", name: "Buyer's Guides" },
  { slug: "pumps-rotating-equipment", name: "Pumps & Rotating Equipment" },
  { slug: "valves-actuation", name: "Valves & Actuation" },
  { slug: "flanges-fittings-bolting", name: "Flanges, Fittings & Bolting" },
  { slug: "gaskets-sealing", name: "Gaskets & Sealing Products" },
  { slug: "pressure-vessels-tanks", name: "Pressure Vessels & Tanks" },
  { slug: "wellhead-production-equipment", name: "Wellhead & Production Equipment" },
  { slug: "pipeline-intervention-equipment", name: "Pipeline Intervention Equipment" },
  { slug: "standards-certification", name: "Standards & Certification" },
  { slug: "oil-gas-markets", name: "Oil & Gas Markets" },
  { slug: "upstream-production", name: "Upstream & Production" },
  { slug: "midstream-transportation", name: "Midstream & Transportation" },
  { slug: "testing-laboratories", name: "Testing & Laboratories" },
  { slug: "industry-technology", name: "Industry Technology" },
];

export function categoryName(slug: string): string {
  return blogCategories.find((c) => c.slug === slug)?.name ?? slug;
}

export type BlogPost = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  category: string;
  readTime: string;
  date: string;
  dateLabel: string;
  description: string;
  keywords: string;
  image: string;
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "api-610-pump-types-and-classes-explained",
    title: "API 610 Pump Types & Classes Explained (OH, BB, VS)",
    short: "How to read an API 610 pump type designation before you specify one",
    tagline:
      "OH, BB and VS — what the API 610 type letters mean, which configuration fits which duty, and the mechanical requirements the standard imposes on all of them",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "API 610 pump types decoded for buyers: OH overhung, BB between-bearings and VS vertically suspended pumps, their sub-types (OH2, BB3, BB5, VS6...), typical services, and the bearing life, NPSH and testing requirements common to all of them.",
    keywords:
      "API 610 pump types, API 610 BB3, API 610 OH2, between bearings pump, overhung pump, vertically suspended pump, API 610 classes",
    image: "/images/night-refinery.jpg",
    related: [
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "en-10204-material-certificates-explained",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "third-party-inspection-tpi-oil-and-gas-equipment",
    title: "Third-Party Inspection (TPI) for Oil & Gas Equipment",
    short: "What TPI covers, who the agencies are, and how to specify witnessing level",
    tagline:
      "What a TPI agency actually does, the difference between witness, monitor and document review, and how to write the inspection clause in your RFQ",
    category: "standards-certification",
    readTime: "8 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "Third-party inspection (TPI) for oil and gas equipment explained: what TPI agencies such as Bureau Veritas, TÜV Rheinland, SGS, DNV and Lloyd's Register inspect, witness vs monitor vs review, and how to specify it in a tender.",
    keywords:
      "third party inspection oil and gas, TPI agency, Bureau Veritas inspection, SGS inspection, witness testing, PSI certificate, pre-shipment inspection",
    image: "/images/about-refinery.jpg",
    related: [
      "en-10204-material-certificates-explained",
      "api-610-pump-types-and-classes-explained",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "en-10204-material-certificates-explained",
    title: "EN 10204 Material Certificates Explained (2.1, 2.2, 3.1, 3.2)",
    short: "The difference between a 3.1 and a 3.2 certificate — and when you need one",
    tagline:
      "What each EN 10204 document type actually certifies, who is allowed to sign it, and how to specify the right one without over-paying for the wrong one",
    category: "standards-certification",
    readTime: "6 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "EN 10204 inspection documents explained for buyers: the difference between Type 2.1, 2.2, 3.1 and 3.2 certificates, who can issue each one, and how to specify the correct type for pressure equipment and structural steel.",
    keywords:
      "EN 10204 3.1, EN 10204 3.2, material test certificate, mill test certificate, inspection certificate 3.1 vs 3.2",
    image: "/images/pipes-plant.jpg",
    related: [
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "flanges-gaskets-and-bolting",
      "pipeline-fittings-and-schedules",
    ],
  },
  {
    slug: "how-to-write-a-bill-of-quantities",
    title: "How to Write a Bill of Quantities (BOQ)",
    short: "Get your equipment list right so suppliers can quote",
    category: "buyers-guides",
    tagline:
      "A line-by-line approach to preparing an equipment list or bill of quantities (BOQ) that suppliers can quote accurately and competitively",
    readTime: "6 min read",
    date: "2026-01-12",
    dateLabel: "12 January 2026",
    description:
      "Buyer's guide to writing a bill of quantities: line items, sizes, standards, materials, units, and the details that prevent wrong quotes and delayed deliveries.",
    keywords:
      "how to write a bill of quantities, BOQ, equipment list, procurement bill of quantities, how to prepare a BOQ",
    image: "/images/about-refinery.jpg",
    related: [
      "flanges-gaskets-and-bolting",
      "pipeline-fittings-and-schedules",
      "en-10204-material-certificates-explained",
    ],
  },
  {
    slug: "flanges-gaskets-and-bolting",
    title: "Flanges, Gaskets & Bolting",
    short: "How flanged connections hold, and how to spec them",
    tagline: "Choose the right flange class, gasket and stud bolts as a single matched system",
    category: "flanges-fittings-bolting",
    readTime: "8 min read",
    date: "2026-01-19",
    dateLabel: "19 January 2026",
    description:
      "ANSI/ASME B16.5 flanges, ASME B16.20 spiral wound gaskets and ASTM A193/A194 bolting explained for buyers — flange types, pressure classes, facing, and how the three elements work as one connection.",
    keywords:
      "ANSI B16.5 flanges, ASME B16.20 spiral wound gaskets, spiral wound gasket, stud bolts ASTM A193 B7, ASTM A194 2H, weld neck flange, blind flange",
    image: "/images/night-refinery.jpg",
    related: [
      "pipeline-fittings-and-schedules",
      "en-10204-material-certificates-explained",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "pipeline-fittings-and-schedules",
    title: "Pipeline Fittings & Schedules",
    short: "Elbows, tees, reducers and how schedules work",
    tagline: "Reading a fittings spec: ANSI B16.9, ASTM A234 WPB, schedules and ends",
    category: "flanges-fittings-bolting",
    readTime: "6 min read",
    date: "2026-01-26",
    dateLabel: "26 January 2026",
    description:
      "Butt-weld pipeline fittings decoded — 45° and 90° elbows, tees, reducers, schedule and wall thickness, material grades per ASTM A234, and the dimensions that make them interchangeable. ANSI B16.9.",
    keywords:
      "pipeline fittings, ANSI B16.9, ASTM A234 WPB, butt weld fittings, pipe schedule, long radius elbow, reducing tee, concentric reducer",
    image: "/images/pipes-plant.jpg",
    related: [
      "flanges-gaskets-and-bolting",
      "how-to-write-a-bill-of-quantities",
      "en-10204-material-certificates-explained",
    ],
  },
  {
    slug: "hot-tapping-and-line-stopping",
    title: "Hot Tapping & Line Stopping",
    short: "Modify live pipelines without shutting them down",
    tagline: "What hot tapping and line stopping are, when they are used, and the equipment that makes them possible",
    category: "pipeline-intervention-equipment",
    readTime: "7 min read",
    date: "2026-02-02",
    dateLabel: "2 February 2026",
    description:
      "A practical guide to hot tapping and line stopping — modifying live oil and gas pipelines without shutdown. Covers procedures, the equipment involved (tapping saddles, line stop fittings, pneumatic stoppers), and the standards that govern the work.",
    keywords:
      "hot tapping, line stopping, hot tap saddle, line stop equipment, pneumatic stopper, API RP 2201, live pipeline maintenance, stopple fitting",
    image: "/images/refinery-hazy-unsplash.jpg",
    related: [
      "pipeline-fittings-and-schedules",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "valves-and-actuation-explained",
    title: "Valves & Actuation for Oil and Gas: Types, Standards and Actuation",
    short: "Gate, ball, check and control valves — and how to choose the actuator",
    tagline:
      "Gate, globe, ball, check and butterfly valves explained, the API and ASME standards that govern them, and how to specify manual, pneumatic, electric or hydraulic actuation",
    category: "valves-actuation",
    readTime: "8 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "Valves and actuation for oil and gas explained: gate, globe, ball, check and butterfly valve types, API 600/602/6D and ASME B16.34, fire-safe design, and how to specify manual, pneumatic, electric or hydraulic actuation.",
    keywords:
      "oil and gas valves, API 6D valves, API 600 gate valve, trunnion mounted ball valve, valve actuator ISO 5211, fire safe valve API 607",
    image: "/images/train-refinery.jpg",
    related: [
      "flanges-gaskets-and-bolting",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "gaskets-and-sealing-products-explained",
    title: "Gaskets & Sealing Products Explained: Spiral Wound, RTJ & Kammprofile",
    short: "Choosing the right gasket type for the flange class and service",
    tagline:
      "Spiral wound, ring-type joint and kammprofile gaskets compared, and how to match the gasket to the flange class, facing and process fluid",
    category: "gaskets-sealing",
    readTime: "6 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "Gasket types for oil and gas flanged connections explained: spiral wound (API 601 / ASME B16.20), ring-type joint (RTJ), kammprofile and non-metallic sheet gaskets, and how to specify the right one.",
    keywords:
      "spiral wound gasket, ring type joint gasket, RTJ gasket, kammprofile gasket, ASME B16.20, API 601 gasket",
    image: "/images/about-refinery.jpg",
    related: [
      "flanges-gaskets-and-bolting",
      "en-10204-material-certificates-explained",
      "pipeline-fittings-and-schedules",
    ],
  },
  {
    slug: "pressure-vessels-tanks-and-heat-exchangers-explained",
    title: "Pressure Vessels, Tanks & Heat Exchangers: The Codes That Govern Them",
    short: "ASME Section VIII, API 650/620 and TEMA, explained for buyers",
    tagline:
      "What ASME Section VIII, API 650, API 620 and TEMA actually cover, and how to know which code applies to your vessel, tank or heat exchanger",
    category: "pressure-vessels-tanks",
    readTime: "7 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "Pressure vessels, storage tanks and heat exchangers explained for buyers: ASME Section VIII pressure vessels, API 650 and API 620 storage tanks, and TEMA-class shell-and-tube heat exchangers.",
    keywords:
      "ASME Section VIII pressure vessel, API 650 storage tank, API 620 tank, TEMA heat exchanger, shell and tube heat exchanger",
    image: "/images/hero-refinery.jpg",
    related: [
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "en-10204-material-certificates-explained",
      "api-610-pump-types-and-classes-explained",
    ],
  },
  {
    slug: "wellhead-and-christmas-tree-equipment-explained",
    title: "Wellhead & Christmas Tree Equipment Explained (API 6A)",
    short: "How wellhead pressure and material classes are set, in plain terms",
    tagline:
      "What a wellhead and Christmas tree assembly actually consists of, how API 6A pressure and material classes work, and what to check before you specify one",
    category: "wellhead-production-equipment",
    readTime: "7 min read",
    date: "2026-09-02",
    dateLabel: "2 September 2026",
    description:
      "Wellhead and Christmas tree equipment explained for buyers: API 6A pressure and material classes, casing and tubing head spools, production chokes, and sour service considerations under NACE MR0175 / ISO 15156.",
    keywords:
      "API 6A wellhead, Christmas tree oil and gas, casing head, tubing head, production choke, NACE MR0175 sour service",
    image: "/images/refinery-night-unsplash.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "en-10204-material-certificates-explained",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => Boolean(p));
}

export const blogPaths = blogPosts.map((p) => ({ slug: p.slug }));
