import test from "node:test";
import assert from "node:assert/strict";
import {
  allProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getProductsByManufacturer,
  getProductsByDomain,
  getProductsByArchetype,
  getCategoryBySlug,
} from "../../data/products";
import { searchProducts } from "../search";
import { useCompareStore } from "../../hooks/useCompareStore";

test("1. Product Registry: Multi-Parameter Lookup", () => {
  // Lookup by ID
  const nxdsById = getProductById("edwards-nxds-series");
  assert.ok(nxdsById);
  assert.equal(nxdsById.name, "Edwards nXDS Series Dry Scroll Vacuum Pumps");

  // Lookup by Slug
  const zem3BySlug = getProductBySlug("advance-riko-zem-3");
  assert.ok(zem3BySlug);
  assert.equal(zem3BySlug.modelSeries, "ZEM-3");

  // Lookup by Manufacturer
  const fujiProds = getProductsByManufacturer("fuji-electronic");
  assert.equal(fujiProds.length, 5);
  assert.equal(fujiProds[0].manufacturer.name, "Fuji Electronic Industrial Co., Ltd.");

  // Lookup by Category
  const vacuumProds = getProductsByCategory("dry-vacuum-pumps");
  assert.equal(vacuumProds.length, 86);
  assert.ok(vacuumProds.some((p) => p.id === "edwards-nxds-series"));

  // Lookup by Domain
  const thermalProds = getProductsByDomain("thermoelectric-thermal-analysis");
  assert.ok(thermalProds.length >= 1);
  assert.ok(thermalProds.some((p) => p.id === "advance-riko-zem-3"));

  // Lookup by Archetype
  const components = getProductsByArchetype("industrial-component");
  assert.ok(components.length >= 1);
  assert.ok(components.some((p) => p.id === "edwards-nxds-series"));
});

test("2. Category Filtering & Category Taxonomy", () => {
  const cat = getCategoryBySlug("dry-vacuum-pumps");
  assert.ok(cat);
  assert.equal(cat.domain, "vacuum-technology");

  const categoryItems = allProducts.filter((p) => p.categorySlug === "dry-vacuum-pumps" || p.categorySlug === "vacuum-technology");
  assert.equal(categoryItems.length, 86);
  assert.ok(categoryItems.some((p) => p.id === "edwards-nxds-series"));
});

test("3. Manufacturer Filtering", () => {
  const edwardsItems = allProducts.filter((p) => p.manufacturer.id === "edwards-vacuum");
  assert.equal(edwardsItems.length, 86);
  assert.ok(edwardsItems.some((p) => p.modelSeries === "nXDS"));

  const advanceRikoItems = allProducts.filter((p) => p.manufacturer.id === "advance-riko");
  assert.equal(advanceRikoItems.length, 51);
  assert.ok(advanceRikoItems.some((p) => p.modelSeries === "ZEM-3"));
});

test("4. Query-String URL State Parsing Simulation", () => {
  const mockSearchString = "vendor=edwards-vacuum&stock=hyderabad-stock&q=nXDS15i";
  const params = new URLSearchParams(mockSearchString);

  assert.equal(params.get("q"), "nXDS15i");
  assert.deepEqual(params.getAll("vendor"), ["edwards-vacuum"]);
  assert.deepEqual(params.getAll("stock"), ["hyderabad-stock"]);
});

test("5. Fuse.js Search: Model, Keyword, OEM, and Part Number Matching", () => {
  // Match specific model number
  const modelMatch = searchProducts(allProducts, "nXDS15i");
  assert.ok(modelMatch.length >= 1);
  assert.equal(modelMatch[0].id, "edwards-nxds-series");

  // Match scientific keyword
  const keywordMatch = searchProducts(allProducts, "Seebeck");
  assert.ok(keywordMatch.length >= 1);
  assert.equal(keywordMatch[0].id, "advance-riko-zem-3");

  // Match OEM partner name
  const oemMatch = searchProducts(allProducts, "Fuji");
  assert.ok(oemMatch.length >= 1);
  assert.ok(oemMatch.some((p) => p.id.startsWith("fuji-sps")));

  // Match spare part number
  const partMatch = searchProducts(allProducts, "A73501801");
  assert.equal(partMatch.length, 1);
  assert.equal(partMatch[0].id, "edwards-nxds-series");
});

test("6. Search Empty State (No Matches)", () => {
  const noMatch = searchProducts(allProducts, "nonexistent-quantum-gravitometer-xyz");
  assert.equal(noMatch.length, 0);
});

test("7. Compare Dock: Strictly Enforce Maximum 3 Products", () => {
  const store = useCompareStore.getState();
  store.clearCompare();

  const prod1 = allProducts[0];
  const prod2 = allProducts[1];
  const prod3 = allProducts[2];

  // Add first 3 products
  assert.equal(store.addToCompare(prod1).success, true);
  assert.equal(store.addToCompare(prod2).success, true);
  assert.equal(store.addToCompare(prod3).success, true);
  assert.equal(useCompareStore.getState().items.length, 3);

  // Attempt duplicate addition
  const dupResult = store.addToCompare(prod1);
  assert.equal(dupResult.success, false);
  assert.equal(dupResult.reason, "Product is already in comparison");

  // Attempt to add a 4th product
  const dummy4th = { ...prod1, id: "dummy-product-4", name: "Extra System" };
  const overflowResult = store.addToCompare(dummy4th);
  assert.equal(overflowResult.success, false);
  assert.equal(overflowResult.reason, "Maximum 3 products can be compared simultaneously");
  assert.equal(useCompareStore.getState().items.length, 3);
});

test("8. Compare Dock: Item Removal & Clear", () => {
  const store = useCompareStore.getState();
  assert.equal(store.isInCompare(allProducts[0].id), true);

  store.removeFromCompare(allProducts[0].id);
  assert.equal(useCompareStore.getState().items.length, 2);
  assert.equal(store.isInCompare(allProducts[0].id), false);

  store.clearCompare();
  assert.equal(useCompareStore.getState().items.length, 0);
});

test("9. Field-Aware Specification Comparison & Cross-Domain Notice", () => {
  const prod1 = allProducts[0]; // ZEM-3 (Thermoelectric)
  const prod2 = allProducts[1]; // nXDS (Vacuum)

  const domains = Array.from(new Set([prod1.domain, prod2.domain]));
  const isCrossDomain = domains.length > 1;
  assert.equal(isCrossDomain, true); // Cross-domain comparison detected

  // Check that commercial fields exist on both
  assert.ok(typeof prod1.inrInvoicingAvailable === "boolean");
  assert.ok(typeof prod2.inrInvoicingAvailable === "boolean");
  assert.ok(typeof prod1.warrantyPeriodMonths === "number");
  assert.ok(typeof prod2.warrantyPeriodMonths === "number");
});

test("10. Product Card Archetype Differentiation", () => {
  const instrument = allProducts.find((p) => p.archetype === "scientific-instrument");
  const component = allProducts.find((p) => p.archetype === "industrial-component");

  assert.ok(instrument);
  assert.ok(component);

  assert.equal(instrument.classification, "rd-laboratory");
  assert.equal(component.classification, "subsystem-component");
});
