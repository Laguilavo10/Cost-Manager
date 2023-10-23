import { API_KEY, API_URL } from '@/constants/const'

export const getMovements = async (limit?: number) => {
  const END_POINT = `${API_URL}/movement?apikey=${API_KEY}&user=44f14864-7fc9-4853-b94c-b83403a103e5${
    limit === undefined ? '' : `&limit=${limit}`
  }`

  try {
    const response = await fetch(END_POINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        tags: ['Movements']
      }
    })

    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}
