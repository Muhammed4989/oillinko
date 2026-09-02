export type Guide = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  category: string;
  readTime: string;
  updated: string;
  description: string;
  image: string;
};

export const guides: Guide[] = [
  {
    slug: "hot-tapping-and-line-stopping",
    title: "Hot tapping & line stopping",
    short: "Modify live pipelines without shutting them down",
    tagline: "What hot tapping and line stopping are, when they are used, and the equipment that makes them possible",
    category: "Pipeline maintenance",
    readTime: "7 min read",
    updated: "2026",
    description:
      "A practical guide to hot tapping and line stopping — modifying live oil and gas pipelines without shutdown. Covers procedures, the equipment involved (tapping saddles, line stop fittings, pneumatic stoppers), and the standards that govern the work.",
    image: "/images/refinery-hazy-unsplash.jpg",
  },
  {
    slug: "flanges-gaskets-and-bolting",
    title: "Flanges, gaskets & bolting",
    short: "How flanged connections hold, and how to spec them",
    tagline: "Choose the right flange class, gasket and stud bolts as a single matched system",
    category: "Flanged connections",
    readTime: "8 min read",
    updated: "2026",
    description:
      "ANSI/ASME B16.5 flanges, ASME B16.20 spiral wound gaskets and ASTM A193/A194 bolting explained for buyers — flange types, pressure classes, facing, and how the three elements work as one connection.",
    image: "/images/night-refinery.jpg",
  },
  {
    slug: "pipeline-fittings-and-schedules",
    title: "Pipeline fittings & schedules",
    short: "Elbows, tees, reducers and how schedules work",
    tagline: "Reading a fittings spec: ANSI B16.9, ASTM A234 WPB, schedules and ends",
    category: "Line pipe fittings",
    readTime: "6 min read",
    updated: "2026",
    description:
      "Butt-weld pipeline fittings decoded — 45° and 90° elbows, tees, reducers, schedule and wall thickness, material grades per ASTM A234, and the dimensions that make them interchangeable. ANSI B16.9.",
    image: "/images/pipes-plant.jpg",
  },
  {
    slug: "how-to-write-a-bill-of-quantities",
    title: "How to write a bill of quantities",
    short: "Get your equipment list right so suppliers can quote",
    category: "Buyer's guide",
    tagline: "A line-by-line approach to preparing an equipment list or bill of quantities (BOQ) that suppliers can quote accurately and competitively",
    readTime: "6 min read",
    updated: "2026",
    description:
      "Buyer's guide to writing a bill of quantities: line items, sizes, standards, materials, units, and the details that prevent wrong quotes and delayed deliveries.",
    image: "/images/about-refinery.jpg",
  },
];

export const guidePaths = guides.map((g) => ({
  slug: g.slug,
}));