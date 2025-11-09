import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

import { Button } from '@/components/ui/button'
import { SiteShell } from '@/components/site-shell'
import { RealScoutSection } from '@/components/realscout-section'

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

const marketHighlights = [
  { label: 'Total Listings', value: '74 Active', trend: '+', context: 'Across single-family, condo, and townhome offerings.' },
  { label: 'Average List Price', value: '$682K', trend: '-22.15%', context: 'Month-over-month change across current inventory.' },
  { label: 'Average Sold Price', value: '$651K', trend: '-23.92%', context: 'Latest 30-day closed sale average.' },
  { label: 'Average Days on Market', value: '60 Days', trend: '-', context: 'Balanced pace with luxury buyer activity.' },
]

const featuredListings = [
  {
    address: '8330 Carmel Ridge Court',
    price: '$1,095,000',
    type: 'Single-Family • 3 Bed • 3 Bath • 2,500 Sq Ft',
    mls: 'MLS# 2733586',
    href: 'https://bhhsnv.com/single-family/glv/2733586/8330-carmel-ridge-court-las-vegas-nv-89113',
  },
  {
    address: '7283 Mission Hills Drive',
    price: '$630,000',
    type: 'Condo/Townhome • 2 Bed • 2 Bath • 2,065 Sq Ft',
    mls: 'MLS# 2732075',
    href: 'https://bhhsnv.com/condo-townhouse/glv/2732075/7283-mission-hills-drive-las-vegas-nv-89113',
  },
  {
    address: '22 Burning Tree Court',
    price: '$2,590,000',
    type: 'Estate Residence • 4 Bed • 5 Bath • 6,361 Sq Ft',
    mls: 'MLS# 2732026',
    href: 'https://bhhsnv.com/single-family/glv/2732026/22-burning-tree-court-las-vegas-nv-89113',
  },
]

