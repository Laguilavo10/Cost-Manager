import { API_KEY, API_URL } from '@/constants/const'

export const getMovementByDate = async ({
  to,
  from
}: {
  // date format "MM/DD/YYYY"
  to: `${string}/${string}/${string}`
  from: `${string}/${string}/${string}`
}) => {
  try {
    const response = await fetch(
      `${API_URL}/movement/date?apikey=${API_KEY}&user=44f14864-7fc9-4853-b94c-b83403a103e5&initialDate=${to}&finalDate=${from}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        next: {
          tags: ['Movements']
        }
      }
    )
    return response
  } catch (error) {
    console.log(error)
  }
}
