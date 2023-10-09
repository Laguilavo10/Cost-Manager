'use client'
import React, { useState } from 'react'
import { Calendar } from './ui/calendar'
import { addDays, getDaysInMonth } from 'date-fns'
import type { DateRange } from 'react-day-picker'

export default function DatePickerRange({
  year,
  month
}: {
  year: number
  month: string | number
}) {
  const monthMinusOne = Number(month) - 1

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(year, monthMinusOne, 1),
    to: addDays(
      new Date(year, monthMinusOne, 0),
      getDaysInMonth(new Date(year, monthMinusOne))
    )
  })
  return (
    <Calendar
      disableNavigation
      initialFocus
      mode='range'
      defaultMonth={new Date(year, monthMinusOne)}
      selected={date}
      onSelect={setDate}
      numberOfMonths={1}
      showOutsideDays={false}
      classNames={{
        // cell: 'w-[36px] text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day_today: ''
      }}
    />
  )
}
