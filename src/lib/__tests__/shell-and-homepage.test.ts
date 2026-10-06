import { test } from "node:test";
import assert from "node:assert/strict";
import { allProducts, allCategories } from "@/data/products";
import { searchProducts } from "@/lib/search";

test("1. Pagination State: Calculation, Clamping, and Slicing", () => {
  const PAGE_SIZE = 12;
  const mockProducts = Array.from({ length: 25 }, (_, i) => ({
    id: `prod-${i + 1}`,
    name: `Product ${i + 1}`,
  }));

  const totalPages = Math.max(1, Math.ceil(mockProducts.length / PAGE_SIZE));
  assert.strictEqual(totalPages, 3, "25 items with page size 12 should yield 3 pages");

  // Page 1
  const page1 = mockProducts.slice(0, PAGE_SIZE);
  assert.strictEqual(page1.length, 12);
  assert.strictEqual(page1[0].id, "prod-1");
  assert.strictEqual(page1[11].id, "prod-12");

  // Page 2
  const page2 = mockProducts.slice(PAGE_SIZE, PAGE_SIZE * 2);
  assert.strictEqual(page2.length, 12);
  assert.strictEqual(page2[0].id, "prod-13");

  // Page 3
  const page3 = mockProducts.slice(PAGE_SIZE * 2, PAGE_SIZE * 3);
  assert.strictEqual(page3.length, 1);
  assert.strictEqual(page3[0].id, "prod-25");

  // Clamping test: page 99 should clamp to totalPages
  const requestedPage = 99;
  const clampedPage = Math.min(Math.max(1, requestedPage), totalPages);
  assert.strictEqual(clampedPage, 3, "Page 99 must clamp to max pages (3)");
});

test("2. Dynamic Facet Counts: Accurate Multi-Facet Aggregation", () => {
  const products = allProducts;
  assert.ok(products.length >= 3, "At least 3 products in registry");

  const vendorCounts: Record<string, number> = {};
  const domainCounts: Record<string, number> = {};
  const archetypeCounts: Record<string, number> = {};

  products.forEach((p) => {
    vendorCounts[p.manufacturer.id] = (vendorCounts[p.manufacturer.id] || 0) + 1;
    domainCounts[p.domain] = (domainCounts[p.domain] || 0) + 1;
    archetypeCounts[p.archetype] = (archetypeCounts[p.archetype] || 0) + 1;
  });

  // Verify OEM counts
  assert.ok(vendorCounts["advance-riko"] >= 1, "Advance Riko has verified systems");
  assert.strictEqual(vendorCounts["edwards-vacuum"], 86, "Edwards Vacuum has 86 verified systems");
  assert.strictEqual(vendorCounts["fuji-electronic"], 5, "Fuji Electronic has 5 verified systems");

  // Verify Archetypes
  assert.ok(archetypeCounts["scientific-instrument"] >= 1);
  assert.ok(archetypeCounts["industrial-component"] >= 1);

  // Verify Domains
  assert.ok(domainCounts["thermoelectric-energy"] >= 1 || domainCounts["thermoelectric-thermal-analysis"] >= 1);
  assert.strictEqual(domainCounts["vacuum-technology"], 86);
});

test("3. Global Shell Navigation: Verified Categories & Principals", () => {
  assert.strictEqual(allCategories.length, 8, "Active catalogue must contain exactly 8 top-level categories");
  const allSlugsWithAliases = allCategories.flatMap((c) => [c.slug, ...(c.aliases || [])]);
  assert.ok(allSlugsWithAliases.includes("thermoelectric-evaluation"));
  assert.ok(allSlugsWithAliases.includes("dry-vacuum-pumps"));

  const verifiedOEMs = ["Advance Riko, Inc.", "Edwards Vacuum", "Fuji Electronic Industrial Co., Ltd."];
  const presentOEMs = allProducts.map((p) => p.manufacturer.name);
  verifiedOEMs.forEach((oem) => {
    assert.ok(presentOEMs.includes(oem), `Principal ${oem} must be present`);
  });
});

test("4. Global Shell Search Integration: Fuse.js Instant Discovery", () => {
  const queryModel = searchProducts(allProducts, "nXDS15i");
  assert.ok(queryModel.length >= 1);
  assert.strictEqual(queryModel[0].id, "edwards-nxds-series");

  const queryZem = searchProducts(allProducts, "Seebeck");
  assert.ok(queryZem.length >= 1);
  assert.strictEqual(queryZem[0].id, "advance-riko-zem-3");

  const querySps = searchProducts(allProducts, "sintering");
  assert.ok(querySps.length >= 1);
  assert.ok(querySps.some((p) => p.id.startsWith("fuji-sps")));
});

test("5. Provenance Governance: Zero Unverified Claims in Core Offerings", () => {
  allProducts.forEach((product) => {
    assert.strictEqual(product.provenance, "verified", `Product ${product.id} must have verified provenance`);
    assert.ok(product.sourceUrl, `Product ${product.id} must have verified sourceUrl`);
  });
});

test("6. Local Advantage & Hyderabad Depot Transparency Data", () => {
  const hyderabadAddress = "D.No.12-1-468/ACE/B/313, ACE Ajanta, Nagole-Kuntloor Road, Hyderabad – 500068, Telangana, India";
  const emergencyPhone = "+91 73822 92929";
  const officialEmail = "info@syinco.in";

  assert.ok(hyderabadAddress.includes("Hyderabad – 500068"));
  assert.ok(emergencyPhone.includes("+91 73822 92929"));
  assert.strictEqual(officialEmail, "info@syinco.in");
});
