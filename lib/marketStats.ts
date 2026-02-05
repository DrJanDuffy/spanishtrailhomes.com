/**
 * Single source of truth for Spanish Trail market data.
 * Update from MLS/IDX or client-provided numbers; avoid hardcoding across pages.
 * @see GBP-First Website Alignment plan — Section 4
 */
export type MarketStats = {
  date_label: string
  median_price: number
  price_per_sqft: number
  active_listings: number
  avg_days_on_market: number
  last_updated: string
}

export const marketStats: MarketStats = {
  date_label: 'February 2026',
  median_price: 825000,
  price_per_sqft: 368,
  active_listings: 72,
  avg_days_on_market: 34,
  last_updated: '2026-02-05',
}

export function formatMedianPrice(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  }
  return `$${value.toLocaleString()}`
}

export function formatPricePerSqFt(value: number): string {
  return `$${value}`
}
