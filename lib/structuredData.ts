/**
 * Post-deploy manual validation (not automated in CI):
 *
 * 1) Google Rich Results Test — https://search.google.com/test/rich-results — test live URLs:
 *    - https://www.spanishtrailhomes.com/ (LocalBusiness + WebSite from root layout)
 *    - https://www.spanishtrailhomes.com/contact (WebPage + FAQPage)
 *    - https://www.spanishtrailhomes.com/relocation (FAQPage)
 *    - https://www.spanishtrailhomes.com/spanish-trail-homes-for-sale-las-vegas
 *    - https://www.spanishtrailhomes.com/homes-for-sale-in-spanish-trail-las-vegas
 *    - https://www.spanishtrailhomes.com/google-business-profile (WebPage + BreadcrumbList; entity refs #localBusiness)
 *    - one https://www.spanishtrailhomes.com/neighborhoods/* URL
 *
 *    VideoObject: when a page embeds a player, add JSON-LD via createVideoObjectSchema() in this module; see
 *    https://developers.google.com/search/docs/appearance/structured-data/video — do not emit VideoObject without an embed.
 *
 * 2) Google Search Console (property must match www host): Sitemaps status, URL Inspection on / and /contact,
 *    Page indexing for errors, Enhancements for structured-data warnings.
 *
 * 3) Monthly Search Central changelog: https://support.google.com/webmasters/answer/6211428
 */
const siteUrl = 'https://www.spanishtrailhomes.com'

type BreadcrumbItem = {
  name: string
  url: string
}

type WebPageSchemaInput = {
  name: string
  description: string
  path: string
  type?: string
  extra?: Record<string, unknown>
}

const buildAbsoluteUrl = (path: string) => {
  if (!path || path === '/') {
    return siteUrl
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildAbsoluteUrl(item.url),
  })),
})

export const createWebPageSchema = ({ name, description, path, type = 'WebPage', extra = {} }: WebPageSchemaInput) => {
  const url = buildAbsoluteUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-US',
    // Reference root layout WebSite (#website); avoid duplicating WebSite properties per page.
    isPartOf: { '@id': `${siteUrl}#website` },
    ...extra,
  }
}

export const structuredDataSiteUrl = siteUrl

export type VideoObjectSchemaInput = {
  name: string
  description: string
  thumbnailUrl: string
  /** ISO 8601 date the video was published (e.g. 2026-01-15) */
  uploadDate: string
  /** App Router path for the page that embeds the player (e.g. /about) */
  path: string
  contentUrl?: string
  embedUrl?: string
}

/**
 * VideoObject JSON-LD — use only when the same page embeds the video (e.g. YouTube iframe).
 * @see https://developers.google.com/search/docs/appearance/structured-data/video
 */
export const createVideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  path,
  contentUrl,
  embedUrl,
}: VideoObjectSchemaInput) => {
  const pageUrl = buildAbsoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl ? { contentUrl } : {}),
    ...(embedUrl ? { embedUrl } : {}),
    publisher: { '@id': `${siteUrl}#localBusiness` },
  }
}

/**
 * Generate an absolute canonical URL for a given path
 * Ensures the URL is clean (no query parameters) and absolute
 */
export const getCanonicalUrl = (path: string): string => {
  if (!path || path === '/') {
    return siteUrl
  }
  // Remove any query parameters and ensure path starts with /
  const cleanPath = path.split('?')[0].split('#')[0]
  return `${siteUrl}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`
}

type OgImageOptions = {
  title: string
  subtitle?: string
  eyebrow?: string
}

export const createOgImageUrl = ({ title, subtitle, eyebrow }: OgImageOptions) => {
  const params = new URLSearchParams()
  params.set('title', title)

  if (subtitle) {
    params.set('subtitle', subtitle)
  }

  if (eyebrow) {
    params.set('eyebrow', eyebrow)
  }

  return `${siteUrl}/api/og?${params.toString()}`
}

