import fs from 'fs';
import path from 'path';

function createSimplePdf(title: string, subtitle: string, lines: string[]): Buffer {
  const content = [
    'BT',
    '/F1 18 Tf',
    '50 740 Td',
    `(${escapePdf(title)}) Tj`,
    '/F1 12 Tf',
    '0 -24 Td',
    `(${escapePdf(subtitle)}) Tj`,
    '/F1 10 Tf',
    '0 -20 Td',
    '(--------------------------------------------------------------------------------) Tj',
    '0 -18 Td',
    '(SYINCO TECHNOLOGIES - Authorized Indian Partner for Advance Riko, Inc. (Japan)) Tj',
    '0 -16 Td',
    '(Hyderabad Central Depot: Mattuguda, Nagole, Hyderabad 500068, India) Tj',
    '0 -20 Td',
    '(--------------------------------------------------------------------------------) Tj',
  ];

  let yOffset = -24;
  for (const line of lines.slice(0, 25)) {
    content.push(`0 ${yOffset} Td`);
    content.push(`(${escapePdf(line)}) Tj`);
    yOffset = -15;
  }

  content.push('ET');
  const streamData = content.join('\n');

  const objects: string[] = [];
  // Obj 1: Catalog
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  // Obj 2: Pages
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  // Obj 3: Page
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj');
  // Obj 4: Content stream
  objects.push(`4 0 obj\n<< /Length ${Buffer.byteLength(streamData)} >>\nstream\n${streamData}\nendstream\nendobj`);
  // Obj 5: Font
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');

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

function escapePdf(str: string): string {
  return str.replace(/[\\()]/g, '\\$&').replace(/[^\x20-\x7E]/g, ' ');
}

// Ensure directory exists
const dir = path.join(process.cwd(), 'public', 'documents', 'advance-riko');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const testPdf = createSimplePdf(
  'Advance Riko ZEM-3 Series Datasheet',
  'Seebeck Coefficient and Electric Resistance Measurement System',
  [
    'Temperature Range: -100C to 1000C',
    'Atmosphere: Low-pressure Helium gas flow',
    'Sample Dimension: 2 to 4 mm width, 10 to 22 mm length',
    'Measurement Method: Static DC method / 4-probe lead method',
    'Direct Domestic INR Invoicing & Hyderabad Depot Stock'
  ]
);

fs.writeFileSync(path.join(dir, 'test.pdf'), testPdf);
console.log('Successfully generated test PDF at:', path.join(dir, 'test.pdf'));
