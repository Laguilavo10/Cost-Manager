'use server'

import { registerMovement } from '@/services/registerMovement'
import type { NewMovement } from '@/types'
import { revalidateTag } from 'next/cache'

export default async function postMovementAction({
  date,
  typeMovement,
  description,
  amount,
  methodPayment,
  category
}: NewMovement) {
  try {
    const response = await registerMovement({
      date,
      amount,
      typeMovement,
      methodPayment,
      description,
      category
    })

    revalidateTag('Movements')
    const data = await response?.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
