'use client'

import { useEffect, useState } from 'react'

type WidgetLoadingOverlayProps = {
  /** CSS selector for the widget element (e.g. "realscout-office-listings") */
  selector: string
  /** Message shown while loading */
  message?: string
  /** Max time to show overlay in ms (default 6000) */
  timeout?: number
  /** Poll interval in ms (default 200) */
  pollInterval?: number
  className?: string
}

export function WidgetLoadingOverlay({
  selector,
  message = 'Loading…',
  timeout = 6000,
  pollInterval = 200,
  className = '',
}: WidgetLoadingOverlayProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = Date.now()
    const check = () => {
      const el = document.querySelector(selector)
      const hasContent = el && (el as HTMLElement).offsetHeight > 0
      if (hasContent || Date.now() - start >= timeout) {
        setVisible(false)
        return true
      }
      return false
    }
    if (check()) return
    const id = setInterval(() => {
      if (check()) clearInterval(id)
    }, pollInterval)
    return () => clearInterval(id)
  }, [selector, timeout, pollInterval])

  if (!visible) return null

  return (
    <div
      className={`absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[#f9f4eb]/90 text-sm text-[#6f5237] ${className}`}
      aria-live="polite"
      aria-busy="true"
    >
      {message}
    </div>
  )
}
