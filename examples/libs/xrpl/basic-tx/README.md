# Ripple

Demonstrates a very simple XRP Ledger transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet. Dfns wallet implements the official xrpl.js library.

See XRPL's [API Specification](https://xrpl.org/references.html) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `XRPL_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `XRPL_NODE_URL` = a XRP Ledger WebSocket node to broadcast the signed transaction

**note** _the wallet must have XRP to pay for fees_

## Explanation

The program runs on XRP Ledger Testnet. In order to run the code, you would need a testnet wallet that holds some XRP. The program will send 0.10 XRP from your wallet to a specific address.

```shell
> ts-node main.ts

xrpl sender address: rpAR2vcGYk5zFvpt6nhgqPNf8XkCAHwKyi
prepared transaction: { xxxxxx }
transaction signed
transaction submitted: 5DF5D272B09C92A01C9780A3DD21321650920E69CDBFE35A68F402F58364393E
```

This is a [transaction](https://testnet.xrpl.org/transactions/5DF5D272B09C92A01C9780A3DD21321650920E69CDBFE35A68F402F58364393E) for example.
