import { Fetch } from '@/lib/Fetch'

export const getCategoriesAmounts = async ({
  to,
  from
}: {
  to: `${string}/${string}/${string}`
  from: `${string}/${string}/${string}`
}) => {
  const END_POINT = `/categories/amount?initialDate=${to}&finalDate=${from}`

  try {
    const response = await Fetch({
      url: END_POINT
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
