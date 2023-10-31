import { API_URL, API_KEY } from '@/constants/const'
// import type { Movement } from '@/types'

export const getBalance = async ({
  year,
  month
}: {
  year: number
  month?: number
}) => {
  try {
    const END_POINT = `${API_URL}/balance?apikey=${API_KEY}&user=44f14864-7fc9-4853-b94c-b83403a103e5&year=${year}${
      month === undefined || isNaN(month) ? '' : `&month=${month}`
    }`
    // console.log(END_POINT)

    const response = await fetch(END_POINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: {
        tags: ['Movements']
      }
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
