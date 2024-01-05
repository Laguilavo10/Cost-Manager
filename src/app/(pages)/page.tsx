import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import landingImg from '../../../public/landing.png'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { GithubIcon } from '@/components/GithubButton'
import { Check } from 'lucide-react'

export default function Home() {
  return (
    <>

      <header className='text-white border-b-2 bg-primary border-border'>
        <nav className='flex items-center justify-between h-16 md:p-2 p-6 m-auto max-w-7xl'>
          <div className='items-center gap-3 flex'>
            <Link
              className='items-center text-2xl font-bold '
              href='/'
              id='title'
              role='heading'
            >
              Cost-Manager
            </Link>
          </div>
          <Link
            className={cn(
              buttonVariants({ variant: 'link' }),
              'gap-2 border-2 border-primary bg-darkCustom py-2 px-5 rounded-lg '
            )}
            href='https://github.com/Laguilavo10/cost-manager'
          >
            <span className='hidden sm:flex'>Source Code</span>
            <GithubIcon />
          </Link>
        </nav>
      </header>
      <MaxWidthWrapper className='animate-duration-[2000ms] animate-once animate-ease-in-out animate-fade-up'>
        <section
          className='flex justify-center items-center  lg:pb-0'
          id='home'
        >
          <div className='w-full flex flex-col justify-center items-center text-center'>
            <div>
              <div className='text-secondary text-sm sm:text-base  mb-6 sm:mt-28 mt-16  font-bold'>
                Manage your finances
              </div>
            </div>
            <div>
              <div className='text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4'>
                <span className=''>Take control</span>
              </div>
              <div className='mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-20 md:px-24 lg:px-24'>
                on your daily expenses
              </div>
            </div>
            <div>
              <div className='text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:20 md:px-48 text-white/70'>
                Cost Manager is your ultimate financial companion, designed to
                simplify the tracking of your daily expenses and help you reach
                your financial goals with ease.
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center'>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-secondary'
                  )}
                  href='/api/auth/login'
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </section>

        <section
          className='w-full mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0 xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0 grid grid-cols-1 lg:grid-cols-2 '
          id='features'
        >
          <div className='mx-auto'>
            <span className='text-secondary'>Dominate Your Daily Spending Habits</span>
            <h2 className='mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title'>
            A New Way to Manage Your Expenses
            </h2>
            <p className='mb-10 text-customGrayText leading-loose'>
            Discover an innovative and user-friendly platform to analyze your expenses. Transform your financial needs with practical and insightful information.
            </p>
            <ul className='mb-6 text-white'>
              <li className='mb-4 flex'>
                <Check className='stroke-secondary mr-2' />
                <span>Real-time data visualization</span>
              </li>
              <li className='mb-4 flex'>
                <Check className='stroke-secondary mr-2' />
                <span>Personalized budget management</span>
              </li>
              <li className='mb-4 flex'>
                <Check className='stroke-secondary mr-2' />
                <span>Multi-platform accessibility (web and mobile)</span>
              </li>
            </ul>
          </div>
          <div className='relative w-full flex justify-center'>
            <Image
              // src={dashboard}
              src={landingImg}
              alt='123'
              className='w-[200%]'
            />
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  )
}
