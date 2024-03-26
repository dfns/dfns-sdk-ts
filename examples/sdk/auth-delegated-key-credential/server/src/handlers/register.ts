import { BaseAuthApi } from '@dfns/sdk'
import { UserAuthKind } from '@dfns/sdk/codegen/datamodel/Auth'
import { Request, Response } from 'express'

import { apiClient } from '../clients'

export const registerInit = async (req: Request, res: Response) => {
  // You can perform the registration flow of your system before starting the
  // Dfns delegated registration.

  const { appId, appOrigin, username } = req.body

  // Registration must use the appId and appOrigin of the client application,
  // otherwise the challenge returned does not have the appropriate relying
  // party and origin to create the WebAuthn or Passkeys credential
  const client = apiClient(appId, appOrigin)
  const challenge = await client.auth.createDelegatedUserRegistration({
    body: { kind: UserAuthKind.EndUser, email: username },
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

  // For this example, we will also create the necessary full permission for
  // the newly registered end user. The permission can be created with the appId
  // and the appOrigin of the server.
  const client = apiClient(process.env.DFNS_APP_ID!, process.env.DFNS_APP_ORIGIN!)
  const permission = await client.permissions.createPermission({
    body: {
      name: `${registration.user.id}:wallets:*`,
      operations: [
        'Wallets:Create',
        'Wallets:Read',
        'Wallets:GenerateSignature',
        'Wallets:ReadSignature',
        'Wallets:BroadcastTransaction',
        'Wallets:ReadTransaction',
        'Wallets:TransferAsset',
        'Wallets:ReadTransfer',
      ],
    },
  })

  await client.permissions.createAssignment({
    permissionId: permission.id,
    body: {
      identityId: registration.user.id,
    },
  })

  console.debug(registration)

  res.json(registration)
}
