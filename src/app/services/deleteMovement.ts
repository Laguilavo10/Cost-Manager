import { API_KEY, API_URL } from '@/constants/const'
import { Fetch } from '@/lib/Fetch'
import type { Movement } from '@/types.d'

export const deleteMovement = async (idMovement: Movement['idMovement']) => {
  try {
    const END_POINT = `/movement/${idMovement}?user=44f14864-7fc9-4853-b94c-b83403a103e5`
    const response = await Fetch({
      url: END_POINT,
      options: {
        method: 'DELETE'
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
