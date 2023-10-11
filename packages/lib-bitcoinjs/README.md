# Dfns Wallet for [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib)

Dfns wallet integration with [BitcoinJS]. makes working with Bitcoin ecosystems as simple and painless as possible.

The `DfnsWallet` uses `generateSignature` to compute signatures using your Dfns managed wallets. Then you need to broadcast these transactions yourself to the corresponding node providers that are either self hosted or by a blockchain provider.

A typical setup routine looks like this,

```typescript
import { DfnsWallet } from '@dfns/lib-bitcoinjs'
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

const wallet = DfnsWallet.init({
  walletId: process.env.DFNS_WALLET_ID!,
  dfnsClient,
})
```

## Sign PSBT, `psbt.signAllInputsAsync(wallet)` vs `wallet.SignPsbt(psbt)`

The Dfns wallet signs bitcoin transactions using the "Partially Signed Bitcoin Transaction" format, or PSBT. There are two ways to sign a PSBT. A transaction can have multiple UTXO inputs, and each UTXO must be signed independently with the Dfns wallet, signing with `psbt.signAllInputsAsync(wallet)` will result in multiple requests to sign each UTXO separately. It is recommended to instead call `wallet.SignPsbt(psbt)`, and sign the entire Psbt in a single request.

Go checkout the [examples](../../examples/libs/bitcoinjs) we have that showcase how you can start developing dapps with Dfns wallets.
