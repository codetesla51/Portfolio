export async function render() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://devuthman.vercel.app/sitemap.xml`;

  return new Response(robots.trim(), {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
