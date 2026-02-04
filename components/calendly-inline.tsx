const CALENDLY_URL = 'https://calendly.com/drjanduffy/showing'

type CalendlyInlineProps = {
  /** Minimum width in pixels (default 320) */
  minWidth?: number
  /** Height in pixels (default 700) */
  height?: number
  className?: string
}

export function CalendlyInline({
  minWidth = 320,
  height = 700,
  className = '',
}: CalendlyInlineProps) {
  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={CALENDLY_URL}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  )
}
