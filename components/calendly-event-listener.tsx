'use client'

import { useEffect } from 'react'
import {
  trackCalendlyAppointmentScheduled,
  trackAppointmentBooked,
} from '@/lib/analytics'

const LOCALSTORAGE_APPOINTMENT_KEY = 'calendly_appointment_scheduled'

export function CalendlyEventListener() {
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data
      if (!data || typeof data !== 'object' || data.event !== 'calendly.event_scheduled') return
      let source = 'unknown'
      try {
        source = sessionStorage.getItem('calendly_source') ?? 'unknown'
        sessionStorage.removeItem('calendly_source')
      } catch {
        /* ignore */
      }
      trackCalendlyAppointmentScheduled(source)
      trackAppointmentBooked(source)
      try {
        localStorage.setItem(LOCALSTORAGE_APPOINTMENT_KEY, 'true')
      } catch {
        /* ignore */
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])
  return null
}
