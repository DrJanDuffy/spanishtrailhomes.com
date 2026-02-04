'use client'

const CALENDLY_URL = 'https://calendly.com/drjanduffy/showing'

type CalendlyLinkProps = {
  children?: React.ReactNode
  className?: string
}

export function CalendlyLink({ children = 'Book a Tour', className = '' }: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      href={CALENDLY_URL}
      onClick={handleClick}
      className={className}
      aria-label="Book a tour with Dr. Jan Duffy"
    >
      {children}
    </a>
  )
}
