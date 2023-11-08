// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogout, handleLogin } from '@auth0/nextjs-auth0'
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: 'https://cost-manager.com' // or AUTH0_AUDIENCE
      // Add the `offline_access` scope to also get a Refresh Token
      // scope: 'openid  profile email read:products' // or AUTH0_SCOPE
    }
  }),
  logout: handleLogout({ returnTo: process.env.AUTH0_BASE_URL })
})
