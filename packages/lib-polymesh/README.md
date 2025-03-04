# Dfns Wallet for [Polymesh](https://developers.polymesh.network/docs/)

Dfns wallet integration with Polymesh SDK (https://developers.polymesh.network/sdk-docs/), makes working with Polymesh as simple and painless as possible. `DfnsWallet` implements the official [polkadot signer interface](https://github.com/polkadot-js/api/blob/3f73f4dbf5b5666838b09e022b22c9b6f5a5520b/packages/types/src/types/extrinsic.ts#L168) and we
provide a `DfnsSigningManager` implementing the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types) to be used in the PolymeshSDK

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets, for all the transactions created by your program. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-polymesh'
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

return DfnsWallet.init({
  walletId,
  dfnsClient,
})
```

Go checkout the [examples](../../examples/libs/polymesh) we have that showcase how you can start developing dapps with Dfns wallets.
