import { Fetch } from '@/lib/Fetch'

export const getBalance = async ({
  year,
  month
}: {
  year: number
  month?: number
}) => {
  const END_POINT = `/balance?year=${year}${
    month === undefined || isNaN(month) ? '' : `&month=${month}`
  }`

  try {
    const response = await Fetch({
      url: END_POINT,
      options: {
        next: {
          tags: ['Movements']
        }
      }
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
