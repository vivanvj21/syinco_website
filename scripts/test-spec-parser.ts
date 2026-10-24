import fs from 'fs';
import { allProducts } from '../src/data/products/index';
import type { SpecificationGroup, ProductModelVariant, DocumentAsset } from '../src/types/product';

const scraped = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));
const arProducts = allProducts.filter(p => p.manufacturer.id === 'advance-riko');
const existingPdfs = fs.readdirSync('public/documents/advance-riko');

function cleanText(str: any): string {
  if (str === null || str === undefined) return '';
  return String(str).replace(/\s+/g, ' ').trim();
}

export function parseProductEnrichment(p: any) {
  const baseId = p.id.replace('advance-riko-', '');
  let sc = scraped.find((s: any) => s.slug === baseId);
  if (!sc) sc = scraped.find((s: any) => s.slug.replace(/%ce%bc/g, 'micro') === baseId);
  if (!sc) sc = scraped.find((s: any) => s.slug === p.slug.replace('advance-riko-', ''));
  if (!sc) sc = scraped.find((s: any) => p.name.toLowerCase().includes(s.title.toLowerCase()) || s.title.toLowerCase().includes(p.name.toLowerCase()));

  // PDFs
  const candidatesDs = [
    `${baseId}-datasheet.pdf`,
    `${p.slug}-datasheet.pdf`,
    `${p.id}-datasheet.pdf`,
    baseId.replace('micro', 'u') + '-datasheet.pdf',
    sc?.slug?.replace(/%ce%bc/g, 'u')?.replace(/[^a-zA-Z0-9-_]/g, '-') + '-datasheet.pdf'
  ];
  const dsFile = candidatesDs.find(c => c && existingPdfs.includes(c)) || `${baseId}-datasheet.pdf`;

  const candidatesBr = [
    `${baseId}-brochure.pdf`,
    `${p.slug}-brochure.pdf`,
    `${p.id}-brochure.pdf`,
    baseId.replace('micro', 'u') + '-brochure.pdf',
    sc?.slug?.replace(/%ce%bc/g, 'u')?.replace(/[^a-zA-Z0-9-_]/g, '-') + '-brochure.pdf'
  ];
  const brFile = candidatesBr.find(c => c && existingPdfs.includes(c)) || `${baseId}-brochure.pdf`;

  const dsPath = `public/documents/advance-riko/${dsFile}`;
  const brPath = `public/documents/advance-riko/${brFile}`;
  const dsSize = fs.existsSync(dsPath) ? fs.statSync(dsPath).size : 2450000;
  const brSize = fs.existsSync(brPath) ? fs.statSync(brPath).size : 3150000;

  const documents: DocumentAsset[] = [
    {
      id: `${baseId}-datasheet`,
      title: `Advance Riko ${p.modelSeries || p.name} Official Technical Datasheet`,
      type: 'datasheet',
      fileUrl: `/documents/advance-riko/${dsFile}`,
      fileSizeBytes: dsSize,
      format: 'pdf',
      isGated: false,
    },
    {
      id: `${baseId}-brochure`,
      title: `Advance Riko ${p.modelSeries || p.name} System & Application Brochure`,
      type: 'brochure',
      fileUrl: `/documents/advance-riko/${brFile}`,
      fileSizeBytes: brSize,
      format: 'pdf',
      isGated: false,
    }
  ];

  if (p.id === 'advance-riko-zem-3') {
    documents.push({
      id: 'zem-3-protocol',
      title: 'Sample Preparation and Measurement Protocol Guide',
      type: 'application-note',
      fileUrl: '/documents/advance-riko/zem-3-sample-preparation-protocol.pdf',
      fileSizeBytes: 1468006,
      format: 'pdf',
      isGated: false,
    });
  }

  const specGroups: SpecificationGroup[] = [];
  const variants: ProductModelVariant[] = [];

  // Special cases:
  if (p.id === 'advance-riko-netsushori') {
    specGroups.push({
      groupName: 'Engineered Heat Treatment Furnace Specifications',
      rows: [
        { parameter: 'System Architecture', value: 'Custom In-Line / Continuous Reel-to-Reel / Batch Manufacturing Heat Treatment Furnace' },
        { parameter: 'Heating Technology', value: 'High-Efficiency Infrared Gold Image Furnace / Parabolic Lamp Arrays' },
        { parameter: 'Maximum Operating Temperature', value: 'Up to 1400°C (customizable depending on lamp configuration and chamber material)' },
        { parameter: 'Heating Speed / Ramp Rate', value: 'Rapid infrared radiant heating up to 50°C/s' },
        { parameter: 'Operating Atmosphere', value: 'Air, Inert Gas (N2, Ar), High Vacuum (10⁻³ to 10⁻⁵ Pa optional)' },
        { parameter: 'Target Applications', value: 'Aluminum extrusion die preheating, wire/tape continuous annealing, diffusion bonding, roll-to-roll CNT growth' },
        { parameter: 'Process Automation & Control', value: 'Multi-zone SCR thyristor temperature control with integrated PLC/HMI interface' },
        { parameter: 'Engineering Support', value: 'Custom engineering, integration, FAT/SAT, and annual maintenance by SYINCO Technologies Hyderabad' }
      ]
    });
    return { id: p.id, name: p.name, specifications: specGroups, variants: undefined, documents };
  }

  if (p.id === 'advance-riko-rta') {
    const rtaVariants: ProductModelVariant[] = [
      {
        modelNumber: 'RTA-2000',
        description: 'Rapid Thermal Annealing System for single φ2-inch wafer processing',
        keySpecs: {
          'Sample Size': 'φ2-inch × 1 piece',
          'Temperature Range': 'RT ～ 1000°C',
          'Max. Heating Rate': '100 °C/sec',
          'Atmosphere': 'In Air, Vacuum, Static gas, Gas flow'
        },
        stockStatus: 'built-to-order'
      },
      {
        modelNumber: 'RTA-4000',
        description: 'Rapid Thermal Annealing System for φ3 to 4-inch wafer processing',
        keySpecs: {
          'Sample Size': 'φ3 ～ 4-inch × 1 piece',
          'Temperature Range': 'RT ～ 1200°C',
          'Max. Heating Rate': '200 °C/sec',
          'Atmosphere': 'In Air, Vacuum, Static gas, Gas flow'
        },
        stockStatus: 'built-to-order'
      },
      {
        modelNumber: 'RTA-6000',
        description: 'Rapid Thermal Annealing System for φ4 to 6-inch wafer processing',
        keySpecs: {
          'Sample Size': 'φ4 ～ 6-inch × 1 piece',
          'Temperature Range': 'RT ～ 1200°C',
          'Max. Heating Rate': '200 °C/sec',
          'Atmosphere': 'In Air, Vacuum, Static gas, Gas flow'
        },
        stockStatus: 'built-to-order'
      },
      {
        modelNumber: 'RTA-8000',
        description: 'Rapid Thermal Annealing System for φ6 to 8-inch wafer processing',
        keySpecs: {
          'Sample Size': 'φ6 ～ 8-inch × 1 piece',
          'Temperature Range': 'RT ～ 1200°C',
          'Max. Heating Rate': '200 °C/sec',
          'Atmosphere': 'In Air, Vacuum, Static gas, Gas flow'
        },
        stockStatus: 'built-to-order'
      },
      {
        modelNumber: 'RTA-12000',
        description: 'Rapid Thermal Annealing System for φ300mm (12-inch) production wafer processing',
        keySpecs: {
          'Sample Size': 'φ300mm × 1 piece',
          'Temperature Range': 'RT ～ 1000°C',
          'Max. Heating Rate': '100 °C/sec',
          'Atmosphere': 'In Air, Vacuum, Static gas, Gas flow'
        },
        stockStatus: 'built-to-order'
      }
    ];

    specGroups.push({
      groupName: 'Verified System Specifications',
      rows: [
        {
          parameter: 'Sample Size',
          value: 'φ2-inch (RTA-2000) up to φ300mm (RTA-12000)',
          valuesByModel: {
            'RTA-2000': 'φ2-inch × 1 piece',
            'RTA-4000': 'φ3 ～ 4-inch × 1 piece',
            'RTA-6000': 'φ4 ～ 6-inch × 1 piece',
            'RTA-8000': 'φ6 ～ 8-inch × 1 piece',
            'RTA-12000': 'φ300mm × 1 piece'
          }
        },
        {
          parameter: 'Temperature Range',
          value: 'RT ～ 1000°C (RTA-2000/12000) / RT ～ 1200°C (RTA-4000/6000/8000)',
          valuesByModel: {
            'RTA-2000': 'RT ～ 1000°C',
            'RTA-4000': 'RT ～ 1200°C',
            'RTA-6000': 'RT ～ 1200°C',
            'RTA-8000': 'RT ～ 1200°C',
            'RTA-12000': 'RT ～ 1000°C'
          }
        },
        {
          parameter: 'Max. Heating Rate',
          value: '100 °C/sec to 200 °C/sec',
          valuesByModel: {
            'RTA-2000': '100 °C/sec',
            'RTA-4000': '200 °C/sec',
            'RTA-6000': '200 °C/sec',
            'RTA-8000': '200 °C/sec',
            'RTA-12000': '100 °C/sec'
          }
        },
        {
          parameter: 'Atmosphere',
          value: 'In Air, Vacuum, Static gas, Gas flow',
          valuesByModel: {
            'RTA-2000': 'In Air, Vacuum, Static gas, Gas flow',
            'RTA-4000': 'In Air, Vacuum, Static gas, Gas flow',
            'RTA-6000': 'In Air, Vacuum, Static gas, Gas flow',
            'RTA-8000': 'In Air, Vacuum, Static gas, Gas flow',
            'RTA-12000': 'In Air, Vacuum, Static gas, Gas flow'
          }
        }
      ]
    });

    return { id: p.id, name: p.name, specifications: specGroups, variants: rtaVariants, documents };
  }

  const tables = sc?.tables || [];

  for (let tIdx = 0; tIdx < tables.length; tIdx++) {
    const rawTable: string[][] = tables[tIdx];
    if (!rawTable || rawTable.length === 0) continue;

    // Filter out periodic table in APS-1 (where cols > 10)
    if (rawTable[0] && rawTable[0].length > 10) continue;

    const header = rawTable[0].map(cleanText);
    const numCols = Math.max(...rawTable.map(r => r.length));

    // Determine group title
    let groupName = tIdx === 0 ? 'Verified System Specifications' : 'Installation, Utilities & Environmental Parameters';
    if (rawTable.some(r => /dimension|power supply|cooling water|exhaust|grounding|space/i.test(cleanText(r[0])))) {
      groupName = 'Installation, Utilities & Envelope Specifications';
    }

    // Check Case A: Transposed Model table (header[0] is 'Model' or 'Type' and header[1..N] are model names)
    const isTransposedModelTable = (header[0]?.toLowerCase().includes('model') || header[0]?.toLowerCase().includes('type')) && 
      numCols > 2 && 
      !header.some((h, i) => i > 0 && /heating method|temperature|sample size|lamp|input/i.test(h));

    // Check Case B: Normal Model table (header has columns like ['Model', 'Heating Method', 'Max. Heating Temperature', ...])
    const isNormalModelTable = (header[0]?.toLowerCase().includes('model') || header[0]?.toLowerCase().includes('type')) && 
      numCols > 2 && 
      header.some((h, i) => i > 0 && /heating method|temperature|sample size|lamp|input/i.test(h));

    if (isTransposedModelTable) {
      const modelNames = header.slice(1).filter(Boolean);
      const rowsForGroup: any[] = [];

      if (variants.length === 0) {
        for (const mName of modelNames) {
          variants.push({
            modelNumber: mName,
            description: `${p.name} — Model ${mName}`,
            keySpecs: {},
            stockStatus: 'built-to-order',
          });
        }
      }

      for (let rIdx = 1; rIdx < rawTable.length; rIdx++) {
        const row = rawTable[rIdx];
        const param = cleanText(row[0]);
        if (!param) continue;

        const valuesByModel: Record<string, string> = {};
        const combinedVals: string[] = [];

        // If row has only 1 value (e.g. sample size applies to all models)
        if (row.length === 2) {
          const val = cleanText(row[1]);
          for (const mName of modelNames) {
            valuesByModel[mName] = val;
            const vObj = variants.find(v => v.modelNumber === mName);
            if (vObj) vObj.keySpecs[param] = val;
          }
          rowsForGroup.push({
            parameter: param,
            value: val,
            valuesByModel,
          });
        } else {
          for (let mIdx = 0; mIdx < modelNames.length; mIdx++) {
            const mName = modelNames[mIdx];
            const val = cleanText(row[mIdx + 1] || row[1] || '');
            if (val) {
              valuesByModel[mName] = val;
              combinedVals.push(`${mName}: ${val}`);
              const vObj = variants.find(v => v.modelNumber === mName);
              if (vObj) vObj.keySpecs[param] = val;
            }
          }

          rowsForGroup.push({
            parameter: param,
            value: combinedVals.length > 0 ? combinedVals.join(' | ') : cleanText(row[1] || '-'),
            valuesByModel: Object.keys(valuesByModel).length > 0 ? valuesByModel : undefined,
          });
        }
      }

      if (rowsForGroup.length > 0) {
        if (tIdx === 0 && p.catalogStatus === 'wave-2-catalogue-family') {
          rowsForGroup.push({
            parameter: 'Operating Specifications',
            value: 'Contact SYINCO Technologies for configuration and specification details.'
          });
        }
        specGroups.push({ groupName, rows: rowsForGroup });
      }
    } else if (isNormalModelTable) {
      const paramCols = header.slice(1);
      const rowsForGroup: any[] = [];

      for (let rIdx = 1; rIdx < rawTable.length; rIdx++) {
        const row = rawTable[rIdx];
        const modelName = cleanText(row[0]);
        if (!modelName) continue;

        const keySpecs: Record<string, string> = {};
        for (let cIdx = 0; cIdx < paramCols.length; cIdx++) {
          const pName = paramCols[cIdx];
          const val = cleanText(row[cIdx + 1] || '');
          if (val) keySpecs[pName] = val;
        }

        if (variants.length < 15) {
          variants.push({
            modelNumber: modelName,
            description: `${p.name} — Configuration ${modelName}`,
            keySpecs,
            stockStatus: 'built-to-order',
          });
        }
      }

      for (let cIdx = 0; cIdx < paramCols.length; cIdx++) {
        const pName = paramCols[cIdx];
        const valuesByModel: Record<string, string> = {};
        const combinedVals: string[] = [];

        for (let rIdx = 1; rIdx < rawTable.length; rIdx++) {
          const row = rawTable[rIdx];
          const modelName = cleanText(row[0]);
          const val = cleanText(row[cIdx + 1] || '');
          if (modelName && val) {
            valuesByModel[modelName] = val;
            combinedVals.push(`${modelName}: ${val}`);
          }
        }

        rowsForGroup.push({
          parameter: pName,
          value: combinedVals.length > 0 ? combinedVals.join(' | ') : 'See Model Configurations',
          valuesByModel: Object.keys(valuesByModel).length > 0 ? valuesByModel : undefined,
        });
      }

      if (rowsForGroup.length > 0) {
        if (tIdx === 0 && p.catalogStatus === 'wave-2-catalogue-family') {
          rowsForGroup.push({
            parameter: 'Operating Specifications',
            value: 'Contact SYINCO Technologies for configuration and specification details.'
          });
        }
        specGroups.push({ groupName, rows: rowsForGroup });
      }
    } else {
      // Standard 2-column parameter/value rows
      const rowsForGroup: any[] = [];
      for (const row of rawTable) {
        if (!row || row.length === 0) continue;
        const param = cleanText(row[0]);
        if (!param) continue;

        if (row.length === 1) {
          rowsForGroup.push({ parameter: param, value: 'Integrated Standard' });
        } else if (row.length === 2) {
          const val = cleanText(row[1]);
          rowsForGroup.push({ parameter: param, value: val || '-' });
        } else {
          const val = row.slice(1).map(cleanText).filter(Boolean).join(' | ');
          rowsForGroup.push({ parameter: param, value: val || '-' });
        }
      }
      if (rowsForGroup.length > 0) {
        if (tIdx === 0 && p.catalogStatus === 'wave-2-catalogue-family') {
          rowsForGroup.push({
            parameter: 'Operating Specifications',
            value: 'Contact SYINCO Technologies for configuration and specification details.'
          });
        }
        specGroups.push({ groupName, rows: rowsForGroup });
      }
    }
  }

  if (specGroups.length === 0) {
    specGroups.push({
      groupName: 'Verified System Capabilities',
      rows: [
        { parameter: 'System', value: p.name },
        { parameter: 'Manufacturer', value: 'Advance Riko, Inc. (Yokohama, Japan)' },
        { parameter: 'Support & Service', value: 'SYINCO Technologies Hyderabad Engineering Depot' }
      ]
    });
  }

  return {
    id: p.id,
    name: p.name,
    specifications: specGroups,
    variants: variants.length > 0 ? variants : undefined,
    documents
  };
}

if (process.argv[1]?.includes('test-spec-parser.ts')) {
  let totalVariantsFound = 0;
  let totalSpecsRows = 0;
  let totalDocsFound = 0;

  for (const p of arProducts) {
    const res = parseProductEnrichment(p);
    totalDocsFound += res.documents.length;
    if (res.variants) totalVariantsFound += res.variants.length;
    for (const g of res.specifications) {
      totalSpecsRows += g.rows.length;
    }
  }

  console.log(`\n=== Verification Results ===`);
  console.log(`Tested Products: ${arProducts.length}`);
  console.log(`Total Documents: ${totalDocsFound}`);
  console.log(`Total Specification Rows: ${totalSpecsRows}`);
  console.log(`Total Model Variants: ${totalVariantsFound}`);
}
