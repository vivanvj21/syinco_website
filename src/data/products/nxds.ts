import type { Product } from "@/types/product";

/**
 * Edwards nXDS Dry Scroll Vacuum Pump Series Seed Data Record
 * Provenance Audit:
 * - Operating specifications, flanges, noise levels, models: VERIFIED (Edwards OEM Engineering Datasheet)
 * - Accessory Part Numbers (Tip-seal kits, silencer): VERIFIED (Edwards Spares Manual)
 * - Cutout asset: NEEDS-VERIFICATION (Precision Wireframe Placeholder utilized)
 */
export const nxdsProductData: Product = {
  id: "edwards-nxds-series",
  slug: "edwards-nxds-series",
  name: "Edwards nXDS Series Dry Scroll Vacuum Pumps",
  modelSeries: "nXDS",
  domain: "vacuum-technology",
  categorySlug: "vacuum-technology",
  classification: "subsystem-component",
  archetype: "industrial-component",
  manufacturer: {
    id: "edwards-vacuum",
    name: "Edwards Vacuum",
    originCountry: "UK",
    isOfficialChannelPartner: true,
    partnerHubSlug: "/partners/edwards-vacuum",
  },
  tagline: "Ultra-Clean, Hydrocarbon-Free Pumping with 5-Year Maintenance Interval",
  shortDescription:
    "Compact, lubricant-free dry scroll vacuum pump delivering up to 21 m³/h pumping speed and 0.007 mbar ultimate vacuum with an exceptional 5-year tip-seal maintenance interval.",
  longDescription:
    "The Edwards nXDS represents the latest generation in oil-free dry scroll vacuum technology. Engineered with a hermetically sealed mechanism and bearing isolation bellows, the nXDS guarantees an ultra-clean vacuum environment completely free of hydrocarbon contamination. Powered by an integrated smart inverter drive operating on single-phase 100–240V supplies, the pump combines whisper-quiet acoustic operation (52 dB(A)) with low power consumption. Ideal for turbomolecular pump backing, mass spectrometry, glove boxes, and beamline instrumentation.",
  fullDescriptionHtml: `
    <p>The Edwards nXDS series improves upon legacy scroll pump architecture by introducing an integrated hermetic bellows seal that isolates the vacuum envelope from the bearing lubricant. This design eliminates any possibility of hydrocarbon backstreaming into sensitive vacuum systems.</p>
    <p>An intelligent variable-frequency inverter motor automatically regulates power draw while supporting global single-phase AC voltages from 100V to 240V without manual transformer jumper adjustments.</p>
  `,
  mechanismArchitectureHtml: `
    <p>The pumping mechanism consists of two intermeshing Archimedean spirals: one fixed scroll and one orbiting scroll. Gas enters through the peripheral NW25 inlet port and is trapped in crescent-shaped pockets. As the orbiting scroll moves, these pockets are continuously compressed toward the center and exhausted through the non-return exhaust valve.</p>
  `,
  keyFeatures: [
    "Completely oil-free vacuum chamber with hermetic bearing isolation bellows",
    "Smart universal inverter motor operating seamlessly on 100–240V AC 50/60Hz",
    "Extended tip-seal service life up to 50,000 operating hours (up to 5 years)",
    "Whisper-quiet acoustic emission at 52 dB(A) for cleanroom and lab environments",
    "High vapor handling capability with standard 4-position manual gas ballast",
    "Standard NW25 (KF25) quick-clamp inlet and exhaust connections",
  ],

  heroImage: {
    url: "/images/products/edwards/nxds-series-hero.webp",
    altText: "Edwards nXDS Series Dry Scroll Vacuum Pump",
    width: 1385,
    height: 1045,
    role: "product-hero",
    confidenceScore: 0.99,
    sourceDocumentId: "EDW-DOC-014",
    sourcePage: 1,
    sourceSection: "Front Cover",
    reviewRequired: false,
    selectionReason: "Front cover / page 1 overview | Isolated OEM transparency mask (smask) | High resolution asset (>=700x500) | Continuous-tone photographic depth (midtones 43.4%)",
  },
  gallery: [
    {
      url: "/images/products/edwards/nxds-front-iso.webp",
      altText: "Edwards nXDS Isometric Assembly View",
      caption: "Front perspective showing NW25 inlet port and inverter cowl",
    },
    {
      url: "/images/products/edwards/nxds-ports.webp",
      altText: "Edwards nXDS Flange Interface",
      caption: "NW25 quick-clamp inlet and exhaust ports with centering ring",
    },
    {
      url: "/images/products/edwards/nxds-cad-drawing.webp",
      altText: "Edwards nXDS Dimensional CAD Footprint",
      caption: "Mounting holes and dimensional envelope schematic",
      isSchematicDiagram: true,
    },
  ],

  targetIndustries: [
    "Semiconductor Cleanroom & Load Locks",
    "Analytical Instrumentation & Mass Spectrometry",
    "High-Energy Physics & Synchrotron Beamlines",
    "Industrial Metallurgy & Vacuum Heat Treatment",
  ],

  targetApplications: [
    "Turbomolecular Pump Backing",
    "Mass Spectrometry & Gas Chromatography",
    "Semiconductor Cleanrooms & Load Locks",
    "Electron Microscopy (SEM / TEM Vacuum)",
    "Inert Atmosphere Glove Box Evacuation",
    "Thin-Film Thermal Evaporation & Sputtering",
  ],

  variants: [
    {
      modelNumber: "nXDS6i",
      partNumber: "A73501983",
      description: "6.2 m³/h displacement dry scroll vacuum pump with 0.020 mbar ultimate vacuum",
      keySpecs: {
        "Pumping Speed": "6.2 m³/h",
        "Ultimate Vacuum": "0.020 mbar",
        "Power": "280 W",
      },
      specificationHighlights: [
        { label: "Pumping Speed", value: "6.2", unit: "m³/h" },
        { label: "Ultimate Vacuum", value: "0.020", unit: "mbar" },
        { label: "Power Input", value: "280", unit: "W" },
      ],
      stockStatus: "hyderabad-stock",
    },
    {
      modelNumber: "nXDS10i",
      partNumber: "A73601983",
      description: "11.1 m³/h displacement dry scroll vacuum pump with 0.007 mbar ultimate vacuum",
      keySpecs: {
        "Pumping Speed": "11.1 m³/h",
        "Ultimate Vacuum": "0.007 mbar",
        "Power": "280 W",
      },
      specificationHighlights: [
        { label: "Pumping Speed", value: "11.1", unit: "m³/h" },
        { label: "Ultimate Vacuum", value: "0.007", unit: "mbar" },
        { label: "Power Input", value: "280", unit: "W" },
      ],
      stockStatus: "hyderabad-stock",
    },
    {
      modelNumber: "nXDS15i",
      partNumber: "A73701983",
      description: "15.1 m³/h displacement dry scroll vacuum pump with 0.007 mbar ultimate vacuum",
      keySpecs: {
        "Pumping Speed": "15.1 m³/h",
        "Ultimate Vacuum": "0.007 mbar",
        "Power": "300 W",
      },
      specificationHighlights: [
        { label: "Pumping Speed", value: "15.1", unit: "m³/h" },
        { label: "Ultimate Vacuum", value: "0.007", unit: "mbar" },
        { label: "Power Input", value: "300", unit: "W" },
      ],
      stockStatus: "hyderabad-stock",
    },
    {
      modelNumber: "nXDS20i",
      partNumber: "A73801983",
      description: "21.0 m³/h displacement dry scroll vacuum pump with 0.030 mbar ultimate vacuum",
      keySpecs: {
        "Pumping Speed": "21.0 m³/h",
        "Ultimate Vacuum": "0.030 mbar",
        "Power": "300 W",
      },
      specificationHighlights: [
        { label: "Pumping Speed", value: "21.0", unit: "m³/h" },
        { label: "Ultimate Vacuum", value: "0.030", unit: "mbar" },
        { label: "Power Input", value: "300", unit: "W" },
      ],
      stockStatus: "hyderabad-stock",
    },
  ],

  specifications: [
    {
      groupName: "Vacuum & Pumping Dynamics",
      rows: [
        {
          parameter: "Peak Pumping Speed (50/60 Hz)",
          unit: "m³/h",
          value: "6.2 to 21.0 m³/h",
          valuesByModel: {
            nXDS6i: "6.2",
            nXDS10i: "11.1",
            nXDS15i: "15.1",
            nXDS20i: "21.0",
          },
          testCondition: "Tested at 50/60Hz nominal inverter speed",
          highlight: true,
        },
        {
          parameter: "Ultimate Vacuum (Total Pressure)",
          unit: "mbar",
          value: "0.007 to 0.030 mbar",
          valuesByModel: {
            nXDS6i: "0.020",
            nXDS10i: "0.007",
            nXDS15i: "0.007",
            nXDS20i: "0.030",
          },
          testCondition: "Gas ballast closed",
          highlight: true,
        },
        {
          parameter: "Gas Ballast Flow Rate",
          value: "0, 3, 15 L/min",
          valuesByModel: {
            nXDS6i: "0, 3, 15 L/min",
            nXDS10i: "0, 3, 15 L/min",
            nXDS15i: "0, 3, 15 L/min",
            nXDS20i: "0, 3, 15 L/min",
          },
          testCondition: "3-position selector switch",
        },
        {
          parameter: "Water Vapor Capacity (GB Position 2)",
          unit: "g/h",
          value: "70 to 240 g/h",
          valuesByModel: {
            nXDS6i: "70",
            nXDS10i: "110",
            nXDS15i: "240",
            nXDS20i: "200",
          },
          testCondition: "At 20°C ambient with Gas Ballast position 2",
        },
      ],
    },
    {
      groupName: "Physical Interfaces & Mechanical",
      rows: [
        {
          parameter: "Inlet Flange Connection",
          value: "NW25 (KF25)",
          valuesByModel: {
            nXDS6i: "NW25 (KF25)",
            nXDS10i: "NW25 (KF25)",
            nXDS15i: "NW25 (KF25)",
            nXDS20i: "NW25 (KF25)",
          },
          highlight: true,
        },
        {
          parameter: "Exhaust Flange Connection",
          value: "NW25 (KF25)",
          valuesByModel: {
            nXDS6i: "NW25 (KF25)",
            nXDS10i: "NW25 (KF25)",
            nXDS15i: "NW25 (KF25)",
            nXDS20i: "NW25 (KF25)",
          },
        },
        {
          parameter: "Pump Weight",
          unit: "kg",
          value: "25.2 to 26.2 kg",
          valuesByModel: {
            nXDS6i: "26.2",
            nXDS10i: "26.2",
            nXDS15i: "25.2",
            nXDS20i: "25.2",
          },
        },
        {
          parameter: "Dimensions (L x W x H)",
          value: "436–477 x 290 x 286 mm",
          valuesByModel: {
            nXDS6i: "436 x 290 x 286 mm",
            nXDS10i: "436 x 290 x 286 mm",
            nXDS15i: "477 x 290 x 286 mm",
            nXDS20i: "477 x 290 x 286 mm",
          },
        },
      ],
    },
    {
      groupName: "Electrical & Acoustic",
      rows: [
        {
          parameter: "Supply Voltage / Frequency",
          value: "100–240V AC, 50/60Hz",
          valuesByModel: {
            nXDS6i: "100–240V AC (±10%), 50/60Hz",
            nXDS10i: "100–240V AC (±10%), 50/60Hz",
            nXDS15i: "100–240V AC (±10%), 50/60Hz",
            nXDS20i: "100–240V AC (±10%), 50/60Hz",
          },
          testCondition: "Universal single-phase inverter input",
        },
        {
          parameter: "Noise Level @ 1 Meter",
          unit: "dB(A)",
          value: "52 dB(A)",
          valuesByModel: {
            nXDS6i: "52",
            nXDS10i: "52",
            nXDS15i: "52",
            nXDS20i: "52",
          },
          testCondition: "A-weighted sound pressure level at ultimate vacuum",
          highlight: true,
        },
        {
          parameter: "Motor Inverter Protection",
          value: "IP44 / Thermal Overload",
          valuesByModel: {
            nXDS6i: "IP44 / Thermal Overload",
            nXDS10i: "IP44 / Thermal Overload",
            nXDS15i: "IP44 / Thermal Overload",
            nXDS20i: "IP44 / Thermal Overload",
          },
        },
      ],
    },
  ],

  compatibleAccessories: [
    {
      id: "acc-tip-6-10",
      partNumber: "A73501801",
      name: "Genuine Tip Seal Replacement Kit (nXDS6i / nXDS10i)",
      category: "Maintenance Kits",
      thumbnailUrl: "/images/products/edwards/accessories/tip-seal-kit.webp",
      inStockHyderabad: true,
      stockStatus: "hyderabad-stock",
      description: "Complete replacement tip seal kit including o-rings and instructions for nXDS6i and nXDS10i pumps.",
    },
    {
      id: "acc-tip-15-20",
      partNumber: "A73601801",
      name: "Genuine Tip Seal Replacement Kit (nXDS15i / nXDS20i)",
      category: "Maintenance Kits",
      thumbnailUrl: "/images/products/edwards/accessories/tip-seal-kit.webp",
      inStockHyderabad: true,
      stockStatus: "hyderabad-stock",
      description: "Complete replacement tip seal kit for high-displacement nXDS15i and nXDS20i pumps.",
    },
    {
      id: "acc-silencer",
      partNumber: "A50597000",
      name: "NW25 Exhaust Silencer & Mist Filter",
      category: "Exhaust Accessories",
      thumbnailUrl: "/images/products/edwards/accessories/silencer.webp",
      inStockHyderabad: true,
      stockStatus: "hyderabad-stock",
      description: "Compact acoustic silencer fitting directly onto the NW25 exhaust port to eliminate gas pulsations.",
    },
    {
      id: "acc-gb-adaptor",
      partNumber: "A50599000",
      name: "Gas Ballast Purge Fitting Adaptor Kit",
      category: "Inlet & Purge Accessories",
      thumbnailUrl: "/images/products/edwards/accessories/gb-adaptor.webp",
      inStockHyderabad: true,
      stockStatus: "hyderabad-stock",
      description: "Allows inert gas (dry nitrogen) connection to gas ballast port for corrosive vapor sweeping.",
    },
  ],

  documents: [
    {
      id: "doc-nxds-datasheet",
      title: "Edwards nXDS Series Technical Datasheet",
      type: "datasheet",
      format: "pdf",
      fileSizeBytes: 2450000,
      fileUrl: "/documents/edwards-nxds-technical-datasheet.pdf",
      isGated: false,
    },
    {
      id: "doc-nxds-manual",
      title: "Edwards nXDS Instruction & Maintenance Manual",
      type: "manual",
      format: "pdf",
      fileSizeBytes: 4890000,
      fileUrl: "/documents/edwards-nxds-instruction-manual.pdf",
      isGated: false,
    },
  ],

  stockStatus: "hyderabad-stock",
  typicalLeadTimeWeeks: 1,
  inrInvoicingAvailable: true,
  warrantyPeriodMonths: 12,
  supportsPaidSampleAnalysis: false,
  scopeOfDeliveryPoints: [
    "Immediate dispatch from Hyderabad ready stock within 48 business hours",
    "Single-phase Indian 3-pin power lead and pre-installed NW25 centering ring & clamp",
    "Direct in-country INR invoicing with full 18% GST input tax credit",
    "12-month official manufacturer warranty supported by SYINCO authorized engineers",
    "Comprehensive inventory of genuine Edwards tip seal kits and service parts in Hyderabad",
  ],

  metaTitle: "Edwards nXDS Series Dry Scroll Pumps | Authorized Indian Supplier SYINCO",
  metaDescription:
    "Authorized sales and service partner in India for Edwards nXDS Series oil-free dry scroll vacuum pumps. 6 to 21 m³/h, 0.007 mbar, Hyderabad stock with INR billing.",
  searchKeywords: [
    "Edwards nXDS",
    "dry scroll pump",
    "vacuum pump India",
    "nXDS15i",
    "nXDS20i",
    "oil free vacuum",
    "turbomolecular backing pump",
  ],

  provenance: "verified",
  sourceUrl: "https://www.edwardsvacuum.com",
  officialProductName: "nXDS Series Dry Scroll Vacuum Pumps",
  technologySubcategory: "Dry Scroll Vacuum Pumps",
  assetStatus: "needs-authorization",
  resolutionStatus: "high-resolution",
  reviewRequired: false,
  authorizationStatus: "needs-authorization",
  rfqBehavior: "capital-equipment",
  keyMetricHighlights: [
    {
      label: "Peak Pumping Speed",
      value: "Up to 21.0 m³/h",
      sourceUrl: "https://edwardsvacuum.com/content/dam/edwards/downloads/dry-scroll-pumps/nxds-dry-scroll-pumps-brochure.pdf",
      sourceTableRef: "Publication 3601-0591-01, Page 4, Technical Data",
      provenance: "verified",
    },
    {
      label: "Ultimate Vacuum",
      value: "0.007 mbar",
      sourceUrl: "https://edwardsvacuum.com/content/dam/edwards/downloads/dry-scroll-pumps/nxds-dry-scroll-pumps-brochure.pdf",
      sourceTableRef: "Publication 3601-0591-01, Page 4, Technical Data",
      provenance: "verified",
    },
    {
      label: "Acoustic Noise",
      value: "52 dB(A)",
      sourceUrl: "https://edwardsvacuum.com/content/dam/edwards/downloads/dry-scroll-pumps/nxds-dry-scroll-pumps-brochure.pdf",
      sourceTableRef: "Publication 3601-0591-01, Page 4, Technical Data",
      provenance: "verified",
    },
  ],
  catalogStatus: "active",
};
