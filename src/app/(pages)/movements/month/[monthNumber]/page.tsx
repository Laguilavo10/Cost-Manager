'use client'
import CardsDashboard from '@/components/CardsDashboard'
import {
  BanknotesIcon,
  ChevronLeftIcon as ChevronLeft,
  ChevronRightIcon as ChevronRight
} from '@heroicons/react/24/solid'
import DatePickerRange from '@/components/DatePickerRange'
import Overview from '@/components/Overview'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import TableData from '@/components/TableData'

export default function StatMonth({
  params: { monthNumber },
  searchParams: { year = new Date().getFullYear() }
}: {
  params: { monthNumber: string }
  searchParams: { year: number }
}) {
  const [pageChart, setPageChart] = useState(1)

  const handleArrowRight = () => {
    setPageChart((prev) => {
      if (prev === 1) return 2
      return prev
    })
  }
  const handleArrowLeft = () => {
    setPageChart((prev) => {
      if (prev === 2) return 1
      return prev
    })
  }

  const month =
    monthNumber === 'currentDate' ? new Date().getMonth() + 1 : monthNumber
  return (
    <section className='grid grid-cols-[60%_1fr] gap-20'>
      <div>
        <header className='flex justify-between'>
          <h2>
            October <small> - stats</small>
          </h2>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={handleArrowLeft}
              disabled={pageChart === 1}
              className='cursor-pointer'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={handleArrowRight}
              disabled={pageChart === 2}
              className='cursor-pointer'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </header>
        <div className='flex items-center h-full'>
          {pageChart === 1 ? <Overview /> : <TableData />}
        </div>
      </div>
      <aside className='flex flex-col gap-5'>
        <DatePickerRange month={month} year={year} />
        <div className='flex justify-around'>
          <CardsDashboard
            title={'Total Revenue'}
            svg={<BanknotesIcon />}
            value={'10000'}
          />
          <CardsDashboard
            title={'Total Expenses'}
            svg={<BanknotesIcon />}
            value={'10000'}
          />
        </div>
      </aside>
    </section>
  )
}
