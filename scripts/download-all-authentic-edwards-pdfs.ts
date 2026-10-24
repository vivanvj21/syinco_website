import fs from 'fs';
import path from 'path';
import { edwardsProducts } from '../src/data/products/edwards';
import { nxdsProductData } from '../src/data/products/nxds';

const outDir = path.join(process.cwd(), 'public', 'documents', 'edwards');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Extract all unique remote URLs
const allProducts = [nxdsProductData, ...edwardsProducts];
const urlMap = new Map<string, string>(); // url -> clean filename

for (const p of allProducts) {
  for (const d of p.documents) {
    if (d.fileUrl.startsWith('https://www.edwardsvacuum.com/')) {
      const rawName = decodeURIComponent(d.fileUrl.split('/').pop() || 'doc.pdf').split('?')[0];
      const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
      urlMap.set(d.fileUrl, cleanName);
    }
  }
}

console.log(`Found ${urlMap.size} unique authentic Edwards PDFs to download.`);

async function downloadOne(url: string, filename: string): Promise<boolean> {
  const dest = path.join(outDir, filename);

  // If already downloaded and valid, skip
  if (fs.existsSync(dest)) {
    const stat = fs.statSync(dest);
    if (stat.size > 10000) {
      const head = Buffer.alloc(5);
      const fd = fs.openSync(dest, 'r');
      fs.readSync(fd, head, 0, 5, 0);
      fs.closeSync(fd);
      if (head.toString() === '%PDF-') {
        return true;
      }
    }
  }

  // Attempt download with retry
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        },
        signal: AbortSignal.timeout(20000)
      });

      if (res.status === 200) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 5000 && buf.slice(0, 5).toString() === '%PDF-') {
          fs.writeFileSync(dest, buf);
          console.log(`[OK] (${buf.length} bytes) ${filename}`);
          return true;
        } else {
          console.log(`[WARN] Not a valid PDF: ${filename} (status 200, bytes ${buf.length})`);
        }
      } else if (res.status === 429) {
        console.log(`[429 RateLimit] Attempt ${attempt} for ${filename}, backing off 2s...`);
        await new Promise(r => setTimeout(r, 2000 * attempt));
      } else {
        console.log(`[HTTP ${res.status}] ${filename}`);
        break;
      }
    } catch (e: any) {
      console.log(`[ERR] Attempt ${attempt} for ${filename}: ${e.message}`);
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }

  return false;
}

async function run() {
  const entries = Array.from(urlMap.entries());
  let successCount = 0;
  let failCount = 0;
  const failedList: string[] = [];

  for (let i = 0; i < entries.length; i++) {
    const [url, fname] = entries[i];
    console.log(`[${i + 1}/${entries.length}] Processing ${fname}...`);
    const ok = await downloadOne(url, fname);
    if (ok) {
      successCount++;
    } else {
      failCount++;
      failedList.push(url);
    }
    // Polite pacing delay to prevent rate limiting
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`\n=== DOWNLOAD SUMMARY ===`);
  console.log(`Total: ${entries.length}`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);

  if (failedList.length > 0) {
    fs.writeFileSync('scripts/failed-downloads.json', JSON.stringify(failedList, null, 2));
    console.log(`Written failed URLs to scripts/failed-downloads.json`);
  }
}

run();
