# Basic Kaspa transfer

Demonstrates a very simple Kaspa transfer from a Dfns wallet to another address. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `KASPA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `KASPA_API_URL` = a Kaspa node to broadcast the signed transaction

## Explanation

In order to run the program, you would need a Dfns [Kaspa wallet](https://explorer.kaspa.org/addresses/kaspa:qyp0s2f9ffpnsyg5ug7ywmc7d660l3u00tfrh4eafj9sk280a97dnlgkh73szvx?page=1). The program will transfer 1 KAS to another address.

```shell
> ts-node main.ts

Wallet address: kaspa:qyp0s2f9ffpnsyg5ug7ywmc7d660l3u00tfrh4eafj9sk280a97dnlgkh73szvx
Unspent balance: 200000000 sompi
Sending 199990000 sompi to kaspa:qq70k7tn3cyq23fa2al678dr09smqfsqp88cw4j4rm5x0s6fllr2yqm9nk7sc with 10000 fee per UTXO
Transaction built {
  "id": "8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed",
  "inputs": [...],
  "outputs: [...],
  ...
}
Transaction Id: 8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed
```

This is the Kaspa [transaction](https://explorer.kaspa.org/txs/8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed).
