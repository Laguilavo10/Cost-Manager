import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getMovements } from '@/services/getMovements'
import { type Movement, TypeMovement } from '@/types.d'
import { Separator } from './ui/separator'
import { cn } from '@/lib/utils'
import OptionsRow from './OptionsRow'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'
import { ScrollArea } from '@/components/ui/scroll-area'
const LIMIT = 10

export default async function RecentSales() {
  const response = await getMovements(LIMIT)
  const data: Movement[] = await response?.json()

  return (
    <Card className='col-span-3 max-h-[450px] overflow-y-auto'>
      <ScrollArea className='h-full rounded-md border p-4'>
        <CardHeader>
          <CardTitle className='flex w-full justify-between'>
            <p>Recent Movements</p>
          </CardTitle>
          <small className='italic text-secondary-text'>
            Last {LIMIT} movements
          </small>

          {/* <CardDescription>You made 265 sales this month.</CardDescription> */}
        </CardHeader>
        <CardContent>
          {data?.map(
            ({ idMovement, description, createdAt, typeId, value }) => {
              return (
                <article className='flex flex-col py-2 gap-3' key={idMovement}>
                  <Separator />
                  <div className='flex items-center w-full justify-between'>
                    <div className='flex gap-2 items-center justify-center'>
                      <span
                        className={cn(
                          'py-1 px-2 rounded-full border border-transparent text-sm',
                          typeId === 1
                            ? 'bg-secondary/30 text-secondary'
                            : 'bg-red-700/30 text-red-600'
                        )}
                      >
                        {TypeMovement[typeId]}
                      </span>
                      <span>{formatNumberAsCurrency(value)}</span>
                    </div>
                    <OptionsRow id={idMovement} />
                  </div>
                  {/* <div className='shadow-lg rounded-md p-2 ring-opacity-40'> */}
                  <p>{description}</p>
                  <small className='flex w-full justify-end'>
                    {new Date(createdAt).toLocaleString('es-CO', {
                      day: 'numeric',
                      month: 'numeric',
                      year: 'numeric'
                    })}
                  </small>
                  {/* </div> */}
                </article>
              )
            }
          )}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
