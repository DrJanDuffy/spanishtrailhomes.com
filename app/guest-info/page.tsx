import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Guest Information | Spanish Trail Country Club',
  description:
    'Plan your visit to Spanish Trail Country Club. Review directions, etiquette, locker access, and concierge contact details.',
}

export default function GuestInfoPage() {
  return (
    <SiteShell>
      <GuestHero />
      <DirectionsSection />
      <EtiquetteSection />
      <ArrivalSection />
      <ContactSection />
    </SiteShell>
  )
}

function GuestHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="guest-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,43,30,0.55), rgba(15,43,30,0.75)), url('https://images.unsplash.com/photo-1462212210362-162e9f0ce5a1?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background" />
      <div className="mx-auto max-w-5xl px-6 py-28 text-primary-foreground sm:py-40">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Guest Guide
        </p>
        <h1
          id="guest-hero-heading"
          className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Welcome to Spanish Trail Country Club.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
          We look forward to hosting you. Review the guide below for directions,
          arrival details, and clubhouse etiquette to make the most of your visit.
        </p>
      </div>
    </section>
  )
}

function DirectionsSection() {
  return (
    <section
      id="map"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="directions-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Directions
          </p>
          <h2
            id="directions-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Find your way to our private entrance.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail Country Club is located just six miles west of the Las
            Vegas Strip within the gated Spanish Trail community. Please check in
            at the security gate and inform the attendant of your host or event.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>5050 Spanish Trail Ln. Las Vegas, NV 89117</p>
            <p>Gate access available via Tropicana Ave. or Hacienda Ave.</p>
            <p>Allow extra travel time during peak weekend hours.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <iframe
            title="Spanish Trail Country Club Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1155408815076!2d-115.28609452341818!3d36.10914500736459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf27532cd0f3%3A0xba327d02c4e3709e!2sSpanish%20Trail%20Country%20Club!5e0!3m2!1sen!2sus!4v1731191452004!5m2!1sen!2sus"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function EtiquetteSection() {
  return (
    <section
      id="etiquette"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="etiquette-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Club Etiquette
          </p>
          <h2
            id="etiquette-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            A few notes to ensure every visit is exceptional.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Spanish Trail maintains a refined yet relaxed atmosphere. We kindly ask
            guests to observe the guidelines below throughout the clubhouse and
            golf facilities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Dress Code',
              copy: 'Collared shirts and tailored pants or golf shorts for men. Comparable attire for women. Denim is permitted in clubhouse casual areas when neat and without distressing.',
            },
            {
              title: 'Mobile Devices',
              copy: 'Please silence devices indoors. Discreet usage is permitted; voice calls should be taken in designated lounges or outdoors.',
            },
            {
              title: 'Pace of Play',
              copy: 'Maintain a four-hour round. Allow faster groups to play through and repair ball marks and divots.',
            },
            {
              title: 'Tipping',
              copy: 'Gratuities for valet, locker room, and service staff are appreciated and may be charged to your host member when approved.',
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

function ArrivalSection() {
  return (
    <section
      className="bg-background py-20 sm:py-24"
      aria-labelledby="arrival-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            Arrival & Amenities
          </p>
          <h2
            id="arrival-heading"
            className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
          >
            Valet, locker rooms, and on-site services.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Complimentary valet parking is available at the clubhouse entrance. Our
            locker attendants will provide day lockers, shoe care, and fresh towels.
            Spa services and retail offerings are available upon request.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Check-in with reception 20 minutes prior to your reservation.</p>
            <p>• Golf guests receive bag tags and cart staging assistance.</p>
            <p>• Dining reservations are recommended for dinner service.</p>
          </div>
        </div>

        <div
          className="h-full rounded-3xl border border-border/60 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=1600&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Clubhouse interior at Spanish Trail Country Club"
        />
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border/60 bg-card/80"
      aria-labelledby="guest-contact-heading"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-secondary">
          Concierge
        </p>
        <h2
          id="guest-contact-heading"
          className="font-[var(--font-playfair)] text-3xl text-foreground sm:text-4xl"
        >
          We are here to assist with every detail.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          For additional questions, valet requests, or special accommodations, contact
          our concierge team at{' '}
          <Link
            href="tel:17023645050"
            className="text-primary underline-offset-4 hover:underline"
          >
            702.364.5050
          </Link>{' '}
          or{' '}
          <Link
            href="mailto:concierge@spanishtrailhomes.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            concierge@spanishtrailhomes.com
          </Link>
          .
        </p>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-lg sm:grid-cols-2 sm:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="host" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Host Member
            </label>
            <input
              id="host"
              name="host"
              type="text"
              placeholder="Member Name"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="visitDate" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Visit Date
            </label>
            <input
              id="visitDate"
              name="visitDate"
              type="date"
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label htmlFor="requests" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Special Requests
            </label>
            <textarea
              id="requests"
              name="requests"
              rows={4}
              placeholder="Share dietary preferences, accessibility needs, or celebration details."
              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full rounded-full py-3 text-xs uppercase tracking-[0.4em]">
              Notify Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

