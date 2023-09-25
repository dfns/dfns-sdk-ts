# Dfns Wallet for Tron

Dfns wallet integration with [Tron](https://tronweb.network/).

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-tron'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
const TronWeb = require('tronweb')

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
  walletId: process.env.DFNS_WALLET_ID!,
  dfnsClient,
  maxRetries: 10,
})

const tronWeb = new TronWeb({
  fullHost: 'https://shasta.trongrid.io/', // Replace with the TRON full node URL
});

[.....]
```

Go checkout the [examples](../../examples/tron) we have that showcase how you can start developing dapps with Dfns wallets.
