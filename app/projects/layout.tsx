import type { Metadata } from 'next'

/** v0 builder surfaces — keep out of Google index per Search Essentials / low-value URL hygiene. */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
