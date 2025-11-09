import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'

const overviewStats = [
  {
    label: 'Guard-Gated Acres',
    value: '640+',
    description:
      'Lush, all-grass fairways, mature landscaping, and tranquil water features spanning the master plan.',
  },
  {
    label: 'Private Golf Holes',
    value: '27',
    description:
      'Robert Trent Jones Jr. championship design with 120 bunkers, lakes, and streams woven into every layout.',
  },
  {
    label: 'Neighborhoods',
    value: '11',
    description:
      'Townhomes, villas, and custom estates—some with secondary gates for added privacy and exclusivity.',
  },
]

const neighborhoodClusters = [
  'Carmels',
  'Courtyards',
  'Gardens',
  'Islands',
  'Links',
  'Plum Creek',
  'Springs',
  'Villas',
  'Innisbrook Estates',
  'Estates',
  'Estates West',
]

const featuredListings = [
  {
    address: '52 Innisbrook Avenue',
    price: '$8,500,000',
    details: '7 Beds • 6.5 Baths • 10,235 Sq Ft',
  },
  {
    address: '19 Vintage Court',
    price: '$5,995,000',
    details: '5 Beds • 7 Baths • 6,148 Sq Ft',
  },
  {
    address: '74 Innisbrook Avenue',
    price: '$3,690,000',
    details: '5 Beds • 6 Baths • 6,293 Sq Ft',
  },
]

const lifestyleHighlights = [
  {
    title: 'Clubhouse & Dining',
    copy: 'A 50,000 sq. ft. clubhouse with glass-lined dining rooms, terrace seating, and a Bar & Grill serving daily cuisine.',
  },
  {
    title: 'Wellness & Recreation',
    copy: 'Renovated fitness facility, two aquatic centers, and twelve lighted tennis courts anchor an active social calendar.',
  },
  {
    title: 'Premier Access',
    copy: 'Minutes to the Strip, Harry Reid International Airport, and neighboring enclaves like The Ridges and Spanish Hills.',
  },
]

const nearbyCommunities = [
  'The Ridges',
  'Spanish Hills',
  'Red Rock Country Club',
  'The Summit Club',
  'Willow Creek',
  'Tournament Hills',
]

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <RealEstateSection />
      <ListingsSection />
      <LifestyleSection />
      <NearbyCommunitiesSection />
      <CTASection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 43, 30, 0.6), rgba(15, 43, 30, 0.75)), url('https://images.unsplash.com/photo-1474926143295-7f42d6764bed?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Guard-Gated Golf Community
          </p>
          <h1
            id="hero-heading"
            className="font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Spanish Trail Country Club Las Vegas
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Positioned west of the Las Vegas Strip near Tropicana Avenue and Rainbow Boulevard, Spanish Trail delivers the original luxury golf and country club experience in a private, guard-gated setting.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em]"
          >
            <Link href="/membership#inquiry">Request Membership Info</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 bg-background/90 px-8 py-3 text-xs uppercase tracking-[0.4em] text-primary hover:bg-background/60"
          >
            <Link href="/events#contact">Plan a Private Event</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2
            id="intro-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Exclusive guard-gated golf living minutes from the Strip.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail spans the Spring Valley area of Las Vegas with quick access to Summerlin, I-215, and Harry Reid International Airport. Established as one of the city’s earliest private golf course communities, it layers mature landscaping, shimmering lakes, and a resort-caliber clubhouse across 640 acres of all-grass fairways.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Residents enjoy the convenience of three guarded entries, proximity to upscale dining and entertainment, and the prestige of a club that has hosted the PGA Las Vegas Invitational five times while serving as home course for the UNLV Women’s Golf Team.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Quick Facts
          </p>
          <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd>Tropicana Ave. & Rainbow Blvd., Las Vegas NV 89113</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Access</dt>
              <dd>Two guard gates on Tropicana, one on Hacienda</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Airport</dt>
              <dd>Approx. 15 minutes to Harry Reid International</dd>
            </div>
          </dl>
          <Button
            asChild
            variant="link"
            className="justify-start px-0 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Link href="/guest-info#map">View Directions & Map</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-3">
        {overviewStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              {item.label}
            </p>
            <p className="mt-3 font-[var(--font-playfair)] text-3xl text-foreground">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function RealEstateSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="real-estate-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2
              id="real-estate-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Diverse real estate opportunities.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail offers more than 1,200 residences ranging from attached townhomes to custom estates, many positioned on the golf course or with Red Rock Canyon views. Select enclaves feature additional privacy gates within the community, ensuring a tailored experience for every homeowner.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Residences were primarily constructed from the mid-1980s through the 1990s, combining timeless architecture with mature landscapes that only decades of stewardship can produce.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                Neighborhoods
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {neighborhoodClusters.map((name) => (
                  <span key={name} className="inline-flex items-center rounded-full border border-border/50 px-3 py-1">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507400492013-162706c8c83c?q=80&w=1600&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Spanish Trail custom homes and golf course views"
          />
        </div>
      </div>
    </section>
  )
}

function ListingsSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="listings-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Featured Listings
            </p>
            <h2
              id="listings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Current luxury offerings in Spanish Trail.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/buyers">View All Inventory</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                  Spanish Trail
                </p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {listing.address}
                </h3>
                <p className="text-sm text-muted-foreground">{listing.details}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {listing.price}
                </span>
                <Button
                  asChild
                  variant="link"
                  className="gap-1 text-xs uppercase tracking-[0.3em] text-primary"
                >
                  <Link href="/buyers">
                    View Details
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifestyleSection() {
  return (
    <section className="bg-background py-20 sm:py-24" aria-labelledby="lifestyle-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Lifestyle & Amenities
          </p>
          <h2
            id="lifestyle-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Timeless luxury with a modern social pulse.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Beyond golf, members access concierge-level programming, destination-worthy culinary experiences, and wellness amenities refreshed to match the expectations of today’s luxury buyer.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {lifestyleHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NearbyCommunitiesSection() {
  return (
    <section className="border-y border-border/60 bg-card/80" aria-labelledby="nearby-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Neighboring Luxury
          </p>
          <h2
            id="nearby-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Connected to Las Vegas’ elite communities.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail sits among a collection of acclaimed luxury enclaves across the Las Vegas Valley. Take advantage of close proximity to other guard-gated neighborhoods, boutique dining, and premier retail destinations in Summerlin and along the Strip.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {nearbyCommunities.map((community) => (
              <span
                key={community}
                className="inline-flex items-center rounded-full border border-border/50 px-3 py-1"
              >
                {community}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Thinking of selling or buying?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our Las Vegas luxury team specializes in Spanish Trail, Red Rock Country Club, and the west valley’s most sought-after addresses. Whether you’re relocating or refining your portfolio, let us craft a tailored strategy.
          </p>
          <Button
            asChild
            className="mt-6 rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/contact">Connect with the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2
          id="cta-heading"
          className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl"
        >
          Ready to live where championship golf meets iconic Las Vegas luxury?
        </h2>
        <p className="text-base leading-relaxed text-primary-foreground/85">
          Schedule a private tour, explore current listings, or request a valuation for your Spanish Trail residence—our concierge team is ready to assist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.4em]"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.4em] text-primary-foreground hover:bg-primary/20"
          >
            <Link href="/sellers">Get a Valuation</Link>
          </Button>
        </div>
    </div>
    </section>
  )
}
