import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero-background'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'

const aboutFaq = [
  {
    question: 'What makes Dr. Janet Duffy different from other Spanish Trail real estate agents?',
    answer:
      'Dr. Duffy brings a unique combination of academic research in organizational leadership, Berkshire Hathaway HomeServices resources, and daily Spanish Trail immersion. With a Ph.D. focused on high-trust advisory relationships, she applies data-led preparation, concierge project management, and deep club/community fluency to every transaction. Her approach translates complex market data into actionable strategy while coordinating multi-disciplinary teams with discretion.',
  },
  {
    question: 'How many Spanish Trail families has Dr. Duffy worked with?',
    answer:
      'Dr. Duffy has advised over 500 Spanish Trail families across purchases, sales, and long-range planning. Her daily presence inside the community—reviewing listings, coordinating with gate staff, and previewing renovations—keeps clients ahead of market headlines and positioned to act when the right opportunity appears.',
  },
  {
    question: 'What credentials and awards has Dr. Janet Duffy received?',
    answer:
      'Dr. Duffy holds a Ph.D. in Organizational Leadership and is a Certified Luxury Marketing Specialist (CLHMS). She has been recognized as Berkshire Hathaway HomeServices Luxury Golf Homes (top 2% network-wide), Las Vegas REALTORS® Top 25 Luxury Producer, and RealScout Spanish Trail Market Expert. These awards reflect consistent client outcomes and a commitment to Spanish Trail\'s reputation as Las Vegas\'s premier guard-gated enclave.',
  },
  {
    question: 'How does Dr. Duffy\'s research background benefit clients?',
    answer:
      'Her doctorate research on trust-centered decision making shapes her real estate practice. Every listing launch, private tour, and negotiation is grounded in clarity, accountability, and thoughtfully shared analytics. This academic foundation helps clients understand not just what to do, but why—leading to more confident decisions and better long-term outcomes.',
  },
  {
    question: 'What concierge services does Dr. Duffy provide?',
    answer:
      'Beyond traditional real estate services, Dr. Duffy coordinates pre-listing renovations, relocation logistics, vetted designers, stagers, lenders, and membership teams. She maintains a 24-hour concierge response cadence for active negotiations and provides introductions to HOA boards, club leadership, and philanthropic partners to help clients integrate into the Spanish Trail community.',
  },
]

const aboutFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aboutFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageUrl = 'https://www.spanishtrailhomes.com/about'

const aboutWebPageSchema = createWebPageSchema({
  name: 'About Dr. Janet Duffy | Spanish Trail Homes',
  description:
    'Learn how Dr. Janet Duffy blends data, concierge service, and Berkshire Hathaway HomeServices resources to guide Spanish Trail clients.',
  path: '/about',
  type: 'AboutPage',
})

const aboutPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Janet Duffy',
  url: pageUrl,
  image: 'https://www.spanishtrailhomes.com/images/janet-duffy.jpg',
  jobTitle: 'REALTOR® | Berkshire Hathaway HomeServices Nevada Properties',
  email: 'mailto:DrDuffySells@SpanishTrailHomes.com',
  telephone: '+1-702-766-3299',
  areaServed: [
    'Spanish Trail, Las Vegas, Nevada',
    'Southwest Las Vegas, Nevada',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
  },
  memberOf: [
    'Las Vegas REALTORS®',
    'Institute for Luxury Home Marketing',
    'National Association of REALTORS®',
  ],
  award: [
    "2025 Berkshire Hathaway HomeServices Luxury Golf Homes",
    '2024 Las Vegas REALTORS® Top 25 Luxury Producer',
    '2023 RealScout Spanish Trail Market Expert',
  ],
  sameAs: [
    'https://www.facebook.com/spanishtrailhomes',
    'https://www.instagram.com/spanishtrailhomes',
    'https://www.linkedin.com/company/spanish-trail-homes/?viewAsMember=true',
  ],
}

const approachPillars = [
  {
    title: 'Data-led preparation',
    description:
      'Weekly absorption dashboards, pricing models, and RealScout demand reports frame every client conversation so decisions reflect today’s Spanish Trail market—never stale comps.',
  },
  {
    title: 'Concierge project management',
    description:
      'From pre-listing renovations to relocation logistics, Dr. Duffy coordinates vetted designers, stagers, lenders, and membership teams to protect timelines and privacy.',
  },
  {
    title: 'Club and community fluency',
    description:
      'Access to membership directors, HOA boards, and private broker circles keeps clients informed about waitlists, architectural guidelines, and off-market opportunities.',
  },
]

