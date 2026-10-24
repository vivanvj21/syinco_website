import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'documents', 'edwards');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const testList = [
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0088-01-nXDS-brochure.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/dry-scroll-pumps/3601-0428-01-XDS-datasheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/3602120401-CDX1000-1300-EN-Web.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/edwards-EDP-dry-pumps-data-sheet.pdf',
  'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/3602%20119%203%2001_EDP%20Chemical%20Brochure_Web.pdf'
];

async function run() {
  for (const url of testList) {
    const rawName = decodeURIComponent(url.split('/').pop() || 'doc.pdf');
    const safeName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const dest = path.join(outDir, safeName);
    console.log(`Downloading: ${safeName}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        },
        signal: AbortSignal.timeout(15000)
      });
      if (!res.ok) {
        console.log(`FAIL ${safeName}: HTTP ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`SUCCESS ${safeName}: ${buf.length} bytes, magic: ${buf.slice(0, 5).toString()}`);
    } catch (e: any) {
      console.log(`ERR ${safeName}: ${e.message}`);
    }
    // slight delay
    await new Promise(r => setTimeout(r, 400));
  }
}

run();
