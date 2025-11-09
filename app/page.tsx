'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const golfCourses = [
  {
    name: 'Sunrise Course',
    description:
      'Sweeping vistas and forgiving fairways welcome every tee time with golden-hour light.',
    yardage: 'Par 36 • 3,463 Yards',
    image:
      'https://images.unsplash.com/photo-1501856777433-9fbb13f0b2c6?q=80&w=1920&auto=format&fit=crop',
  },
  {
    name: 'Lakes Course',
    description:
      'Water-guarded greens and mature trees carve a strategic path through Spanish Trail.',
    yardage: 'Par 36 • 3,540 Yards',
    image:
      'https://images.unsplash.com/photo-1511296265584-9bab7f103259?q=80&w=1920&auto=format&fit=crop',
  },
  {
    name: 'Canyon Course',
    description:
      'Elevation changes and desert vistas deliver the boldest test in our 27-hole collection.',
    yardage: 'Par 36 • 3,515 Yards',
    image:
      'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=1920&auto=format&fit=crop',
  },
]

const amenities = [
  'Private 50,000 sq. ft. clubhouse',
  'Elegant dining & wine cellar',
  'Aquatic center with junior Olympic pool',
  'State-of-the-art fitness pavilion',
  'Five lighted tennis courts & pickleball',
  'Full social calendar for members & guests',
]

const testimonials = [
  {
    quote:
      'Spanish Trail has redefined what a private club experience should be. Every visit feels like a getaway.',
    name: 'Michael R., Member since 2014',
  },
  {
    quote:
      'Our wedding on the Lakes Course lawn was flawless. The team anticipated every detail with grace.',
    name: 'Samantha & Luis',
  },
  {
    quote:
      'From teaching clinics to weekly couples’ play, there is always an unforgettable way to enjoy the club.',
    name: 'Dana H., Social Member',
  },
]

const navigation = [
  {
    label: 'Club',
    href: '#club',
    children: [
      { label: 'Amenities', href: '#amenities' },
      { label: 'History', href: '#club-history' },
    ],
  },
  {
    label: 'Golf',
    href: '#golf',
    children: [
      { label: 'Course Tour', href: '#courses' },
      { label: 'Golf Outings', href: '#outings' },
      { label: 'Scorecard', href: '#scorecard' },
      { label: 'Guest Info', href: '#guest-info' },
    ],
  },
  {
    label: 'Inquiries',
    href: '#inquiries',
    children: [
      { label: 'Membership', href: '#membership' },
      { label: 'Weddings', href: '#weddings' },
      { label: 'Private Events', href: '#events' },
      { label: 'Golf Outings', href: '#outings' },
    ],
  },
]

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopBar />
      <header className="relative z-20 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#" aria-label="Spanish Trail Country Club home">
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Spanish Trail Country Club
              </p>
              <p className="font-[var(--font-playfair)] text-2xl font-semibold tracking-wide text-primary">
                Las Vegas, Nevada
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-secondary"
                >
                  {item.label}
                </Link>
                <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="transition-colors hover:text-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              asChild
              variant="link"
              className="text-xs uppercase tracking-[0.2em]"
            >
              <Link href="tel:17023645050">Call 702.364.5050</Link>
            </Button>
            <Button
              variant="secondary"
              className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
            >
              Member Login
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-full border border-border/60 p-2 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border/60 bg-background/95 px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="transition-colors hover:text-secondary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <Button asChild variant="link" className="justify-start px-0">
                  <Link href="tel:17023645050">Call 702.364.5050</Link>
                </Button>
                <Button className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]">
                  Member Login
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex flex-1 flex-col">
        <HeroSection />
        <HistorySection />
        <CourseShowcase />
        <AmenitiesSection />
        <OutingsSection />
        <MembershipSection />
        <TestimonialsSection />
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  )
}

function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border/60 bg-primary px-4 py-2 text-primary-foreground sm:px-6">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em]">
        <span>Est. 1984</span>
        <span className="h-3 w-px bg-primary-foreground/40" aria-hidden />
        <span>Private • Member-Owned</span>
      </div>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
        <Phone className="size-3.5" aria-hidden />
        <a
          href="tel:17023645050"
          className="underline-offset-4 transition-colors hover:underline"
        >
          702.364.5050
        </a>
      </div>
    </div>
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
          <Button className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.4em]">
            Explore Membership
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-primary/40 bg-background/90 px-8 py-3 text-xs uppercase tracking-[0.4em] text-primary hover:bg-background/60"
          >
            Plan an Event
          </Button>
        </div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section
      id="club"
      className="border-y border-border/60 bg-card/70"
      aria-labelledby="history-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-1 space-y-6 text-muted-foreground">
          <span id="club-history" className="sr-only">
            Spanish Trail Country Club History
          </span>
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
            href="#membership"
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
      id="golf"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="courses-heading"
    >
      <span id="courses" className="sr-only">
        Course Tour
      </span>
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
            View Scorecard
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
                  href="#course-tour"
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
      id="amenities"
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
      id="outings"
      className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground"
      aria-labelledby="outings-heading"
    >
      <span id="weddings" className="sr-only">
        Weddings
      </span>
      <span id="events" className="sr-only">
        Private Events
      </span>
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
          <Button className="rounded-full bg-secondary px-7 py-3 text-xs uppercase tracking-[0.4em] text-secondary-foreground hover:bg-secondary/90">
            Request Event Consultation
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
      id="membership"
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

        <form
          id="inquiries"
          className="space-y-5 rounded-3xl border border-border/60 bg-card/90 p-6 shadow-lg backdrop-blur sm:p-8"
        >
          <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
            Request Information
          </h3>
          <p className="text-sm text-muted-foreground">
            Complete the form and our membership concierge will reach out within
            one business day.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(702) 000-0000"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Full Golf Membership</option>
              <option>Young Executive Membership</option>
              <option>Social Membership</option>
              <option>Corporate Event</option>
              <option>Weddings & Celebrations</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share desired dates, party size, or special requests."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
            Submit Inquiry
          </Button>
        </form>
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
            Explore Social Calendar
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
      id="guest-info"
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
            <p>Concierge: <a href="tel:17023645050" className="text-primary underline-offset-4 hover:underline">702.364.5050</a></p>
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
            <Link href="https://www.instagram.com" className="transition-colors hover:text-secondary">
              Instagram
            </Link>
            <Link href="https://www.facebook.com" className="transition-colors hover:text-secondary">
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
