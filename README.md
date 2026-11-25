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

Credentials can be one of two kinds (_check our API docs [Credential section](https://docs.dfns.co/dfns-docs/getting-started/authentication-authorization#credentials) for more details_): WebauthN Credentials or Key Credentials. WebauthN credentials only work in the browser. Key credentials are server-side only (`AsymmetricKeySigner`).
The classes below support each one, their responsibility is to sign a challenge:

#### Browser Signer

The SDK exposed in `@dfns/sdk-browser` implements `WebAuthnSigner`.

##### `WebAuthnSigner`

`WebAuthnSigner` implements `CredentialSigner` and `CredentialStore`. It **needs to be used client-side** (on a browser, in a web-app)

```ts
import { WebAuthnSigner } from '@dfns/sdk-browser'

const webauthn = new WebAuthnSigner({ relyingParty: { id: 'acme.com', name: 'Acme' } })
```

#### React Native Signer

`PasskeysSigner` in `@dfns/sdk-react-native` package, implements `CredentialSigner` and `CredentialStore`. It **needs to be used client-side** with the react native framework.

```ts
import { PasskeysSigner } from '@dfns/sdk-react-native'

const passkeys = new PasskeysSigner()
```

#### `AsymmetricKeySigner`

`AsymmetricKeySigner` in `@dfns/sdk-keysigner` package, implements `CredentialSigner`. It **needs to be used server-side only** — a key sitting in browser memory is unsafe. In a browser, use `WebAuthnSigner`.

```ts
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const keySigner = new AsymmetricKeySigner({
  credId: 'X2ktMzhxaTEtZTF1bTgtOXY1cG9yY2tkZDe1dG1jYg', // Credential ID
  privateKey: process.env.DFNS_PRIVATE_KEY!, // Credential private key
})
```

- `credId`: ID of the Credential registered with the auth token you’re using (Personal Access Token, or Service Account Token). In Dfns dashboard, you can find it next to your token (in `Settings` > `My Access Tokens` or `Settings > Service Accounts`)
- `privateKey`: private key (in .pem format) which only you have, associated with the public key you registered when you created your PAT / Service Account.

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
  orgId: 'or-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Dfns Organisation
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

#### Deployments behind a path prefix

`baseUrl` may include a gateway path, for example `https://platform.example.com/api`.
A request to `/wallets` then uses `https://platform.example.com/api/wallets`; a trailing
slash on the base URL is optional. The gateway must strip the prefix before forwarding
to the API. Base URLs containing a query string or fragment are rejected.

The SDK signs the canonical API route without the gateway prefix. Client-generated
challenges retain the route's query string; server-generated challenges use its pathname.

### `DfnsDelegatedApiClient`

In some configurations, you might want your server to be the one talking to Dfns "on behalf of the user", but till have the user sign all requests (on a web-app, using the WebauthN Credentials he owns). In this case, the `DfnsDelegatedApiClient` can be used on your server.

The difference with the above `DfnsApiClient` is:

- In `DfnsApiClient`, all steps to sign the request are done internally.
- In `DfnsDelegatedApiClient`, the signing of the request (of the challenge, really) happens outside of it. So while the request can be conducted by the server, the signature of this request can be done by the User (on a web-app).

In a way, `DfnsDelegatedApiClient` "delegates" request signing outside of it. As a result:

- Its constructor does not need a `CredentialSigner` (since signing happens outside)
- Every method requiring signing (eg `dfns.wallets.createWallet()`) will be split in two methods:
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
  orgId: 'org-2ng9jv-80cfc-983pop0iauf2sv8r', // ID of the Dfns Organisation
  authToken: userAuthToken, // Auth token of the User
})

const challenge = await dfnsDelegated.wallets.createWalletInit(payload)

// ... the server can now send this challenge to the user, so the User signs it with his credentials

// ... Later, after user sends back the signed challenge, the server can complete the request:

