export const companyDirectoryPath = "/oil-and-gas/companies";

export const companyRoles = {
  manufacturer: "Equipment manufacturers",
  technology: "Oilfield technology & services",
  engineering: "Engineering & project delivery",
  operator: "Energy operators & producers",
} as const;

export const companySpecialties = {
  pumps: { name: "Pumps & fluid handling", href: "/oil-and-gas/equipment/pumps" },
  valves: { name: "Valves & flow control", href: "/oil-and-gas/equipment/valves" },
  instrumentation: { name: "Instrumentation & automation", href: "/oil-and-gas/equipment/instrumentation-control" },
  electrical: { name: "Electrical & power", href: "/oil-and-gas/equipment" },
  drilling: { name: "Drilling & well construction", href: "/industries/drilling" },
  production: { name: "Production & well services", href: "/industries/production" },
  subsea: { name: "Offshore & subsea", href: "/industries/offshore" },
  gas: { name: "Gas, LNG & compression", href: "/industries/gas" },
  refining: { name: "Refining & petrochemicals", href: "/industries/refining" },
  piping: { name: "Pipes, tubing & fittings", href: "/oil-and-gas/equipment/flanges-fittings-bolting" },
  sealing: { name: "Seals & equipment reliability", href: "/oil-and-gas/equipment/gaskets-seals" },
  engineering: { name: "Engineering & project services", href: "/oil-and-gas/services" },
  water: { name: "Water & process treatment", href: "/industries/water" },
} as const;

export type CompanyRole = keyof typeof companyRoles;
export type CompanySpecialty = keyof typeof companySpecialties;
export type DirectoryCompany = {
  id: string;
  name: string;
  headquarters: string;
  region: string;
  role: CompanyRole;
  specialties: CompanySpecialty[];
  description: string;
  website: string;
  reviewedOn: string;
};

