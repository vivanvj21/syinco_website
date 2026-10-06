import { Product } from "@/types/product";
import { allCategories, getCategoryBySlug } from "../categories";
import { zem3ProductData } from "./zem3";
import { nxdsProductData } from "./nxds";
import { wave1FlagshipProducts } from "./wave1-flagships";
import { wave2CatalogueFamilyProducts } from "./catalogue-families";
import { wave3HeldBackProducts } from "./held-back";
import { fujiSpsProducts } from "./fuji-sps";
import { edwardsProducts } from "./edwards";
import { FLAGSHIP_PRODUCT_IDS, isFlagshipProduct } from "./flagships";

export { allCategories, getCategoryBySlug, FLAGSHIP_PRODUCT_IDS, isFlagshipProduct, fujiSpsProducts, edwardsProducts, nxdsProductData };

/**
 * SYINCO TECHNOLOGIES — Master Product Registry
 * Central Single Source of Truth
 * 
 * Composition:
 * - Wave 1 Flagship Systems (8 systems including ZEM-3)
 * - Industrial Components & Vacuum (Edwards nXDS + 67 Edwards OEM families)
 * - Multi-OEM Fuji SPS Systems (5 product families)
 * - Wave 2 Catalogue Families (40 systems)
 * - Wave 3 Held-Back Ambiguous Systems (3 systems held for clarification)
 */
export const allProducts: Product[] = [
  zem3ProductData,
  ...wave1FlagshipProducts,
  nxdsProductData,
  ...edwardsProducts,
  ...fujiSpsProducts,
  ...wave2CatalogueFamilyProducts,
  ...wave3HeldBackProducts,
];

/**
 * Active catalogue products for public discovery and browsing.
 * Excludes products held for commercial/specification clarification.
 */
export const activeCatalogueProducts: Product[] = allProducts.filter(
  (p) => p.catalogStatus !== "held-for-clarification"
);

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  return activeCatalogueProducts.filter(
    (p) => p.categorySlug === cat.slug || cat.aliases?.includes(p.categorySlug)
  );
}

const MANUFACTURER_ALIASES: Record<string, string> = {
  "fuji-sps": "fuji-electronic",
};

export function getProductsByManufacturer(manufacturerId: string): Product[] {
  const targetId = MANUFACTURER_ALIASES[manufacturerId] || manufacturerId;
  return activeCatalogueProducts.filter(
    (p) => p.manufacturer.id === targetId || p.manufacturer.id === manufacturerId
  );
}

const DOMAIN_ALIASES: Record<string, string> = {
  "thermoelectric-thermal-analysis": "thermoelectric-energy",
  "thermal-processing-furnaces": "high-temp-furnaces",
  "thin-film-deposition": "semiconductor-thin-film",
};

export function getProductsByDomain(domain: string): Product[] {
  const canonicalDomain = DOMAIN_ALIASES[domain] || domain;
  return activeCatalogueProducts.filter((p) => p.domain === canonicalDomain || p.domain === domain);
}

export function getProductsByArchetype(archetype: string): Product[] {
  return activeCatalogueProducts.filter((p) => p.archetype === archetype);
}

export function getFlagshipProducts(): Product[] {
  return (FLAGSHIP_PRODUCT_IDS as readonly string[])
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

