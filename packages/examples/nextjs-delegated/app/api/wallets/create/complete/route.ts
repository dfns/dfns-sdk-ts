import { CreateWalletRequest } from '@dfns/sdk/codegen/Wallets'
import { NextRequest, NextResponse } from 'next/server'
import { SignUserActionChallengeRequest, UserActionChallengeResponse } from '@dfns/sdk/baseAuthApi'
import { getDfnsDelegatedClient } from '@/app/api/utils'
import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    request: CreateWalletRequest
    challenge: UserActionChallengeResponse
    signedChallenge: SignUserActionChallengeRequest
  }

  const endUserAuthToken = request.cookies.get(DFNS_END_USER_TOKEN_COOKIE)?.value

  if (!endUserAuthToken) {
    return NextResponse.json({ message: 'end user token not found' }, { status: 401 })
  }

  const dfnsDelegated = getDfnsDelegatedClient(endUserAuthToken)

  const wallet = await dfnsDelegated.wallets.createWalletComplete(body.request, body.signedChallenge)

  return NextResponse.json({ wallet })
}
