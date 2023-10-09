'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  dialogClose
} from '@/components/ui/dialog'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Label } from './ui/label'
import DatePicker from './DatePicker'
import { useState } from 'react'
import { Textarea } from './ui/textarea'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from './ui/button'

export default function NewMovement({ children }: React.PropsWithChildren) {
  const [date, setDate] = useState(new Date())
  // console.log(data.date)
  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const dataToSubmit = Object.fromEntries(formData.entries())
    dataToSubmit.date = date.toString()
    dialogClose()
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={submitData}>
          <DialogHeader>
            <DialogTitle>Register New Movement</DialogTitle>
            <Separator className='!my-2' />
            <DialogDescription className='grid grid-cols-2 gap-4 gap-y-8 '>
              <InputForm label='Date'>
                <DatePicker
                  date={date}
                  handleDate={setDate}
                />
              </InputForm>
              <InputForm label='Amount'>
                <Input type='number' name='amount' />
              </InputForm>
              <InputForm label='Type Movement'>
                <Select name='type'>
                  <SelectTrigger className='w-full text-primary-text'>
                    <SelectValue placeholder='Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='income'>Income</SelectItem>
                    <SelectItem value='expense'>Expense</SelectItem>
                  </SelectContent>
                </Select>
              </InputForm>
              <InputForm label='Method'>
                <Select name='method'>
                  <SelectTrigger className='w-full text-primary-text'>
                    <SelectValue placeholder='Method' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='cash'>Cash</SelectItem>
                    <SelectItem value='credit-card'>Credit Card</SelectItem>
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
          <DialogFooter>
            <Button
              type='submit'
              className='!bg-secondary !text-primary-text mt-5 w-full font-bold tracking-wider'
            >
              Create
            </Button>
          </DialogFooter>
        </form>
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
