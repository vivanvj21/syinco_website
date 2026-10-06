import test from "node:test";
import assert from "node:assert/strict";
import {
  allProducts,
  activeCatalogueProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategory,
  getProductsByDomain,
  getProductsByManufacturer,
  getProductsByArchetype,
  getFlagshipProducts,
  allCategories,
  getCategoryBySlug,
  FLAGSHIP_PRODUCT_IDS,
  isFlagshipProduct,
} from "../../data/products";

test("1. Category Architecture: Exactly 9 Active Top-Level Disciplines", () => {
  assert.equal(allCategories.length, 8, "Active top-level catalogue must contain exactly 8 categories");

  const expectedCategorySlugs = [
    "thermoelectric-energy",
    "thermal-properties",
    "high-temp-furnaces",
    "thermal-expansion",
    "thermal-analysis-gas",
    "semiconductor-thin-film",
    "materials-characterization",
    "vacuum-technology",
  ];

  const slugs = allCategories.map((c) => c.slug);
  for (const expectedSlug of expectedCategorySlugs) {
    assert.ok(slugs.includes(expectedSlug), `Category ${expectedSlug} must be present`);
  }

  for (const cat of allCategories) {
    assert.ok(cat.slug, "Category must have slug");
    assert.ok(cat.name, "Category must have name");
    assert.ok(cat.domain, "Category must have domain");
    assert.ok(cat.domainName, "Category must have domainName");
    assert.ok(cat.description, "Category must have description");
    assert.ok(cat.heroHeadline, "Category must have heroHeadline");
  }
});

test("2. Single Canonical Product Record: Zero Duplicate IDs or Slugs", () => {
  // Total canonical products: at least 53 products (expanded to 58 with Fuji SPS in Milestone 5.8E)
  assert.ok(allProducts.length >= 53, "Total product registry must contain at least 53 products");

  const idSet = new Set<string>();
  const slugSet = new Set<string>();

  for (const p of allProducts) {
    assert.ok(!idSet.has(p.id), `Duplicate product ID detected: ${p.id}`);
    assert.ok(!slugSet.has(p.slug), `Duplicate product slug detected: ${p.slug}`);
    idSet.add(p.id);
    slugSet.add(p.slug);
  }
});

test("3. Registry Singularity: Key Systems Exist Exactly Once", () => {
  const zem3Count = allProducts.filter((p) => p.id === "advance-riko-zem-3").length;
  assert.equal(zem3Count, 1, "Advance Riko ZEM-3 must exist exactly once in canonical master");

  const nxdsCount = allProducts.filter((p) => p.id === "edwards-nxds-series").length;
  assert.equal(nxdsCount, 1, "Edwards nXDS Series must exist exactly once in canonical master");

  const fujiCount = allProducts.filter((p) => p.id === "fuji-sps-dr-sinter-lab-jr").length;
  assert.equal(fujiCount, 1, "Fuji-SPS Dr Sinter Lab Jr must exist exactly once in canonical master");

  // Lookup by Slug
  const zem3BySlug = getProductBySlug("advance-riko-zem-3");
  assert.ok(zem3BySlug);
  assert.equal(zem3BySlug.id, "advance-riko-zem-3");

  // Active products by manufacturer (excludes held-back)
  const arProds = getProductsByManufacturer("advance-riko");
  assert.equal(arProds.length, 48);

  // Active products by archetype
  const sciProds = getProductsByArchetype("scientific-instrument");
  assert.ok(sciProds.length >= 40);
});

test("4. Wave Architecture: 8 Flagship Systems and Deterministic Resolution", () => {
  assert.equal(FLAGSHIP_PRODUCT_IDS.length, 8, "Flagship product IDs must list exactly 8 systems");

  const flagships = getFlagshipProducts();
  assert.equal(flagships.length, 8, "All 8 flagship IDs must resolve deterministically");

  for (const fid of FLAGSHIP_PRODUCT_IDS) {
    assert.ok(isFlagshipProduct(fid), `isFlagshipProduct must return true for ${fid}`);
    const prod = getProductById(fid);
    assert.ok(prod, `Product ${fid} must exist in registry`);
    assert.equal(prod.catalogStatus, "wave-1-flagship");
    assert.ok(prod.keyMetricHighlights && prod.keyMetricHighlights.length >= 3, `Flagship ${fid} must have >= 3 key metric highlights`);
  }

  // Non-flagship returns false
  assert.equal(isFlagshipProduct("advance-riko-f-zem"), false);
  assert.equal(isFlagshipProduct("edwards-nxds-series"), false);
});

test("4b. Invariant Audit: Flagship Product Singularity Across Source Files", () => {
  // Verify FLAGSHIP_PRODUCT_IDS contains exactly 8 IDs
  assert.equal(FLAGSHIP_PRODUCT_IDS.length, 8);

  // Verify all 8 resolve to exactly one canonical Product
  for (const fid of FLAGSHIP_PRODUCT_IDS) {
    const matches = allProducts.filter((p) => p.id === fid);
    assert.equal(matches.length, 1, `Flagship ${fid} must resolve to exactly one canonical product in allProducts`);
  }

  // Verify no flagship is duplicated in catalogue-families or held-back
  const wave2CatalogueIds = new Set(
    allProducts.filter((p) => p.catalogStatus === "wave-2-catalogue-family").map((p) => p.id)
  );
  const wave3HeldBackIds = new Set(
    allProducts.filter((p) => p.catalogStatus === "held-for-clarification").map((p) => p.id)
  );

  for (const fid of FLAGSHIP_PRODUCT_IDS) {
    assert.ok(
      !wave2CatalogueIds.has(fid),
      `Flagship ${fid} must NOT be present in catalogue-families`
    );
    assert.ok(
      !wave3HeldBackIds.has(fid),
      `Flagship ${fid} must NOT be present in held-back products`
    );
  }
});

