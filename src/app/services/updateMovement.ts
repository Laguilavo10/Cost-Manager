import { Fetch } from '@/lib/Fetch'
import type { Movement, UpdateMovement } from '@/types'

export const updateMovement = async (
  idMovement: Movement['idMovement'],
  newData: UpdateMovement
) => {
  const END_POINT = `/movement/update/${idMovement}`
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
          methodPaymentId: newData.methodPaymentId,
          categoryId: newData.categoryId
        })
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
