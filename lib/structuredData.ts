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
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'Spanish Trail Homes',
      url: siteUrl,
    },
    ...extra,
  }
}

export const structuredDataSiteUrl = siteUrl

