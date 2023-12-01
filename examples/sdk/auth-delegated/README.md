# Delegated registration and login

Same as the [NextJS example](../nextjs-delegated/), this example demonstrates how to build a complete client/server solution integrating with Dfns API on the server side and WebAuthn for client authentication. This approach is for clients who want to use their own authentication system, and wants to delegate custody of wallet assets to their users.

This implementation uses [Express](https://expressjs.com/en/4x/api.html) for the API server and [ReactJS](https://create-react-app.dev/) for the SPA client.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

* Name, choose any name
* Type of User, `Client Side`
* Relying Party = `localhost`
* Origin = `http://localhost:3000`

__note__ _the `Origin` must match the host of the client-side SPA, in this example it's `http://localhost:3000`. That will be the origin of the WebAuthn credential created during the registration slow later. Don't register the new `Application` with the server-side port (8000) of the Express app._

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

* Name, choose any name
* Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

### Server Configuration

In the `server/` folder, copy `.env.example` to a new file `.env` and set the following values,

* `DFNS_API_URL` = `https://api.dfns.ninja`
* `DFNS_APP_ID` = the `App ID` from above
* `DFNS_APP_ORIGIN` = `http://localhost:3000`
* `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
* `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
* `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
* `EXPRESS_PORT` = 8000

### Client Configuration

In the `client/` folder, verify that `.env.local` has the following values,

* `REACT_APP_API_URL` = http://localhost:8000
* `REACT_APP_DFNS_WEBAUTHN_RPID` = 'localhost'

## Explanation

### Delegated Registration

On new user registration, first register the user in your own authentication system. As the last step, use [Delegated Registration](https://docs.dfns.co/dfns-docs/api-docs/authentication/delegated-auth/delegatedregistration) to register the user in Dfns using `AsymmetricKeySigner` and `DfnsApiClient` with a `Service Account`.

```typescript
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const apiClient = () => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  return new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
}
```

The delegated registration is a two step process, first initialize the registration flow by invoking `createDelegatedUserRegistration` with `UserAuthKind.EndUser`.

```typescript
app.post(
  '/register/init',
  asyncHandler(async (req: Request, res: Response) => {
    // perform local system registration before initiating Dfns registration

    const challenge = await apiClient().auth.createDelegatedUserRegistration({
      body: { kind: UserAuthKind.EndUser, email: req.body.username },
    })
    res.json(challenge)
  })
)
```

A registration challenge is created along with a temporary `authToken`. They must be returned to the client-side SPA. Create a new WebAuthn credential for the end user and sign this challenge. Then invoke the second part of the registration flow with the signed challenge and the temporary `authToken`.

```typescript
import { WebAuthn } from '@dfns/sdk-webauthn'

async register(username: string, password: string): Promise<{ username: string }> {
  const challenge = await post('/register/init', { username, password })

  const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  const attestation = await webauthn.create(challenge)

  return post('/register/complete', {
    signedChallenge: { firstFactorCredential: attestation },
    temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
  })
},
```

The second part of the registration flow completes the process by passing the signed challenge to Dfns.

```typescript
app.post(
  '/register/complete',
  asyncHandler(async (req: Request, res: Response) => {
    const registration = await BaseAuthApi.createUserRegistration(req.body.signedChallenge, {
      appId: process.env.DFNS_APP_ID!,
      baseUrl: process.env.DFNS_API_URL!,
      authToken: req.body.temporaryAuthenticationToken,
    })

    res.json({ username: registration.user.username })
  })
)
```

## Delegated Login

You can login the user to Dfns without their credential through [Delegated Login](https://docs.dfns.co/dfns-docs/api-docs/authentication/delegated-auth/delegatedlogin) using `AsymmetricKeySigner` and `DfnsApiClient` with a `Service Account`.

```typescript
app.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    // perform local system login before log into Dfns with delegated login

    const login = await apiClient().auth.createDelegatedUserLogin({
      body: { username: req.body.username },
    })

    // cache the Dfns auth token, example uses a client-side cookie, but can be
    // cached in other ways, such as session storage or database
    res.cookie('DFNS_AUTH_TOKEN', login.token, { maxAge: 900000, httpOnly: true }).json({ username: req.body.username })
  })
)
```

When the login completes, a __readonly__ `authToken` is returned. In the example, the token is persisted in a cookie for the duration of logged in session. But you can use other mechanisms to store the token, such as a database.

## User Action Signing

For actions require signing, the server-side uses the `DfnsDelegatedApiClient`. You do not need a server-side signer in this pattern because the signing will happen on the client-side.

```typescript
import { DfnsDelegatedApiClient } from '@dfns/sdk'

const delegatedClient = (authToken: string) => {
  return new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken,
    baseUrl: process.env.DFNS_API_URL!,
  })
}
```

Similar to the registration flow, user action signing is split into a initialization step and a complete step. The init returns a challenge that has to be signed by the end user on the client-side, and the signed challenge is passed onto Dfns to complete the user action.

```typescript
app.post(
  '/wallets/new/init',
  asyncHandler(async (req: Request, res: Response) => {
    // transform user inputs to a Dfns request body before initiating action signing flow
    const body = {
      network: req.body.network,
      externalId: randomUUID(),
    }

    const challenge = await delegatedClient(req.cookies.DFNS_AUTH_TOKEN).wallets.createWalletInit({ body })

    // the exact request body is needed to complete the action, to maintain the state, it's
    // round tripped to the client and back in the next request.
    res.json({
      requestBody: body,
      challenge,
    })
  })
)
```

```typescript
app.post(
  '/wallets/new/complete',
  asyncHandler(async (req: Request, res: Response) => {
    // use the original request body and the signed challenge to complete the action
    const { requestBody, signedChallenge } = req.body
    await delegatedClient(req.cookies.DFNS_AUTH_TOKEN).wallets.createWalletComplete(
      { body: requestBody },
      signedChallenge
    )

    // perform any local system updates with the Dfns response

    res.status(204).end()
  })
)
```

To tie everything together, the end user must sign the challenge with the WebAuthn credential.

```typescript
import { WebAuthn } from '@dfns/sdk-webauthn'

async createWallet(network: string) {
  const {
    requestBody,
    challenge: { challenge, challengeIdentifier, allowCredentials },
  } = await post('/wallets/new/init', { network })

  const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  const assertion = await webauthn.sign(challenge, allowCredentials)

  await post('/wallets/new/complete', {
    requestBody,
    signedChallenge: { challengeIdentifier, firstFactor: assertion },
  })
}
```
