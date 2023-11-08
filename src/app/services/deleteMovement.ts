import { Fetch } from '@/lib/Fetch'
import type { Movement } from '@/types.d'

export const deleteMovement = async (idMovement: Movement['idMovement']) => {
  try {
    const END_POINT = `/movement/${idMovement}`
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