const neighborhoodSpotlights = [
  {
    name: 'The Estates & Estates West',
    description:
      'Custom golf-course estates ranging from 5,000–15,000 sq. ft., many with double-gated motor courts, casitas, and panoramic fairway views along the Sunrise, Ridge, and Canyon courses.',
  },
  {
    name: 'The Courtyards & Gardens',
    description:
      'Lock-and-leave luxury with mature courtyards, private pools, and effortless access to the clubhouse, spa, and dining scenes on Tropicana and Rainbow.',
  },
  {
    name: 'The Links & Carmels',
    description:
      'Fairway villas with wraparound patios, elevated tee-box vistas, and quick cart access to the Robert Trent Jones Jr. course and practice facility.',
  },
  {
    name: 'Springs & Plum Creek',
    description:
      'Tree-lined streets with family-friendly floor plans, community greenbelts, and proximity to Bishop Gorman High School and Faith Lutheran Academy.',
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

const localEssentials = [
  {
    title: 'Private & Charter Schools',
    items: [
      'Bishop Gorman High School – 2.2 miles northeast via S. Rainbow Blvd.',
      'Faith Lutheran Middle & High School – 12 minutes to Summerlin for college-prep curriculum.',
      'The Meadows School – 15 minutes for K-12 gifted and AP programs.',
    ],
  },
  {
    title: 'Dining & Social',
    items: [
      'Spanish Trail Country Club Grill & Patio – members-only dining overlooking the Lakes nine.',
      'The Sundry at UnCommons – chef-driven food hall and lounges, 8 minutes west.',
      'Locale Italian Kitchen & DW Bistro – beloved Rainbow Blvd. staples for brunch and dinner.',
    ],
  },
  {
    title: 'Wellness & Recreation',
    items: [
      'Spanish Trail Fitness & Aquatics – renovated gym, lap lanes, and trainer-led classes.',
      'Spanish Trail Swim & Racquet – twelve lighted tennis courts plus pickleball.',
      'Desert Breeze Park – off-leash dog runs, skate park, and indoor aquatic center nearby.',
    ],
  },
  {
    title: 'Commute & Access',
    items: [
      'I-215 Beltway – 6 minutes to access Summerlin Parkway or McCarran corridor.',
      'Allegiant Stadium & The Strip – 15 minutes east for entertainment and dining.',
      'Harry Reid International Airport – approximately 18 minutes via Tropicana Ave.',
    ],
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

const homeDeepDive = [
  {
    title: 'Spanish Trail Homes Market Pulse',
    paragraphs: [
      'Spanish Trail homes continue to command premium attention across the west side of the Las Vegas Valley, and 2025 has only intensified demand. Inventory remains intentionally limited, with many sellers opting for private network releases before a property ever reaches the MLS. That means buyers who rely only on public search portals can miss out on Spanish Trail real estate opportunities that align perfectly with their wish list. Working alongside Dr. Janet Duffy provides immediate access to those private channels, pricing intelligence pulled from Berkshire Hathaway HomeServices data, and an honest assessment of where each home sits within the neighborhood’s value spectrum.',
      'The average list-to-sale window for well-prepared Spanish Trail homes has tightened to under 30 days, and buyers often submit offers that include appraisal-gap coverage or flexible rent-backs to appeal to sellers who are simultaneously shopping within the guard gates. Whether you are analyzing the Estates, the Villas, or a golf villa in the Links, understanding micro market velocity is vital. Dr. Duffy maps each enclave’s historical absorption rates, identifies the weeks that attract out-of-state cash buyers, and guides timing strategies so you secure the right property without overpaying.'
    ],
  },
  {
    title: 'Lifestyle Advantages Inside the Guard Gates',
    paragraphs: [
      'Spanish Trail real estate is about more than square footage; it is about instant access to a curated lifestyle that can be felt the moment you drive through the mature tree-lined boulevards. Residents wake up to golf course sunrises, stroll over to the 50,000-square-foot clubhouse for a fitness session, then spend evenings at the Bar & Grill surrounded by neighbors who quickly become lifelong friends. Families leverage the gated streets for cycling, pop-up pickleball matches, and community events hosted on the club lawn. Every home—whether a lock-and-leave villa or a custom estate—sits within minutes of wellness programming, concierge support, and tennis professionals who know members by name.',
      'Because Dr. Duffy lives and works in the western Las Vegas market, she maintains a daily pulse on how residents actually use their amenities. She can recommend which Spanish Trail homes offer the quickest cart path access for golfers who play multiple times a week, which streets capture the best sunset views, and which enclaves provide enhanced security for seasonal homeowners. Her concierge introductions help buyers join social clubs or interest groups even before closing, ensuring the transition from visitor to resident feels effortless and deeply personal.'
    ],
  },
  {
    title: 'Architecture, Design, and Renovation Guidance',
    paragraphs: [
      'Spanish Trail homes showcase a rare blend of timeless architecture and refreshed interiors. Many original estates were crafted by renowned architects who prioritized natural light, interior courtyards, and wide setbacks that frame the Robert Trent Jones Jr. fairways. Over the past decade, homeowners have invested heavily in modernizing kitchens, spa baths, and outdoor lounges, yet the community’s design guidelines maintain a cohesive, elevated aesthetic. Buyers interested in renovation opportunities benefit from Dr. Duffy’s vetted roster of contractors who understand the neighborhood’s review process and can deliver turnkey transformations without compromising historical character.',
      'For clients seeking a contemporary canvas, Dr. Duffy spotlights Spanish Trail real estate offerings that already feature tall pocket doors, climate-controlled wine walls, smart-home integration, and resort-style pools with Baja shelves. For those who prefer to curate their own finishes, she outlines cost ranges, available incentives from local lenders for energy upgrades, and resale strategies that maximize long-term equity. Her design consultations also highlight how to create multi-generational spaces—casitas, flex suites, and wellness studios—that align with today’s luxury buyer expectations.'
    ],
  },
  {
    title: 'Investment, Financing, and Advisory Support',
    paragraphs: [
      'Spanish Trail real estate appeals to both primary homeowners and sophisticated investors who recognize the stability of guard-gated communities minutes from Allegiant Stadium, the Strip, and Summerlin. Rental demand for long-term executive leases remains strong, particularly for properties near the Tropicana gate that offer quick freeway access. Dr. Duffy collaborates with Berkshire Hathaway HomeServices mortgage partners to provide scenario planning, whether you need jumbo financing, portfolio loans, or cross-collateralization options that leverage existing assets. She also introduces trusted CPAs who structure 1031 exchanges or wealth advisors who evaluate Spanish Trail homes as part of a broader estate strategy.',
      'Clients appreciate that her counsel extends beyond closing. Quarterly market reviews outline appreciation trends, tax updates impacting Nevada homeowners, and capital improvement projects planned by the Country Club. When it is time to sell, Dr. Duffy’s listing blueprint—complete with professional staging, targeted digital marketing, and private preview events—ensures Spanish Trail homes are positioned to secure the strongest offers. The result: a full-circle advisory experience from acquisition through resale, aligned with the expectations of discerning Las Vegas clientele.'
    ],
  },
]

const homeFaq = [
  {
    question: 'How competitive is the current market for Spanish Trail homes?',
    answer:
      'Inventory in Spanish Trail remains limited, with many properties selling within the first two weeks when they are priced correctly. Dr. Janet Duffy prepares buyers with lender introductions, appraisal strategies, and neighborhood intel so they can move decisively. Her Berkshire Hathaway HomeServices network also uncovers private offerings and upcoming listings that never hit public portals, giving clients a competitive advantage.',
  },
  {
    question: 'Which Spanish Trail neighborhoods are best for full-time residents versus seasonal owners?',
    answer:
      'Full-time residents often gravitate toward the Estates, Estates West, and Springs enclaves because they offer larger lots, dedicated office space, and proximity to top-rated schools. Seasonal owners frequently choose the Courtyards, Gardens, and Villas for their lock-and-leave convenience and optional concierge services. Dr. Duffy maps commute times, HOA details, and lifestyle amenities to match each buyer with the right micro-neighborhood.',
  },
  {
    question: 'What should buyers budget for HOA dues and club memberships?',
    answer:
      'HOA assessments vary by enclave but generally range from the mid-$200s to the mid-$400s per month, covering guard-gate staffing, landscaping, and community maintenance. Club memberships are optional for homeowners and include multiple categories—full golf, young executive, social, and corporate. Dr. Duffy outlines the latest fee schedules, initiation options, and financing considerations so clients can plan holistically.',
  },
  {
    question: 'Are there renovation restrictions for Spanish Trail homes?',
    answer:
      'The Architectural Review Committee maintains community standards, but it also supports thoughtful modernization. Homeowners submit plans that detail exterior elevations, materials, and landscaping. Dr. Duffy partners with designers experienced in Spanish Trail guidelines to ensure approvals move quickly and projects enhance both property value and neighborhood aesthetics.',
  },
  {
    question: 'How can sellers maximize exposure for Spanish Trail listings?',
    answer:
      'Sellers working with Dr. Duffy benefit from multi-layered marketing: Berkshire Hathaway HomeServices global syndication, hyperlocal campaigns targeting 89117 and Summerlin move-up buyers, and private preview events for Dr. Duffy’s concierge clients. In addition, she deploys analytics-driven pricing models and property-specific landing pages to capture leads around the clock—essential for Spanish Trail homes where discerning buyers often preview online before booking a showing.',
  },
]

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const featuredListingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: featuredListings.map((listing, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: listing.href,
    name: `${listing.address} | ${listing.price}`,
    item: {
      '@type': 'SingleFamilyResidence',
      name: listing.address,
      address: listing.address,
      numberOfRooms: listing.type,
      price: listing.price,
      url: listing.href,
    },
  })),
}

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <RealScoutSection
        id="bhhs-listings"
        title="Berkshire Hathaway Listings in Spanish Trail"
        description="Curated inventory between $500K and $600K inside the 89117 guard gates. For estate homes, secondary-gated enclaves, or off-market introductions, connect with Dr. Janet Duffy."
        priceMin="500000"
        priceMax="600000"
      />
      <IntroSection />
      <StatsSection />
      <NeighborhoodSpotlightsSection />
      <MarketOverviewSection />
      <LocalEssentialsSection />
      <DeepDiveNarrativesSection />
      <FeaturedInventorySection />
      <RealEstateSection />
      <ListingsSection />
      <LifestyleSection />
      <NearbyCommunitiesSection />
      <FAQSection />
      <CTASection />
      <Script id="home-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homeFaqSchema)}
      </Script>
      <Script id="featured-listings-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(featuredListingsSchema)}
      </Script>
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
            "linear-gradient(rgba(15, 43, 30, 0.55), rgba(15, 43, 30, 0.8)), url('https://images.unsplash.com/photo-1474926143295-7f42d6764bed?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-primary-foreground sm:py-32 lg:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Berkshire Hathaway HomeServices Presents
          </p>
          <h1
            id="hero-heading"
            className="font-[var(--font-playfair)] text-4xl font-semibold tracking-[0.08em] leading-tight sm:text-5xl lg:text-6xl"
          >
            Spanish Trail Homes · 89117 Intelligence
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
            Guard-gated living west of the Las Vegas Strip with direct access to Tropicana Avenue, Rainbow Boulevard, and Spring Valley conveniences. Track new Spanish Trail listings, real-time market shifts, and neighborhood insights curated by Dr. Janet Duffy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em] shadow-md shadow-primary/25"
          >
            <Link href="#bhhs-listings">See What’s New</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 bg-background/95 px-8 py-3 text-xs uppercase tracking-[0.4em] text-[#0d3b2c] shadow-md shadow-primary/10 hover:bg-[#0d3b2c]/10"
          >
            <Link href="/contact">Plan a Private Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2
            id="intro-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Local expertise across Spanish Trail’s guard gates.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail spans Tropicana Avenue, Rainbow Boulevard, and Hacienda Avenue, just west of I-215. The 640-acre master plan pairs 24/7 security with shimmering lakes, tree-lined fairways, and resort amenities—all minutes from UnCommons, The Bend, and Spring Valley essentials.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            As one of Las Vegas’s original private golf communities, Spanish Trail attracts primary residents and second-home owners alike. Expect daily conveniences—Whole Foods, Trader Joe’s, Downtown Summerlin—within a 10- to 15-minute radius, plus top-tier private schools moments away.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            Quick Facts
          </p>
          <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd>Spanish Trail, 89117 · Tropicana Ave. & Rainbow Blvd.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Gate Access</dt>
              <dd>East & West Tropicana gates + Hacienda residents gate</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Lifestyle</dt>
              <dd>Golf, tennis, aquatics, and curated social programming</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Nearby</dt>
              <dd>UnCommons, The Bend, Allegiant Stadium, Downtown Summerlin</dd>
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
    <section className="border-y border-[#0b2016] bg-[#0f2b1e]" aria-label="Community highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-3">
        {overviewStats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#1f4a35]/80 bg-[#16402d] p-6 shadow-lg shadow-black/20"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8f5ef]/75">
              {item.label}
            </p>
            <p className="mt-4 font-[var(--font-playfair)] text-3xl text-[#f8f5ef]">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function NeighborhoodSpotlightsSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="neighborhood-spotlights-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Neighborhood Spotlights
          </p>
          <h2
            id="neighborhood-spotlights-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Micro-neighborhoods that define Spanish Trail living
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Each enclave inside the gates offers a distinct vibe—from legacy custom estates with sweeping golf frontage to turn-key villas steps from the clubhouse. Here’s what buyers ask about most.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {neighborhoodSpotlights.map((spotlight) => (
            <div
              key={spotlight.name}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                {spotlight.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#372a20]/85">
                {spotlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketOverviewSection() {
  return (
    <section className="border-y border-border/40 bg-white" aria-labelledby="market-overview-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Market Insights</p>
            <h2
              id="market-overview-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Berkshire Hathaway HomeServices Snapshot
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dr. Janet Duffy leverages real-time Berkshire Hathaway HomeServices data to position your listing or offer. Spanish Trail currently carries a balanced mix of residences—from golf villas to custom estates—inviting both primary homeowners and investors.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails">View Full Market Report</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {marketHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-md shadow-primary/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">{item.label}</p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl text-[#1f2a24]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {item.trend} change
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocalEssentialsSection() {
  return (
    <section className="bg-[#ebe0d3] py-20 sm:py-24" aria-labelledby="local-essentials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Local Essentials
          </p>
          <h2
            id="local-essentials-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            What life looks like inside the 89117 guard gates
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From championship golf mornings to sunset dinners on Rainbow Boulevard, Spanish Trail residents enjoy a curated lifestyle with everything within minutes. Here are the go-to spots our buyers ask about first.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {localEssentials.map((section) => (
            <div key={section.title} className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                {section.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#372a20]/85">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeepDiveNarrativesSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="deep-dive-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Insights</p>
          <h2 id="deep-dive-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            What buyers and sellers must know about Spanish Trail homes in 2025
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Dr. Janet Duffy distills on-the-ground research, Berkshire Hathaway HomeServices analytics, and more than a decade of luxury experience to guide each phase of your move. Use the following briefings to understand how Spanish Trail real estate performs, the amenities residents prioritize, and the strategic moves that keep you ahead of competing offers.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {homeDeepDive.map((topic) => (
            <article key={topic.title} className="space-y-6 rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-8 shadow-lg shadow-primary/10">
              <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">
                {topic.title}
              </h3>
              {topic.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-[#372a20]/85">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedInventorySection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="featured-inventory-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Featured Inventory</p>
            <h2
              id="featured-inventory-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Signature Listings Curated by Berkshire Hathaway
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Explore a sampling of Spanish Trail residences currently represented through Berkshire Hathaway HomeServices Nevada Properties. Schedule a private tour with Dr. Janet Duffy to access the full portfolio, including off-market opportunities.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails#featured-listings">
              Speak with Dr. Duffy
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">{listing.mls}</p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {listing.address}
                </h3>
                <p className="text-sm text-[#372a20]/80">{listing.type}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#0f2b1e]">{listing.price}</span>
                <Button
                  asChild
                  variant="link"
                  className="gap-1 text-xs uppercase tracking-[0.3em] text-primary"
                >
                  <Link href={listing.href} target="_blank" rel="noopener noreferrer">
                    View Listing
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <Script id="featured-listings-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(featuredListingsSchema)}
        </Script>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Spanish Trail Homes FAQ</p>
          <h2 id="faq-heading" className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Answers to the most frequent Spanish Trail real estate questions
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Buyers and sellers trust Dr. Janet Duffy to navigate the nuances of guard-gated transactions. These answers provide clarity on timing, pricing, and strategy so you can move forward with confidence. Need deeper insight? Book a private consultation for guidance tailored to your goals.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {homeFaq.map((item) => (
            <article key={item.question} className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
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

function RealEstateSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="real-estate-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2
              id="real-estate-heading"
              className="font-[var(--font-playfair)] text-3xl text-[#372a20] sm:text-4xl"
            >
              Diverse real estate opportunities.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Spanish Trail offers more than 1,200 residences ranging from attached townhomes to custom estates, many positioned on the golf course or with Red Rock Canyon views. Select enclaves feature additional privacy gates within the community, ensuring a tailored experience for every homeowner.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Residences were primarily constructed from the mid-1980s through the 1990s, combining timeless architecture with mature landscapes that only decades of stewardship can produce.【https://luxuryhomesoflasvegas.com/communities/spanish-trail/】
            </p>
            <div className="rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5237]">
                Neighborhoods
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#372a20]/80 sm:grid-cols-3">
                {neighborhoodClusters.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center rounded-full border border-[#d8cdbf] bg-white px-3 py-1 text-[#1f2a24]"
                  >
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
    <section className="border-y border-border/40 bg-white" aria-labelledby="listings-heading">
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
            className="rounded-full border-[#0d3b2c]/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-[#0d3b2c] hover:bg-[#0d3b2c]/10"
          >
            <Link href="/buyers">View All Inventory</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.address}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                  Spanish Trail
                </p>
                <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                  {listing.address}
                </h3>
                <p className="text-sm text-[#1f2a24]/80">{listing.type}</p>
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
    <section className="bg-[#f9f4eb] py-20 sm:py-24" aria-labelledby="lifestyle-heading">
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
              className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10"
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
    <section className="border-y border-border/40 bg-white" aria-labelledby="nearby-heading">
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
        <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-lg shadow-primary/10">
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
            className="rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.4em] text-[#0f2b1e] hover:bg-[#f1eadd]"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/70 bg-transparent px-7 py-3 text-xs uppercase tracking-[0.4em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/sellers">Get a Valuation</Link>
          </Button>
        </div>
    </div>
    </section>
  )
}
