'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// import Image from 'next/image'
// import Link from 'next/link'
// import { buttonVariants } from './components/ui/button'

export default function Home() {
  return (
    // <div className='relative flex justify-center items-center h-screen'>

      <section className='overflow-hidden py-10'>
        <div className='flex flex-col lg:flex-row lg:items-stretch'>
          <div className='flex items-center justify-center w-full lg:order-2 lg:w-7/12'>
            <div className='h-full px-4'>
                  <h1 className='text-4xl font-bold text-white sm:text-6xl xl:text-7xl'>
                    Take control <br />
                    on your daily expenses
                  </h1>
                  <p className='mt-6 text-base text-white sm:text-xl'>
                    Our A.I helps you to predict your expenses based on your
                    previous activity and shares how you should manage you
                    money.
                  </p>
                  <Link
                    href='#'
                    title=''
                    className={cn('inline-flex items-center px-6 py-5 text-base !font-bold transition-all duration-200 !bg-green-300 mt-9 !hover:bg-green-400 !focus:bg-green-400', buttonVariants())}
                    role='button'
                  >
                    Get started
                  </Link>
            </div>
          </div>

          <div className='relative w-full lg:w-5/12 '>
            <div className='lg:absolute lg:bottom-0 lg:left-0'>
              {/* <img
                className='w-full '
                src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png'
                alt=''
              /> */}
            </div>
          </div>
        </div>
      </section>
    // </div>
  )
}
