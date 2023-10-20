'use server'

import { updateMovement, type UpdateMovement } from '@/services/updateMovement'
// import { registerMovement } from '@/services/registerMovement'
import type { Movement } from '@/types'
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
