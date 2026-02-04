import { NextResponse } from 'next/server'

/** Static fallback from Market Snapshot / lib/spanishTrailContent */
const FALLBACK = {
  activeListings: 74,
  touringThisWeek: 23,
  homesSold30: 12,
  avgDaysOnMarket: 9,
  priceChangePct: -22.15,
}

export async function GET() {
  let touringThisWeek = FALLBACK.touringThisWeek

  const apiKey = process.env.CALENDLY_API_KEY
  const userUri = process.env.CALENDLY_USER_URI
  if (apiKey && userUri) {
    try {
      const now = new Date()
      const weekEnd = new Date(now)
      weekEnd.setDate(weekEnd.getDate() + 7)
      const params = new URLSearchParams({
        user: userUri,
        min_start_time: now.toISOString(),
        max_start_time: weekEnd.toISOString(),
        count: '100',
      })
      const res = await fetch(`https://api.calendly.com/scheduled_events?${params.toString()}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        next: { revalidate: 300 },
      })
      if (res.ok) {
        const data = await res.json()
        const count = Array.isArray(data?.collection) ? data.collection.length : 0
        touringThisWeek = Math.max(0, count)
      }
    } catch {
      /* use fallback */
    }
  }

  return NextResponse.json({
    activeListings: FALLBACK.activeListings,
    touringThisWeek,
    homesSold30: FALLBACK.homesSold30,
    avgDaysOnMarket: FALLBACK.avgDaysOnMarket,
    priceChangePct: FALLBACK.priceChangePct,
  })
}
