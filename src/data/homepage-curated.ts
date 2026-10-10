import { Product } from "@/types/product";
import { allProducts } from "./products";

export const HOMEPAGE_CURATED_IDS = [
  // Edwards Vacuum (3)
  "edwards-eld500",
  "edwards-next-maglev-series",
  "edwards-nxri-series",

  // Fuji-SPS (3)
  "fuji-sps-dr-sinter-lab-jr-ms1",
  "fuji-sps-dr-sinter-lab-jr",
  "fuji-sps-25-series",

  // Advance Riko (3)
  "advance-riko-zem-3",
  "advance-riko-mini-pem",
  "advance-riko-vhc-series",
] as const;

/**
 * Returns strictly the curated flagship systems for the homepage showcase.
 * Invariant: Never render allProducts on the homepage.
 */
export function getHomepageCuratedProducts(): Product[] {
  const curatedMap = new Map(allProducts.map((p) => [p.id, p]));
  const result: Product[] = [];

  for (const id of HOMEPAGE_CURATED_IDS) {
    if (id === "fuji-sps-dr-sinter-lab-jr-ms1") {
      const baseLabJr = curatedMap.get("fuji-sps-dr-sinter-lab-jr");
      if (baseLabJr) {
        result.push({
          ...baseLabJr,
          id: "fuji-sps-dr-sinter-lab-jr-ms1",
          name: "New Model DR.SINTER LAB Jr. MS-1 Desktop SPS",
          officialProductName: "New Model DR.SINTER LAB Jr. MS-1",
          modelSeries: "DR. SINTER LAB Jr. MS-1",
          tagline: "New Model Compact Desktop Spark Plasma Sintering System for Advanced R&D",
          shortDescription: "Ultra-compact desktop SPS system with AC servo mechanical loading, 20 kN pressing force, and 2,500°C sintering capability.",
          heroImage: {
            url: "/images/products/fuji-sps/dr-sinter-lab-jr-hero.webp",
            altText: "New Model DR.SINTER LAB Jr. MS-1 Desktop SPS",
            width: 1024,
            height: 1306,
            role: "product-hero",
          },
        });
      }
      continue;
    }

    if (id === "advance-riko-vhc-series") {
      const baseQhc = curatedMap.get("advance-riko-qhc-qhc");
      if (baseQhc) {
        result.push({
          ...baseQhc,
          id: "advance-riko-vhc-series",
          name: "Variable Atmosphere Lamp Heating System VHC series",
          officialProductName: "Variable Atmosphere Lamp Heating System VHC series",
          modelSeries: "VHC Series",
          tagline: "Variable Atmosphere Infrared Lamp Heating System for Advanced Materials Processing",
          shortDescription: "Compact high-speed infrared lamp heating system featuring variable atmosphere control and quartz heat treatment chamber.",
          heroImage: {
            url: "/images/products/advance-riko/vhc-series-hero.webp",
            altText: "Variable Atmosphere Lamp Heating System VHC series",
            width: 300,
            height: 300,
            role: "product-hero",
          },
        });
      }
      continue;
    }

    const item = curatedMap.get(id);
    if (item) {
      // If it is base lab jr, ensure its heroImage points to the 212H console so it is distinct from MS-1
      if (id === "fuji-sps-dr-sinter-lab-jr") {
        result.push({
          ...item,
          heroImage: {
            url: "/images/products/fuji-sps/dr-sinter-lab-jr-212h.webp",
            altText: "DR. SINTER LAB Jr. Series 212H Console",
            width: 1024,
            height: 1306,
            role: "product-hero",
          },
        });
      } else {
        result.push(item);
      }
    }
  }

  return result;
}
