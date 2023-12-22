# Dfns Wallet for [Ripple](https://xrpl.org/references.html)

Dfns wallet integration with xrpl.js (https://js.xrpl.org), makes working with Ripple as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-xrpl'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Client } from 'xrpl';

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

const wallet = DfnsWallet.init({
    walletId: process.env.RIPPLE_WALLET_ID!,
    dfnsClient,
})

const client = new Client('wss://testnet.xrpl-labs.com')
```

Go checkout the [examples](../../examples/libs/ripple/basic-tx/main.ts) we have that showcase how you can start developing dapps with Dfns wallets.
