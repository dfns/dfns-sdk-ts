# Basic Hedera transfer

Demonstrates a very simple Hedera transfer from a Dfns wallet to another account. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `HEDERA_WALLET_ID` = a Dfns Hedera [wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** _The Hedera wallet must have testnet HBAR to transfer and pay for gas._

## Explanation

In order to run the program, you would need a Dfns [Hedera testnet wallet](https://hashscan.io/testnet/account/0.0.6862141). The program will transfer 1 tℏ to another account.

```shell
> ts-node main.ts

Hedera wallet account ID: 0.0.6862141
transferring 1 tℏ from wallet 0.0.6862141 to 0x956fbb0c88b3c597d4afdbab3e26939051ff6725
creating transfer transaction...
signing and executing transfer transaction...
transaction executed. txId: 0.0.6862141@1758116522.512147680
```

This is the Hedera testnet [transaction](https://hashscan.io/testnet/transaction/1758116529.504053000).
