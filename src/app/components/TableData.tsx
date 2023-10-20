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

interface Props {
  data: Movement[]
}

export default function TableData({ data }: Props) {
  return (
    <Table className='overflow-y-auto'>
      <TableCaption>A list of your recent costs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
          <TableHead className='w-[10px]'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(
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
