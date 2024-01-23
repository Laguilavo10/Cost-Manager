'use client'
import { useState } from 'react'
import CategorysChart from './CategorysChart'
import type { Movement } from '@/types'
import TableData from './TableData'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MonthlyCharts({ data }: { data: Movement[] }) {
  const [index, setIndex] = useState(0)

  const handleIndex = () => {
    setIndex((prev) => (prev === 0 ? 1 : 0))
  }

  return (
    <div>
      <header className='flex justify-between'>
        <h2 className='tracking-tight text-2xl font-extrabold'>Stats</h2>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='icon'
            className={cn('cursor-pointer', {})}
            disabled={index === 0}
            onClick={handleIndex}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            className={cn()}
            disabled={index === 1}
            onClick={handleIndex}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </header>
      <div className='flex items-center h-full overflow-y-auto'>
        {index === 1 ? (
          <CategorysChart data={data} />
        ) : (
          <TableData data={data} />
        )}
      </div>
    </div>
  )
}
