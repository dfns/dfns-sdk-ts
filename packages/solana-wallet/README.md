# Dfns Wallet for [Solana](https://solana-labs.github.io/solana-web3.js/index.html)

Dfns wallet integration with Solana web3.js(https://solana-labs.github.io/solana-web3.js/index.html), makes working with Solana as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/solana-wallet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

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

return DfnsWallet.init({
  walletId,
  dfnsClient,
})
```

Go checkout the [examples](../examples/solana/) we have that showcase how you can start developing dapps with Dfns wallets.
