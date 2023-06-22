# Dfns typescript SDK

> ⚠️ **This SDK is in alpha**. It may be unstable and have breaking evolutions.

Welcome, builders 👋

This repo holds the Typescript SDK for [Dfns API](https://www.dfns.co/). Useful links:

* [Dfns Website](https://www.dfns.co/)
* [Dfns API Docs](https://dfns.gitbook.io/dfns-docs/)


## Examples

For examples containing code + some docs, check-out these:

* [Service account](./packages/examples/service-account/)
* [Delegated registration and login with NextJS](./packages/examples/nextjs-delegated/)
* [Delegated registration and login with ReactJS + Express](./packages/examples/auth-delegated/)


## Concepts

### `CredentialSigner`
All state-changing requests made to Dfns API need to be cryptographically signed by some Credentials registered with the User / Service Account.

> **Note** 
> To be more precise, it's not the request itself which needs to be signed, but actually it's the "User Action Challenge" issued by Dfns which needs to be signed. This signature as a cryptographic proof that you are making the request. So as a shortcut, you can see this as "signing the request"

Credentials can be one of two kinds (*check our docs [Credential section](https://docs.dfns.co/dfns-docs/getting-started/authentication-authorization#credentials) for more details*):
- WebauthN Credentials
- Key credentials

For those, the two helper classes below exist. Their responsibility is to handle the signing mentionned above:

- `WebauthN`
  - Exposed in `@dfns/sdk-webauthn` package
  - Implements `CredentialSigner`
  - Needs to be used client-side (on a browser, in a web-app)

```ts
import { WebAuthn } from '@dfns/sdk-webauthn'

const webauthnSigner = new WebAuthn({
  rpId: 'app.mycompany.com' // WebauthN "Relying Party". It's the domain where your client app runs. It should match the domain of the Application registered with Dfns.
})
```

- `AsymmetricKeySigner`
  - Exposed in `@dfns/sdk-keysigner` package
  - Implements `CredentialSigner`
  - Needs to be used server-side. It could be used client-side, but we don't recommend it. On a browser, any key-based crypto signing should be handled in a service worker. We are working to add other helper classes to help you support that.


```ts
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const keySigner = new AsymmetricKeySigner({
  credId: 'X2ktMzhxaTEtZTF1bTgtOXY1cG9yY2tkZDe1dG1jYg', // Credential ID
  privateKey: process.env.PRIVATE_KEY, // Credential private key
  appOrigin: 'https://app.mycompany.com', // application's origin, should match the Application registered with Dfns
})
```


### `DfnsApiClient`

`DfnsApiClient` is the main Dfns client, holding most supported functionalities of Dfns API.

It needs to be authenticated, so `DfnsApiClient` needs to be passed a valid `authToken` during instanciation. This `authToken` can be:

- a Service Account token - *long-lived*
- a User Personal Access Token (PAT) - *long-lived*
- a User token issued after on User login - *expires*

`DfnsApiClient` also needs to be passed a [CredentialSigner](#credentialsigner) during instanciation, in order to sign requests.

```ts
import { DfnsApiClient } from '@dfns/sdk'
import { BlockchainNetwork } from '@dfns/sdk/codegen/datamodel/Foundations'

const signer = ... // a Credential Signer (webauthN or key signer from section above)

const apiClient = new DfnsApiClient({
  baseUrl: 'https://api.dfns.io', // base Url of DFNS API
  appId: 'ap-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Application registered with DFNS
  accessToken: '...', // an auth token
  signer, 
})

// create a wallet
const wallet = await dfns.wallets.createWallet({
    body: { network: BlockchainNetwork.ETH_GOERLI }
})

// get assets in wallet
const { assets } = await dfns.wallets.getWalletAssets({ walletId: wallet.id })
```

### `DfnsDelegatedApiClient`

In some configurations, you might want your server to be the one talking to Dfns "on behalf of your user", but still have Users sign requests on a web-app, using the WebauthN Credentials they own. In this case, the `DfnsDelegatedApiClient` can be used on your server.

The difference with the above `DfnsApiClient` is:

- In `DfnsApiClient`, the steps taken to sign the request are done internally.
- In `DfnsDelegatedApiClient`, the signing of the request (of the challenge, really) happens outside of it. So while the request can be made from the server, the signature can be done by a User on a web-app.

In a way, this client "delegates" request signing outside. So using `DfnsDelegatedApiClient`:

- The constructor does not need a `CredentialSigner` (since signing happens outside)
- Every method which needs signing (eg `dfns.wallets.createWallet()`) will be splitted in two parts:
  - `dfns.wallets.createWalletInit()`: takes in the request payload, and returns a challenge that anyone (any `CredentialSigner`) can sign.
  - `dfns.wallets.createWalletComplete()`: takes in the request payload + the signed challenge, and completes the wallet creation.

An example flow would look like:

1. The Server does `createWalletInit`, and then sends back the challenge to the web-app
2. The User (living in the Web app) signs this challenge (using `WebauthN`), and sends the signed challenge to the server
3. The server uses the User signed challenge to `createWalletComplete` on behalf of the user


```ts
import { DfnsDelegatedApiClient } from '@dfns/sdk'

const dfnsDelegated = new DfnsDelegatedApiClient({
  baseUrl: 'https://api.dfns.io', // base Url of DFNS API
  appId: 'ap-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Application registered with DFNS
  accessToken: userAuthToken, // Auth token of the User
})

const challenge = await dfnsDelegated.wallets.createWalletInit(payload)

// ... the server can now send this challenge to the user, so the User signs it with his credentials

// ... Later, after user sends back the signed challenge, the server can complete the request
const wallet = await dfnsDelegated.wallets.createWalletComplete(payload, signedChallenge)
```

### `DfnsAuthenticator`


In a client-side app, if you want a Dfns User to be able to login with Dfns (and get a login token back), you might wanna use `DfnsAuthenticator`:

```ts
import { DfnsAuthenticator } from '@dfns/sdk'
import { WebAuthn } from '@dfns/sdk-webauthn'

const dfnsAuth = new DfnsAuthenticator({
  appId,
  baseUrl: apiUrl,
  signer: new WebAuthn({ rpId }),
})

const { token } = await dfnsAuth.login({ orgId, username })
```


### `BaseAuthApi`

This class holds some auth-related Dfns methods (some of them are un-authenticated API endpoints for login/registration) which might get handy (eg. for user registration). Here are some static methods there:

```ts
import { BaseAuthApi } from '@dfns/sdk/baseAuthApi'

BaseAuthApi.createUserActionChallenge()
BaseAuthApi.signUserActionChallenge()
BaseAuthApi.createUserLoginChallenge()
BaseAuthApi.createUserLogin()
BaseAuthApi.createUserRegistrationChallenge()
BaseAuthApi.createUserRegistration()
```

