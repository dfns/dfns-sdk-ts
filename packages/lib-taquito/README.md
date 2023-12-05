# Dfns Wallet for Tezos using Taquito

Dfns wallet integration with [Tezos](https://tezos.com/) using [Taquito lib](https://tezostaquito.io/).

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-tezos'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { RpcClient} from '@taquito/rpc'

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

// Replace with the RPC url/ chainId you want
const client = new RpcClient(
  'https://ghostnet.ecadinfra.com',
  'main',
) 

const Tezos = new TezosToolkit(client)
Tezos.setProvider({ signer: wallet })

// Now you can create/sign/broadcast operation

[.....]
```

Go checkout the [examples](../../examples/libs/taquito/basic-tx/main.ts) we have that showcase how you can start developing dapps with Dfns wallets.
