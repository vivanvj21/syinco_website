import { Product } from "@/types/product";
import { getProductById } from "./products";

/**
 * SYINCO TECHNOLOGIES — Application-First Discovery Matrix
 * 
 * Strict Content & Architectural Governance:
 * 1. Target Property and Process Type are structurally distinct.
 * 2. Recommendations strictly resolve to canonical products in allProducts.
 * 3. Only mappings with provenance === "verified" produce system recommendations.
 * 4. Derived relationships (provenance === "derived") are segregated and never recommended as verified.
 * 5. Deterministic canonical deep link generation: getProductCanonicalUrl(product).
 */

export type MaterialClassId =
  | "thermoelectric-materials"
  | "metals-steel"
  | "ceramics"
  | "carbon"
  | "organic-polymers"
  | "semiconductor-materials"
  | "thin-films"
  | "magnetic-materials"
  | "catalysts-powders";

export type TargetPropertyId =
  | "seebeck-coefficient"
  | "electrical-resistivity"
  | "thermal-expansion"
  | "thermal-conductivity"
  | "thermal-diffusivity"
  | "specific-heat"
  | "tg-dta"
  | "dsc"
  | "vapor-pressure"
  | "high-temp-observation"
  | "wettability-contact-angle"
  | "vacuum-pressure";

export type ProcessTypeId =
  | "sintering"
  | "rapid-heating"
  | "nanoparticle-deposition"
  | "vacuum-pumping"
  | "temperature-pyrometry"
  | "leak-detection";

export interface MaterialClassDefinition {
  id: MaterialClassId;
  label: string;
  description: string;
}

export interface TargetPropertyDefinition {
  id: TargetPropertyId;
  label: string;
  description: string;
}

export interface ProcessTypeDefinition {
  id: ProcessTypeId;
  label: string;
  description: string;
}

export interface ApplicationMapping {
  id: string;
  materialClass: MaterialClassId;
  targetProperty?: TargetPropertyId;
  processType?: ProcessTypeId;
  temperatureRange?: string;
  measurementDirection?: "cross-plane" | "in-plane" | "axial" | "omnidirectional";
  atmosphere?: "vacuum" | "inert-gas" | "air" | "hydrogen" | "reactive-gas";
  technology?: string;
  productIds: string[];
  provenance: "verified" | "derived";
  sourceReferences: string[];
  description: string;
}

export const MATERIAL_CLASSES: MaterialClassDefinition[] = [
  {
    id: "thermoelectric-materials",
    label: "Thermoelectric Materials",
    description: "Bi2Te3, skutterudites, half-Heusler alloys, silicides, and high-zT thermoelectric generators",
  },
  {
    id: "metals-steel",
    label: "Metals & Special Steels",
    description: "Superalloys, refractory metals, structural steels, shape-memory alloys, and titanium alloys",
  },
  {
    id: "ceramics",
    label: "Advanced Ceramics",
    description: "Structural ceramics, SiC, Si3N4, AlN, B4C, bioceramics, and functional electro-ceramics",
  },
  {
    id: "thin-films",
    label: "Thin Films & Coatings",
    description: "Semiconductor nanoscale films, optical coatings, thermal barrier layers, and 2D materials",
  },
  {
    id: "semiconductor-materials",
    label: "Semiconductors & Wafers",
    description: "Silicon, SiC, GaN, GaAs substrates, epi-wafers, and wide bandgap power electronics",
  },
  {
    id: "carbon",
    label: "Carbon & Graphite",
    description: "Carbon-fiber composites, synthetic graphite, graphene sheets, and carbon-carbon brake materials",
  },
  {
    id: "magnetic-materials",
    label: "Magnetic Materials",
    description: "NdFeB permanent magnets, soft magnetic ferrites, magnetocalorics, and amorphous ribbons",
  },
  {
    id: "organic-polymers",
    label: "Polymers & Organics",
    description: "Engineering plastics, resin composites, organic conductors, and dielectric laminates",
  },
  {
    id: "catalysts-powders",
    label: "Catalysts & Fine Powders",
    description: "Heterogeneous catalyst supports, fine chemical precursors, battery active powders, and pigments",
  },
];

