// import CardsDashboard from '@/components/CardsDashboard'
import NewMovement from '@/components/NewMovement'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PlusIcon
} from '@heroicons/react/24/solid'
import RecentSales from '@/components/RecentSales'
import { Suspense } from 'react'
import RecentSalesSkeleton from '@/components/Skelentons/RecentSales.skeleton'
import DashboardChart from '@/components/DashboardChart'
import DashboardChartSkeleton from '@/components/Skelentons/DashboardChart.skeleton'
import CategoriesCards from '@/components/CategoriesCards'

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
      <CategoriesCards/>
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
