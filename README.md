# Dfns Typescript SDK

Welcome, builders 👋🔑 This repo holds Dfns Typescript SDK. Useful links:

- [Dfns Website](https://www.dfns.co)
- [Dfns API Docs](https://docs.dfns.co)
- [Dfns SDK Docs](https://dfns.github.io/dfns-sdk-ts)

## Installation

**Node version 18 or greater recommended**

```
npm i @dfns/sdk
```

## Examples

Check out the list of all examples in [/examples](./examples).

## Concepts

### `CredentialSigner`

All state-changing requests made to Dfns API need to be cryptographically signed by some Credentials registered with the User / Service Account.

> **Note**
> To be more precise, it's not the request itself which needs to be signed, but it's actually a "User Action Challenge" issued by Dfns which needs to be signed. As a simplification, we speak of "request signing"

This request signature is a cryptographic proof that you and only you are making the request. Without it, the request would raise an Unauthorized error.

Credentials can be one of two kinds (_check our API docs [Credential section](https://docs.dfns.co/dfns-docs/getting-started/authentication-authorization#credentials) for more details_): WebauthN Credentials or Key Credentials. WebauthN credentials only work in the browser. Key credentials can work in the browser (BrowserKeySigner) or in node (AsymmetricKeySigner).
The classes below support each one, their responsibility is to sign a challenge:

#### `Browser Signer`

The SDK exposed in `@dfns/sdk-browsersigner` implements two classes: `WebauthN` and `BrowserKeySigner`. 
`WebauthN` is highly recommended as it is the most secure option. The private key never leaves the authenticator and is never available to the browser.
`BrowserKeySigner` is disouraged as the private key lives in the browser memory. The developer needs to come up with a secure way to load and use the private key while still keeping it secure. 

##### `WebauthN`

It is exposed as `WebAuthn` class, and implements `CredentialSigner`. It **needs to be used client-side** (on a browser, in a web-app)

```ts
import { WebAuthn } from '@dfns/sdk-webauthn'

const webauthnSigner = new WebAuthn({
  rpId: 'app.mycompany.com', // WebauthN "Relying Party". It's the domain where your client app runs. It should match the domain of the Application registered with Dfns.
})
```

#### `Browser Key Signer`

It is exposed as `BrowserKeySigner` class, and implements `CredentialSigner`. It **needs to be used client-side** (on a browser, in a web-app)

```ts
import { BrowserKeySigner } from '@dfns/sdk-browsersigner'

const browserKey = new BrowserKeySigner({
  keyPair: keyPair, // This is the keyPair object of type [CryptoKeyPair](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKeyPair). This key should be protected and loaded securely in the browser.
  appOrigin: 'mycompany.com', // This is the domain where your client app runs.
})

// Create the attestation object to register the credential
const attestation = await browserKey.create(challenge)

// Create the assertion object to sign a request with the credential
const assertion = await browserKey.sign(challenge, allowCredentials) 
```

#### `AsymmetricKeySigner`

It is exposed in `@dfns/sdk-keysigner` package, implements `CredentialSigner`. It **needs to be used server-side**. It could be used client-side, but we don't recommend it. On a browser, any key-based crypto signing should be handled in a service worker. We are working to add other helper classes to help you support that.

```ts
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const keySigner = new AsymmetricKeySigner({
  credId: 'X2ktMzhxaTEtZTF1bTgtOXY1cG9yY2tkZDe1dG1jYg', // Credential ID
  privateKey: process.env.DFNS_PRIVATE_KEY!, // Credential private key
  appOrigin: 'https://app.mycompany.com', // application's origin, should match the Application registered with Dfns
})
```

- `credId`: ID of the Credential registered with the auth token you’re using (Personal Access Token, or Service Account Token). In Dfns dashboard, you can find it next to your token (in `Settings` > `My Access Tokens` or `Settings > Service Accounts`)
- `privateKey`: private key (in .pem format) which only you have, associated with the public key you registered when you created your PAT / Service Account.
- `appOrigin`: Origin of the client-side Application registered with Dfns. In Dfns dashboard, you can find Applications in `Settings > Application`

### `DfnsApiClient`

`DfnsApiClient` is the main Dfns client, holding most supported functionalities of Dfns API.

It needs to be authenticated, so `DfnsApiClient` needs to be passed a valid `authToken`. This `authToken` can be:

- a Service Account token - _long-lived_
- a User Personal Access Token (PAT) - _long-lived_
- a User token issued after on User login - _expires_

`DfnsApiClient` also needs to be passed a [CredentialSigner](#credentialsigner), in order to sign requests.

```ts
import { DfnsApiClient } from '@dfns/sdk'

const signer = ... // a Credential Signer (webauthN or key signer from section above)

const apiClient = new DfnsApiClient({
  baseUrl: 'https://api.dfns.io', // base Url of DFNS API
  appId: 'ap-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Application registered with DFNS
  authToken: '...', // an auth token
  signer,
})

// create a wallet
const wallet = await dfns.wallets.createWallet({
    body: { network: 'EthereumSepolia' }
})

// get assets in wallet
const { assets } = await dfns.wallets.getWalletAssets({ walletId: wallet.id })
```

### `DfnsDelegatedApiClient`

In some configurations, you might want your server to be the one talking to Dfns "on behalf of the user", but till have the user sign all requests (on a web-app, using the WebauthN Credentials he owns). In this case, the `DfnsDelegatedApiClient` can be used on your server.

The difference with the above `DfnsApiClient` is:

- In `DfnsApiClient`, all steps to sign the request are done internally.
- In `DfnsDelegatedApiClient`, the signing of the request (of the challenge, really) happens outside of it. So while the request can be conducted by the server, the signature of this request can be done by the User (on a web-app).

In a way, `DfnsDelegatedApiClient` "delegates" request signing outside of it. As a result:

- Its constructor does not need a `CredentialSigner` (since signing happens outside)
- Every method requiring signing (eg `dfns.wallets.createWallet()`) will be splitted in two methods:
  - `dfns.wallets.createWalletInit()`: takes in the request payload, and returns a challenge that should be signed by a `CredentialSigner`.
  - `dfns.wallets.createWalletComplete()`: takes in the request payload + the signed challenge, and completes the wallet creation.

An example flow would look like:

1. The Server executes `createWalletInit`, and sends back the returned challenge to the use on the web-app.
2. In the web-app, the User signs the challenge (using `WebauthN` signer), and sends the signed challenge to the server.
3. The server uses the User signed challenge to `createWalletComplete` on behalf of the user.

```ts
import { DfnsDelegatedApiClient } from '@dfns/sdk'

const dfnsDelegated = new DfnsDelegatedApiClient({
  baseUrl: 'https://api.dfns.io', // base Url of DFNS API
  appId: 'ap-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Application registered with DFNS
  authToken: userAuthToken, // Auth token of the User
})

const challenge = await dfnsDelegated.wallets.createWalletInit(payload)

// ... the server can now send this challenge to the user, so the User signs it with his credentials

// ... Later, after user sends back the signed challenge, the server can complete the request:

const wallet = await dfnsDelegated.wallets.createWalletComplete(payload, signedChallenge)
```

### `DfnsAuthenticator`

In a client-side app, if you want a Dfns User to be able to login with Dfns (and get an auth token back), you might wanna use `DfnsAuthenticator`:

```ts
import { DfnsAuthenticator } from '@dfns/sdk'
import { WebAuthn } from '@dfns/sdk-webauthn'

const dfnsAuth = new DfnsAuthenticator({
  appId,
  baseUrl: apiUrl,
  signer: new WebAuthn({ rpId }),
})

// Since we are using a Webauthn Signer here, this will prompt the user for webauthn credentials (touch id / phone id / yubikey touch...)
const { token } = await dfnsAuth.login({ orgId, username })
```

### `BaseAuthApi`

`BaseAuthApi` is a Dfns client which holds some special auth-related Dfns methods (some of them are un-authenticated API endpoints for login/registration) which might get handy.

```ts
import { BaseAuthApi } from '@dfns/sdk/baseAuthApi'

BaseAuthApi.createUserActionChallenge()
BaseAuthApi.signUserActionChallenge()
BaseAuthApi.createUserLoginChallenge()
BaseAuthApi.createUserLogin()
BaseAuthApi.createUserRegistrationChallenge()
BaseAuthApi.createUserRegistration()
```

## Platform Integrations

Integrations with other blockchain platforms to make Dapp development frictionless. More to come...

- [Algorand](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-algorand) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/algorand)
- [BitcoinJS](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-bitcoinjs/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/bitcoinjs/)
- [Cardano meshsdk](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-meshsdk/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/meshsdk/)
- [ethers.js v5](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-ethersjs5/)/[v6](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-ethersjs6/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/ethersjs)
- [Polkadot](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-polkadot/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/polkadot)
- [Solana web3.js](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-solana/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/solana)
- [Tezos taquito](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-taquito/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/taquito)
- [TronWeb](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-tron/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/tron)
- [Vechain Connex](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-vechain/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/vechain)
- [viem](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-viem/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/viem)
- [XRP Ledger xrpl.js](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-xrpl/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/xrpl)
