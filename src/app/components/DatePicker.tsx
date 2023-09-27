import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Calendar } from './ui/calendar'
import type { DaySelectionMode } from 'react-day-picker'
// import { Popover } from ''
interface Props {
  date: Date
  handleDate: any
  type?: DaySelectionMode
}
export default function DatePicker({ date, handleDate, type }: Props) {
  return (
    <div className={cn('grid gap-2 ')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal !bg-primary !text-primary-text'
            )}
          >
            <CalendarDaysIcon className='w-4 h-4 mr-2' />
            {date?.toLocaleDateString() ?? (
              <span className='text-muted-foreground'>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='end'>
          <Calendar
            initialFocus
            mode={'single'}
            // defaultMonth={date?.from}
            selected={date}
            onSelect={handleDate}
            // numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
