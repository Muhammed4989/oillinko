import type { SectorId } from "./catalogue";

// Illustrative images: generic industry scenes, never supplier identities.
export const industryImages: Record<SectorId, { src: string; alt: string }> = {
  exploration: {
    src: "/images/industries/exploration.webp",
    alt: "Illustration of a geologist examining rock core samples at a field evaluation station",
  },
  drilling: {
    src: "/images/industries/drilling.webp",
    alt: "Illustration of an onshore drilling rig and pipe racks at a well construction site",
  },
  production: {
    src: "/images/blog/heroes/wellhead-production-equipment.webp",
    alt: "Illustration of wellhead valves and pressure gauges in an onshore production field",
  },
  pipelines: {
    src: "/images/blog/heroes/pipeline-intervention.webp",
    alt: "Illustration of pipeline intervention equipment and isolation valves on a transmission line",
  },
  refining: {
    src: "/images/hero-refinery.jpg",
    alt: "Refinery process towers, pipework and industrial plant structures",
  },
  gas: {
    src: "/images/blog/heroes/pressure-vessels-tanks.webp",
    alt: "Illustration of a large pressure vessel and heat exchanger tube bundle in a fabrication workshop",
  },
  offshore: {
    src: "/images/blog/heroes/seawater-pressure-reducing-valves-offshore-rfq-guide.webp",
    alt: "Illustration of seawater valve equipment on an offshore platform with the sea beyond",
  },
  power: {
    src: "/images/blog/heroes/electric-motor-rewinding-rfq-tests-data-acceptance-records.webp",
    alt: "Illustration of a technician working on the copper windings of an industrial electric motor",
  },
  water: {
    src: "/images/blog/heroes/vertical-turbine-pumps-tank-farms-cooling-water-intakes.webp",
    alt: "Illustration of a vertical turbine pump at an industrial water intake",
  },
  decommissioning: {
    src: "/images/industries/decommissioning.webp",
    alt: "Illustration of recovered steel pipes and restored land at a retired industrial site",
  },
  "energy-transition": {
    src: "/images/industries/energy-transition.webp",
    alt: "Illustration of heat exchangers and insulated pipes at a geothermal energy plant",
  },
};
