import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge'

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next()
  const pathname = req.nextUrl.pathname
  const session = await getSession(req, response)
  const isAuth = session?.user

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
