'use server'

import { registerMovement } from '@/services/registerMovement'
import type { MethodPayment, TypeMovement } from '@/types'
import { revalidateTag } from 'next/cache'

export default async function postMovementAction({
  date,
  typeMovement,
  description,
  amount,
  methodPayment
}: {
  date?: Date
  typeMovement: TypeMovement
  description: string
  amount: number
  methodPayment: MethodPayment
}) {
  try {
    const response = await registerMovement({
      date,
      amount,
      typeMovement,
      methodPayment,
      description
    })

    revalidateTag('Movements')
    const data = await response?.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
