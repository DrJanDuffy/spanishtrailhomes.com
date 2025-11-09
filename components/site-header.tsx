'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative z-20 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Spanish Trail Country Club home">
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
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.label} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:text-secondary"
                  data-active={isActive}
                >
                  {item.label}
                </Link>
                {item.children ? (
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
                ) : null}
              </div>
            )
          })}
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
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
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
                ) : null}
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
  )
}

