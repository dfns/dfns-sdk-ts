# Durable nonce Solana transfer

Demonstrates a very simple Solana transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.
This specific transfer will use [DurableNonce](https://solana.com/fr/developers/guides/advanced/introduction-to-durable-nonces) so the tx will not have mortality

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `SOLANA_WALLET_ID` = a Dfns Solana [wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** _The Solana wallet must have devnet SOL to transfer and pay for gas._

## Explanation

To run this program, you will need a Dfns [Solana devnet wallet](https://explorer.solana.com/address/CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16?cluster=devnet). The program will transfer 1 lamports using a durable nonce.

```shell
> ts-node main.ts

Solana wallet address: D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT
Created nonce account 8r2JtxqNeMX1ZvpK66tL3skFa5DV3DdnsMCufNh1rcEJ
Current balance: 24288257782
Transaction signature: 51XzfoY3BzLCtsUCGLYTDv92gT1mgizR4v24FpYZZQRT72tQLU7s6vY4mdH2QJQYUgbWsmhop85JPZgseWJKTJvB
New balance: 24288252781
```

This is the Solana devnet [transaction](https://explorer.solana.com/tx/51XzfoY3BzLCtsUCGLYTDv92gT1mgizR4v24FpYZZQRT72tQLU7s6vY4mdH2QJQYUgbWsmhop85JPZgseWJKTJvB?cluster=devnet).
