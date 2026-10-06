import test from "node:test";
import assert from "node:assert/strict";
import {
  allProducts,
  activeCatalogueProducts,
  getProductById,
  getProductsByCategory,
  getProductsByManufacturer,
  getCategoryBySlug,
  fujiSpsProducts,
} from "../../data/products";
import { ProductSchema } from "../schemas";
import { searchProducts } from "../search";

test("1. Fuji Product Schema Validation: All 5 Families Comply", () => {
  assert.equal(fujiSpsProducts.length, 5, "Must contain exactly 5 Fuji SPS product families");

  for (const prod of fujiSpsProducts) {
    // Must parse cleanly through Zod ProductSchema
    const parsed = ProductSchema.parse(prod);
    assert.equal(parsed.manufacturer.id, "fuji-electronic");
    assert.equal(parsed.manufacturer.name, "Fuji Electronic Industrial Co., Ltd.");
    assert.equal(parsed.manufacturer.isOfficialChannelPartner, false, "Fuji must not be marked official channel partner without verification");
    assert.equal(parsed.provenance, "verified");
    assert.equal(parsed.assetStatus, "needs-authorization");
    assert.ok(parsed.specifications.length >= 2, `${prod.id} must have structured specifications`);
  }
});

test("2. Manufacturer Lookup: Returns Exactly 5 Families for Fuji", () => {
  const byId = getProductsByManufacturer("fuji-electronic");
  assert.equal(byId.length, 5, "getProductsByManufacturer('fuji-electronic') must return 5 families");

  const byAlias = getProductsByManufacturer("fuji-sps");
  assert.equal(byAlias.length, 5, "getProductsByManufacturer('fuji-sps') alias must return 5 families");

  const expectedIds = [
    "fuji-sps-dr-sinter-lab-jr",
    "fuji-sps-25-series",
    "fuji-sps-standard-research-production",
    "fuji-sps-automatic",
    "fuji-sps-mpsl",
  ];

  for (const expId of expectedIds) {
    assert.ok(byId.some((p) => p.id === expId), `Product ${expId} must be present in Fuji lookup`);
  }
});

test("3. Model Variants Resolution: All Named Models Resolve Correctly", () => {
  // DR. SINTER LAB Jr.: MS-1, 212H
  const labJr = getProductById("fuji-sps-dr-sinter-lab-jr");
  assert.ok(labJr && labJr.variants);
  const labJrModels = labJr.variants.map((v) => v.modelNumber);
  assert.deepEqual(labJrModels.sort(), ["212H", "MS-1"].sort());

  // 25 Series: 615, 625, 725, 825, 925
  const series25 = getProductById("fuji-sps-25-series");
  assert.ok(series25 && series25.variants);
  const s25Models = series25.variants.map((v) => v.modelNumber);
  assert.deepEqual(s25Models.sort(), ["615", "625", "725", "825", "925"].sort());

  // Standard Research & Production: 3.20, 5.40, 7.40, 8.40, 9.40, 10.40
  const stdProd = getProductById("fuji-sps-standard-research-production");
  assert.ok(stdProd && stdProd.variants);
  const stdModels = stdProd.variants.map((v) => v.modelNumber);
  assert.deepEqual(stdModels.sort(), ["10.40", "3.20", "5.40", "7.40", "8.40", "9.40"].sort());

  // MPSL: 212HF, 322HF, 632HF, 625HF
  const mpsl = getProductById("fuji-sps-mpsl");
  assert.ok(mpsl && mpsl.variants);
  const mpslModels = mpsl.variants.map((v) => v.modelNumber);
  assert.deepEqual(mpslModels.sort(), ["212HF", "322HF", "625HF", "632HF"].sort());

  // Total named variants across the 4 multi-model families = 2 + 5 + 6 + 4 = 17
  const totalNamedVariants = labJr.variants.length + series25.variants.length + stdProd.variants.length + mpsl.variants.length;
  assert.equal(totalNamedVariants, 17, "Total named model variants must equal 17");
});

