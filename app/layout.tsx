import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { CalendlyBadgeScript } from '@/components/calendly-badge-script'
import { CalendlyEventListener } from '@/components/calendly-event-listener'
import { FloatingCalendlyButton } from '@/components/floating-calendly-button'
import './globals.css'
import { createOgImageUrl, structuredDataSiteUrl, getCanonicalUrl } from '@/lib/structuredData'

const siteUrl = structuredDataSiteUrl

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['Georgia', 'serif'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const gbpDescription =
  'Dr. Jan Duffy specializes exclusively in Spanish Trail, a guard-gated golf community in Las Vegas, Nevada. With deep expertise across all 11 neighborhoods and over 1,200 homes, Dr. Duffy provides precise market data, neighborhood-level pricing insights, and personalized guidance for buyers and sellers. From luxury estates and golf course properties to villas and single-story living, Spanish Trail offers one of Southern Nevada\'s most sought-after lifestyles built around a championship 27-hole golf course. Whether you\'re exploring the community for the first time or preparing to sell, you get a local specialist who knows Spanish Trail inside and out.'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: 'Spanish Trail | Homes By Dr. Jan Duffy',
    description: gbpDescription,
    image: createOgImageUrl({
      title: 'Spanish Trail Homes & Country Club',
      subtitle: 'Guard-gated Las Vegas luxury real estate by Dr. Jan Duffy',
      eyebrow: 'SpanishTrailHomes.com',
    }),
    url: siteUrl,
    telephone: '+17027663299',
    email: 'DrDuffySells@SpanishTrailHomes.com',
    priceRange: '$$$',
    areaServed: {
      '@type': 'Place',
      name: 'Spanish Trail, Las Vegas, NV 89113',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5050 Spanish Trail Ln',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89113',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.109145,
      longitude: -115.282642,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    accessibilityFeature: ['Wheelchair accessible parking lot', 'Wheelchair accessible entrance'],
    sameAs: [
      'https://www.facebook.com/spanishtrailhomes',
      'https://www.instagram.com/spanishtrailhomes',
      'https://www.linkedin.com/company/spanishtrailhomes',
      'https://www.youtube.com/@spanishtrailhomes',
      'https://maps.app.goo.gl/9QG1zTx5B7jG1wfP9',
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Veteran-Owned',
        value: 'Yes',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buying Agent Services',
            description:
              'Exclusive buyer representation across all 11 Spanish Trail neighborhoods with neighborhood matching, market data, and full transaction coordination.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Seller's Agent Services",
            description:
              'Neighborhood-level pricing, professional marketing, and complete transaction management for Spanish Trail home sellers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis and Home Valuation',
            description:
              'Detailed market analysis rooted in neighborhood-specific data, inventory levels, and buyer demand trends within Spanish Trail.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Relocation and Out-of-State Buyer Support',
            description:
              'Virtual tours, neighborhood comparisons, and remote transaction coordination for buyers relocating to Spanish Trail from out of state.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: 'Verified Client',
        },
        reviewBody: 'Dr. Jan Duffy provided exceptional service throughout our Spanish Trail home purchase. Her expertise and attention to detail made the entire process seamless.',
        datePublished: '2024-12-01',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Spanish Trail Homes',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Spanish Trail | Homes By Dr. Jan Duffy',
    template: '%s | Spanish Trail Homes',
  },
  description:
    'Spanish Trail | Homes By Dr. Jan Duffy—your trusted local real estate expert for Spanish Trail, Las Vegas. Precise market updates, buy and sell with confidence. Specializing in the Spanish Trail community with unparalleled insights and swift, successful sales.',
  keywords: [
    'Spanish Trail homes',
    'Las Vegas luxury real estate',
    'Spanish Trail Country Club',
    'guard gated communities Las Vegas',
    'golf course homes Las Vegas',
    'golf community homes for sale',
    'Las Vegas golf course homes for sale',
    'golf course properties for sale',
    'golf course homes for sale',
    'Dr. Jan Duffy real estate',
  ],
  category: 'Real Estate',
  applicationName: 'Spanish Trail Homes',
  authors: [{ name: 'Dr. Jan Duffy' }],
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Spanish Trail | Homes By Dr. Jan Duffy',
    description:
      'Explore Spanish Trail homes for sale, golf membership opportunities, and concierge-level amenities guided by Dr. Jan Duffy.',
    siteName: 'Spanish Trail | Homes By Dr. Jan Duffy',
    images: [createOgImageUrl({ title: 'Spanish Trail Homes & Club Lifestyle', subtitle: 'Guard-gated Las Vegas real estate by Dr. Jan Duffy' })],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Trail | Homes By Dr. Jan Duffy',
    description:
      'Find Spanish Trail Country Club homes, membership details, and private events support with Dr. Jan Duffy.',
    images: [createOgImageUrl({ title: 'Spanish Trail Homes', subtitle: 'Luxury guard-gated homes and club expertise', eyebrow: 'SpanishTrailHomes.com' })],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f2b1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.realscout.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d1buiexcd5gara.cloudfront.net" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X68WWN997N"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X68WWN997N', {
  page_path: window.location.pathname,
  send_page_view: true
});`}
        </Script>
        <Script
          id="realscout-widget"
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script id="schema-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
        <CalendlyBadgeScript />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <CalendlyEventListener />
          <DeployBanner />
          {children}
          <FloatingCalendlyButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
