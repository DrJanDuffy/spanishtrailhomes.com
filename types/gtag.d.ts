declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrEvent: string,
      configOrParams?: Record<string, unknown>,
    ) => void
  }
}

export {}
