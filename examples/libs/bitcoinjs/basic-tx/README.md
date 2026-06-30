# Basic Bitcoin transfer

Demonstrates a very simple Bitcoin transfer from a Dfns wallet to another address. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `BITCOIN_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `BITCOIN_NODE_URL` = a Bitcoin node to broadcast the signed transaction

## Explanation

In order to run the program, you would need a Dfns [Bitcoin wallet](https://blockstream.info/testnet/address/tb1qydad3w30lkvj7m4u02ec3emlqr7g05wf5456q3). The program will transfer 1 satoshi to another address.

```shell
> ts-node main.ts

Wallet address: tb1qydad3w30lkvj7m4u02ec3emlqr7g05wf5456q3
Unspent balance: 1442078 satoshis
Transfer amount: 1 satoshis
Transfer fee: 150 satoshis
Transaction hash: 090bcfd381ff1698c94cf62ac9c99f4298c97b7aca873ce3c8a17a815ead62c3
```

This is the Bitcoin testnet [transaction](https://blockstream.info/testnet/tx/090bcfd381ff1698c94cf62ac9c99f4298c97b7aca873ce3c8a17a815ead62c3).
