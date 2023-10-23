import { API_KEY, API_URL } from '@/constants/const'
import type { Movement } from '@/types'

export interface UpdateMovement
  extends Omit<Movement, 'idMovement' | 'userId'> {}
export const updateMovement = async (
  idMovement: Movement['idMovement'],
  newData: UpdateMovement
) => {
  console.log(newData)
  try {
    const response = await fetch(
      `${API_URL}/movement/update/${idMovement}?apikey=${API_KEY}&user=44f14864-7fc9-4853-b94c-b83403a103e5`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          createdAt: newData.createdAt,
          typeId: newData.typeId,
          description: newData.description,
          value: newData.value,
          methodPaymentId: newData.methodPaymentId
        })
      }
    )
    return response
  } catch (error) {
    console.log(error)
  }
}
