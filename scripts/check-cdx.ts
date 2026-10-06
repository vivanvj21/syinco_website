import { edwardsProducts } from "../src/data/products/edwards";

const p = edwardsProducts.find(x => x.id === "edwards-cdx-series");
console.log("product.reviewRequired:", (p as any)?.reviewRequired);
console.log("heroImage.reviewRequired:", p?.heroImage?.reviewRequired);
console.log("product.assetStatus:", p?.assetStatus);
console.log("product.confidenceScore:", (p as any)?.confidenceScore);
console.log("heroImage.confidenceScore:", p?.heroImage?.confidenceScore);
