# SPA interacting with Dfns API

This example demonstrates a SPA interacting directly with the Dfns API through the Typescript SDK. This approach is for clients who want to delegate custody of wallet assets to their users, but don't want to host a middleware server.

**NOTE** _This example is still work in progress. It doesn't have a working new user registration flow._

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

* Name, choose any name
* Type of User, `Client Side`
* Relying Party = `localhost`
* Origin = `http://localhost:3000`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

Copy `.env.example` to a new file `.env.local` and set the following values,

* `REACT_APP_DFNS_API_URL` = `https://api.dfns.ninja`
* `REACT_APP_DFNS_APP_ID` = the `App ID` from above
* `REACT_APP_DFNS_WEBAUTHN_RPID` = `localhost`
* `REACT_APP_DFNS_ORG_ID` = your organization ID

_you can find the organization ID under `Dfns Dashboard` > `Settings` > `My Account`, e.g. `or-0pgv1-bcu3v-87p9t621pbodjb8o`_

## Explanation

### Authentication

`useAuth` hook handles the authentication using an instance of `DfnsAuthenticator` with a `WebAuthn` signer.

```typescript
import { WebAuthn } from '@dfns/sdk-webauthn'
import { DfnsAuthenticator } from '@dfns/sdk/dfnsAuthenticator'

export const authApi = (): DfnsAuthenticator => {
  const signer = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  return new DfnsAuthenticator({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}
```

`login` with a username and the `Org ID` from the configuration. You will be prompted to sign the action with your WebAuthn credential associated with the username. After successful login, an `authToken` is returned and saved in the browser's local storage.

```typescript
authApi()
  .login({
    username,
    orgId,
  })
  .then(({ token }) => {
    localStorage.setItem('DFNS_AUTH_TOKEN', token)
    setUser(extractUser(token))
    navigate('/')
  })
  .catch((err) => setError(err))
  .finally(() => setLoading(false))
```

### User Action Signing

To sign user actions, use a `DfnsApiClient` with a `WebAuthn` signer and the `authToken` obtained from the login.

```typescript
import { WebAuthn } from '@dfns/sdk-webauthn'
import { DfnsApiClient } from '@dfns/sdk'

export const dfnsApi = (): DfnsApiClient => {
  const signer = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  return new DfnsApiClient({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    authToken: localStorage.getItem('DFNS_AUTH_TOKEN') ?? undefined,
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}
```

Use the `DfnsApiClient` to create a new wallet, and you will be prompted to sign the action with your WebAuthn credential.

```typescript
const handleCreate = (event: FormEvent<HTMLFormElement>) => {
  ...

  dfnsApi()
    .wallets.createWallet({ body: { network: formData.get('network') as BlockchainNetwork } })
    .then(() => navigate('/'))
    .catch((err) => {
      setError(err)
      setSubmitting(false)
    })
  }
```
