import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='overflow-hidden py-10'>
      <div className='md:grid grid-cols-[50%_1fr] gap-20 flex flex-col lg:flex-row lg:items-center'>
        <div className=''>
          <img className='' src='./635shots_so.png' alt='' />
        </div>

        <div className='flex items-center justify-center w-full lg:order-2'>
          <div className='h-full px-4'>
            <h1 className='text-4xl font-bold text-white sm:text-6xl xl:text-7xl'>
              Take control <br />
              on your daily expenses
            </h1>
            <p className='mt-6 text-base text-white sm:text-xl'>
              Our A.I helps you to predict your expenses based on your previous
              activity and shares how you should manage you money.
            </p>
            <Link
              href='#'
              title=''
              className={cn(
                'inline-flex items-center px-6 py-5 text-base !font-bold transition-all duration-200 !bg-green-300 mt-9 !hover:bg-green-400 !focus:bg-green-400',
                buttonVariants()
              )}
              role='button'
            >
              Get started
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
