import test from "node:test";
import assert from "node:assert/strict";
import { allProducts, activeCatalogueProducts } from "@/data/products";
import {
  getProductPrincipal,
  getDisplayProductName,
  getProductType,
  getShortDescription,
} from "@/lib/product-display";

test("Product Catalogue Redesign — Level 1 Visual Hierarchy Invariants", async (t) => {
  await t.test("1. Specific Reference Flagships Match Prompt Contract Exactly", () => {
    // 1. ZEM-3
    const zem3 = allProducts.find((p) => p.id === "advance-riko-zem-3");
    assert.ok(zem3, "ZEM-3 must exist in catalogue");
    assert.equal(getProductPrincipal(zem3), "ADVANCE RIKO");
    assert.equal(getDisplayProductName(zem3), "ZEM-3");
    assert.equal(getProductType(zem3), "Thermoelectric Evaluation System");
    assert.equal(
      getShortDescription(zem3),
      "System for measuring thermoelectric material properties across controlled temperatures."
    );

    // 2. nXDS Series
    const nxds = allProducts.find((p) => p.id === "edwards-nxds-series");
    assert.ok(nxds, "nXDS Series must exist in catalogue");
    assert.equal(getProductPrincipal(nxds), "EDWARDS VACUUM");
    assert.equal(getDisplayProductName(nxds), "nXDS Series");
    assert.equal(getProductType(nxds), "Dry Scroll Vacuum Pump");
    assert.equal(
      getShortDescription(nxds),
      "Oil-free dry scroll vacuum pumping for clean laboratory and industrial applications."
    );

    // 3. Dr. Sinter Lab Jr.
    const labJr = allProducts.find((p) => p.id === "fuji-sps-dr-sinter-lab-jr");
    assert.ok(labJr, "Dr. Sinter Lab Jr. must exist in catalogue");
    assert.equal(getProductPrincipal(labJr), "FUJI-SPS");
    assert.equal(getDisplayProductName(labJr), "Dr. Sinter Lab Jr.");
    assert.equal(getProductType(labJr), "Desktop Spark Plasma Sintering System");
    assert.equal(
      getShortDescription(labJr),
      "Compact SPS equipment for laboratory-scale materials processing and research."
    );
  });

  await t.test("2. Every Active Product Possesses Valid Level 1 Presentation Attributes", () => {
    const vagueLabels = [
      "Advanced Solution",
      "High Performance System",
      "Innovative Technology",
      "Premium Equipment",
      "Scientific Instrument",
    ];

    for (const p of activeCatalogueProducts) {
      const principal = getProductPrincipal(p);
      const name = getDisplayProductName(p);
      const equipmentType = getProductType(p);
      const shortDesc = getShortDescription(p);

      assert.ok(principal.length > 0, `Principal required for ${p.id}`);
      assert.ok(["EDWARDS VACUUM", "ADVANCE RIKO", "FUJI-SPS"].includes(principal), `Valid principal for ${p.id}: ${principal}`);
      assert.ok(name.length > 0, `Display name required for ${p.id}`);
      assert.ok(equipmentType.length > 0, `Equipment type required for ${p.id}`);
      assert.ok(!vagueLabels.includes(equipmentType), `Equipment type must not be vague for ${p.id}: ${equipmentType}`);
      assert.ok(shortDesc.length > 0, `Short description required for ${p.id}`);
      assert.ok(shortDesc.length <= 150, `Short description must be concise for ${p.id}: ${shortDesc.length} chars`);
    }
  });

  await t.test("3. Permanent Removal of Chino Verified Across Entire Catalogue", () => {
    const chinoMatches = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes("chino") ||
        p.manufacturer.name.toLowerCase().includes("chino") ||
        p.manufacturer.id.toLowerCase().includes("chino") ||
        p.id.toLowerCase().includes("chino")
    );
    assert.equal(chinoMatches.length, 0, "No Chino products should exist");
  });
});
