'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowRightOnRectangleIcon as SignOutIcon } from '@heroicons/react/24/solid'
import { Skeleton } from './ui/skeleton'
import { Button } from './ui/button'

export default function AuthButton() {
  const data = null
  return (
    <>
      {data == null ? (
        <>
          <Button
            // variant='destructive'
            className='bg-secondary hover:bg-secondary/60'
          >
            Sign In
          </Button>
        </>
      ) : (
        <div className='flex items-center gap-3'>
          <span>{data}</span>
          <Avatar>
            <AvatarImage src={data ?? ''} alt={data ?? ''} />
            <AvatarFallback>
              <Skeleton className='w-12 h-12 rounded-full' />
            </AvatarFallback>
          </Avatar>
          <SignOutIcon className='h-8' />
        </div>
      )}
    </>
  )
}
