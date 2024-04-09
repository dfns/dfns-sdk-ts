import { NextRequest, NextResponse } from 'next/server'

import { delegatedClient } from '../../../clients'

export const POST = async (request: NextRequest) => {
  const { authToken, walletId, requestBody, signedChallenge } = await request.json()
  const client = delegatedClient(authToken)

  // Use the original request body payload to complete the action.
  const signature = await client.wallets.generateSignatureComplete(
    {
      walletId,
      body: requestBody,
    },
    signedChallenge
  )

  console.debug(signature)

  return NextResponse.json(signature)
}
