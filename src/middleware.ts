import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// idk why but this is working
export default withAuth(
   (req) => {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname
    
    if (pathname === '/auth/signin' && token) {
      // Si el usuario está autenticado y trata de acceder a /auth/signin, redirígelo a /dashboard.
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard`)
    }

    if (!token && pathname === '/') {
      // Si el usuario no está autenticado y no está en /auth/signin, redirígelo a /auth/signin.
      return NextResponse.next()
    }
    if (!token && pathname !== '/auth/signin') {
      // Si el usuario no está autenticado y no está en /auth/signin, redirígelo a /auth/signin.
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth/signin`)
    }

    // En otros casos, permite el acceso.
    return NextResponse.next()

  },
  {
    callbacks:{
      authorized({token, req}) {
        if(token !== null && req.nextUrl.pathname === '/'){
          return false
        }
        return true
      },
    }
  }
)

export const config = { matcher: ['/','/dashboard', '/movements/:path*', '/auth/signin'] }

