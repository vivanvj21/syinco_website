import Fuse from "fuse.js";
import { Product } from "@/types/product";

export function createProductSearchIndex(products: Product[]): Fuse<Product> {
  const options = {
    keys: [
      { name: "name", weight: 2.0 },
      { name: "modelSeries", weight: 2.0 },
      { name: "officialProductName", weight: 2.0 },
      { name: "variants.modelNumber", weight: 2.0 },
      { name: "technologySubcategory", weight: 1.5 },
      { name: "oemTechnologyTags", weight: 1.2 },
      { name: "manufacturer.name", weight: 1.5 },
      { name: "searchKeywords", weight: 1.5 },
      { name: "compatibleAccessories.partNumber", weight: 1.5 },
      { name: "categorySlug", weight: 1.2 },
      { name: "tagline", weight: 1.0 },
      { name: "shortDescription", weight: 0.9 },
      { name: "targetApplications", weight: 0.8 },
    ],
    threshold: 0.25,
    ignoreLocation: true,
    minMatchCharLength: 2,
  };

  return new Fuse(products, options);
}

export function searchProducts(products: Product[], query: string): Product[] {
  const trimmed = query.trim();
  if (!trimmed) return products;

  const fuse = createProductSearchIndex(products);
  const results = fuse.search(trimmed);
  return results.map((result) => result.item);
}
