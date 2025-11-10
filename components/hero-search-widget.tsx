'use client'

import Script from 'next/script'

import { cn } from '@/lib/utils'

type HeroSearchWidgetProps = {
  theme?: 'light' | 'dark'
  className?: string
}

export function HeroSearchWidget({ theme = 'dark', className }: HeroSearchWidgetProps) {
  const cardStyles =
    theme === 'dark'
      ? 'border-white/15 bg-white/95 shadow-xl shadow-black/20'
      : 'border-[#d8cdbf] bg-[#fdf9f3] shadow-lg shadow-primary/10'

  return (
    <>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        realscout-simple-search {
          --rs-ss-font-primary-color: #000000;
          --rs-ss-searchbar-border-color: #8b572a;
          --rs-ss-box-shadow: none;
          --rs-ss-widget-width: 100% !important;
        }
      `}</style>
      <div className="mx-auto mt-8 flex w-full justify-center">
        <div className={cn('w-full max-w-xl rounded-3xl border p-6', cardStyles, className)}>
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </div>
      </div>
    </>
  )
}

