import { Fetch } from '@/lib/Fetch'

export const getMovements = async (limit?: number) => {
  const END_POINT = `/movement?${
    limit === undefined ? '' : `limit=${limit}`
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
