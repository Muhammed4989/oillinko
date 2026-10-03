import { blogPosts, postUrl } from "./blog";
import { catalogue, typeUrl } from "./catalogue";
import { catalogueTopicGuidance } from "./catalogue-topic-guidance";
import type { ContentSection } from "./catalogue-content";

function articleLink(slug: string, label: string) {
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) throw new Error(`Missing inspection reading: ${slug}`);
  return { label, href: postUrl(post) };
}

function serviceLink(id: string, label: string) {
  const group = catalogue.find(group => group.types.some(item => item.id === id));
  const item = group?.types.find(item => item.id === id);
  if (!group || !item) throw new Error(`Missing related inspection service: ${id}`);
  return { label, href: typeUrl(group, item) };
}

// Procurement guidance supported by the primary sources and limits recorded in
// docs/inspection-service-content-2026-10-04.md. Existing anchors are retained.
export const inspectionSpecificationGuidance: Record<string, Record<string, string>> = {
  "inspection-ndt-and-material-testing": {
    "Inspection method and asset": "Identify the equipment tag, weld or material lot and the question the examination must answer. Thickness measurement, examination for weld discontinuities, chemical analysis and mechanical testing produce different evidence. Include the material, dimensions, drawing revision and inspection stage, with the prescribed method and technique if these have already been selected. When selection remains open, request a proposed method and its limitations for technical approval. An NDT crew quotation should not be interpreted as authority to choose the project's acceptance basis.",
    "Quantity or coverage": "Provide the inspection population and define coverage in the units that describe the work: individual weld references, examined length, mapped area, components or laboratory specimens. Identify any approved sampling plan and the treatment of inaccessible locations. A request for one hundred per cent inspection still needs a defined boundary; it could refer to every weld, each accessible surface or a specified examination volume. State how extensions, rejected samples and repeat examinations will be authorized and priced. Keep estimated quantities identifiable until the current drawings and physical access have been reviewed.",
    "Acceptance criteria": "State the controlling specification, applicable edition, component classification and project amendments, with the responsible reviewer. Separate the examination procedure from the criteria used to evaluate its findings. A report that identifies an indication is not automatically an acceptance certificate, and a chemical grade match does not establish every property required by a material specification. Ask the proposal to identify information still needed for interpretation. Where a laboratory must issue a statement of conformity, agree the decision rule and reporting basis before testing rather than infer them from a pass or fail label.",
    "Site and personnel qualification needs": "Identify the site, work window and owner-controlled access arrangements, together with the required personnel certification scheme, method, level and sector where applicable. Request evidence for the actual proposed personnel and confirm who authorizes the assignment. For laboratory work, identify the required test and check it against the laboratory's current accredited scope if accreditation is specified. Separate mobilization, preparation, access equipment and report review from the examination itself. A provider's general capability statement does not confirm that every location, technique or deliverable in your enquiry is covered."
  }
};

export const inspectionProposalGuidance: Record<string, string> = {
  "inspection-ndt-and-material-testing": "For inspection, NDT and material testing, compare the same examination locations, laboratory tests, personnel requirements and evidence package in every proposal. Separate mobilization from productive examination time and identify who provides surface preparation, access and specimen transport. Ask whether technical review, retained data, repeat attendance and examination after repair are included. A preliminary quantity allowance should remain visible rather than become an implied fixed scope. Oillinko receives your enquiry and coordinates clarification; the proposed specialist, qualifications and project suitability are reviewed for the actual assignment."
};

