import { Product } from "@/types/product";

/**
 * FUJI ELECTRONIC INDUSTRIAL CO., LTD. — Canonical SPS Product Families
 * Source of Truth: Official FUJI-SPS Technical Documentation (fdc.co.jp/sps)
 * 
 * Strict Content Governance:
 * - Genuine OEM naming (FUJI ELECTRONIC INDUSTRIAL CO., LTD.)
 * - Zero SYINCO rebranding (no "SYINCO DR. SINTER", "SYINCO SPS", "SYINCO 25 Series")
 * - Unflattened, model-specific parameters in variants and valuesByModel
 * - Source traceability on every keyMetricHighlight record
 * - assetStatus: 'needs-authorization' until rights are confirmed
 * - Canonical Category: High-Temperature Processing & Furnaces (high-temp-furnaces)
 * - Technology / Subcategory: Spark Plasma Sintering (SPS)
 */

export const fujiSpsProducts: Product[] = [
  // --------------------------------------------------------------------------
  // 1. DR. SINTER LAB Jr. Series (MS-1, 212H)
  // --------------------------------------------------------------------------
  {
    id: "fuji-sps-dr-sinter-lab-jr",
    slug: "fuji-sps-dr-sinter-lab-jr",
    name: "DR. SINTER LAB Jr. Series Spark Plasma Sintering Systems",
    officialProductName: "DR. SINTER LAB Jr. Series",
    modelSeries: "DR. SINTER LAB Jr.",
    domain: "high-temp-furnaces",
    categorySlug: "high-temp-furnaces",
    technologySubcategory: "Spark Plasma Sintering",
    classification: "rd-laboratory",
    archetype: "scientific-instrument",
    manufacturer: {
      id: "fuji-electronic",
      name: "Fuji Electronic Industrial Co., Ltd.",
      originCountry: "Japan",
      isOfficialChannelPartner: false,
      partnerHubSlug: "fuji-electronic",
    },
    tagline: "Compact Desktop & R&D Spark Plasma Sintering Systems for Advanced Materials Synthesis",
    shortDescription: "Precision laboratory SPS systems utilizing pulsed direct current and AC servo mechanical loading for rapid consolidation of ceramics, nanostructured alloys, and functional composites.",
    fullDescriptionHtml: `<p>The <strong>DR. SINTER LAB Jr. Series</strong> by Fuji Electronic Industrial Co., Ltd. represents the international benchmark for compact, high-precision Spark Plasma Sintering (SPS) in advanced materials research. Engineered for university and corporate R&D laboratories, the LAB Jr. platform combines high-density pulsed DC Joule heating with an ultra-responsive AC servo motor pressure system, achieving full density powder consolidation in minutes while inhibiting grain growth.</p>`,
    keyFeatures: [
      "AC servo motor mechanical loading for micro-load control and ultra-low minimum pressure (0.5 kN)",
      "Pulsed DC generator deliver up to 1,000 A for millisecond-order thermal response",
      "Special sealed water-cooled electrode assembly with high-vacuum stainless steel chamber",
      "Dedicated R&D form factor optimized for standard laboratory infrastructure and glovebox integration",
    ],
    heroImage: {
      url: "/images/products/fuji-sps/dr-sinter-lab-jr-hero.webp",
      altText: "DR. SINTER LAB Jr. Series Spark Plasma Sintering System",
      width: 1024,
      height: 1306,
      role: "product-hero",
    },
    gallery: [
      {
        url: "/images/products/fuji-sps/dr-sinter-lab-jr-hero.webp",
        altText: "DR. SINTER LAB Jr. MS-1 Compact System",
        caption: "DR. SINTER LAB Jr. MS-1 front perspective view",
      },
      {
        url: "/images/products/fuji-sps/dr-sinter-lab-jr-212h.webp",
        altText: "DR. SINTER LAB Jr. 212H System",
        caption: "DR. SINTER LAB Jr. 212H laboratory console",
      },
    ],
    imageSourceUrl: "https://fdc.co.jp/sps/products/img/ms_1.png",
    assetStatus: "needs-authorization",

    specifications: [
      {
        groupName: "Sintering Press & Mechanical Specifications",
        rows: [
          {
            parameter: "Maximum Pressure",
            value: "20 kN (2,040 kgf)",
            valuesByModel: {
              "MS-1": "20 kN (2,040 kgf)",
              "212H": "20 kN (2,040 kgf)",
            },
            highlight: true,
          },
          {
            parameter: "Minimum Pressure",
            value: "0.5 kN (51 kgf)",
            valuesByModel: {
              "MS-1": "0.5 kN (51 kgf)",
              "212H": "0.5 kN (51 kgf)",
            },
          },
          {
            parameter: "Stroke",
            value: "50 mm",
            valuesByModel: {
              "MS-1": "50 mm",
              "212H": "50 mm",
            },
          },
          {
            parameter: "Open Height",
            value: "200 mm",
            valuesByModel: {
              "MS-1": "200 mm",
              "212H": "200 mm",
            },
          },
          {
            parameter: "Maximum Sintering Temperature",
            value: "2500°C",
            valuesByModel: {
              "MS-1": "2500°C",
              "212H": "2500°C",
            },
            highlight: true,
          },
          {
            parameter: "Pressure Control Mechanism",
            value: "AC Servo Motor Direct Drive",
            valuesByModel: {
              "MS-1": "AC Servo Motor",
              "212H": "AC Servo Motor",
            },
          },
        ],
      },
      {
        groupName: "Vacuum Chamber & Atmosphere",
        rows: [
          {
            parameter: "Chamber Architecture",
            value: "Water-Cooled Stainless Steel with Front Door, Vertical Cylinder",
            valuesByModel: {
              "MS-1": "Vertical Cylinder, Bore 259 mm",
              "212H": "Vertical Cylinder, Bore 200 mm",
            },
          },
          {
            parameter: "SPS Electrode Design",
            value: "Special Sealed Water-Cooled Electrode System",
          },
        ],
      },
      {
        groupName: "Sintering DC Pulse Generator",
        rows: [
          {
            parameter: "Input Rating",
            value: "AC 200V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "Maximum Pulse Current Output",
            value: "1,000 A",
            valuesByModel: {
              "MS-1": "1,000 A",
              "212H": "1,000 A",
            },
            highlight: true,
          },
          {
            parameter: "Pulse Control Timing",
            value: "ON: 1 to 999 ms / OFF: 1 to 99 ms",
          },
        ],
      },
    ],

    variants: [
      {
        modelNumber: "MS-1",
        description: "New Model compact R&D SPS system with extended 259 mm chamber bore and integrated AC servo motor pressure system.",
        keySpecs: {
          "Max Pressure": "20 kN (2,040 kgf)",
          "Min Pressure": "0.5 kN (51 kgf)",
          "Max Temp": "2500°C",
          "Pulse Output": "1,000 A",
          "Chamber Bore": "259 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "212H",
        description: "Standard laboratory DR. SINTER LAB Jr. system with 200 mm chamber bore for high-throughput sample synthesis.",
        keySpecs: {
          "Max Pressure": "20 kN (2,040 kgf)",
          "Min Pressure": "0.5 kN (51 kgf)",
          "Max Temp": "2500°C",
          "Pulse Output": "1,000 A",
          "Chamber Bore": "200 mm",
        },
        stockStatus: "import-on-demand",
      },
    ],

    keyMetricHighlights: [
      {
        label: "Max. Pressure",
        value: "20 kN (2,040 kgf)",
        sourceUrl: "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
        sourceTableRef: "Table 0, Sintering Machine - Max. Pressure",
        provenance: "verified",
      },
      {
        label: "Max. Sintering Temp.",
        value: "2500°C",
        sourceUrl: "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
        sourceTableRef: "Table 0, Max. Sintering Temp.",
        provenance: "verified",
      },
      {
        label: "Max. DC Pulse Output",
        value: "1,000 A",
        sourceUrl: "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
        sourceTableRef: "Table 0, Sintering DC Pulse Generator - Max. Output",
        provenance: "verified",
      },
    ],

    targetIndustries: [
      "Advanced Ceramics",
      "Thermoelectric Materials",
      "Hard Metals & Cermets",
      "Solid-State Battery Electrolytes",
      "Nanostructured Materials",
    ],
    targetApplications: [
      "Rapid Powder Consolidation",
      "Nanograin Retention Sintering",
      "Diffusion Bonding",
      "Target Fabrication",
    ],
    documents: [],
    stockStatus: "import-on-demand",
    inrInvoicingAvailable: true,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: false,
    scopeOfDeliveryPoints: [
      "Main SPS furnace body with vacuum chamber",
      "AC servo press system and precision load cell",
      "DC pulsed current power supply cabinet",
      "Special sealed water-cooled electrode assembly",
      "Digital process programmer with safety interlocks",
    ],
    metaTitle: "DR. SINTER LAB Jr. Series | Fuji Electronic SPS | SYINCO",
    metaDescription: "Compact R&D Spark Plasma Sintering systems by Fuji Electronic Industrial Co., Ltd. Models MS-1 and 212H with 20 kN pressing force and 2500°C capability.",
    searchKeywords: [
      "DR. SINTER",
      "DR. SINTER LAB Jr.",
      "MS-1",
      "212H",
      "Fuji Electronic",
      "FUJI-SPS",
      "Spark Plasma Sintering",
      "SPS furnace",
    ],
    provenance: "verified",
    sourceUrl: "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
    oemSourceUrl: "https://fdc.co.jp/sps/products/ms_1/e_ms_1.html",
    oemTechnologyTags: ["Spark Plasma Sintering", "SPS", "Field Assisted Sintering Technology", "AC Servo Press", "Pulse Sintering"],
    rfqBehavior: "capital-equipment",
    catalogStatus: "active",
  },

  // --------------------------------------------------------------------------
  // 2. 25 Series (615, 625, 725, 825, 925)
  // --------------------------------------------------------------------------
  {
    id: "fuji-sps-25-series",
    slug: "fuji-sps-25-series",
    name: "25 Series Pilot & Industrial Spark Plasma Sintering Systems",
    officialProductName: "25 Series",
    modelSeries: "25 Series",
    domain: "high-temp-furnaces",
    categorySlug: "high-temp-furnaces",
    technologySubcategory: "Spark Plasma Sintering",
    classification: "pilot-production",
    archetype: "scientific-instrument",
    manufacturer: {
      id: "fuji-electronic",
      name: "Fuji Electronic Industrial Co., Ltd.",
      originCountry: "Japan",
      isOfficialChannelPartner: false,
      partnerHubSlug: "fuji-electronic",
    },
    tagline: "High-Capacity Sintering Systems for Pilot Scaling and Medium-Scale Component Production",
    shortDescription: "Versatile industrial Spark Plasma Sintering platforms featuring up to 250 kN hydraulic pressure and 10,000 A DC pulse output for high-density components up to 150 mm diameter.",
    fullDescriptionHtml: `<p>The <strong>25 Series</strong> from Fuji Electronic Industrial Co., Ltd. bridges high-level academic research and industrial manufacturing. Equipped with hydraulic proportional control offering 100 kN to 250 kN pressing force and current ratings from 3,000 A to 10,000 A, the 25 Series enables production of dense ceramic sputtering targets, functionally graded materials (FGMs), and refractory alloy compacts with extreme dimensional consistency.</p>`,
    keyFeatures: [
      "Hydraulic control system with proportional relief valve for stable multi-step pressing profiles",
      "High-output DC pulse generators spanning 3,000 A to 10,000 A for large-cross-section billets",
      "450 mm diameter bore vacuum chamber supporting both front-door and upper/lower split architectures",
      "High-precision digital displacement sensing with automatic shrinkage rate monitoring",
    ],
    heroImage: {
      url: "/images/products/fuji-sps/25-series-hero.webp",
      altText: "25 Series Spark Plasma Sintering System",
      width: 1024,
      height: 780,
      role: "product-hero",
    },
    gallery: [
      {
        url: "/images/products/fuji-sps/25-series-hero.webp",
        altText: "25 Series SPS Production Unit",
        caption: "Fuji 25 Series industrial console and chamber",
      },
    ],
    imageSourceUrl: "https://fdc.co.jp/sps/products/img/model25.png",
    assetStatus: "needs-authorization",

    specifications: [
      {
        groupName: "Sintering Machine & Hydraulic Press",
        rows: [
          {
            parameter: "Maximum Pressure",
            value: "100 kN to 250 kN (10.2 tf to 25.5 tf)",
            valuesByModel: {
              "615": "100 kN (10,200 kgf)",
              "625": "250 kN (25,500 kgf)",
              "725": "250 kN (25,500 kgf)",
              "825": "250 kN (25,500 kgf)",
              "925": "250 kN (25,500 kgf)",
            },
            highlight: true,
          },
          {
            parameter: "Minimum Pressure",
            value: "2 kN to 5 kN (204 kgf to 510 kgf)",
            valuesByModel: {
              "615": "5 kN / 2 kN (option)",
              "625": "5 kN / 2 kN (option)",
              "725": "5 kN / 2 kN (option)",
              "825": "5 kN / 2 kN (option)",
              "925": "5 kN / 2 kN (option)",
            },
          },
          {
            parameter: "Stroke",
            value: "150 mm",
            valuesByModel: {
              "615": "150 mm",
              "625": "150 mm",
              "725": "150 mm",
              "825": "150 mm",
              "925": "150 mm",
            },
          },
          {
            parameter: "Open Height",
            value: "250 mm",
            valuesByModel: {
              "615": "250 mm",
              "625": "250 mm",
              "725": "250 mm",
              "825": "250 mm",
              "925": "250 mm",
            },
          },
          {
            parameter: "Maximum Sintering Temperature",
            value: "2500°C",
            valuesByModel: {
              "615": "2500°C",
              "625": "2500°C",
              "725": "2500°C",
              "825": "2500°C",
              "925": "2500°C",
            },
            highlight: true,
          },
          {
            parameter: "Pressure Control Mechanism",
            value: "Hydraulic Control System with Proportional Relief Valve",
          },
        ],
      },
      {
        groupName: "Vacuum Chamber & Electrodes",
        rows: [
          {
            parameter: "Chamber Architecture",
            value: "Stainless Steel Vertical Cylinder with Front Door or Split Chamber (Bore 450 mm)",
          },
          {
            parameter: "SPS Electrode Design",
            value: "Special Sealed Water-Cooled Electrode System",
          },
        ],
      },
      {
        groupName: "Sintering DC Pulse Generator",
        rows: [
          {
            parameter: "Input Rating",
            value: "AC 200/220/400/440V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "Maximum Pulse Output Current",
            value: "3,000 A to 10,000 A",
            valuesByModel: {
              "615": "3,000 A",
              "625": "5,000 A",
              "725": "5,000 A",
              "825": "8,000 A",
              "925": "10,000 A",
            },
            highlight: true,
          },
          {
            parameter: "Pulse Control Timing",
            value: "ON: 1 to 99 digit / OFF: 1 to 9 digit",
          },
        ],
      },
    ],

    variants: [
      {
        modelNumber: "615",
        description: "100 kN press capacity with 3,000 A DC pulse generator for pilot laboratory operations.",
        keySpecs: {
          "Max Pressure": "100 kN (10,200 kgf)",
          "Max Temp": "2500°C",
          "Max Pulse Output": "3,000 A",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "625",
        description: "250 kN press capacity with 5,000 A DC pulse generator for dense refractory consolidation.",
        keySpecs: {
          "Max Pressure": "250 kN (25,500 kgf)",
          "Max Temp": "2500°C",
          "Max Pulse Output": "5,000 A",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "725",
        description: "250 kN press capacity with 5,000 A DC pulse generator with enhanced tooling envelope.",
        keySpecs: {
          "Max Pressure": "250 kN (25,500 kgf)",
          "Max Temp": "2500°C",
          "Max Pulse Output": "5,000 A",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "825",
        description: "250 kN press capacity paired with 8,000 A pulse power supply for large billet consolidation.",
        keySpecs: {
          "Max Pressure": "250 kN (25,500 kgf)",
          "Max Temp": "2500°C",
          "Max Pulse Output": "8,000 A",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "925",
        description: "250 kN press capacity with heavy-duty 10,000 A pulse generator for high-conductivity large components.",
        keySpecs: {
          "Max Pressure": "250 kN (25,500 kgf)",
          "Max Temp": "2500°C",
          "Max Pulse Output": "10,000 A",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
    ],

    keyMetricHighlights: [
      {
        label: "Max. Pressure",
        value: "100 kN to 250 kN",
        sourceUrl: "https://fdc.co.jp/sps/products/25series/e_25series.html",
        sourceTableRef: "Table 0, Sintering Machine - Max. Pressure",
        provenance: "verified",
      },
      {
        label: "Max. Sintering Temp.",
        value: "2500°C",
        sourceUrl: "https://fdc.co.jp/sps/products/25series/e_25series.html",
        sourceTableRef: "Table 0, Max. Sintering Temp",
        provenance: "verified",
      },
      {
        label: "Pulse Current Range",
        value: "3,000 A to 10,000 A",
        sourceUrl: "https://fdc.co.jp/sps/products/25series/e_25series.html",
        sourceTableRef: "Table 0, Sintering DC Pulse Generator - Max. Output",
        provenance: "verified",
      },
    ],

    targetIndustries: [
      "Sputtering Target Production",
      "Hard Materials & Tooling",
      "Wear-Resistant Coatings & Dies",
      "High-Temperature Structural Ceramics",
      "Aerospace Superalloys",
    ],
    targetApplications: [
      "Large-Diameter Disc Sintering",
      "Cladding & Diffusion Bonding",
      "Graded Functional Structures",
      "Diamond Composite Tooling",
    ],
    documents: [],
    stockStatus: "import-on-demand",
    inrInvoicingAvailable: true,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: false,
    scopeOfDeliveryPoints: [
      "Industrial rigid H-frame press structure",
      "Proportional hydraulic power unit with multi-step ramp valve",
      "Water-cooled vacuum chamber with front door / split access",
      "High-amperage low-voltage DC pulse transformer power supply",
      "Computerized data acquisition and sintering cycle controller",
    ],
    metaTitle: "25 Series Spark Plasma Sintering Systems | Fuji Electronic | SYINCO",
    metaDescription: "Fuji Electronic Industrial 25 Series SPS platforms. Models 615, 625, 725, 825, and 925 featuring 100 kN to 250 kN press force and up to 10,000 A DC pulse current.",
    searchKeywords: [
      "25 Series",
      "615",
      "625",
      "725",
      "825",
      "925",
      "Fuji Electronic",
      "FUJI-SPS",
      "Pilot SPS",
      "Industrial Spark Plasma Sintering",
    ],
    provenance: "verified",
    sourceUrl: "https://fdc.co.jp/sps/products/25series/e_25series.html",
    oemSourceUrl: "https://fdc.co.jp/sps/products/25series/e_25series.html",
    oemTechnologyTags: ["Spark Plasma Sintering", "SPS", "Hydraulic Sintering Press", "Direct Resistance Sintering", "Pilot Production"],
    rfqBehavior: "capital-equipment",
    catalogStatus: "active",
  },

  // --------------------------------------------------------------------------
  // 3. Standard System for Research and Production (3.20, 5.40, 7.40, 8.40, 9.40, 10.40)
  // --------------------------------------------------------------------------
  {
    id: "fuji-sps-standard-research-production",
    slug: "fuji-sps-standard-research-production",
    name: "Standard System for Research and Production SPS Systems",
    officialProductName: "Standard System for Research and Production",
    modelSeries: "Standard Research & Production",
    domain: "high-temp-furnaces",
    categorySlug: "high-temp-furnaces",
    technologySubcategory: "Spark Plasma Sintering",
    classification: "industrial-automated",
    archetype: "scientific-instrument",
    manufacturer: {
      id: "fuji-electronic",
      name: "Fuji Electronic Industrial Co., Ltd.",
      originCountry: "Japan",
      isOfficialChannelPartner: false,
      partnerHubSlug: "fuji-electronic",
    },
    tagline: "Heavy-Duty Production Sintering Presses from 200 kN up to 6,000 kN Force",
    shortDescription: "Ultra-heavy capacity Spark Plasma Sintering machines engineered for large-scale industrial manufacturing, with press forces up to 600 metric tons and DC pulse generators to 45,000 A.",
    fullDescriptionHtml: `<p>The <strong>Standard System for Research and Production</strong> series represents Fuji Electronic's premier industrial-scale SPS technology. Engineered for demanding industrial environments, this series spans pressing capacities from 200 kN (20 tf) up to an extraordinary 6,000 kN (600 tf) and pulse outputs exceeding 40,000 A. It enables simultaneous sintering of large-diameter billets (up to 300 mm+) with superior microstructural uniformity and near-theoretical densities.</p>`,
    keyFeatures: [
      "Massive structural frames with press force capacities up to 6,000 kN (612 metric tons)",
      "Upper and lower split water-cooled vacuum chambers for rapid tooling load/unload cycles",
      "Modular pulse power delivery from 3,000 A up to 45,000 A for mega-scale billets",
      "Hydraulic proportional control with hydraulic stroke lengths from 250 mm to 350 mm",
    ],
    heroImage: {
      url: "/images/products/fuji-sps/standard-research-production-hero.webp",
      altText: "Standard System for Research and Production SPS",
      width: 1024,
      height: 848,
      role: "product-hero",
    },
    gallery: [
      {
        url: "/images/products/fuji-sps/standard-research-production-hero.webp",
        altText: "Standard Production SPS Facility",
        caption: "Fuji high-tonnage production SPS unit",
      },
    ],
    imageSourceUrl: "https://fdc.co.jp/sps/products/img/lab_production.png",
    assetStatus: "needs-authorization",

    specifications: [
      {
        groupName: "Press Mechanical Envelope",
        rows: [
          {
            parameter: "Maximum Pressure",
            value: "200 kN to 6,000 kN (20.4 tf to 612 tf)",
            valuesByModel: {
              "3.20": "200 kN (20,400 kgf)",
              "5.40": "500 kN (51,000 kgf)",
              "7.40": "1,000 kN (102,000 kgf)",
              "8.40": "2,000 kN (204,000 kgf)",
              "9.40": "3,000 kN (306,000 kgf)",
              "10.40": "6,000 kN (612,000 kgf)",
            },
            highlight: true,
          },
          {
            parameter: "Minimum Pressure",
            value: "2 kN to 30 kN",
            valuesByModel: {
              "3.20": "10 kN / 5 kN / 2 kN",
              "5.40": "30 kN / 10 kN",
              "7.40": "30 kN / 10 kN",
              "8.40": "30 kN / 10 kN",
              "9.40": "30 kN / 10 kN",
              "10.40": "30 kN / 10 kN",
            },
          },
          {
            parameter: "Stroke",
            value: "250 mm to 350 mm",
            valuesByModel: {
              "3.20": "250 mm",
              "5.40": "250 mm",
              "7.40": "300 mm",
              "8.40": "300 mm",
              "9.40": "350 mm",
              "10.40": "350 mm",
            },
          },
          {
            parameter: "Open Height",
            value: "300 mm to 600 mm",
            valuesByModel: {
              "3.20": "300 mm",
              "5.40": "400 mm",
              "7.40": "400 mm",
              "8.40": "600 mm",
              "9.40": "600 mm",
              "10.40": "600 mm",
            },
          },
          {
            parameter: "Maximum Sintering Temperature",
            value: "2500°C",
            highlight: true,
          },
        ],
      },
      {
        groupName: "Vacuum Chamber Architecture",
        rows: [
          {
            parameter: "Chamber Style",
            value: "Upper and Lower Split Water-Cooled Vacuum Chamber",
          },
          {
            parameter: "Electrode Assembly",
            value: "Special Sealed Water-Cooled High-Current Electrode System",
          },
        ],
      },
      {
        groupName: "DC Pulse Power Supply",
        rows: [
          {
            parameter: "Input Rating",
            value: "AC 200/220/380/400/440V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "Maximum Current Output",
            value: "3,000 A up to 45,000 A",
            highlight: true,
          },
          {
            parameter: "Pulse Control",
            value: "ON: 1 to 99 digit / OFF: 1 to 9 digit",
          },
        ],
      },
    ],

    variants: [
      {
        modelNumber: "3.20",
        description: "200 kN hydraulic press with 250 mm stroke and 300 mm open height for pilot manufacturing.",
        keySpecs: {
          "Max Pressure": "200 kN (20,400 kgf)",
          "Stroke": "250 mm",
          "Open Height": "300 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "5.40",
        description: "500 kN hydraulic press with 250 mm stroke and 400 mm open height.",
        keySpecs: {
          "Max Pressure": "500 kN (51,000 kgf)",
          "Stroke": "250 mm",
          "Open Height": "400 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "7.40",
        description: "1,000 kN (100 tf) industrial press with 300 mm stroke and 400 mm open height.",
        keySpecs: {
          "Max Pressure": "1,000 kN (102,000 kgf)",
          "Stroke": "300 mm",
          "Open Height": "400 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "8.40",
        description: "2,000 kN (200 tf) heavy-tonnage production system with 300 mm stroke and 600 mm open height.",
        keySpecs: {
          "Max Pressure": "2,000 kN (204,000 kgf)",
          "Stroke": "300 mm",
          "Open Height": "600 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "9.40",
        description: "3,000 kN (300 tf) production press with 350 mm stroke and 600 mm open height.",
        keySpecs: {
          "Max Pressure": "3,000 kN (306,000 kgf)",
          "Stroke": "350 mm",
          "Open Height": "600 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "10.40",
        description: "6,000 kN (600 tf) ultra-heavy manufacturing press with 350 mm stroke and 600 mm open height.",
        keySpecs: {
          "Max Pressure": "6,000 kN (612,000 kgf)",
          "Stroke": "350 mm",
          "Open Height": "600 mm",
          "Max Temp": "2500°C",
        },
        stockStatus: "import-on-demand",
      },
    ],

    keyMetricHighlights: [
      {
        label: "Press Capacity Range",
        value: "200 kN to 6,000 kN (600 tf)",
        sourceUrl: "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
        sourceTableRef: "Table 0, Sintering Machine - Max. Pressure",
        provenance: "verified",
      },
      {
        label: "Max. Sintering Temp.",
        value: "2500°C",
        sourceUrl: "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
        sourceTableRef: "Table 0, Max. Sintering Temp.",
        provenance: "verified",
      },
      {
        label: "DC Pulse Current",
        value: "3,000 A to 45,000 A",
        sourceUrl: "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
        sourceTableRef: "Table 0, Sintering DC Pulse Generator - Max. Output",
        provenance: "verified",
      },
    ],

    targetIndustries: [
      "Large Target Manufacturing",
      "Armor Ceramics (SiC, B4C)",
      "Refractory Metal Billets",
      "Nuclear Fuel Simulants & Pellets",
      "Heavy Industrial Tooling",
    ],
    targetApplications: [
      "Large-Cross-Section Direct Sintering",
      "Bulk Material Synthesis",
      "Multi-Layer Composite Production",
    ],
    documents: [],
    stockStatus: "import-on-demand",
    inrInvoicingAvailable: true,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: false,
    scopeOfDeliveryPoints: [
      "Heavy structural press frame (up to 6,000 kN)",
      "Hydraulic pump station with proportional valve control",
      "Upper and lower split water-cooled vacuum chamber assembly",
      "Multi-transformer high-current DC pulsed power supply",
      "Industrial programmable logic controller (PLC) with supervisory control",
    ],
    metaTitle: "Standard Production SPS Systems | Fuji Electronic | SYINCO",
    metaDescription: "Fuji Electronic Standard System for Research and Production SPS presses. Capacities from 200 kN to 6,000 kN (models 3.20, 5.40, 7.40, 8.40, 9.40, 10.40).",
    searchKeywords: [
      "Standard System for Research and Production",
      "3.20",
      "5.40",
      "7.40",
      "8.40",
      "9.40",
      "10.40",
      "Heavy Production SPS",
      "6000kN SPS",
      "Fuji Electronic",
    ],
    provenance: "verified",
    sourceUrl: "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
    oemSourceUrl: "https://fdc.co.jp/sps/products/seisannyou/e_seisannyou.html",
    oemTechnologyTags: ["Spark Plasma Sintering", "SPS", "High Tonnage Press", "Production Sintering", "FAST"],
    rfqBehavior: "capital-equipment",
    catalogStatus: "active",
  },

  // --------------------------------------------------------------------------
  // 4. Automatic SPS System (Unspecified Model / Continuous Production)
  // --------------------------------------------------------------------------
  {
    id: "fuji-sps-automatic",
    slug: "fuji-sps-automatic",
    name: "Automatic SPS System for Production Lines",
    officialProductName: "Automatic SPS System",
    modelSeries: "Automatic SPS",
    domain: "high-temp-furnaces",
    categorySlug: "high-temp-furnaces",
    technologySubcategory: "Spark Plasma Sintering",
    classification: "industrial-automated",
    archetype: "scientific-instrument",
    manufacturer: {
      id: "fuji-electronic",
      name: "Fuji Electronic Industrial Co., Ltd.",
      originCountry: "Japan",
      isOfficialChannelPartner: false,
      partnerHubSlug: "fuji-electronic",
    },
    tagline: "Automated SPS Production Line Architecture for Unattended Sintering Operations",
    shortDescription: "Continuous and automated Spark Plasma Sintering production facility featuring 500 kN hydraulic clamping, automated die handling, and integrated cooling chambers for high-throughput manufacturing.",
    fullDescriptionHtml: `<p>The <strong>Automatic SPS System</strong> by Fuji Electronic Industrial Co., Ltd. is engineered specifically for fully automated manufacturing lines. Featuring a 500 kN hydraulic press, automatic workpiece transfer robotics, multi-station heating/cooling management, and up to 15,000 A pulse current, this system delivers continuous, high-repeatability sintering for industrial components without manual operator intervention.</p>`,
    keyFeatures: [
      "Automated workpiece transfer and continuous die sequencing for high-volume manufacturing",
      "500 kN (51,000 kgf) hydraulic clamping with proportional relief valve control",
      "Pulsed DC generator delivering 5,000 A to 15,000 A with high thermal ramp efficiency",
      "Water-cooled stainless steel vacuum chamber with multi-stage gas evacuation and inert backfill",
    ],
    heroImage: {
      url: "/images/products/fuji-sps/automatic-sps-hero.webp",
      altText: "Automatic SPS System for Production Lines",
      width: 1024,
      height: 974,
      role: "product-hero",
    },
    gallery: [
      {
        url: "/images/products/fuji-sps/automatic-sps-hero.webp",
        altText: "Automatic SPS System Facility",
        caption: "Fuji automated production line configuration",
      },
    ],
    imageSourceUrl: "https://fdc.co.jp/sps/products/img/automation.png",
    assetStatus: "needs-authorization",

    specifications: [
      {
        groupName: "Automated Press Mechanical Envelope",
        rows: [
          {
            parameter: "Maximum Pressure",
            value: "500 kN (51,000 kgf)",
            highlight: true,
          },
          {
            parameter: "Minimum Pressure",
            value: "10 kN (1,020 kgf)",
          },
          {
            parameter: "Stroke",
            value: "150 mm",
          },
          {
            parameter: "Open Height",
            value: "450 mm",
          },
          {
            parameter: "Maximum Temperature",
            value: "2500°C (Continuous Working: 2200°C)",
            highlight: true,
          },
          {
            parameter: "Pressure System",
            value: "Hydraulic Control System with a Proportional Relief Valve",
          },
        ],
      },
      {
        groupName: "Chamber & Electrode Specifications",
        rows: [
          {
            parameter: "Chamber Construction",
            value: "Water-Cooled Stainless Steel Chamber with Automated Porting",
          },
          {
            parameter: "SPS Electrode",
            value: "Special Sealed Water-Cooled System",
          },
        ],
      },
      {
        groupName: "Pulse Generator Specifications",
        rows: [
          {
            parameter: "Maximum Output Current",
            value: "5,000 A to 15,000 A",
            highlight: true,
          },
          {
            parameter: "Input Rating",
            value: "AC 200/220/380/400/440V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "Pulse Control",
            value: "ON: 1 to 999 ms / OFF: 1 to 99 ms",
          },
        ],
      },
    ],

    // No invented model name per strict requirement
    variants: [],

    keyMetricHighlights: [
      {
        label: "Max. Pressure",
        value: "500 kN (51,000 kgf)",
        sourceUrl: "https://fdc.co.jp/sps/products/auto/e_auto.html",
        sourceTableRef: "Table 0, Sintering Machine - Pressure Max.",
        provenance: "verified",
      },
      {
        label: "Max. Temperature",
        value: "2500°C (working 2200°C)",
        sourceUrl: "https://fdc.co.jp/sps/products/auto/e_auto.html",
        sourceTableRef: "Table 0, Max. Temp.",
        provenance: "verified",
      },
      {
        label: "DC Output Current",
        value: "5,000 A to 15,000 A",
        sourceUrl: "https://fdc.co.jp/sps/products/auto/e_auto.html",
        sourceTableRef: "Table 0, Sintering DC Pulse Generator - Max. Output Current",
        provenance: "verified",
      },
    ],

    targetIndustries: [
      "Automotive Powder Metallurgy",
      "Commercial Sintered Magnets",
      "Precision Ceramic Component Manufacturing",
      "Consumer Electronics Hard Components",
    ],
    targetApplications: [
      "Continuous High-Volume Spark Plasma Sintering",
      "Automated Powder Consolidation Lines",
    ],
    documents: [],
    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: false,
    scopeOfDeliveryPoints: [
      "Automated sintering press module (500 kN)",
      "Automated robotic transfer mechanism",
      "Continuous DC pulse generator (up to 15,000 A)",
      "Automated vacuum and gas regulation station",
      "Factory integration PLC cabinet with MES interface",
    ],
    metaTitle: "Automatic SPS System | Fuji Electronic | SYINCO",
    metaDescription: "Fuji Electronic Automated Spark Plasma Sintering System for mass production lines. 500 kN pressure and 5,000A to 15,000A pulse power.",
    searchKeywords: [
      "Automatic SPS System",
      "Automated SPS",
      "Fuji Electronic",
      "FUJI-SPS",
      "Production Line SPS",
      "Continuous Sintering",
    ],
    provenance: "verified",
    sourceUrl: "https://fdc.co.jp/sps/products/auto/e_auto.html",
    oemSourceUrl: "https://fdc.co.jp/sps/products/auto/e_auto.html",
    oemTechnologyTags: ["Spark Plasma Sintering", "SPS", "Automated Sintering", "Robotic Line", "High Throughput"],
    rfqBehavior: "custom-engineered",
    catalogStatus: "active",
  },

  // --------------------------------------------------------------------------
  // 5. Multi Process SPS System (MPSL) (212HF, 322HF, 632HF, 625HF)
  // --------------------------------------------------------------------------
  {
    id: "fuji-sps-mpsl",
    slug: "fuji-sps-mpsl",
    name: "Multi Process SPS System (MPSL) with RF Induction Heating",
    officialProductName: "Multi Process SPS System (MPSL)",
    modelSeries: "MPSL",
    domain: "high-temp-furnaces",
    categorySlug: "high-temp-furnaces",
    technologySubcategory: "Spark Plasma Sintering",
    classification: "pilot-production",
    archetype: "scientific-instrument",
    manufacturer: {
      id: "fuji-electronic",
      name: "Fuji Electronic Industrial Co., Ltd.",
      originCountry: "Japan",
      isOfficialChannelPartner: false,
      partnerHubSlug: "fuji-electronic",
    },
    tagline: "Hybrid Sintering Combining DC Spark Plasma Sintering and High-Frequency Radio Induction",
    shortDescription: "Advanced dual-energy sintering system integrating pulsed direct current with a 4.5 kW radio frequency induction generator for complex composite processing and non-conductive materials.",
    fullDescriptionHtml: `<p>The <strong>Multi Process SPS System (MPSL)</strong> by Fuji Electronic Industrial Co., Ltd. is a cutting-edge hybrid sintering platform combining pulsed direct current (DC) Joule heating with radio frequency (RF) induction heating. This synergistic dual-source heating architecture resolves temperature gradients in large-diameter dies, facilitates uniform densification of insulating and non-conductive ceramics, and unlocks unique synthesis routes for complex composite architectures.</p>`,
    keyFeatures: [
      "Dual hybrid heating mode: simultaneous or sequential pulsed DC and 4.5 kW RF induction heating",
      "Supports press capacities from 20 kN (AC servo motor) to 100 kN (hydraulic proportional valve)",
      "Integrated dual-frequency RF generator (100 kHz / 200 kHz) for selective die/sample heating",
      "Eliminates radial thermal gradients across large-diameter ceramic compacts",
    ],
    heroImage: {
      url: "/images/products/fuji-sps/mpsl-hero.webp",
      altText: "Multi Process SPS System MPSL",
      width: 1024,
      height: 739,
      role: "product-hero",
    },
    gallery: [
      {
        url: "/images/products/fuji-sps/mpsl-hero.webp",
        altText: "Multi Process SPS System Unit",
        caption: "MPSL dual-source heating console",
      },
      {
        url: "/images/products/fuji-sps/mpsl-hf.webp",
        altText: "Radio Frequency Heating Coil Detail",
        caption: "Integrated high-frequency induction coil assembly",
      },
    ],
    imageSourceUrl: "https://fdc.co.jp/sps/products/img/mpsl.png",
    assetStatus: "needs-authorization",

    specifications: [
      {
        groupName: "Press Mechanical Envelope",
        rows: [
          {
            parameter: "Maximum Pressure",
            value: "20 kN to 100 kN (2,040 kgf to 10,200 kgf)",
            valuesByModel: {
              "212HF": "20 kN (2,040 kgf)",
              "322HF": "30 kN (3,060 kgf)",
              "632HF": "60 kN (6,120 kgf)",
              "625HF": "100 kN (10,200 kgf)",
            },
            highlight: true,
          },
          {
            parameter: "Minimum Pressure",
            value: "0.5 kN to 10 kN",
            valuesByModel: {
              "212HF": "0.5 kN (51 kgf)",
              "322HF": "0.5 kN (51 kgf)",
              "632HF": "0.5 kN (51 kgf)",
              "625HF": "10 kN (1,020 kgf)",
            },
          },
          {
            parameter: "Stroke",
            value: "50 mm to 150 mm",
            valuesByModel: {
              "212HF": "50 mm",
              "322HF": "50 mm",
              "632HF": "150 mm",
              "625HF": "150 mm",
            },
          },
          {
            parameter: "Open Height",
            value: "200 mm to 250 mm",
            valuesByModel: {
              "212HF": "200 mm",
              "322HF": "200 mm",
              "632HF": "200 mm",
              "625HF": "250 mm",
            },
          },
          {
            parameter: "Maximum Sintering Temperature",
            value: "2500°C (Continuous Working: 2200°C)",
            highlight: true,
          },
          {
            parameter: "Pressure Drive System",
            value: "AC Servo Motor (212HF/322HF/632HF) / Hydraulic Control with Proportional Valve (625HF)",
            valuesByModel: {
              "212HF": "AC Servo Motor",
              "322HF": "AC Servo Motor",
              "632HF": "AC Servo Motor",
              "625HF": "Hydraulic Control",
            },
          },
        ],
      },
      {
        groupName: "Radio Frequency (RF) Induction System",
        rows: [
          {
            parameter: "RF Generator Input Rating",
            value: "AC 200V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "RF Maximum Output Power",
            value: "4.5 kW",
            highlight: true,
          },
          {
            parameter: "RF Oscillation Frequency",
            value: "100 kHz / 200 kHz (Selectable)",
          },
        ],
      },
      {
        groupName: "DC Pulse Power Supply",
        rows: [
          {
            parameter: "Input Rating",
            value: "AC 200V / 220V / 400V / 440V, 3-Phase, 50/60 Hz",
          },
          {
            parameter: "Maximum DC Current Output",
            value: "1,000 A to 5,000 A",
            valuesByModel: {
              "212HF": "1,000 A",
              "322HF": "2,000 A",
              "632HF": "3,000 A",
              "625HF": "5,000 A",
            },
            highlight: true,
          },
          {
            parameter: "Pulse Control",
            value: "ON: 1 to 999 ms / OFF: 1 to 99 ms (or 1-99 digit)",
          },
        ],
      },
    ],

    variants: [
      {
        modelNumber: "212HF",
        description: "20 kN AC servo motor drive with 1,000 A DC pulse output and 4.5 kW RF induction generator.",
        keySpecs: {
          "Max Pressure": "20 kN (2,040 kgf)",
          "Drive": "AC Servo Motor",
          "DC Pulse Current": "1,000 A",
          "RF Power": "4.5 kW (100/200 kHz)",
          "Chamber Bore": "200 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "322HF",
        description: "30 kN AC servo motor drive with 2,000 A DC pulse output and 4.5 kW RF induction generator.",
        keySpecs: {
          "Max Pressure": "30 kN (3,060 kgf)",
          "Drive": "AC Servo Motor",
          "DC Pulse Current": "2,000 A",
          "RF Power": "4.5 kW (100/200 kHz)",
          "Chamber Bore": "200 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "632HF",
        description: "60 kN AC servo motor drive with 3,000 A DC pulse output, extended 150 mm stroke, and 4.5 kW RF induction generator.",
        keySpecs: {
          "Max Pressure": "60 kN (6,120 kgf)",
          "Drive": "AC Servo Motor",
          "DC Pulse Current": "3,000 A",
          "RF Power": "4.5 kW (100/200 kHz)",
          "Chamber Bore": "200 mm",
        },
        stockStatus: "import-on-demand",
      },
      {
        modelNumber: "625HF",
        description: "100 kN hydraulic drive with 5,000 A DC pulse output, 450 mm chamber bore, and 4.5 kW RF induction generator.",
        keySpecs: {
          "Max Pressure": "100 kN (10,200 kgf)",
          "Drive": "Hydraulic Proportional",
          "DC Pulse Current": "5,000 A",
          "RF Power": "4.5 kW (100/200 kHz)",
          "Chamber Bore": "450 mm",
        },
        stockStatus: "import-on-demand",
      },
    ],

    keyMetricHighlights: [
      {
        label: "Hybrid Heating",
        value: "SPS + 4.5 kW RF Induction",
        sourceUrl: "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
        sourceTableRef: "Table 0, Radio Frequency Generator - Max. Output",
        provenance: "verified",
      },
      {
        label: "Max. Pressure Range",
        value: "20 kN to 100 kN",
        sourceUrl: "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
        sourceTableRef: "Table 0, Sintering Machine - Max. Pressure",
        provenance: "verified",
      },
      {
        label: "Max. Temperature",
        value: "2500°C (working 2200°C)",
        sourceUrl: "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
        sourceTableRef: "Table 0, Max. Sintering Temp.",
        provenance: "verified",
      },
    ],

    targetIndustries: [
      "Insulating & Non-Conductive Ceramics",
      "Metal-Matrix & Ceramic-Matrix Composites",
      "Functionally Graded Materials (FGM)",
      "Bio-Ceramics & Hydroxyapatite Implants",
    ],
    targetApplications: [
      "Thermal-Gradient Controlled Sintering",
      "Selective Microstructural Synthesis",
      "Hybrid Induction / Pulse Consolidation",
    ],
    documents: [],
    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: false,
    scopeOfDeliveryPoints: [
      "Main multi-process sintering furnace body",
      "Servo or hydraulic pressure subsystem",
      "DC pulsed current generator cabinet",
      "High-frequency radio induction generator (4.5 kW)",
      "High-vacuum pumping station with multi-gas management",
    ],
    metaTitle: "MPSL Multi Process SPS System | Fuji Electronic | SYINCO",
    metaDescription: "Fuji Electronic Multi Process SPS System (MPSL). Combines DC Spark Plasma Sintering with 4.5 kW RF induction heating. Models 212HF, 322HF, 632HF, 625HF.",
    searchKeywords: [
      "Multi Process SPS System",
      "MPSL",
      "212HF",
      "322HF",
      "632HF",
      "625HF",
      "RF induction SPS",
      "Fuji Electronic",
      "FUJI-SPS",
    ],
    provenance: "verified",
    sourceUrl: "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
    oemSourceUrl: "https://fdc.co.jp/sps/products/mpsl/e_mpsl.html",
    oemTechnologyTags: ["Spark Plasma Sintering", "SPS", "RF Induction Sintering", "Multi-Process", "Hybrid Sintering"],
    rfqBehavior: "custom-engineered",
    catalogStatus: "active",
  },
];
