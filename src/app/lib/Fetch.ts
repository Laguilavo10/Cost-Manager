import { API_URL } from '@/constants/const'
import { getSession } from '@auth0/nextjs-auth0'

interface Props {
  url: string
  options?: RequestInit
  headers?: Pick<RequestInit, 'headers'>
}

export async function Fetch({ url = '', options }: Props) {
  const session = await getSession()
  const token = session?.idToken;
  
  const headers = options?.headers ?? {} // get headers from options
  delete options?.headers // delete headers from options to avoid duplication
  
  return fetch(`${API_URL}${url}`, {
    method: options?.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      // ...headers
    },
    ...options
  })
  // return response 
}
