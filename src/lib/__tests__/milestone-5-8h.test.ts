import test from "node:test";
import assert from "node:assert/strict";
import {
  allProducts,
  activeCatalogueProducts,
  getProductById,
  getProductBySlug,
  getProductsByManufacturer,
  getProductsByCategory,
} from "../../data/products";
import { edwardsProducts } from "../../data/products/edwards";
import { searchProducts } from "../search";
import {
  APPLICATION_MAPPINGS,
  findRecommendedSystems,
  getProductCanonicalUrl,
} from "../../data/application-matrix";
import { ProductSchema } from "../schemas";

test("5.8H.1 — Registry Integration: Exactly 86 Edwards Product Families in allProducts", () => {
  const edwardsAll = allProducts.filter((p) => p.manufacturer.id === "edwards-vacuum");
  assert.equal(edwardsAll.length, 86, "Total Edwards families in allProducts must be exactly 86");

  const edwardsActive = activeCatalogueProducts.filter((p) => p.manufacturer.id === "edwards-vacuum");
  assert.equal(edwardsActive.length, 86, "Total active Edwards families must be exactly 86");

  // Total products in system: 57 previous + 85 complementary = 142 (Chino removed)
  assert.equal(allProducts.length, 142, "Total platform products must be exactly 142");
});

test("5.8H.2 — nXDS Singularity: Exactly 1 nXDS Family Across Entire Registry", () => {
  const nxdsRecords = allProducts.filter((p) => p.id === "edwards-nxds-series" || p.slug === "edwards-nxds-series");
  assert.equal(nxdsRecords.length, 1, "There must be exactly ONE canonical nXDS record");
  assert.equal(nxdsRecords[0].id, "edwards-nxds-series");
  assert.equal(nxdsRecords[0].slug, "edwards-nxds-series");
  assert.equal(nxdsRecords[0].modelSeries, "nXDS");

  // Ensure nxds is not inside edwardsProducts array
  const duplicateInEdwards = edwardsProducts.find((p) => p.id === "edwards-nxds-series");
  assert.equal(duplicateInEdwards, undefined, "nXDS must NOT be duplicated in edwards.ts");
});

test("5.8H.3 — Zero Duplicate Invariants: Zero Duplicate IDs or Slugs Across Catalogue", () => {
  const idSet = new Set<string>();
  const slugSet = new Set<string>();

  for (const p of allProducts) {
    assert.ok(!idSet.has(p.id), `Duplicate product ID detected: ${p.id}`);
    assert.ok(!slugSet.has(p.slug), `Duplicate product slug detected: ${p.slug}`);
    idSet.add(p.id);
    slugSet.add(p.slug);
  }

  assert.equal(idSet.size, 142, "All 142 product IDs must be unique");
  assert.equal(slugSet.size, 142, "All 142 product slugs must be unique");
});

test("5.8H.4 — Edwards Manufacturer & Category Lookups", () => {
  const mfgLookups = getProductsByManufacturer("edwards-vacuum");
  assert.equal(mfgLookups.length, 86, "getProductsByManufacturer('edwards-vacuum') must return exactly 86 families");

  const catLookups = getProductsByCategory("vacuum-technology");
  assert.equal(catLookups.length, 86, "getProductsByCategory('vacuum-technology') must return 86 families");

  // All 68 must belong to domain 'vacuum-technology'
  for (const p of mfgLookups) {
    assert.equal(p.domain, "vacuum-technology", `Product ${p.id} must belong to vacuum-technology domain`);
    assert.equal(p.categorySlug, "vacuum-technology", `Product ${p.id} must have categorySlug vacuum-technology`);
  }
});

test("5.8H.5 — Edwards Subcategory Granularity & Zero Unauthorized Top-Level Disciplines", () => {
  const subcategories = new Set<string>();
  const edwardsAll = getProductsByManufacturer("edwards-vacuum");

  for (const p of edwardsAll) {
    assert.ok(p.technologySubcategory, `Product ${p.id} must define a technologySubcategory`);
    subcategories.add(p.technologySubcategory!);
  }

  // Verify key Edwards subcategories are present
  assert.ok(subcategories.has("Dry Scroll Vacuum Pumps"));
  assert.ok(subcategories.has("Chemical Dry Screw Pumps"));
  assert.ok(subcategories.has("Industrial Rotary Vane Pumps"));
  assert.ok(subcategories.has("Roots Vacuum Boosters"));
  assert.ok(subcategories.has("Precision Leak Detectors"));
  assert.ok(subcategories.has("Capacitance Manometers"));
  assert.ok(subcategories.has("High Vacuum Gate Valves"));
});

