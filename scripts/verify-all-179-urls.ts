import { edwardsProducts as head1Products } from './edwards-head1';
import { nxdsProductData as head1Nxds } from './nxds-head1';
import { edwardsProducts as currentProducts } from '../src/data/products/edwards';
import { nxdsProductData as currentNxds } from '../src/data/products/nxds';

// Import generation logic
import './generate-authentic-edwards-catalog';
import fs from 'fs';

// Let's test all unique URLs from the 179 documents
const sample = JSON.parse(fs.readFileSync('scripts/enriched-edwards-docs-sample.json', 'utf8'));

// Run full extraction of URLs
const BROCHURES = {
  dryScroll: {
    id: 'EDW-BR-SCROLL',
    title: 'Edwards nXDS & XDS Dry Scroll Vacuum Pumps - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 3150000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0088-01-nXDS-brochure.pdf',
    isGated: false,
  },
  rndApplications: {
    id: 'EDW-BR-RND',
    title: 'Edwards Scientific R&D & High Vacuum Solutions - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 4210000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/3601-0014-01_R-and-D_brochure_05-24.pdf',
    isGated: false,
  },
  industrialProcesses: {
    id: 'EDW-BR-IND',
    title: 'Edwards Solutions for Industrial Processes - Official Engineering Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 5120000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/edwards-solutions-for-industrial-processes-brochure.pdf',
    isGated: false,
  },
  chemicalProcesses: {
    id: 'EDW-BR-CHEM',
    title: 'Edwards Chemical Process Industries Vacuum Solutions - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 4890000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/edwards-chemical-process-industries-brochure.pdf',
    isGated: false,
  },
  rootsPumps: {
    id: 'EDW-BR-ROOTS',
    title: 'Edwards nXRi & Multistage Roots Dry Pumps - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 2980000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/multistage-roots-pumps/3601-0591-01-nXRi-Brochure.pdf',
    isGated: false,
  },
  e2mRotaryVane: {
    id: 'EDW-BR-E2M',
    title: 'Edwards E2M Series Rotary Vane Vacuum Pumps - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 2450000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3602%20013%201%2001_Edwards%20E2M_Brochure_LR_small.pdf',
    isGated: false,
  },
  nrviRotaryVane: {
    id: 'EDW-BR-NRVI',
    title: 'Edwards nRVi Intelligent Rotary Vane Pumps - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 2310000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/rotary-vane-pumps/3601-0327-01-nRVi-brochure.pdf',
    isGated: false,
  },
  hepScientific: {
    id: 'EDW-BR-HEP',
    title: 'Edwards High Energy Physics & Scientific Vacuum Systems - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 3820000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/applications/3601-0027-01-HEP-Brochure.pdf',
    isGated: false,
  },
  leakDetection: {
    id: 'EDW-BR-LEAK',
    title: 'Edwards Industrial Leak Detection Systems - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 2840000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/leak-detection/3601-0976-01_ELD30-Industrial-Leak-Detector-Brochure.pdf',
    isGated: false,
  },
  controllersEjgo: {
    id: 'EDW-BR-EJGO',
    title: 'Edwards EJGO & Central Vacuum System Controllers - Official Brochure',
    type: 'brochure',
    format: 'pdf',
    fileSizeBytes: 2640000,
    fileUrl: 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/measurement-and-control/ejgo/ejgo-and-mc-controller-brochure.pdf',
    isGated: false,
  },
};

// Test script
console.log('Testing key URLs from BROCHURES:');
async function testBrochures() {
  for (const [k, v] of Object.entries(BROCHURES)) {
    try {
      const res = await fetch(v.fileUrl, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(`[${k}] ${res.status} ${v.fileUrl.split('/').pop()}`);
    } catch(e: any) {
      console.log(`[${k}] ERROR: ${e.message}`);
    }
  }
}
testBrochures();
