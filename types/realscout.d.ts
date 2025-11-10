import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
      }
      'realscout-advanced-search': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
      }
      'realscout-simple-search': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
      }
      'realscout-home-value': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-encoded-id': string
      }
    }
  }
}

export {}
