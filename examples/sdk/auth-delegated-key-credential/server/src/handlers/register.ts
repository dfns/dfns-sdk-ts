import { BaseAuthApi } from '@dfns/sdk'
import { Request, Response } from 'express'

import { apiClient } from '../clients'

export const registerInit = async (req: Request, res: Response) => {
  // You can perform the registration flow of your system before starting the
  // Dfns delegated registration.
  const { appId, username } = req.body

  // Registration must use the appId and appOrigin of the client application,
  // otherwise the challenge returned does not have the appropriate relying
  // party and origin to create the WebAuthn or Passkeys credential
  const client = apiClient(appId)
  const challenge = await client.auth.createDelegatedRegistrationChallenge({
    body: { kind: 'EndUser', email: username },
  })

  console.debug(challenge)

  res.json(challenge)
}

export const registerComplete = async (req: Request, res: Response) => {
  // Complete the registration with the appId of the client application and
  // the temporary auth token from the original challenge.
  const { appId, signedChallenge, temporaryAuthenticationToken } = req.body
  const registration = await BaseAuthApi.createUserRegistration(signedChallenge, {
    appId,
    baseUrl: process.env.DFNS_API_URL!,
    authToken: temporaryAuthenticationToken,
  })

  console.debug(registration)

  res.json(registration)
}
