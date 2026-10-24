import fs from 'fs';

const official = JSON.parse(fs.readFileSync('scripts/advance-riko-official.json', 'utf8'))
  .filter((p: any) => p.slug !== 'feed');

async function scrapeDetails() {
  console.log(`Starting deep scrape of ${official.length} official product pages...`);
  const detailed: any[] = [];

  for (let i = 0; i < official.length; i++) {
    const item = official[i];
    console.log(`[${i + 1}/${official.length}] Scraping ${item.slug}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      if (!res.ok) {
        console.error(`Failed ${item.slug}: ${res.status}`);
        continue;
      }
      const html = await res.text();

      // Extract Main Content area
      // In WordPress themes, content is often inside <div class="entry-content"> or <main>
      // Extract tables
      const tables: string[][][] = [];
      const tableMatches = [...html.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/gi)];
      for (const tm of tableMatches) {
        const rows: string[][] = [];
        const rowMatches = [...tm[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
        for (const rm of rowMatches) {
          const cells = [...rm[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)]
            .map(c => c[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim());
          if (cells.length > 0) rows.push(cells);
        }
        if (rows.length > 0) tables.push(rows);
      }

      // Extract Features / Overview text
      // Extract bullet points
      const bullets: string[] = [];
      const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
      for (const lm of liMatches) {
        const text = lm[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
        if (text && text.length > 10 && !text.includes('Advance Riko') && !text.includes('Privacy') && !text.includes('Contact')) {
          bullets.push(text);
        }
      }

      // Extract paragraphs
      const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
        .map(p => p[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim())
        .filter(t => t.length > 20 && !t.includes('Copyright') && !t.includes('All rights reserved'));

      detailed.push({
        slug: item.slug,
        title: item.title,
        url: item.url,
        tables,
        bullets: bullets.slice(0, 15),
        paragraphs: pMatches.slice(0, 6),
        pdfs: item.pdfs
      });
    } catch (e: any) {
      console.error(`Error on ${item.slug}:`, e.message);
    }
  }

  fs.writeFileSync('scripts/advance-riko-scraped-specs.json', JSON.stringify(detailed, null, 2));
  console.log(`Done! Scraped specs for ${detailed.length} products to scripts/advance-riko-scraped-specs.json`);
}

scrapeDetails();
