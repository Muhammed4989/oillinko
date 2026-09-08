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
    slug: "equipment-trading-companies-vs-buying-direct",
    title:
      "Equipment Trading Companies vs Buying Direct from the Manufacturer: Pros, Cons and When Each Makes Sense",
    short: "The trade-offs between routing an order through a trading company and buying direct from the factory",
    tagline:
      "Lead time, minimum order quantities, vendor vetting and multi-vendor shipments — what actually changes when an equipment RFQ goes through a sourcing partner instead of straight to the manufacturer",
    category: "buyers-guides",
    readTime: "8 min read",
    date: "2026-09-05",
    dateLabel: "5 September 2026",
    description:
      "Equipment trading companies vs buying direct from the manufacturer: how lead time, MOQs, vendor vetting, inspection coordination and multi-vendor shipments differ, plus a short framework for deciding which fits a given order.",
    keywords:
      "equipment trading company vs manufacturer, buying direct from manufacturer, oil and gas sourcing partner, equipment sourcing company, procurement trading company",
    image: "/images/train-refinery.jpg",
    related: [
      "what-an-oil-gas-equipment-sourcing-partner-actually-does",
      "consolidated-shipments-and-multi-vendor-orders",
      "common-reasons-an-rfq-goes-to-the-wrong-supplier",
    ],
  },
  {
    slug: "consolidated-shipments-and-multi-vendor-orders",
    title: "Consolidated Shipments and Multi-Vendor Orders: Why Buyers Use a Single Sourcing Partner",
    short: "How combining multiple vendors into one shipment actually works, and when it's worth it",
    tagline:
      "What shipment consolidation solves for multi-vendor equipment orders, when it isn't worth the extra handling, and what a sourcing partner should confirm before goods leave any factory",
    category: "buyers-guides",
    readTime: "8 min read",
    date: "2026-09-07",
    dateLabel: "7 September 2026",
    description:
      "Consolidated shipments and multi-vendor equipment orders explained: how consolidation works, minimum order quantities, Incoterms and paperwork across multiple vendors, inspection scheduling, and when direct shipment is still the better choice.",
    keywords:
      "consolidated shipment procurement, multi-vendor order oil and gas, freight consolidation equipment, LCL vs FCL shipment, Incoterms 2020, equipment sourcing partner logistics",
    image: "/images/about-refinery.jpg",
    related: [
      "common-reasons-an-rfq-goes-to-the-wrong-supplier",
      "how-to-write-a-bill-of-quantities",
      "third-party-inspection-tpi-oil-and-gas-equipment",
    ],
  },
  {
    slug: "common-reasons-an-rfq-goes-to-the-wrong-supplier",
    title: "Common Reasons an RFQ Goes to the Wrong Supplier — and How a Sourcing Partner Filters for Fit",
    short: "Why RFQs land on mismatched suppliers, and how to filter for real fit before sending one",
    tagline:
      "Trading-company confusion, specialization mismatches, capacity mismatches and communication gaps that send an RFQ to the wrong supplier, and what a sourcing partner should check before it goes out",
    category: "buyers-guides",
    readTime: "8 min read",
    date: "2026-09-07",
    dateLabel: "7 September 2026",
    description:
      "Why RFQs land on the wrong supplier: trading company vs manufacturer confusion, specialization and capacity mismatches, and communication gaps — and how a sourcing partner filters vendors for genuine fit before quoting.",
    keywords:
      "RFQ wrong supplier, vendor vetting oil and gas, how to evaluate a supplier, equipment sourcing partner, supplier capability mismatch, RFQ best practices procurement",
    image: "/images/train-refinery.jpg",
    related: [
      "consolidated-shipments-and-multi-vendor-orders",
      "how-to-write-a-bill-of-quantities",
      "third-party-inspection-tpi-oil-and-gas-equipment",
    ],
  },
  {
    slug: "what-an-oil-gas-equipment-sourcing-partner-actually-does",
    title: "What an Oil & Gas Equipment Sourcing Partner Actually Does (Beyond Placing the Order)",
    short: "Vendor vetting, comparable quotes, technical review, inspection coordination and freight — the work behind the RFQ",
    tagline:
      "What actually happens between sending a request for quotation and receiving the equipment: vendor vetting, comparable quotes, technical review, inspection coordination and Incoterms handling",
    category: "buyers-guides",
    readTime: "8 min read",
    date: "2026-09-05",
    dateLabel: "5 September 2026",
    description:
      "What an oil & gas equipment sourcing partner actually does beyond placing the order: vendor vetting, circulating comparable RFQs, technical review of quotes, inspection and witnessing coordination, and Incoterms and freight handling.",
    keywords:
      "what does a sourcing partner do, oil and gas equipment sourcing, vendor vetting oil and gas, RFQ circulation, equipment procurement partner",
    image: "/images/hero-refinery.jpg",
    related: [
      "equipment-trading-companies-vs-buying-direct",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "how-to-write-a-bill-of-quantities",
    ],
  },
  {
    slug: "api-682-mechanical-seal-piping-plans-explained",
    title: "API 682 Mechanical Seal Piping Plans Explained (Plans 11, 23, 32, 52, 53)",
    short: "What Plan 11, 23, 32, 52 and 53 actually do, and how to pick the right one",
    tagline:
      "How API 682 piping plans support a mechanical seal, the difference between Plan 52 and Plan 53, and what to check on a seal datasheet before you accept a quote",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-03",
    dateLabel: "3 September 2026",
    description:
      "API 682 mechanical seal piping plans explained for buyers: Plan 11, 23 and 32 single-seal flush plans, Plan 52 and Plan 53 dual-seal buffer/barrier systems, seal Category and Arrangement basics, and what to check on a seal datasheet.",
    keywords:
      "API 682 piping plans, mechanical seal Plan 11, Plan 23 seal flush, Plan 32 seal flush, API 682 Plan 52, API 682 Plan 53, seal buffer fluid, seal barrier fluid",
    image: "/images/pipes-plant.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "api-674-api-676-positive-displacement-pumps-explained",
      "gaskets-and-sealing-products-explained",
    ],
  },
  {
    slug: "api-674-api-676-positive-displacement-pumps-explained",
    title: "API 674 & API 676: Reciprocating and Rotary Positive Displacement Pumps",
    short: "When to specify a positive displacement pump instead of centrifugal, and which standard applies",
    tagline:
      "API 674 reciprocating pumps and API 676 rotary pumps compared — drive types, typical services, and what a positive displacement pump datasheet needs that a centrifugal one doesn't",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-03",
    dateLabel: "3 September 2026",
    description:
      "API 674 reciprocating and API 676 rotary positive displacement pumps explained for buyers: direct-acting vs power-frame drives, gear/screw/lobe/vane rotary types, relief valve and pulsation control requirements, and how they differ from API 610 centrifugal pumps.",
    keywords:
      "API 674 reciprocating pump, API 676 rotary pump, positive displacement pump oil and gas, twin screw pump, triplex plunger pump, API 675 metering pump",
    image: "/images/night-refinery.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "api-682-mechanical-seal-piping-plans-explained",
      "en-10204-material-certificates-explained",
      "api-675-metering-pumps-controlled-volume-dosing-explained",
    ],
  },
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
      "api-682-mechanical-seal-piping-plans-explained",
      "en-10204-material-certificates-explained",
      "api-674-api-676-positive-displacement-pumps-explained",
      "reading-a-pump-curve-explained",
      "vertical-turbine-pumps-tank-farms-cooling-water-intakes",
      "api-671-couplings-and-baseplate-design",
      "api-675-metering-pumps-controlled-volume-dosing-explained",
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
      "consolidated-shipments-and-multi-vendor-orders",
      "how-to-write-a-bill-of-quantities",
      "pump-factory-acceptance-testing-and-commissioning-checklist",
      "equipment-trading-companies-vs-buying-direct",
      "how-to-evaluate-and-vet-an-equipment-trading-company",
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
      "common-reasons-an-rfq-goes-to-the-wrong-supplier",
      "en-10204-material-certificates-explained",
      "what-an-oil-gas-equipment-sourcing-partner-actually-does",
      "how-to-evaluate-and-vet-an-equipment-trading-company",
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
  {
slug: "reading-a-pump-curve-explained",
    title: "Reading a Pump Curve: Head, Flow, NPSH and Best Efficiency Point Explained",
    short: "How to read a vendor's pump curve before you sign off on a quote",
    tagline:
      "What the head-capacity, efficiency and NPSH-required curves on a pump datasheet actually tell you, and how to check a vendor's curve against your system before you accept an offer",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-04",
    dateLabel: "4 September 2026",
    description:
      "How to read a centrifugal pump curve: head vs flow, best efficiency point (BEP), preferred and allowable operating regions, NPSH required vs available, the affinity laws, and what changed under API 610 Thirteenth Edition (2026).",
    keywords:
      "how to read a pump curve, best efficiency point, NPSH required vs available, API 610 preferred operating region, pump affinity laws, centrifugal pump curve explained",
    image: "/images/hero-refinery.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "api-674-api-676-positive-displacement-pumps-explained",
      "pump-factory-acceptance-testing-and-commissioning-checklist",
    ],
  },
  {
    slug: "pump-factory-acceptance-testing-and-commissioning-checklist",
    title: "Pump Commissioning and Factory Acceptance Testing (FAT) Checklist",
    short: "What to check at the factory, and what changes once the pump is on site",
    tagline:
      "The difference between FAT and commissioning, witness levels, the core factory tests, and a practical checklist for both stages of bringing a pump into service",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-04",
    dateLabel: "4 September 2026",
    description:
      "Pump factory acceptance testing (FAT) and commissioning explained: witness levels, hydrostatic, performance, NPSH, mechanical run and string tests, a FAT checklist, and what site commissioning re-checks after the pump arrives.",
    keywords:
      "pump factory acceptance test, pump FAT checklist, pump commissioning checklist, mechanical run test pump, pump string test, witnessed test vs unwitnessed",
    image: "/images/refinery-night-unsplash.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "reading-a-pump-curve-explained",
      "api-671-couplings-and-baseplate-design",
    ],
  },
  {
    slug: "how-to-evaluate-and-vet-an-equipment-trading-company",
    title: "How to Evaluate and Vet an Equipment Trading Company Before You Send Your First RFQ",
    short: "The checks that separate a real sourcing partner from a reseller with a PDF catalogue",
    tagline:
      "Company registration, manufacturer relationships, quality credentials, financial red flags and the documents to ask for before any deposit — how to vet an equipment trading company before you commit an order to it",
    category: "buyers-guides",
    readTime: "8 min read",
    date: "2026-09-06",
    dateLabel: "6 September 2026",
    description:
      "How to evaluate and vet an oil and gas equipment trading company before your first RFQ: company registration checks, manufacturer relationships, ISO 9001 and API Spec Q1 credentials, financial red flags, and the documents to request before any deposit.",
    keywords:
      "vet equipment trading company, oil and gas sourcing partner, how to choose a trading company, equipment supplier due diligence, RFQ red flags, ISO 9001 trading company, API Spec Q1",
    image: "/images/train-refinery.jpg",
    related: [
      "how-to-write-a-bill-of-quantities",
      "third-party-inspection-tpi-oil-and-gas-equipment",
      "en-10204-material-certificates-explained",
    ],
  },
  {
    slug: "vertical-turbine-pumps-tank-farms-cooling-water-intakes",
    title: "Vertical Turbine Pumps for Tank Farms and Cooling Water Intakes (API 610 VS)",
    short: "How the API 610 VS sub-types differ, and which ones actually get specified for tank farms and intakes",
    tagline:
      "VS1 through VS7 explained, why vertical turbine pumps solve NPSH problems a horizontal pump can't, and the intake design and testing details that decide whether the installed pump performs",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-06",
    dateLabel: "6 September 2026",
    description:
      "Vertical turbine pumps explained for buyers: the API 610 VS1-VS7 sub-types, why vertical configurations solve NPSH problems in tank farm transfer and cooling water intake service, ANSI/HI 9.8 intake design, lineshaft lubrication options, and factory testing.",
    keywords:
      "vertical turbine pump, API 610 VS6, API 610 VS1, can pump, cooling water intake pump, tank farm transfer pump, ANSI HI 9.8, NPSH vertical pump",
    image: "/images/hero-refinery.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "api-682-mechanical-seal-piping-plans-explained",
      "api-674-api-676-positive-displacement-pumps-explained",
    ],
  },
  {
    slug: "api-671-couplings-and-baseplate-design",
    title: "Special-Purpose Couplings (API 671) and Baseplate Design for Rotating Equipment",
    short: "How to specify the right coupling type and baseplate for critical rotating equipment",
    tagline:
      "Metallic flexible element, gear, quill shaft and torsional damping couplings compared, service factors and design life per API 671, and what API 686 requires for baseplate flatness, grouting and anchor bolt design",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-08",
    dateLabel: "8 September 2026",
    description:
      "Special-purpose couplings and baseplate design explained for buyers: API 671 coupling types (disc, diaphragm, gear, quill shaft, torsional damping), service factors, DBSE, and API 686 baseplate flatness, grouting and anchor bolt requirements.",
    keywords:
      "API 671 coupling, API 686 baseplate, special purpose coupling oil and gas, disc coupling API 671, gear coupling API, baseplate grouting rotating equipment, DBSE coupling, IOGP S-700",
    image: "/images/pipes-plant.jpg",
    related: [
      "api-610-pump-types-and-classes-explained",
      "api-674-api-676-positive-displacement-pumps-explained",
      "pump-factory-acceptance-testing-and-commissioning-checklist",
    ],
  },
  {
    slug: "api-675-metering-pumps-controlled-volume-dosing-explained",
    title: "API 675 Metering Pumps: Controlled-Volume Dosing Explained",
    short: "What API 675 accuracy, linearity and repeatability actually require of a metering pump",
    tagline:
      "Hydraulic diaphragm vs packed plunger metering pumps, the ±1% accuracy and 10:1 turndown requirements, relief valve and diaphragm rupture detection rules, and what to specify on an API 675 datasheet",
    category: "pumps-rotating-equipment",
    readTime: "9 min read",
    date: "2026-09-08",
    dateLabel: "8 September 2026",
    description:
      "API 675 metering pumps explained for buyers: hydraulic diaphragm vs packed plunger, steady-state accuracy ±1%, linearity and repeatability ±3%, 10:1 turndown ratio, relief valve requirements, diaphragm rupture detection, and testing.",
    keywords:
      "API 675 metering pump, API 675 controlled volume, hydraulic diaphragm metering pump, packed plunger metering pump, chemical injection pump API 675, dosing pump accuracy, turndown ratio 10:1",
    image: "/images/night-refinery.jpg",
    related: [
      "api-674-api-676-positive-displacement-pumps-explained",
      "api-682-mechanical-seal-piping-plans-explained",
      "api-610-pump-types-and-classes-explained",
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
