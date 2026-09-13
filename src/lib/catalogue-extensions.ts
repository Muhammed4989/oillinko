import type { CatalogueGroup, CatalogueType, SectorId } from "./catalogue";

type Row = [name: string, description: string, requirements: string, aliases?: string];
const idFor = (name: string) => name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function items(rows: Row[]): CatalogueType[] {
  return rows.map(([name, description, fields, aliases]) => ({ id: idFor(name), name, description, requirements: fields.split("|"), aliases: aliases?.split("|") ?? [] }));
}
function family(slug: string, name: string, summary: string, sectors: SectorId[], rows: Row[], kind: "Equipment" | "Service" = "Equipment", applications = kind === "Equipment" ? ["New projects", "Maintenance & spares", "Plant turnarounds"] : ["Rental & field services"]): CatalogueGroup {
  return { slug, name, summary, sectors, kind, applications, types: items(rows) };
}

// Existing family URLs and item anchors remain valid as their scope becomes more detailed.
const additions: Record<string, Row[]> = {
  "pumps-rotating-equipment": [
    ["Vacuum pumps and ejectors", "Vacuum-generation equipment for evacuation, degassing and process duties.", "Suction pressure and gas load|Vapors and entrained liquids|Utility availability|Materials and discharge arrangement", "liquid ring|steam ejector"],
  ],
  "valves-actuation": [
    ["Needle valves and instrument manifolds", "Small-bore isolation and measurement connections for instrument installations.", "Manifold arrangement|Tube or pipe connections|Pressure and temperature|Material and instrument interface", "DBB|double block and bleed|2 valve|3 valve|5 valve"],
    ["Diaphragm and pinch valves", "Valves for compatible corrosive, slurry or utility duties where liner and diaphragm selection matter.", "Medium and solids|Size and operating pressure|Liner or diaphragm material|Actuation and connection"],
    ["Rupture discs and holders", "Bursting-disc assemblies specified against the documented pressure-protection design.", "Specified burst conditions|Back pressure or vacuum|Holder dimensions|Material and certification", "bursting disk|rupture disk"],
  ],
  "flanges-fittings-bolting": [
    ["Pipe supports, hangers and spring supports", "Support assemblies for piping loads and movements defined by the project stress analysis.", "Support drawing and loads|Travel and movement|Pipe size and insulation|Materials and coating", "spring hanger|pipe shoe|U bolt"],
  ],
  "pipe-tubing": [
    ["GRE, GRP and thermoplastic piping", "Non-metallic piping systems with joints and qualification matched to the specified service.", "Medium and design conditions|Diameter and joining system|Installation and loading|Qualification and inspection scope", "FRP|HDPE|RTR|reinforced thermosetting resin"],
  ],
  "instrumentation-control": [
    ["Switches, indicators and local gauges", "Discrete pressure, temperature, level and flow indication or switching devices.", "Measured variable and range|Switch points and contacts|Process connection|Environment and approvals", "level switch|sight glass|magnetic level gauge|rotameter"],
    ["Vibration and machinery monitoring", "Sensors and monitoring components for assessing rotating-machine condition.", "Machine and measurement points|Sensor type and range|Existing monitoring system|Signal and mounting", "proximity probe|accelerometer|condition monitoring"],
    ["Instrument calibration equipment", "Portable and bench tools for measurement verification and calibration workflows.", "Variables and ranges|Required uncertainty|Reference traceability|Field or bench use", "deadweight tester|pressure calibrator|dry block"],
  ],
  "automation-communications": [
    ["Industrial security and access hardware", "Network security appliances, CCTV and access-control hardware for a defined facility architecture.", "Approved architecture|Protocols and existing systems|Site environment|Licensing and integration scope", "OT cybersecurity|industrial firewall|access control|surveillance"],
  ],
  "electrical-power": [
    ["Earthing, bonding and lightning protection", "Grounding components and lightning-protection materials selected to the project electrical design.", "Layout and conductor sizes|Soil or installation conditions|Materials and connections|Testing and documentation", "ground rod|grounding|earth bar"],
  ],
  "pressure-vessels-tanks": [
    ["Tank seals, floating roofs and vents", "Replacement roof seals, tank vents and access fittings matched to existing tank geometry.", "Tank drawing and diameter|Stored product|Roof and seal arrangement|Venting or accessory specification", "rim seal|PVRV|breather valve|flame arrester"],
  ],
  "process-packages": [
    ["Desalting and electrostatic treating packages", "Crude-treatment packages and replacement components for specified salt, water and solids removal duties.", "Crude assay and feed rate|Water and salt targets|Operating conditions|Utilities and existing design", "desalter|dehydrator|electrostatic treater"],
    ["Sulfur recovery and tail gas equipment", "Package and replacement-equipment enquiries within an approved sulfur-recovery process design.", "Feed composition and throughput|Process licensor and unit design|Materials and temperature|Package boundaries", "Claus|SRU|TGTU|sour gas"],
  ],
  "drilling-well-construction": [
    ["MWD and LWD tools", "Measurement-while-drilling and logging-while-drilling tools and compatible telemetry components.", "Required measurements|Hole size and tool connections|Temperature and pressure|Telemetry and data interface", "measurement while drilling|logging while drilling|directional survey"],
    ["Managed pressure drilling equipment", "Pressure-management packages and components for an engineered drilling programme.", "Well and rig programme|Pressure and flow envelope|Control interfaces|Package and specialist support scope", "MPD|rotating control device|RCD"],
    ["Casing running and cementing accessories", "Running tools, centralizers and float equipment matched to the casing programme.", "Casing sizes and weights|Connection and drift|Well trajectory|Cementing programme and materials", "centralizer|float collar|float shoe|casing tong"],
    ["BOP stacks and pressure control components", "Blowout preventers, control units and replacement parts matched to the approved well-control configuration.", "Stack drawing and bore|Working pressure and connections|Control system|OEM parts and inspection scope", "blow out preventer|blowout preventer|annular preventer|ram preventer"],
  ],
  "completion-artificial-lift": [
    ["Liner hangers and running tools", "Liner suspension and installation systems selected against casing geometry and the completion plan.", "Parent casing and liner dimensions|Loads and well trajectory|Setting method|Cementing and running-tool scope", "liner hanger|liner top packer"],
    ["Sand control screens and gravel pack tools", "Downhole sand-management components matched to the formation and completion architecture.", "Formation particle data|Completion geometry|Production conditions|Screen and placement requirements", "sand control|sand screen|gravel packing"],
    ["Perforating systems and accessories", "Perforating equipment enquiries reviewed against the operator's well programme and specialist service arrangements.", "Completion and target interval|Conveyance method|Pressure and temperature|Equipment and service boundaries", "TCP|tubing conveyed perforating|perforation"],
    ["Intelligent completion and inflow control", "Downhole monitoring and flow-control components for selective management of producing intervals.", "Completion schematic|Control and communication method|Operating envelope|Installed-system compatibility", "ICD|ICV|inflow control device|interval control valve"],
    ["Fishing, milling and wellbore cleanup tools", "Recovery and cleanout tools specified from the actual well geometry and intervention objective.", "Well and obstruction details|Tool dimensions and connections|Conveyance method|Expected loads and fluids", "overshot|fishing spear|junk basket|wellbore cleaning"],
    ["Plunger lift and jet pump systems", "Artificial-lift alternatives specified against well performance and the available surface support.", "Well depth and geometry|Production and pressure data|Fluid composition|Surface utilities and control", "jet lift|plunger lift"],
  ],
  "exploration-reservoir": [
    ["Mud logging and surface acquisition", "Surface sensors, gas measurement and data-acquisition packages for drilling information collection.", "Measurement scope|Rig interfaces|Gas sampling arrangement|Data output and support", "mudlogging|total gas|surface logging"],
  ],
  "offshore-subsea-marine": [
    ["Umbilicals, risers and subsea jumpers", "Subsea connection systems specified with installation geometry, design loads and interface documentation.", "Water depth and configuration|Fluid and pressure|Mechanical and fatigue basis|End connections and installation scope", "SURF|flexible riser|subsea umbilical"],
    ["Subsea valves, trees and manifolds", "Subsea production assemblies and spares requiring system-specific engineering and qualification.", "System drawings and OEM|Water depth and operating conditions|Control and connector interfaces|Qualification and inspection scope"],
    ["Marine life-saving and navigation equipment", "Vessel and offshore emergency, communication and navigation equipment to the specified flag or class requirements.", "Vessel or asset details|Required equipment specification|Flag and class requirements|Inspection and installation scope", "liferaft|lifeboat|EPIRB|marine radio"],
  ],
  "fire-safety-equipment": [
    ["Spill containment and response equipment", "Containment, recovery and absorbent equipment for a defined spill-response plan.", "Fluid and scenario|Land or marine use|Capacity and deployment|Storage and consumables", "spill kit|oil boom|skimmer|bund"],
  ],
  "chemicals-lubricants-coatings": [
    ["Catalysts, adsorbents and desiccants", "Process consumables specified by the unit design, approved grade and replacement loading basis.", "Unit and approved grade|Feed contaminants and conditions|Loading quantity and packaging|Data sheets and compatibility", "molecular sieve|activated alumina|activated carbon|catalyst"],
  ],
};

