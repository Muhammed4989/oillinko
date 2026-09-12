export const sectors = [
  { id: "exploration", name: "Exploration & Reservoir", description: "Surveying, formation evaluation and reservoir data acquisition before and during field development." },
  { id: "drilling", name: "Drilling & Well Construction", description: "Rig equipment, tubulars, drilling fluids, cementing and well-control requirements." },
  { id: "production", name: "Completion & Production", description: "Well completion, artificial lift, surface production and field maintenance." },
  { id: "pipelines", name: "Pipelines & Terminals", description: "Transmission lines, pumping stations, storage terminals and integrity work." },
  { id: "refining", name: "Refining & Petrochemicals", description: "Process units, rotating equipment, instrumentation and plant turnaround requirements." },
  { id: "gas", name: "Gas, LNG & LPG", description: "Gas treatment, compression, liquefaction, storage and regasification facilities." },
  { id: "offshore", name: "Offshore & Marine", description: "Offshore production, subsea operations, marine support and harsh-environment equipment." },
  { id: "power", name: "Power & Utilities", description: "Electrical power, steam, cooling, compressed air and industrial utility systems." },
  { id: "water", name: "Water & Environment", description: "Produced water, industrial water treatment, wastewater and environmental monitoring." },
] as const;

export type SectorId = typeof sectors[number]["id"];
export const applications = ["New projects", "Maintenance & spares", "Plant turnarounds", "Inspection & testing", "Rental & field services"];
export const originCountries = ["Turkey", "Germany", "United States", "United Kingdom", "Italy", "France", "Spain", "Netherlands", "Switzerland", "Sweden", "Norway", "Finland", "Austria", "Belgium", "Poland", "Czechia", "Canada", "Mexico", "Brazil", "Japan", "South Korea", "China", "India", "Taiwan", "Singapore", "Malaysia", "Indonesia", "Australia", "Saudi Arabia", "United Arab Emirates", "Qatar", "Oman", "Egypt", "South Africa"];

export type CatalogueType = { id: string; name: string; description: string; requirements: string[] };
export type CatalogueGroup = { slug: string; name: string; summary: string; sectors: SectorId[]; applications: string[]; kind: "Equipment" | "Service"; types: CatalogueType[] };
type Row = [string, string, string];
function group(slug: string, name: string, summary: string, sectors: SectorId[], rows: Row[], kind: "Equipment" | "Service" = "Equipment"): CatalogueGroup {
  return { slug, name, summary, sectors, kind, applications: kind === "Service" ? ["Inspection & testing", "Rental & field services", "Plant turnarounds"] : ["New projects", "Maintenance & spares", "Plant turnarounds"], types: rows.map(([name, description, fields])=>({id: name.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),name,description,requirements: fields.split("|")})) };

}

