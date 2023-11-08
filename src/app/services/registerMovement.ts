import { Fetch } from '@/lib/Fetch'
import type { TypeMovement, MethodPayment } from '@/types'
export const registerMovement = async ({
  date,
  typeMovement,
  description,
  amount,
  methodPayment
}: {
  date?: Date
  typeMovement: TypeMovement
  description: string
  amount: number
  methodPayment: MethodPayment
}) => {
  try {
    const END_POINT = '/movement'
    const response = await Fetch({
      url: END_POINT,
      options: {
        method: 'POST',
        body: JSON.stringify({
          date,
          typeMovement,
          description,
          amount,
          methodPayment
        })
      }
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
