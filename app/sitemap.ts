export const dynamic = 'force-static'; // ensure static generation

const SITE_URL = "https://www.yourwebsite.com";

const serviceAreas = [
  "lombard-il",
  "villa-park-il",
  "elmhurst-il",
  "bensenville-il"
];

export default function sitemap() {
  // static URLs
  const urls = [
    "",
    "services/brake-repair",
    "services/muffler-repair",
    "services/exhaust-repair",
    "contact",
    "service-areas"
  ];

  // generate <url> entries for all pages
  const sitemapEntries = [
    ...urls.map((path) => `
  <url>
    <loc>${SITE_URL}/${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`),
    ...serviceAreas.map((city) => `
  <url>
    <loc>${SITE_URL}/service-areas/${city}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`)
  ].join("");

  // return a valid XML Response
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
