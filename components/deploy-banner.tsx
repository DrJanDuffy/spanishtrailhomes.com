'use client'

import { useState, useEffect } from 'react'
import { XIcon, ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DeployBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExpanding, setIsExpanding] = useState(false)

  useEffect(() => {
    // Check if banner was previously minimized in this session
    const isMinimizedSession = sessionStorage.getItem('deploy-banner-minimized')
    if (isMinimizedSession === 'true') {
      setIsMinimized(true)
    }
    // Show banner after determining state
    setIsVisible(true)
  }, [])

  const handleToggle = () => {
    const newMinimized = !isMinimized

    if (!newMinimized) {
      // Expanding - animate down
      setIsMinimized(false)
      setIsExpanding(true)
      sessionStorage.setItem('deploy-banner-minimized', 'false')

      // After animation completes, clear expanding state
      setTimeout(() => {
        setIsExpanding(false)
      }, 300) // Match animation duration
    } else {
      // Minimizing - animate up first
      setIsAnimating(true)

      // After animation completes, actually minimize
      setTimeout(() => {
        setIsMinimized(true)
        setIsAnimating(false)
        sessionStorage.setItem('deploy-banner-minimized', 'true')
      }, 300) // Match animation duration
    }
  }

  if (!isVisible) return null

  return (
    <>
      {isMinimized ? (
        // Minimized state - floating toggle button
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="h-8 w-8 p-0 bg-background border-border shadow-lg hover:bg-muted"
          >
            <ChevronDownIcon className="h-4 w-4 rotate-180" />
            <span className="sr-only">Expand banner</span>
          </Button>
        </div>
      ) : (
        // Expanded state - full banner
        <div
          className={`fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border text-foreground ${
            isAnimating
              ? 'animate-slide-out-up'
              : isExpanding
                ? 'animate-slide-in-down'
                : ''
          }`}
        >
          <div className="py-3 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <div className="text-sm text-muted-foreground">
                  Discover curated Spanish Trail listings and concierge representation from
                  Dr. Janet Duffy of Berkshire Hathaway HomeServices.
                </div>
              </div>

              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <Button variant="default" size="sm" asChild>
                  <a
                    href="https://www.bhhsnv.com/neighborhood/83/spanish-trails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M10 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="hidden sm:inline">View Listings</span>
                    <span className="sm:hidden">Listings</span>
                  </a>
                </Button>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="/contact"
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75L12 12.75l9.75-6M2.25 6.75v10.5l9.75 6 9.75-6V6.75"
                      />
                    </svg>
                    <span className="hidden sm:inline">Schedule Consultation</span>
                    <span className="sm:hidden">Consult</span>
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleToggle}
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                  <span className="sr-only">Minimize banner</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