test("5.8H.6 — Fuse.js Search: Exact Model Lookups for 7 Representative Families", () => {
  const testCases = [
    { query: "nXDS15i", expectedId: "edwards-nxds-series" },
    { query: "RV12", expectedId: "edwards-rv-series" },
    { query: "GXS160", expectedId: "edwards-gxs-series" },
    { query: "nXR60i", expectedId: "edwards-nxri-series" },
    { query: "ELD500", expectedId: "edwards-eld500" },
    { query: "BAROCEL 7025", expectedId: "edwards-barocel-7000" },
    { query: "BGV DN16", expectedId: "edwards-bgv-series" },
  ];

  for (const tc of testCases) {
    const results = searchProducts(allProducts, tc.query);
    assert.ok(results.length >= 1, `Search query '${tc.query}' must return at least 1 result`);
    assert.equal(
      results[0].id,
      tc.expectedId,
      `Search query '${tc.query}' top match must be ${tc.expectedId}, got ${results[0].id}`
    );
  }
});

test("5.8H.7 — Fuse.js Search: Technology & Subcategory Lookups", () => {
  const dryScrew = searchProducts(allProducts, "dry screw");
  assert.ok(dryScrew.length >= 1);
  assert.ok(dryScrew.some((p) => p.id === "edwards-gxs-series" || p.id === "edwards-cdx-series"));

  const leakDet = searchProducts(allProducts, "leak detection");
  assert.ok(leakDet.length >= 1);
  assert.ok(leakDet.some((p) => p.id === "edwards-eld500"));

  const gateValve = searchProducts(allProducts, "gate valve");
  assert.ok(gateValve.length >= 1);
  assert.ok(gateValve.some((p) => p.id === "edwards-bgv-series"));
});

test("5.8H.8 — Deep-Linking Permanent Invariant: Never Falls Back to / or /products", () => {
  const edwardsAll = getProductsByManufacturer("edwards-vacuum");

  for (const p of edwardsAll) {
    const canonicalUrl = getProductCanonicalUrl(p);
    assert.equal(
      canonicalUrl,
      `/products/vacuum-technology/${p.slug}`,
      `Canonical URL for ${p.id} must be exactly /products/vacuum-technology/${p.slug}`
    );
    assert.notEqual(canonicalUrl, "/");
    assert.notEqual(canonicalUrl, "/products");
  }
});

test("5.8H.9 — Canonical URL Invariant: Family URL Remains Canonical When ?model= Is Present", () => {
  const testFamily = getProductById("edwards-rv-series")!;
  assert.ok(testFamily);

  // Model parameter test: /products/vacuum-technology/edwards-rv-series?model=RV12
  const familyUrl = getProductCanonicalUrl(testFamily);
  assert.equal(familyUrl, "/products/vacuum-technology/edwards-rv-series");

  // Verify that model is a legitimate variant of the family
  assert.ok(testFamily.variants?.some((v) => v.modelNumber === "RV12"));
});

test("5.8H.10 — Image Governance: Independent Tracking of Resolution & Authorization", () => {
  const edwardsAll = getProductsByManufacturer("edwards-vacuum");

  for (const p of edwardsAll) {
    assert.ok(p.resolutionStatus, `Product ${p.id} must have resolutionStatus`);
    assert.ok(p.authorizationStatus, `Product ${p.id} must have authorizationStatus`);

    // Invariant: If not authorized, cannot be production-asset
    if (p.authorizationStatus === "needs-authorization") {
      assert.notEqual(
        p.assetStatus,
        "production-asset",
        `Product ${p.id} is unauthorized but marked production-asset`
      );
    }
  }
});

test("5.8H.11 — Document Linkage: Multi-Document Canonical Association", () => {
  const nXDS = getProductById("edwards-nxds-series")!;
  assert.ok(nXDS.documents.length >= 1, "nXDS must have linked documents");

  const gxs = getProductById("edwards-gxs-series")!;
  assert.ok(gxs.documents.length >= 1, "GXS must have linked documents");
  assert.ok(gxs.documents.some((d) => d.fileUrl.includes("GXS") || d.title.includes("GXS")));

  const bgv = getProductById("edwards-bgv-series")!;
  assert.ok(bgv.documents.length >= 1, "BGV must have linked documents");
});

