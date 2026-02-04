'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

type CopyEmbedButtonProps = {
  code: string
  className?: string
}

export function CopyEmbedButton({ code, className }: CopyEmbedButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* fallback: do nothing */
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={className ?? 'gap-2 border-[#372a20]/50 bg-[#1f2a24] text-[#e5d7c8] hover:bg-[#2a3a30] hover:text-white'}
      aria-label={copied ? 'Copied to clipboard' : 'Copy embed code'}
    >
      {copied ? (
        <>
          <Check className="size-4" aria-hidden />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-4" aria-hidden />
          Copy code
        </>
      )}
    </Button>
  )
}
