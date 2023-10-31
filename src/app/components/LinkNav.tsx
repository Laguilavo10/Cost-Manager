'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function LinkNav({
  name,
  path
}: {
  name: string
  path: string
}) {
  const pathname = usePathname()?.split('/')?.[1]
  return (
    <Link
      href={`/${path}`}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary-text text-muted-foreground',
        pathname === path && '!text-primary-text'
      )}
    >
      {name}
    </Link>
  )
}
