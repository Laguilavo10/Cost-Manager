import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function CardSkeleton() {
  return (
    <Card className='w-full flex flex-col'>
      <CardHeader>
        <Skeleton className='w-2/5' />
      </CardHeader>
      <CardContent>
        <Skeleton className='h-10' />
      </CardContent>
    </Card>
  )
}
