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
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { amenities, golfCourses, testimonials } from '@/lib/content'

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <HistorySection />
      <CourseShowcase />
      <AmenitiesSection />
      <OutingsSection />
      <MembershipSection />
      <TestimonialsSection />
      <LocationSection />
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
            "linear-gradient(rgba(15, 43, 30, 0.55), rgba(15, 43, 30, 0.7)), url('https://images.unsplash.com/photo-1549661588-9fc382d8f3d6?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Just 6 Miles from the Las Vegas Strip
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            A Robert Trent Jones Jr. 27-Hole Private Experience
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
            Discover a sanctuary of curated golf, dining, and social experiences
            crafted for Las Vegas&apos; most discerning members. Spanish Trail
            Country Club invites you to elevate every day.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em]"
          >
            <Link href="/membership">Explore Membership</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 bg-background/90 px-8 py-3 text-xs uppercase tracking-[0.4em] text-primary hover:bg-background/60"
          >
            <Link href="/events">Plan an Event</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section
      className="border-y border-border/60 bg-card/70"
      aria-labelledby="history-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-1 space-y-6 text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Since 1984
          </p>
          <h2
            id="history-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            The Original Private Oasis of Spanish Trail
          </h2>
          <p className="text-base leading-relaxed">
            Spanish Trail Country Club was envisioned as the West Side&apos;s
            sanctuary for world-class golf and refined social connection. Our
            640-acre master-planned community now thrives with lush fairways,
            towering palms, and meticulously cared-for landscapes.
          </p>
          <p className="text-base leading-relaxed">
            Today we honor our legacy with impeccable service, elevated culinary
            programs, and memorable gatherings that celebrate Las Vegas living.
          </p>
          <Link
            href="/membership#inquiry"
            className="group inline-flex items-center text-sm font-medium uppercase tracking-[0.3em] text-primary transition-colors hover:text-secondary"
          >
            Schedule a Private Tour
            <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm sm:p-8">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">
              Elevated Club Life
            </h3>
            <p className="mt-3 text-xl font-semibold text-foreground">
              50,000 sq. ft. clubhouse with panoramic Strip views and legendary
              sunsets.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm sm:p-8">
            <h3 className="text-xs uppercase tracking-[0.4em] text-secondary">
              Member-Driven
            </h3>
            <p className="mt-3 text-xl font-semibold text-foreground">
              A private, member-owned club fostering community across
              generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CourseShowcase() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Course Tour
            </p>
            <h2
              id="courses-heading"
              className="mt-3 font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Three Courses, Infinite Combinations
            </h2>
          </div>
          <span id="scorecard" className="sr-only">
            Scorecard
          </span>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="/golf#scorecard">View Scorecard</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {golfCourses.map((course) => (
            <article
              key={course.name}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${course.image}')` }}
                aria-hidden
              />
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary">
                  {course.yardage}
                </p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {course.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <Link
                  href="/golf#course-tour"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-primary transition-colors hover:text-secondary"
                >
                  View Tour
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AmenitiesSection() {
  return (
    <section
      className="border-y border-border/60 bg-card/80 py-20 sm:py-24"
      aria-labelledby="amenities-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Club Amenities
          </p>
          <h2
            id="amenities-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Every Day Resort-Luxe
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Curated spaces and concierge service create an effortlessly social
            atmosphere. From sunrise fitness sessions to candlelit dinners, our
            team delivers moments you and your guests will never forget.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/80 p-6 shadow-sm"
            >
              <span className="size-2.5 rounded-full bg-secondary" aria-hidden />
              <p className="text-sm font-medium text-foreground">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutingsSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground"
      aria-labelledby="outings-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542379653-be6353c23143?q=80&w=2000&auto=format&fit=crop')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(190,153,86,0.45),rgba(15,43,30,0.9))]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Weddings & Events
          </p>
          <h2
            id="outings-heading"
            className="font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl"
          >
            Craft unforgettable celebrations with championship views as your
            backdrop.
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/90">
            Whether a 200-guest gala, an intimate ceremony, or a philanthropic
            golf tournament, our planners deliver bespoke details and flawless
            execution.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="rounded-full bg-secondary px-7 py-3 text-xs uppercase tracking-[0.4em] text-secondary-foreground hover:bg-secondary/90" asChild>
            <Link href="/events#contact">Request Event Consultation</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-xs uppercase tracking-[0.3em] text-primary-foreground"
          >
            <Link href="mailto:events@spanishtrailhomes.com">
              events@spanishtrailhomes.com
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function MembershipSection() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="membership-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Membership Options
          </p>
          <h2
            id="membership-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Tailored for Golfers, Families, and Social Connoisseurs
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Private golf memberships, young professional tiers, and social
            offerings invite you to find the Spanish Trail lifestyle that fits
            best. Enjoy priority tee times, signature dining events, wellness
            programs, and curated travel experiences.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Full Golf Membership',
              'Young Executive Membership',
              'Corporate Golf Packages',
              'Social & Lifestyle Membership',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-border/60 bg-card/90 p-6 shadow-lg backdrop-blur sm:p-8">
          <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
            Concierge Contact
          </h3>
          <p className="text-sm text-muted-foreground">
            Reach our membership concierge at{' '}
            <a
              href="mailto:membership@spanishtrailhomes.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              membership@spanishtrailhomes.com
            </a>{' '}
            or call{' '}
            <a
              href="tel:17023645050"
              className="text-primary underline-offset-4 hover:underline"
            >
              702.364.5050
            </a>
            . Prefer online scheduling? Continue to{' '}
            <Link
              href="/membership#inquiry"
              className="text-primary underline-offset-4 hover:underline"
            >
              the membership page
            </Link>{' '}
            to submit a detailed request.
          </p>
          <Button asChild className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
            <Link href="/membership#inquiry">Submit Inquiry Online</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section
      className="border-y border-border/60 bg-card/80 py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Member Stories
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              A Community That Feels Like Home
            </h2>
          </div>
          <Button
            variant="link"
            className="text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Link href="/club#lifestyle">Explore Social Calendar</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <blockquote className="text-base leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Visit
          </p>
          <h2
            id="location-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Spanish Trail Country Club
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            5050 Spanish Trail Ln. Las Vegas, NV 89117
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Guest tee times available with member host.</p>
            <p>
              Concierge:{' '}
              <a
                href="tel:17023645050"
                className="text-primary underline-offset-4 hover:underline"
              >
                702.364.5050
              </a>
            </p>
            <p>
              Membership Inquiries:{' '}
              <a
                href="mailto:membership@spanishtrailhomes.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                membership@spanishtrailhomes.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>Follow</span>
            <Link
              href="https://www.instagram.com"
              className="transition-colors hover:text-secondary"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com"
              className="transition-colors hover:text-secondary"
            >
              Facebook
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <iframe
            title="Spanish Trail Country Club Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus"
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em]">Spanish Trail Country Club</p>
          <p className="text-sm text-primary-foreground/80">
            © 2025 Spanish Trail Country Club. All Rights Reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Powered by Jonas Club Software
          </p>
        </div>

        <div className="grid gap-4 text-sm uppercase tracking-[0.25em]">
          <Link href="#membership" className="transition-colors hover:text-secondary">
            Membership
          </Link>
          <Link href="#weddings" className="transition-colors hover:text-secondary">
            Weddings
          </Link>
          <Link href="#events" className="transition-colors hover:text-secondary">
            Private Events
          </Link>
          <Link href="#guest-info" className="transition-colors hover:text-secondary">
            Guest Info
          </Link>
        </div>
    </div>
    </footer>
  )
}
