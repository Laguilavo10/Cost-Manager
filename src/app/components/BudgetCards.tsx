import React from 'react'
import CardsDashboard from './CardsDashboard'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { getBalance } from '@/services/getBalanceByDate'
import type { Balance } from '@/types'

export default async function BudgetCards({
  year,
  month
}: {
  year: number
  month?: number
}) {
  const response = await getBalance({ year, month })
  const [data]: [Balance] = await response?.json()
  return (
    <div className='flex justify-around flex-col md:flex-row gap-y-3'>
      <CardsDashboard
        title={'Total Revenue'}
        svg={<BanknotesIcon />}
        value={data?.earnings ?? 0}
      />
      <CardsDashboard
        title={'Total Expenses'}
        svg={<BanknotesIcon />}
        value={data?.expenses ?? 0}
      />
    </div>
  )
}
