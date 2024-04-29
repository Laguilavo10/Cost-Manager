'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { TypeMovement, type Movement, MethodPayment } from '@/types.d'
import OptionsRow from './OptionsRow'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'
import { useState } from 'react'

interface Props {
  data: Movement[]
}

const sortBy = {
  valueIncrease: (a: Movement, b: Movement) => a.value - b.value,
  valueDecrease: (a: Movement, b: Movement) => b.value - a.value,
  dateIncrease: (a: Movement, b: Movement) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  dateDecrease: (a: Movement, b: Movement) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
}

type SortBy = keyof typeof sortBy

enum SortOptions {
  ValueIncrease = 'valueIncrease',
  ValueDecrease = 'valueDecrease',
  DateIncrease = 'dateIncrease',
  DateDecrease = 'dateDecrease'
}

// const sortOptions: Record<SortBy, SortBy> = Object.keys(sortBy).reduce(
//   (acc, curr) => {
//     acc[curr as SortBy] = curr as SortBy
//     return acc
//   },
//   // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
//   {} as Record<SortBy, SortBy>
// )

export default function TableData({ data }: Props) {
  const [dataSorted, setDataSorted] = useState(data)
  const [sortedBy, setSortedBy] = useState<SortBy>(SortOptions.DateDecrease)

  const sortedByDate = () => {
    sortedBy === SortOptions.DateDecrease
      ? setSortedBy(SortOptions.DateIncrease)
      : setSortedBy(SortOptions.DateDecrease)
    handleSort(sortBy[sortedBy])
  }

  const handleSort = (func: (a: Movement, b: Movement) => number) => {
    const sortedData = data.sort(func)
    setDataSorted(sortedData)
  }

  const sortedByValue = () => {
    sortedBy === SortOptions.ValueIncrease
      ? setSortedBy(SortOptions.ValueDecrease)
      : setSortedBy(SortOptions.ValueIncrease)
    handleSort(sortBy[sortedBy])
  }

  return (
    <Table className='overflow-y-auto'>
      <TableCaption>A list of your recent costs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead onClick={sortedByDate}>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right' onClick={sortedByValue}>
            Amount
          </TableHead>
          <TableHead className='w-[10px]'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSorted?.map(
          ({
            createdAt,
            typeId,
            value,
            methodPaymentId,
            idMovement,
            description
          }) => (
            <TableRow key={idMovement}>
              <TableCell className='font-medium'>
                {new Date(createdAt).toLocaleString('es-CO', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric'
                })}
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    'p-2  rounded-full border border-transparent font-semibold ',
                    typeId === 1
                      ? 'bg-secondary/30 text-secondary'
                      : 'bg-red-700/30 text-red-600'
                  )}
                >
                  {TypeMovement[typeId]}
                </span>
              </TableCell>
              <TableCell>{MethodPayment[methodPaymentId]}</TableCell>
              <TableCell className='truncate max-w-[200px]' title={description}>
                {description}
              </TableCell>
              <TableCell className='text-right'>
                {formatNumberAsCurrency(value)}
              </TableCell>
              <TableCell className='text-right'>
                <OptionsRow id={idMovement} />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  )
}
