# Dfns Wallet for [Vechain Connex](https://docs.vechain.org/connex/)

Dfns wallet integration with [Vechain Connex](https://docs.vechain.org/connex/).

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-vechain'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Framework } from '@vechain/connex-framework'
import { Driver, SimpleNet } from '@vechain/connex-driver'

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
})

const net = new SimpleNet('https://testnet.veblocks.net/')
const driver = await Driver.connect(net, wallet)
const connex = new Framework(driver)
```

Go checkout the [examples](../../examples/libs/vechain) we have that showcase how you can start developing dapps with Dfns wallets.
