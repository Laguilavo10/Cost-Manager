import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// idk why but this is working
export default withAuth(
   (req) => {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname
    
    
    if(token === null && pathname === '/'){
      return NextResponse.next()
    }

    if(token !== null && pathname.includes('/auth/signin')){
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard`)
    }

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

