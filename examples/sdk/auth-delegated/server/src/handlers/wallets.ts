import { GenerateSignatureBody } from '@dfns/sdk/generated/wallets'
import { Request, Response } from 'express'

import { delegatedClient } from '../clients'

export const listWallets = async (req: Request, res: Response) => {
  const { appId, authToken } = req.body
  const client = delegatedClient(appId, authToken)

  const wallets = await client.wallets.listWallets({})
  res.json(wallets)
}

export const generateSignatureInit = async (req: Request, res: Response) => {
  // Challange signing must use the appId and appOrigin of the client application.
  const { appId, authToken, walletId, message } = req.body
  const client = delegatedClient(appId, authToken)

  const body: GenerateSignatureBody = {
    kind: 'Message',
    message: Buffer.from(message, 'utf-8').toString('hex'),
  }
  const challenge = await client.wallets.generateSignatureInit({ walletId, body })

  console.debug(challenge)

  // The exact request body is needed to complete the signature action. You can
  // choose the approach to maintain the state. In the example, it is simply passed
  // back in the response, and included in the generateSignatureComplete request.
  res.json({
    requestBody: body,
    challenge,
  })
}

export const generateSignatureComplete = async (req: Request, res: Response) => {
  const { appId, authToken, walletId, requestBody, signedChallenge } = req.body
  const client = delegatedClient(appId, authToken)

  // Use the original request body payload to complete the action.
  const signature = await client.wallets.generateSignatureComplete(
    {
      walletId,
      body: requestBody,
    },
    signedChallenge
  )

  console.debug(signature)

  res.json(signature)
}
