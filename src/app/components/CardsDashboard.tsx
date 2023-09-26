import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Props {
  title: string
  svg: React.ReactNode
  value: string
  description: string
}
export default function CardsDashboard({
  title,
  svg,
  value,
  description
}: Props) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <div className='w-4 h-4 text-secondary-text'>{svg}</div>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>${value}</div>
        <p className='text-xs text-secondary-text'>
          {description}
          {/* +20.1% from last month */}
        </p>
      </CardContent>
    </Card>
  )
}
