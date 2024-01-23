import DatePickerRange from '@/components/DatePickerRange'
import { getMovementByDate } from '@/services/getMovementsByDate'
import type { Movement } from '@/types'
import BudgetCards from '@/components/BudgetCards'
import { getDaysInMonth } from '@/lib/getDaysInMonth'

import MonthlyCharts from '@/components/MonthlyCharts'

export default async function StatMonth({
  params: { monthNumber },
  searchParams: { year = new Date().getFullYear() }
}: {
  params: { monthNumber: string }
  searchParams: { year: number }
}) {
  // Is to avoid the error of the icon
  if (monthNumber === 'icon-512x512.png') return null
  const response = await getMovementByDate({
    to: `${monthNumber}/01/${year}`,
    from: `${monthNumber}/${getDaysInMonth(monthNumber, year)}/${year}`
  })

  const data: Movement[] = await response?.json()

  const month =
    monthNumber === 'currentDate' ? new Date().getMonth() + 1 : monthNumber
  return (
    <section className='md:grid md:grid-cols-[60%_1fr] gap-10 md:gap-20 flex flex-col-reverse'>
      <MonthlyCharts data={data} />
      <aside className='flex flex-col gap-5'>
        <DatePickerRange month={month} year={year} />
        <BudgetCards year={year} month={Number(monthNumber)} />
      </aside>
    </section>
  )
}
