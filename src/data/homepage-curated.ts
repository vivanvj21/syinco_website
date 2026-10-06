import { Product } from "@/types/product";
import { allProducts } from "./products";

export const HOMEPAGE_CURATED_IDS = [
  "advance-riko-zem-3",
  "advance-riko-tcn-2omega",
  "advance-riko-rhl-e-vht-p-series",
  "edwards-nxds-series",
  "edwards-t-station-300",
  "edwards-cdx-series",
  "fuji-sps-dr-sinter-lab-jr",
] as const;

/**
 * Returns strictly the curated flagship systems for the homepage showcase.
 * Invariant: Never render allProducts on the homepage.
 */
export function getHomepageCuratedProducts(): Product[] {
  const curatedMap = new Map(allProducts.map((p) => [p.id, p]));
  const result: Product[] = [];

  for (const id of HOMEPAGE_CURATED_IDS) {
    const item = curatedMap.get(id);
    if (item) {
      result.push(item);
    }
  }

  return result;
}
