'use client'
import { updateMovementAction } from '@/actions/updateMovementAction'
import DatePicker from '@/components/DatePicker'
import { Form } from '@/components/Form'
import { GoBack } from '@/components/GoBack'
import { InputForm } from '@/components/NewMovement'
import EditMovementSkeleton from '@/components/Skelentons/EditMovement.skeleton'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from '@/components/ui/select'
// import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { getMovementById } from '@/services/getMovementById'
import { type UpdateMovement } from '@/services/updateMovement'
import { TypeMovement, type Movement, MethodPayment } from '@/types.d'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditMovement({
  params: { id }
}: {
  params: { id: string }
}) {
  const [date, setDate] = useState<Date>(new Date())
  const { data, isLoading } = useQuery(
    ['movement_id'],
    async () => {
      const response = await getMovementById(id)
      const data: Movement = await response?.json()
      setDate(new Date(data?.createdAt))
      return data
    },
    { cacheTime: 0 }
  )
  if (isLoading) {
    return <EditMovementSkeleton />
  }
  if (data === undefined) {
    return <div>Hubo un error</div>
  }

  const typeMovement = TypeMovement[data?.typeId]
  const methodPayment = MethodPayment[data?.methodPaymentId]

  const handleUpdate = async (evt: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(evt.target as HTMLFormElement)
    const dataToSubmit: UpdateMovement = {
      createdAt: new Date(date),
      value: Number(formData.get('amount')),
      typeId: formData.get('typeMovement') as unknown as TypeMovement,
      methodPaymentId: formData.get(
        'methodPayment'
      ) as unknown as MethodPayment,
      description: formData.get('description') as string
    }
    try {
      const response = await updateMovementAction(id, dataToSubmit)
      if (response === undefined) {
        throw new Error('Error updating movement')
      }
      toast.success('Movement updated successfully')
    } catch (error) {
      console.log(error)
      toast.error('Error updating movement')
    }
  }
  return (
    <section className='max-w-xl m-auto'>
      <div className='flex gap-2 items-center mb-4'>
        <GoBack />
        <div className='font-medium text-base text-white/70 truncate'>
          {data?.description}
        </div>
      </div>

      <Form
        onSubmit={async (evt) => {
          await handleUpdate(evt)
        }}
        buttonProperties={{
          className:
            '!bg-secondary !text-primary-text mt-5 w-full font-bold tracking-wider px-4 py-2',
          value: 'Register'
        }}
        className='flex flex-col gap-4'
      >
        <InputForm label='Date'>
          <DatePicker date={date} handleDate={setDate} />
        </InputForm>
        <InputForm label='Amount'>
          <Input type='number' name='amount' defaultValue={data?.value} />
        </InputForm>
        <div className='grid grid-cols-2 gap-5'>
          <InputForm label='Type Movement'>
            <Select name='typeMovement' defaultValue={data?.typeId.toString()}>
              <SelectTrigger className='w-full text-primary-text'>
                <SelectValue placeholder={typeMovement} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>Income</SelectItem>
                <SelectItem value='2'>Expense</SelectItem>
              </SelectContent>
            </Select>
          </InputForm>
          <InputForm label='Method'>
            <Select
              name='methodPayment'
              defaultValue={data?.methodPaymentId.toString()}
            >
              <SelectTrigger className='w-full text-primary-text'>
                <SelectValue placeholder={methodPayment} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='2'>Cash</SelectItem>
                <SelectItem value='3'>Credit Card</SelectItem>
                <SelectItem value='4'>Nequi</SelectItem>
                <SelectItem value='5'>DaviPlata</SelectItem>
                <SelectItem value='1'>Other</SelectItem>
              </SelectContent>
            </Select>
          </InputForm>
        </div>
        <InputForm label='Description' className='col-span-2'>
          <Textarea
            placeholder='Type a description here.'
            className='text-primary-text'
            name='description'
            defaultValue={data?.description}
          />
        </InputForm>
      </Form>
    </section>
  )
}
