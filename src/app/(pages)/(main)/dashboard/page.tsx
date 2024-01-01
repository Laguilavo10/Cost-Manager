// import CardsDashboard from '@/components/CardsDashboard'
import NewMovement from '@/components/NewMovement'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  // BanknotesIcon,
  PlusIcon
} from '@heroicons/react/24/solid'
import RecentSales from '@/components/RecentSales'
// import CardsDashboard from '@/components/CardsDashboard'
import { Suspense } from 'react'
import RecentSalesSkeleton from '@/components/Skelentons/RecentSales.skeleton'
import DashboardChart from '@/components/DashboardChart'
import DashboardChartSkeleton from '@/components/Skelentons/DashboardChart.skeleton'

// const cardData = [
//   {
//     title: 'Total Revenue',
//     svgPath: <BanknotesIcon />,
//     value: '$45,231.89',
//     description: '+20.1% from last month'
//   },
//   {
//     title: 'Subscriptions',
//     svgPath: (
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeWidth='2'
//         className='w-4 h-4 text-secondary-text'
//       >
//         <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
//         <circle cx='9' cy='7' r='4' />
//         <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
//       </svg>
//     ),
//     value: '+2350',
//     description: '+180.1% from last month'
//   },
//   {
//     title: 'Sales',
//     svgPath: (
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeWidth='2'
//         className='w-4 h-4 text-secondary-text'
//       >
//         <rect width='20' height='14' x='2' y='5' rx='2' />
//         <path d='M2 10h20' />
//       </svg>
//     ),
//     value: '+12,234',
//     description: '+19% from last month'
//   },
//   {
//     title: 'Active Now',
//     svgPath: (
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeWidth='2'
//         className='w-4 h-4 text-secondary-text'
//       >
//         <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
//       </svg>
//     ),
//     value: '+573',
//     description: '+201 since last hour'
//   }
// ]

export const dynamic = 'force-dynamic'

export default function Dashboard() {
  const currentYear = new Date().getFullYear()
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between w-full'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <NewMovement>
          <Button className='flex gap-2'>
            <PlusIcon className='h-5' />
            <span className='hidden md:block'>New Movement</span>
          </Button>
        </NewMovement>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {/* {cardData?.map(({ title, svgPath, value, description }, index) => (
          <CardsDashboard
            key={index}
            title={title}
            svg={svgPath}
            value={value}
            description={description}
          />
        ))} */}
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4 w-full h-full min-h-[350px]'>
          <CardHeader className='flex '>
            <CardTitle>Overview</CardTitle>
            <small className='italic text-secondary-text'>
              Stats of {currentYear}
            </small>
          </CardHeader>
          <CardContent className='w-full h-full'>
            <Suspense fallback={<DashboardChartSkeleton />}>
              <DashboardChart year={currentYear} />
            </Suspense>
          </CardContent>
        </Card>
        <Suspense fallback={<RecentSalesSkeleton />}>
          <RecentSales />
        </Suspense>
      </div>
    </section>
  )
}