const newFamilies: CatalogueGroup[] = [
  family("refining-process-internals", "Refinery Columns, Internals & Reactors", "Static process internals and replacement assemblies for separation and reaction units. Enquiries need the process duty and mechanical interface, especially when modifying an existing unit.", ["refining", "gas", "production"], [
    ["Distillation columns and internals", "Column assemblies and internal components for a specified separation duty or revamp.", "Feed and separation objective|Column dimensions and drawing|Pressure and temperature|Materials and installation scope", "fractionation|distillation tower|column internals"],
    ["Trays, structured packing and distributors", "Mass-transfer internals and supports matched to the vessel and process performance basis.", "Column and support drawings|Process loads|Material and fouling conditions|Replacement or revamp scope", "random packing|liquid distributor|distillation tray"],
    ["Demisters and mist eliminators", "Droplet-removal elements for vessels and ducts with defined gas flow and carryover limits.", "Gas and liquid properties|Flow range|Available dimensions|Pressure drop and materials", "mesh pad|vane pack"],
    ["Reactor internals and catalyst supports", "Support grids, baskets and distribution components specified against the approved reactor design.", "Reactor drawings|Mechanical and thermal loads|Material specification|Inspection and installation boundaries"],
    ["Cyclones and process separation internals", "Inertial separation assemblies and replacement parts for specified gas, liquid or solids streams.", "Stream and solids data|Flow and conditions|Removal duty|Erosion allowance and geometry", "hydrocyclone|cyclone separator"],
  ]),
  family("lng-cryogenic-equipment", "LNG & Cryogenic Equipment", "Equipment for low-temperature gas storage, transfer and regasification. Confirm fluid, minimum design temperature and the system design basis before comparing offers.", ["gas", "pipelines", "offshore", "power"], [
    ["Cryogenic storage tanks", "Insulated storage vessels with accessories specified for the stored liquefied gas.", "Fluid and usable capacity|Design pressure and temperatures|Insulation and hold-time basis|Site and connection requirements", "LNG tank|vacuum insulated tank|liquid nitrogen tank"],
    ["LNG vaporizers and regasification packages", "Equipment that converts the specified liquefied gas to a defined gaseous delivery condition.", "Fluid composition and flow|Inlet and outlet conditions|Available heat source|Operating cycle and site climate", "regasification|ambient air vaporizer|water bath vaporizer"],
    ["Cryogenic pumps and transfer systems", "Liquid-transfer pumps and associated components for defined low-temperature duties.", "Fluid and flow|Suction and discharge conditions|Minimum design temperature|Driver and installation", "LNG pump|cryogenic centrifugal pump"],
    ["Cryogenic valves and vacuum insulated piping", "Valves and insulated pipe assemblies with connections suited to the specified cryogenic system.", "Fluid and design conditions|Line sizes and layout|Insulation and valve arrangement|Materials and qualification", "vacuum jacketed pipe|VIP|cryogenic valve"],
    ["Cold boxes and cryogenic heat exchangers", "Low-temperature heat-transfer assemblies requiring a full process and mechanical design basis.", "Stream data and thermal duty|Design conditions|Footprint and interfaces|Performance and inspection scope", "brazed aluminum heat exchanger|BAHX|plate fin exchanger"],
    ["Boil-off gas handling packages", "Compression, recovery and control packages for specified storage or transfer vapor loads.", "Gas composition and flow cases|Suction and delivery conditions|Operating modes|Utilities and control interfaces", "BOG|boil off gas"],
  ]),
  family("terminal-loading-metering", "Terminal Loading, Metering & Tank Gauging", "Transfer and measurement systems for liquid and gas terminals. State the loading arrangement, measurement purpose and shutdown interfaces as separate parts of the request.", ["pipelines", "refining", "gas", "offshore"], [
    ["Loading arms and transfer couplings", "Marine, road and rail transfer hardware matched to movement envelopes and the handled product.", "Product and transfer rate|Pressure and temperature|Connection and movement envelope|Emergency release and control scope", "marine loading arm|truck loading arm|dry break coupling"],
    ["Custody transfer metering skids", "Measurement packages for an agreed commercial-transfer or allocation duty.", "Fluid and flow range|Measurement uncertainty target|Applicable project requirements|Meter proving and control scope", "fiscal metering|LACT|custody-transfer"],
    ["Meter provers and calibration accessories", "Equipment for verifying metering performance within the selected measurement method.", "Meter type and size|Flow range|Reference method|Installation and traceability requirements", "compact prover|master meter|small volume prover"],
    ["Tank gauging and overfill prevention", "Inventory measurement and independent overfill-protection components to the tank system design.", "Tank geometry and product|Measurement and alarm duties|Existing control interfaces|Required independence and approvals", "automatic tank gauging|ATG|overfill protection"],
    ["Additive injection and blending systems", "Dosing and blending packages for defined product specifications at terminal or process interfaces.", "Base and additive properties|Flow cases and ratios|Accuracy target|Controls and sampling scope", "fuel blending|additive dosing"],
    ["Loading rack grounding and shutdown systems", "Vehicle-bonding, permissive and emergency-shutdown components for an approved loading design.", "Loading layout|Permissive and trip logic|Existing interfaces|Area classification", "ground verification|loading interlock|ESD"],
  ]),
  family("hydraulics-pneumatics", "Hydraulic & Pneumatic Systems", "Fluid-power packages and components for machinery, actuators and utility systems. Replacement compatibility depends on the circuit, fluid and operating envelope.", ["drilling", "production", "refining", "offshore", "power"], [
    ["Hydraulic power units", "Integrated hydraulic power packages matched to the load cycle and installed control system.", "Required flow and pressure|Duty cycle and fluid|Reservoir and cooling|Electrical and control interfaces", "HPU|hydraulic power pack"],
    ["Hydraulic cylinders and motors", "Motion components selected from loads, travel, speed and the existing mounting geometry.", "Force or torque|Stroke or speed|Mounting drawing|Pressure and fluid"],
    ["Accumulators and hydraulic safety blocks", "Pressure-storage components and associated isolation assemblies to the hydraulic system design.", "Circuit and operating range|Required volume|Fluid and temperature|Approvals and mounting", "bladder accumulator|piston accumulator"],
    ["Hydraulic valves, pumps and manifolds", "Circuit components identified by their hydraulic function and mechanical interfaces.", "Circuit diagram|Flow and pressure|Connection or mounting standard|Control and fluid compatibility"],
    ["Hydraulic filtration and oil cooling", "Contamination-control and cooling equipment for a specified hydraulic or lubrication circuit.", "Fluid and flow|Cleanliness target|Thermal duty|Pressure drop and connections", "hydraulic filter|oil cooler|offline filtration"],
    ["Pneumatic preparation and control components", "Air preparation, regulators, cylinders and control valves for defined instrument-air or machine circuits.", "Air quality and supply|Flow and pressure|Connection sizes|Control and actuator arrangement", "FRL|air regulator|pneumatic cylinder|solenoid valve"],
  ]),
  family("thermal-hvac-utilities", "Heating, Steam, HVAC & Utility Equipment", "Thermal and building-service systems supporting process plants and industrial facilities. Site climate, utility conditions and operating duty define the enquiry.", ["refining", "gas", "power", "production", "offshore", "water"], [
    ["Fired heaters, furnaces and burners", "Process-heating equipment and burner replacement enquiries based on the approved thermal design.", "Process duty and temperatures|Fuel composition and supply|Emissions specification|Existing geometry and controls", "process furnace|fired heater|industrial burner"],
    ["Boilers and waste heat recovery", "Steam-generation and heat-recovery equipment for stated loads and available energy sources.", "Steam conditions and demand|Fuel or waste-heat data|Feedwater specification|Package and control scope", "HRSG|waste heat boiler|economizer"],
    ["Steam traps and condensate systems", "Steam-distribution accessories and condensate-return equipment for a defined plant network.", "Steam conditions|Condensate loads and return pressure|Installation layout|Materials and connections", "condensate recovery|steam trap"],
    ["Heat tracing and industrial heaters", "Electrical or fluid-heated tracing systems and heaters matched to the required temperature duty.", "Maintain and exposure temperatures|Piping or vessel dimensions|Insulation and area classification|Power and control scope", "electric heat tracing|heat trace cable|immersion heater"],
    ["Industrial HVAC and refrigeration", "Cooling, ventilation and refrigeration packages for industrial buildings, shelters and process support.", "Heat load and climate|Air quality or cooling duty|Power and redundancy|Area and corrosion requirements", "chiller|air handling unit|AHU|pressurization"],
    ["Cooling towers and utility air dryers", "Cooling-water heat rejection or compressed-air drying equipment with separately stated duties.", "Utility medium and duty|Inlet and target conditions|Available utilities|Space and environmental limits", "cooling tower|desiccant dryer|refrigerated dryer"],
    ["Refractory, insulation and fireproofing materials", "Thermal linings and protective material systems specified by the equipment and exposure conditions.", "Substrate and geometry|Operating or fire exposure|Approved material system|Thickness and installation scope", "castable refractory|ceramic fiber|passive fire protection|PFP"],
  ]),
  family("laboratory-testing-equipment", "Laboratory & Petroleum Testing Equipment", "Instruments and sample-handling equipment for petroleum, water and materials laboratories. The required test method and measurement range should be explicit.", ["exploration", "production", "refining", "gas", "water"], [
    ["Petroleum quality testing instruments", "Laboratory instruments for specified fuel, crude or lubricant properties.", "Test method and edition|Sample matrix|Measurement range|Throughput and calibration scope", "flash point|viscosity|distillation tester|pour point"],
    ["Laboratory chromatography and spectroscopy", "Analytical instruments and accessories selected for the required components and detection limits.", "Analytes and sample matrix|Method and detection target|Sample preparation|Utilities and software", "GC|gas chromatograph|FTIR|ICP"],
    ["Core analysis and PVT equipment", "Laboratory systems for defined rock-property and reservoir-fluid measurements.", "Test programme|Sample sizes and fluids|Pressure and temperature|Data and calibration requirements", "porosity|permeability|PVT cell"],
    ["Water testing and sampling instruments", "Field or laboratory equipment for a specified water-quality measurement programme.", "Parameters and ranges|Water matrix|Field or laboratory use|Calibration and consumables", "pH|conductivity|turbidity|water analyzer"],
    ["Laboratory sample handling and consumables", "Sample containers, preparation equipment and consumables identified by test compatibility.", "Sample and test method|Materials and cleanliness|Sizes and quantities|Traceability and storage", "sample cylinder|sample bottle|laboratory glassware"],
  ]),
  family("well-abandonment-equipment", "Well Abandonment & Recovery Equipment", "Tools and components for engineered well-retirement programmes. The operator's barrier design and specialist execution scope determine the equipment enquiry.", ["decommissioning", "drilling", "production", "offshore"], [
    ["Abandonment plugs and barrier tools", "Permanent or temporary barrier components specified within an approved plug-and-abandonment programme.", "Well schematic and barrier plan|Setting depth and dimensions|Pressure and temperature|Verification and documentation scope", "P&A|plug and abandonment|bridge plug|cement retainer"],
    ["Casing cutting and recovery tools", "Cutting and retrieval equipment selected from the casing layout and recovery objective.", "Casing sizes and materials|Well condition and access|Recovery lengths and loads|Conveyance and surface support", "section milling|casing recovery|tubular severing"],
    ["Well barrier verification instruments", "Pressure and logging tools for the measurements specified in a well-barrier verification plan.", "Required measurements|Well geometry and conveyance|Pressure and temperature|Acceptance and reporting basis", "cement evaluation|barrier verification"],
    ["Subsea well access and recovery interfaces", "Access, connector and recovery components for a defined subsea well-retirement scope.", "Tree and wellhead documentation|Water depth|Connector and control interfaces|Lift and recovery boundaries"],
  ], "Equipment", ["Decommissioning", "Well intervention", "Maintenance & spares"]),
  family("well-construction-intervention-services", "Drilling, Completion & Well Intervention Services", "Specialist well-service enquiries reviewed by Oillinko against your programme, location and required personnel qualifications. Equipment supply and field execution should be stated separately.", ["drilling", "production", "exploration", "offshore"], [
    ["Directional drilling and measurement services", "Crew, tools and data-delivery scope for a defined directional drilling programme.", "Well trajectory and hole sections|Measurement programme|Rig and schedule|Deliverables and personnel requirements", "MWD service|LWD service|directional drilling"],
    ["Drilling fluids and cementing services", "Fluid-engineering or cement-placement service enquiries with clearly defined design and field responsibilities.", "Well programme|Fluid or cement requirements|Volumes and schedule|Equipment, crew and laboratory scope"],
    ["Wireline, slickline and coiled tubing services", "Specialist conveyance and intervention services for an operator-defined well programme.", "Well schematic and objective|Pressure and fluids|Access and conveyance|Crew, equipment and reporting scope", "CT services|slick line|wire line|well intervention"],
    ["Well stimulation and flowback services", "Treatment and post-treatment support enquiries based on the approved stimulation programme.", "Treatment basis|Well and reservoir conditions|Pumping and flowback scope|Site, schedule and fluid handling", "fracturing services|acidizing|frac service"],
    ["Well testing and production logging services", "Field measurements and interpretation scope for reservoir or production evaluation.", "Test objectives|Well conditions|Measurement programme|Duration and deliverables", "PLT|production logging|well test"],
    ["Workover, snubbing and fishing services", "Specialist well-access, recovery and repair enquiries based on the intervention plan.", "Well history and condition|Intervention objective|Access and well-control scope|Schedule and deliverables", "hydraulic workover|snubbing|fishing service"],
  ], "Service", ["New projects", "Well intervention", "Rental & field services"]),
  family("pipeline-process-services", "Pipeline & Process Pre-commissioning Services", "Enquiries for preparing, testing or maintaining pipeline and process systems. Each scope needs defined system boundaries, acceptance criteria and site responsibilities.", ["pipelines", "production", "refining", "gas", "offshore", "power", "water"], [
    ["Hydrostatic testing services", "Water-based pressure-test service enquiries to the approved test package and acceptance criteria.", "Test pack and system volume|Approved test conditions|Water supply and disposal|Instrumentation and report scope", "hydrotesting|hydrotest|hydro testing|pressure testing"],
    ["Pipeline cleaning, gauging and drying", "Preparation services for pipeline cleanliness, geometry checks and specified dryness.", "Pipeline length and geometry|Initial condition|Acceptance targets|Access, utilities and waste handling", "pigging services|dewatering|pipeline drying|gauging pig"],
    ["Nitrogen purging and helium leak testing", "Specialist inerting or leak-detection service enquiries for defined plant systems.", "System drawings and volume|Approved method and acceptance|Gas supply and access|Isolation and report responsibilities", "nitrogen helium|N2|He leak test|inerting"],
    ["Chemical cleaning and oil flushing", "Cleaning or lubricant-circuit flushing services matched to materials and specified cleanliness targets.", "Circuit drawings and materials|Contaminants and fluid|Cleanliness acceptance|Waste handling and restoration", "hot oil flushing|pickling|passivation"],
    ["Hot tapping and line stopping services", "Specialist live-line connection or isolation enquiries requiring an operator-approved engineering scope.", "Pipe data and operating medium|Connection or isolation objective|Site access and work window|Engineering and execution responsibilities", "hot tap service|line stop|line plugging"],
    ["Controlled bolting and onsite machining", "Field joint-assembly or machining services for specified connections and repair dimensions.", "Joint or machining drawings|Material and dimensions|Approved procedure|Access and inspection scope", "bolt tensioning|torquing|flange facing|cold cutting"],
  ], "Service", ["New projects", "Plant turnarounds", "Inspection & testing", "Rental & field services"]),
  family("shutdown-tank-maintenance-services", "Turnaround, Tank & Facility Maintenance Services", "Defined maintenance work packages for operating facilities and shutdowns. Include the work window, asset condition and interfaces with site operations when requesting support.", ["refining", "production", "pipelines", "gas", "offshore", "power", "water"], [
    ["Tank cleaning and sludge removal", "Tank-cleaning service enquiries with explicit residue handling and return-to-service deliverables.", "Tank drawings and previous contents|Residue estimate and condition|Access and cleaning objectives|Waste responsibilities and schedule", "storage tank cleaning|desludging|sludge removal"],
    ["Heat exchanger cleaning and retubing", "Cleaning, bundle repair or retubing enquiries based on the exchanger condition and drawings.", "Exchanger data and drawings|Fouling or damage assessment|Cleaning or repair scope|Inspection and acceptance tests", "tube bundle|hydro jetting|retubing"],
    ["Blasting, coating and lining services", "Surface-preparation and coating work packages against a specified protective system.", "Substrate and surface area|Existing coating condition|Approved coating system|Access and inspection requirements", "sandblasting|painting|tank lining"],
    ["Insulation, refractory and fireproofing installation", "Installation or repair services for specified thermal and passive-protection systems.", "Equipment and area|Approved material system|Thickness and preparation|Access and inspection scope"],
    ["Scaffolding and rope access support", "Temporary access service enquiries with workface, load and personnel requirements defined.", "Location and workface drawings|Access duration and loads|Site restrictions|Competency and inspection requirements", "rope-access|scaffold"],
    ["Shutdown planning and mechanical support", "Planning, supervision and mechanical work packages for defined turnaround activities.", "Asset and task list|Shutdown window|Workforce and supervision scope|Completion records and acceptance", "turnaround services|plant shutdown|maintenance planning"],
  ], "Service", ["Maintenance & spares", "Plant turnarounds", "Rental & field services"]),
  family("asset-integrity-survey-services", "Asset Integrity, Inspection & Survey Services", "Inspection and assessment enquiries with a defined method, coverage and deliverable. Qualification or accreditation requirements are checked for the particular assignment.", ["exploration", "drilling", "production", "pipelines", "refining", "gas", "offshore", "power", "water"], [
    ["Advanced NDT and corrosion mapping", "Specialist inspection scopes selected to assess the stated weld, material or damage mechanism.", "Asset and inspection objective|Method and coverage|Acceptance criteria|Access, qualifications and report scope", "PAUT|TOFD|UT|ultrasonic testing|eddy current|MFL"],
    ["Risk based inspection and fitness assessment", "Engineering assessment enquiries based on asset records, damage mechanisms and inspection evidence.", "Equipment inventory|Design and service history|Available inspection data|Assessment scope and required deliverables", "RBI|fitness for service|FFS|remaining life"],
    ["Pipeline inline inspection services", "Inspection runs and data-analysis enquiries matched to pipeline geometry and defect-detection objectives.", "Pipeline and launcher data|Operating envelope|Defect types and detection targets|Validation and reporting scope", "ILI|intelligent pigging|smart pig"],
    ["Tank inspection and calibration services", "Tank-condition assessment or capacity-calibration enquiries with separate methods and outputs specified.", "Tank drawings and condition|Inspection or calibration objective|Access and operating state|Measurement and reporting requirements", "tank strapping|tank calibration|tank floor inspection"],
    ["Cargo inspection and laboratory testing", "Quantity, sampling or quality-testing enquiries for a defined shipment or sample set.", "Product and quantity|Sampling or testing methods|Location and timing|Reports and accreditation requirements", "petroleum inspection|fuel testing|crude assay"],
    ["Geophysical, geotechnical and marine surveys", "Survey acquisition and interpretation services for defined site or subsurface questions.", "Survey area and objective|Required resolution and methods|Site conditions and access|Data formats and deliverables", "bathymetric|geotechnical survey|seismic survey"],
    ["ROV and underwater inspection services", "Subsea inspection and survey support for identified assets and work conditions.", "Asset and water depth|Inspection objective|Vessel and launch interfaces|Video, measurements and reporting", "diving inspection|ROV survey|subsea inspection"],
  ], "Service", ["Inspection & testing", "Studies & design", "Plant turnarounds", "Rental & field services"]),
  family("fabrication-construction-services", "Fabrication, Installation & Construction Support", "Drawing-based fabrication and site-work enquiries with explicit design, installation and inspection responsibilities. Scope and local execution capability are reviewed per project.", ["drilling", "production", "pipelines", "refining", "gas", "offshore", "power", "water"], [
    ["Piping spools and skid fabrication", "Fabrication enquiries against approved drawings, material specifications and inspection plans.", "Drawings and bill of materials|Materials and welding requirements|Inspection plan|Delivery and assembly boundaries", "pipe spool|skid assembly|modular fabrication"],
    ["Structural steel and equipment supports", "Fabrication and installation scopes for structures, platforms and equipment foundations or supports.", "Structural drawings|Loads and material grades|Coating and connections|Installation and inspection scope", "steel fabrication|platform|pipe rack"],
    ["Mechanical and piping installation", "Site erection and assembly work packages tied to approved installation drawings.", "Installation quantities and drawings|Site readiness|Equipment and workforce scope|Testing and handover boundaries"],
    ["Electrical and instrument installation", "Field electrical, instrument and cabling work packages to the approved project design.", "Layouts and cable schedules|Area classification|Installation scope|Inspection and loop-check deliverables", "E&I|loop checking|cable pulling"],
    ["Civil works and site preparation", "Defined industrial civil-work enquiries for foundations, drainage and site infrastructure.", "Site and geotechnical data|Approved drawings and quantities|Access and schedule|Inspection and handover requirements"],
    ["Heavy lifting and transport support", "Engineered lifting, rigging and oversized-transport service enquiries for identified loads.", "Load dimensions and weight|Lift or transport route|Site constraints|Engineering and execution scope", "heavy lift|rigging service|SPMT"],
  ], "Service", ["New projects", "Plant turnarounds", "Rental & field services"]),
  family("environmental-decommissioning-services", "Environmental & Decommissioning Services", "Specialist enquiries for asset retirement, environmental assessment and site recovery. Define waste ownership, required deliverables and the applicable project approvals in the scope.", ["decommissioning", "water", "production", "refining", "pipelines", "offshore", "gas"], [
    ["Plug and abandonment service coordination", "Specialist well-retirement service enquiries based on the operator's approved abandonment and verification programme.", "Well history and barrier plan|Well and site access|Execution and verification scope|Required qualifications and completion records", "P&A services|plug and abandon|well abandonment|decommissioning well"],
    ["Facility dismantling and materials recovery", "Retirement work packages for defined plant assets, demolition boundaries and recoverable materials.", "Asset inventory and drawings|Decontamination status|Dismantling and recovery scope|Waste ownership and site restoration", "decommissioning|dismantling|demolition|scrap recovery"],
    ["Soil and groundwater remediation", "Assessment and remediation enquiries based on site investigations and agreed cleanup objectives.", "Site investigation records|Contaminants and extent|Remediation objectives|Monitoring and disposal responsibilities", "contaminated land|groundwater treatment|bioremediation"],
    ["Industrial waste treatment and disposal support", "Waste-management service enquiries requiring characterization, handling and destination requirements.", "Waste analysis and quantities|Packaging and collection|Required treatment route|Documentation and local authorizations", "hazardous waste|drill cuttings|waste oil"],
    ["Emissions surveys and leak detection", "Field monitoring enquiries with specified assets, detection objectives and reporting boundaries.", "Asset inventory and target gases|Required measurement methods|Survey frequency and access|Reporting and verification requirements", "LDAR|methane survey|optical gas imaging|OGI"],
    ["Environmental baseline and impact studies", "Specialist environmental study enquiries with a defined project stage, location and required outputs.", "Project description and location|Study boundary and baseline data|Required assessments|Schedule and authority-facing deliverables", "EIA|ESIA|environmental monitoring"],
  ], "Service", ["Decommissioning", "Studies & design", "Inspection & testing", "Rental & field services"]),
  family("digital-engineering-services", "Engineering, Digital Systems & Technical Studies", "Design, software and engineering-support enquiries with named deliverables and agreed responsibility boundaries. Existing data, software ownership and integration requirements shape the scope.", ["exploration", "drilling", "production", "pipelines", "refining", "gas", "offshore", "power", "water", "energy-transition"], [
    ["Concept, FEED and detailed engineering", "Discipline-specific or integrated design-support enquiries from concept definition through detailed deliverables.", "Project basis and stage|Existing drawings and data|Discipline and deliverable list|Design responsibility and review process", "front end engineering design|FEED|process engineering|piping stress"],
    ["Process safety and reliability studies", "Specialist study support for project-defined risk, reliability and safeguarding questions.", "Study objective and boundaries|Design and operating data|Required methods and participants|Deliverables and action-closeout scope", "HAZOP|HAZID|LOPA|SIL assessment|RAM study"],
    ["Automation integration and commissioning", "Engineering services for control-system integration, migration and commissioning.", "Existing architecture and versions|Functional requirements|Interfaces and migration window|Testing and handover scope", "PLC programming|DCS migration|SCADA integration|FAT|SAT"],
    ["Industrial software licensing and support", "Licensing or renewal enquiries for specified engineering, operations and asset-management software.", "Product and version|Users and license model|Existing entitlements|Deployment and support requirements", "CMMS|EAM|process simulation|historian|license renewal"],
    ["Asset data, monitoring and digital integration", "Data-model, historian and monitoring integration enquiries for defined operational use cases.", "Asset and data sources|Use case and deliverables|Existing platforms|Security and data ownership", "digital twin|predictive maintenance|IIoT|asset register"],
    ["Reservoir modelling and interpretation services", "Subsurface interpretation and modelling service enquiries with specified data inputs and study outputs.", "Reservoir and study objective|Available data and quality|Modelling software environment|Deliverables and review scope", "reservoir simulation|petrophysics|seismic interpretation|geomodelling"],
    ["Technical training and competency support", "Training enquiries tied to a defined discipline, equipment or work activity.", "Topics and learning objectives|Participant experience and count|Location and format|Required assessment or certification scope"],
  ], "Service", ["Studies & design", "New projects", "Maintenance & spares"]),
  family("carbon-capture-energy-systems", "Carbon Capture & Geothermal Project Equipment", "Equipment and package enquiries for industrial carbon management and geothermal projects. Each request needs a project-specific process basis and material-compatibility review.", ["energy-transition", "production", "gas", "refining", "power", "water"], [
    ["Carbon capture process packages", "Capture-system and supporting-equipment enquiries defined by the emitter stream and required CO2 product.", "Source stream and contaminants|Capture and product targets|Available heat and utilities|Site and package boundaries", "CCUS|CCS|carbon capture|CO2 capture"],
    ["CO2 conditioning and injection equipment", "Drying, compression and injection equipment for a defined carbon-handling project.", "CO2 composition and phase|Flow and design conditions|Water and impurity limits|Materials and downstream interfaces", "carbon storage|CO2 compression|CO2 injection"],
    ["Methane monitoring equipment", "Fixed or portable measurement equipment for a stated leak-monitoring programme.", "Target gas and detection needs|Measurement locations|Power and communication|Calibration and reporting interfaces", "methane detector|fugitive emissions|LDAR equipment"],
    ["Geothermal well and surface equipment", "Wellhead, pumping and thermal-system enquiries for the specified geothermal resource.", "Resource and fluid chemistry|Temperature and pressure|Well and surface design|Scaling and corrosion conditions", "geothermal pump|geothermal wellhead|geothermal heat"],
  ]),
];

