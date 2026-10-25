import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { allProducts } from '@/data/products';

test('Advance Riko End-to-End Verification Test Suite', async (t) => {
  const arProducts = allProducts.filter((p) => p.manufacturer.id === 'advance-riko');

  await t.test('1. Total Count: Exactly 51 Advance Riko Products Registered', () => {
    assert.equal(arProducts.length, 51, 'Advance Riko catalogue must have exactly 51 products matching the official OEM catalog');
  });

  await t.test('2. Documentation Invariant: Advance Riko Products Have Zero Synthetic Stubs (Only Edwards Has Official OEM Downloads)', () => {
    for (const p of arProducts) {
      assert.ok(
        !p.documents || p.documents.length === 0,
        `Advance Riko product ${p.id} must have empty documents (only Edwards maintains original authentic OEM brochures), found ${p.documents?.length}`
      );
    }
  });

  await t.test('4. Technical Specifications: Every Advance Riko Product has Populated Specification Groups', () => {
    for (const p of arProducts) {
      assert.ok(
        p.specifications && p.specifications.length >= 1,
        `Product ${p.id} must have at least 1 specification group`
      );

      const totalRows = p.specifications.reduce((sum, g) => sum + g.rows.length, 0);
      assert.ok(
        totalRows >= 2,
        `Product ${p.id} must have at least 2 specification parameters, found ${totalRows}`
      );
    }
  });

  await t.test('5. Model Variants: Multi-Configuration Products Have Valid Structured Variants', () => {
    const multiVariantFlagships = ['advance-riko-zem-3', 'advance-riko-rta', 'advance-riko-tms'];
    for (const id of multiVariantFlagships) {
      const prod = arProducts.find((p) => p.id === id);
      assert.ok(prod, `Product ${id} must exist`);
      assert.ok(prod.variants && prod.variants.length >= 3, `Product ${id} must have at least 3 variants`);
      for (const v of prod.variants) {
        assert.ok(v.modelNumber, `Variant in ${id} must have modelNumber`);
        assert.ok(Object.keys(v.keySpecs).length > 0, `Variant ${v.modelNumber} in ${id} must have keySpecs`);
      }
    }
  });
});
