import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

export const GET = withApiAuthRequired(async function GET(req) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  return NextResponse.json({ session })
})
