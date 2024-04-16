import { Request, Response } from 'express'

import { apiClient, delegatedClient } from '../clients'
import { CreateCredentialBody } from '@dfns/sdk/generated/auth'

export const createCredentialChallenge = async (req: Request, res: Response) => {
  const { appId, authToken, kind } = req.body

  const client = apiClient(appId, authToken)
  const challenge = await client.auth.createCredentialChallenge({
    body: { kind },
  })

  console.debug(challenge)

  res.json(challenge)
}

export const createCredentialInit = async (req: Request, res: Response) => {
  const { appId, authToken, credentialName, attestation } = req.body
  const client = delegatedClient(appId, authToken)

  const body: CreateCredentialBody = {
    credentialName,
    ...attestation,
  }

  const challenge = await client.auth.createCredentialInit({
    body,
  })

  console.debug(challenge)

  // The exact request body is needed to complete the signature action. You can
  // choose the approach to maintain the state. In the example, it is simply passed
  // back in the response, and included in the createCredentialComplete request.
  res.json({
    requestBody: body,
    challenge,
  })
}

export const createCredentialComplete = async (req: Request, res: Response) => {
  const { appId, authToken, requestBody, signedChallenge } = req.body
  const client = delegatedClient(appId, authToken)

  // Use the original request body payload to complete the action.
  const credential = await client.auth.createCredentialComplete(
    {
      body: requestBody,
    },
    signedChallenge
  )

  console.debug(credential)

  res.json(credential)
}