const aliases: Record<string, string[]> = {
  "temperature-sensors-and-thermowells": ["RTD", "PT100", "thermocouple", "thermowell", "حساس حرارة"],
  "radar-and-ultrasonic-level-instruments": ["level transmitter", "guided wave radar", "GWR", "level measurement"],
  "pressure-gauges-and-transmitters": ["pressure gauge", "pressure transmitter", "DP transmitter", "differential pressure"],
  "flow-meters": ["flowmeter", "flow meter", "Coriolis", "magnetic flowmeter", "ultrasonic flowmeter", "orifice meter"],
  "centrifugal-pumps": ["API 610", "OH2", "BB2", "BB3", "VS4", "water injection pump", "مضخات"],
  "ball-gate-and-plug-valves": ["ball valve", "gate valve", "plug valve", "صمامات"],
  "forged-and-branch-fittings": ["sockolet", "weldolet", "threadolet", "socket weld", "branch outlet"],
  "casing-and-production-tubing": ["OCTG", "oil country tubular goods"],
  "electric-submersible-and-rod-lift-systems": ["ESP", "electric submersible pump", "sucker rod pump", "SRP"],
  "gas-lift-and-progressing-cavity-systems": ["PCP", "progressive cavity pump", "gas lift valve"],
  "spiral-wound-gaskets": ["SWG", "spiral wound gasket"],
  "ring-type-joint-gaskets": ["RTJ", "ring joint", "R ring", "RX ring", "BX ring"],
  "fire-hoses-racks-and-cabinets": ["hose rack", "hose reel", "fire hose"],
  "plc-dcs-and-i-o-modules": ["PLC", "DCS", "input output", "I/O"],
};

