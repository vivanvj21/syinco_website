import fs from 'fs';
import { wave1FlagshipProducts } from '../src/data/products/wave1-flagships';
import { wave2CatalogueFamilyProducts } from '../src/data/products/catalogue-families';
import { wave3HeldBackProducts } from '../src/data/products/held-back';
import { parseProductEnrichment } from './test-spec-parser';

function formatObject(obj: any): string {
  return JSON.stringify(obj, null, 2);
}

function enrichList(products: any[]) {
  return products.map(p => {
    if (p.manufacturer.id !== 'advance-riko') return p;
    const enriched = parseProductEnrichment(p);
    
    const updated = { ...p };
    updated.specifications = enriched.specifications;
    if (enriched.variants) {
      updated.variants = enriched.variants;
    }
    updated.documents = enriched.documents;
    return updated;
  });
}

// 1. Enrich wave1-flagships
const enrichedWave1 = enrichList(wave1FlagshipProducts);
const wave1FileContent = `import type { Product } from "@/types/product";

/**
 * SYINCO TECHNOLOGIES — Wave 1 Flagship Products Data
 * OEM Principal: Advance Riko, Inc. (Yokohama, Japan)
 * Strict Rule: Never rename an OEM product.
 * Fully enriched with verified OEM specifications, model variants, and documentation.
 */
export const wave1FlagshipProducts: Product[] = ${formatObject(enrichedWave1)};
`;

fs.writeFileSync('src/data/products/wave1-flagships.ts', wave1FileContent);
console.log('Successfully enriched wave1-flagships.ts');

// 2. Enrich held-back
const enrichedHeldBack = enrichList(wave3HeldBackProducts);
const heldBackFileContent = `import type { Product } from "@/types/product";

/**
 * SYINCO TECHNOLOGIES — Wave 3 Held-Back Ambiguous Systems
 * Strictly held for specification clarification. Excluded from normal catalogue discovery.
 * Fully enriched with verified OEM specifications and documentation.
 */
export const wave3HeldBackProducts: Product[] = ${formatObject(enrichedHeldBack)};
`;

fs.writeFileSync('src/data/products/held-back.ts', heldBackFileContent);
console.log('Successfully enriched held-back.ts');

// 3. Enrich catalogue-families
const enrichedCatalogue = enrichList(wave2CatalogueFamilyProducts);
const catalogueFileContent = `import type { Product } from "@/types/product";

/**
 * SYINCO TECHNOLOGIES — Wave 2 Catalogue Product Families & Wave 3 Held Records
 * OEM Principal: Advance Riko, Inc. (Yokohama, Japan)
 * Strict Provenance: Unaltered OEM names, verified specifications, model variants, and documentation.
 */
export const wave2CatalogueFamilyProducts: Product[] = ${formatObject(enrichedCatalogue)};
`;

fs.writeFileSync('src/data/products/catalogue-families.ts', catalogueFileContent);
console.log('Successfully enriched catalogue-families.ts');
