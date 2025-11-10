import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type RealscoutElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  'agent-encoded-id': string
  'sort-order'?: string
  'listing-status'?: string
  'property-types'?: string
  'price-min'?: string
  'price-max'?: string
}

type RealscoutAdvancedSearchProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  'agent-encoded-id': string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealscoutElementProps
      'realscout-advanced-search': RealscoutAdvancedSearchProps
      'realscout-simple-search': RealscoutAdvancedSearchProps
      'realscout-home-value': RealscoutAdvancedSearchProps
    }
  }

  namespace React.JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealscoutElementProps
      'realscout-advanced-search': RealscoutAdvancedSearchProps
      'realscout-simple-search': RealscoutAdvancedSearchProps
      'realscout-home-value': RealscoutAdvancedSearchProps
    }
  }
}

export {}
