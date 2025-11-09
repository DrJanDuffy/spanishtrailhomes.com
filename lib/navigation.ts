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
      { label: 'Memberships', href: '/membership#offerings' },
      { label: 'Young Executives', href: '/membership#young-executive' },
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
]

