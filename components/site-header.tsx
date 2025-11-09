'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs tracking-[0.35em]">
          <div className="flex items-center gap-3">
            <Phone className="size-3.5" aria-hidden />
            <Link href="tel:17023645050" className="hover:underline">
              702.364.5050
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="uppercase">Represented by Dr. Janet Duffy · Berkshire Hathaway HomeServices</span>
            <Button
              asChild
              size="sm"
              className="rounded-full border border-primary-foreground/40 bg-transparent px-4 py-1 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="Spanish Trail Country Club home" className="group">
            <div className="text-left">
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-muted-foreground group-hover:text-secondary">
                Berkshire Hathaway HomeServices
              </p>
              <p className="font-[var(--font-playfair)] text-2xl font-semibold tracking-[0.1em] text-[#0f2b1e]">
                Dr. Janet Duffy · Spanish Trail
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
            <Button asChild variant="link" className="text-xs uppercase tracking-[0.28em] text-[#0f2b1e]">
              <Link href="tel:17023645050" className="hover:underline">
                Call 702.364.5050
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-full bg-[#0f2b1e] px-6 py-2 text-xs uppercase tracking-[0.32em] text-white hover:bg-[#0c2118]"
            >
              <Link href="/contact">Speak with Dr. Duffy</Link>
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
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 bg-background/98 px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length

              return (
                <div key={item.label} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0f2b1e] hover:underline"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} links`}
                        className="rounded-full border border-border/60 p-1"
                        onClick={() => toggleFlyout(item.label)}
                      >
                        <ChevronDown className={`size-4 transition-transform ${activeFlyout === item.label ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                    ) : null}
                  </div>
                  {hasChildren && activeFlyout === item.label ? (
                    <div className="space-y-2 pl-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {(item.children ?? []).map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1 transition-colors text-[#4d5c55] hover:text-secondary hover:underline"
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

            <div className="flex flex-col gap-3 pt-4">
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-[#0f2b1e] px-6 py-3 text-xs uppercase tracking-[0.32em] text-white hover:bg-[#0c2118]"
              >
                <Link href="/contact">Speak with Dr. Duffy</Link>
              </Button>
              <Button asChild variant="link" className="justify-start px-0 text-xs uppercase tracking-[0.32em]">
                <Link href="https://www.bhhsnv.com/neighborhood/83/spanish-trails" target="_blank" rel="noopener noreferrer">
                  View Listings
                </Link>
              </Button>
              <Button asChild variant="link" className="justify-start px-0 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                <Link href="tel:17023645050">Call 702.364.5050</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

