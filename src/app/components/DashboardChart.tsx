import { numberToMonth } from '@/lib/numberToMonth'
import type { Balance } from '@/types'
import React from 'react'
import Chart from './Chart'
import { getBalance } from '@/services/getBalanceByDate'

export default async function DashboardChart() {
  const response = await getBalance({ year: 2023 })
  const data: Balance[] = await response?.json()
  const dataFormated = data?.map((item) => {
    item.month = numberToMonth(Number(item.month) - 1)
    return item
  })
  return <Chart data={dataFormated} />
}
