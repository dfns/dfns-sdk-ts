import { GenerateSignatureBody } from '@dfns/sdk/types/Wallets'
import { NextRequest, NextResponse } from 'next/server'

import { delegatedClient } from '../../../clients'

export const POST = async (request: NextRequest) => {
  const { authToken, walletId, message } = await request.json()
  const client = delegatedClient(authToken)

  const body: GenerateSignatureBody = {
    kind: 'Message',
    message: Buffer.from(message, 'utf-8').toString('hex'),
  }
  const challenge = await client.wallets.generateSignatureInit({ walletId, body })

  console.debug(challenge)

  // The exact request body is needed to complete the signature action. You can
  // choose the approach to maintain the state. In the example, it is simply passed
  // back in the response, and included in the generateSignatureComplete request.
  return NextResponse.json({
    requestBody: body,
    challenge,
  })
}
