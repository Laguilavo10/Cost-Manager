import { Fetch } from '@/lib/Fetch'
import type { Movement } from '@/types'

export const getMovementById = async (idMovement: Movement['idMovement']) => {
  const END_POINT = `/movement/${idMovement}?user=44f14864-7fc9-4853-b94c-b83403a103e5`
  console.log('uwu')

  try {
    const response = await Fetch({ url: END_POINT })
    return response
  } catch (error) {
    console.log(error)
  }
}