export const catalogue: CatalogueGroup[] = [
 group("pumps-rotating-equipment", "Pumps & Rotating Equipment", "Liquid-transfer and dosing equipment, with mechanical components for rotating machinery. Select by duty and fluid conditions before selecting a size or model.", ["production","pipelines","refining","gas","power","water"], [
  ["Centrifugal pumps", "For process transfer, circulation and utility duties; the operating point and suction conditions define the selection.", "Flow and differential head|Fluid composition and temperature|Suction pressure and available NPSH|Materials and seal arrangement"],
  ["Positive displacement pumps", "Reciprocating, screw, gear and progressing-cavity arrangements for duties requiring a defined volume per cycle.", "Flow and discharge pressure|Viscosity and solids content|Drive and speed|Relief and pulsation requirements"],
  ["Metering and dosing pumps", "Controlled chemical injection for treatment and process systems, including duty/standby arrangements.", "Minimum and maximum dosing rate|Chemical concentration|Discharge pressure|Control signal and wetted materials"],
  ["Submersible and vertical pumps", "Water intake, sumps and vertical installations where depth and mounting geometry matter.", "Installation depth and dimensions|Flow and head|Fluid and solids|Motor supply and cable length"],
  ["Seals, couplings and bearings", "Replacement rotating-equipment components matched to the installed machine and service conditions.", "Machine manufacturer and model|Existing part number or drawing|Shaft dimensions|Operating speed and temperature"],
 ]),
 group("compressors-turbines", "Compressors, Turbines & Drivers", "Gas compression and prime movers for process, transmission and utility duties. Package boundaries and operating envelopes need to be agreed before pricing.", ["production","pipelines","refining","gas","power","offshore"], [
  ["Centrifugal compressors", "Continuous gas compression with performance matched to composition, flow and pressure ratio.", "Gas composition|Suction and discharge conditions|Flow range|Driver and anti-surge scope"],
  ["Reciprocating compressors", "Piston compression packages and components for gas duties across specified pressure stages.", "Gas analysis|Stage pressures and temperatures|Capacity and duty cycle|Cylinder and packing requirements"],
  ["Screw compressors and blowers", "Rotary compression or low-pressure gas movement for plant and process services.", "Medium and cleanliness|Flow and pressure|Oil-free requirement|Noise and enclosure limits"],
  ["Gas and steam turbines", "Turbine packages, upgrades and replacement parts assessed against the original equipment configuration.", "Power and speed|Fuel or steam conditions|Driven equipment|OEM model and scope of supply"],
  ["Compressor and turbine spares", "Filters, seals, blades, valves and auxiliary-system parts identified from the installed unit.", "OEM serial number|Part numbers and revision|Operating hours|Required inspection documents"],
 ]),
 group("valves-actuation", "Valves & Actuation", "Isolation, regulation, non-return and pressure-protection valves. Identify service conditions, end connections and actuation as a single selection.", ["production","pipelines","refining","gas","power","water","offshore"], [
  ["Ball, gate and plug valves", "Process and pipeline isolation, including manual and actuated configurations.", "Bore size and pressure class|Body and trim materials|End connections|Operating medium and temperature"],
  ["Globe and control valves", "Flow regulation and process control with trim and actuator selected for the operating duty.", "Flow cases and pressure drop|Fluid properties|Required shutoff|Control signal and fail position"],
  ["Butterfly and check valves", "Compact isolation and reverse-flow prevention for utility and process lines.", "Line size|Pressure and temperature|Installation orientation|Disc, seat and seal materials"],
  ["Safety and relief valves", "Pressure-protection devices requiring a defined relieving scenario and certified selection.", "Set pressure|Relieving medium and capacity basis|Back pressure|Required certification"],
  ["Actuators and positioners", "Electric, pneumatic and hydraulic operating systems for new valves or replacements.", "Valve torque or thrust|Power or air supply|Control interface|Fail-safe action and mounting"],
 ]),
 group("flanges-fittings-bolting", "Flanges, Fittings & Bolting", "Connection components matched by dimensional standard, material and pressure designation. Include drawings when joining unlike systems.", ["production","pipelines","refining","gas","power","water","offshore"], [
  ["Weld neck, slip-on and blind flanges", "Flanged connections for new piping or replacement spools, with facing and bore matched to the mating line.", "Nominal size|Class or PN designation and standard|Facing and bore|Material grade"],
  ["Elbows, tees and reducers", "Butt-weld fittings for direction changes, branches and line-size transitions.", "All end sizes|Wall thickness or schedule|Material grade|Seamless or welded requirement"],
  ["Forged and branch fittings", "Socket-weld, threaded and branch-connection components for smaller bore connections.", "Run and branch sizes|Connection type|Rating and standard|Material and branch geometry"],
  ["Stud bolts, nuts and fasteners", "Bolting sets specified with compatible nuts, coatings and traceability.", "Diameter, pitch and length|Bolt and nut grades|Coating|Quantity per complete set"],
 ]),
 group("pipe-tubing", "Pipe, Tubing & OCTG", "Line pipe, process piping and oil-country tubular goods. Distinguish nominal size from outside diameter and state the required inspection scope.", ["drilling","production","pipelines","refining","gas","water","offshore"], [
  ["Line pipe", "Seamless or welded pipe for transmission and gathering systems.", "Outside diameter and wall thickness|Grade and manufacturing route|Lengths and coating|Inspection and end preparation"],
  ["Process and stainless pipe", "Carbon, alloy and stainless piping for plant systems and corrosive services.", "Material grade|Size and schedule|Welding requirements|Certificates and finish"],
  ["Casing and production tubing", "Well tubulars selected against the well design and connection programme.", "OD, weight and grade|Connection specification|Range or length|Sour-service and inspection requirements"],
  ["Instrument and heat-exchanger tubing", "Small-bore and exchanger tubes where dimensions, cleanliness and finish are critical.", "OD and wall thickness|Material|Length and tolerance|Cleanliness and testing"],
 ]),
 group("gaskets-sealing", "Gaskets & Sealing Products", "Static sealing components matched to flange geometry, loading and process compatibility. Replacement dimensions should be confirmed from drawings or samples.", ["production","pipelines","refining","gas","power","water"], [
  ["Spiral wound gaskets", "Metallic winding and filler combinations for flanged process connections.", "Flange size and class|Winding and filler materials|Inner and outer rings|Service temperature"],
  ["Ring type joint gaskets", "Machined metallic rings matched to the mating ring groove.", "Ring number and profile|Material and hardness|Flange standard|Inspection requirements"],
  ["Sheet and non-metallic gaskets", "Cut seals for compatible low- and moderate-duty connections as specified by the buyer.", "Drawing and thickness|Fluid compatibility|Temperature and pressure|Material restriction"],
  ["O-rings and packing", "Elastomer seals and packing sets for valves, pumps and general equipment maintenance.", "Dimensions or part number|Compound or packing material|Service conditions|Equipment model"],
 ]),
 group("instrumentation-control", "Instrumentation & Control", "Measurement devices and accessories specified by process conditions, range, connection and signal. Brand headquarters do not establish manufacturing origin.", ["production","pipelines","refining","gas","power","water","offshore"], [
  ["Pressure gauges and transmitters", "Local indication and electronic pressure measurement for process and utility systems.", "Range and overload pressure|Process connection|Wetted materials|Output signal and approvals"],
  ["Temperature sensors and thermowells", "RTDs, thermocouples and protective thermowells matched to the installation and process duty.", "Sensor type and range|Insertion length and drawing|Thermowell material|Connection and head arrangement"],
  ["Radar and ultrasonic level instruments", "Tank and vessel level measurement selected for the medium, geometry and process environment.", "Tank dimensions and measuring range|Product properties|Process pressure and temperature|Nozzle and output requirements"],
  ["Flow meters", "Liquid and gas flow measurement with the measuring principle selected for the medium and accuracy need.", "Fluid and flow range|Line size|Operating conditions|Accuracy and output"],
  ["Analyzers and sample systems", "Process-composition and quality measurements supported by appropriate sample conditioning.", "Measured components and ranges|Sample conditions|Calibration requirements|Sample handling scope"],
 ]),
 group("automation-communications", "Automation, Control & Communications", "Control, monitoring and communication components for process operations. Compatibility with the installed system is central to replacement sourcing.", ["drilling","production","pipelines","refining","gas","power","offshore"], [
  ["PLC, DCS and I/O modules", "Controllers and interface modules for process automation and maintenance replacements.", "Manufacturer and exact part number|Firmware compatibility|I/O types and count|System architecture"],
  ["SCADA, HMI and industrial computers", "Supervisory monitoring and operator interfaces for plants and remote assets.", "Existing software version|Communication protocols|Licensing scope|Display and environmental requirements"],
  ["Safety system components", "Components for an existing engineered safety system, subject to the approved design.", "Approved system specification|Exact model and revision|Required certification|Validation and documentation scope"],
  ["Industrial networking and telecoms", "Switches, radios, fiber components and communication equipment for field and control-room connectivity.", "Protocol and bandwidth|Network topology|Range and environment|Power and enclosure rating"],
 ]),
 group("electrical-power", "Electrical & Power Distribution", "Power generation, distribution and electrical installation equipment for industrial sites. Supply voltage, frequency and hazardous-area requirements must be explicit.", ["drilling","production","refining","gas","power","offshore"], [
  ["Motors and variable speed drives", "Electric drives matched to machine load, control method and installation conditions.", "Power, voltage and frequency|Speed and duty|Mounting and enclosure|Drive interface"],
  ["Transformers and switchgear", "Power conversion, switching and protection assemblies to the project electrical design.", "Single-line diagram|Voltage levels and capacity|Fault rating|Protection and enclosure scope"],
  ["Generators, UPS and batteries", "Main, standby and uninterrupted power systems with defined autonomy and load profiles.", "Load and starting demand|Autonomy or fuel basis|Voltage and frequency|Redundancy and installation environment"],
  ["Cables, glands and cable trays", "Cable systems and accessories selected as compatible installation packages.", "Cable construction and size|Length|Gland thread and cable OD|Tray loading and corrosion protection"],
  ["Hazardous-area lighting and enclosures", "Electrical fittings for classified areas requiring the exact project protection concept and approvals.", "Area classification|Gas or dust group|Temperature class|Required certification and ambient range"],
 ]),
 group("pressure-vessels-tanks", "Pressure Vessels, Tanks & Heat Exchangers", "Engineered static equipment and replacement parts for storage and thermal duties. Pricing requires a design basis rather than a catalogue size alone.", ["production","pipelines","refining","gas","power","water","offshore"], [
  ["Pressure vessels and separators", "Process containment and phase separation based on defined design conditions and internals.", "Design pressure and temperature|Fluid and capacity|Materials and corrosion allowance|Design code and inspection scope"],
  ["Storage tanks and tank accessories", "Atmospheric or specified-pressure storage with vents, roofs and accessories selected for the stored medium.", "Capacity and medium|Design basis|Roof and foundation interface|Venting, gauging and accessories"],
  ["Shell-and-tube heat exchangers", "Thermal exchange equipment requiring process duty, pressure limits and material selection on both sides.", "Heat duty and temperatures|Flow on both sides|Allowable pressure drop|Tube and shell materials"],
  ["Plate exchangers and air coolers", "Alternative heat-transfer packages and replacement plates, gaskets or bundles.", "Thermal duty|Fluids and design conditions|Space limits|Existing model for replacements"],
 ]),
 group("process-packages", "Process Packages & Gas Treatment", "Integrated treatment and utility packages with clearly defined battery limits, performance requirements and site interfaces.", ["production","refining","gas","water","offshore"], [
  ["Gas dehydration and sweetening", "Packages for moisture and contaminant management, selected from the feed-gas analysis and export specification.", "Feed composition and flow|Inlet conditions|Outlet specification|Utilities and battery limits"],
  ["Filtration and coalescing", "Solid and liquid removal from process streams with replaceable elements and defined pressure-drop limits.", "Medium and contaminants|Flow and removal target|Pressure and temperature|Element compatibility"],
  ["Chemical injection skids", "Packaged storage, pumping and control for dosing one or more chemical streams.", "Chemical and dosing range|Injection pressure|Tank capacity|Control and redundancy scope"],
  ["Fuel gas, metering and pressure reduction skids", "Conditioning and regulating packages for specified downstream equipment or transfer points.", "Gas composition|Flow cases|Inlet and outlet pressures|Metering and shutoff requirements"],
  ["Flare and vapor recovery systems", "Equipment for controlled handling of relief gases and recoverable vapors under an engineered process design.", "Gas composition and relief cases|Flow envelope|Site layout|Recovery or disposal specification"],
 ]),
 group("drilling-well-construction", "Drilling & Well Construction", "Rig systems and drilling equipment selected against the well programme, installed rig and service conditions.", ["drilling","production","offshore"], [
  ["Rig components and top drives", "Rig machinery, handling systems and replacement components matched to the original installation.", "Rig and OEM model|Load and torque|Part number or drawing|Power and interfaces"],
  ["Drill bits and downhole drilling tools", "Bits, reamers, motors and directional tools matched to formation and drilling programme requirements.", "Hole size|Formation and drilling objective|Connection|Operating parameters"],
  ["Drill pipe and bottom-hole assemblies", "Drill-string components with defined connections, grades and inspection requirements.", "Size and weight|Grade and connection|Length|Inspection class and certificates"],
  ["Mud pumps and solids control", "Drilling-fluid circulation, shakers, centrifuges and related wear parts.", "Flow and pressure|Mud properties|Equipment model|Screen or wear-part specification"],
  ["Cementing and well-control equipment", "Cementing units, manifolds and BOP-related requirements assessed against the approved well design.", "Well programme and pressure rating|Connection and bore|Control system scope|Testing and certification requirements"],
 ]),
 group("wellhead-production-equipment", "Wellhead & Production Equipment", "Surface well equipment and flow-control components requiring defined pressure, temperature, material and interface specifications.", ["production","drilling","offshore"], [
  ["Wellheads and Christmas trees", "Wellhead assemblies and trees for production or injection, configured to the well programme.", "Working pressure and bore|Temperature and material class|Connection programme|Testing and documentation"],
  ["Chokes and production manifolds", "Flow-management equipment at the wellsite and production gathering interface.", "Flow and pressure conditions|Medium and solids|Trim and materials|Control and connection details"],
  ["Well testing packages", "Temporary or permanent equipment for measuring well production under defined test conditions.", "Expected rates and phases|Pressure and temperature|Test duration|Measurement and safety scope"],
  ["Production spares and seal kits", "Replacement components identified by assembly serial number and approved parts documentation.", "Assembly manufacturer and serial|Part number|Material requirement|Inspection and shelf-life conditions"],
 ]),
 group("completion-artificial-lift", "Completions, Artificial Lift & Intervention", "Downhole completion and production-support requirements, including equipment used to access and maintain existing wells.", ["production","drilling","offshore"], [
  ["Completion packers and downhole valves", "Completion components matched to casing geometry and the planned production or injection duty.", "Well schematic|Casing and tubing sizes|Pressure and temperature|Fluid compatibility"],
  ["Electric submersible and rod lift systems", "Artificial-lift equipment and spares selected against well geometry and the production envelope.", "Well depth and deviation|Production rate and fluid properties|Power supply|Installed equipment details"],
  ["Gas lift and progressing cavity systems", "Lift-system components for specific well conditions and the available surface infrastructure.", "Well performance basis|Fluid and solids|Gas or drive availability|Tubing and completion interfaces"],
  ["Wireline and coiled tubing tools", "Well-access and intervention tools for a defined programme and pressure-control system.", "Intervention objective|Well dimensions and pressure|Tool-string connections|Conveyance and control scope"],
  ["Stimulation and fracturing equipment", "Pumping, blending and pressure-line equipment specified for the treatment programme.", "Treatment fluid and proppant|Rate and pressure|Connection specification|Inspection and service history requirements"],
 ]),
 group("exploration-reservoir", "Exploration, Logging & Reservoir", "Survey and subsurface evaluation requirements. State whether the inquiry concerns equipment, software licensing or a specialist service scope.", ["exploration","drilling","production","offshore"], [
  ["Seismic and geophysical equipment", "Sensors, acquisition systems and field accessories for defined survey methods.", "Survey method|Channel count and sensors|Terrain or marine setting|Data and processing interfaces"],
  ["Formation evaluation and logging tools", "Downhole measurements and related components for a defined logging programme.", "Measurements required|Hole and conveyance method|Pressure and temperature|Data compatibility"],
  ["Core and fluid sampling equipment", "Sampling and handling systems for laboratory or field characterization.", "Sample type and volume|Pressure preservation needs|Materials|Handling and analysis scope"],
  ["Reservoir software and data services", "Specialist modelling and interpretation requirements with clear data, licensing and deliverable boundaries.", "Technical objective|Available datasets|Software environment|Deliverables and license scope"],
 ]),
 group("pipeline-intervention-equipment", "Pipeline Integrity & Intervention", "Equipment for inspecting, maintaining and modifying pipelines, with compatibility checked against the specific pipe and operating conditions.", ["pipelines","production","refining","gas","water"], [
  ["Hot tapping and line stopping", "Live-line connection and isolation equipment requiring an engineered operation plan.", "Pipe OD, thickness and material|Operating medium and conditions|Branch and isolation size|Procedure and equipment interfaces"],
  ["Pigging and inspection tools", "Cleaning, gauging and inspection tools matched to pipeline geometry and inspection objectives.", "Pipeline ID and length|Bends and restrictions|Medium and operating pressure|Cleaning or inspection objective"],
  ["Repair clamps and isolation plugs", "Repair and temporary isolation components matched to measured pipe dimensions and service duty.", "Measured OD and defect details|Pressure and temperature|Material compatibility|Temporary or permanent application"],
  ["Leak detection and corrosion monitoring", "Sensors and monitoring systems for pipeline and plant integrity programmes.", "Asset type and length|Detection objective|Communications and power|Data integration requirements"],
  ["Cathodic protection equipment", "Anodes, rectifiers and monitoring accessories specified against the corrosion-protection design.", "Protection design|Soil or water conditions|Electrical requirements|Anode type and quantity"],
 ]),
 group("offshore-subsea-marine", "Offshore, Subsea & Marine", "Specialist equipment for marine environments, subsea interfaces and offshore support. Drawings, operating depth and qualification records are essential inputs.", ["offshore","production","drilling","pipelines"], [
  ["Subsea connectors and control components", "Mechanical and control interfaces for defined subsea systems and installed assets.", "Water depth|Interface drawings|Pressure and temperature|Qualification and documentation"],
  ["ROV tooling and survey accessories", "Intervention tooling and sensors matched to the vehicle and subsea task.", "ROV class and interfaces|Task description|Depth rating|Hydraulic or electrical supply"],
  ["Marine hoses and loading equipment", "Fluid-transfer equipment for terminal and vessel interfaces.", "Medium and flow|Pressure and movement envelope|Connection drawings|Marine certification requirements"],
  ["Mooring and deck equipment", "Winches, chains and deck machinery selected against vessel or installation loads.", "Design loads|Dimensions and materials|Vessel or structure interface|Inspection and certification"],
 ]),
 group("fire-safety-equipment", "Fire, Gas Detection & Safety", "Fire protection and personal/site safety equipment selected to the project hazard assessment and required approvals.", ["drilling","production","pipelines","refining","gas","power","offshore"], [
  ["Fire hoses, racks and cabinets", "Hose assemblies and storage components matched to the installed fire-water connections.", "Hose diameter and length|Working pressure|Coupling or thread|Rack dimensions and approvals"],
  ["Fire pumps, hydrants and monitors", "Fire-water equipment packages and components to the approved system design.", "Required flow and pressure|System drawings|Power or driver|Required product approvals"],
  ["Gas and flame detection", "Fixed and portable detection instruments for specified hazards and operating environments.", "Gas or flame target|Range and sensing principle|Area classification|Calibration and output requirements"],
  ["Extinguishers and suppression systems", "Portable and fixed suppression equipment selected for the hazard and installation.", "Protected hazard|Agent requirement|Capacity or system layout|Inspection and approval requirements"],
  ["PPE, breathing and emergency equipment", "Personal protection and emergency-response equipment matched to the job and site requirements.", "Hazard assessment|Sizes and quantities|Required certification|Shelf life and inspection needs"],
 ]),
 group("chemicals-lubricants-coatings", "Chemicals, Lubricants & Coatings", "Process and maintenance consumables specified by application and compatibility. Include current technical and safety datasheets when requesting equivalents.", ["drilling","production","pipelines","refining","gas","water"], [
  ["Drilling and completion chemicals", "Fluid-system additives and completion chemicals selected to the well programme.", "Application and formulation|Technical datasheet|Quantity and packaging|Safety and storage requirements"],
  ["Production and water-treatment chemicals", "Treatment products for process performance, deposition, corrosion or water quality.", "Fluid analysis|Treatment objective|Dosing conditions|Required trials and documentation"],
  ["Industrial lubricants and greases", "Lubrication products matched to equipment requirements and operating conditions.", "OEM specification|Viscosity or grade|Quantity and packaging|Compatibility and approvals"],
  ["Protective coatings and insulation", "Surface protection and thermal insulation systems for the specified environment and substrate.", "Substrate and environment|Surface preparation|Temperature range|System thickness and specification"],
 ]),
 group("water-environment-utilities", "Water Treatment & Environmental Equipment", "Treatment and monitoring equipment based on feed-water analysis, discharge targets and plant utility conditions.", ["water","production","refining","gas","power","offshore"], [
  ["Produced-water treatment", "Separation and polishing equipment for defined oil, solids and discharge or reuse targets.", "Feed analysis and flow|Outlet quality target|Operating conditions|Utilities and footprint"],
  ["Membranes, filters and desalination", "Water-treatment packages and replacement elements matched to source-water quality.", "Water analysis|Required capacity|Recovery and quality target|Existing element model"],
  ["Wastewater and sludge handling", "Treatment and dewatering equipment for industrial effluent and solids management.", "Flow and sludge characteristics|Discharge requirements|Operating hours|Disposal and utility interfaces"],
  ["Air, emissions and environmental monitoring", "Monitoring equipment for specified pollutants and environmental parameters.", "Measured parameters and range|Sampling conditions|Reporting interface|Calibration requirements"],
  ["Boilers, cooling and compressed-air utilities", "Plant utility equipment and spares defined by capacity, energy supply and service conditions.", "Utility demand profile|Design conditions|Fuel or power supply|Existing equipment and interfaces"],
 ]),
 group("tools-lifting-maintenance", "Tools, Lifting & Maintenance Supplies", "Workshop, site and shutdown equipment with load, compatibility and certification requirements captured before quotation.", ["drilling","production","pipelines","refining","power","offshore"], [
  ["Cranes, hoists and lifting gear", "Lifting equipment, slings and accessories specified for the load and operating environment.", "Working load and geometry|Lift height or reach|Operating environment|Inspection certificates"],
  ["Torque and tensioning tools", "Controlled bolt tightening equipment matched to the fastener and joint procedure.", "Bolt sizes|Torque or tension range|Power source|Calibration requirements"],
  ["Welding, cutting and machining tools", "Workshop and field equipment for fabrication, repair and pipe preparation.", "Process and material|Size range|Power and portability|Consumables and accessories"],
  ["Industrial hoses and expansion joints", "Flexible connections selected for movement, chemical compatibility and working pressure.", "Medium and temperature|Size and pressure|End fittings|Movement and length"],
  ["Workshop consumables and spare parts", "Maintenance supplies identified by specification, drawing or equipment part number.", "Item description or part number|Equipment model|Quantity and unit|Required documentation"],
 ]),
 group("inspection-engineering-services", "Inspection, Engineering & Field Services", "Submit a scoped service inquiry to Oillinko. We review the location, deliverables and required qualifications before identifying suitable service providers.", ["exploration","drilling","production","pipelines","refining","gas","power","water","offshore"], [
  ["Inspection, NDT and material testing", "Inspection support for fabrication, receipt or asset-integrity work with a defined method and reporting scope.", "Inspection method and asset|Quantity or coverage|Acceptance criteria|Site and personnel qualification needs"],
  ["Calibration and instrument repair", "Calibration, diagnostics and repair requirements for measurement equipment.", "Instrument model and range|Accuracy requirement|Calibration points|On-site or laboratory scope"],
  ["Engineering and commissioning", "Engineering, installation support and commissioning packages with agreed boundaries and deliverables.", "Project scope and drawings|Deliverables|Site schedule|Discipline and qualification requirements"],
  ["Equipment repair and overhaul", "Workshop or field refurbishment of installed equipment, based on inspection and condition assessment.", "OEM model and serial|Fault or condition report|Repair scope|Acceptance testing"],
  ["Rental and specialist field services", "Time-bound equipment or crew requirements for construction, maintenance and interventions.", "Equipment and operating duty|Rental dates|Worksite and access|Operators, mobilization and support scope"],
  ["Freight, expediting and project logistics", "Shipment and delivery coordination for industrial cargo with defined handling and documentation needs.", "Packing list and dimensions|Collection and delivery points|Required dates|Handling and customs-document scope"],
 ], "Service"),
];

export function getGroup(slug: string) { return catalogue.find(g=>g.slug===slug); }
export function requestUrl(category: string, item?: string, origin?: string) {
 const p=new URLSearchParams({category}); if(item)p.set("item",item); if(origin)p.set("origin",origin);
 return `/rfq?${p.toString()}`;
}
export function filterCatalogue(query: string, sector: string, kind: string, application: string) {
 const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
 return catalogue.filter(g=>(!sector||g.sectors.some(s=>s===sector))&&(!kind||g.kind===kind)&&(!application||g.applications.includes(application))).map(g=> {
  const shared=`${g.name} ${g.summary} ${g.sectors.map(id=>sectors.find(s=>s.id===id)?.name).join(" ")}`.toLowerCase();
  const types=g.types.filter(t=>terms.every(term=>`${shared} ${t.name} ${t.description} ${t.requirements.join(" ")}`.toLowerCase().includes(term)));
  return {...g,types};
 }).filter(g=>g.types.length>0);
}
