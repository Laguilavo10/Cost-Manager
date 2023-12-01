import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '../ui/skeleton'
const LIMIT = 10

export default function RecentSalesSkeleton() {
  return (
    <Card className='col-span-4 md:col-span-3 max-h-[450px] overflow-y-auto'>
      <ScrollArea className='h-full rounded-md border p-4'>
        <CardHeader>
          <CardTitle className='flex w-full justify-between'>
            <p>Recent Movements</p>
          </CardTitle>
          <small className='italic text-secondary-text'>
            Last {LIMIT} movements
          </small>

        </CardHeader>
        <CardContent>
          {[...Array(LIMIT)].map((_, index) => {
            return (
              <article className='flex flex-col py-2 gap-3' key={index}>
                <Separator />
                <div className='flex items-center w-full justify-between'>
                    <Skeleton
                      className={cn(
                        'py-1 px-2 rounded-3xl h-6 w-1/3'
                      )}
                    />
                </div>
                <Skeleton
                  className={cn(
                    'py-1 px-2 h-14'
                  )}
                />
              </article>
            )
          })}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
