'use client'
import { useRouter } from 'next/navigation'
import { ChevronLeftIcon as BackIcon } from '@heroicons/react/24/outline'

export function GoBack(): JSX.Element {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div onClick={goBack} className='cursor-pointer'>
      <BackIcon className='h-5' />
    </div>
  )
}
