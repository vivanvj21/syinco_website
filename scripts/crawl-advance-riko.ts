import fs from 'fs';

async function crawl() {
  const allProds: { href: string; slug: string; title: string; page: number }[] = [];
  
  for (let page = 1; page <= 8; page++) {
    const url = page === 1 ? 'https://advance-riko.com/en/products/' : `https://advance-riko.com/en/products/page/${page}/`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      if (!res.ok) {
        console.log(`Page ${page} status: ${res.status}, stopping pagination.`);
        break;
      }
      const html = await res.text();
      
      // Look for product card links in WordPress
      // Links usually like: href="https://advance-riko.com/en/products/xyz/"
      const regex = /href="(https:\/\/advance-riko\.com\/en\/products\/([^"/]+)\/)"/g;
      let match;
      while ((match = regex.exec(html)) !== null) {
        const href = match[1];
        const slug = match[2];
        if (slug === 'page' || slug === 'products' || slug.startsWith('category') || slug.startsWith('tag')) {
          continue;
        }
        if (!allProds.some(p => p.slug === slug)) {
          allProds.push({ href, slug, title: '', page });
        }
      }
    } catch (e: any) {
      console.error(`Error on page ${page}:`, e.message);
    }
  }

  console.log(`Found ${allProds.length} unique product slugs. Now fetching product titles and PDF links...`);

  const results: any[] = [];
  for (const p of allProds) {
    try {
      const res = await fetch(p.href, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      if (!res.ok) continue;
      const html = await res.text();
      
      // Extract h1 or title
      const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i) || html.match(/<title>(.*?)<\/title>/i);
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : p.slug;
      title = title.replace(/\s*\|\s*ADVANCE RIKO.*$/i, '').trim();

      // Extract PDF brochure links
      const pdfMatches = [...html.matchAll(/href="([^"]+\.pdf)"/gi)].map(m => m[1]);
      const uniquePdfs = Array.from(new Set(pdfMatches));

      // Extract feature summary or specs
      results.push({
        slug: p.slug,
        title,
        url: p.href,
        pdfs: uniquePdfs,
        page: p.page
      });
    } catch (e: any) {
      console.error(`Error fetching ${p.slug}:`, e.message);
      results.push({ slug: p.slug, title: p.slug, url: p.href, pdfs: [], page: p.page });
    }
  }

  fs.writeFileSync('scripts/advance-riko-official.json', JSON.stringify(results, null, 2));
  console.log(`Successfully saved ${results.length} official products to scripts/advance-riko-official.json`);
}

crawl();
