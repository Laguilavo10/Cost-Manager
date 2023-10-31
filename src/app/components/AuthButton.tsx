'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowRightOnRectangleIcon as SignOutIcon } from '@heroicons/react/24/solid'
import { Skeleton } from './ui/skeleton'
import { Button, buttonVariants } from './ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import type { Session } from '@auth0/nextjs-auth0'
import LinkNav from './LinkNav'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Links = [
  {
    name: 'Dashboard',
    path: 'dashboard'
  },
  {
    name: 'Movements',
    path: 'movements'
  }
]

export default function AuthButton({ session }: { session: Session | null }) {
  console.log(session)
  return (
    <>
      {!session ? (
        <>
          <Link href={`/api/auth/login`} className={cn(buttonVariants())}>
            Sign In
          </Link>
        </>
      ) : (
        <>
          {Links.map(({ name, path }) => (
            <LinkNav name={name} path={path} key={path} />
          ))}
          <div className='flex items-center gap-3'>
            <Avatar>
              <AvatarImage
                src={session?.user?.picture ?? ''}
                alt={session?.user?.name ?? ''}
              />
              <AvatarFallback>
                <Skeleton className='w-12 h-12 rounded-  full' />
              </AvatarFallback>
            </Avatar>
            <span>{session?.user?.name}</span>
            <Link
              href={`/api/auth/logout`}
              className={cn('!bg-transparent !hover:bg-transparent !p-0')}
            >
              <SignOutIcon className='h-6 fill-white' />
            </Link>
          </div>
        </>
      )}
    </>
  )
}
