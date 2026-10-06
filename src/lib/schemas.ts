import { z } from "zod";

export const ProvenanceStatusSchema = z.enum(["verified", "needs-verification", "content-required"]);

export const AssetRoleSchema = z.enum([
  "product-hero",
  "product-secondary",
  "technical-diagram",
  "performance-curve",
  "dimensional-drawing",
  "installation-photo",
  "accessory",
  "logo",
  "decorative",
  "page-artwork",
  "unknown",
]);

export const DocumentAssetSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(["datasheet", "brochure", "manual", "application-note", "drawing"]),
  fileUrl: z.string(),
  fileSizeBytes: z.number(),
  format: z.enum(["pdf", "step", "dwg", "zip"]),
  isGated: z.boolean(),
});

export const ScientificCitationSchema = z.object({
  paperTitle: z.string(),
  authors: z.string(),
  journal: z.string(),
  year: z.number(),
  doiUrl: z.string().optional(),
});

export const CompatibleAccessorySchema = z.object({
  id: z.string(),
  partNumber: z.string(),
  name: z.string(),
  category: z.string().optional(),
  description: z.string().optional(),
  thumbnailUrl: z.string(),
  inStockHyderabad: z.boolean(),
  stockStatus: z.string().optional(),
  leadTimeWeeks: z.number().optional(),
});

export const SpecificationRowSchema = z.object({
  parameter: z.string(),
  unit: z.string().optional(),
  value: z.union([z.string(), z.number()]),
  valuesByModel: z.record(z.union([z.string(), z.number()])).optional(),
  testCondition: z.string().optional(),
  highlight: z.boolean().optional(),
});

export const SpecificationGroupSchema = z.object({
  groupName: z.string(),
  rows: z.array(SpecificationRowSchema),
});

export const ProductModelVariantSchema = z.object({
  modelNumber: z.string(),
  partNumber: z.string().optional(),
  description: z.string(),
  keySpecs: z.record(z.string()),
  specificationHighlights: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        unit: z.string().optional(),
      })
    )
    .optional(),
  stockStatus: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  modelSeries: z.string(),
  domain: z.enum([
    "thermoelectric-energy",
    "thermal-properties",
    "high-temp-furnaces",
    "thermal-expansion",
    "thermal-analysis-gas",
    "semiconductor-thin-film",
    "materials-characterization",
    "vacuum-technology",
    "spares-consumables",
    // Legacy aliases
    "thermoelectric-thermal-analysis",
    "thermal-processing-furnaces",
    "thin-film-deposition",
  ]),
  categorySlug: z.string(),
  classification: z.enum([
    "rd-laboratory",
    "pilot-production",
    "industrial-automated",
    "subsystem-component",
    "spare-consumable",
  ]),
  archetype: z.enum(["scientific-instrument", "industrial-component", "consumable-spare"]),
  manufacturer: z.object({
    id: z.enum(["advance-riko", "edwards-vacuum", "syinco-integrated", "fuji-electronic", "fuji-sps"]),
    name: z.string(),
    originCountry: z.enum(["Japan", "UK", "India", "Germany", "USA"]),
    isOfficialChannelPartner: z.boolean(),
    partnerHubSlug: z.string(),
  }),
  tagline: z.string(),
  shortDescription: z.string(),
  fullDescriptionHtml: z.string(),
  measurementPrincipleHtml: z.string().optional(),
  mechanismArchitectureHtml: z.string().optional(),
  keyFeatures: z.array(z.string()),
  heroImage: z.object({
    url: z.string(),
    altText: z.string(),
    width: z.number(),
    height: z.number(),
    role: AssetRoleSchema.optional(),
    confidenceScore: z.number().optional(),
    sourceDocumentId: z.string().optional(),
    sourcePage: z.number().optional(),
    sourceSection: z.string().optional(),
    reviewRequired: z.boolean().optional(),
    selectionReason: z.string().optional(),
  }),
  gallery: z.array(
    z.object({
      url: z.string(),
      altText: z.string(),
      caption: z.string().optional(),
      isSchematicDiagram: z.boolean().optional(),
    })
  ),
  specifications: z.array(SpecificationGroupSchema),
  variants: z.array(ProductModelVariantSchema).optional(),
  targetIndustries: z.array(z.string()),
  targetApplications: z.array(z.string()),
  scientificCitations: z.array(ScientificCitationSchema).optional(),
  compatibleAccessories: z.array(CompatibleAccessorySchema).optional(),
  documents: z.array(DocumentAssetSchema),
  stockStatus: z.enum(["hyderabad-stock", "built-to-order", "import-on-demand"]),
  inrInvoicingAvailable: z.boolean(),
  typicalLeadTimeWeeks: z.number().optional(),
  warrantyPeriodMonths: z.number(),
  supportsPaidSampleAnalysis: z.boolean(),
  scopeOfDeliveryPoints: z.array(z.string()),
  metaTitle: z.string(),
  metaDescription: z.string(),
  searchKeywords: z.array(z.string()),
  provenance: ProvenanceStatusSchema,
  sourceUrl: z.string().optional(),
  // Milestone 5.8D & 5.8E verified OEM fields
  officialProductName: z.string().optional(),
  series: z.string().optional(),
  sourceDescription: z.string().optional(),
  oemTechnologyTags: z.array(z.string()).optional(),
  oemMaterialTags: z.array(z.string()).optional(),
  oemAnalysisTags: z.array(z.string()).optional(),
  oemSourceUrl: z.string().optional(),
  imageSourceUrl: z.string().optional(),
  technologySubcategory: z.string().optional(),
  assetStatus: z.enum(["production-asset", "needs-high-resolution-asset", "placeholder-active", "needs-authorization"]).optional(),
  resolutionStatus: z.enum(["high-resolution", "low-resolution", "vector-placeholder"]).optional(),
  authorizationStatus: z.enum(["authorized", "needs-authorization"]).optional(),
  reviewRequired: z.boolean().optional(),
  verifiedApplications: z.array(z.string()).optional(),
  derivedApplications: z.array(z.string()).optional(),
  verifiedStandards: z.array(z.string()).optional(),
  rfqBehavior: z.enum(["capital-equipment", "spares-consumables", "custom-engineered"]).optional(),
  keyMetricHighlights: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      sourceUrl: z.string().optional(),
      sourceTableRef: z.string().optional(),
      provenance: ProvenanceStatusSchema.optional(),
    })
  ).optional(),
  catalogStatus: z.enum(["wave-1-flagship", "wave-2-catalogue-family", "multi-oem-family", "held-for-clarification", "active"]).optional(),
});

