# Basic Solana transfer

Demonstrates a very simple Solana transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.

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

In order to run the program, you would need a Dfns [Solana devnet wallet](https://explorer.solana.com/address/CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16?cluster=devnet). The program will transfer 0.1 SOL to another address.

```shell
> ts-node main.ts

Solana wallet address: CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16
Current balance: 899985000
Sending 100000000 lamports to D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT
Transaction signature: 2TNj6kakEUBvodnvqX1AVrRLbrHU9qK861wFqUWzzkkViPVNMRRpPyrBFLTRMVzd4MnwKDMT5pTrQ28qGQWFk6nq
New balance: 799980000
```

This is the Solana devnet [transaction](https://explorer.solana.com/tx/2TNj6kakEUBvodnvqX1AVrRLbrHU9qK861wFqUWzzkkViPVNMRRpPyrBFLTRMVzd4MnwKDMT5pTrQ28qGQWFk6nq?cluster=devnet).
