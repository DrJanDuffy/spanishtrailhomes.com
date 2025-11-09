import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.spanishtrailhomes.com'

const routes = [
  '/',
  '/communities/spanish-trail',
  '/club',
  '/golf',
  '/events',
  '/membership',
  '/guest-info',
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
