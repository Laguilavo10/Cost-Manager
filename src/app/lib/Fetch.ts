import { API_URL } from '@/constants/const'
import { type Session } from '@auth0/nextjs-auth0'

interface Props {
  url: string
  options?: RequestInit
  headers?: Pick<RequestInit, 'headers'>
}

export async function Fetch({ url = '', options = {} }: Props) {
  let session: Session | null | undefined
  try {
    if (typeof window === 'undefined') {
      const { getSession } = await import('@auth0/nextjs-auth0')
      session = await getSession()
    } else {
      const response = await fetch('/api/session')
      const data = await response.json()
      session = data.session
    }
  } catch (error) {
    console.error('Error fetching session', error);
  }

  const token = session?.idToken
  const headers = options?.headers ?? {} // get headers from options
  delete options?.headers // delete headers from options to avoid duplication

  return fetch(`${API_URL}${url}`, {
    method: options?.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...headers
    },
    ...options
  })
  // return response
}
