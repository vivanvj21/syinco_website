/**
 * SYINCO TECHNOLOGIES — Wave 1 Flagship Systems Reference
 * 
 * Strict Rule: Contains only references/IDs to canonical product records.
 * The central product registry remains the single source of truth.
 */

export const FLAGSHIP_PRODUCT_IDS = [
  "advance-riko-zem-3",
  "advance-riko-tcn-2omega",
  "advance-riko-superlix",
  "advance-riko-rhl-e-vht-p-series",
  "advance-riko-rta",
  "advance-riko-tms",
  "advance-riko-wet-1200",
  "advance-riko-rmp-1",
] as const;

export type FlagshipProductId = typeof FLAGSHIP_PRODUCT_IDS[number];

export function isFlagshipProduct(id: string): boolean {
  return (FLAGSHIP_PRODUCT_IDS as readonly string[]).includes(id);
}