const credentials = [
  'Ph.D. in Organizational Leadership – research focused on high-trust advisory relationships',
  'Berkshire Hathaway HomeServices Luxury Golf Homes (top 2% network-wide)',
  'Institute for Luxury Home Marketing member & Certified Luxury Marketing Specialist (CLHMS)',
  'RealScout Spanish Trail Market Expert (2023–present)',
  'Frequent panelist for Las Vegas luxury market outlooks and guard-gated community briefings',
]

export const metadata: Metadata = {
  title: 'About Dr. Janet Duffy | Spanish Trail Homes',
  description:
    'Meet Dr. Janet Duffy, Berkshire Hathaway HomeServices REALTOR® and Spanish Trail community specialist delivering concierge real estate advisory.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    url: pageUrl,
    title: 'About Dr. Janet Duffy | Spanish Trail Homes',
    description:
      'Discover the concierge strategy and market expertise Dr. Janet Duffy brings to Spanish Trail buyers and sellers.',
    images: [
      createOgImageUrl({
        title: 'About Dr. Janet Duffy',
        subtitle: 'Spanish Trail REALTOR® • Concierge advisory',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Janet Duffy | Spanish Trail Homes',
    description:
      'Learn how Dr. Janet Duffy combines data, club insights, and concierge service for Spanish Trail clients.',
    images: [
      createOgImageUrl({
        title: 'Meet Dr. Janet Duffy',
        subtitle: 'Spanish Trail real estate leadership',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

export default function AboutPage() {
  return (
    <SiteShell>
      <HeroSection />
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
          />
        </div>
      </div>
      <StorySection />
      <ApproachSection />
      <CredentialsSection />
      <CommunitySection />
      <AboutFAQSection />
      <CTASection />
      <Script id="about-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutFaqSchema)}
      </Script>
      <Script id="about-webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutWebPageSchema)}
      </Script>
      <Script id="about-agent-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutPersonSchema)}
      </Script>
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden text-[#f8f5ef]" aria-labelledby="about-hero-heading">
      <HeroBackground
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&auto=format&fit=crop&w=2000"
        alt="Dr. Janet Duffy - Spanish Trail real estate agent and luxury home specialist in Las Vegas"
        overlayClassName="bg-gradient-to-b from-[#0f2b1e]/60 to-[#0f2b1e]/85"
        sizes="(max-width: 1024px) 100vw, 1200px"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-[#0f2b1e]/85" />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-28 text-center sm:py-32">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Spanish Trail Homes</p>
        <h1 id="about-hero-heading" className="font-heading text-3xl leading-tight sm:text-4xl">
          Advisory rooted in research, hospitality, and daily Spanish Trail immersion
        </h1>
        <p className="text-base leading-relaxed text-[#f8f5ef]/85 sm:text-lg">
          Dr. Janet Duffy blends a doctorate in organizational leadership, Berkshire Hathaway HomeServices resources, and
          on-the-ground market intel to help Spanish Trail clients move with confidence. From valuation prep to membership
          introductions, every step is orchestrated with discretion and concierge care.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="/contact">Plan a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-8 py-3 text-xs uppercase tracking-[0.35em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/awards">View Awards</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function StorySection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="story-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Background</p>
          <h2 id="story-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            A leadership doctorate meets Spanish Trail’s guard-gated lifestyle
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Before guiding Spanish Trail clients, Dr. Duffy built a career advising Fortune 500 leadership teams on
            trust-centered decision making. That research now shapes her real estate practice: every <Link href="/sellers" className="text-[#0f2b1e] underline-offset-4 hover:underline">listing launch</Link>, private
            tour, and negotiation is grounded in clarity, accountability, and thoughtfully shared analytics.
          </p>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Daily, you'll find her inside the community—reviewing new <Link href="/buyers" className="text-[#0f2b1e] underline-offset-4 hover:underline">Spanish Trail listings</Link>, catching up with gate staff, coordinating
            <Link href="/membership" className="text-[#0f2b1e] underline-offset-4 hover:underline"> club introductions</Link>, or previewing upcoming renovations. That boots-on-the-ground rhythm keeps clients ahead of the
            headlines and positioned to act the moment the right opportunity appears.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-[#f8f2e7] p-6 shadow-lg shadow-primary/10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f5237]">Quick facts</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-[#372a20]/85">
            <li>
              <strong className="font-semibold text-[#0f2b1e]">500+</strong> Spanish Trail families advised across purchases,
              sales, and long-range planning
            </li>
            <li>
              <strong className="font-semibold text-[#0f2b1e]">27-hole</strong> golf intel delivered weekly through RealScout
              demand reports and club coordination
            </li>
            <li>
              <strong className="font-semibold text-[#0f2b1e]">24-hour</strong> concierge response cadence for active
              negotiations and relocation timelines
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">Advisory Approach</p>
          <h2 id="approach-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Precision, privacy, and concierge execution for every client
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Spanish Trail decisions require more than MLS snapshots. Dr. Duffy translates <Link href="/spanish-trail-market-report" className="text-[#0f2b1e] underline-offset-4 hover:underline">gated-community data</Link> into actionable
            strategy, orchestrating multi-disciplinary teams with the discretion expected of high-net-worth households. Explore our <Link href="/spanish-trail-insights" className="text-[#0f2b1e] underline-offset-4 hover:underline">Spanish Trail insights</Link> for deeper market analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {approachPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="space-y-3 rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-lg shadow-primary/10"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f2b1e]">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-[#372a20]/85">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="credentials-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">Credentials & Recognition</p>
          <h2 id="credentials-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Recognized leadership inside Berkshire Hathaway HomeServices and beyond
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Awards and designations reflect consistent client outcomes—and a commitment to Spanish Trail’s long-term
            reputation as Las Vegas’s premier guard-gated enclave.
          </p>
        </div>
        <ul className="space-y-3 rounded-3xl border border-border/60 bg-[#fdf9f3] p-6 text-sm leading-relaxed text-[#372a20]/85 shadow-lg shadow-primary/10">
          {credentials.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-block size-2 rounded-full bg-[#0f2b1e]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CommunitySection() {
  return (
    <section className="bg-[#0f2b1e] py-20 text-[#f8f5ef] sm:py-24" aria-labelledby="community-heading">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Community Stewardship</p>
          <h2 id="community-heading" className="font-heading text-3xl text-white sm:text-4xl">
            Spanish Trail contributions extend beyond transactions
          </h2>
          <p className="text-base leading-relaxed text-[#f8f5ef]/85">
            Dr. Duffy collaborates with HOA boards, club leadership, and philanthropic partners to keep Spanish Trail vibrant.
            Clients receive introductions to committees, social programs, and charitable initiatives that align with their
            passions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Club programming support',
              description:
                'Advises membership teams on concierge onboarding, tournament hospitality, and cross-club collaborations that attract discerning buyers.',
            },
            {
              title: 'Neighborhood advocacy',
              description:
                'Shares market data with HOA leaders to inform architectural updates, security enhancements, and reserves planning.',
            },
            {
              title: 'Philanthropic partnerships',
              description:
                'Active participant in Las Vegas charitable events, facilitating sponsorships and donor outreach within the guard-gated community.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8f5ef]/80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutFAQSection() {
  return (
    <section className="bg-[#f8f2e7] py-20 sm:py-24" aria-labelledby="about-faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">About Dr. Janet Duffy FAQ</p>
          <h2 id="about-faq-heading" className="font-heading text-3xl text-[#1f2a24] sm:text-4xl">
            Frequently asked questions about working with Dr. Janet Duffy
          </h2>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Learn more about Dr. Duffy's approach, credentials, and how she helps Spanish Trail clients achieve their real estate goals.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {aboutFaq.map((item) => (
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

function CTASection() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="about-cta-heading">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-[#0f2b1e] px-8 py-16 text-center text-[#f8f5ef] shadow-xl shadow-primary/20">
        <p className="text-xs uppercase tracking-[0.5em] text-[#f8f5ef]/70">Work With Dr. Janet Duffy</p>
        <h2 id="about-cta-heading" className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
          Let's design the next chapter of your Spanish Trail story
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#f8f5ef]/85">
          Whether you're refining an estate sale, relocating into the guard gates, or benchmarking your market position, Dr.
          Duffy brings disciplined planning, concierge resources, and unrivaled neighborhood fluency to every decision.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#f8f5ef] px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#0f2b1e] hover:bg-[#f6ead7]"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#f8f5ef]/60 px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#f8f5ef] hover:bg-white/10"
          >
            <Link href="/buyers">Plan Your Move</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

