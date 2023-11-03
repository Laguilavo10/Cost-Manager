'use client'
import type { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const queryClient = new QueryClient()

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </UserProvider>
  )
}
