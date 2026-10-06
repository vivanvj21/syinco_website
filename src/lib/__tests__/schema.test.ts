import test from "node:test";
import assert from "node:assert/strict";
import { ProductSchema } from "../schemas";
import { zem3ProductData } from "../../data/products/zem3";

test("Product Schema Validation: Advance Riko ZEM-3 Seed Record", () => {
  // Parsing through Zod schema must succeed without throwing
  const parsed = ProductSchema.parse(zem3ProductData);

  assert.equal(parsed.id, "advance-riko-zem-3");
  assert.equal(parsed.archetype, "scientific-instrument");
  assert.equal(parsed.manufacturer.name, "Advance Riko, Inc.");
  assert.equal(parsed.manufacturer.isOfficialChannelPartner, true);
  assert.equal(parsed.provenance, "verified");

  // Verify specification groups exist
  assert.ok(parsed.specifications.length >= 3);

  // Verify variants
  assert.ok(parsed.variants && parsed.variants.length === 3);
  assert.equal(parsed.variants[0].modelNumber, "ZEM-3M8");
  assert.equal(parsed.variants[1].modelNumber, "ZEM-3M10");
  assert.equal(parsed.variants[2].modelNumber, "ZEM-3-HR");

  // Verify that paid sample analysis is supported
  assert.equal(parsed.supportsPaidSampleAnalysis, true);
});