/**
 * Channel A — Capital Equipment RFQ Schema
 */
export const CapitalEquipmentRFQSchema = z.object({
  channel: z.literal("capital-equipment").default("capital-equipment"),
  productSlug: z.string().min(1, "Product slug is required"),
  productName: z.string().min(1, "Product name is required"),
  modelNumber: z.string().min(1, "Model number is required"),
  manufacturerName: z.string().min(1, "Manufacturer name is required"),
  organizationType: z.enum([
    "central-university-iit",
    "drdo-csir-isro",
    "private-rd-industry",
    "other",
  ], { required_error: "Please select an organization type" }),
  requirementStage: z.enum([
    "immediate-po-ready",
    "budgetary-next-fy",
    "technical-evaluation",
  ], { required_error: "Please select your requirement timeline" }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  designation: z.string().optional(),
  email: z.string().email("Valid institutional or corporate email required"),
  phone: z.string().min(10, "Valid 10-digit telephone number required"),
  cityState: z.string().min(2, "City and State required"),
  targetTemperature: z.string().optional(),
  sampleDimensions: z.string().optional(),
  notes: z.string().optional(),
  submittedAt: z.string().optional(),
});

/**
 * Channel B — Spares Requisition Schemas
 */
export const SparesRequisitionItemSchema = z.object({
  id: z.string().min(1, "Item ID is required"),
  partNumber: z.string().min(1, "Part number is required"),
  name: z.string().min(1, "Item name is required"),
  category: z.string(),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  thumbnailUrl: z.string().optional(),
  associatedModelSeries: z.string().optional(),
  stockStatus: z.string().optional(),
});

export const SparesRequisitionSchema = z.object({
  channel: z.literal("spares-consumables").default("spares-consumables"),
  items: z.array(SparesRequisitionItemSchema).min(1, "Requisition must contain at least one line item"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid work or institutional email required"),
  phone: z.string().min(10, "Valid phone number required"),
  cityState: z.string().min(2, "City and State required"),
  gstNumber: z.string().optional(),
  notes: z.string().optional(),
  submittedAt: z.string().optional(),
});

