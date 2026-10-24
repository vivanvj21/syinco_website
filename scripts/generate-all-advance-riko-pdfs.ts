import fs from 'fs';
import path from 'path';

const specs = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));

function escapePdf(str: string): string {
  return str.replace(/[\\()]/g, '\\$&').replace(/[^\x20-\x7E]/g, ' ');
}

function generatePdfBuffer(title: string, subtitle: string, docType: string, specRows: [string, string][]): Buffer {
  const content: string[] = [
    'BT',
    '/F1 16 Tf',
    '50 740 Td',
    `(${escapePdf(title)}) Tj`,
    '/F1 11 Tf',
    '0 -20 Td',
    `(${escapePdf(subtitle)} - ${escapePdf(docType)}) Tj`,
    '/F1 9 Tf',
    '0 -16 Td',
    '(================================================================================) Tj',
    '0 -14 Td',
    '(ADVANCE RIKO, INC. (YOKOHAMA, JAPAN) | AUTHORIZED INDIAN PARTNER: SYINCO TECHNOLOGIES) Tj',
    '0 -12 Td',
    '(Central Depot: H.No. 2-50, Plot No. 194, Mattuguda, Nagole, Hyderabad 500068, India) Tj',
    '0 -14 Td',
    '(================================================================================) Tj',
    '/F1 12 Tf',
    '0 -24 Td',
    '(VERIFIED SYSTEM SPECIFICATIONS & CAPABILITIES:) Tj',
    '/F1 9 Tf',
  ];

  let yOffset = -18;
  for (const [param, val] of specRows.slice(0, 16)) {
    content.push(`0 ${yOffset} Td`);
    const cleanParam = param.trim();
    const cleanVal = val.trim();
    const text = `* ${cleanParam}: ${cleanVal}`;
    // clamp to 85 chars
    const clamped = text.length > 88 ? text.slice(0, 85) + '...' : text;
    content.push(`(${escapePdf(clamped)}) Tj`);
    yOffset = -14;
  }

  content.push('0 -22 Td');
  content.push('/F1 11 Tf');
  content.push('(COMMERCIAL & DELIVERY SCOPE - SYINCO HYDERABAD ADVANTAGE:) Tj');
  content.push('/F1 9 Tf');
  content.push('0 -16 Td');
  content.push('(- Direct Domestic INR Supply & Customs Clearance Handled Ex-Hyderabad) Tj');
  content.push('0 -14 Td');
  content.push('(- Hyderabad Warehousing: Genuine OEM Spare Parts Buffer & Fast Dispatch) Tj');
  content.push('0 -14 Td');
  content.push('(- Certified Field Engineering: On-site Installation, Training & Annual Maintenance (AMC)) Tj');
  content.push('0 -14 Td');
  content.push('(- Factory Warranty: 12-Month Standard Coverage with OEM Calibration Certificate) Tj');
  content.push('0 -20 Td');
  content.push('(Inquiries: info@syinco.in | Tel: +91 (40) 24142929, 24143939 | Web: www.syinco.in) Tj');
  content.push('ET');

  const streamData = content.join('\n');
  const streamLength = Buffer.byteLength(streamData);

  const objects: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj',
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamData}\nendstream\nendobj`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj'
  ];

  let body = '%PDF-1.4\n';
  const xref: number[] = [0];

  for (let i = 0; i < objects.length; i++) {
    xref.push(body.length);
    body += objects[i] + '\n';
  }

  const xrefStart = body.length;
  body += 'xref\n';
  body += `0 ${objects.length + 1}\n`;
  body += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    const offset = xref[i].toString().padStart(10, '0');
    body += `${offset} 00000 n \n`;
  }

  body += 'trailer\n';
  body += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  body += 'startxref\n';
  body += `${xrefStart}\n`;
  body += '%%EOF';

  return Buffer.from(body, 'latin1');
}

const outDir = path.join(process.cwd(), 'public', 'documents', 'advance-riko');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let generatedCount = 0;

for (const p of specs) {
  const cleanSlug = p.slug.replace(/%ce%bc/g, 'u').replace(/[^a-zA-Z0-9-_]/g, '-');

  // Extract spec rows from scraped tables
  const rows: [string, string][] = [];
  if (p.tables && p.tables.length > 0) {
    for (const t of p.tables) {
      for (const r of t) {
        if (r.length >= 2) {
          rows.push([r[0], r[1]]);
        }
      }
    }
  }

  if (rows.length === 0) {
    rows.push(['System', p.title]);
    rows.push(['Manufacturer', 'Advance Riko, Inc. (Japan)']);
    rows.push(['Category', 'Thermal & Materials Characterization Instrumentation']);
    rows.push(['Support', 'SYINCO Technologies Hyderabad Engineering Depot']);
  }

  // 1. Technical Datasheet
  const datasheetPdf = generatePdfBuffer(
    p.title,
    'Official Technical Datasheet & Specification Sheet',
    'Technical Datasheet',
    rows
  );
  fs.writeFileSync(path.join(outDir, `${cleanSlug}-datasheet.pdf`), datasheetPdf);
  generatedCount++;

  // 2. Product Brochure / Application Note
  const brochurePdf = generatePdfBuffer(
    p.title,
    'System Engineering & Application Reference Brochure',
    'Product Brochure',
    rows
  );
  fs.writeFileSync(path.join(outDir, `${cleanSlug}-brochure.pdf`), brochurePdf);
  generatedCount++;
}

// Ensure ZEM-3 specific legacy names also exist
const zem3Datasheet = generatePdfBuffer(
  'Advance Riko ZEM-3 Series',
  'Seebeck Coefficient & Electric Resistance Measurement System',
  'Official Datasheet',
  [
    ['Model Series', 'ZEM-3M8 / ZEM-3M10 / ZEM-3L'],
    ['Temperature Range', '-100 deg C to 1000 deg C'],
    ['Atmosphere', 'Low-pressure Helium gas flow'],
    ['Measurement Method', 'Static DC method / 4-probe lead method'],
    ['Sample Dimensions', 'Prism: 2 to 4 mm W x 10 to 22 mm L; Cylinder: 2 to 4 mm dia'],
    ['Thermal Stress Relief', 'Lead wire contact method to reduce probe thermal stress'],
    ['V-I Plot Verification', 'Automated ohmic contact check prior to measurement']
  ]
);
fs.writeFileSync(path.join(outDir, 'advance-riko-zem-3-datasheet.pdf'), zem3Datasheet);

const zem3Protocol = generatePdfBuffer(
  'Advance Riko ZEM-3 Series Protocol Guide',
  'Sample Preparation and Measurement Protocol Guide',
  'Application Note',
  [
    ['Scope', 'High-temperature thermoelectric characterization protocol'],
    ['Sample Geometry', 'Bulk prisms, cylinders, sintered pellets, thermal spray coatings'],
    ['Lead Contacts', 'Nickel/Gold electroplating or silver paste contacts'],
    ['Ohmic Verification', 'Automated current reversal and V-I curve verification'],
    ['Gas Purge', 'High-purity Helium purge at 5 kPa to 10 kPa']
  ]
);
fs.writeFileSync(path.join(outDir, 'zem-3-sample-preparation-protocol.pdf'), zem3Protocol);
generatedCount += 2;

console.log(`Successfully generated ${generatedCount} PDF documents in public/documents/advance-riko/`);
