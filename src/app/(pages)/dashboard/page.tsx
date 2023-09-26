import CardsDashboard from '@/components/CardsDashboard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { TabsContent, Tabs, TabsTrigger, TabsList } from '@/components/ui/tabs'
import { BanknotesIcon } from '@heroicons/react/24/solid'

export default function Dashboard() {
  const cardData = [
    {
      title: 'Total Revenue',
      svgPath: <BanknotesIcon />,
      value: '$45,231.89',
      description: '+20.1% from last month'
    },
    {
      title: 'Subscriptions',
      svgPath: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 text-secondary-text'
        >
          <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
          <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
        </svg>
      ),
      value: '+2350',
      description: '+180.1% from last month'
    },
    {
      title: 'Sales',
      svgPath: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 text-secondary-text'
        >
          <rect width='20' height='14' x='2' y='5' rx='2' />
          <path d='M2 10h20' />
        </svg>
      ),
      value: '+12,234',
      description: '+19% from last month'
    },
    {
      title: 'Active Now',
      svgPath: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 text-secondary-text'
        >
          <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
        </svg>
      ),
      value: '+573',
      description: '+201 since last hour'
    }
  ]
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      {/* <Tabs defaultValue='overview' className='space-y-4 '>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='analytics' >
            Analytics
          </TabsTrigger>
          <TabsTrigger value='reports' disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value='notifications' disabled>
            Notifications
          </TabsTrigger>
        </TabsList> */}
        {/* <TabsContent value='overview' className='space-y-4'> */}
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {cardData.map(({ title, svgPath, value, description }, index) => (
              <CardsDashboard
                key={index}
                title={title}
                svg={svgPath}
                value={value}
                description={description}
              />
            ))}
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className='pl-2'>{/* <Overview /> */}</CardContent>
            </Card>
            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>{/* <RecentSales /> */}</CardContent>
            </Card>
          </div>
        {/* </TabsContent> */}
      {/* </Tabs> */}
    </section>
  )
}
