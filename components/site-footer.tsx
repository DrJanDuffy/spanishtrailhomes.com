import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export function SiteFooter() {
  const footerLinks = [
    {
      heading: 'About Dr. Janet Duffy',
      links: [
        { label: 'Meet Janet Duffy', href: '/about' },
        { label: 'Client Testimonials', href: '/testimonials' },
        { label: 'Awards & Recognition', href: '/awards' },
      ],
    },
    {
      heading: 'Quick Links',
      links: [
        { label: 'Community Overview', href: '/communities/spanish-trail' },
        { label: 'Spanish Trail Amenities', href: '/club#amenities' },
        { label: 'Event Planning', href: '/events#contact' },
      ],
    },
    {
      heading: 'Market Resources',
      links: [
        {
          label: 'BHHS Spanish Trail Report',
          href: 'https://www.bhhsnv.com/neighborhood/83/spanish-trails',
        },
        { label: 'Home Valuation Request', href: '/sellers' },
        { label: 'Buyer Consultation', href: '/buyers' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-[#352922] text-[#f8f5ef]">
      <div className="border-b border-[#be9956]/40 bg-[#3e3028]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs uppercase tracking-[0.35em]">
            <p className="text-[#cbb8a6]">Berkshire Hathaway HomeServices Nevada Properties</p>
            <p>Dr. Janet Duffy · Luxury Real Estate Advisor</p>
            <Link href="tel:17023645050" className="hover:text-[#be9956] hover:underline">
              702.364.5050 · info@spanishtrailhomes.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full border border-[#be9956]/40 p-2 text-[#f8f5ef] transition-colors hover:border-[#be9956] hover:text-[#be9956]"
              >
                <Icon className="size-4" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-[#cbb8a6]">
            Spanish Trail Country Club
          </p>
          <p className="font-[var(--font-playfair)] text-2xl tracking-[0.08em]">
            5050 Spanish Trail Ln. Las Vegas, NV 89117
          </p>
          <p className="text-sm text-[#efe5d8]">
            Guard-gated golf living minutes from the Strip, represented exclusively by Berkshire Hathaway HomeServices agent Dr. Janet Duffy.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.heading} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#be9956]">
              {section.heading}
            </p>
            <ul className="space-y-3 text-sm tracking-[0.25em]">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#be9956] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#be9956]/30 bg-[#36271f]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-[#e5d7c8] md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 leading-relaxed">
            <p>Equal Housing Opportunity · MLS #123456 · NV Lic #S.1234567</p>
            <p>
              © {new Date().getFullYear()} Spanish Trail Country Club. Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered service marks of HomeServices of America, Inc.® Equal Housing Opportunity.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] md:text-sm">
            <Link href="/privacy" className="hover:text-[#be9956] hover:underline">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-[#be9956] hover:underline">
              Terms of Use
            </Link>
            <span aria-hidden>·</span>
            <Link href="/accessibility" className="hover:text-[#be9956] hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

