'use client'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface RateLimitDialogProps {
  isOpen: boolean
  onClose: () => void
  resetTime?: string
  remaining?: number
}

export default function RateLimitDialog({
  isOpen,
  onClose,
  resetTime,
  remaining = 0,
}: RateLimitDialogProps) {
  const formatResetTime = (timeStr?: string) => {
    if (!timeStr) return ''
    try {
      const date = new Date(timeStr)
      return date.toLocaleString()
    } catch {
      return timeStr
    }
  }

  const resetMessage = resetTime
    ? `You can try again after ${formatResetTime(resetTime)}.`
    : 'Please try again shortly or reach out to our concierge team.'

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Rate Limit Reached</AlertDialogTitle>
          <AlertDialogDescription className="text-left space-y-2">
            <p>
              You have reached the maximum number of inquiries for now. Our team is thrilled to assist with Spanish Trail opportunities.
            </p>
            <p className="text-xs text-muted-foreground">{resetMessage}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <a href="/contact">Schedule Consultation</a>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
