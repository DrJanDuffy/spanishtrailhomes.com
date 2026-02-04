import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroSearchWidget } from '@/components/hero-search-widget'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'

const pageUrl = 'https://www.spanishtrailhomes.com/homes-for-sale-in-spanish-trail-las-vegas'

export const metadata: Metadata = {
  title: 'Homes for Sale in Spanish Trail - Las Vegas | Dr. Jan Duffy',
  description:
    'Find homes for sale in Spanish Trail, Las Vegas. Guard-gated golf community with elegant single-family homes, grand estates, luxury villas, and 27-hole championship golf course. Browse current listings and schedule private tours.',
  keywords: [
    'homes for sale in Spanish Trail Las Vegas',
    'Spanish Trail homes for sale',
    'Spanish Trail Las Vegas real estate',
    'guard-gated Spanish Trail homes',
    'Spanish Trail golf course homes',
    'Spanish Trail luxury homes',
    'homes for sale Spanish Trail 89117',
  ],
  alternates: {
    canonical: getCanonicalUrl('/homes-for-sale-in-spanish-trail-las-vegas'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    url: pageUrl,
    title: 'Homes for Sale in Spanish Trail - Las Vegas | Dr. Jan Duffy',
    description:
      'Discover elegant single-family homes, grand estates, and luxury villas for sale in Spanish Trail, Las Vegas. Guard-gated golf community with 27-hole championship course.',
    images: [
      createOgImageUrl({
        title: 'Homes for Sale in Spanish Trail Las Vegas',
        subtitle: 'Guard-gated golf community luxury homes',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale in Spanish Trail - Las Vegas',
    description:
      'Browse elegant homes, grand estates, and luxury villas in Spanish Trail. Guard-gated golf community minutes from the Las Vegas Strip.',
    images: [
      createOgImageUrl({
        title: 'Spanish Trail Homes for Sale',
        subtitle: 'Luxury guard-gated community in Las Vegas',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

const homesForSaleFaq = [
  {
    question: 'What types of homes are available for sale in Spanish Trail, Las Vegas?',
    answer:
      'Homes for sale in Spanish Trail, Las Vegas include elegant single-family homes ranging from 2,024 to 19,149 square feet, grand estates on lots up to 1.64 acres, luxury villas perfect for lock-and-leave ownership, and custom-built homes with golf course frontage. The community offers diverse housing options from sophisticated residences to expansive estates, all within a guard-gated environment with 27-hole championship golf.',
  },
  {
    question: 'What is the price range for homes for sale in Spanish Trail?',
    answer:
      'Homes for sale in Spanish Trail, Las Vegas range from approximately $818K for townhomes and villas to over $2M+ for custom estates. The median listing price is around $818K-$835K, with luxury golf course properties typically priced between $1.2M-$1.5M. Custom estates with Strip views and double-gated privacy can exceed $2M. Dr. Jan Duffy provides current market data and comparative analysis for homes matching your criteria.',
  },
  {
    question: 'Where is Spanish Trail located in Las Vegas?',
    answer:
      'Spanish Trail is a luxury guard-gated community located in Southwest Las Vegas, Nevada, near Spring Valley. The community spans Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue, just west of I-215. Spanish Trail is conveniently located near major shopping amenities, Whole Foods, Trader Joe\'s, Downtown Summerlin, and is approximately 15 minutes from the Las Vegas Strip, making it ideal for both full-time residents and second-home owners.',
  },
  {
    question: 'What amenities do homes for sale in Spanish Trail offer?',
    answer:
      'Homes for sale in Spanish Trail feature access to a magnificent 27-hole championship golf course recognized as one of America\'s finest, designed by Robert Trent Jones Jr. Residents enjoy guard-gated security 24/7, resort-style pools, tennis courts, wellness facilities, fine dining, and curated social programming. Many homes include private pools, golf course views, mature landscaping, and proximity to the clubhouse with its 50,000 sq. ft. of amenities.',
  },
  {
    question: 'How many homes with pools are for sale in Spanish Trail?',
    answer:
      'Currently, there are approximately 60 homes with pools for sale in Spanish Trail, Las Vegas, at various price points. These properties range from updated villas with plunge pools to custom estates with resort-style pools and spa features. Many homes for sale include pool resurfacing, Baja shelves, LED landscape lighting, and outdoor entertainment areas. Dr. Jan Duffy can help you find pool homes matching your preferences and lifestyle.',
  },
  {
    question: 'Are there homes for sale in specific Spanish Trail neighborhoods?',
    answer:
      'Yes, homes for sale in Spanish Trail are organized into distinct neighborhoods including Links at Spanish Trail (2,000-4,800 sq. ft.), Islands at Spanish Trail, Estates, Estates West, Springs, Villas, Patios, Courtyards, Gardens, and other enclaves. Each neighborhood offers unique characteristics, lot sizes, HOA fees, and architectural styles. Dr. Jan Duffy specializes in matching buyers with the right Spanish Trail neighborhood based on lifestyle preferences, budget, and desired amenities.',
  },
  {
    question: 'What makes Spanish Trail different from other Las Vegas luxury communities?',
    answer:
      'Spanish Trail stands out as one of Las Vegas\'s original private golf communities, built from the barren desert into a paradise with grand homes surrounding a 27-hole championship golf course. Unlike newer developments, Spanish Trail offers mature landscaping, established amenities, and a serene oasis vibe in Southwest Las Vegas. The guard-gated community provides 24/7 security, proximity to major shopping and the Strip, and a reputation for discretion and quality that has remained consistent for decades.',
  },
  {
    question: 'Can I tour homes for sale in Spanish Trail before buying?',
    answer:
      'Absolutely. Dr. Jan Duffy coordinates private tours of homes for sale in Spanish Trail, including guard gate access, same-day showings, and evening lighting checks. Tours can be scheduled within 48 hours, and Dr. Duffy provides insider knowledge about each neighborhood, renovation considerations, golf course views, and community amenities. Contact her at (702) 766-3299 to schedule a personalized tour of Spanish Trail homes matching your criteria.',
  },
]

const homesForSaleFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homesForSaleFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const webPageSchema = createWebPageSchema({
  name: 'Homes for Sale in Spanish Trail - Las Vegas',
  description:
    'Browse homes for sale in Spanish Trail, Las Vegas. Elegant single-family homes, grand estates, luxury villas in a guard-gated golf community with 27-hole championship course.',
  path: '/homes-for-sale-in-spanish-trail-las-vegas',
})

export default function HomesForSaleInSpanishTrailLasVegasPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Buyers', href: '/buyers' },
              { label: 'Homes for Sale in Spanish Trail - Las Vegas' },
            ]}
          />
        </div>
      </div>
      <OverviewSection />
      <PropertyTypesSection />
      <LocationAndAmenitiesSection />
      <MarketDataSection />
      <NeighborhoodsSection />
      <RealScoutSection
        id="spanish-trail-listings"
        title="Browse Current Homes for Sale in Spanish Trail"
        description="View active listings with real-time updates, advanced filters, and detailed property information."
      />
      <BuyingProcessSection />
      <HomesForSaleFAQSection />
      <CTASection />
      <Script id="homes-for-sale-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
      <Script id="homes-for-sale-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homesForSaleFaqSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="hero-heading">
      <HeroBackground
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&auto=format&fit=crop&w=2000"
        alt="Homes for sale in Spanish Trail, Las Vegas - guard-gated luxury golf community with elegant single-family homes and grand estates"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/60 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1280px"
      />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-28 text-center sm:py-32">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Spanish Trail Real Estate</p>
        <h1 id="hero-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Homes for Sale in Spanish Trail - Las Vegas
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85 sm:text-lg">
          Discover elegant single-family homes, grand estates, and luxury villas for sale in Spanish Trail—Las Vegas\'s premier guard-gated golf community. From sophisticated golf community homes starting at 2,024 square feet to expansive golf course estates spanning 19,149 square feet, find your perfect Las Vegas golf course home in this 27-hole championship golf paradise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="#spanish-trail-listings">View Listings</Link>
          </Button>
        </div>
        <HeroSearchWidget theme="dark" />
      </div>
    </section>
  )
}

function OverviewSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-6">
          <h2 id="overview-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Homes for Sale in Spanish Trail - Las Vegas\'s Premier Guard-Gated Community
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail features a diverse range of housing options for sale, from elegant single-family homes to grand estates, all within a luxury guard-gated community in Southwest Las Vegas. Whether you\'re seeking a sophisticated residence or an expansive estate, homes for sale in Spanish Trail offer the perfect blend of privacy, security, and world-class amenities.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Built from the barren desert into a paradise, Spanish Trail homes surround a magnificent 27-hole championship golf course recognized as one of America\'s finest. The community spans Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue, just west of I-215, offering convenient access to major shopping amenities, Whole Foods, Trader Joe\'s, Downtown Summerlin, and the Las Vegas Strip—just 15 minutes away.
          </p>
        </div>
      </div>
    </section>
  )
}

function PropertyTypesSection() {
  const propertyTypes = [
    {
      title: 'Single-Family Homes',
      range: '2,024 - 19,149 sq. ft.',
      lots: '0.14 - 1.64 acres',
      description:
        'Elegant single-family homes ranging from sophisticated residences to grand estates, built on lots ranging from 0.14 to 1.64 acres. These homes for sale in Spanish Trail offer diverse floor plans and architectural styles.',
    },
    {
      title: 'Luxury Estates',
      description:
        'Grand estates with custom designs, golf course frontage, and resort-scale amenities. Many feature private pools, casitas, and double-gated privacy within exclusive enclaves.',
    },
    {
      title: 'Villas & Townhomes',
      description:
        'Lock-and-leave villas and townhomes perfect for second-home owners and those seeking low-maintenance luxury living with full access to Spanish Trail\'s amenities.',
    },
    {
      title: 'Golf Course Homes',
      description:
        'Homes with premium golf course views and direct access to the 27-hole championship course designed by Robert Trent Jones Jr.',
    },
  ]

  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="property-types-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="property-types-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
          Types of Homes for Sale in Spanish Trail
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Homes for sale in Spanish Trail, Las Vegas, encompass a wide variety of property types to suit different lifestyles and preferences.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {propertyTypes.map((type) => (
            <article
              key={type.title}
              className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">{type.title}</h3>
              {type.range && (
                <p className="mt-2 text-sm text-[#6f5237]">
                  {type.range} {type.lots && `• ${type.lots}`}
                </p>
              )}
              <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">{type.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationAndAmenitiesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="location-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 id="location-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
              Prime Location in Southwest Las Vegas
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Homes for sale in Spanish Trail are located in Southwest Las Vegas, near Spring Valley, offering a serene oasis vibe while remaining conveniently close to essential amenities. The community is just west of I-215, spanning Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue.
            </p>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Nearby Amenities</h3>
              <ul className="space-y-2 text-base leading-relaxed text-[#372a20]/85">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>Whole Foods, Trader Joe\'s, and Downtown Summerlin within 10-15 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>Las Vegas Strip access in approximately 15 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>Top-tier private schools moments away</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>Allegiant Stadium, UnCommons, and The Bend nearby</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-heading text-2xl text-[#1f2a24] sm:text-3xl">27-Hole Championship Golf Course</h3>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Homes for sale in Spanish Trail feature access to a magnificent 27-hole championship golf course recognized as one of America\'s finest. Designed by Robert Trent Jones Jr., the course includes three distinct nines: Sunrise, Lakes, and Canyon, each offering unique challenges and stunning views.
            </p>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Beyond golf, Spanish Trail offers resort-style pools, tennis courts, <Link href="/club" className="text-[#0f2b1e] underline-offset-4 hover:underline">wellness facilities</Link>, fine dining at the clubhouse, and curated social programming. Many homes for sale include private pools, mature landscaping, and proximity to these world-class amenities.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#0f2b1e]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#0f2b1e] hover:text-white"
            >
              <Link href="/golf">Explore Golf Course</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarketDataSection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24" aria-labelledby="market-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="market-heading" className="font-heading text-3xl text-[#f8f5ef] sm:text-4xl">
          Current Market Data for Homes for Sale in Spanish Trail
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          As of November 2025, the Spanish Trail real estate market remains strong with approximately 60 homes for sale, including homes with pools. The median listing price for homes for sale in Spanish Trail is around $818K, with active inventory across all price ranges.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20">
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">Median Price</p>
            <p className="mt-4 font-heading text-3xl text-[#f8f5ef]">$818K+</p>
            <p className="mt-2 text-sm text-[#f8f5ef]/70">Homes with pools available</p>
          </div>
          <div className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20">
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">Size Range</p>
            <p className="mt-4 font-heading text-3xl text-[#f8f5ef]">2,024-19,149</p>
            <p className="mt-2 text-sm text-[#f8f5ef]/70">Square feet available</p>
          </div>
          <div className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20">
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">Lot Sizes</p>
            <p className="mt-4 font-heading text-3xl text-[#f8f5ef]">0.14-1.64</p>
            <p className="mt-2 text-sm text-[#f8f5ef]/70">Acres per property</p>
          </div>
        </div>
        <div className="mt-10">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/spanish-trail-market-report">View Full Market Report</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function NeighborhoodsSection() {
  const neighborhoods = [
    {
      name: 'Links at Spanish Trail',
      range: '2,000-4,800 sq. ft.',
      description:
        'Homes in Links at Spanish Trail range from around 2,000 square feet to more than 4,800 square feet, with a number of different floor plans available. This neighborhood offers diverse options for families and golf enthusiasts.',
    },
    {
      name: 'Islands at Spanish Trail',
      description:
        'A serene neighborhood within Spanish Trail featuring luxury homes with water features and mature landscaping, perfect for those seeking an island-like retreat.',
    },
    {
      name: 'Estates & Estates West',
      description:
        'Exclusive enclaves featuring grand estates on larger lots, many with secondary gates for added privacy. These homes often feature golf course views and custom architecture.',
    },
    {
      name: 'Villas at Spanish Trail',
      description:
        'Lock-and-leave villas perfect for second-home owners, offering low-maintenance living with full access to all Spanish Trail amenities and the golf course.',
    },
  ]

  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="neighborhoods-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="neighborhoods-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
          Spanish Trail Neighborhoods with Homes for Sale
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">
          Spanish Trail encompasses multiple distinct neighborhoods, each offering unique characteristics and home styles. <Link href="/communities/spanish-trail" className="text-[#0f2b1e] underline-offset-4 hover:underline">Explore the complete Spanish Trail community guide</Link> to learn more about each enclave.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {neighborhoods.map((neighborhood) => (
            <article
              key={neighborhood.name}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">
                {neighborhood.name}
              </h3>
              {neighborhood.range && (
                <p className="mt-2 text-sm text-[#6f5237]">{neighborhood.range}</p>
              )}
              <p className="mt-4 text-base leading-relaxed text-[#372a20]/85">{neighborhood.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuyingProcessSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="buying-process-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="buying-process-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
          Your Guide to Buying Homes for Sale in Spanish Trail
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">Working with Dr. Jan Duffy</h3>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              When searching for homes for sale in Spanish Trail, Dr. Jan Duffy provides expert guidance throughout the entire buying process. With over 30 years of experience and 500+ Spanish Trail transactions, she offers insider knowledge about each neighborhood, pricing trends, and off-market opportunities.
            </p>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Dr. Duffy coordinates private tours, guard gate access, <Link href="/membership" className="text-[#0f2b1e] underline-offset-4 hover:underline">club membership introductions</Link>, and provides comprehensive market analysis to ensure you make informed decisions when purchasing homes for sale in Spanish Trail.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">What to Expect</h3>
            <ul className="space-y-4 text-base leading-relaxed text-[#372a20]/85">
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                <span>Weekly inventory updates on new homes for sale in Spanish Trail</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                <span>Private tours with guard gate coordination</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                <span>Comparative market analysis for homes you\'re considering</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                <span>Financing guidance and lender introductions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomesForSaleFAQSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Frequently Asked Questions</p>
          <h2 id="faq-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Common Questions About Homes for Sale in Spanish Trail - Las Vegas
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Get answers to frequently asked questions about buying homes for sale in Spanish Trail, Las Vegas.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {homesForSaleFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0f2b1e]">
                {item.question}
              </h3>
              <p className="text-base leading-relaxed text-[#372a20]/85">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="cta-heading" className="font-heading text-3xl leading-tight text-[#f8f5ef] sm:text-4xl">
          Ready to Find Your Perfect Home in Spanish Trail?
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Connect with Dr. Jan Duffy to explore homes for sale in Spanish Trail, Las Vegas. Get access to current listings, private tours, and expert guidance throughout your home buying journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/buyers">Explore Buyer Services</Link>
          </Button>
        </div>
        <p className="text-sm text-[#f8f5ef]/70">
          Call <Link href="tel:17027663299" className="underline-offset-4 hover:underline">(702) 766-3299</Link> or email{' '}
          <Link href="mailto:DrDuffySells@SpanishTrailHomes.com" className="underline-offset-4 hover:underline">
            DrDuffySells@SpanishTrailHomes.com
          </Link>
        </p>
      </div>
    </section>
  )
}

