import { API_KEY, API_URL } from '@/constants/const'
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
    const END_POINT = `${API_URL}/movement?apikey=${API_KEY}&user=44f14864-7fc9-4853-b94c-b83403a103e5`
    console.log(END_POINT)

    const response = await fetch(END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date,
        typeMovement,
        description,
        amount,
        methodPayment
      })
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
