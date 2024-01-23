'use server'

import { updateMovement } from '@/services/updateMovement'
import type { Movement, UpdateMovement } from '@/types'
import { revalidateTag } from 'next/cache'

export async function updateMovementAction(
  idMovement: Movement['idMovement'],
  newData: UpdateMovement
) {
  try {
    const response = await updateMovement(idMovement, newData)

    revalidateTag('Movements')
    const data = await response?.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
