export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE ?? ''
export const AUTH0_BASE_URL = process.env.AUTH0_BASE_URL ?? ''
export const AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL ?? ''
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID ?? ''
export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET ?? ''

export const CATEGORYS = [
  { id: 2, value: 'Food' },
  { id: 3, value: 'Housing' },
  { id: 4, value: 'Transportation' },
  { id: 5, value: 'Entertainment' },
  { id: 6, value: 'Health' },
  { id: 7, value: 'Education' },
  { id: 8, value: 'Clothing' },
  { id: 1, value: 'Others' }
]

export const METHOD = [
  { id: 2, value: 'Cash' },
  { id: 3, value: 'Credit Card' },
  { id: 4, value: 'Nequi' },
  { id: 5, value: 'DaviPlata' },
  { id: 1, value: 'Other' }
]
