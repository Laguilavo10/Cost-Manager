import { Fetch } from '@/lib/Fetch'
import type { Movement } from '@/types'

export interface UpdateMovement
  extends Omit<Movement, 'idMovement' | 'userId'> {}
export const updateMovement = async (
  idMovement: Movement['idMovement'],
  newData: UpdateMovement
) => {
  const END_POINT = `/movement/update/${idMovement}?user=44f14864-7fc9-4853-b94c-b83403a103e5`
  try {
    const response = await Fetch({
      url: END_POINT,
      options: {
        method: 'PUT',
        body: JSON.stringify({
          createdAt: newData.createdAt,
          typeId: newData.typeId,
          description: newData.description,
          value: newData.value,
          methodPaymentId: newData.methodPaymentId
        })
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
