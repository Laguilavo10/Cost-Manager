// 'use client'
import React from 'react'
import { Calendar } from './ui/calendar'
// import { addDays, getDaysInMonth } from 'date-fns'
// import type { DateRange } from 'react-day-picker'
import { numberToMonth } from '@/lib/numberToMonth'

export default function DatePickerRange({
  year,
  month
}: {
  year: number
  month: string | number
}) {
  const monthMinusOne = Number(month) - 1

  // const [date, setDate] = useState<DateRange | undefined>({
  //   from: new Date(year, monthMinusOne, 1),
  //   to: addDays(
  //     new Date(year, monthMinusOne, 0),
  //     getDaysInMonth(new Date(year, monthMinusOne))
  //   )
  // })
  return (
    <article className='flex flex-col items-center'>
      <h3 className='tracking-tight text-2xl font-extrabold'>
        {numberToMonth(monthMinusOne)}{' '}
        <small className='font-medium text-base text-white/70'>- {year}</small>{' '}
      </h3>
      <Calendar
        disableNavigation
        initialFocus
        mode='single'
        defaultMonth={new Date(year, monthMinusOne)}
        // selected={date}
        // onSelect={setDate}
        numberOfMonths={1}
        showOutsideDays={false}
        classNames={{
          caption: 'hidden'
          // day_today: ''
        }}
      />
    </article>
  )
}
