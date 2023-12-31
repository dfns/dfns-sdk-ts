# Dfns Wallet for [viem](https://viem.sh/docs/introduction.html)

Dfns wallet integration with the popular **viem** library, makes working with Ethereum and other EVM compatible ecosystems as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your `viem` program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-viem'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { createWalletClient } from 'viem'
import { toAccount } from 'viem/accounts'

const signer = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY!,
  credId: process.env.DFNS_CRED_ID!,
  appOrigin: process.env.DFNS_APP_ORIGIN!,
})

const dfnsClient = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer,
})

const wallet = await DfnsWallet.init({
  walletId: process.env.DFNS_WALLET_ID!,
  dfnsClient,
})

const account = toAccount(wallet)
const client = createWalletClient({
  account,
  chain: mainnet,
  transport: http(),
})
```

Go checkout the [examples](../../examples/libs/viem) we have that showcase how you can use viem to start developing Dapps with Dfns wallets.
