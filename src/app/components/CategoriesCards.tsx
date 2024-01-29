import CardsDashboard from './CardsDashboard'
import { getCategoriesAmounts } from '@/services/getCategoriesAmounts'
import { Category, type CategoriesAmounts } from '@/types.d'
import { getDaysInMonth } from '@/lib/getDaysInMonth'
import { formatNumberAsCurrency } from '@/lib/formatNumberAsCurrency'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default async function CategoriesCards() {
  const currentDate = new Date()
  const monthNumber = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const response = await getCategoriesAmounts({
    to: `${year}/${monthNumber}/01`,
    from: `${year}/${monthNumber}/${getDaysInMonth(monthNumber, year)}`
  })
  const data: CategoriesAmounts[] = await response?.json()
  const sortedData = [...data].sort((a, b) => b.amount - a.amount)
  return (
    <>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='mx-12'
      >
        <CarouselContent>
          {sortedData?.map(({ categoryId, limit, amount }) => (
            <CarouselItem
              key={categoryId}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <CardsDashboard
                key={categoryId}
                title={Category[`${categoryId}`]}
                value={amount}
                description={`${
                  limit === null
                    ? "This category doesn't have limit"
                    : 'The limit of this category is ' +
                      formatNumberAsCurrency(limit)
                }`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
