import type { CompanySpecialty } from "./companies";

export type CompanyProfile = {
  companyId: string;
  reviewedOn: string;
  introducedToOillinkoOn: string;
  productFamilies: { name: string; description: string; href: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  sourceLinks: { label: string; href: string }[];
  specialties: CompanySpecialty[];
};

export const companyProfiles: CompanyProfile[] = [
  {
    companyId: "shandong-hugong-valve",
    reviewedOn: "2026-09-22",
    introducedToOillinkoOn: "2026-09-22",
    specialties: ["valves"],
    productFamilies: [
      { name: "Gate, ball and plug valves", description: "Isolation-valve families shown in cast, forged, flanged, threaded and welded configurations across the supplied catalogue.", href: "/oil-and-gas/equipment/valves/ball-gate-and-plug-valves" },
      { name: "Globe and control valves", description: "Manual globe-valve ranges and control-valve products that require duty, trim, actuator and shutoff requirements in the enquiry.", href: "/oil-and-gas/equipment/valves/globe-and-control-valves" },
      { name: "Butterfly and check valves", description: "Butterfly-valve and non-return-valve families for industrial piping, with construction and seat selection confirmed against the service.", href: "/oil-and-gas/equipment/valves/butterfly-and-check-valves" },
      { name: "Safety and relief valves", description: "Pressure-protection products listed by the manufacturer; selection requires the relieving case and project acceptance basis.", href: "/oil-and-gas/equipment/valves/safety-and-relief-valves" },
      { name: "Actuated valve packages", description: "Valve assemblies shown with electric or pneumatic operation, subject to torque, controls, fail action and interface confirmation.", href: "/oil-and-gas/equipment/valves/actuators-and-positioners" },
    ],
    sections: [
      {
        heading: "Company and manufacturing scope",
        paragraphs: [
          "Shandong Hugong Valve Manufacturing Co., Ltd. is a valve manufacturer based in Weifang, Shandong, China. The company states that it began operating in 1987 and develops, manufactures, sells and services industrial valves. Oillinko received the company introduction and product catalogue directly as a prospective manufacturing source in September 2026. This profile records the source for buyer research; it does not describe Hugong as an appointed Oillinko supplier, authorised partner or approved vendor for any project.",
          "The manufacturer presents a broad portfolio covering gate, globe, check, ball, butterfly and control valves, together with relief, diaphragm, plug, plunger, drain, power-station and hydraulic-control valve families. Its public materials identify petroleum, chemical, power, metallurgical, building-services, heating and water applications. A portfolio statement is only the first qualification step. The actual offer must identify the exact manufacturing entity, factory, model, design basis, materials, pressure designation and inspection documents for the ordered valves.",
        ],
      },
      {
        heading: "What the supplied catalogue contains",
        paragraphs: [
          "The 87-page catalogue supplied to Oillinko is a combined company and product reference. It opens with a company profile, certificate images, production-process overview, application areas, market map and a detailed contents index. The product section then presents dimensional tables, construction drawings, material schedules and selected performance information for numerous valve designs. Product groupings include wedge and knife gate valves, globe valves, check valves, ball valves, butterfly valves and additional engineered valve types.",
          "The catalogue is useful for establishing whether a family may warrant a technical enquiry, but it is not a purchase specification. Tables can refer to different standards, body materials, pressure classes, temperature ranges and end connections. A buyer should quote the catalogue page or model only as a reference and attach the project datasheet. Oillinko will use that information to ask for a current, item-specific proposal and to identify deviations rather than treating every option printed in the brochure as simultaneously available.",
        ],
      },
      {
        heading: "Standards, testing and document review",
        paragraphs: [
          "Hugong's website says its product range can be manufactured to standards including GB, DIN, API, ANSI, JIS and BS. Individual product pages name more specific references; for example, a gate-valve page cites design, face-to-face and testing documents. These statements must be checked against the offered model because a general standards list does not prove that every valve is designed, tested or marked to every standard named by the company.",
          "A usable quotation should identify the governing valve product standard and edition, pressure-temperature rating basis, shell and trim materials, seat construction, end-connection standard, testing standard and required records. Buyers should also specify whether material certificates, pressure-test reports, dimensional drawings, coating records, nondestructive examination, inspection-and-test plans or third-party witnessing are required. Acceptance depends on the purchase order and approved project documents, not on the presence of a standards logo in a brochure.",
        ],
      },
      {
        heading: "How Oillinko treats the CE statement",
        paragraphs: [
          "The company's message to Oillinko states that different valve types can be supplied with CE certification. The public company pages and the supplied catalogue do not establish that every displayed product is covered by one current CE document. Oillinko therefore records CE as a quotation-specific claim that requires supporting evidence before it is repeated in a customer offer or used for technical acceptance.",
          "Where CE evidence is required, the enquiry should state the applicable market and legal requirement. The manufacturer should then provide the declaration or certificate for the exact product scope, identify the legal manufacturer and assessment route, and show the referenced legislation, standards, issue date and product identification. The responsible buyer or conformity specialist must review whether the document applies to the offered valve and assembly. An unrelated management-system certificate or a certificate for another product family is not a substitute.",
        ],
      },
      {
        heading: "Information needed for a comparable valve quotation",
        paragraphs: [
          "Send the valve type, size, pressure class or PN, design and testing standards, body and trim materials, seat materials, end connections, bore requirement, operating medium, design pressure and temperature, quantity and required actuation. For control or actuated valves, add the flow cases, pressure drop, fail action, utility supply, signal, accessories and area-classification requirements. For replacement valves, include tag details, photographs, nameplate information and interface dimensions where available.",
          "Also state the requested manufacturing origin, delivery country, required delivery date, packing and preservation requirements, document schedule and inspection points. Country of company headquarters and country of manufacture are separate facts; manufacturing origin must be confirmed for the actual offered item. Oillinko receives the enquiry first, reviews the scope and coordinates the quotation. The buyer is not routed automatically to the manufacturer, and commercial or technical acceptance remains subject to the final offer and project review.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Official company website", href: "https://www.cnvalve-mfg.com/" },
      { label: "Official company profile", href: "https://www.cnvalve-mfg.com/about.html" },
      { label: "Official product directory", href: "https://www.cnvalve-mfg.com/product/1.html" },
    ],
  },
];

export function companyProfilePath(companyId: string) {
  return `/oil-and-gas/companies/${companyId}`;
}

export function getCompanyProfile(companyId: string) {
  return companyProfiles.find(profile => profile.companyId === companyId);
}
