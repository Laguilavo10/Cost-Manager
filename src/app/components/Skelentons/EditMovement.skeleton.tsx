import { GoBack } from '@/components/GoBack'
import { InputForm } from '@/components/NewMovement'
import { Skeleton } from '../ui/skeleton'

export default function EditMovementSkeleton() {
  return (
    <section className='max-w-xl m-auto'>
      <div className='flex gap-2 items-center mb-4'>
        <GoBack />
        <Skeleton className='w-2/5' />
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <InputForm label='Date' className='col-span-full'>
          <Skeleton className='w-full h-10' />
        </InputForm>
        <InputForm label='Amount'>
          <Skeleton className='w-full h-10' />
        </InputForm>
        <InputForm label='Type Movement'>
          <Skeleton className='w-full h-10' />
        </InputForm>
        <InputForm label='Category'>
          <Skeleton className='w-full h-10' />
        </InputForm>
        <InputForm label='Method'>
          <Skeleton className='w-full h-10' />
        </InputForm>
        <InputForm label='Description' className='col-span-full'>
          <Skeleton className='w-full h-24' />
        </InputForm>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 !bg-secondary !text-primary-text mt-5 w-full font-bold tracking-wider px-4 py-2'
          type='button'
        >
          Register
        </button>
      </div>
    </section>
  )
}
