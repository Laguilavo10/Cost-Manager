import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'

interface Props {
  title: string
  svg?: React.ReactNode
  value: string | number
  description?: string
  color?: string
}
export default function CardsDashboard({
  title,
  svg,
  value,
  description,
  color
}: Props) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <div className='ml-3 w-4 h-4 text-secondary-text'>{svg}</div>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{formatNumberAsCurrency(value ?? 0)}</div>
        <p className='text-xs text-secondary-text'>
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
