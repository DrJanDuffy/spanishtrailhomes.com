export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Community',
    href: '/communities/spanish-trail',
    children: [
      { label: 'Overview', href: '/communities/spanish-trail' },
      { label: 'Amenities', href: '/communities/spanish-trail#amenities-heading' },
      { label: 'Benefits', href: '/communities/spanish-trail#benefits-heading' },
      { label: 'Contact', href: '/communities/spanish-trail#contact-heading' },
      { label: 'Homes for Sale', href: '/spanish-trail-homes-for-sale-las-vegas' },
    ],
  },
  {
    label: 'Neighborhoods',
    href: '/neighborhoods',
    children: [
      { label: 'All Neighborhoods', href: '/neighborhoods' },
      { label: 'Estates West', href: '/neighborhoods/estates-west' },
      { label: 'The Carmels', href: '/neighborhoods/carmels' },
      { label: 'The Courtyards', href: '/neighborhoods/courtyards' },
      { label: 'The Gardens', href: '/neighborhoods/gardens' },
      { label: 'The Islands', href: '/neighborhoods/islands' },
      { label: 'The Links', href: '/neighborhoods/links' },
      { label: 'Plum Creek', href: '/neighborhoods/plum-creek' },
      { label: 'The Springs', href: '/neighborhoods/springs' },
      { label: 'The Villas', href: '/neighborhoods/villas' },
      { label: 'Townhomes', href: '/neighborhoods/townhomes' },
      { label: 'The Plazas', href: '/neighborhoods/plazas' },
    ],
  },
  {
    label: 'Buyers',
    href: '/spanish-trail-homes-for-sale-las-vegas',
    children: [
      { label: 'Homes for Sale', href: '/spanish-trail-homes-for-sale-las-vegas' },
      { label: 'Guard-Gated Golf Homes', href: '/spanish-trail-guard-gated-golf-homes' },
      { label: 'Luxury Golf Course Estates', href: '/spanish-trail-luxury-golf-course-properties' },
      { label: 'Custom Estates Near Strip', href: '/spanish-trail-custom-estate-homes-strip' },
      { label: 'Townhomes & Villas', href: '/spanish-trail-townhomes-villas' },
      { label: 'Gated Golf Realtor', href: '/spanish-trail-gated-golf-realtor' },
      { label: 'Southwest Luxury Homes', href: '/spanish-trail-southwest-las-vegas-luxury-homes' },
      { label: 'Private Golf Course Homes', href: '/spanish-trail-private-golf-course-homes' },
      { label: 'Estate Listings', href: '/spanish-trail-country-club-estate-listings' },
      { label: 'Waterfront Golf Homes', href: '/spanish-trail-waterfront-golf-homes' },
      { label: 'Market Report', href: '/spanish-trail-market-report' },
      { label: 'Insights', href: '/spanish-trail-insights' },
      { label: 'Luxury Comparisons', href: '/las-vegas-luxury-neighborhoods' },
    ],
  },
  {
    label: 'Club',
    href: '/club',
    children: [
      { label: 'Amenities', href: '/club#amenities' },
      { label: 'History', href: '/club#history' },
      { label: 'Lifestyle', href: '/club#lifestyle' },
    ],
  },
  {
    label: 'Golf',
    href: '/golf',
    children: [
      { label: 'Course Tour', href: '/golf#course-tour' },
      { label: 'Scorecard', href: '/golf#scorecard' },
      { label: 'Guest Info', href: '/guest-info' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'Weddings', href: '/events#weddings' },
      { label: 'Private Events', href: '/events#private-events' },
      { label: 'Golf Outings', href: '/events#golf-outings' },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Schedule Tour', href: '/membership#inquiry' },
    ],
  },
  {
    label: 'Guest Info',
    href: '/guest-info',
    children: [
      { label: 'Directions', href: '/guest-info#map' },
      { label: 'Etiquette', href: '/guest-info#etiquette' },
      { label: 'Contact', href: '/guest-info#contact-heading' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Meet Dr. Duffy', href: '/about#story-heading' },
      { label: 'Advisory Approach', href: '/about#approach-heading' },
      { label: 'Credentials', href: '/about#credentials-heading' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Connect', href: '/contact#contact-heading' },
      { label: 'Market Snapshot', href: '/contact#market-heading' },
      { label: 'FAQ', href: '/contact#faq-heading' },
      { label: 'Awards & Recognition', href: '/awards' },
    ],
  },
]

