# Dfns Wallet for [Starknet](https://www.starknet.io/)

Dfns wallet integration with [starknet.js](https://www.starknetjs.com/), makes working with Starknet as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your program. Then you need to broadcast these transactions yourself to the
corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-starknet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Account, RpcProvider } from 'starknet'

const signer = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY!,
  credId: process.env.DFNS_CRED_ID!,
})

const dfnsClient = new DfnsApiClient({
  orgId: process.env.DFNS_ORG_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer,
})

const wallet = await DfnsWallet.init({
  walletId: process.env.DFNS_WALLET_ID!,
  dfnsClient,
})

const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_NODE_URL! })
const account = new Account({ provider, address: wallet.address, signer: wallet })

Go checkout the ../../examples/libs/starknet we have that showcase how you can start developing dapps with Dfns wallets.