export const TARGET_PROPERTIES: TargetPropertyDefinition[] = [
  {
    id: "seebeck-coefficient",
    label: "Seebeck Coefficient (Thermopower)",
    description: "Thermoelectric voltage generation per unit temperature gradient (uV/K)",
  },
  {
    id: "electrical-resistivity",
    label: "Electrical Resistivity / Conductivity",
    description: "Four-terminal DC resistance and electronic transport across cryogenic to 1000°C",
  },
  {
    id: "thermal-expansion",
    label: "Thermal Expansion / Dilatometry",
    description: "Absolute coefficient of thermal expansion (CTE) and phase transformation dilatometry",
  },
  {
    id: "thermal-conductivity",
    label: "Thermal Conductivity",
    description: "Cross-plane and in-plane thermal conductivity across bulk materials and nanoscale films",
  },
  {
    id: "thermal-diffusivity",
    label: "Thermal Diffusivity",
    description: "Laser flash and xenon pulse transient thermal diffusivity measurement",
  },
  {
    id: "specific-heat",
    label: "Specific Heat Capacity (Cp)",
    description: "Direct DSC and laser flash differential heat capacity characterization",
  },
  {
    id: "tg-dta",
    label: "Thermogravimetry / DTA (TG/DTA)",
    description: "Rapid infrared gold-image thermal mass loss and differential thermal transitions",
  },
  {
    id: "dsc",
    label: "Differential Scanning Calorimetry (DSC)",
    description: "High-sensitivity enthalpy, glass transition, and melting behavior evaluation",
  },
  {
    id: "high-temp-observation",
    label: "High-Temperature In-Situ Observation",
    description: "Laser confocal live microscopy of melting, crystallization, and grain dynamics to 1600°C",
  },
  {
    id: "vapor-pressure",
    label: "Vapor Pressure / Effusion",
    description: "Knudsen effusion cell molecular beam vapor pressure analysis under high vacuum",
  },
  {
    id: "wettability-contact-angle",
    label: "High-Temperature Wettability & Contact Angle",
    description: "Sessile drop contact angle and surface tension of molten alloys on ceramic substrates",
  },
  {
    id: "vacuum-pressure",
    label: "Vacuum Pressure & Absolute Capacitance Metrology",
    description: "High-precision gas-independent absolute capacitance diaphragm pressure measurement (1e-5 to 1000 mbar)",
  },
];

export const PROCESS_TYPES: ProcessTypeDefinition[] = [
  {
    id: "sintering",
    label: "Spark Plasma Sintering (SPS / FAST)",
    description: "Field-assisted pulsed DC rapid powder consolidation, diffusion bonding, and reactive sintering",
  },
  {
    id: "rapid-heating",
    label: "Rapid Thermal Annealing (RTA / RTP)",
    description: "Infrared lamp clean optical heating with ramp rates up to 200°C/s for wafers and foils",
  },
  {
    id: "nanoparticle-deposition",
    label: "Nanoparticle Arc Plasma Deposition",
    description: "Clean pulsed arc discharge generation of pure metallic and alloy nanoparticles onto supports",
  },
  {
    id: "vacuum-pumping",
    label: "Hydrocarbon-Free Vacuum Pumping",
    description: "Primary clean oil-free vacuum scroll backing for analytical instruments and process chambers",
  },
  {
    id: "temperature-pyrometry",
    label: "High-Speed Non-Contact Pyrometry",
    description: "Two-color optical infrared thermometry through viewports, harsh furnace gas, and plasma",
  },
  {
    id: "leak-detection",
    label: "Precision Helium / Hydrogen Leak Testing",
    description: "High-sensitivity integral and sniffing vacuum leak detection down to 5e-12 mbar L/s for hermetic envelopes",
  },
];

/**
 * Canonical Application Mappings
 * Source of Truth: Verified OEM catalogues (Advance Riko, Fuji SPS, Edwards)
 */
