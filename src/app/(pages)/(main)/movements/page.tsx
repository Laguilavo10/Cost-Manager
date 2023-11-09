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
  const currentDate = new Date()
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
                currentDate.getMonth() === index &&
                  'border border-secondary rounded-md'
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
                month={new Date(Date.UTC(currentDate.getFullYear(), index + 1))}
              />
            </Link>
          )
        })}
      </div>
    </MaxWidthWrapper>
  )
}
