import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { BaseAuthApi } from '@dfns/sdk/baseAuthApi'
import { UserAuthKind } from '@dfns/sdk/codegen/datamodel/Auth'
import { IdentityKindCustomerFacing } from '@dfns/sdk/codegen/datamodel/Permissions'
import { DfnsDelegatedApiClient } from '@dfns/sdk/dfnsDelegatedApiClient'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { randomUUID } from 'crypto'
import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

dotenv.config()

const apiClient = () => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  return new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    accessToken: process.env.DFNS_ACCESS_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
}

const delegatedClient = (token: string) => {
  return new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APP_ID!,
    accessToken: token,
    baseUrl: process.env.DFNS_API_URL!,
  })
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.DFNS_ACCESS_TOKEN) {
    next()
  } else {
    res.status(401).json({
      error: 'not authenticated',
    })
  }
}

const app: Express = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('DFNS delegated auth example server')
})

app.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    // perform local system login before log into DFNS with delegated login

    const login = await apiClient().auth.createDelegatedUserLogin({
      body: { username: req.body.username },
    })

    // cache the DFNS auth token, example uses a client-side cookie, but can be
    // cached in other ways, such as session storage or database
    res
      .cookie('DFNS_ACCESS_TOKEN', login.token, { maxAge: 900000, httpOnly: true })
      .json({ username: req.body.username })
  })
)

app.post(
  '/register/init',
  asyncHandler(async (req: Request, res: Response) => {
    // perform local system registration before initiating DFNS registration

    const challenge = await apiClient().auth.createDelegatedUserRegistration({
      body: { kind: UserAuthKind.EndUser, email: req.body.username },
    })
    res.json(challenge)
  })
)

app.post(
  '/register/complete',
  asyncHandler(async (req: Request, res: Response) => {
    const registration = await BaseAuthApi.createUserRegistration(req.body.signedChallenge, {
      appId: process.env.DFNS_APP_ID!,
      baseUrl: process.env.DFNS_API_URL!,
      accessToken: req.body.temporaryAuthenticationToken,
    })

    const client = apiClient()

    const permission = await client.permissions.createPermission({
      body: {
        name: `wallets permissions for ${registration.user.id}`,
        operations: ['Wallets:Create', 'Wallets:Read'],
      },
    })

    await client.permissions.createPermissionAssignment({
      body: {
        permissionId: permission.id,
        identityKind: IdentityKindCustomerFacing.EndUser,
        identityId: registration.user.id,
      },
    })

    res.json({ username: registration.user.username })
  })
)

app.use(auth)

app.get(
  '/wallets/list',
  asyncHandler(async (req: Request, res: Response) => {
    const wallets = await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.listWallets({})
    res.json(wallets)
  })
)

app.post(
  '/wallets/new/init',
  asyncHandler(async (req: Request, res: Response) => {
    // transform user inputs to a DFNS request body before initiating action signing flow
    const body = {
      network: req.body.network,
      externalId: randomUUID(),
    }

    const challenge = await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.createWalletInit({ body })

    // the exact request body is needed to complete the action, to maintain the state, it's
    // round tripped to the client and back in the next request.
    res.json({
      requestBody: body,
      challenge,
    })
  })
)

app.post(
  '/wallets/new/complete',
  asyncHandler(async (req: Request, res: Response) => {
    // use the original request body and the signed challenge to complete the action
    const { requestBody, signedChallenge } = req.body
    await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.createWalletComplete(
      { body: requestBody },
      signedChallenge
    )

    // perform any local system updates with the DFNS response

    res.status(204).end()
  })
)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
