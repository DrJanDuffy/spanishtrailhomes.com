'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  trackUrgencyBannerView,
  trackUrgencyBannerClick,
  trackUrgencyBannerDismiss,
} from '@/lib/analytics'

const STORAGE_KEY = 'urgency_banner_dismissed_until'
const HIDE_DAYS = 7

type UrgencyStats = {
  activeListings: number
  touringThisWeek: number
  homesSold30: number
  avgDaysOnMarket: number
  priceChangePct: number
}

const FALLBACK_STATS: UrgencyStats = {
  activeListings: 74,
  touringThisWeek: 23,
  homesSold30: 12,
  avgDaysOnMarket: 9,
  priceChangePct: -22.15,
}

function getDismissedUntil(): number | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const ts = parseInt(raw, 10)
    return Number.isFinite(ts) ? ts : null
  } catch {
    return null
  }
}

function setDismissedUntil() {
  try {
    const until = Date.now() + HIDE_DAYS * 24 * 60 * 60 * 1000
    localStorage.setItem(STORAGE_KEY, String(until))
    return until
  } catch {
    return null
  }
}

export function UrgencyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [index, setIndex] = useState(0)
  const [stats, setStats] = useState<UrgencyStats>(FALLBACK_STATS)
  const [hideOnSmallViewport, setHideOnSmallViewport] = useState(false)
  const mountedAt = useRef<number | null>(null)

  useEffect(() => {
    const until = getDismissedUntil()
    if (until != null && Date.now() < until) {
      setDismissed(true)
      return
    }
    mountedAt.current = Date.now()
    setVisible(true)
  }, [])

  useEffect(() => {
    const checkViewport = () => {
      setHideOnSmallViewport(typeof window !== 'undefined' && window.innerHeight < 400)
    }
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch('/api/urgency-stats')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.activeListings === 'number') {
          setStats({
            activeListings: data.activeListings ?? FALLBACK_STATS.activeListings,
            touringThisWeek: data.touringThisWeek ?? FALLBACK_STATS.touringThisWeek,
            homesSold30: data.homesSold30 ?? FALLBACK_STATS.homesSold30,
            avgDaysOnMarket: data.avgDaysOnMarket ?? FALLBACK_STATS.avgDaysOnMarket,
            priceChangePct: data.priceChangePct ?? FALLBACK_STATS.priceChangePct,
          })
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!visible || dismissed) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % 4)
    }, 5000)
    return () => clearInterval(id)
  }, [visible, dismissed])

  const handleDismiss = useCallback(() => {
    setDismissed(true)
    setVisible(false)
    setDismissedUntil()
    const timeOnPage =
      mountedAt.current != null ? Math.round((Date.now() - mountedAt.current) / 1000) : 0
    trackUrgencyBannerDismiss(timeOnPage)
  }, [])

  const handleCtaClick = useCallback(() => {
    trackUrgencyBannerClick('see_available')
    const el = document.getElementById('bhhs-listings')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const messages = [
    `🔥 ${stats.touringThisWeek} active buyers touring Spanish Trail this week`,
    `⚡ ${stats.homesSold30} homes sold in last 30 days—average ${stats.avgDaysOnMarket} days on market`,
    `📉 Prices down ${Math.abs(Math.round(stats.priceChangePct))}% from last month—best buyer opportunity in 18 months`,
    `🏆 3 homes went under contract this week—schedule before they're gone`,
  ]

  useEffect(() => {
    if (!visible || dismissed || hideOnSmallViewport) return
    trackUrgencyBannerView(messages[index])
  }, [visible, dismissed, hideOnSmallViewport, index])

  if (!visible || dismissed || hideOnSmallViewport) return null

  return (
    <>
      {/* data-urgency-variant: 'rotation' | 'countdown' for A/B test (countdown not implemented yet) */}
      <div
        data-urgency-variant="rotation"
        role="region"
        aria-live="polite"
        aria-label="Market urgency"
        className={cn(
          'sticky top-0 z-[9998] flex h-[60px] w-full items-center justify-center gap-4 bg-[#FEF3C7] px-4 py-2 text-center text-base font-semibold text-[#92400e]',
          'animate-urgency-slide-down',
        )}
      >
        <p className="flex-1 truncate text-center sm:flex-none">{messages[index]}</p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleCtaClick}
            className="rounded-md bg-[#0f2b1e] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#0f2b1e]/90"
          >
            See What&apos;s Available
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded p-1.5 text-[#92400e]/80 hover:bg-amber-200/50 hover:text-[#92400e]"
            aria-label="Dismiss banner"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
      {/* Schema.org Offer/availability for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            itemOffered: {
              '@type': 'RealEstateListing',
              name: 'Spanish Trail Homes for Sale',
              description: `${stats.activeListings} active listings; ${stats.touringThisWeek} buyers touring this week.`,
            },
          }),
        }}
      />
    </>
  )
}
