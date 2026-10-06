/**
 * SYINCO TECHNOLOGIES — Product Schema Definitions
 * Source of Truth: Locked Phase 1, 2 & 4 Specifications
 */

import type { ProvenanceStatus } from './provenance';

export type TechnologyDomain =
  | 'thermoelectric-energy'
  | 'thermal-properties'
  | 'high-temp-furnaces'
  | 'high-temp-processing'
  | 'thermal-expansion'
  | 'thermal-analysis-gas'
  | 'thermal-analysis'
  | 'semiconductor-thin-film'
  | 'materials-characterization'
  | 'vacuum-technology'
  // Legacy aliases for backwards compatibility
  | 'thermoelectric-thermal-analysis'
  | 'thermal-processing-furnaces'
  | 'thin-film-deposition'
  | 'spares-consumables';

export interface CategoryDefinition {
  slug: string;
  name: string;
  domain: TechnologyDomain;
  domainName: string;
  description: string;
  heroHeadline: string;
  aliases?: string[];
}

export type EquipmentClassification =
  | 'rd-laboratory'
  | 'pilot-production'
  | 'industrial-automated'
  | 'subsystem-component'
  | 'spare-consumable';

export type ProductArchetype =
  | 'scientific-instrument'
  | 'industrial-component'
  | 'consumable-spare';

export type PartnerId =
  | 'advance-riko'
  | 'edwards-vacuum'
  | 'syinco-integrated'
  | 'fuji-electronic'
  | 'fuji-sps';

export type StockStatusType = 'hyderabad-stock' | 'built-to-order' | 'import-on-demand';

export interface SpecificationRow {
  parameter: string;
  unit?: string;
  value: string | number;
  valuesByModel?: Record<string, string | number>;
  testCondition?: string;
  highlight?: boolean;
}

export interface SpecificationGroup {
  groupName: string;
  rows: SpecificationRow[];
}

export interface ProductModelVariant {
  modelNumber: string;
  partNumber?: string;
  description: string;
  keySpecs: Record<string, string>;
  specificationHighlights?: Array<{ label: string; value: string; unit?: string }>;
  stockStatus?: StockStatusType;
}

export interface DocumentAsset {
  id: string;
  title: string;
  type: 'datasheet' | 'brochure' | 'manual' | 'application-note' | 'drawing';
  fileUrl: string;
  fileSizeBytes: number;
  format: 'pdf' | 'step' | 'dwg' | 'zip';
  isGated: boolean;
}

export interface ScientificCitation {
  paperTitle: string;
  authors: string;
  journal: string;
  year: number;
  doiUrl?: string;
}

export interface CompatibleAccessory {
  id: string;
  partNumber: string;
  name: string;
  category?: string;
  description?: string;
  thumbnailUrl: string;
  inStockHyderabad: boolean;
  stockStatus?: StockStatusType;
  leadTimeWeeks?: number;
}

export type AssetRole =
  | 'product-hero'
  | 'product-secondary'
  | 'technical-diagram'
  | 'performance-curve'
  | 'dimensional-drawing'
  | 'installation-photo'
  | 'accessory'
  | 'logo'
  | 'decorative'
  | 'page-artwork'
  | 'unknown';

export interface Product {
  // Identification & Taxonomy
  id: string;
  slug: string;
  name: string;
  modelSeries: string;
  domain: TechnologyDomain;
  categorySlug: string;
  classification: EquipmentClassification;
  archetype: ProductArchetype;

  // Manufacturer / OEM Relation
  manufacturer: {
    id: PartnerId;
    name: string;
    originCountry: 'Japan' | 'UK' | 'India' | 'Germany' | 'USA';
    isOfficialChannelPartner: boolean;
    partnerHubSlug: string;
  };

  // Descriptive Content
  tagline: string;
  shortDescription: string;
  longDescription?: string;
  fullDescriptionHtml: string;
  measurementPrincipleHtml?: string; // Conditional for Scientific Instruments
  mechanismArchitectureHtml?: string; // Conditional for Components
  keyFeatures: string[];

  // Media Assets
  heroImage: {
    url: string;
    altText: string;
    width: number;
    height: number;
    role?: AssetRole;
    confidenceScore?: number;
    sourceDocumentId?: string;
    sourcePage?: number;
    sourceSection?: string;
    reviewRequired?: boolean;
    selectionReason?: string;
  };
  gallery: Array<{
    url: string;
    altText: string;
    caption?: string;
    isSchematicDiagram?: boolean;
  }>;

  // Technical Specifications & Model Variants
  specifications: SpecificationGroup[];
  variants?: ProductModelVariant[];

  // Cross-Linking & Scientific Validation
  targetIndustries: string[];
  targetApplications: string[];
  scientificCitations?: ScientificCitation[];
  compatibleAccessories?: CompatibleAccessory[];
  documents: DocumentAsset[];

  // Commercial Envelope
  stockStatus: StockStatusType;
  inrInvoicingAvailable: boolean;
  typicalLeadTimeWeeks?: number;
  warrantyPeriodMonths: number;
  supportsPaidSampleAnalysis: boolean;
  scopeOfDeliveryPoints: string[];

  // SEO & Discoverability
  metaTitle: string;
  metaDescription: string;
  searchKeywords: string[];

  // Content Truth Governance & OEM Provenance
  provenance: ProvenanceStatus;
  sourceUrl?: string;
  officialProductName?: string;
  series?: string;
  sourceDescription?: string;
  oemTechnologyTags?: string[];
  oemMaterialTags?: string[];
  oemAnalysisTags?: string[];
  oemSourceUrl?: string;
  imageSourceUrl?: string;
  technologySubcategory?: string;
  assetStatus?: 'production-asset' | 'needs-high-resolution-asset' | 'placeholder-active' | 'needs-authorization';
  resolutionStatus?: 'high-resolution' | 'low-resolution' | 'vector-placeholder';
  authorizationStatus?: 'authorized' | 'needs-authorization';
  reviewRequired?: boolean;
  verifiedApplications?: string[];
  derivedApplications?: string[];
  verifiedStandards?: string[];
  rfqBehavior?: 'capital-equipment' | 'spares-consumables' | 'custom-engineered';
  keyMetricHighlights?: Array<{
    label: string;
    value: string;
    sourceUrl?: string;
    sourceTableRef?: string;
    provenance?: ProvenanceStatus;
  }>;
  catalogStatus?: 'wave-1-flagship' | 'wave-2-catalogue-family' | 'multi-oem-family' | 'held-for-clarification' | 'active';
}
