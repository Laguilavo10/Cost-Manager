'use client'
import { InputForm } from '@/components/NewMovement'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

export default function YearPicker() {
  const searchParams = useSearchParams()
  const year = searchParams.get('year') ?? new Date().getFullYear().toString()
  const [selectedYear, setSelectedYear] = useState(year)
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    replace(`${pathname}?year=${value}`)
  }
  return (
    <InputForm label='Year'>
      <Select
        defaultValue={selectedYear}
        onValueChange={handleYearChange}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem
              value={year.toString()}
              key={year}
              defaultValue={selectedYear}
            >
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </InputForm>
  )
}
