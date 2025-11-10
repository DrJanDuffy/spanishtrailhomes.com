import Script from 'next/script'

import { cn } from '@/lib/utils'

type RealScoutSimpleSearchWidgetProps = {
  containerClassName?: string
  sectionClassName?: string
}

export function RealScoutSimpleSearchWidget({
  containerClassName,
  sectionClassName,
}: RealScoutSimpleSearchWidgetProps = {}) {
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
          --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
          --rs-ss-widget-width: 500px !important;
        }
      `}</style>
      <section
        className={cn('bg-[#f8f2e7] py-12 sm:py-16', sectionClassName)}
        aria-label="Spanish Trail home search"
      >
        <div
          className={cn(
            'mx-auto flex w-full max-w-6xl justify-center px-6',
            containerClassName,
          )}
        >
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </div>
      </section>
    </>
  )
}



