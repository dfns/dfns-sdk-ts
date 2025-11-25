
# Ripple Trustlines Example

Demonstrates how to set trustlines on the XRP Ledger using a Dfns wallet. Trustlines allow your wallet to hold and interact with issued tokens (fungible tokens) on the XRPL. The Dfns wallet uses the official xrpl.js library.

See XRPL's [Fungible Tokens documentation](https://xrpl.org/docs/concepts/tokens/fungible-tokens) for more information, and the [API Specification](https://xrpl.org/references.html) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = Dfns Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `XRPL_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `XRPL_NODE_URL` = a XRP Ledger WebSocket node to broadcast the signed transaction

**note** _the wallet must have XRP to pay for fees_

## Explanation

The program runs on the XRP Ledger Testnet. To run the code, you need a testnet wallet that holds some XRP. The program will set a trustline from your wallet to a specific issued token (fungible token) on the XRPL, allowing your wallet to hold and interact with that token.

```shell
> ts-node main.ts

xrpl sender address: rLaWJQYtUwWaQDPQxj8ztfAmQp1XH62CxX
prepared transaction: {
  "TransactionType": "TrustSet",
  "LimitAmount": {
    "issuer": "rHuGNhqTG32mfmAvWA8hUyWRLV3tCSwKQt",
    "currency": "5553444300000000000000000000000000000000",
    "value": "10000000"
  },
  "Account": "rLaWJQYtUwWaQDPQxj8ztfAmQp1XH62CxX",
  "Flags": 0,
  "Sequence": 12658679,
  "Fee": "12",
  "LastLedgerSequence": 12658720
}
transaction signed
transaction submitted: 924E016818DDFAAA4B84E81E1CD0C7E89BDB9F35035408A4D49E752110BE7DB9
```

This is a [transaction](https://testnet.xrpl.org/transactions/924E016818DDFAAA4B84E81E1CD0C7E89BDB9F35035408A4D49E752110BE7DB9) for reference.
