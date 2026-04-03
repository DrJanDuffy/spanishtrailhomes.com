import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Allow OG image route so Google can fetch og:image URLs; keep other /api/* disallowed.
        allow: ['/', '/api/og'],
        disallow: ['/api/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
