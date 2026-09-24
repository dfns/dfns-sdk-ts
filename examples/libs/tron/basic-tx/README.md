# Basic Tron transfer

Demonstrates a very simple Tron transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `TRON_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `TRON_NODE_URL` = a Tron Nile full node you have access to

**note** _the wallet must have NileTRX to transfer and pay for gas_

## Explanation

In order to run the program, you would need a Dfns [Tron Nile wallet](https://nile.tronscan.org/#/address/TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN). The program will transfer 0.001 TRX to another address.

```shell
> ts-node main.ts

Tron wallet address: TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN
Transaction txID: b22c1409ca3aa614de1f5b6cef04685a5897bf975e2504c58c883e31b4f3d233
Transaction broadcasted: true
```

This is the Tron Nile [transaction](https://nile.tronscan.org/#/transaction/b22c1409ca3aa614de1f5b6cef04685a5897bf975e2504c58c883e31b4f3d233).
