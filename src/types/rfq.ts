/**
 * SYINCO TECHNOLOGIES — RFQ & Requisition Two-Channel Contracts
 * Source of Truth: Locked Phase 1, 2, 4 & 5 Specifications
 */

export interface SparesRequisitionItem {
  id: string;
  partNumber: string;
  name: string;
  category: string;
  quantity: number;
  thumbnailUrl?: string;
  associatedModelSeries?: string;
  stockStatus?: string;
}

/**
 * Channel A — Capital Equipment Quotation Contract
 * Consultative high-value instrument sizing for central institutes, universities, and defense R&D.
 */
export interface CapitalEquipmentRFQ {
  channel: "capital-equipment";
  productSlug: string;
  productName: string;
  modelNumber: string;
  manufacturerName: string;
  organizationType:
    | "central-university-iit"
    | "drdo-csir-isro"
    | "private-rd-industry"
    | "other";
  requirementStage:
    | "immediate-po-ready"
    | "budgetary-next-fy"
    | "technical-evaluation";
  fullName: string;
  designation?: string;
  email: string;
  phone: string;
  cityState: string;
  targetTemperature?: string;
  sampleDimensions?: string;
  notes?: string;
  submittedAt?: string;
}

/**
 * Channel B — Spares & Consumables Requisition Contract
 * High-velocity in-country stock requisition for pumps, tip-seals, silencers, and electrodes.
 */
export interface SparesRequisition {
  channel: "spares-consumables";
  items: SparesRequisitionItem[];
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  gstNumber?: string;
  notes?: string;
  submittedAt?: string;
}

// Backwards-compatible type aliases
export type CapitalQuotePayload = CapitalEquipmentRFQ;
export type RequisitionSubmissionPayload = SparesRequisition;
