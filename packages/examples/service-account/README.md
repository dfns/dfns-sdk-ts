# Typescript SDK via Service Account

Interact with DFNS API using the Typescript SDK through a service account. This approach is for clients who want to retain custody of wallet assets.

## Prerequisite

Create a new service account access token using the DFNS dashboard. (need direction)

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
  accessToken: process.env.DFNS_ACCESS_TOKEN, // the access token obtained when creating the service account
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