// Reference records only. Commercial relationships, stock and manufacturing
// origin belong to separately verified records, never to a company listing.
export const companies: DirectoryCompany[] = [
  { id: "flowserve", name: "Flowserve", headquarters: "United States", region: "North America", role: "manufacturer", specialties: ["pumps", "valves", "sealing"], description: "Pumps, valves, mechanical seals and actuation for fluid-handling systems. Relevant to process plants, pipeline pumping stations and equipment maintenance where the duty and installed configuration must be specified.", website: "https://www.flowserve.com/", reviewedOn: "2026-09-13" },
  { id: "sulzer", name: "Sulzer", headquarters: "Switzerland", region: "Europe", role: "manufacturer", specialties: ["pumps", "water", "sealing"], description: "Pumping, separation and mixing technology, alongside rotating-equipment services. Its portfolio spans industrial processes and water applications; equipment selection depends on the actual medium, operating conditions and project requirements.", website: "https://www.sulzer.com/", reviewedOn: "2026-09-13" },
  { id: "ksb", name: "KSB", headquarters: "Germany", region: "Europe", role: "manufacturer", specialties: ["pumps", "valves", "water"], description: "Pumps, valves and supporting services for energy, chemicals, water and general industry. A useful reference for liquid-transfer and process duties, with model-specific documentation needed before comparing quotations.", website: "https://www.ksb.com/en-global", reviewedOn: "2026-09-13" },
  { id: "emerson", name: "Emerson", headquarters: "United States", region: "North America", role: "manufacturer", specialties: ["instrumentation", "valves", "electrical"], description: "Measurement instruments, control valves and industrial automation technology. Enquiries should identify the required brand, complete model code, process connection and control-system interface for the particular installation.", website: "https://www.emerson.com/", reviewedOn: "2026-09-13" },
  { id: "grundfos", name: "Grundfos", headquarters: "Denmark", region: "Europe", role: "manufacturer", specialties: ["pumps", "water"], description: "Water pumps, dosing systems and associated controls for industrial and utility applications. Relevant requirements include cooling water, water treatment and chemical dosing, with materials and duty points specified for each system.", website: "https://www.grundfos.com/", reviewedOn: "2026-09-13" },
  { id: "abb", name: "ABB", headquarters: "Switzerland", region: "Europe", role: "manufacturer", specialties: ["electrical", "instrumentation"], description: "Electrification and automation technology, including motors, drives, measurement and process control. The appropriate business and product range depend on the electrical duty, process application and installed system.", website: "https://global.abb/", reviewedOn: "2026-09-13" },
  { id: "siemens", name: "Siemens", headquarters: "Germany", region: "Europe", role: "manufacturer", specialties: ["instrumentation", "electrical"], description: "Industrial automation, process instrumentation and electrical infrastructure technology. Complete ordering codes help distinguish device options, communication protocols and approvals; Siemens and Siemens Energy are separate company references.", website: "https://www.siemens.com/", reviewedOn: "2026-09-13" },
  { id: "yokogawa", name: "Yokogawa", headquarters: "Japan", region: "Asia", role: "manufacturer", specialties: ["instrumentation", "refining"], description: "Process measurement, control systems and industrial automation for energy and process industries. Typical enquiries concern transmitters, analysers, control-system components and lifecycle support for a defined plant installation.", website: "https://www.yokogawa.com/", reviewedOn: "2026-09-13" },
  { id: "endress-hauser", name: "Endress+Hauser", headquarters: "Switzerland", region: "Europe", role: "manufacturer", specialties: ["instrumentation", "water", "refining"], description: "Process instrumentation for flow, level, pressure, temperature and liquid analysis. Measurement range, wetted materials and process connections are central to selecting a suitable instrument and identifying replacement devices.", website: "https://www.endress.com/", reviewedOn: "2026-09-13" },
  { id: "slb", name: "SLB", headquarters: "United States, France & Netherlands (executive offices)", region: "North America / Europe", role: "technology", specialties: ["drilling", "production", "subsea"], description: "Technology and services across reservoir evaluation, well construction, completions and production. Its broad oilfield portfolio includes equipment, field services and digital tools, which require different technical and commercial enquiry scopes.", website: "https://www.slb.com/", reviewedOn: "2026-09-13" },
  { id: "halliburton", name: "Halliburton", headquarters: "United States", region: "North America", role: "technology", specialties: ["drilling", "production"], description: "Oilfield services and technology spanning formation evaluation, drilling, cementing, completions and production. Service enquiries should explain the well conditions, location, programme and responsibilities as well as any required equipment.", website: "https://www.halliburton.com/", reviewedOn: "2026-09-13" },
  { id: "baker-hughes", name: "Baker Hughes", headquarters: "United States", region: "North America", role: "technology", specialties: ["drilling", "production", "gas"], description: "Energy technology combining oilfield equipment and services with industrial technology, including compression and turbomachinery. The requested business line, asset duty and model reference determine the appropriate sourcing enquiry.", website: "https://www.bakerhughes.com/", reviewedOn: "2026-09-13" },
  { id: "nov", name: "NOV", headquarters: "United States", region: "North America", role: "manufacturer", specialties: ["drilling", "production", "subsea"], description: "Equipment and technology for drilling, well construction and energy production. Installed equipment identification, interface drawings and the required spare or assembly are useful starting points for a technical request.", website: "https://www.nov.com/", reviewedOn: "2026-09-13" },
  { id: "technipfmc", name: "TechnipFMC", headquarters: "United Kingdom; operational headquarters in United States", region: "Europe / North America", role: "technology", specialties: ["subsea", "production", "engineering"], description: "Subsea and surface production systems, integrated project delivery and related services. Equipment interfaces and field-development requirements are essential context. TechnipFMC and Technip Energies are listed as separate organisations.", website: "https://www.technipfmc.com/", reviewedOn: "2026-09-13" },
  { id: "technip-energies", name: "Technip Energies", headquarters: "France (operational headquarters)", region: "Europe", role: "engineering", specialties: ["engineering", "gas", "refining"], description: "Engineering and technology for LNG, hydrogen, ethylene and other process facilities. Its role covers project development and delivery as well as proprietary technology, distinct from a general equipment distributor.", website: "https://www.ten.com/en", reviewedOn: "2026-09-13" },
  { id: "saipem", name: "Saipem", headquarters: "Italy", region: "Europe", role: "engineering", specialties: ["engineering", "subsea", "drilling"], description: "Engineering, construction and drilling services for offshore and onshore energy projects. An enquiry needs a defined project package, site conditions, execution boundaries and deliverables rather than only a product description.", website: "https://www.saipem.com/en", reviewedOn: "2026-09-13" },
  { id: "wood", name: "Wood", headquarters: "United Kingdom", region: "Europe", role: "engineering", specialties: ["engineering", "production", "refining"], description: "Engineering, consulting and operations support for energy and materials projects. Relevant scopes include studies, design, asset support and project services, with responsibilities and required deliverables established for each assignment.", website: "https://www.woodgroup.com/", reviewedOn: "2026-09-13" },
  { id: "shell", name: "Shell", headquarters: "United Kingdom", region: "Europe", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy company active in oil and gas production, LNG and downstream businesses. Listed as an industry operator reference; this entry does not offer access to its tenders or supplier approval programmes.", website: "https://www.shell.com/", reviewedOn: "2026-09-13" },
  { id: "bp", name: "bp", headquarters: "United Kingdom", region: "Europe", role: "operator", specialties: ["production", "gas", "refining"], description: "An energy company with upstream, gas and downstream operations. Its presence in the directory helps distinguish an asset owner and operator from an equipment manufacturer or a local sales distributor.", website: "https://www.bp.com/", reviewedOn: "2026-09-13" },
  { id: "totalenergies", name: "TotalEnergies", headquarters: "France", region: "Europe", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy company with oil, natural gas, LNG and electricity activities. A reference for understanding the operator side of the energy supply chain, where purchasing conditions are project and entity specific.", website: "https://totalenergies.com/", reviewedOn: "2026-09-13" },
  { id: "equinor", name: "Equinor", headquarters: "Norway", region: "Europe", role: "operator", specialties: ["subsea", "production", "gas"], description: "An energy company with offshore oil and gas production and additional energy activities. Its offshore operating context is relevant to subsea systems, production facilities and asset-lifecycle requirements.", website: "https://www.equinor.com/", reviewedOn: "2026-09-13" },
  { id: "exxonmobil", name: "ExxonMobil", headquarters: "United States", region: "North America", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy and petrochemical company spanning upstream production, refining and chemical businesses. Listed for industry context; qualification, purchasing and technical requirements belong to the relevant operating entity and project.", website: "https://corporate.exxonmobil.com/", reviewedOn: "2026-09-13" },
  { id: "chevron", name: "Chevron", headquarters: "United States", region: "North America", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy company with oil and gas production, refining and related businesses. Operator-specific references in a specification should be checked against the actual project documents and purchasing organisation.", website: "https://www.chevron.com/", reviewedOn: "2026-09-13" },
  { id: "petrobras", name: "Petrobras", headquarters: "Brazil", region: "South America", role: "operator", specialties: ["subsea", "production", "refining"], description: "A Brazilian energy company active in exploration, production and refining, including deepwater developments. Listed as an operator reference for offshore production and downstream industrial requirements.", website: "https://petrobras.com.br/en", reviewedOn: "2026-09-13" },
  { id: "petronas", name: "PETRONAS", headquarters: "Malaysia", region: "Asia", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy group with upstream, gas and downstream businesses. Its activities provide context for LNG facilities, production assets and petrochemical projects; company approval and current opportunities require separate verification.", website: "https://www.petronas.com/", reviewedOn: "2026-09-13" },
  { id: "aramco", name: "Aramco", headquarters: "Saudi Arabia", region: "Middle East", role: "operator", specialties: ["production", "gas", "refining"], description: "An integrated energy and chemicals company active across upstream and downstream operations. Inclusion is an industry reference and does not represent an Oillinko customer relationship or approved-vendor status.", website: "https://www.aramco.com/", reviewedOn: "2026-09-13" },
  { id: "sasol", name: "Sasol", headquarters: "South Africa", region: "Africa", role: "operator", specialties: ["refining", "gas"], description: "An energy and chemicals company with operations connected to fuels, gas and chemical production. Relevant industry requirements include process equipment, plant instrumentation and maintenance of continuous-production facilities.", website: "https://www.sasol.com/", reviewedOn: "2026-09-13" },
  { id: "woodside-energy", name: "Woodside Energy", headquarters: "Australia", region: "Oceania", role: "operator", specialties: ["gas", "subsea", "production"], description: "An energy company with oil, gas and LNG developments and operating assets. Listed to represent the project and operator context behind offshore production, gas processing and LNG equipment requirements.", website: "https://www.woodside.com/", reviewedOn: "2026-09-13" },
  { id: "petrochina", name: "PetroChina", headquarters: "China", region: "Asia", role: "operator", specialties: ["production", "gas", "refining"], description: "An oil and gas company with exploration, production, refining, chemical and natural-gas businesses. This operator reference is separate from the manufacturers and contractors that may supply an individual project.", website: "https://www.petrochina.com.cn/", reviewedOn: "2026-09-13" },
  { id: "tenaris", name: "Tenaris", headquarters: "Luxembourg (registered headquarters)", region: "Europe", role: "manufacturer", specialties: ["piping", "drilling", "production"], description: "Steel tubular products and services for energy applications, including casing, tubing and line pipe. Grade, dimensions, connection type and inspection documentation are central to a usable tubular-products enquiry.", website: "https://www.tenaris.com/", reviewedOn: "2026-09-13" },
  { id: "vallourec", name: "Vallourec", headquarters: "France", region: "Europe", role: "manufacturer", specialties: ["piping", "drilling", "production"], description: "Tubular products and associated services for energy and industrial applications. Requirements may include well tubulars or line pipe, with material grade, connection requirements and service conditions defined for each use.", website: "https://www.vallourec.com/", reviewedOn: "2026-09-13" },
  { id: "swagelok", name: "Swagelok", headquarters: "United States", region: "North America", role: "manufacturer", specialties: ["piping", "valves", "instrumentation"], description: "Fluid-system components including tube fittings, valves, regulators and sampling-system products. Component materials, tube dimensions and connection compatibility help identify the correct configuration for an instrument or process installation.", website: "https://www.swagelok.com/", reviewedOn: "2026-09-13" },
  { id: "john-crane", name: "John Crane", headquarters: "United States", region: "North America", role: "manufacturer", specialties: ["sealing", "pumps", "gas"], description: "Mechanical seals, seal-support systems, couplings and related equipment services. Replacement enquiries benefit from equipment tags, seal drawings and operating conditions so that the proposed configuration can be reviewed correctly.", website: "https://www.johncrane.com/", reviewedOn: "2026-09-13" },
  { id: "atlas-copco", name: "Atlas Copco", headquarters: "Sweden", region: "Europe", role: "manufacturer", specialties: ["gas", "water"], description: "Compressed-air and gas systems, vacuum technology and related industrial equipment. Compressor enquiries should distinguish the working medium, pressure, capacity and treatment requirements, including any site utility and installation constraints.", website: "https://www.atlascopco.com/", reviewedOn: "2026-09-13" },
  { id: "alfa-laval", name: "Alfa Laval", headquarters: "Sweden", region: "Europe", role: "manufacturer", specialties: ["refining", "water", "gas"], description: "Heat-transfer, separation and fluid-handling equipment for process and energy applications. Selection needs thermal or separation duty, process-fluid information, materials and maintenance requirements for the specific installation.", website: "https://www.alfalaval.com/", reviewedOn: "2026-09-13" },
  { id: "weg", name: "WEG", headquarters: "Brazil", region: "South America", role: "manufacturer", specialties: ["electrical", "instrumentation"], description: "Electric motors, drives, generators and automation equipment for industrial applications. Motor and drive enquiries should identify ratings, supply characteristics, mounting, duty and environmental requirements before technical comparison.", website: "https://www.weg.net/", reviewedOn: "2026-09-13" },
];

export type CompanyFilters = { search: string; role: string; specialty: string };
export function readCompanyFilters(query: Record<string, string | string[] | undefined>): CompanyFilters {
  const read = (key: string) => typeof query[key] === "string" ? query[key].trim().slice(0, 160) : "";
  // Retain unknown values: an invalid filter must not silently broaden results.
  return { search: read("search"), role: read("role"), specialty: read("specialty") };
}

export function filterCompanies(filters: CompanyFilters) {
  const words = filters.search.toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
  return companies.filter(company => {
    const haystack = [company.name, company.headquarters, company.region, company.description, companyRoles[company.role], ...company.specialties.map(id => companySpecialties[id].name)].join(" ").toLocaleLowerCase("en");
    return (!filters.role || company.role === filters.role)
      && (!filters.specialty || company.specialties.some(id => id === filters.specialty))
      && words.every(word => haystack.includes(word));
  }).sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export function companySearchUrl(filters: CompanyFilters) {
  const query = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => { if (value) query.set(key, value); });
  return companyDirectoryPath + (query.size ? `?${query}` : "");
}
