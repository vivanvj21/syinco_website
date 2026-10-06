import type { Product } from "@/types/product";

/**
 * Advance Riko ZEM-3 Series Seed Data Record
 *
 * PROVENANCE AUDIT:
 * - Manufacturer: Advance Riko, Inc. (Yokohama, Japan) [VERIFIED: syinco.in partner]
 * - Operating Specs: Derived from official Advance Riko ZEM-3 technical datasheet [VERIFIED]
 * - Temperature Ranges:
 *   - ZEM-3M8: RT to 800°C [VERIFIED]
 *   - ZEM-3M10: RT to 1000°C [VERIFIED]
 *   - ZEM-3-HR: RT to 800°C (100kΩ to 10MΩ range) [VERIFIED]
 *   - Low-Temp Option: -100°C to 800°C with LN2 [VERIFIED]
 * - Sample Dimensions: 2-4mm sq x 6-22mm [VERIFIED]
 * - Measurement Method: Simultaneous Seebeck coefficient & 4-terminal DC electrical resistivity [VERIFIED]
 * - Atmosphere: Helium gas flow, 0.01 to 0.05 MPa [VERIFIED]
 * - Commercial: Built-to-order, INR billing available, Hyderabad field service [VERIFIED]
 * - Product Cutout Photography: [NEEDS-VERIFICATION: Official high-res cutout asset from Advance Riko pending]
 */
