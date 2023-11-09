// import {
//   ChevronLeftIcon as ChevronLeft,
//   ChevronRightIcon as ChevronRight
// } from '@heroicons/react/24/solid'
import DatePickerRange from '@/components/DatePickerRange'

import TableData from '@/components/TableData'
import { getMovementByDate } from '@/services/getMovementsByDate'
import type { Movement } from '@/types'
import BudgetCards from '@/components/BudgetCards'
import { getDaysInMonth } from '@/lib/getDaysInMonth'

export default async function StatMonth({
  params: { monthNumber },
  searchParams: { year = new Date().getFullYear() }
}: {
  params: { monthNumber: string }
  searchParams: { year: number }
}) {
  const response = await getMovementByDate({
    to: `${monthNumber}/01/${year}`,
    from: `${monthNumber}/${getDaysInMonth(monthNumber, year)}/${year}`
  })

  const data: Movement[] = await response?.json()

  const month =
    monthNumber === 'currentDate' ? new Date().getMonth() + 1 : monthNumber

  return (
    <section className='md:grid md:grid-cols-[60%_1fr] gap-20 flex flex-col-reverse'>
      <div>
        <header className='flex justify-between'>
          <h2 className='tracking-tight text-2xl font-extrabold'>Stats</h2>
          {/* <div className='flex gap-2'>
            <Button
              variant='outline'
              size='icon'
              className='cursor-pointer'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='cursor-pointer'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div> */}
        </header>
        <div className='flex items-center h-full overflow-y-auto'>
          <TableData data={data} />
        </div>
      </div>
      <aside className='flex flex-col gap-5'>
        <DatePickerRange month={month} year={year} />
        <BudgetCards year={year} month={Number(monthNumber)} />
      </aside>
    </section>
  )
}
