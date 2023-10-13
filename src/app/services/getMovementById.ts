import { API_URL } from '@/constants/const'
import type { Movement } from '@/types'

export const getMovementById = async (idMovement: Movement['idMovement']) => {
  console.log('hola')

  try {
    const response = await fetch(
      `${API_URL}/movement/${idMovement}?user=44f14864-7fc9-4853-b94c-b83403a103e5`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response
  } catch (error) {
    console.log(error)
  }
}
