'use client'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'
import { LineChart } from '@tremor/react'
import React from 'react'

export default function Chart({ data }: { data: any[] }) {
  return (
    <LineChart
      className='mt-6 text-tremor-content-inverted'
      id='bar-chart'
      data={data}
      index='month'
      categories={['earnings', 'expenses']}
      colors={['green', 'red']}
      animationDuration={500}
      yAxisWidth={48}
      valueFormatter={formatNumberAsCurrency}
      showAnimation
    />
  )
}
