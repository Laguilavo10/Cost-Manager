// app/api/auth/[auth0]/route.js
import { AUTH0_AUDIENCE, AUTH0_BASE_URL } from '@/constants/const'
import { handleAuth, handleLogout, handleLogin } from '@auth0/nextjs-auth0'
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: AUTH0_AUDIENCE, // or AUTH0_AUDIENCE
      // Add the `offline_access` scope to also get a Refresh Token
      scope: 'openid profile email offline_access', // or AUTH0_SCOPE
      max_age: 60 * 60 * 24 * 7 // 1 week|
    }
  }),
  logout: handleLogout({ returnTo: AUTH0_BASE_URL })
})
