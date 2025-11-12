import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

const routes = [
  '/',
  '/buyers',
  '/sellers',
  '/communities/spanish-trail',
  '/club',
  '/golf',
  '/events',
  '/membership',
  '/guest-info',
  '/about',
  '/contact',
  '/awards',
  '/privacy',
  '/terms',
  '/accessibility',
  '/spanish-trail-homes-for-sale-las-vegas',
  '/spanish-trail-guard-gated-golf-homes',
  '/spanish-trail-luxury-golf-course-properties',
  '/spanish-trail-custom-estate-homes-strip',
  '/spanish-trail-townhomes-villas',
  '/spanish-trail-gated-golf-realtor',
  '/spanish-trail-southwest-las-vegas-luxury-homes',
  '/spanish-trail-private-golf-course-homes',
  '/spanish-trail-country-club-estate-listings',
  '/spanish-trail-waterfront-golf-homes',
  '/spanish-trail-market-report',
  '/spanish-trail-insights',
  '/las-vegas-luxury-neighborhoods',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