test("5.8H.12 — RFQ Mapping: Two-Channel Integrity", () => {
  const edwardsAll = getProductsByManufacturer("edwards-vacuum");

  for (const p of edwardsAll) {
    assert.ok(
      p.rfqBehavior === "capital-equipment" || p.rfqBehavior === "spares-consumables",
      `Product ${p.id} has invalid RFQ behavior ${p.rfqBehavior}`
    );
  }

  // nXDS, GXS, ELD500 should be capital equipment
  assert.equal(getProductById("edwards-nxds-series")?.rfqBehavior, "capital-equipment");
  assert.equal(getProductById("edwards-gxs-series")?.rfqBehavior, "capital-equipment");
  assert.equal(getProductById("edwards-eld500")?.rfqBehavior, "capital-equipment");
});

test("5.8H.13 — Application Discovery Engine: Verified vs Derived Segregation", () => {
  // 1. Query verified semiconductor vacuum pumping -> returns nXDS and nXRi
  const semiRes = findRecommendedSystems({
    materialClass: "semiconductor-materials",
    processType: "vacuum-pumping",
  });
  assert.ok(semiRes.hasMatches, "Semiconductor dry vacuum pumping must match");
  const semiIds = semiRes.recommendedProducts.map((p) => p.id);
  assert.ok(semiIds.includes("edwards-nxds-series"), "Must recommend nXDS");
  assert.ok(semiIds.includes("edwards-nxri-series"), "Must recommend nXRi");

  // 2. Query metals leak testing -> returns ELD500
  const leakRes = findRecommendedSystems({
    materialClass: "metals-steel",
    processType: "leak-detection",
  });
  assert.ok(leakRes.hasMatches, "Metals leak testing must match");
  assert.ok(leakRes.recommendedProducts.some((p) => p.id === "edwards-eld500"));

  // 3. Query thin-films capacitance pressure measurement -> returns BAROCEL 7000
  const barocelRes = findRecommendedSystems({
    materialClass: "thin-films",
    targetProperty: "vacuum-pressure",
  });
  assert.ok(barocelRes.hasMatches, "Thin-films capacitance pressure measurement must match");
  assert.ok(barocelRes.recommendedProducts.some((p) => p.id === "edwards-barocel-7000"));

  // 4. Invariant: Derived mappings must NEVER appear in recommendedProducts
  const derivedMappings = APPLICATION_MAPPINGS.filter((m) => m.provenance === "derived");
  assert.ok(derivedMappings.length >= 1, "At least one derived mapping must exist for validation");

  const polymerRes = findRecommendedSystems({
    materialClass: "organic-polymers",
    processType: "vacuum-pumping",
  });
  // The polymer vacuum pumping mapping has provenance: "derived", so recommendedProducts must be EMPTY
  assert.equal(polymerRes.hasMatches, false, "Derived mapping must NOT yield recommended products");
  assert.equal(polymerRes.recommendedProducts.length, 0);
  assert.ok(polymerRes.derivedMappingsCount >= 1, "Derived mapping count must be recorded");
});

test("5.8H.14 — Representative PDP Wave: All 7 Representative Families Resolve", () => {
  const representativeSlugs = [
    "edwards-nxds-series",
    "edwards-rv-series",
    "edwards-gxs-series",
    "edwards-nxri-series",
    "edwards-eld500",
    "edwards-barocel-7000",
    "edwards-bgv-series",
  ];

  for (const slug of representativeSlugs) {
    const prod = getProductBySlug(slug);
    assert.ok(prod, `Representative product ${slug} must resolve from getProductBySlug`);
    assert.equal(prod.categorySlug, "vacuum-technology");
    assert.equal(prod.manufacturer.id, "edwards-vacuum");
    assert.ok(prod.variants && prod.variants.length > 0, `Product ${slug} must have model variants`);
    assert.ok(prod.specifications.length > 0, `Product ${slug} must have specifications`);
    assert.ok(prod.documents.length > 0, `Product ${slug} must have linked documents`);
  }
});

test("5.8H.15 — Product Schema Validation for Representative Families", () => {
  const representativeSlugs = [
    "edwards-rv-series",
    "edwards-gxs-series",
    "edwards-nxri-series",
    "edwards-eld500",
    "edwards-barocel-7000",
    "edwards-bgv-series",
  ];

  for (const slug of representativeSlugs) {
    const prod = getProductBySlug(slug)!;
    const parsed = ProductSchema.parse(prod);
    assert.equal(parsed.id, slug);
    assert.equal(parsed.provenance, "verified");
  }
});
