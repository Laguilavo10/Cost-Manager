import { Fetch } from '@/lib/Fetch'
import type { NewMovement } from '@/types'

export const registerMovement = async ({
  date,
  typeMovement,
  description,
  amount,
  methodPayment,
  category
}: NewMovement) => {
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
          methodPayment,
          category
        })
      }
    })
    console.log()
    return response
  } catch (error) {
    console.log(error)
  }
}
