'use server'

import { deleteMovement } from '@/services/deleteMovement'
// import { registerMovement } from '@/services/registerMovement'
import type { Movement } from '@/types'
import { revalidateTag } from 'next/cache'

export default async function deleteMovementAction(idMovement: Movement['idMovement']) {
  try {
    const response = await deleteMovement(idMovement)

    revalidateTag('Movements')
    const data = await response?.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
