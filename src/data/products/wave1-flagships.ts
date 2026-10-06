import type { Product } from "@/types/product";

/**
 * SYINCO TECHNOLOGIES — Wave 1 Flagship Products Data
 * OEM Principal: Advance Riko, Inc. (Yokohama, Japan)
 * Strict Rule: Never rename an OEM product.
 */
export const wave1FlagshipProducts: Product[] = [
  {
    id: "advance-riko-superlix",
    slug: "advance-riko-superlix",
    name: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX",
    officialProductName: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX",
    modelSeries: "SUPERLIX",
    series: "",
    domain: "thermal-expansion",
    categorySlug: "thermal-expansion",
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

    tagline: "Sub-Nanometer Resolution Absolute Thermal Expansion Measurement by Laser Interferometry",
    shortDescription: "Dual-beam laser interferometric dilatometer with ultra-high sensitivity for absolute expansion measurements of low-expansion materials.",
    sourceDescription: "The world of expansion with accuracy of 1\u00d710-8/K or less Thermal expansion measurement with the world-class ultra high accuracy\u00a0\uff0aas a commercial measurement system Application case Development of zero-expansion materials Development of negative thermal expansion material and anode materials Development of standard materials Development of materials for actuator",
    fullDescriptionHtml: `<p>Dual-beam laser interferometric dilatometer with ultra-high sensitivity for absolute expansion measurements of low-expansion materials.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Dual-beam laser interferometric dilatometer with ultra-high sensitivity for absolute expansion measurements of low-expansion materials.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Resolution", "value": "Sub-nanometer (10\u207b\u2078/K)"}, {"label": "Method", "value": "Laser Interferometry"}, {"label": "Target", "value": "Zero-Expansion Glass"}],

    heroImage: {
      url: "/images/products/advance-riko/superlix-hero.webp",
      altText: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/superlix-hero.webp",
        altText: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX" },
          { parameter: "Primary Technology", value: "Thermal expansion" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    targetApplications: ["thermal expansion measurement"],
    verifiedApplications: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["Thermal expansion"],
    oemMaterialTags: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    oemAnalysisTags: ["thermal expansion measurement"],
    oemSourceUrl: "https://advance-riko.com/en/products/superlix/",

    metaTitle: "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX | Advance Riko | SYINCO Technologies",
    metaDescription: "Dual-beam laser interferometric dilatometer with ultra-high sensitivity for absolute expansion measurements of low-expansion materials.",
    searchKeywords: ["Advance Riko", "superlix", "Ultra High Precision Thermal Expansion Measurement System by Laser Interferometer SuperLIX", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/superlix/",
  },
  {
    id: "advance-riko-tcn-2omega",
    slug: "advance-riko-tcn-2omega",
    name: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2ω",
    officialProductName: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2ω",
    modelSeries: "TCN-2OMEGA",
    series: "",
    domain: "thermal-properties",
    categorySlug: "thermal-properties",
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

    tagline: "World's Only Commercial Cross-Plane Nano Thin Film Thermal Conductivity Meter",
    shortDescription: "Measures thermal conductivity of nanoscale thin films in the normal (cross-plane) direction using the 2-omega differential AC method.",
    sourceDescription: "Thermal conductivity evaluation for a nano thin film at normal direction TCN-2\u03c9 is the world\u2019s only system which can measure thermal conductivity for a nano thin film at normal direction.",
    fullDescriptionHtml: `<p>Measures thermal conductivity of nanoscale thin films in the normal (cross-plane) direction using the 2-omega differential AC method.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Measures thermal conductivity of nanoscale thin films in the normal (cross-plane) direction using the 2-omega differential AC method.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Principle", "value": "2-Omega Differential AC"}, {"label": "Direction", "value": "Normal (Cross-Plane)"}, {"label": "Sample Form", "value": "Nano Thin Films"}],

    heroImage: {
      url: "/images/products/advance-riko/tcn-2omega-hero.webp",
      altText: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2\u03c9",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/tcn-2omega-hero.webp",
        altText: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2\u03c9 Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2ω" },
          { parameter: "Primary Technology", value: "Thermal conductivity evaluation" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Thermoelectric materials and Peltier elements", "Magnetic material"],
    targetApplications: ["Thermoelectric evaluation", "Thermal conductivity\u30fbThermal diffusivity"],
    verifiedApplications: ["Thermoelectric materials and Peltier elements", "Magnetic material"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["Thermal conductivity evaluation", "Thermoelectric evaluation"],
    oemMaterialTags: ["Thermoelectric materials and Peltier elements", "Magnetic material"],
    oemAnalysisTags: ["Thermoelectric evaluation", "Thermal conductivity\u30fbThermal diffusivity"],
    oemSourceUrl: "https://advance-riko.com/en/products/tcn-2omega/",

    metaTitle: "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2ω | Advance Riko | SYINCO Technologies",
    metaDescription: "Measures thermal conductivity of nanoscale thin films in the normal (cross-plane) direction using the 2-omega differential AC method.",
    searchKeywords: ["Advance Riko", "tcn-2omega", "2-Omega Method Nano Thin Film Thermal Conductivity Meter TCN-2ω", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/tcn-2omega/",
  },
  {
    id: "advance-riko-rmp-1",
    slug: "advance-riko-rmp-1",
    name: "Rapid Multi Property Measurement System RMP-1",
    officialProductName: "Rapid Multi Property Measurement System RMP-1",
    modelSeries: "RMP-1",
    series: "",
    domain: "materials-characterization",
    categorySlug: "materials-characterization",
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

    tagline: "Ultra-Rapid Direct Current Pulse Heating Up to 3000 K in One Second",
    shortDescription: "Applies direct current to heat conductive samples up to 3000 K within one second, simultaneously measuring five thermophysical properties.",
    sourceDescription: "Heating up to 3000K within one second! This system measures thermophysical properties by applying current directly to a sample to heat up to higher temperature within one second. Measurable standard properties are electrical resistivity, total emissivity, specific heat capacity, thermal expansion rate and thermal diffusivity.",
    fullDescriptionHtml: `<p>Applies direct current to heat conductive samples up to 3000 K within one second, simultaneously measuring five thermophysical properties.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Applies direct current to heat conductive samples up to 3000 K within one second, simultaneously measuring five thermophysical properties.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Heating Rate", "value": "3000 K in 1 Second"}, {"label": "Method", "value": "Direct Current Pulse"}, {"label": "Properties", "value": "Resistivity, Emissivity, Cp, CTE"}],

    heroImage: {
      url: "/images/products/advance-riko/rmp-1-hero.webp",
      altText: "Rapid Multi Property Measurement System RMP-1",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/rmp-1-hero.webp",
        altText: "Rapid Multi Property Measurement System RMP-1 Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "Rapid Multi Property Measurement System RMP-1" },
          { parameter: "Primary Technology", value: "Thermal expansion" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Carbon"],
    targetApplications: ["Scientific Characterization"],
    verifiedApplications: ["Carbon"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["Thermal expansion", "Thermal conductivity evaluation"],
    oemMaterialTags: ["Carbon"],
    oemAnalysisTags: [],
    oemSourceUrl: "https://advance-riko.com/en/products/rmp-1/",

    metaTitle: "Rapid Multi Property Measurement System RMP-1 | Advance Riko | SYINCO Technologies",
    metaDescription: "Applies direct current to heat conductive samples up to 3000 K within one second, simultaneously measuring five thermophysical properties.",
    searchKeywords: ["Advance Riko", "rmp-1", "Rapid Multi Property Measurement System RMP-1", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/rmp-1/",
  },
  {
    id: "advance-riko-rhl-e-vht-p-series",
    slug: "advance-riko-rhl-e-vht-p-series",
    name: "Infrared Gold Image Furnace RHL-E/VHT/P series",
    officialProductName: "Infrared Gold Image Furnace RHL-E/VHT/P series",
    modelSeries: "RHL-E-VHT-P-SERIES",
    series: "Infrared Gold Image Furnace RHL-E/VHT/P series",
    domain: "high-temp-processing",
    categorySlug: "high-temp-processing",
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

    tagline: "Infrared Gold Image High-Speed Radiant Heating Tube & Chamber Furnaces",
    shortDescription: "Utilizes infrared gold image focusing for clean, high-speed heating from localized specimens to wide-area heating.",
    sourceDescription: "Meeting customer needs with infrared lamp heating Infrared Gold Image Furnaces can be used in many fields for research and development or as production equipment. We\u2019re meeting the needs of our customers from high speed heating to wide area heating.",
    fullDescriptionHtml: `<p>Utilizes infrared gold image focusing for clean, high-speed heating from localized specimens to wide-area heating.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Utilizes infrared gold image focusing for clean, high-speed heating from localized specimens to wide-area heating.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Core Heating", "value": "Infrared Gold Image"}, {"label": "Atmosphere", "value": "High Vacuum / Inert Gas"}, {"label": "Reflector", "value": "99.9% Pure Gold Coating"}],

    heroImage: {
      url: "/images/products/advance-riko/rhl-e-vht-p-series-hero.webp",
      altText: "Infrared Gold Image Furnace RHL-E/VHT/P series",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/rhl-e-vht-p-series-hero.webp",
        altText: "Infrared Gold Image Furnace RHL-E/VHT/P series Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "Infrared Gold Image Furnace RHL-E/VHT/P series" },
          { parameter: "Primary Technology", value: "Rapid heating" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst", "Wire rod"],
    targetApplications: ["Scientific Characterization"],
    verifiedApplications: ["Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst", "Wire rod"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["Rapid heating"],
    oemMaterialTags: ["Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst", "Wire rod"],
    oemAnalysisTags: [],
    oemSourceUrl: "https://advance-riko.com/en/products/rhl-e-vht-p-series/",

    metaTitle: "Infrared Gold Image Furnace RHL-E/VHT/P series | Advance Riko | SYINCO Technologies",
    metaDescription: "Utilizes infrared gold image focusing for clean, high-speed heating from localized specimens to wide-area heating.",
    searchKeywords: ["Advance Riko", "rhl-e-vht-p-series", "Infrared Gold Image Furnace RHL-E/VHT/P series", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/rhl-e-vht-p-series/",
  },
  {
    id: "advance-riko-rta",
    slug: "advance-riko-rta",
    name: "Rapid Thermal Annealing System RTA series",
    officialProductName: "Rapid Thermal Annealing System RTA series",
    modelSeries: "RTA",
    series: "Rapid Thermal Annealing System RTA series",
    domain: "semiconductor-thin-film",
    categorySlug: "semiconductor-thin-film",
    classification: "pilot-production",
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

    tagline: "High-Speed Cold-Wall Rapid Thermal Annealing for 2-inch to 300 mm Wafers",
    shortDescription: "Infrared lamp heating rapid thermal annealing system supporting recipe-controlled gas flow and precise temperature profiles.",
    sourceDescription: "High speed heat treatment from 2 inches to 300 mm 10 seconds until retention. Infrared lamp heating is the method which can take advantage of its features of High energy density, Near infrared rays, High heat responsiveness, Temperature controllability, and Cold wall method. We\u2019re meeting the needs of our customers with supplying RTA Series, which can control the process recipe (heating and cooling) and gas type with its flow amount. The system is suitable for finding the best heating conditions.",
    fullDescriptionHtml: `<p>Infrared lamp heating rapid thermal annealing system supporting recipe-controlled gas flow and precise temperature profiles.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Infrared lamp heating rapid thermal annealing system supporting recipe-controlled gas flow and precise temperature profiles.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Wafer Size", "value": "2-inch to 300 mm"}, {"label": "Retention", "value": "10s to Retention"}, {"label": "Atmosphere", "value": "Cold-Wall Multi-Gas"}],

    heroImage: {
      url: "/images/products/advance-riko/rta-hero.webp",
      altText: "Rapid Thermal Annealing System RTA series",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/rta-hero.webp",
        altText: "Rapid Thermal Annealing System RTA series Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "Rapid Thermal Annealing System RTA series" },
          { parameter: "Primary Technology", value: "Rapid heating" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Semiconductor", "Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst"],
    targetApplications: ["Scientific Characterization"],
    verifiedApplications: ["Semiconductor", "Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["Rapid heating", "Hydrogen (reduction)", "Special gases"],
    oemMaterialTags: ["Semiconductor", "Metals and steel", "Thermoelectric materials and Peltier elements", "Ceramics", "Magnetic material", "Catalyst"],
    oemAnalysisTags: [],
    oemSourceUrl: "https://advance-riko.com/en/products/rta/",

    metaTitle: "Rapid Thermal Annealing System RTA series | Advance Riko | SYINCO Technologies",
    metaDescription: "Infrared lamp heating rapid thermal annealing system supporting recipe-controlled gas flow and precise temperature profiles.",
    searchKeywords: ["Advance Riko", "rta", "Rapid Thermal Annealing System RTA series", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/rta/",
  },
  {
    id: "advance-riko-tms",
    slug: "advance-riko-tms",
    name: "High Temperature Observation System TMS series",
    officialProductName: "High Temperature Observation System TMS series",
    modelSeries: "TMS",
    series: "High Temperature Observation System TMS series",
    domain: "materials-characterization",
    categorySlug: "materials-characterization",
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

    tagline: "In-Situ High-Temperature Real-Time Optical Observation System",
    shortDescription: "Combines high-speed infrared image heating with optical microscopy to visualize crystal transformation, melting, and solidification in real time.",
    sourceDescription: "Vivid observations with image heating and the latest optical system Capable of observations of the crystal transformation, deposition, and solidification of metallic materials, capable of observations of the molten state and deposits of various materials, and capable of thermal cycle measurements of polymer materials from crystals \u2192 molten \u2192 re-solidification",
    fullDescriptionHtml: `<p>Combines high-speed infrared image heating with optical microscopy to visualize crystal transformation, melting, and solidification in real time.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Combines high-speed infrared image heating with optical microscopy to visualize crystal transformation, melting, and solidification in real time.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Observation", "value": "In-Situ Real-Time Optical"}, {"label": "Phenomena", "value": "Melting & Solidification"}, {"label": "Heating Core", "value": "Infrared Image Focus"}],

    heroImage: {
      url: "/images/products/advance-riko/tms-hero.webp",
      altText: "High Temperature Observation System TMS series",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/tms-hero.webp",
        altText: "High Temperature Observation System TMS series Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "High Temperature Observation System TMS series" },
          { parameter: "Primary Technology", value: "High-temperature observation" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Metals and steel"],
    targetApplications: ["high-temperature observation"],
    verifiedApplications: ["Metals and steel"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["High-temperature observation"],
    oemMaterialTags: ["Metals and steel"],
    oemAnalysisTags: ["high-temperature observation"],
    oemSourceUrl: "https://advance-riko.com/en/products/tms/",

    metaTitle: "High Temperature Observation System TMS series | Advance Riko | SYINCO Technologies",
    metaDescription: "Combines high-speed infrared image heating with optical microscopy to visualize crystal transformation, melting, and solidification in real time.",
    searchKeywords: ["Advance Riko", "tms", "High Temperature Observation System TMS series", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/tms/",
  },
  {
    id: "advance-riko-wet-1200",
    slug: "advance-riko-wet-1200",
    name: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200",
    officialProductName: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200",
    modelSeries: "WET-1200",
    series: "",
    domain: "materials-characterization",
    categorySlug: "materials-characterization",
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

    tagline: "High-Temperature Solid-Liquid Interface Contact Angle & Wettability System",
    shortDescription: "Observes substrate and ingot wettability using the sessile drop method under controlled high-temperature atmospheres.",
    sourceDescription: "Capable of precise observations of substrate and ingot wettability This system has been commercialized as a compact, low-cost high-temperature wettability test/contact angle measurement system based on the wettability test/contact angle measurement system delivered to the Japan Aerospace Exploration Agency in 1993. This system can perform measurements by the static drop method. The extruded liquid drop method is also available(optional).",
    fullDescriptionHtml: `<p>Observes substrate and ingot wettability using the sessile drop method under controlled high-temperature atmospheres.</p><p>Contact SYINCO Technologies for detailed configuration and technical datasheets.</p>`,
    keyFeatures: [
      "Observes substrate and ingot wettability using the sessile drop method under controlled high-temperature atmospheres.",
      "Manufactured by Advance Riko, Inc. (Yokohama, Japan)",
      "Technical support and calibration via SYINCO Technologies Hyderabad engineering depot"
    ],
    keyMetricHighlights: [{"label": "Method", "value": "Static & Extruded Drop"}, {"label": "Interface", "value": "Solid-Liquid Interface"}, {"label": "Lineage", "value": "JAXA Space Heritage"}],

    heroImage: {
      url: "/images/products/advance-riko/wet-1200-hero.webp",
      altText: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200",
      width: 600,
      height: 450,
    },
    gallery: [
      {
        url: "/images/products/advance-riko/wet-1200-hero.webp",
        altText: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200 Preview",
        isSchematicDiagram: true,
      }
    ],
    assetStatus: "needs-high-resolution-asset",

    specifications: [
      {
        groupName: "Verified System Capabilities",
        rows: [
          { parameter: "System Model", value: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200" },
          { parameter: "Primary Technology", value: "High-temperature observation" },
          { parameter: "Operating Specifications", value: "Contact SYINCO Technologies for configuration and specification details." },
        ],
      }
    ],

    targetIndustries: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    targetApplications: ["wettability\u30fbcontact angle", "high-temperature observation"],
    verifiedApplications: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    verifiedStandards: [],
    documents: [],

    stockStatus: "built-to-order",
    inrInvoicingAvailable: true,
    typicalLeadTimeWeeks: 12,
    warrantyPeriodMonths: 12,
    supportsPaidSampleAnalysis: true,
    scopeOfDeliveryPoints: [
      "Standard system console as configured by OEM",
      "Factory acceptance test report from Advance Riko, Inc. (Japan)",
      "Installation and commissioning support by SYINCO Technologies engineering team"
    ],

    oemTechnologyTags: ["High-temperature observation", "Wettability / Contact angle", "Brazing"],
    oemMaterialTags: ["Metals and steel", "Organic and polymeric", "Ceramics"],
    oemAnalysisTags: ["wettability\u30fbcontact angle", "high-temperature observation"],
    oemSourceUrl: "https://advance-riko.com/en/products/wet-1200/",

    metaTitle: "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200 | Advance Riko | SYINCO Technologies",
    metaDescription: "Observes substrate and ingot wettability using the sessile drop method under controlled high-temperature atmospheres.",
    searchKeywords: ["Advance Riko", "wet-1200", "High Temperature Wettability Evaluation System by Contact Angle at the Solid-Liquid Interface WET-1200", "SYINCO"],

    provenance: "verified",
    sourceUrl: "https://advance-riko.com/en/products/wet-1200/",
  },
];
