import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { allProducts } from '@/data/products';

test('Fuji SPS End-to-End Verification Test Suite', async (t) => {
  const fujiProducts = allProducts.filter((p) => p.manufacturer.id === 'fuji-electronic');

  await t.test('1. Total Count: Exactly 5 Canonical Fuji SPS Product Families Registered', () => {
    assert.equal(
      fujiProducts.length,
      5,
      'Fuji SPS catalogue must contain exactly 5 canonical product families matching official OEM structure'
    );

    const expectedIds = [
      'fuji-sps-dr-sinter-lab-jr',
      'fuji-sps-25-series',
      'fuji-sps-standard-research-production',
      'fuji-sps-automatic',
      'fuji-sps-mpsl',
    ];

    for (const expId of expectedIds) {
      assert.ok(
        fujiProducts.some((p) => p.id === expId),
        `Product family ${expId} must exist in active catalogue`
      );
    }
  });

  await t.test('2. Documentation Invariant: Fuji SPS Products Have Zero Synthetic Stubs (Only Edwards Has Official OEM Downloads)', () => {
    for (const p of fujiProducts) {
      assert.ok(
        !p.documents || p.documents.length === 0,
        `Fuji SPS product ${p.id} must have empty documents (only Edwards maintains original authentic OEM brochures), found ${p.documents?.length}`
      );
    }
  });

  await t.test('4. Technical Specifications: Every Fuji SPS Product has Populated Specification Groups', () => {
    for (const p of fujiProducts) {
      assert.ok(
        p.specifications && p.specifications.length >= 3,
        `Product ${p.id} must have at least 3 specification groups (Press, Chamber, Pulse Generator)`
      );

      const totalRows = p.specifications.reduce((sum, g) => sum + g.rows.length, 0);
      assert.ok(
        totalRows >= 5,
        `Product ${p.id} must have at least 5 specification parameters, found ${totalRows}`
      );
    }
  });

  await t.test('5. Model Variants: All Multi-Configuration Families Have Valid Structured Variants', () => {
    // 1. DR. SINTER LAB Jr.
    const labJr = fujiProducts.find((p) => p.id === 'fuji-sps-dr-sinter-lab-jr');
    assert.ok(labJr && labJr.variants && labJr.variants.length >= 2);
    const labJrModels = labJr.variants.map((v) => v.modelNumber);
    assert.ok(labJrModels.includes('MS-1'), 'DR. SINTER LAB Jr. must include MS-1');
    assert.ok(labJrModels.includes('212H'), 'DR. SINTER LAB Jr. must include 212H');

    // 2. 25 Series
    const s25 = fujiProducts.find((p) => p.id === 'fuji-sps-25-series');
    assert.ok(s25 && s25.variants && s25.variants.length === 5);
    const s25Models = s25.variants.map((v) => v.modelNumber);
    assert.deepEqual(s25Models.sort(), ['615', '625', '725', '825', '925'].sort());

    // 3. Standard Research & Production
    const std = fujiProducts.find((p) => p.id === 'fuji-sps-standard-research-production');
    assert.ok(std && std.variants && std.variants.length === 6);
    const stdModels = std.variants.map((v) => v.modelNumber);
    assert.deepEqual(stdModels.sort(), ['10.40', '3.20', '5.40', '7.40', '8.40', '9.40'].sort());

    // 4. MPSL
    const mpsl = fujiProducts.find((p) => p.id === 'fuji-sps-mpsl');
    assert.ok(mpsl && mpsl.variants && mpsl.variants.length === 4);
    const mpslModels = mpsl.variants.map((v) => v.modelNumber);
    assert.deepEqual(mpslModels.sort(), ['212HF', '322HF', '625HF', '632HF'].sort());
  });

  await t.test('6. Delivery & Documentation: Comprehensive Scope of Delivery Configured', () => {
    for (const p of fujiProducts) {
      assert.ok(
        p.scopeOfDeliveryPoints && p.scopeOfDeliveryPoints.length >= 5,
        `Product ${p.id} must have >= 5 scope of delivery points for the Delivery & Documentation tab`
      );
      assert.ok(
        p.scopeOfDeliveryPoints.some((pt) => /furnace|chamber|press/i.test(pt)),
        `Product ${p.id} delivery scope must include core furnace/press hardware`
      );
      assert.ok(
        p.scopeOfDeliveryPoints.some((pt) => /commissioning|warranty|hyderabad/i.test(pt)),
        `Product ${p.id} delivery scope must include domestic support and commissioning`
      );
    }
  });
});
