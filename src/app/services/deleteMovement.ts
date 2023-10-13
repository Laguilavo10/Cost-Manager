import { API_URL } from '@/constants/const'
import type { Movement } from '@/types.d'

export const deleteMovement = async (idMovement: Movement['idMovement']) => {
  try {
    const response = await fetch(
      `${API_URL}/movement/${idMovement}?user=44f14864-7fc9-4853-b94c-b83403a103e5`,
      {
        method: 'DELETE',
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
