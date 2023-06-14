import { CreateWalletRequest } from '@dfns/sdk/codegen/Wallets'
import { NextRequest, NextResponse } from 'next/server'
import { BlockchainNetwork } from '@dfns/sdk/codegen/datamodel/Foundations'
import { getDfnsDelegatedClient } from '@/app/api/utils'
import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'

export async function POST(request: NextRequest) {
  const endUserAuthToken = request.cookies.get(DFNS_END_USER_TOKEN_COOKIE)?.value

  if (!endUserAuthToken) {
    return NextResponse.json({ message: 'end user token not found' }, { status: 401 })
  }

  const dfnsDelegated = getDfnsDelegatedClient(endUserAuthToken)

  const createWalletRequest: CreateWalletRequest = {
    body: { network: BlockchainNetwork.ETH_GOERLI },
  }

  const challenge = await dfnsDelegated.wallets.createWalletInit(createWalletRequest)

  return NextResponse.json({ request: createWalletRequest, challenge })
}
