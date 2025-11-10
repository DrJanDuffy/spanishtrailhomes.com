import type { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/breadcrumbs'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { nearbyCommunities } from '@/lib/spanishTrailContent'
import { HeroSearchWidget } from '@/components/hero-search-widget'

const pageUrl = 'https://www.spanishtrailhomes.com/las-vegas-luxury-neighborhoods'

const comparisonHighlights = [
  {
    name: 'The Ridges',
    insight:
      'Ultra-modern architecture, Bear’s Best golf, and Summerlin adjacency. Ideal for buyers seeking new construction and elevated HOA programming.',
  },
  {
    name: 'Red Rock Country Club',
    insight:
      'Two Arnold Palmer courses, family-focused amenities, and immediate Downtown Summerlin access. Strong alternative for golf-centric households.',
  },
  {
    name: 'The Summit Club',
    insight:
      'Discovery Land Company development with private aviation, bespoke wellness, and concierge services. Highest price point among west valley enclaves.',
  },
  {
    name: 'Spanish Hills',
    insight:
      'Custom-view estates perched above the valley. Complimentary pairing with Spanish Trail for cross-shopping larger lots and Strip panoramas.',
  },
]

const relocationChecklist = [
  'Commute times to Allegiant Stadium, the Strip, and major employment hubs',
  'Membership categories, initiation fees, and waitlist details for each club',
  'School zoning, private education proximity, and daily lifestyle conveniences',
  'Renovation guidelines, architectural review timelines, and preferred vendor lists',
]

export const metadata: Metadata = {
  title: 'Las Vegas Luxury Neighborhood Comparisons | Dr. Janet Duffy',
  description:
    'Compare Spanish Trail with top Las Vegas luxury communities including The Ridges, Red Rock Country Club, and The Summit Club.',
  alternates: {
    canonical: '/las-vegas-luxury-neighborhoods',
  },
  openGraph: {
    url: pageUrl,
    title: 'Compare Las Vegas Luxury Neighborhoods',
    description:
      'Evaluate Spanish Trail alongside The Ridges, Red Rock Country Club, and more. Guidance by Dr. Janet Duffy, Berkshire Hathaway HomeServices.',
  },
}

export default function LuxuryNeighborhoodComparisonsPage() {
  return (
    <SiteShell>
      <header className="bg-[#0f2b1e] py-16 text-[#f8f5ef] sm:py-20" aria-labelledby="neighborhoods-hero">
        <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
          <h1 id="neighborhoods-hero" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
            Compare Las Vegas Luxury Neighborhoods
          </h1>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Evaluate Spanish Trail alongside premier west valley enclaves. Dr. Janet Duffy highlights lifestyle
            differences, club programming, and investment considerations so you can pinpoint the community that fits best.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
            >
              <Link href="#las-vegas-luxury-comparison-grid">View comparison grid</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
            >
              <Link href="/contact">Schedule a consult</Link>
            </Button>
          </div>
        </div>
        <HeroSearchWidget theme="dark" />
      </header>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Las Vegas Luxury Neighborhoods' },
            ]}
          />
        </div>
      </div>
      <ComparisonGridSection />
      <RelocationChecklistSection />
      <SpanishTrailPositioningSection />
      <LuxuryCTASection />
    </SiteShell>
  )
}

function ComparisonGridSection() {
  return (
    <section
      id="las-vegas-luxury-comparison-grid"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="comparison-grid-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">West Valley Highlights</p>
          <h2
            id="comparison-grid-heading"
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
          >
            How top Las Vegas enclaves stack up
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Start with the essentials—architecture, amenities, and buyer demand—when comparing Spanish Trail with
            neighboring guard-gated communities.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisonHighlights.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-border/40 bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{item.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">{item.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RelocationChecklistSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="relocation-checklist-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Relocation Checklist</p>
            <h2
              id="relocation-checklist-heading"
              className="font-(--font-playfair) text-3xl text-[#1f2a24] sm:text-4xl"
            >
              What we evaluate for every client
            </h2>
            <p className="text-base leading-relaxed text-[#372a20]/85">
              Use this framework when narrowing down the Las Vegas luxury community that aligns with your lifestyle and
              investment goals. Dr. Duffy covers each item during strategy sessions.
            </p>
          </div>
          <div className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
            <ul className="space-y-3 text-sm leading-relaxed text-[#372a20]/85">
              {relocationChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpanishTrailPositioningSection() {
  return (
    <section className="border-y border-border/40 bg-white" aria-labelledby="spanish-trail-positioning-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Why Spanish Trail</p>
          <h2
            id="spanish-trail-positioning-heading"
            className="font-(--font-playfair) text-3xl text-foreground sm:text-4xl"
          >
            Positioning Spanish Trail among its peers
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail continues to resonate with buyers who want lush landscaping, triple-course golf, and 24-hour
            guard gates minutes from the Strip. Mature trees, established amenities, and refreshed club programming provide
            a timeless alternative to newer master plans.
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
        <div className="rounded-3xl border border-border/40 bg-[#fdf9f3] p-6 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">Next steps</p>
          <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
            Dr. Duffy can align West Valley showings across Spanish Trail, The Ridges, Red Rock Country Club, and beyond on
            the same day—complete with membership briefings and gate coordination.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/contact">Plan a comparison tour</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function LuxuryCTASection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef]" aria-labelledby="luxury-cta-heading">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <h2 id="luxury-cta-heading" className="font-(--font-playfair) text-3xl leading-tight sm:text-4xl">
          Let’s match you with the right community
        </h2>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85">
          Share your desired move timeline, household needs, and amenity wish list. We’ll craft an itinerary covering
          Spanish Trail and the Las Vegas neighborhoods that suit you best.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="/contact">Start your comparison</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/buyers">Explore Spanish Trail buyers guide</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

