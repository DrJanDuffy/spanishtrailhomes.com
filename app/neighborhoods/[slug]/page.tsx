import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl } from '@/lib/structuredData'
import { detailedNeighborhoods, type Neighborhood } from '@/lib/spanishTrailContent'

export async function generateStaticParams() {
  return detailedNeighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const neighborhood = detailedNeighborhoods.find((n) => n.slug === slug)

  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found',
    }
  }

  const pageUrl = `https://www.spanishtrailhomes.com/neighborhoods/${neighborhood.slug}`

  return {
    title: `${neighborhood.name} Spanish Trail | Luxury Homes 89117`,
    description: neighborhood.description,
    alternates: {
      canonical: `/neighborhoods/${neighborhood.slug}`,
    },
    keywords: neighborhood.seoKeywords,
    openGraph: {
      url: pageUrl,
      title: `${neighborhood.name} - Spanish Trail`,
      description: neighborhood.tagline,
      images: [
        createOgImageUrl({
          title: neighborhood.name,
          subtitle: neighborhood.tagline,
          eyebrow: 'Spanish Trail Neighborhood',
        }),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${neighborhood.name} - Spanish Trail`,
      description: neighborhood.tagline,
      images: [
        createOgImageUrl({
          title: neighborhood.name,
          subtitle: neighborhood.tagline,
          eyebrow: 'Spanish Trail',
        }),
      ],
    },
  }
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const neighborhood = detailedNeighborhoods.find((n) => n.slug === slug)

  if (!neighborhood) {
    notFound()
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: neighborhood.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  // Determine price minimum for RealScout widget
  const priceMin = neighborhood.priceRange.split('-')[0].replace(/[^0-9]/g, '')

  return (
    <SiteShell>
      <HeroSection neighborhood={neighborhood} />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Neighborhoods', href: '/neighborhoods' },
              { label: neighborhood.name },
            ]}
          />
        </div>
      </div>
      <OverviewSection neighborhood={neighborhood} />
      <RealScoutSection
        id={`${neighborhood.slug}-listings`}
        eyebrow="Current Listings"
        title={`${neighborhood.name} homes for sale`}
        description={`View available properties in ${neighborhood.name} within Spanish Trail Country Club, Las Vegas 89117.`}
        priceMin={priceMin}
        propertyTypes=",SFR,CONDO"
      />
      <PropertyDetailsSection neighborhood={neighborhood} />
      <AmenitiesSection neighborhood={neighborhood} />
      <FAQSection neighborhood={neighborhood} />
      <ContactCTASection neighborhood={neighborhood} />
      <Script id="neighborhood-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          {neighborhood.name} - Spanish Trail
        </h1>
        <p className="text-xl leading-relaxed text-[#f8f5ef]">
          {neighborhood.tagline}
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          {neighborhood.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href={`#${neighborhood.slug}-listings`}>View Homes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function OverviewSection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="overview-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          About {neighborhood.name}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#372a20]/85">
          {neighborhood.longDescription.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Price Range</p>
            <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{neighborhood.priceRange}</p>
          </div>
          <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Home Size</p>
            <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{neighborhood.sqftRange}</p>
          </div>
          <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f5237]">Lot Size</p>
            <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#0f2b1e]">{neighborhood.lotSize}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PropertyDetailsSection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="property-details-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 id="property-details-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
              Property Details
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-[#372a20]/85">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-2">Property Types</h3>
                <ul className="space-y-2">
                  {neighborhood.propertyTypes.map((type, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {neighborhood.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-[var(--font-playfair)] text-2xl text-[#1f2a24]">Ideal For</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[#372a20]/85">
              {neighborhood.bestFor.map((buyer, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>{buyer}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e] mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#6f5237]">Homes Count</dt>
                  <dd className="mt-1 text-[#372a20]">{neighborhood.homesCount}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#6f5237]">Year Built</dt>
                  <dd className="mt-1 text-[#372a20]">{neighborhood.yearBuilt}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#6f5237]">Architecture</dt>
                  <dd className="mt-1 text-[#372a20]">{neighborhood.architecturalStyle}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#6f5237]">HOA</dt>
                  <dd className="mt-1 text-[#372a20]">{neighborhood.hoaDetails}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AmenitiesSection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="amenities-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="amenities-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Location & Amenities
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
              Nearby Amenities
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[#372a20]/85">
              {neighborhood.nearbyAmenities.map((amenity, idx) => (
                <li key={idx} className="flex justify-between gap-4">
                  <span>{amenity.name}</span>
                  <span className="text-[#6f5237]">{amenity.distance}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
              Notable Streets
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-[#372a20]/85">
              {neighborhood.nearbyStreets.map((street, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>{street}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-2">
                Access to Clubhouse
              </h3>
              <p className="text-sm text-[#372a20]/85">{neighborhood.proximityToClubhouse}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-2">
                Golf Course Access
              </h3>
              <p className="text-sm text-[#372a20]/85">{neighborhood.proximityToGolf}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {neighborhood.faqs.map((faq, idx) => (
            <div key={idx} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <h3 className="text-base font-semibold text-[#0f2b1e] mb-3">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-[#372a20]/85">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCTASection({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Ready to explore {neighborhood.name}?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Schedule a private tour with Dr. Janet Duffy to discover available homes and experience the lifestyle firsthand.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Contact Dr. Jan</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="tel:+17027663299">Call (702) 766-3299</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
