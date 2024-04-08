import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'
import { NextRequest, NextResponse } from 'next/server'
import { dfns } from '../utils'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { email: string }

  const { token: userAuthToken } = await dfns.auth.delegatedLogin({ body: { username: body.email } })

  const response = NextResponse.json({ ok: true })

  // Here we chose to cache the end-user Dfns auth token in a cookie. You could choose to cache it in a store, or not cache it at all. If not cached though, you'll need to perform delegated login every time you want to do a Dfns action on behalf of your end-user.
  response.cookies.set(DFNS_END_USER_TOKEN_COOKIE, userAuthToken)

  return response
}
