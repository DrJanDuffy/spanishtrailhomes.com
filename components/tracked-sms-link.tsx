'use client'

import { trackSmsClick } from '@/lib/analytics'

type TrackedSmsLinkProps = {
  intent: 'tour' | 'alert' | 'question'
  href: string
  className?: string
  children?: React.ReactNode
  'aria-label'?: string
}

export function TrackedSmsLink({
  intent,
  href,
  className,
  children,
  'aria-label': ariaLabel,
}: TrackedSmsLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackSmsClick(intent)}
    >
      {children}
    </a>
  )
}
