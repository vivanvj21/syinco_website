/**
 * SYINCO TECHNOLOGIES — Content Provenance Governance
 * Ensures no unverified, fabricated, or assumed product metrics or claims
 * enter production-facing UI without explicit governance tagging.
 */

export type ProvenanceStatus = 'verified' | 'needs-verification' | 'content-required';

export interface ProvenanceWrapper<T> {
  value: T;
  provenance: ProvenanceStatus;
  sourceUrl?: string;
  verifiedDate?: string;
  notes?: string;
}