test("4. Automatic SPS Naming: No Invented Model Number", () => {
  const autoSps = getProductById("fuji-sps-automatic");
  assert.ok(autoSps);
  assert.equal(autoSps.officialProductName, "Automatic SPS System");
  assert.equal(autoSps.modelSeries, "Automatic SPS");

  // Must not have invented '500 kN class system' as a model number variant
  assert.ok(!autoSps.variants || autoSps.variants.length === 0, "Automatic SPS must have no invented model variants");

  // 500 kN parameter must be stored in specifications
  const maxPressureRow = autoSps.specifications
    .flatMap((g) => g.rows)
    .find((r) => r.parameter === "Maximum Pressure");
  assert.ok(maxPressureRow);
  assert.equal(maxPressureRow.value, "500 kN (51,000 kgf)");
});

test("5. OEM Naming Protection: Zero Titles Begin with 'SYINCO'", () => {
  for (const prod of fujiSpsProducts) {
    assert.ok(!prod.name.startsWith("SYINCO"), `Product name must not start with SYINCO: ${prod.name}`);
    if (prod.officialProductName) {
      assert.ok(!prod.officialProductName.startsWith("SYINCO"), `officialProductName must not start with SYINCO: ${prod.officialProductName}`);
    }
    assert.equal(prod.manufacturer.name, "Fuji Electronic Industrial Co., Ltd.");
  }
});

test("6. Registry Invariants: Zero Duplicate Product IDs or Slugs Across Catalogue", () => {
  // 57 previous products + 85 Edwards = 142 total canonical records (Chino removed)
  assert.equal(allProducts.length, 142, "Total canonical products must be exactly 142");

  const idSet = new Set<string>();
  const slugSet = new Set<string>();

  for (const p of allProducts) {
    assert.ok(!idSet.has(p.id), `Duplicate ID: ${p.id}`);
    assert.ok(!slugSet.has(p.slug), `Duplicate Slug: ${p.slug}`);
    idSet.add(p.id);
    slugSet.add(p.slug);
  }
});

test("7. SPS Taxonomy: Canonical High-Temp Furnaces Category Resolution", () => {
  for (const prod of fujiSpsProducts) {
    assert.equal(prod.categorySlug, "high-temp-furnaces", `${prod.id} categorySlug must be high-temp-furnaces`);
    assert.equal(prod.domain, "high-temp-furnaces", `${prod.id} domain must be high-temp-furnaces`);
    assert.equal(prod.technologySubcategory, "Spark Plasma Sintering");
  }

  const highTempProds = getProductsByCategory("high-temp-furnaces");
  for (const prod of fujiSpsProducts) {
    assert.ok(highTempProds.some((p) => p.id === prod.id), `${prod.id} must be returned by getProductsByCategory('high-temp-furnaces')`);
  }
});

test("8. Discovery Route: /products/spark-plasma-sintering Resolves to Canonical Taxonomy", () => {
  const spsCategory = getCategoryBySlug("spark-plasma-sintering");
  assert.ok(spsCategory, "spark-plasma-sintering slug must resolve");
  assert.equal(spsCategory.slug, "high-temp-furnaces", "Must resolve to canonical category high-temp-furnaces");

  // Querying products by 'spark-plasma-sintering' alias returns high-temp-furnaces products including Fuji
  const spsProds = getProductsByCategory("spark-plasma-sintering");
  assert.ok(spsProds.length >= 5);
  for (const prod of fujiSpsProducts) {
    assert.ok(spsProds.some((p) => p.id === prod.id), `${prod.id} must resolve via spark-plasma-sintering route`);
  }
});

test("9. Instant Search: Fuse.js Matches Key Models and OEM Terms", () => {
  // Model MS-1
  const ms1Results = searchProducts(allProducts, "MS-1");
  assert.ok(ms1Results.length >= 1);
  assert.equal(ms1Results[0].id, "fuji-sps-dr-sinter-lab-jr");

  // Model 212HF
  const mpslResults = searchProducts(allProducts, "212HF");
  assert.ok(mpslResults.length >= 1);
  assert.equal(mpslResults[0].id, "fuji-sps-mpsl");

  // Model 615
  const m615Results = searchProducts(allProducts, "615");
  assert.ok(m615Results.length >= 1);
  assert.equal(m615Results[0].id, "fuji-sps-25-series");

  // Model 925
  const m925Results = searchProducts(allProducts, "925");
  assert.ok(m925Results.length >= 1);
  assert.equal(m925Results[0].id, "fuji-sps-25-series");

  // DR. SINTER
  const drSinterResults = searchProducts(allProducts, "DR. SINTER");
  assert.ok(drSinterResults.length >= 1);
  assert.equal(drSinterResults[0].id, "fuji-sps-dr-sinter-lab-jr");

  // SPS
  const spsResults = searchProducts(allProducts, "Spark Plasma Sintering");
  assert.ok(spsResults.length >= 5);
});

