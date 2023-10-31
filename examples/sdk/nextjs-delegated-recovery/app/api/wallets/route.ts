import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'
import { NextRequest, NextResponse } from 'next/server'
import { getDfnsDelegatedClient } from '../utils'

export async function GET(request: NextRequest) {
  const endUserAuthToken = request.cookies.get(DFNS_END_USER_TOKEN_COOKIE)?.value

  if (!endUserAuthToken) {
    return NextResponse.json({ message: 'end user token not found' }, { status: 401 })
  }

  const dfnsDelegated = getDfnsDelegatedClient(endUserAuthToken)

  const result = await dfnsDelegated.wallets.listWallets({})
  return NextResponse.json({ wallets: result.items })
}
