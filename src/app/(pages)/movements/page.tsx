import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default function Movements() {
  const currentMonth = new Date().getMonth()
  return (
    <MaxWidthWrapper>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 justify-center gap-y-3'>
        {months.map((_, index) => {
          return (
            <Link
              href={`/movements/month/${
                index + 1
              }?year=${new Date().getFullYear()}`}
              className={cn(
                'relative overflow-x-hidden cursor-pointer',
                currentMonth === index &&
                  'border border-primary-text rounded-md'
              )}
              key={index + 1}
            >
              <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 hover:bg-primary/80 text-secondary opacity-0 hover:opacity-100 transition-opacity ease-out duration-300 flex justify-center items-center'>
                SEE STATS
              </div>
              <Calendar
                disabled
                disableNavigation
                showOutsideDays={false}
                month={new Date(2023, index)}
              />
            </Link>
          )
        })}
      </div>
    </MaxWidthWrapper>
  )
}
