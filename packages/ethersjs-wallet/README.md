# Dfns Wallet for [ethers.js](https://docs.ethers.org/v6/)

Dfns wallet integration with the popular [ethers.js](https://docs.ethers.org/v6/) library, makes working with Ethereum and other EVM compatible ecosystems as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your `ethers.js` program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/ethersjs-wallet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { JsonRpcProvider } from 'ethers'

const rpcProvider = new JsonRpcProvider(process.env.RPC_PROVIDER_URL!)

const signer = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY!,
  credId: process.env.DFNS_CRED_ID!,
  appOrigin: process.env.DFNS_APP_ORIGIN!,
})

const dfnsClient = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  accessToken: process.env.DFNS_ACCESS_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer,
})

return new DfnsWallet({
  walletId: process.env.DFNS_WALLET_ID!,
  dfnsClient,
}).connect(rpcProvider)
```

Go checkout the [examples](../examples/ethersjs/) we have that showcase how you can use ethers.js to start developing Dapps with Dfns wallets.
