export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
  /** Optional group label for organizing dropdown items */
  group?: string
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Homes',
    href: '/spanish-trail-homes-for-sale-las-vegas',
    children: [
      // Property Types
      { label: 'All Homes for Sale', href: '/spanish-trail-homes-for-sale-las-vegas', group: 'Browse' },
      { label: 'Estate Homes', href: '/spanish-trail-country-club-estate-listings', group: 'Browse' },
      { label: 'Townhomes & Villas', href: '/spanish-trail-townhomes-villas', group: 'Browse' },
      { label: 'Golf Course Homes', href: '/spanish-trail-luxury-golf-course-properties', group: 'Browse' },
      { label: 'Waterfront Homes', href: '/spanish-trail-waterfront-golf-homes', group: 'Browse' },
      // Market Info
      { label: 'Market Report', href: '/spanish-trail-market-report', group: 'Research' },
      { label: 'Market Insights', href: '/spanish-trail-insights', group: 'Research' },
      { label: 'Compare Neighborhoods', href: '/las-vegas-luxury-neighborhoods', group: 'Research' },
    ],
  },
  {
    label: 'Community',
    href: '/communities/spanish-trail',
    children: [
      { label: 'About Spanish Trail', href: '/communities/spanish-trail', group: 'Overview' },
      { label: 'Lifestyle Guide', href: '/spanish-trail-lifestyle', group: 'Overview' },
      { label: 'Schools', href: '/spanish-trail-schools', group: 'Overview' },
      { label: 'Club & Amenities', href: '/club', group: 'Lifestyle' },
      { label: 'Golf Course', href: '/golf', group: 'Lifestyle' },
      { label: 'Events & Dining', href: '/events', group: 'Lifestyle' },
      { label: 'Membership Info', href: '/membership', group: 'Lifestyle' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Meet Dr. Jan Duffy', href: '/about', group: 'Your Agent' },
      { label: 'Awards & Recognition', href: '/awards', group: 'Your Agent' },
      { label: 'Client Reviews', href: '/reviews', group: 'Your Agent' },
      { label: 'Buyers Guide', href: '/buyers', group: 'Resources' },
      { label: 'Sellers Guide', href: '/sellers', group: 'Resources' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Get in Touch', href: '/contact', group: 'Connect' },
      { label: 'Office Location', href: '/find-our-locations', group: 'Connect' },
      { label: 'Guest Information', href: '/guest-info', group: 'Connect' },
    ],
  },
]