const itemTags: Record<string, { sectors?: SectorId[]; applications?: string[] }> = {
  "mwd-and-lwd-tools": { sectors: ["drilling", "exploration", "offshore"] },
  "managed-pressure-drilling-equipment": { sectors: ["drilling", "offshore"] },
  "mud-logging-and-surface-acquisition": { sectors: ["drilling", "exploration", "offshore"] },
  "fishing-milling-and-wellbore-cleanup-tools": { applications: ["Well intervention", "Maintenance & spares", "Decommissioning"] },
  "wireline-and-coiled-tubing-tools": { applications: ["Well intervention", "Maintenance & spares"] },
  "wireline-slickline-and-coiled-tubing-services": { applications: ["Well intervention", "Rental & field services"] },
  "workover-snubbing-and-fishing-services": { applications: ["Well intervention", "Rental & field services"] },
  "plug-and-abandonment-service-coordination": { sectors: ["decommissioning", "drilling", "production", "offshore"], applications: ["Decommissioning", "Well intervention", "Rental & field services"] },
  "facility-dismantling-and-materials-recovery": { applications: ["Decommissioning", "Rental & field services"] },
  "emissions-surveys-and-leak-detection": { sectors: ["energy-transition", "production", "pipelines", "refining", "gas", "offshore"], applications: ["Inspection & testing", "Rental & field services"] },
  "environmental-baseline-and-impact-studies": { applications: ["Studies & design", "New projects", "Decommissioning"] },
  "risk-based-inspection-and-fitness-assessment": { sectors: ["production", "pipelines", "refining", "gas", "offshore", "power", "water"], applications: ["Studies & design", "Inspection & testing"] },
  "pipeline-inline-inspection-services": { sectors: ["pipelines", "production", "gas", "offshore", "water"], applications: ["Inspection & testing", "Rental & field services"] },
  "rov-and-underwater-inspection-services": { sectors: ["offshore", "pipelines", "decommissioning"], applications: ["Inspection & testing", "Rental & field services", "Decommissioning"] },
  "reservoir-modelling-and-interpretation-services": { sectors: ["exploration", "drilling", "production", "energy-transition"], applications: ["Studies & design"] },
  "technical-training-and-competency-support": { applications: ["Studies & design", "New projects", "Maintenance & spares"] },
  "concept-feed-and-detailed-engineering": { applications: ["Studies & design", "New projects"] },
  "process-safety-and-reliability-studies": { applications: ["Studies & design", "New projects", "Plant turnarounds"] },
};

export function extendCatalogue(base: CatalogueGroup[]): CatalogueGroup[] {
  return [...base.map(g => ({ ...g, types: [...g.types, ...items(additions[g.slug] ?? [])] })), ...newFamilies].map(g => {
    const types = g.types.map(t => {
      const software = t.id === "industrial-software-licensing-and-support" || t.id === "reservoir-software-and-data-services";
      const tags = itemTags[t.id];
      return { ...t, kind: software ? "Software" as const : g.kind, sectors: tags?.sectors ?? t.sectors ?? g.sectors,
        applications: software ? ["Studies & design", "Maintenance & spares"] : tags?.applications ?? t.applications ?? g.applications,
        aliases: [...(t.aliases ?? []), ...(aliases[t.id] ?? [])], detail: true };
    });
    return { ...g, types, sectors: [...new Set(types.flatMap(t => t.sectors))], applications: [...new Set(types.flatMap(t => t.applications))] };
  });
}
