import Image from 'next/image'

import { cn } from '@/lib/utils'

type HeroBackgroundProps = {
  src: string
  alt?: string
  priority?: boolean
  sizes?: string
  className?: string
  overlayClassName?: string
  imageClassName?: string
}

export function HeroBackground({
  src,
  alt = '',
  priority = false,
  sizes = '100vw',
  className,
  overlayClassName,
  imageClassName,
}: HeroBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={80}
        sizes={sizes}
        className={cn('object-cover', imageClassName)}
      />
      {overlayClassName ? <div className={cn('absolute inset-0', overlayClassName)} /> : null}
    </div>
  )
}

