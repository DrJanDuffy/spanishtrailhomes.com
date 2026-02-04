'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/navigation'
import { trackPhoneClick } from '@/lib/analytics'
import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly-link'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleFlyout = (label: string) => {
    setActiveFlyout((prev) => (prev === label ? null : label))
  }

  return (
    <header className="relative z-30 w-full">
      <div className="hidden border-b border-border/80 bg-[#2f3d35] text-primary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs tracking-[0.35em] sm:px-6">
          <div className="flex items-center gap-3">
            <Phone className="size-3.5" aria-hidden />
            <Link href="tel:17027663299" className="hover:underline" onClick={() => trackPhoneClick('header')}>
              (702) 766-3299
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="uppercase">Represented by Dr. Jan Duffy · Berkshire Hathaway HomeServices</span>
            <CalendlyLink className="rounded-full border border-primary-foreground/40 bg-transparent px-4 py-1 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-primary-foreground hover:text-primary" ctaText="Book a Tour" ctaLocation="header">
              Book a Tour
            </CalendlyLink>
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
          <Link href="/" aria-label="Spanish Trail Country Club home" className="group min-w-0 flex-1">
            <div className="text-left min-w-0">
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground group-hover:text-secondary sm:text-[0.65rem] sm:tracking-[0.45em]">
                Berkshire Hathaway HomeServices
              </p>
              <p className="font-[var(--font-playfair)] text-lg font-semibold tracking-[0.08em] text-[#0f2b1e] sm:text-2xl sm:tracking-[0.1em]">
                Dr. Jan Duffy · Spanish Trail
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const hasChildren = !!item.children?.length

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.32em] transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-[#1f2a24]'}`}
                    onMouseEnter={() => hasChildren && setActiveFlyout(item.label)}
                    onMouseLeave={() => hasChildren && setActiveFlyout(null)}
                    onClick={() => (hasChildren ? toggleFlyout(item.label) : undefined)}
                    aria-haspopup={hasChildren ? 'true' : undefined}
                    aria-expanded={activeFlyout === item.label}
                  >
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                    {hasChildren ? <ChevronDown className="size-3" aria-hidden /> : null}
                  </button>

                  {hasChildren && activeFlyout === item.label ? (
                    <div
                      className="absolute left-1/2 mt-4 w-[28rem] -translate-x-1/2 rounded-3xl border border-[#d8cdbf]/60 bg-white p-6 shadow-xl shadow-primary/10"
                      onMouseEnter={() => setActiveFlyout(item.label)}
                      onMouseLeave={() => setActiveFlyout(null)}
                    >
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        {(item.children ?? []).map((child) => (
                          <div key={child.label} className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                              {child.label}
                            </p>
                            <Link
                              href={child.href}
                              className="inline-flex text-[0.78rem] leading-relaxed text-[#4d5c55] hover:text-[#0f2b1e] hover:underline"
                            >
                              Visit {child.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="tel:17027663299"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f2b1e]/40 px-6 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10"
              aria-label="Call 702-766-3299"
              onClick={() => trackPhoneClick('header')}
            >
              <Phone className="size-4" aria-hidden />
              (702) 766-3299
            </Link>
            <CalendlyLink className="rounded-full bg-[#0f2b1e] px-6 py-2 text-xs font-medium uppercase tracking-[0.32em] text-white hover:bg-[#0c2118]" ctaText="Book a Tour" ctaLocation="header">
              Book a Tour
            </CalendlyLink>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="touch-target inline-flex shrink-0 items-center justify-center rounded-full border border-border/60 p-2 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 bg-background/98 px-4 py-6 sm:px-6 sm:py-8 lg:hidden safe-area-padding">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length

              return (
                <div key={item.label} className="border-b border-border/40 last:border-0">
                  <div className="flex min-h-[44px] items-center justify-between gap-3 py-2">
                    <Link
                      href={item.href}
                      className="touch-target flex min-h-[44px] flex-1 items-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0f2b1e] hover:underline sm:tracking-[0.32em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} links`}
                        className="touch-target flex shrink-0 items-center justify-center rounded-full border border-border/60 p-2"
                        onClick={() => toggleFlyout(item.label)}
                      >
                        <ChevronDown className={`size-5 transition-transform ${activeFlyout === item.label ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                    ) : null}
                  </div>
                  {hasChildren && activeFlyout === item.label ? (
                    <div className="space-y-0 pb-3 pl-2">
                      {(item.children ?? []).map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="touch-target flex min-h-[44px] items-center py-2 text-sm uppercase tracking-[0.2em] text-[#4d5c55] hover:text-secondary hover:underline"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="mt-6 flex flex-col gap-3 pt-4">
              <CalendlyLink className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0f2b1e] px-6 py-3 text-sm font-medium uppercase tracking-[0.32em] text-white hover:bg-[#0c2118] sm:min-h-[44px] sm:w-auto" ctaText="Book a Tour" ctaLocation="header">
                Book a Tour
              </CalendlyLink>
              <Link
                href="tel:17027663299"
                className="touch-target flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#0f2b1e]/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-[#0f2b1e] hover:bg-[#0f2b1e]/10 sm:min-h-[44px] sm:w-auto"
                aria-label="Call 702-766-3299"
                onClick={() => trackPhoneClick('header')}
              >
                <Phone className="size-4" aria-hidden />
                (702) 766-3299
              </Link>
              <Button asChild variant="link" className="touch-target min-h-[44px] justify-start px-0 text-sm uppercase tracking-[0.32em]">
                <Link href="https://searchforaffordablehomes.com/neighborhood/83/spanish-trails" target="_blank" rel="noopener noreferrer">
                  View Listings →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

