declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
      initBadgeWidget: (opts: {
        url: string
        text?: string
        color?: string
        textColor?: string
        branding?: boolean
      }) => void
    }
  }
}

export {}
