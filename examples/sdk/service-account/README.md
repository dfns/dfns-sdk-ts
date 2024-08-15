# Typescript SDK via Service Account

Interact with Dfns API using the Typescript SDK through a service account. This approach is for clients who want to retain custody of wallet assets.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial`
- Application Type, leave as the default `Default Application`
- Relying Party, the value doesn't apply to a service account, you can set it to `localhost`
- Origin, also doesn't apply to a service account, you can set it to `http://localhost`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`

## Explanation

Add the SDK dependencies to the project

```sh
// npm
npm i @dfns/sdk @dfns/sdk-keysigner

// yarn
yarn add @dfns/sdk @dfns/sdk-keysigner
```

Create an asymmetric key signer with the private key

```ts
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const signer = new AsymmetricKeySigner({
  credId: process.env.DFNS_CRED_ID!,
  privateKey: process.env.DFNS_PRIVATE_KEY!,
})
```

Create an API client

```ts
import { DfnsApiClient } from '@dfns/sdk'

const dfnsApi = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer,
})
```

Use the API client

```ts
const wallet = await dfnsApi.wallets.createWallet(
  {body: { network: 'EthereumSepolia'}
})
console.log(JSON.stringify(wallet))

const list = await dfnsApi.wallets.listWallets({})
console.log(JSON.stringify(list))
```

The user action signing flow is handled implicitly by the SDK.

![Sequence Diagram Dfns SDK Service Account Configuration](../../../assets/Dfns_Service_Account_Configuration.png)
