import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em]">
            Spanish Trail Country Club
          </p>
          <p className="text-sm text-primary-foreground/80">
            © 2025 Spanish Trail Country Club. All Rights Reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Powered by Jonas Club Software
          </p>
        </div>

        <div className="grid gap-4 text-sm uppercase tracking-[0.25em]">
          <Link href="/membership" className="transition-colors hover:text-secondary">
            Membership
          </Link>
          <Link href="/events#weddings" className="transition-colors hover:text-secondary">
            Weddings
          </Link>
          <Link href="/events#private-events" className="transition-colors hover:text-secondary">
            Private Events
          </Link>
          <Link href="/guest-info" className="transition-colors hover:text-secondary">
            Guest Info
          </Link>
        </div>
      </div>
    </footer>
  )
}

