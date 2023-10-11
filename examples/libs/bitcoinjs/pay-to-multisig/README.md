# Pay to multi-sig

Adapted from [a tutorial example](https://bitcoinjs-guide.bitcoin-studio.com/bitcoinjs-guide/v5/part-three-pay-to-script-hash/multi_signatures/multisig_p2wsh_2_4). This example demonstrates how to use Dfns wallets to sign multi-signature segwit Bitcoin transactions. The example uses a 2-out-of-2 multi-sig address, but can be easily modified to satisfy other signing requirements.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name
- Type of User, `Client Side`
- Relying Party = `localhost`
- Origin = `http://localhost:3000`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_APP_ORIGIN` = `http://localhost:3000`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `BITCOIN_WALLET1_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) as signer 1
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
