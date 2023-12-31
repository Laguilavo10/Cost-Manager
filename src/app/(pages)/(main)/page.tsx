import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import landingImg from '../../../../public/landing.png'

export default function Home() {
  return (
    <section className='py-10'>
      <div className='md:grid grid-cols-2 gap-10 flex flex-col lg:flex-row lg:items-center re'>
        <div className='relative h-full'>
          <Image
            src={landingImg.src}
            alt='main'
            width={2267}
            height={1269}
            className=' h-full w-full -left-44'
            quality={100}
          />
        </div>
        <div className='flex items-center justify-center w-full '>
          <div className='h-full px-4'>
            <h1 className='text-4xl font-bold text-white sm:text-6xl xl:text-7xl'>
              Take control <br />
              on your daily expenses
            </h1>
            <p className='mt-6 text-base text-white/70'>
              Cost Manager is your ultimate financial companion, designed to
              simplify the tracking of your daily expenses and help you reach
              your financial goals with ease.
            </p>
            <Link
              href='/api/auth/login'
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
