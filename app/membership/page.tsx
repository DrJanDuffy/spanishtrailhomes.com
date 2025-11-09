import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Membership | Spanish Trail Country Club',
  description:
    'Discover golf, social, and corporate membership options at Spanish Trail Country Club. Request information or schedule a tour.',
}

const membershipOptions = [
  {
    title: 'Full Golf Membership',
    copy: 'Unlimited access to all 27 holes, practice facilities, dining venues, social calendar, and wellness amenities.',
  },
  {
    title: 'Young Executive Membership',
    copy: 'Exclusive pricing and programming for members under 40, including mentorship programs and networking events.',
  },
  {
    title: 'Corporate Golf Membership',
    copy: 'Flexible designees, hosted client events, and branded experiences tailored for business development.',
  },
  {
    title: 'Social & Lifestyle Membership',
    copy: 'Enjoy dining, tennis, pickleball, pools, and all clubhouse events without full golf privileges.',
  },
]

export default function MembershipPage() {
  return (
    <SiteShell>
      <MembershipHero />
      <OfferingsSection />
      <ValueHighlights />
      <YoungExecutiveSection />
      <InquirySection />
    </SiteShell>
  )
}

function MembershipHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="membership-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,30,0.55), rgba(15,43,30,0.75)), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Membership
        </p>
        <h1
          id="membership-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          A private club community curated for golfers, families, and tastemakers.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Unlock championship golf, vibrant social programming, and concierge-level
          service minutes from the Las Vegas Strip.
        </p>
      </div>
    </section>
  )
}

function OfferingsSection() {
  return (
    <section
      id="offerings"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="offerings-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Membership Offerings
          </p>
          <h2
            id="offerings-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Tailored access, shared excellence.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Select the experience that fits your lifestyle—each membership includes
            dedicated concierge support and invites to our signature events.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {membershipOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-border/50 bg-card/90 p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                {option.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {option.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueHighlights() {
  return (
    <section
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Why Spanish Trail
          </p>
          <h2
            id="value-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Legacy-level membership with modern advantages.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Enjoy reciprocal privileges across premier clubs, members-only travel,
            curated experiences in partnership with Las Vegas luxury brands, and
            personalized service that anticipates every need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Concierge Team',
              copy: 'Dedicated ambassadors coordinate tee times, dining reservations, and event planning.',
            },
            {
              title: 'Member Travel',
              copy: 'Exclusive golf trips and wine-country experiences hosted by Spanish Trail professionals.',
            },
            {
              title: 'Wellness Access',
              copy: 'Fitness pavilion, spa partnerships, and holistic programming curated for members.',
            },
            {
              title: 'Community Impact',
              copy: 'Philanthropic initiatives and charitable tournaments led by our members.',
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
      </div>
    </section>
  )
}

function YoungExecutiveSection() {
  return (
    <section
      id="young-executive"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="young-executive-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Young Executive
          </p>
          <h2
            id="young-executive-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Designed for emerging leaders in Las Vegas.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Enjoy progressive dues, mentorship events with established members, and
            professional networking mixers that accelerate your growth on and off the
            course.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Member referral incentives and flexible payment options</p>
            <p>• Monthly executive roundtables and speaker series</p>
            <p>• Couples leagues and young-family programming</p>
          </div>
        </div>

        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524600123475-9091d53c6c87?q=80&w=1600&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Members socializing at Spanish Trail Country Club"
        />
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section
      id="inquiry"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="inquiry-heading"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Request Information
        </p>
        <h2
          id="inquiry-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          Connect with our membership concierge.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Submit the form below and we will contact you within one business day.
          Prefer to speak directly? Call{' '}
          <Link
            href="tel:17023645050"
            className="text-primary underline-offset-4 hover:underline"
          >
            702.364.5050
          </Link>{' '}
          or email{' '}
          <Link
            href="mailto:membership@spanishtrailhomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            membership@spanishtrailhomes.com
          </Link>
          .
        </p>

        <form className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
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
          <div className="sm:col-span-2 flex flex-col gap-2">
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
              <option>Social & Lifestyle Membership</option>
              <option>Corporate Golf Membership</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share preferred dates for a tour, interests, or referrals."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

