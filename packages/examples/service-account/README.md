# Typescript SDK via Service Account

Interact with DFNS API using the Typescript SDK through a service account. This approach is for clients who want to retain custody of wallet assets.

## Prerequisites

- On Dfns Dashboard, under `Settings` > `Applications`, use the existing default Application ID, or create a new Application. Eg
  - type: Client Side
  - Relying Party: localhost
  - Origin: http://localhost:3000
- On Dfns Dashboard, under `Settings` > `Service Account`, create a new Service Account (check [Dfns docs](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair) to see how to generate a public/private keypair)
- Copy/paste the `.env.example` into a `.env`, and replace with your environment variables values
  - `DFNS_API_URL` Dfns api URL (eg https://api.dfns.ninja or https://api.dfns.io depending which you are using)
  - `DFNS_APP_ID` Application ID registered with Dfns above
  - `DFNS_APP_ORIGIN` Origin of Dfns Application created in step above, eg `http://localhost:3000`
  - `DFNS_AUTH_TOKEN` Service Account token created above.
  - `DFNS_CRED_ID` Credential ID associated with the Service Account, when you created the service account. You can find this one in the `Dashboard` > `Settings` > `Service Account`
  - `DFNS_PRIVATE_KEY` Private key of the credentials created for the service account. (the newlines in it should not be a problem)

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
  privateKey: process.env.DFNS_PRIVATE_KEY, // corresponding private key used in service account creation
  credId: 'X2ktMzhxaTEtZTF1bTgtOXY1cG9yY2tkZDe1dG1jYg', // credential ID of the service account, get from dashboard
  appOrigin: 'https://app.mycompany.com', // application's origin, should match the registered application
})
```

Create an API client

```ts
import { DfnsApiClient } from '@dfns/sdk'

const apiClient = new DfnsApiClient({
  baseUrl: 'https://api.dfns.io', // url to the DFNS API
  appId: 'ap-3n0jv-87cfc-953pop0iauf2sv5t', // application ID registered with DFNS
  authToken: process.env.DFNS_AUTH_TOKEN, // the token obtained when creating the service account
  signer, // the signer from last step
})
```

Use the API client

```ts
const wallet = await apiClient.wallets.createWallet({ body: { network: BlockchainNetwork.ETH_GOERLI } })
console.log(JSON.stringify(wallet))

const list = await apiClient.wallets.listWallets({})
console.log(JSON.stringify(list))
```

The user action signing flow is handled implicitly by the SDK.

![Sequence Diagram Dfns SDK Service Account Configuration](../../../images/Dfns_Service_Account_Configuration.png)
