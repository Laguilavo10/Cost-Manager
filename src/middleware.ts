// import 'server-only'
import { type NextRequest, NextResponse } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge'
import { validateTokenExpirationDate } from '@/lib/validateTokenExpirationDate'

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next()
  const pathname = req.nextUrl.pathname
  const session = await getSession(req, response)
  console.log(session)
  const isValidAccesToken = validateTokenExpirationDate(
    session?.accessTokenExpiresAt
  )
  // console.log(isValidAccesToken)

  // const expirationTime = new Date(
  //   Number(session?.accessTokenExpiresAt) * 1000
  // ).getTime()
  // const currentTime = new Date().getTime()
  // const timeToRefresh = 24 * 60 * 60 * 1000
  // const timeToCompare = expirationTime - timeToRefresh

  // if (currentTime >= timeToCompare) {
  //   renewAccessToken(session?.refreshToken ?? '')
  //     .then((newToken) => {
  //       console.log('Nuevo token de acceso:', newToken)
  //     })
  //     .catch((error) => {
  //       console.error('Error al renovar el token de acceso:', error.message)
  //     })
  // }
  if (pathname === '/' && isValidAccesToken) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
  if (!isValidAccesToken && pathname === '/') {
    return NextResponse.next()
  }
  if (!isValidAccesToken) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/dashboard', '/movements/:path*']
}
