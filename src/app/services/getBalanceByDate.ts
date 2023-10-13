import { API_URL } from '@/constants/const'
// import type { Movement } from '@/types'

export const getBalance = async ({ year, month }: { year: number, month?: number }) => {
  try {
    const response = await fetch(
      `${API_URL}/balance?user=44f14864-7fc9-4853-b94c-b83403a103e5&year=${year}${month === undefined || isNaN(month) ? '' : `&month=${month}`}`,
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
