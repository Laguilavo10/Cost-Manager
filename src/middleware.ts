// import 'server-only'
import { type NextRequest, NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge'
// import { getAccessToken } from '@auth0/nextjs-auth0'

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next()
  const pathname = req.nextUrl.pathname
  // const accessToken = await getAccessToken()
  const session = await getSession(req, response)
  const isAuth = session?.user
  // console.log(session)
  console.log(session)

  // console.log(accessToken)
  // console.log(isAuth)
  if (pathname === '/' && isAuth !== undefined) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
  if (isAuth === undefined && pathname === '/') {
    return NextResponse.next()
  }
  if (isAuth === undefined) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/dashboard', '/movements/:path*']
}
