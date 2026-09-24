# Pay to multi-sig

Adapted from [a tutorial example](https://bitcoinjs-guide.bitcoin-studio.com/bitcoinjs-guide/v5/part-three-pay-to-script-hash/multi_signatures/multisig_p2wsh_2_4). This example demonstrates how to use Dfns wallets to sign multi-signature segwit Bitcoin transactions. The example uses a 2-out-of-2 multi-sig address, but can be easily modified to satisfy other signing requirements.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `BITCOIN_WALLET1_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) as signer 1
- `BITCOIN_WALLET2_ID` = a Dfns wallet as signer 2
- `BITCOIN_NODE_URL` = a Bitcoin node to broadcast the signed transaction

## Explanation

In order to run the program, you would need two Dfns wallets. The [multi-sig address](https://blockstream.info/testnet/address/tb1qpn9su2sej7n0hyel2rvkflkthzpm98gud34c4rx9mqt26623jm7s952y9r) must have some testnet Bitcoins. The example will create a transaction, both wallets will sign that transaction and transfer 1 satoshi to one of the wallets.

```shell
> ts-node main.ts

Multisig address: tb1qpn9su2sej7n0hyel2rvkflkthzpm98gud34c4rx9mqt26623jm7s952y9r
Unspent balance: 8000 satoshis
Transfer amount: 1 satoshis
Transfer fee: 200 satoshis
Transaction hash: 9c3daf42bfcb7e4d2c824a67632b240439d298b97f8c7008632b9b3a40a7aa38
```

This is the Bitcoin testnet multi-sig [transaction](https://blockstream.info/testnet/tx/9c3daf42bfcb7e4d2c824a67632b240439d298b97f8c7008632b9b3a40a7aa38).
