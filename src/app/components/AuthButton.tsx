'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowRightOnRectangleIcon as SignOutIcon } from '@heroicons/react/24/solid'
import { Skeleton } from './ui/skeleton'
import { Button } from './ui/button'
import { signIn, signOut, } from 'next-auth/react'
import type { Session } from 'next-auth'


export default async function AuthButton({ session }: { session: Session | null }) {
  return (
    <>
      {session === null ? (
        <>
          <Button
            onClick={() => signIn()}
            className='bg-secondary hover:bg-secondary/60'
          >
            Sign In
          </Button>
        </>
      ) : (
        <div className='flex items-center gap-3'>
          <span>{session?.user?.name}</span>
          <Avatar>
            <AvatarImage src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} />
            <AvatarFallback>
              <Skeleton className='w-12 h-12 rounded-full' />
            </AvatarFallback>
          </Avatar>
          <Button
            onClick={async () => {
              await signOut({
                callbackUrl: '/'
              })
            }}
            className='bg-secondary hover:bg-secondary/60'
          >
            <SignOutIcon className='h-8' />
          </Button>
        </div>
      )}
    </>
  )
}