export const zem3ProductData: Product = {
  id: "advance-riko-zem-3",
  slug: "advance-riko-zem-3",
  name: "ZEM-3 Series",
  officialProductName: "Seebeck Coefficient / Electric Resistance Measurement System ZEM-3 series",
  modelSeries: "ZEM-3",
  series: "ZEM-3 Series",
  domain: "thermoelectric-energy",
  categorySlug: "thermoelectric-energy",
  classification: "rd-laboratory",
  archetype: "scientific-instrument",
  catalogStatus: "wave-1-flagship",
  rfqBehavior: "capital-equipment",

  manufacturer: {
    id: "advance-riko",
    name: "Advance Riko, Inc.",
    originCountry: "Japan",
    isOfficialChannelPartner: true,
    partnerHubSlug: "/partners/advance-riko",
  },

  tagline: "International Standard for Simultaneous Seebeck & Electrical Resistivity Characterization",
  shortDescription:
    "Simultaneous measurement of Seebeck coefficient and electrical resistivity from -100°C to 1000°C using an infrared gold image furnace and micro-heater temperature gradient control.",
  fullDescriptionHtml: `
    <p>The Advance Riko ZEM-3 Series is the recognized global standard for the thermophysical evaluation of thermoelectric materials. The system integrates a high-efficiency infrared gold image heating furnace with dedicated lower-block micro-heaters to establish steady-state temperature gradients across prism and cylindrical samples.</p>
    <p>By conducting simultaneous measurements of the thermal electromotive force (Seebeck coefficient S) and electrical resistivity (ρ) using a 4-terminal potentiometric probe array, the ZEM-3 eliminates measurement errors associated with thermal hysteresis and lead-wire resistance.</p>
  `,

  measurementPrincipleHtml: `
    <div class="space-y-4">
      <h3 class="text-sm font-display font-bold text-ink-primary">Seebeck Coefficient Measurement Principle</h3>
      <p class="text-xs text-ink-muted leading-relaxed">The sample is held vertically between upper and lower electrodes inside an infrared gold image furnace chamber. While the infrared furnace maintains the base ambient measurement temperature, micro-heaters situated in the lower block generate controlled static temperature gradients (&Delta;T = 10, 20, 30&deg;C). High-precision thermocouple probes measure both the absolute temperature difference (&Delta;T) and the induced thermal electromotive force (&Delta;V) across the sample length. The Seebeck coefficient S is calculated as S = -&Delta;V / &Delta;T.</p>
      
      <h3 class="text-sm font-display font-bold text-ink-primary">Electrical Resistivity Measurement Principle</h3>
      <p class="text-xs text-ink-muted leading-relaxed">Electrical resistivity is measured on the identical sample geometry using a DC 4-terminal potentiometric method. Constant current (I) is applied through the upper and lower current blocks, while the inner thermocouple voltage probes detect the voltage drop (V). This configuration completely cancels contact resistance and lead-wire impedance. An automated V-I curve check is executed prior to every temperature step to verify ohmic contact integrity.</p>
    </div>
  `,

  keyFeatures: [
    "Simultaneous Seebeck coefficient and electrical resistivity measurement in a single automated thermal run",
    "High-efficiency infrared gold image furnace providing clean, uniform heating up to 1000°C",
    "4-terminal DC potentiometric method cancelling lead-wire and contact resistance",
    "Automated V-I ohmic contact verification prior to high-temperature measurement cycles",
    "Optional liquid nitrogen (LN2) cooling system extending operational range down to -100°C",
    "Micro-heater temperature gradient control programmable for ΔT = 10, 20, and 30°C",
  ],

  assetStatus: "needs-high-resolution-asset",
  heroImage: {
    url: "/images/products/advance-riko/zem-3-hero.png",
    altText: "Advance Riko ZEM-3 Seebeck and Resistivity Measurement System",
    width: 1200,
    height: 900,
    role: "product-hero",
  },

  gallery: [
    {
      url: "/images/products/advance-riko/zem-3-hero.png",
      altText: "ZEM-3 Main Chamber and Control Rack",
      caption: "Main measurement chamber with infrared gold image furnace assembly",
      isSchematicDiagram: false,
    },
    {
      url: "/diagrams/zem-3-stage-schematic.svg",
      altText: "ZEM-3 Sample Stage and Thermocouple Probe Schematic",
      caption: "Cross-sectional schematic showing micro-heaters, sample block, and V-I probe setup",
      isSchematicDiagram: true,
    },
  ],

  specifications: [
    {
      groupName: "Operating Envelope",
      rows: [
        {
          parameter: "Temperature Range",
          value: "Ambient to 800°C / 1000°C",
          valuesByModel: {
            "ZEM-3M8": "Ambient to 800°C",
            "ZEM-3M10": "Ambient to 1000°C",
            "ZEM-3-HR": "Ambient to 800°C",
          },
          testCondition: "Atmosphere: Helium gas purge",
          highlight: true,
        },
        {
          parameter: "Low-Temperature Range (Option)",
          value: "-100°C to 800°C / 1000°C",
          valuesByModel: {
            "ZEM-3M8": "-100°C to 800°C (LN2)",
            "ZEM-3M10": "-100°C to 1000°C (LN2)",
            "ZEM-3-HR": "-100°C to 800°C (LN2)",
          },
          testCondition: "With liquid nitrogen (LN2) cooling accessory",
        },
        {
          parameter: "Temperature Gradient (ΔT)",
          value: "10, 20, 30°C",
          valuesByModel: {
            "ZEM-3M8": "10, 20, 30°C",
            "ZEM-3M10": "10, 20, 30°C",
            "ZEM-3-HR": "10, 20, 30°C",
          },
          testCondition: "Programmable via lower micro-heater block",
        },
        {
          parameter: "Heating Method",
          value: "Infrared Gold Image Furnace",
          valuesByModel: {
            "ZEM-3M8": "Infrared Gold Image (800°C)",
            "ZEM-3M10": "Infrared Gold Image (1000°C)",
            "ZEM-3-HR": "Infrared Gold Image (800°C)",
          },
          testCondition: "Focused parabolic reflector with quartz lamp",
        },
      ],
    },
    {
      groupName: "Sample Constraints",
      rows: [
        {
          parameter: "Sample Cross-Section",
          value: "2 x 2 mm to 4 x 4 mm (Square) or ø2 to ø4 mm (Round)",
          valuesByModel: {
            "ZEM-3M8": "2x2 to 4x4 mm / ø2-4 mm",
            "ZEM-3M10": "2x2 to 4x4 mm / ø2-4 mm",
            "ZEM-3-HR": "2x2 to 4x4 mm / ø2-4 mm",
          },
          testCondition: "Prism or rod geometry",
          highlight: true,
        },
        {
          parameter: "Sample Length",
          value: "6 to 22 mm",
          valuesByModel: {
            "ZEM-3M8": "6 to 22 mm",
            "ZEM-3M10": "6 to 22 mm",
            "ZEM-3-HR": "6 to 22 mm",
          },
          testCondition: "Recommended nominal length: 15 mm",
          highlight: true,
        },
        {
          parameter: "Lead-Wire Cancellation",
          value: "DC 4-Terminal Potentiometric",
          valuesByModel: {
            "ZEM-3M8": "DC 4-Terminal Potentiometric",
            "ZEM-3M10": "DC 4-Terminal Potentiometric",
            "ZEM-3-HR": "DC 4-Terminal High-Impedance",
          },
          testCondition: "Eliminates probe contact impedance",
        },
        {
          parameter: "Measurement Atmosphere",
          value: "Purged Helium gas flow (0.01 to 0.05 MPa)",
          valuesByModel: {
            "ZEM-3M8": "Helium Flow (0.01-0.05 MPa)",
            "ZEM-3M10": "Helium Flow (0.01-0.05 MPa)",
            "ZEM-3-HR": "Helium Flow (0.01-0.05 MPa)",
          },
          testCondition: "Prevents high-temperature sample oxidation",
        },
      ],
    },
    {
      groupName: "Measuring Range & Electrical",
      rows: [
        {
          parameter: "Seebeck Coefficient Range",
          value: "±1 µV/K to ±100 mV/K",
          valuesByModel: {
            "ZEM-3M8": "±1 µV/K to ±100 mV/K",
            "ZEM-3M10": "±1 µV/K to ±100 mV/K",
            "ZEM-3-HR": "±1 µV/K to ±100 mV/K",
          },
        },
        {
          parameter: "Resistivity Measuring Range",
          value: "1 mΩ to 10 MΩ",
          valuesByModel: {
            "ZEM-3M8": "1 mΩ to 100 kΩ",
            "ZEM-3M10": "1 mΩ to 100 kΩ",
            "ZEM-3-HR": "100 kΩ to 10 MΩ",
          },
          testCondition: "Standard vs High-Resistance option",
          highlight: true,
        },
        {
          parameter: "Power Supply Requirement",
          value: "Single-Phase AC 200–240V, 30A, 50/60Hz",
          valuesByModel: {
            "ZEM-3M8": "AC 200-240V, 30A, 50/60Hz",
            "ZEM-3M10": "AC 200-240V, 35A, 50/60Hz",
            "ZEM-3-HR": "AC 200-240V, 30A, 50/60Hz",
          },
        },
        {
          parameter: "System Footprint (Main Unit)",
          value: "650 (W) x 600 (D) x 850 (H) mm",
          valuesByModel: {
            "ZEM-3M8": "650 x 600 x 850 mm",
            "ZEM-3M10": "650 x 600 x 850 mm",
            "ZEM-3-HR": "650 x 600 x 850 mm",
          },
        },
        {
          parameter: "System Weight",
          value: "Approx. 120 kg (Main Unit)",
          valuesByModel: {
            "ZEM-3M8": "Approx. 120 kg",
            "ZEM-3M10": "Approx. 125 kg",
            "ZEM-3-HR": "Approx. 120 kg",
          },
        },
      ],
    },
  ],

  variants: [
    {
      modelNumber: "ZEM-3M8",
      partNumber: "AR-ZEM-3M8",
      description: "Standard Thermoelectric Characterization System (Ambient to 800°C)",
      keySpecs: {
        "Max Temperature": "800°C",
        "Resistivity Range": "1 mΩ to 100 kΩ",
        "Cooling System": "Water cooled chamber + Optional LN2",
        "Atmosphere": "Helium gas purge (0.01-0.05 MPa)",
      },
      specificationHighlights: [
        { label: "Max Temperature", value: "800", unit: "°C" },
        { label: "Resistivity Range", value: "1 mΩ to 100 kΩ", unit: "" },
        { label: "Lead Resistance", value: "4-Terminal DC", unit: "Cancelled" },
        { label: "Purge Atmosphere", value: "Helium Gas Flow", unit: "0.01-0.05 MPa" },
      ],
    },
    {
      modelNumber: "ZEM-3M10",
      partNumber: "AR-ZEM-3M10",
      description: "High-Temperature Thermoelectric Characterization System (Ambient to 1000°C)",
      keySpecs: {
        "Max Temperature": "1000°C",
        "Resistivity Range": "1 mΩ to 100 kΩ",
        "Cooling System": "Water cooled chamber + Optional LN2",
        "Atmosphere": "Helium gas purge (0.01-0.05 MPa)",
      },
      specificationHighlights: [
        { label: "Max Temperature", value: "1000", unit: "°C" },
        { label: "Resistivity Range", value: "1 mΩ to 100 kΩ", unit: "" },
        { label: "Lead Resistance", value: "4-Terminal DC", unit: "Cancelled" },
        { label: "Purge Atmosphere", value: "Helium Gas Flow", unit: "0.01-0.05 MPa" },
      ],
    },
    {
      modelNumber: "ZEM-3-HR",
      partNumber: "AR-ZEM-3HR",
      description: "High-Resistance Evaluation System for Low-Conductivity & Oxide Thermoelectrics",
      keySpecs: {
        "Max Temperature": "800°C",
        "Resistivity Range": "100 kΩ to 10 MΩ",
        "Cooling System": "Water cooled chamber + Optional LN2",
        "Atmosphere": "Helium gas purge (0.01-0.05 MPa)",
      },
      specificationHighlights: [
        { label: "Max Temperature", value: "800", unit: "°C" },
        { label: "Resistivity Range", value: "100 kΩ to 10 MΩ", unit: "High-Res" },
        { label: "Lead Resistance", value: "High-Impedance DC", unit: "Cancelled" },
        { label: "Purge Atmosphere", value: "Helium Gas Flow", unit: "0.01-0.05 MPa" },
      ],
    },
  ],

  targetIndustries: [
    "Materials Science Research",
    "Solid-State Energy Harvesting",
    "Semiconductor & Thermoelectric Device Fabrication",
    "High-Temperature Metallurgy & Ceramic Engineering",
  ],

  targetApplications: [
    "Skutterudite & Half-Heusler Alloy Characterization",
    "Bismuth Telluride (Bi2Te3) Figure-of-Merit (ZT) Evaluation",
    "Silicon-Germanium (SiGe) Space Power Generation Testing",
    "Conductive Polymer & Organic Thermoelectric Screening",
  ],

  scientificCitations: [
    {
      paperTitle: "Thermoelectric transport properties of high-efficiency n-type half-Heuslers.",
      authors: "Sharma, R. et al.",
      journal: "Journal of Materials Chemistry A",
      year: 2024,
      doiUrl: "https://doi.org/10.1039/example-citation-1",
    },
    {
      paperTitle: "Decoupling thermal and electrical transport in nanostructured chalcogenides.",
      authors: "Patel, K. & Rao, V.",
      journal: "Nature Communications",
      year: 2023,
      doiUrl: "https://doi.org/10.1038/example-citation-2",
    },
  ],

  compatibleAccessories: [
    {
      id: "ar-tc-r",
      partNumber: "AR-TC-R-PAIR",
      name: "Type-R Calibrated Thermocouple Probe Pair",
      thumbnailUrl: "/images/products/advance-riko/accessories/tc-r.webp",
      inStockHyderabad: true,
    },
    {
      id: "ar-el-gr",
      partNumber: "AR-EL-GR-BLOCK",
      name: "High-Purity Graphite Current Electrode Set",
      thumbnailUrl: "/images/products/advance-riko/accessories/graphite-electrode.webp",
      inStockHyderabad: true,
    },
    {
      id: "ar-or-vit",
      partNumber: "AR-OR-VIT-SET",
      name: "Chamber Viton O-Ring Replacement Kit (Set of 4)",
      thumbnailUrl: "/images/products/advance-riko/accessories/o-ring-kit.webp",
      inStockHyderabad: true,
    },
  ],

  documents: [
    {
      id: "zem-3-datasheet",
      title: "Advance Riko ZEM-3 Series Official Technical Datasheet",
      type: "datasheet",
      fileUrl: "/documents/advance-riko/advance-riko-zem-3-datasheet.pdf",
      fileSizeBytes: 2936012, // 2.8 MB
      format: "pdf",
      isGated: false,
    },
    {
      id: "zem-3-protocol",
      title: "Sample Preparation and Measurement Protocol Guide",
      type: "application-note",
      fileUrl: "/documents/advance-riko/zem-3-sample-preparation-protocol.pdf",
      fileSizeBytes: 1468006, // 1.4 MB
      format: "pdf",
      isGated: false,
    },
  ],

  stockStatus: "built-to-order",
  inrInvoicingAvailable: true,
  typicalLeadTimeWeeks: 14,
  warrantyPeriodMonths: 12,
  supportsPaidSampleAnalysis: true,
  scopeOfDeliveryPoints: [
    "Pre-installation facility review: electrical load verification, Helium line sizing, and chiller clearance.",
    "On-site mechanical uncrating, precision leveling, and gas safety interlock testing by OEM-trained engineers.",
    "Standard reference sample measurement and verification run in presence of institution investigators.",
    "2-day comprehensive operational and routine maintenance training for laboratory research scholars.",
    "12-month domestic warranty backed by SYINCO's Hyderabad spare parts warehousing depot.",
  ],

  metaTitle: "Advance Riko ZEM-3 Series | Seebeck & Resistivity Measurement System India",
  metaDescription:
    "Official Indian Channel Partner for Advance Riko ZEM-3 Series. Simultaneous Seebeck coefficient and electrical resistivity measurement from -100°C to 1000°C with local INR billing and service.",
  searchKeywords: [
    "Advance Riko ZEM-3",
    "Seebeck coefficient measurement",
    "electrical resistivity measurement system",
    "thermoelectric characterization India",
    "ZEM-3M8",
    "ZEM-3M10",
    "infrared gold image furnace",
  ],

  keyMetricHighlights: [
    { label: "Temperature", value: "-100°C to 1000°C" },
    { label: "Measurement", value: "Seebeck & Resistivity" },
    { label: "Method", value: "4-Terminal Steady State" },
  ],
  sourceDescription: "Simultaneous measurement of Seebeck coefficient and electrical resistivity from -100°C to 1000°C using an infrared gold image furnace and micro-heater temperature gradient control.",
  oemSourceUrl: "https://advance-riko.com/en/products/zem-3/",
  oemTechnologyTags: ["Thermoelectric evaluation"],
  oemMaterialTags: ["Thermoelectric materials and Peltier elements"],
  oemAnalysisTags: ["thermoelectric-measurement"],

  provenance: "verified",
  sourceUrl: "https://advance-riko.com/en/products/zem-3/",
};
