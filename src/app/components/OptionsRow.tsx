'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  EllipsisVerticalIcon as OptionsIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Movement } from '@/types'
import Alert from './Alert'
import { deleteMovement } from '@/services/deleteMovement'
import { toast } from 'sonner'

export default function OptionsRow({ id }: { id: Movement['idMovement'] }) {
  const handleDelete = async () => {
    try {
      const respose = await deleteMovement(id)
      if (respose?.status === 200) {
        toast.success('Movement deleted successfully')
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='secondary' size='sm' className='p-1 h-min'>
          <OptionsIcon className='w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col max-w-min p-1'>
        <Alert
          title={'Delete Movement'}
          description={'Are you sure you want to delete this movement?'}
          cancelButton={'Cancel'}
          mainButton={'Delete'}
          mainButtonAction={async () => {
            await handleDelete()
          }}
        >
          <Button className='hover:!bg-red-700/30 !text-red-600 flex gap-2 justify-start items-center !bg-transparent'>
            <TrashIcon className='w-5 fill-current' />
            Delete
          </Button>
        </Alert>
        <Link
          href={`/movements/edit/${id}`}
          className={cn(
            'hover:!bg-yellow-700/30 !text-yellow-600 flex gap-2 !justify-start items-center !bg-transparent',
            buttonVariants()
          )}
        >
          <PencilIcon className='w-5 fill-current' />
          Edit
        </Link>
        {/* </div> */}
        {/* <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Dimensions</h4>
            <p className='text-sm text-muted-foreground'>
              Set the dimensions for the layer.
            </p>
          </div>
        </div> */}
      </PopoverContent>
    </Popover>
  )
}
