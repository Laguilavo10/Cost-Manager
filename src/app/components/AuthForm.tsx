'use client'

import React from 'react'
// import { cn } from '@/lib/utils'
import { GitHub } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: UserAuthFormProps) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard'
  // const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)
  // }

  return (
    <section className={'grid gap-6'}>
      {/* <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Spinner className='w-4 h-4 mr-2 animate-spin' />}
            Sign In with Email
          </Button>
        </div>
      </form> */}
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='px-2 bg-background text-muted-foreground'>
            continue with
          </span>
        </div>
      </div>
      <Button
        variant='outline'
        type='button'
        onClick={async (a) => {
          await signIn('github', { callbackUrl })
        }}
      >
        {/* {isLoading ? (
          <Spinner className='w-4 h-4 mr-2 animate-spin' />
        ) : ( */}
        <GitHub className='w-4 h-4 mr-2' />
        {/* )}{' '} */}
        Github
      </Button>
    </section>
  )
}
