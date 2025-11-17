# Dfns Wallet for [Starknet](https://starknet.io/)

Dfns wallet integration with Starknet.js SDK (https://github.com/starknet-io/starknet.js), makes working with Starknet as simple and painless as possible. `DfnsWallet` implements methods to interact with the Starknet network using your Dfns managed wallets.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-starknet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

const signer = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY!,
  credId: process.env.DFNS_CRED_ID!,
})

const dfnsClient = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer,
})

const starknetWallet = await DfnsWallet.init({
  walletId: 'your-wallet-id',
  dfnsClient,
})
```