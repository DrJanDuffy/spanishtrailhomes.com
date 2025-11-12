import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { createOgImageUrl } from '@/lib/structuredData'
import { detailedNeighborhoods } from '@/lib/spanishTrailContent'

const pageUrl = 'https://www.spanishtrailhomes.com/neighborhoods'

export const metadata: Metadata = {
  title: 'Spanish Trail Neighborhoods | 11 Enclaves in Las Vegas 89117',
  description:
    'Explore 11 distinct neighborhoods within Spanish Trail Country Club: Estates West, Carmels, Courtyards, Gardens, Islands, Links, Plum Creek, Springs, Villas, Townhomes, and Plazas. Find your perfect guard-gated Las Vegas community.',
  keywords: [
    'Spanish Trail neighborhoods',
    'Spanish Trail enclaves',
    '89117 neighborhoods',
    'Spanish Trail communities',
    'Estates West',
    'Carmels',
    'Courtyards',
    'Gardens',
    'Islands',
    'Links',
    'Plum Creek',
    'Springs',
    'Villas',
    'Spanish Trail Townhomes',
    'Plazas Spanish Trail',
  ],
  alternates: {
    canonical: '/neighborhoods',
  },
  openGraph: {
    url: pageUrl,
    title: 'Spanish Trail Neighborhoods - Find Your Perfect Enclave',
    description: 'Discover 11 unique neighborhoods within Spanish Trail Country Club, each offering distinct lifestyle and architectural character.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Neighborhoods',
        subtitle: '11 distinctive enclaves in Las Vegas 89117',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail Neighborhoods - 11 Enclaves',
    description: 'Explore guard-gated neighborhoods from luxury estates to lock-and-leave villas within Spanish Trail Country Club.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Neighborhoods',
        subtitle: '11 distinctive communities',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function NeighborhoodsPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Neighborhoods' },
            ]}
          />
        </div>
      </div>
      <IntroSection />
      <NeighborhoodsGridSection />
      <ComparisonSection />
      <ContactCTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h1 id="hero-heading" className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Spanish Trail Neighborhoods
        </h1>
        <p className="text-xl leading-relaxed text-[#f8f5ef]">
          11 distinctive enclaves within Las Vegas' premier guard-gated golf community
        </p>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          From sprawling custom estates to lock-and-leave villas, Spanish Trail offers diverse lifestyle options across 640 acres in zip code 89117. Each neighborhood has its own character, architectural style, and proximity to the clubhouse and golf course.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Find Your Neighborhood</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#neighborhoods-grid">Explore Neighborhoods</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="intro-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Finding the right Spanish Trail neighborhood
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#372a20]/85">
          <p>
            Spanish Trail Country Club comprises 11 distinct neighborhoods, each offering unique architectural styles, lot sizes, and lifestyle advantages. Whether you're seeking a sprawling estate with golf course frontage, a walkable villa near the clubhouse, or a family-friendly home near Bishop Gorman High School, there's a perfect enclave for your lifestyle.
          </p>
          <p>
            As a local expert who tracks every listing and sale within the gates, I help buyers navigate the subtle differences between neighborhoods—from HOA structures and proximity to amenities, to resale trends and architectural character. Below you'll find detailed guides to each Spanish Trail neighborhood.
          </p>
        </div>
      </div>
    </section>
  )
}

function NeighborhoodsGridSection() {
  return (
    <section id="neighborhoods-grid" className="bg-[#f8f2e7] py-16 sm:py-20" aria-labelledby="grid-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="grid-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl text-center mb-12">
          Explore Each Neighborhood
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailedNeighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.id}
              href={`/neighborhoods/${neighborhood.slug}`}
              className="group rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10 transition-all hover:shadow-xl hover:border-[#0f2b1e]"
            >
              <h3 className="font-[var(--font-playfair)] text-2xl text-[#0f2b1e] group-hover:text-[#6f5237] transition-colors">
                {neighborhood.name}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#6f5237]">
                {neighborhood.priceRange}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#372a20]/85 line-clamp-3">
                {neighborhood.tagline}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#0f2b1e] font-semibold">
                <span>Learn More</span>
                <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="comparison-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
          Quick Neighborhood Comparison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Here's a snapshot of what makes each neighborhood unique:
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#d8cdbf]">
                <th className="text-left py-4 px-4 font-semibold text-[#0f2b1e]">Neighborhood</th>
                <th className="text-left py-4 px-4 font-semibold text-[#0f2b1e]">Price Range</th>
                <th className="text-left py-4 px-4 font-semibold text-[#0f2b1e]">Best For</th>
              </tr>
            </thead>
            <tbody>
              {detailedNeighborhoods.map((neighborhood) => (
                <tr key={neighborhood.id} className="border-b border-[#d8cdbf]">
                  <td className="py-4 px-4">
                    <Link href={`/neighborhoods/${neighborhood.slug}`} className="font-semibold text-[#0f2b1e] hover:underline">
                      {neighborhood.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-[#372a20]/85">{neighborhood.priceRange}</td>
                  <td className="py-4 px-4 text-[#372a20]/85">{neighborhood.bestFor[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function ContactCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
          Need help choosing the right neighborhood?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          I know every street, every floor plan, and every micro-market trend within Spanish Trail. Let's find the perfect neighborhood for your lifestyle and budget.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]">
            <Link href="/contact">Talk with Dr. Jan</Link>
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
