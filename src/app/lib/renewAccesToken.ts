import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER_BASE_URL
} from '@/constants/const'

export async function renewAccessToken(refreshToken: string) {
  const response = await fetch(`${AUTH0_ISSUER_BASE_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      refresh_token: refreshToken
    })
  })
  const data = await response.json()

  if (data.access_token !== undefined) {
    // El nuevo token de acceso
    const newAccessToken = data.access_token
    // Usa el nuevo token de acceso para realizar las acciones necesarias
    // Por ejemplo, aquí podrías devolver el nuevo token o manejarlo de otra manera
    return newAccessToken
  } else {
    throw new Error('No se pudo obtener un nuevo token de acceso')
  }
}
