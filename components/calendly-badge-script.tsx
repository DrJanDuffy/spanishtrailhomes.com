'use client'

import Script from 'next/script'

export function CalendlyBadgeScript() {
  return (
    <Script
      id="calendly-widget"
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/drjanduffy/showing',
            text: 'Book a Tour',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true,
          })
        }
      }}
    />
  )
}