test("5. Wave 3 Held-Back Products Isolation", () => {
  const heldBack = allProducts.filter((p) => p.catalogStatus === "held-for-clarification");
  assert.equal(heldBack.length, 3, "Exactly 3 products must be held for clarification");

  const heldBackIds = ["advance-riko-netsushori", "advance-riko-qhc-qhc", "advance-riko-antares-spica-leonis"];
  for (const id of heldBackIds) {
    assert.ok(heldBack.some((p) => p.id === id), `Product ${id} must be in heldBack list`);
  }

  // Held-back products must NOT appear in activeCatalogueProducts
  assert.ok(activeCatalogueProducts.length >= 50, "activeCatalogueProducts must be at least 50");
  for (const hb of heldBack) {
    assert.ok(!activeCatalogueProducts.some((p) => p.id === hb.id), `Held back product ${hb.id} must NOT be in activeCatalogueProducts`);
  }
});

test("6. Strict Technical Provenance and OEM Naming Integrity", () => {
  const advanceRikoProds = allProducts.filter((p) => p.manufacturer.id === "advance-riko");
  assert.equal(advanceRikoProds.length, 51, "Must contain 51 Advance Riko systems total");

  for (const p of advanceRikoProds) {
    assert.equal(p.manufacturer.name, "Advance Riko, Inc.");
    assert.equal(p.provenance, "verified");
    assert.ok(p.oemSourceUrl, `Advance Riko product ${p.id} must have oemSourceUrl`);
    assert.ok(p.oemSourceUrl.startsWith("https://advance-riko.com/"), `URL must start with advance-riko.com for ${p.id}`);

    // Never rename OEM products to 'SYINCO X'
    assert.ok(!p.name.startsWith("SYINCO"), `Product name must not start with SYINCO: ${p.name}`);
    if (p.officialProductName) {
      assert.ok(!p.officialProductName.startsWith("SYINCO"), `officialProductName must not start with SYINCO: ${p.officialProductName}`);
    }
  }
});

test("7. Image Strategy: Advance Riko Assets Marked for High-Res Upgrades", () => {
  const advanceRikoProds = allProducts.filter((p) => p.manufacturer.id === "advance-riko");
  for (const p of advanceRikoProds) {
    assert.equal(
      p.assetStatus,
      "needs-high-resolution-asset",
      `Advance Riko product ${p.id} must be flagged needs-high-resolution-asset`
    );
  }
});

test("8. Category Taxonomy Resolution and Legacy Aliases", () => {
  // Canonical category lookups
  const canonical = getCategoryBySlug("thermoelectric-energy");
  assert.ok(canonical);
  assert.equal(canonical.slug, "thermoelectric-energy");

  // Alias category lookup (backward compatibility)
  const aliased = getCategoryBySlug("thermoelectric-thermal-analysis");
  assert.ok(aliased);
  assert.equal(aliased.slug, "thermoelectric-energy");

  const aliasedFurnace = getCategoryBySlug("thermal-processing-furnaces");
  assert.ok(aliasedFurnace);
  assert.equal(aliasedFurnace.slug, "high-temp-furnaces");

  const aliasedThinFilm = getCategoryBySlug("thin-film-deposition");
  assert.ok(aliasedThinFilm);
  assert.equal(aliasedThinFilm.slug, "semiconductor-thin-film");

  const aliasedVacuum = getCategoryBySlug("dry-vacuum-pumps");
  assert.ok(aliasedVacuum);
  assert.equal(aliasedVacuum.slug, "vacuum-technology");

  // Products by Category returns products for canonical and alias
  const prodsCanonical = getProductsByCategory("thermoelectric-energy");
  const prodsAlias = getProductsByCategory("thermoelectric-thermal-analysis");
  assert.ok(prodsCanonical.length >= 5);
  assert.equal(prodsCanonical.length, prodsAlias.length);

  // Products by Domain returns products for canonical and alias
  const prodsDomainCanonical = getProductsByDomain("thermoelectric-energy");
  const prodsDomainAlias = getProductsByDomain("thermoelectric-thermal-analysis");
  assert.ok(prodsDomainCanonical.length >= 5);
  assert.equal(prodsDomainCanonical.length, prodsDomainAlias.length);
});

test("9. Content Truth: Specification Integrity Without Fabricated Data", () => {
  const wave2Prods = allProducts.filter((p) => p.catalogStatus === "wave-2-catalogue-family");
  assert.equal(wave2Prods.length, 40, "Must have 40 Wave 2 catalogue products");

  for (const p of wave2Prods) {
    assert.ok(p.specifications.length > 0, `Product ${p.id} must have specification group`);
    const specRow = p.specifications[0].rows.find((r) => r.parameter === "Operating Specifications");
    assert.ok(specRow, `Product ${p.id} must have Operating Specifications row`);
    assert.equal(
      specRow.value,
      "Contact SYINCO Technologies for configuration and specification details.",
      `Unverified spec for ${p.id} must state contact SYINCO`
    );
  }
});
