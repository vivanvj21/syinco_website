import test from "node:test";
import assert from "node:assert/strict";
import {
  getAllMaterials,
  getPropertiesForMaterial,
  getProcessesForMaterial,
  findRecommendedSystems,
  getProductCanonicalUrl,
  APPLICATION_MAPPINGS,
  MATERIAL_CLASSES,
  TARGET_PROPERTIES,
  PROCESS_TYPES,
} from "../../data/application-matrix";
import { allProducts, getProductById } from "../../data/products";

test("1. Material Classes: Exactly 9 Canonical Domains Registered", () => {
  const materials = getAllMaterials();
  assert.equal(materials.length, 9, "Must expose exactly 9 material classes");
  assert.equal(MATERIAL_CLASSES.length, 9);
  
  const expectedIds = [
    "thermoelectric-materials",
    "metals-steel",
    "ceramics",
    "thin-films",
    "semiconductor-materials",
    "carbon",
    "magnetic-materials",
    "organic-polymers",
    "catalysts-powders",
  ];
  for (const id of expectedIds) {
    assert.ok(materials.some((m) => m.id === id), `Material class ${id} must exist`);
  }
});

test("2. Property vs Process Separation: Distinct Taxonomy and Types", () => {
  assert.ok(TARGET_PROPERTIES.length >= 10, "Must define target properties");
  assert.ok(PROCESS_TYPES.length >= 5, "Must define process types");

  // Ensure no cross-contamination of IDs
  const propIds = new Set(TARGET_PROPERTIES.map((p) => p.id));
  const procIds = new Set(PROCESS_TYPES.map((p) => p.id));
  for (const id of propIds) {
    assert.ok(!procIds.has(id as unknown as (typeof PROCESS_TYPES)[number]["id"]), `ID ${id} cannot exist in both property and process sets`);
  }
});

test("3. Material Property Lookups: Thermoelectrics Properties Verified", () => {
  const teProps = getPropertiesForMaterial("thermoelectric-materials");
  assert.ok(teProps.length >= 2, "Thermoelectrics must have at least Seebeck and Resistivity");
  assert.ok(teProps.some((p) => p.id === "seebeck-coefficient"));
  assert.ok(teProps.some((p) => p.id === "electrical-resistivity"));
  assert.ok(teProps.some((p) => p.id === "thermal-diffusivity"));
});

test("4. Material Process Lookups: Ceramics Sintering Verified", () => {
  const ceramicProcesses = getProcessesForMaterial("ceramics");
  assert.ok(ceramicProcesses.some((p) => p.id === "sintering"));
});

test("5. Single Recommendation: Thermoelectrics + Seebeck Resolves to ZEM-3", () => {
  const result = findRecommendedSystems({
    materialClass: "thermoelectric-materials",
    targetProperty: "seebeck-coefficient",
  });

  assert.equal(result.hasMatches, true);
  assert.equal(result.recommendedProducts.length, 1);
  assert.equal(result.recommendedProducts[0].id, "advance-riko-zem-3");
  assert.equal(result.verifiedMappings.length, 1);
  assert.equal(result.verifiedMappings[0].provenance, "verified");
  assert.ok(result.verifiedMappings[0].sourceReferences.length > 0);
});

test("6. Multi-System Recommendation: Ceramics + Sintering Resolves Fuji SPS Systems", () => {
  const result = findRecommendedSystems({
    materialClass: "ceramics",
    processType: "sintering",
  });

  assert.equal(result.hasMatches, true);
  assert.ok(result.recommendedProducts.length >= 3, "Must recommend multiple Fuji SPS systems");
  
  const ids = result.recommendedProducts.map((p) => p.id);
  assert.ok(ids.includes("fuji-sps-dr-sinter-lab-jr"));
  assert.ok(ids.includes("fuji-sps-25-series"));
  assert.ok(ids.includes("fuji-sps-standard-research-production"));
});

test("7. Strict Provenance Invariant: Derived Relationships NEVER Recommended as Verified", () => {
  // Polymers + Sintering is registered as a derived mapping
  const result = findRecommendedSystems({
    materialClass: "organic-polymers",
    processType: "sintering",
  });

  assert.equal(result.hasMatches, false, "Derived mapping must not produce verified recommendations");
  assert.equal(result.recommendedProducts.length, 0);
  assert.equal(result.verifiedMappings.length, 0);
  assert.equal(result.derivedMappingsCount, 1, "Must accurately track derivedMappingsCount");
  assert.equal(
    result.emptyReason,
    "No verified system mapping is available for this combination yet."
  );
});

test("8. Canonical Deep-Linking: getProductCanonicalUrl Generates Exact PDP Paths", () => {
  // Verify on all products in active catalogue
  for (const product of allProducts) {
    const url = getProductCanonicalUrl(product);
    assert.equal(
      url,
      `/products/${product.categorySlug}/${product.slug}`,
      `Canonical URL for ${product.id} must be deterministic`
    );
    assert.ok(!url.endsWith("/undefined"), "URL must not contain undefined slug/category");
    assert.ok(url.startsWith("/products/"), "URL must be under /products/");
  }
});

test("9. Mapping Integrity: All Referenced Product IDs Exist in allProducts", () => {
  for (const mapping of APPLICATION_MAPPINGS) {
    for (const prodId of mapping.productIds) {
      const prod = getProductById(prodId);
      assert.ok(prod !== undefined, `Mapping ${mapping.id} references non-existent product ID ${prodId}`);
    }
  }
});

test("10. Provenance Governance: All Verified Mappings Have Non-Empty Sources", () => {
  for (const mapping of APPLICATION_MAPPINGS) {
    if (mapping.provenance === "verified") {
      assert.ok(
        mapping.sourceReferences.length > 0,
        `Verified mapping ${mapping.id} must have at least one source reference`
      );
      assert.ok(
        mapping.sourceReferences.every((s) => s.length > 0),
        `Source references in ${mapping.id} cannot be empty strings`
      );
    }
  }
});

test("11. Thin Films Cross-Plane Thermal Conductivity Resolves TCN-2omega", () => {
  const result = findRecommendedSystems({
    materialClass: "thin-films",
    targetProperty: "thermal-conductivity",
  });

  assert.equal(result.hasMatches, true);
  assert.ok(result.recommendedProducts.some((p) => p.id === "advance-riko-tcn-2omega"));
});

test("12. Empty State Handling: Unselected or Unknown Material Returns Graceful Empty Result", () => {
  const emptyResult = findRecommendedSystems({});
  assert.equal(emptyResult.hasMatches, false);
  assert.equal(emptyResult.recommendedProducts.length, 0);
  assert.ok(emptyResult.emptyReason?.includes("Please select a material class"));
});
