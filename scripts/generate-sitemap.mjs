import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { format } from 'date-fns';

// Your website URL
const siteUrl = 'https://claimsurconsult.com';

// List of all your routes
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/insight'
];

const pagesDir = './dist';
const sitemapPath = join(pagesDir, 'sitemap.xml');
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Ensure the dist directory exists
const fs = await import('node:fs/promises');
await fs.mkdir(pagesDir, { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${`${siteUrl}${route}`}</loc>
      <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join('')}
</urlset>`;

writeFileSync(join(__dirname, '../dist/sitemap.xml'), sitemap);
console.log(`Sitemap generated at: ${sitemapPath}`);
