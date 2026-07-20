import { getPosts } from '$lib/utils/posts.js';

export async function render() {
  const posts = await getPosts();
  const siteUrl = 'https://devuthman.vercel.app';
  
  const postUrls = posts.map(post => `
    <url>
      <loc>${siteUrl}/writing/${post.slug}</loc>
      <lastmod>${post.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/writing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/why-hire-me</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  ${postUrls}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
