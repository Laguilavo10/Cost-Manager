'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
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

const DEFAULT_VALUE = {
  date: new Date(),
  amount: '',
  category: '',
  method: '',
  description: ''
}
export default function NewMovement({ children }: React.PropsWithChildren) {
  const [data, setData] = useState(DEFAULT_VALUE)
  console.log(data.date)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Register New Movement</AlertDialogTitle>
          <Separator className='!my-2' />
          <AlertDialogDescription className='grid grid-cols-2 gap-4 gap-y-8 '>
            <InputForm label='Date'>
              <DatePicker
                date={data.date}
                handleDate={(date: Date) => setData({ ...data, date })}
              />
            </InputForm>
            <InputForm label='Amount'>
              <Input type='number' />
            </InputForm>
            <InputForm label='Type Movement'>
              <Select>
                <SelectTrigger className='w-full text-primary-text'>
                  <SelectValue placeholder='Type' />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value='income'>Income</SelectItem>
                  <SelectItem value='expense'>Expense</SelectItem>
                </SelectContent>
              </Select>
            </InputForm>
            <InputForm label='Method'>
            <Select>
                <SelectTrigger className='w-full text-primary-text'>
                  <SelectValue placeholder='Method' />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value='cash'>Cash</SelectItem>
                  <SelectItem value='credit-card'>Credit Card</SelectItem>
                </SelectContent>
              </Select>
            </InputForm>
            <InputForm label='Description' className='col-span-2'>
              <Textarea placeholder='Type a description here.' className='text-primary-text' />
            </InputForm>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='!bg-red-700'>Cancel</AlertDialogCancel>
          <AlertDialogAction className='!bg-secondary !text-primary-text'>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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