export const inspectionTopicGuidance: Record<string, ContentSection[]> = {
  "inspection-ndt-and-material-testing": [
    ...catalogueTopicGuidance["inspection-ndt-and-material-testing"],
    { title: "What does a personnel certificate actually cover?", paragraphs: [
      "Check the certification scheme before comparing credentials. Employer-based certification using SNT-TC-1A relies on the employer's written practice and certification responsibility. A training course or examination record is not, by itself, the employer's certification for the proposed assignment. Central certification under ISO 9712 has a different basis. Ask for the method, level, relevant sector or limitations, validity and issuing organization, then review the authorization required for the actual work. Similar wording on two certificates can describe different arrangements.",
      "Keep personnel certification separate from the inspection procedure and from laboratory accreditation. A person qualified for one method should not be assumed to cover every technique named in a proposal. Identify who prepares or approves the procedure, who performs the examination and who evaluates or signs the results. Where a specialist is substituted before mobilization, apply the same document review to the replacement. The purchasing requirement should establish these responsibilities without claiming that a particular credential alone guarantees the final result."
    ] },
    { title: "Can PMI replace the material certificate or mechanical tests?", paragraphs: [
      "Positive material identification helps answer a composition question at the examined locations. It does not establish tensile properties, toughness, heat treatment or the complete history of a component. Handheld XRF has analytical limitations: it does not directly measure carbon, and surface coatings or contamination can affect its results. If acceptance depends on carbon content or another element the proposed method cannot determine, request a suitable analytical approach for review. An instrument's displayed alloy name should not be treated as complete certification to a material specification.",
      "Link the requested measurements to the component identity, required elements and approved coverage plan. Clarify whether the work includes base material, weld metal or separate assembly parts, because those locations can represent different materials. State the condition in which the owner will present each item and ask the provider to identify any preparation or access assumptions. Keep PMI findings, original material inspection documents and additional laboratory results as separate evidence that can be reconciled. The detailed PMI guide below explains the analytical buying question; the service enquiry should define who supplies that evidence and its traceability."
    ] },
    { title: "How should laboratory samples and accredited scope be specified?", paragraphs: [
      "Describe each required test with its method, material, specimen source and reporting objective. ISO/IEC 17025 concerns the competence of testing and calibration laboratories; purchasing review still needs the laboratory's specific scope when accredited testing is required. Check the named facility, test method and relevant material or measurement range rather than relying on an accreditation logo alone. Ask which proposed activities will be carried out within that scope and which, if any, are subcontracted. Identify the reports expected from each participating facility.",
      "Agree how samples will remain linked to the original component or material lot. Record the proposed sample identifiers, drawing locations, heat references and the party authorizing removal. Cutting a specimen, transporting it, preparing it and performing the test are different parts of the service package. Define the quantity supplied and any allowance needed for repeat tests or retained specimens under the approved plan. No destructive sampling should be assumed authorized merely because a buyer requests a laboratory quotation.",
      "Specify the reporting and sample disposition requirements before comparing prices. The report should make the tested specimen and method identifiable, with the results, units and limitations needed for review. Where a statement of conformity is required, the acceptance requirement and decision rule should be agreed with the responsible parties. Identify who receives unused material, how long retained specimens or records are held and whether disposal is included. Accreditation supports confidence in the stated testing scope; it does not establish that every result automatically satisfies the purchaser's design or release requirements."
    ] },
    { title: "What belongs in a comparable inspection quotation?", paragraphs: [
      "Build the commercial comparison around a defined work package. For example, a fabrication enquiry might identify welds on a numbered map, the approved examination method, the coverage required by the project and the records needed at a hold point. Ask each provider to price that same basis. A daily crew rate cannot be compared directly with a price per examined weld until mobilization, access, preparation, productive hours and reporting are aligned. This example is a way to structure purchasing information, not a recommended inspection percentage or acceptance criterion.",
      "Separate the initial visit, examination work, technical interpretation and final dossier in the proposal. Define whether waiting for access, additional locations, repeat attendance and examination after an approved repair are included or priced separately. Ask how a quantity change will be measured and who can authorize it. If a preliminary offer assumes unobstructed access or a prepared surface, retain that assumption in the comparison rather than treating its total as the final cost for every site condition.",
      "Close the comparison with a deliverables and review schedule: procedure submission if required, personnel records, proposed work dates, preliminary findings and the final signed report package. Identify the owner or engineering team's acceptance role and any outstanding information that prevents a firm proposal. Send the scope to Oillinko with your location, required dates and supporting documents so clarification can be coordinated manually. Do not include account credentials, confidential third-party commercial terms or an instruction to proceed when the enquiry is only for pricing."
    ], links: [
      articleLink("positive-material-identification-xrf-oes-buyers-guide", "PMI methods and the evidence needed for alloy verification"),
      articleLink("phased-array-ut-weld-inspection-scope-records", "Define phased array UT weld coverage and retained records"),
      articleLink("inspection-test-plans-hold-vs-witness-points", "Inspection test plans: hold points, witness points and review"),
      articleLink("en-10204-material-certificates-explained", "Choose material inspection documents and reconcile traceability"),
      serviceLink("advanced-ndt-and-corrosion-mapping", "Advanced NDT and corrosion mapping service scope")
    ] }
  ]
};
