'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // dialogClose,
  DialogTrigger
} from '@/components/ui/dialog'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Label } from './ui/label'
import DatePicker from './DatePicker'
import { useRef, useState } from 'react'
import { Textarea } from './ui/textarea'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { registerMovement } from '@/services/registerMovement'
import type { MethodPayment, TypeMovement } from '@/types'
import { toast } from 'sonner'
import { Form } from './Form'

export default function NewMovement({ children }: React.PropsWithChildren) {
  const [date, setDate] = useState(new Date())
  const formRef = useRef<HTMLFormElement>(null)

  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.target as HTMLFormElement)

    const dataToSubmit = {
      date: new Date(date),
      amount: Number(formData.get('amount')),
      typeMovement: formData.get('typeMovement') as unknown as TypeMovement,
      methodPayment: formData.get('methodPayment') as unknown as MethodPayment,
      description: formData.get('description') as string
    }
    try {
      const response = await registerMovement(dataToSubmit)
      // const response = {
      //   status: 201
      // }
      if (response?.status !== 201) {
        throw new Error('Ha ocurrido un error')
      }
      toast.success('Movimiento registrado correctamente')
      formRef.current?.reset()
      setDate(new Date())
      // dialogClose()
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido un error')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Form
          onSubmit={submitData}
          buttonProperties={{
            className:
              '!bg-secondary !text-primary-text mt-5 w-full font-bold tracking-wider px-4 py-2',
            value: 'Register'
          }}
          formRef={formRef}
        >
          <DialogHeader>
            <DialogTitle>Register New Movement</DialogTitle>
            <Separator className='!my-2' />
            <DialogDescription className='grid grid-cols-2 gap-4 gap-y-8 '>
              <InputForm label='Date'>
                <DatePicker date={date} handleDate={setDate} />
              </InputForm>
              <InputForm label='Amount'>
                <Input type='number' name='amount' />
              </InputForm>
              <InputForm label='Type Movement'>
                <Select name='typeMovement'>
                  <SelectTrigger className='w-full text-primary-text'>
                    <SelectValue placeholder='Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1'>Income</SelectItem>
                    <SelectItem value='2'>Expense</SelectItem>
                  </SelectContent>
                </Select>
              </InputForm>
              <InputForm label='Method'>
                <Select name='methodPayment'>
                  <SelectTrigger className='w-full text-primary-text'>
                    <SelectValue placeholder='Method' />
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
              <InputForm label='Description' className='col-span-2'>
                <Textarea
                  placeholder='Type a description here.'
                  className='text-primary-text'
                  name='description'
                />
              </InputForm>
            </DialogDescription>
          </DialogHeader>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

const InputForm = ({
  children,
  label,
  className
}: {
  children: React.ReactNode
  label: string
  className?: string
}) => {
  return (
    <Label className={cn('flex flex-col gap-2', className)}>
      <span>{label}</span>
      {children}
    </Label>
  )
}
