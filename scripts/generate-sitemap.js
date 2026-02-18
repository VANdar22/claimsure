const fs = require('node:fs');
const path = require('node:path');
const { format } = require('date-fns');

// Your website URL
const siteUrl = 'https://claimsurconsult.com';

// List of all your routes
const routes = [
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/WhatMakesUsDifferent',
  '/values',
  '/services',
  '/insight'
  // Note: Dynamic routes like /insights/:id would need to be handled differently
  // You might want to fetch these from an API or a content source
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${routes
    .map(route => {
      const url = `${siteUrl}${route === '/' ? '' : route}`;
      const lastmod = format(new Date(), 'yyyy-MM-dd');
      
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap to public directory
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
