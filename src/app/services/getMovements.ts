import { Fetch } from '@/lib/Fetch'

export const getMovements = async (limit?: number) => {
  const END_POINT = `/movement?&user=44f14864-7fc9-4853-b94c-b83403a103e5${
    limit === undefined ? '' : `&limit=${limit}`
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
