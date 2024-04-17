import { NextRequest, NextResponse } from 'next/server'

import { apiClient } from '../../clients'

export const POST = async (req: NextRequest) => {
  // Complete the registration with the appId of the client application and
  // the temporary auth token from the original challenge.
  const { signedChallenge, temporaryAuthenticationToken } = await req.json()
  const client = apiClient(temporaryAuthenticationToken)
  const registration = await client.auth.registerEndUser({
    body: {
      ...signedChallenge,
      wallets: [{ network: 'EthereumSepolia' }],
    },
  })

  console.debug(registration)

  return NextResponse.json(registration)
}
