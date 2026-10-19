import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { OEM_CATEGORIES, getProductOemCategory } from '../../data/oem-categories';
import { activeCatalogueProducts } from '../../data/products/index';

describe('OEM Product Categories Mapping & Hierarchy Invariants', () => {
  it('Edwards Vacuum strictly matches user specified category list', () => {
    const edwardsCategories = OEM_CATEGORIES['edwards-vacuum'];
    assert.ok(edwardsCategories, 'Edwards categories must be defined');

    const expectedNames = [
      'Vacuum Pumps',
      'Measurement and Control',
      'Leak Detectors',
      'Valves',
      'Hardware & Fitting',
      'Products Software',
    ];

    const actualNames = edwardsCategories.map((c) => c.name);
    assert.deepEqual(actualNames, expectedNames);
  });

  it('Advance Riko and Fuji-SPS categories are fully configured', () => {
    assert.ok(OEM_CATEGORIES['advance-riko'].length > 0);
    assert.ok(OEM_CATEGORIES['fuji-electronic'].length > 0);
  });

  it('All active catalogue products deterministically resolve to a valid OEM category', () => {
    assert.ok(activeCatalogueProducts.length > 0);

    const unmapped: string[] = [];
    activeCatalogueProducts.forEach((product) => {
      const categoryId = getProductOemCategory(product);
      assert.ok(categoryId, `Product ${product.id} must have a category`);

      const vendorId = product.manufacturer.id;
      const validCategories = OEM_CATEGORIES[vendorId] || [];
      const isValid = validCategories.some((c) => c.id === categoryId);

      if (!isValid) {
        unmapped.push(`${product.name} (${vendorId}) -> ${categoryId}`);
      }
    });

    assert.equal(
      unmapped.length,
      0,
      `All products must map to a valid category in their OEM group. Unmapped: ${unmapped.join(', ')}`
    );
  });

  it('Edwards products are properly segregated across pumps, gauges, leak detectors, valves, and hardware', () => {
    const edwardsProducts = activeCatalogueProducts.filter((p) => p.manufacturer.id === 'edwards-vacuum');
    const categoryCounts: Record<string, number> = {};

    edwardsProducts.forEach((p) => {
      const cat = getProductOemCategory(p);
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    assert.ok((categoryCounts['vacuum-pumps'] || 0) > 0, 'Must have vacuum pumps');
    assert.ok((categoryCounts['measurement-and-control'] || 0) > 0, 'Must have measurement and control');
    assert.ok((categoryCounts['leak-detectors'] || 0) > 0, 'Must have leak detectors');
    assert.ok((categoryCounts['valves'] || 0) > 0, 'Must have valves');
    assert.ok((categoryCounts['hardware-and-fitting'] || 0) > 0, 'Must have hardware and fittings');
  });
});
