'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'

export function SiteTopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border/60 bg-primary px-4 py-2 text-primary-foreground sm:px-6">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em]">
        <span>Est. 1984</span>
        <span className="h-3 w-px bg-primary-foreground/40" aria-hidden />
        <span>Private • Member-Owned</span>
      </div>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
        <Phone className="size-3.5" aria-hidden />
        <Link
          href="tel:17023645050"
          className="underline-offset-4 transition-colors hover:underline"
        >
          702.364.5050
        </Link>
      </div>
    </div>
  )
}

