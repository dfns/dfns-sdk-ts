# Iota rebased basic transaction

Demonstrates a very simple Iota transfer from a Dfns wallet using [Iota-sdk](https://docs.iota.org/ts-sdk/typescript/).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `IOTA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `IOTA_RPC_URL` = an Iota RPC node to broadcast signed transaction

**note** _the wallet must have IOTA to pay for fees_

## Explanation

The program runs on the Iota rebased testnet. To execute the code, you will need a testnet wallet containing some IOTA. The program is designed to send 1e-9 IOTA from the wallet to another address.

```shell
> ts-node main.ts

Iota wallet address: 0x078f2345ee6ad9f7fe4a09f2fc74998ddbf0f185930b805e5592ade389b210b5
preparing transfer: amount = 1, recipient = 0xae98475c63cfebc918b57193a4183f4374f67974971aff9034699793d331d7de
transaction signed
transaction broadcasted: hash = DLBmXgmT4wdm5G1tBuhGHtp6fQ9coTic7YsdeWXy9JKo
```

This is the IOTA [transaction](https://explorer.rebased.iota.org/txblock/DLBmXgmT4wdm5G1tBuhGHtp6fQ9coTic7YsdeWXy9JKo?network=testnet).
