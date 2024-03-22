import { CreateWalletBody } from '@dfns/sdk/generated/wallets'
import { Request, Response } from 'express'

import { delegatedClient } from '../clients'

export const listWallets = async (req: Request, res: Response) => {
  const { appId, authToken } = req.body
  const client = delegatedClient(appId, authToken)

  const wallets = await client.wallets.listWallets({})
  res.json(wallets)
}

export const createWalletInit = async (req: Request, res: Response) => {
  // Challange signing must use the appId and appOrigin of the client application.
  const { appId, authToken, network } = req.body
  const body: CreateWalletBody = {
    network: network ?? 'EthereumSepolia',
  }
  const client = delegatedClient(appId, authToken)

  const challenge = await client.wallets.createWalletInit({
    body,
  })

  // The exact request body is needed to complete the create wallet action. You can
  // choose the approach to maintain the state. In the example, it is simply passed
  // back in the response, and included in the createWalletComplete call.
  res.json({
    requestBody: body,
    challenge,
  })
}

export const createWalletComplete = async (req: Request, res: Response) => {
  const { appId, authToken, requestBody, signedChallenge } = req.body
  const client = delegatedClient(appId, authToken)

  // Use the original request body payload to complete the action.
  const wallet = await client.wallets.createWalletComplete({ body: requestBody }, signedChallenge)

  res.json(wallet)
}
