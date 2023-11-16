// import 'server-only'
import { type NextRequest, NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge'
import { validateTokenExpirationDate } from '@/lib/validateTokenExpirationDate'
// import { getAccessToken } from '@auth0/nextjs-auth0'

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next()
  const pathname = req.nextUrl.pathname
  const session = await getSession(req, response)
  const isAuth = validateTokenExpirationDate(session?.accessTokenExpiresAt)

  if (pathname === '/' && isAuth) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
  if (!isAuth && pathname === '/') {
    return NextResponse.next()
  }
  if (!isAuth) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/dashboard', '/movements/:path*']
}
