import fs from 'fs';
import path from 'path';
import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

function escapePdf(str: string): string {
  return str.replace(/[\\()]/g, '\\$&').replace(/[^\x20-\x7E]/g, ' ');
}

function generatePdfBuffer(
  title: string,
  subtitle: string,
  docType: string,
  specRows: [string, string][],
  variantsText: string[]
): Buffer {
  const content: string[] = [
    'BT',
    '/F1 15 Tf',
    '50 742 Td',
    `(${escapePdf(title)}) Tj`,
    '/F1 10 Tf',
    '0 -18 Td',
    `(${escapePdf(subtitle)} - ${escapePdf(docType)}) Tj`,
    '/F1 9 Tf',
    '0 -15 Td',
    '(================================================================================) Tj',
    '0 -13 Td',
    '(EDWARDS VACUUM (BURGESS HILL, UK) | AUTHORIZED PARTNER: SYINCO TECHNOLOGIES) Tj',
    '0 -12 Td',
    '(Central Depot: H.No. 2-50, Plot No. 194, Mattuguda, Nagole, Hyderabad 500068, India) Tj',
    '0 -13 Td',
    '(================================================================================) Tj',
    '/F1 11 Tf',
    '0 -20 Td',
    '(VERIFIED SYSTEM SPECIFICATIONS & OPERATING PARAMETERS:) Tj',
    '/F1 8.5 Tf',
  ];

  let yOffset = -15;
  for (const [param, val] of specRows.slice(0, 10)) {
    content.push(`0 ${yOffset} Td`);
    const cleanParam = param.trim();
    const cleanVal = val.trim();
    const text = `* ${cleanParam}: ${cleanVal}`;
    const clamped = text.length > 92 ? text.slice(0, 89) + '...' : text;
    content.push(`(${escapePdf(clamped)}) Tj`);
    yOffset = -13;
  }

  if (variantsText.length > 0) {
    content.push('0 -18 Td');
    content.push('/F1 10 Tf');
    content.push('(STANDARD MODEL CONFIGURATIONS & VARIANTS:) Tj');
    content.push('/F1 8.5 Tf');
    let vOffset = -14;
    for (const v of variantsText.slice(0, 5)) {
      content.push(`0 ${vOffset} Td`);
      const clamped = v.length > 92 ? v.slice(0, 89) + '...' : v;
      content.push(`(${escapePdf(clamped)}) Tj`);
      vOffset = -12;
    }
  }

  content.push('0 -18 Td');
  content.push('/F1 10 Tf');
  content.push('(COMMERCIAL & DELIVERY SCOPE - SYINCO HYDERABAD ADVANTAGE:) Tj');
  content.push('/F1 8.5 Tf');
  content.push('0 -14 Td');
  content.push('(- Direct Domestic INR Supply & Customs Clearance Handled Ex-Hyderabad Depot) Tj');
  content.push('0 -12 Td');
  content.push('(- Hyderabad Warehousing: Genuine Edwards Spares, Vacuum Oils & Fast Dispatch) Tj');
  content.push('0 -12 Td');
  content.push('(- Certified Field Engineering: On-Site Installation, Commissioning & Annual Maintenance) Tj');
  content.push('0 -12 Td');
  content.push('(- Factory Warranty: 12-Month Standard Coverage with OEM Certificate of Conformity) Tj');
  content.push('0 -18 Td');
  content.push('(Inquiries: info@syinco.in | Desk: +91 73822 92929 | Web: www.syinco.in) Tj');
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
    const offsetStr = xref[i].toString().padStart(10, '0');
    body += `${offsetStr} 00000 n \n`;
  }
  body += 'trailer\n';
  body += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  body += 'startxref\n';
  body += `${xrefStart}\n`;
  body += '%%EOF\n';

  return Buffer.from(body, 'utf-8');
}

const outDir = path.join(process.cwd(), 'public', 'documents', 'edwards');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let generatedCount = 0;

for (const p of edwards) {
  const cleanSlug = p.slug.replace(/[^a-zA-Z0-9-_]/g, '-');

  // Extract spec rows
  const specRows: [string, string][] = [];
  for (const g of p.specifications) {
    for (const r of g.rows) {
      specRows.push([r.parameter, String(r.value || '-')]);
    }
  }

  // Extract variants text
  const variantsText: string[] = [];
  if (p.variants) {
    for (const v of p.variants) {
      const keys = Object.entries(v.keySpecs).map(([k, val]) => `${k}: ${val}`).join(', ');
      variantsText.push(`* Model ${v.modelNumber}${v.partNumber ? ` (P/N: ${v.partNumber})` : ''}: ${keys || v.description}`);
    }
  }

  // 1. Technical Datasheet
  const dsPdf = generatePdfBuffer(
    p.name,
    `Model Series: ${p.modelSeries}`,
    'Official Technical Datasheet',
    specRows,
    variantsText
  );
  fs.writeFileSync(path.join(outDir, `${cleanSlug}-datasheet.pdf`), dsPdf);
  generatedCount++;

  // 2. Product & System Brochure
  const brPdf = generatePdfBuffer(
    p.name,
    `Model Series: ${p.modelSeries}`,
    'Product Engineering Brochure',
    specRows,
    variantsText
  );
  fs.writeFileSync(path.join(outDir, `${cleanSlug}-brochure.pdf`), brPdf);
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} Edwards PDF documents in ${outDir}`);
