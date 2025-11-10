'use client'

import Link from 'next/link'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

import { createBreadcrumbSchema } from '@/lib/structuredData'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname() || '/'

  if (!items.length) return null

  const lastIndex = items.length - 1

  const schemaItems = items.map((item, index) => ({
    name: item.label,
    url: item.href
      ? item.href
      : index === lastIndex
        ? pathname
        : items[index + 1]?.href ?? pathname,
  }))

  const jsonLd = createBreadcrumbSchema(schemaItems)

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#6f5237]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && index !== lastIndex ? (
              <Link href={item.href} className="text-[#0f2b1e] transition-colors hover:text-secondary">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#372a20]/80">{item.label}</span>
            )}
            {index !== lastIndex ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
      <Script id={`breadcrumb-schema-${items.map((i) => i.label).join('-').toLowerCase()}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </nav>
  )
}