const wallet = await dfnsDelegated.wallets.createWalletComplete(payload, signedChallenge)
```

### `DfnsTenantApiClient`

A tenant user can act at two levels, each with its own auth token:

- **Tenant level** (orgs, tenant users, user groups, tenant permissions): needs a token scoped to the tenant. Use `DfnsTenantApiClient`.
- **Inside an org** (wallets, policies, ...): needs a token scoped to that org. Use `DfnsApiClient`.

`DfnsTenantApiClient` groups the tenant endpoints by service, like `DfnsApiClient` groups its modules:

| Getter        | Endpoints             | Example                                                  |
| ------------- | --------------------- | -------------------------------------------------------- |
| `orgs`        | `/tenant/orgs`        | `tenantClient.orgs.createOrg(...)`                       |
| `users`       | `/tenant/users`       | `tenantClient.users.listTenantUsers()`                   |
| `userGroups`  | `/tenant/user-groups` | `tenantClient.userGroups.addTenantUserGroupMembers(...)` |
| `permissions` | `/tenant/permissions` | `tenantClient.permissions.assignTenantPermission(...)`   |

It also has `auth`, for the auth endpoints that accept a tenant-scoped token (user action signing, credentials, token exchange, logout). Its constructor throws if the token is scoped to an org.

A tenant user can switch between the two levels. Both helpers exchange the token with `POST /auth/tokens` and return a new client:

- `tenantClient.getOrgClient(orgId)` returns a `DfnsApiClient` for that org.
- `apiClient.getTenantClient(tenantId)` returns a `DfnsTenantApiClient`. An org token does not carry the tenant ID, so you pass it in.

Tenant level to org:

```ts
import { DfnsTenantApiClient } from '@dfns/sdk'

const tenantClient = new DfnsTenantApiClient({
  baseUrl: 'https://api.dfns.io',
  authToken: tenantToken, // a tenant user token, scoped to the tenant
  signer,
})

// create an org
const { org } = await tenantClient.orgs.createOrg({
  body: { name: 'Treasury', keyStores: [{ id: keyStoreId }] },
})

// work inside that org
const orgClient = await tenantClient.getOrgClient(org.id)
const wallet = await orgClient.wallets.createWallet({ body: { network: 'EthereumSepolia' } })
```

Org to tenant level:

```ts
import { DfnsApiClient } from '@dfns/sdk'

const apiClient = new DfnsApiClient({
  baseUrl: 'https://api.dfns.io',
  authToken: orgToken, // a tenant user token, scoped to an org
  signer,
})

const tenantClient = await apiClient.getTenantClient(tenantId)
const { items: orgs } = await tenantClient.orgs.listOrgs()
```

`DfnsDelegatedTenantApiClient` is the delegated version (see [`DfnsDelegatedApiClient`](#dfnsdelegatedapiclient)). Its `getOrgClient(orgId)` returns a `DfnsDelegatedApiClient`, and `DfnsDelegatedApiClient.getTenantClient(tenantId)` returns a `DfnsDelegatedTenantApiClient`.

### `DfnsAuthenticator`

In a client-side app, if you want a Dfns User to be able to login with Dfns (and get an auth token back), you might wanna use `DfnsAuthenticator`:

```ts
import { DfnsAuthenticator } from '@dfns/sdk'
import { WebAuthn } from '@dfns/sdk-browser'

const dfnsAuth = new DfnsAuthenticator({
  orgId,
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
- [Aptos](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-aptos) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/aptos)
- [BitcoinJS](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-bitcoinjs/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/bitcoinjs/)
- [Concordium](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-concordium/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/concordium/)
- [Cardano Mesh](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-meshsdk/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/meshsdk/)
- [ethers.js v5](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-ethersjs5/)/[v6](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-ethersjs6/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/ethersjs)
- [Hedera](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-hedera/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/hedera)
- [iota](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-iota/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/iota)
- [kaspa](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-kaspa/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/kaspa)
- [Movement](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-movement/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/movement)
- [near](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-near/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/near)
- [polkadot{.js}](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-polkadot/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/polkadot)
- [polymesh](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-polymesh/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/polymesh)
- [Solana web3.js](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-solana/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/solana)
- [Stellar sdk](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-stellar/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/stellar)
- [Tezos Taquito](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-taquito/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/taquito)
- [TronWeb](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-tron/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/tron)
- [Vechain Connex](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-vechain/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/vechain)
- [viem](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-viem/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/viem)
- [xrpl.js](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/lib-xrpl/) and [examples](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/libs/xrpl)