test("10. Image Governance: All Fuji Assets Flagged 'needs-authorization'", () => {
  for (const prod of fujiSpsProducts) {
    assert.equal(prod.assetStatus, "needs-authorization", `${prod.id} assetStatus must be needs-authorization`);
    assert.ok(prod.imageSourceUrl, `${prod.id} must retain imageSourceUrl`);
    assert.ok(prod.imageSourceUrl.startsWith("https://fdc.co.jp/"), `${prod.id} imageSourceUrl must point to fdc.co.jp`);
    assert.ok(prod.heroImage.url.startsWith("/images/products/fuji-sps/"), `${prod.id} heroImage must point to local verified Fuji asset`);
  }
});

test("11. Strict Source Traceability: Every Key Metric Highlights Has Provenance & Source URL", () => {
  for (const prod of fujiSpsProducts) {
    assert.ok(prod.keyMetricHighlights && prod.keyMetricHighlights.length >= 3, `${prod.id} must have >= 3 keyMetricHighlights`);
    for (const metric of prod.keyMetricHighlights!) {
      assert.ok(metric.label, "Metric must have label");
      assert.ok(metric.value, "Metric must have value");
      assert.ok(metric.sourceUrl, `Metric ${metric.label} on ${prod.id} must have sourceUrl`);
      assert.ok(metric.sourceUrl!.startsWith("https://fdc.co.jp/sps/"), `Metric sourceUrl must start with fdc.co.jp/sps/`);
      assert.ok(metric.sourceTableRef, `Metric ${metric.label} on ${prod.id} must have sourceTableRef`);
      assert.equal(metric.provenance, "verified", `Metric ${metric.label} on ${prod.id} must be verified`);
    }
  }
});

test("12. Multi-OEM Portfolio Balance: All 3 OEMs Accessible via Filtering", () => {
  const arProds = getProductsByManufacturer("advance-riko");
  assert.equal(arProds.length, 48, "Advance Riko active products must equal 48");

  const edwardsProds = getProductsByManufacturer("edwards-vacuum");
  assert.equal(edwardsProds.length, 86, "Edwards active products must equal 86");

  const fujiProds = getProductsByManufacturer("fuji-electronic");
  assert.equal(fujiProds.length, 5, "Fuji active products must equal 5");

  // Total active catalogue products = 48 + 86 + 5 = 139
  assert.equal(activeCatalogueProducts.length, 139, "Total active catalogue products must equal 139");
});

test("13. RFQ Behavior: Fuji Systems Map to Capital Equipment or Custom-Engineered", () => {
  for (const prod of fujiSpsProducts) {
    assert.ok(
      prod.rfqBehavior === "capital-equipment" || prod.rfqBehavior === "custom-engineered",
      `${prod.id} RFQ behavior must be capital-equipment or custom-engineered`
    );
    assert.equal(prod.archetype, "scientific-instrument");
  }

  // Automated and MPSL are custom-engineered
  assert.equal(getProductById("fuji-sps-automatic")?.rfqBehavior, "custom-engineered");
  assert.equal(getProductById("fuji-sps-mpsl")?.rfqBehavior, "custom-engineered");

  // Standard and 25 series and LAB Jr are capital-equipment
  assert.equal(getProductById("fuji-sps-dr-sinter-lab-jr")?.rfqBehavior, "capital-equipment");
  assert.equal(getProductById("fuji-sps-25-series")?.rfqBehavior, "capital-equipment");
  assert.equal(getProductById("fuji-sps-standard-research-production")?.rfqBehavior, "capital-equipment");
});