export const APPLICATION_MAPPINGS: ApplicationMapping[] = [
  // --------------------------------------------------------------------------
  // 1. THERMOELECTRIC MATERIALS
  // --------------------------------------------------------------------------
  {
    id: "app-te-seebeck",
    materialClass: "thermoelectric-materials",
    targetProperty: "seebeck-coefficient",
    temperatureRange: "-150°C to 1000°C",
    technology: "Simultaneous Seebeck Coefficient & Four-Terminal DC Resistivity",
    productIds: ["advance-riko-zem-3"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/zem-3/"],
    description: "World-standard simultaneous Seebeck coefficient measurement under inert gas flow.",
  },
  {
    id: "app-te-resistivity",
    materialClass: "thermoelectric-materials",
    targetProperty: "electrical-resistivity",
    temperatureRange: "-150°C to 1000°C",
    technology: "Four-Terminal DC Lead Method with Constant Current Inversion",
    productIds: ["advance-riko-zem-3"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/zem-3/"],
    description: "High-precision electrical resistivity evaluation for bulk and thin thermoelectric ingots.",
  },
  {
    id: "app-te-diffusivity",
    materialClass: "thermoelectric-materials",
    targetProperty: "thermal-diffusivity",
    temperatureRange: "RT to 1200°C",
    technology: "Laser Flash Method (ASTM E1461)",
    productIds: ["advance-riko-tc-1200rh-tc-9000"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tc-1200rh-tc-9000/"],
    description: "Laser flash thermal diffusivity for figure of merit (zT) thermal transport characterization.",
  },
  {
    id: "app-te-sintering",
    materialClass: "thermoelectric-materials",
    processType: "sintering",
    temperatureRange: "RT to 1500°C",
    technology: "Spark Plasma Sintering (SPS / FAST)",
    productIds: ["fuji-sps-dr-sinter-lab-jr", "fuji-sps-25-series"],
    provenance: "verified",
    sourceReferences: [
      "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
      "https://fdc.co.jp/sps/products/25series/e_25series.html",
    ],
    description: "Rapid spark plasma sintering preventing grain coarsening in thermoelectric nanocomposites.",
  },

  // --------------------------------------------------------------------------
  // 2. THIN FILMS & COATINGS
  // --------------------------------------------------------------------------
  {
    id: "app-thinfilm-conductivity",
    materialClass: "thin-films",
    targetProperty: "thermal-conductivity",
    temperatureRange: "RT to 300°C",
    measurementDirection: "cross-plane",
    technology: "Nanoscale 2-Omega Differential AC Method",
    productIds: ["advance-riko-tcn-2omega"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tcn-2omega/"],
    description: "Direct cross-plane thermal conductivity measurement of sub-micron thin films without substrate subtraction errors.",
  },
  {
    id: "app-thinfilm-rta",
    materialClass: "thin-films",
    processType: "rapid-heating",
    temperatureRange: "RT to 1200°C",
    technology: "Infrared Lamp Optical Radiation Heating",
    productIds: ["advance-riko-rta"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/rta/"],
    description: "Ultra-fast thermal annealing with ramp rates up to 100°C/s for thin film crystallization and contact formation.",
  },
  {
    id: "app-thinfilm-nanoparticle",
    materialClass: "thin-films",
    processType: "nanoparticle-deposition",
    technology: "Pulsed Arc Plasma Evaporation in High Vacuum",
    productIds: ["advance-riko-rmp-1"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/rmp-1/"],
    description: "Direct deposition of size-controlled metal/alloy nanoparticles on thin film substrates without chemical binders.",
  },

  // --------------------------------------------------------------------------
  // 3. ADVANCED CERAMICS
  // --------------------------------------------------------------------------
  {
    id: "app-ceramics-expansion",
    materialClass: "ceramics",
    targetProperty: "thermal-expansion",
    temperatureRange: "-150°C to 1000°C",
    measurementDirection: "axial",
    technology: "Double-Path Michelson Laser Interferometer",
    productIds: ["advance-riko-superlix"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/superlix/"],
    description: "Absolute picometer-resolution thermal expansion measurement for ultra-low expansion ceramics and mirror substrates.",
  },
  {
    id: "app-ceramics-sintering",
    materialClass: "ceramics",
    processType: "sintering",
    temperatureRange: "RT to 2500°C",
    technology: "Pulsed DC Spark Plasma Sintering (SPS)",
    productIds: [
      "fuji-sps-dr-sinter-lab-jr",
      "fuji-sps-25-series",
      "fuji-sps-standard-research-production",
      "fuji-sps-mpsl",
    ],
    provenance: "verified",
    sourceReferences: [
      "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
      "https://fdc.co.jp/sps/products/25series/e_25series.html",
      "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
      "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
    ],
    description: "Consolidation of non-oxide structural ceramics (SiC, B4C, AlN, TiB2) to >99% theoretical density in minutes.",
  },
  {
    id: "app-ceramics-tgdta",
    materialClass: "ceramics",
    targetProperty: "tg-dta",
    temperatureRange: "RT to 1500°C",
    technology: "Infrared Image Radiation Fast TG/DTA",
    productIds: ["advance-riko-tgd-9000"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tgd-9000/"],
    description: "High-ramp thermal mass loss and phase stability analysis under controlled reactive gas atmospheres.",
  },

  // --------------------------------------------------------------------------
  // 4. METALS & SPECIAL STEELS
  // --------------------------------------------------------------------------
  {
    id: "app-metals-observation",
    materialClass: "metals-steel",
    targetProperty: "high-temp-observation",
    temperatureRange: "RT to 1600°C",
    technology: "Confocal Laser High-Temperature In-Situ Observation",
    productIds: ["advance-riko-tms"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tms/"],
    description: "Real-time live microscopic visualization of steel solidification, phase transformation, and grain boundary dynamics.",
  },
  {
    id: "app-metals-dilatometry",
    materialClass: "metals-steel",
    targetProperty: "thermal-expansion",
    temperatureRange: "RT to 1600°C",
    technology: "Fully Automated High-Throughput Push-Rod Dilatometry",
    productIds: ["advance-riko-dly-9000-robot"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/dly-9000-robot/"],
    description: "Continuous unattended quality-control thermal dilatometry for metallurgical transformation points.",
  },
  {
    id: "app-metals-sintering",
    materialClass: "metals-steel",
    processType: "sintering",
    temperatureRange: "RT to 2500°C",
    technology: "High-Force Hydraulic Spark Plasma Sintering",
    productIds: ["fuji-sps-25-series", "fuji-sps-standard-research-production"],
    provenance: "verified",
    sourceReferences: [
      "https://fdc.co.jp/sps/products/25series/e_25series.html",
      "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
    ],
    description: "Powder metallurgy consolidation of refractory alloys, cemented carbides, and high-entropy alloys.",
  },
  {
    id: "app-metals-wettability",
    materialClass: "metals-steel",
    targetProperty: "wettability-contact-angle",
    temperatureRange: "RT to 1200°C",
    technology: "Sessile Drop High-Temperature Optical Wettability",
    productIds: ["advance-riko-wet-1200"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/wet-1200/"],
    description: "Contact angle and interfacial surface tension measurement of molten solder and brazing alloys on metal substrates.",
  },

  // --------------------------------------------------------------------------
  // 5. SEMICONDUCTOR MATERIALS & WAFERS
  // --------------------------------------------------------------------------
  {
    id: "app-semi-rta",
    materialClass: "semiconductor-materials",
    processType: "rapid-heating",
    temperatureRange: "RT to 1200°C",
    technology: "Infrared Radiation Lamp Annealing for Wafers up to 300 mm",
    productIds: ["advance-riko-rta"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/rta/"],
    description: "Dopant activation, silicide synthesis, and rapid thermal processing with strict atmospheric purity.",
  },
  {
    id: "app-semi-diffusivity",
    materialClass: "semiconductor-materials",
    targetProperty: "thermal-diffusivity",
    temperatureRange: "RT to 1000°C",
    measurementDirection: "in-plane",
    technology: "AC Photothermal Laser Pit Method",
    productIds: ["advance-riko-laserpit"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/laserpit/"],
    description: "In-plane thermal diffusivity of semiconductor wafer substrates and wafer-thin thermal management sheets.",
  },

  // --------------------------------------------------------------------------
  // 6. CARBON & GRAPHITE
  // --------------------------------------------------------------------------
  {
    id: "app-carbon-diffusivity",
    materialClass: "carbon",
    targetProperty: "thermal-diffusivity",
    temperatureRange: "RT to 1200°C",
    technology: "Laser Flash Method (ASTM E1461)",
    productIds: ["advance-riko-tc-1200rh-tc-9000", "advance-riko-laserpit"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tc-1200rh-tc-9000/"],
    description: "Anisotropic in-plane and through-plane thermal transport characterization of synthetic graphite and CFCs.",
  },
  {
    id: "app-carbon-expansion",
    materialClass: "carbon",
    targetProperty: "thermal-expansion",
    temperatureRange: "-150°C to 1000°C",
    technology: "Laser Interferometric Dilatometry",
    productIds: ["advance-riko-superlix"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/superlix/"],
    description: "Evaluation of near-zero thermal expansion carbon-fiber reinforced polymer (CFRP) and graphite space structures.",
  },

  // --------------------------------------------------------------------------
  // 7. MAGNETIC MATERIALS
  // --------------------------------------------------------------------------
  {
    id: "app-magnetic-sintering",
    materialClass: "magnetic-materials",
    processType: "sintering",
    temperatureRange: "RT to 1500°C",
    technology: "Automated & Heavy-Tonnage Spark Plasma Sintering",
    productIds: ["fuji-sps-25-series", "fuji-sps-standard-research-production", "fuji-sps-automatic"],
    provenance: "verified",
    sourceReferences: [
      "https://fdc.co.jp/sps/products/25series/e_25series.html",
      "https://fdc.co.jp/sps/products/auto/e_auto.html",
    ],
    description: "Densification of NdFeB and SmCo permanent magnets retaining ultra-fine grain size for maximized coercivity.",
  },

  // --------------------------------------------------------------------------
  // 8. POLYMERS & ORGANICS
  // --------------------------------------------------------------------------
  {
    id: "app-polymers-dsc",
    materialClass: "organic-polymers",
    targetProperty: "dsc",
    temperatureRange: "-150°C to 700°C",
    technology: "Heat Flux Differential Scanning Calorimetry",
    productIds: ["advance-riko-dsc-r"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/dsc-r/"],
    description: "High-sensitivity glass transition (Tg), crystallization, and specific heat evaluation of polymers.",
  },
  {
    id: "app-polymers-tgdta",
    materialClass: "organic-polymers",
    targetProperty: "tg-dta",
    temperatureRange: "RT to 1000°C",
    technology: "Infrared Radiant Fast TG/DTA",
    productIds: ["advance-riko-tgd-9000"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/tgd-9000/"],
    description: "Polymer degradation, decomposition kinetics, and volatile content analysis.",
  },

  // --------------------------------------------------------------------------
  // 9. CATALYSTS & FINE POWDERS
  // --------------------------------------------------------------------------
  {
    id: "app-catalysts-vapor",
    materialClass: "catalysts-powders",
    targetProperty: "vapor-pressure",
    temperatureRange: "RT to 1000°C",
    technology: "Knudsen Effusion Method with Vacuum Microbalance",
    productIds: ["advance-riko-vpe-9000"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/vpe-9000/"],
    description: "Knudsen effusion sublimation rate and equilibrium vapor pressure measurement under high vacuum.",
  },
  {
    id: "app-catalysts-nanoparticle",
    materialClass: "catalysts-powders",
    processType: "nanoparticle-deposition",
    technology: "Arc Plasma Deposition System",
    productIds: ["advance-riko-rmp-1"],
    provenance: "verified",
    sourceReferences: ["https://advance-riko.com/en/products/rmp-1/"],
    description: "Preparation of highly dispersed platinum group metal (PGM) nanocatalysts onto carbon and oxide supports.",
  },

  // --------------------------------------------------------------------------
  // DERIVED RELATIONSHIPS (Strictly Segregated — Never shown as verified)
  // --------------------------------------------------------------------------
  {
    id: "derived-metals-seebeck",
    materialClass: "metals-steel",
    targetProperty: "seebeck-coefficient",
    temperatureRange: "-150°C to 1000°C",
    technology: "Seebeck Coefficient Lead Method",
    productIds: ["advance-riko-zem-3"],
    provenance: "derived",
    sourceReferences: ["Academic literature: thermocouple alloy screening via ZEM-3"],
    description: "Screening of thermocouple alloys and metallic conductors for high-temperature thermoelectric response.",
  },
  {
    id: "derived-polymers-sintering",
    materialClass: "organic-polymers",
    processType: "sintering",
    temperatureRange: "RT to 350°C",
    technology: "Low-Pressure Spark Plasma Sintering",
    productIds: ["fuji-sps-dr-sinter-lab-jr"],
    provenance: "derived",
    sourceReferences: ["Research feasibility: ultra-high molecular weight polyethylene (UHMWPE) consolidation"],
    description: "Specialized low-temperature consolidation of conductive polymer-matrix composites.",
  },

  // --------------------------------------------------------------------------
  // EDWARDS VACUUM VERIFIED APPLICATION MAPPINGS (Publication Traceable)
  // --------------------------------------------------------------------------
  {
    id: "app-edw-semiconductor-dry-pumping",
    materialClass: "semiconductor-materials",
    processType: "vacuum-pumping",
    technology: "Oil-Free Dry Scroll Vacuum Pumping & Turbomolecular Backing",
    productIds: ["edwards-nxds-series", "edwards-nxri-series"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/dry-scroll-pumps/nxds-dry-scroll-pumps-brochure.pdf (Publication 3601-0591-01)",
      "https://edwardsvacuum.com/content/dam/edwards/downloads/multistage-roots-pumps/nxri-multistage-roots-dry-pumps-datasheet.pdf (Publication 3601-0601-01)",
    ],
    description: "Hydrocarbon-free primary vacuum pumping and turbomolecular pump backing for semiconductor cleanrooms, load locks, and analytical mass spectrometers.",
  },
  {
    id: "app-edw-thinfilm-process-pumping",
    materialClass: "thin-films",
    processType: "vacuum-pumping",
    technology: "Industrial Dry Screw Vacuum Pumping",
    productIds: ["edwards-gxs-series", "edwards-cdx-series"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/dry-screw-pumps/gxs-dry-screw-vacuum-pumps-brochure.pdf (Publication 3601-0591-01)",
      "https://edwardsvacuum.com/content/dam/edwards/downloads/chemical-dry-pumps/cdx-dry-screw-vacuum-pumps-brochure.pdf (Publication 3601-0591-01)",
    ],
    description: "High-throughput chemical dry screw pumping for large-area thin-film deposition, coating chambers, and hostile vapor recovery.",
  },
  {
    id: "app-edw-metals-furnace-roughing",
    materialClass: "metals-steel",
    processType: "vacuum-pumping",
    technology: "Two-Stage Rotary Vane & Mechanical Booster Pumping",
    productIds: ["edwards-rv-series", "edwards-eh-series"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/rotary-vane-pumps/rv-rotary-vane-pumps-brochure.pdf (Publication 3601-0591-01)",
      "https://edwardsvacuum.com/content/dam/edwards/downloads/mechanical-booster-pumps/eh-mechanical-booster-pumps-brochure.pdf (Publication 3601-0591-01)",
    ],
    description: "Rapid roughing and backing of vacuum metallurgy induction furnaces, vacuum brazing, and heat treatment systems.",
  },
  {
    id: "app-edw-metals-leak-testing",
    materialClass: "metals-steel",
    processType: "leak-detection",
    technology: "180° Magnetic Sector Mass Spectrometry Helium/Hydrogen Leak Detection",
    productIds: ["edwards-eld500"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/leak-detection/eld500-leak-detector-brochure.pdf (Publication 3601-0565-01)",
    ],
    description: "High-sensitivity vacuum envelope integrity testing and sniffing leak location (<5e-12 mbar L/s) for vacuum vessels, welded manifolds, and gas delivery lines.",
  },
  {
    id: "app-edw-thinfilm-capacitance-manometry",
    materialClass: "thin-films",
    targetProperty: "vacuum-pressure",
    technology: "Gas-Independent Heated Ceramic Diaphragm Capacitance Manometry",
    productIds: ["edwards-barocel-7000"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/measurement-control/barocel-7000-capacitance-manometer-datasheet.pdf (Publication 3601-0565-01)",
    ],
    description: "Absolute pressure measurement with 0.15% accuracy for plasma etching, PECVD, and sputtering pressure control without gas composition dependencies.",
  },
  {
    id: "app-edw-semiconductor-gate-valves",
    materialClass: "semiconductor-materials",
    processType: "vacuum-pumping",
    technology: "Stainless Steel Bellows-Sealed High-Vacuum Gate Valve Isolation",
    productIds: ["edwards-bgv-series"],
    provenance: "verified",
    sourceReferences: [
      "https://edwardsvacuum.com/content/dam/edwards/downloads/valves/bgv-stainless-steel-gate-valve.pdf (Publication 3601-0055-01)",
    ],
    description: "Ultra-low particle generation gate valve isolation for semiconductor wafer transfer chambers and turbomolecular pump isolation.",
  },

  // --------------------------------------------------------------------------
  // EDWARDS DERIVED APPLICATION MAPPING (For Strict Provenance Enforcement)
  // --------------------------------------------------------------------------
  {
    id: "derived-edw-polymers-degassing",
    materialClass: "organic-polymers",
    processType: "vacuum-pumping",
    technology: "Vacuum Degassing under Primary Scroll Exhaust",
    productIds: ["edwards-nxds-series"],
    provenance: "derived",
    sourceReferences: ["Engineering inference: polymer resin degassing under 0.1 mbar primary vacuum"],
    description: "Secondary drying and void removal from cast polymer resins under primary scroll vacuum.",
  },
];

/**
 * Filter Query for Application Discovery
 */
export interface DiscoveryQuery {
  materialClass?: MaterialClassId;
  targetProperty?: TargetPropertyId;
  processType?: ProcessTypeId;
  temperatureMax?: number;
  measurementDirection?: string;
}

/**
 * Discovery Result with Provenance Guarantee
 */
export interface DiscoveryResult {
  hasMatches: boolean;
  recommendedProducts: Product[];
  verifiedMappings: ApplicationMapping[];
  derivedMappingsCount: number;
  emptyReason?: string;
}

/**
 * Return all verified material classes
 */
export function getAllMaterials(): MaterialClassDefinition[] {
  return MATERIAL_CLASSES;
}

/**
 * Get available properties for a given material class (verified only)
 */
export function getPropertiesForMaterial(materialClassId: MaterialClassId): TargetPropertyDefinition[] {
  const verified = APPLICATION_MAPPINGS.filter(
    (m) => m.materialClass === materialClassId && m.provenance === "verified" && m.targetProperty !== undefined
  );
  const propertyIds = new Set(verified.map((m) => m.targetProperty!));
  return TARGET_PROPERTIES.filter((p) => propertyIds.has(p.id));
}

/**
 * Get available processes for a given material class (verified only)
 */
export function getProcessesForMaterial(materialClassId: MaterialClassId): ProcessTypeDefinition[] {
  const verified = APPLICATION_MAPPINGS.filter(
    (m) => m.materialClass === materialClassId && m.provenance === "verified" && m.processType !== undefined
  );
  const processIds = new Set(verified.map((m) => m.processType!));
  return PROCESS_TYPES.filter((p) => processIds.has(p.id));
}

/**
 * Deterministic Application Discovery Lookup
 * CRITICAL RULE: Never returns derived relationships as verified recommendations.
 */
export function findRecommendedSystems(query: DiscoveryQuery): DiscoveryResult {
  if (!query.materialClass) {
    return {
      hasMatches: false,
      recommendedProducts: [],
      verifiedMappings: [],
      derivedMappingsCount: 0,
      emptyReason: "Please select a material class to begin application discovery.",
    };
  }

  // Filter mappings strictly matching material and either property or process
  const matchingMappings = APPLICATION_MAPPINGS.filter((m) => {
    if (m.materialClass !== query.materialClass) return false;
    if (query.targetProperty && m.targetProperty !== query.targetProperty) return false;
    if (query.processType && m.processType !== query.processType) return false;
    if (query.measurementDirection && m.measurementDirection && m.measurementDirection !== query.measurementDirection) return false;
    return true;
  });

  const verifiedMappings = matchingMappings.filter((m) => m.provenance === "verified");
  const derivedMappings = matchingMappings.filter((m) => m.provenance === "derived");

  if (verifiedMappings.length === 0) {
    return {
      hasMatches: false,
      recommendedProducts: [],
      verifiedMappings: [],
      derivedMappingsCount: derivedMappings.length,
      emptyReason: "No verified system mapping is available for this combination yet.",
    };
  }

  // Deduplicate product IDs across all verified matching mappings
  const matchedProductIds = Array.from(new Set(verifiedMappings.flatMap((m) => m.productIds)));

  // Resolve to canonical product records in allProducts
  const recommendedProducts = matchedProductIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);

  return {
    hasMatches: recommendedProducts.length > 0,
    recommendedProducts,
    verifiedMappings,
    derivedMappingsCount: derivedMappings.length,
  };
}

/**
 * Permanent Invariant: Deterministic Canonical Deep Link Generation
 * Resolves directly to /products/${product.categorySlug}/${product.slug}
 * NEVER redirects to generic /products.
 */
export function getProductCanonicalUrl(product: Product): string {
  if (!product || !product.categorySlug || !product.slug) {
    throw new Error("Cannot construct canonical deep link for invalid product record");
  }
  return `/products/${product.categorySlug}/${product.slug}`;
}
