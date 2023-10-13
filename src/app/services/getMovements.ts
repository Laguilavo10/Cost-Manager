import { API_URL } from '@/constants/const'

export const getMovements = async (limit: number) => {
  console.log(
    `${API_URL}/movement?user=44f14864-7fc9-4853-b94c-b83403a103e5${
      limit === undefined ? '' : `&limit=${limit}`
    }`
  )

  try {
    const response = await fetch(
      `${API_URL}/movement?user=44f14864-7fc9-4853-b94c-b83403a103e5${
        limit === undefined ? '' : `&limit=${limit}`
      }`,
      {
        method: 'GET',
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
