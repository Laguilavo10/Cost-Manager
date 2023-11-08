import { Fetch } from '@/lib/Fetch'

export const getMovementByDate = async ({
  to,
  from
}: {
  // date format "MM/DD/YYYY"
  to: `${string}/${string}/${string}`
  from: `${string}/${string}/${string}`
}) => {
  try {
    const END_POINT = `/movement/date?initialDate=${to}&finalDate=${from}`
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
