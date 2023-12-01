import CardSkeleton from '@/components/Skelentons/Cards.skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingMonthPage() {
  return (
    <section className='md:grid md:grid-cols-[60%_1fr] gap-10 md:gap-20 flex flex-col-reverse'>
      <div>
        <header className='flex justify-between'>
          <h2 className='tracking-tight text-2xl font-extrabold'>Stats</h2>
        </header>
        <div className='flex h-full overflow-y-auto'>
          <Skeleton className='w-full mt-5 h-24'/>
        </div>
      </div>
      <aside className='flex flex-col gap-5 justify-center items-center'>
        <Skeleton className='h-64 w-64' />
        <CardSkeleton />
        <CardSkeleton />
      </aside>
    </section>
  )
}
