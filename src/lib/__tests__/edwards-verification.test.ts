import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { allProducts } from '@/data/products';
import { getProductOemCategory } from '@/data/oem-categories';

test('Edwards Vacuum End-to-End Verification Test Suite', async (t) => {
  const edwardsProducts = allProducts.filter((p) => p.manufacturer.id === 'edwards-vacuum');

  await t.test('1. Total Count: Exactly 86 Edwards Products Registered', () => {
    assert.equal(
      edwardsProducts.length,
      86,
      'Edwards Vacuum catalogue must have exactly 86 products across all vacuum technology categories'
    );
  });

  await t.test('2. Documentation: Every Edwards Product has >= 2 Downloadable Documents', () => {
    for (const p of edwardsProducts) {
      assert.ok(
        p.documents && p.documents.length >= 2,
        `Product ${p.id} (${p.name}) must have at least 2 documents, found ${p.documents?.length || 0}`
      );

      const hasDatasheet = p.documents.some((d) => d.type === 'datasheet');
      const hasBrochure = p.documents.some((d) => d.type === 'brochure');

      assert.ok(hasDatasheet, `Product ${p.id} must have a technical datasheet`);
      assert.ok(hasBrochure, `Product ${p.id} must have a system brochure`);
    }
  });

  await t.test('3. Document Physical Integrity: All Linked Documents Are Locally Hosted Authentic PDFs', () => {
    for (const p of edwardsProducts) {
      for (const doc of p.documents) {
        assert.ok(
          doc.fileUrl.startsWith('/documents/edwards/'),
          `Document URL must be locally hosted in /documents/edwards/, found: ${doc.fileUrl} in ${p.id}`
        );
        const absolutePath = path.join(process.cwd(), 'public', doc.fileUrl.replace(/^\//, ''));
        assert.ok(fs.existsSync(absolutePath), `Document file must exist on disk: ${absolutePath}`);
        const stat = fs.statSync(absolutePath);
        assert.ok(stat.size > 10000, `Authentic OEM PDF must be > 10KB, found: ${stat.size} bytes for ${doc.fileUrl}`);
        
        // Check magic bytes
        const buf = Buffer.alloc(5);
        const fd = fs.openSync(absolutePath, 'r');
        fs.readSync(fd, buf, 0, 5, 0);
        fs.closeSync(fd);
        assert.equal(buf.toString(), '%PDF-', `File must be a genuine PDF: ${absolutePath}`);

        assert.ok(doc.title && doc.title.length > 5, `Document in ${p.id} must have descriptive title: ${doc.title}`);
        assert.equal(doc.format, 'pdf', `Document format must be pdf`);
      }
    }
  });

  await t.test('4. Technical Specifications: Every Edwards Product has Populated Authentic Specifications', () => {
    for (const p of edwardsProducts) {
      assert.ok(
        p.specifications && p.specifications.length >= 1,
        `Product ${p.id} must have at least 1 specification group`
      );

      const totalRows = p.specifications.reduce((sum, g) => sum + g.rows.length, 0);
      assert.ok(
        totalRows >= 2,
        `Product ${p.id} must have at least 2 specification parameters, found ${totalRows}`
      );

      // Verify zero placeholder text
      for (const g of p.specifications) {
        for (const r of g.rows) {
          const val = String(r.value).toLowerCase();
          assert.ok(!val.includes('contact syinco for configuration'), `Product ${p.id} must have authentic spec value, found placeholder: ${r.value}`);
        }
      }
    }
  });

  await t.test('5. Model Variants: Every Edwards Product has Structured Model Variants', () => {
    for (const p of edwardsProducts) {
      assert.ok(
        p.variants && p.variants.length >= 1,
        `Product ${p.id} must have structured model variants`
      );
      for (const v of p.variants) {
        assert.ok(v.modelNumber, `Variant in ${p.id} must have modelNumber`);
        assert.ok(v.description, `Variant in ${p.id} must have description`);
        assert.ok(v.keySpecs && Object.keys(v.keySpecs).length > 0, `Variant in ${p.id} must have keySpecs`);
      }
    }
  });

  await t.test('6. Categorical Distribution across Vacuum Technology Domains', () => {
    const counts: Record<string, number> = {};
    for (const p of edwardsProducts) {
      const cat = getProductOemCategory(p);
      counts[cat] = (counts[cat] || 0) + 1;
    }

    assert.equal(counts['vacuum-pumps'], 51, 'Must have 51 vacuum pump families');
    assert.equal(counts['measurement-and-control'], 19, 'Must have 19 measurement and control families');
    assert.equal(counts['valves'], 8, 'Must have 8 valve families');
    assert.equal(counts['leak-detectors'], 5, 'Must have 5 leak detector families');
    assert.equal(counts['hardware-and-fitting'], 3, 'Must have 3 hardware and fitting families');
  });
});
