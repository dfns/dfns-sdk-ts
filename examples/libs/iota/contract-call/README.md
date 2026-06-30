# Iota rebased basic contract call

Demonstrates a very simple Iota contract call from a Dfns wallet using [Iota-sdk](https://docs.iota.org/ts-sdk/typescript/).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_APP_ID` = Dfns Application ID (grab one in Dfns Dashboard: `Settings` > `Applications`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `IOTA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `IOTA_RPC_URL` = an Iota RPC node to broadcast signed transaction

**note** _the wallet must have IOTA to pay for fees_

## Explanation

The program runs on the Iota rebased testnet. To execute the code, you will need a testnet wallet containing some IOTA. The program is designed to call a contract to write a message into a shared object.

```shell
> ts-node main.ts

Iota wallet:
 Id: wa-2l3v7-kiba0-8gs9cj4m8eteph0u
 address: 0x078f2345ee6ad9f7fe4a09f2fc74998ddbf0f185930b805e5592ade389b210b5

calling contract = 0x8e52c5bd5a915e45353f2c5087c299061e4cfd7cac659271e7da57d5fb920658, module = app, execute = write_message

transaction signed
transaction broadcasted: hash = DLBmXgmT4wdm5G1tBuhGHtp6fQ9coTic7YsdeWXy9JKo
```

This is the IOTA [transaction](https://explorer.rebased.iota.org/txblock/GahByG2wmUCYR8hJ9f3JC9FcqzHPkbaiB4FfezKGighb?network=testnet).
