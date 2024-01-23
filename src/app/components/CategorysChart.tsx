'use client'
import { CATEGORYS } from '@/constants/const'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'
import type { Movement } from '@/types'
import { BarChart, Card, Title } from '@tremor/react'

export default function CategorysChart({ data }: { data: Movement[] }) {
  const chartdata = CATEGORYS.map((category) => ({
    ...category,
    Amount: 0
  }))

  data.forEach(({ categoryId, value }) => {
    const index = chartdata.findIndex((category) => category.id === categoryId)
    if (index !== -1) {
      chartdata[index].Amount += value
    }
  })
  return (
    <Card className='!bg-primary !border !border-border'>
      <Title className='!text-secondary'>Expenses by categories</Title>
      <BarChart
        className='mt-6'
        data={chartdata}
        index='value'
        categories={['Amount']}
        colors={['emerald']}
        valueFormatter={formatNumberAsCurrency}
        layout='vertical'
        showAnimation
        yAxisWidth={100}
      />
    </Card>
  )
}
