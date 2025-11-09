import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Weddings & Events | Spanish Trail Country Club',
  description:
    'Host weddings, private celebrations, and golf outings at Spanish Trail Country Club with bespoke planning and panoramic Las Vegas views.',
}

export default function EventsPage() {
  return (
    <SiteShell>
      <EventsHero />
      <WeddingsSection />
      <PrivateEventsSection />
      <GolfOutingsSection />
      <ContactSection />
    </SiteShell>
  )
}

function EventsHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="events-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,30,0.55), rgba(15,43,30,0.75)), url('https://images.unsplash.com/photo-1520854221050-0f4caff449fb?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Weddings & Events
        </p>
        <h1
          id="events-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Celebrate life&apos;s signature moments surrounded by Spanish Trail&apos;s
          private beauty.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          From romantic ceremonies on the Lakes Course lawn to black-tie galas in
          our skyline-view ballroom, our planning team curates every detail.
        </p>
      </div>
    </section>
  )
}

function WeddingsSection() {
  return (
    <section
      id="weddings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="weddings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Weddings
            </p>
            <h2
              id="weddings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Sunrise vows, twilight receptions, everlasting memories.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Exchange vows beneath towering palms with the cascading Lakes Course
              waterfall as your backdrop. Transition to cocktail hour on the
              terrace before dining in a ballroom bathed in candlelight and Strip
              skyline views.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• Dedicated wedding specialist and curated vendor partners</p>
              <p>• Ceremony capacity up to 200 guests, ballroom dining up to 250</p>
              <p>• Custom menus created by our executive culinary team</p>
            </div>
            <Button
              asChild
              className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
            >
              <Link href="#contact">Request Wedding Consultation</Link>
            </Button>
          </div>

          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1496439786094-e6970dd64573?q=80&w=1600&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Outdoor wedding ceremony space at Spanish Trail Country Club"
          />
        </div>
      </div>
    </section>
  )
}

function PrivateEventsSection() {
  return (
    <section
      id="private-events"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="private-events-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Corporate Retreats',
              copy: 'Breakout spaces, AV-equipped boardrooms, and curated culinary experiences that impress clients and teams alike.',
            },
            {
              title: 'Milestone Celebrations',
              copy: 'Anniversaries, birthdays, and mitzvahs receive elevated service with custom decor and entertainment.',
            },
            {
              title: 'Holiday Galas',
              copy: 'Sparkling lights, themed menus, and live music transform the clubhouse into an unforgettable venue.',
            },
            {
              title: 'Social Clubs',
              copy: 'Fashion shows, charity luncheons, and tasting events are designed alongside our in-house creative team.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-sm"
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

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Private Events
          </p>
          <h2
            id="private-events-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Flexible venues with refined service.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Our event professionals manage floorplans, timelines, curated menus,
            and production so you can focus on hosting. Choose from formal ballrooms,
            intimate wine cellar dinners, or poolside soirées.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <Link href="#contact">Plan Your Celebration</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function GolfOutingsSection() {
  return (
    <section
      id="golf-outings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="golf-outings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">
              Golf Outings
            </p>
            <h2
              id="golf-outings-heading"
              className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
            >
              Tournament-caliber experiences for clients and causes.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Showcase your brand or mission with a private shotgun start, custom
              on-course activations, and awards receptions overlooking our manicured
              fairways.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>• Professional scoring, cart staging, and player concierge</p>
              <p>• Culinary stations on-course or in the clubhouse</p>
              <p>• Logo merchandise and gifting through our golf shop</p>
            </div>
            <Button
              asChild
              className="rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em]"
            >
              <Link href="#contact">Reserve a Date</Link>
            </Button>
          </div>

          <div
            className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1493906401288-9628bd10ba1b?q=80&w=1600&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Golf outing staging area at Spanish Trail Country Club"
          />
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Begin Planning
        </p>
        <h2
          id="contact-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Share your vision with our events team.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Call{' '}
          <Link
            href="tel:17023645050"
            className="text-primary underline-offset-4 hover:underline"
          >
            702.364.5050
          </Link>{' '}
          or email{' '}
          <Link
            href="mailto:events@spanishtrailhomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            events@spanishtrailhomes.com
          </Link>
          . Prefer online inquiries? Complete the form and our planners will respond
          within one business day.
        </p>

        <form className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First & Last Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              required
            />
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
            <label htmlFor="eventType" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Wedding</option>
              <option>Private Celebration</option>
              <option>Corporate Event</option>
              <option>Golf Outing</option>
              <option>Other</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="details" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Event Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="Share preferred dates, guest count, and special requests."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

