# Cardano basic transaction with Mesh and Blockfrost provider

Demonstrates a very simple ADA transfer from a Dfns wallet to itself. Dfns wallet uses the well known mesh lib and blockfrost as a provider.

See Blockfrost's [API Specification](https://blockfrost.dev/) and [Mesh documentation](https://meshjs.dev/apis/transaction) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `CARDANO_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `BLOCKFROST_PROJECT_ID` = the blockfrost project id. It will be used to derive Blockfrost URL as well


**note** _the wallet must have ADA to pay for fees_

## Explanation

In order to use the Mesh library and to build transaction easily, we need a mesh `IInitiator` to build transactions and a `ISubmiter` to submit transaction. We provide a class `meshWrapper` that implements both using Blockfrost as a provider.

The program runs on the Cardano Preprod network. To execute the code, you will need a testnet wallet containing some ADA. The program is designed to send 1 ADA from your wallet to itself.

```shell
> ts-node main.ts

cardano sender address: addr_test1vpdsl7yg2dnjhp92ph0q9z386neh9g3swvuq4l3fmtt8s0qlvcjk8
native transaction created
native transaction signed
transaction broadcasted: c9a2833922f1c1221d8ba007aad2e2910c9caeea995f41d4313ad8a95d2531ff
```

This is a [transaction](https://preprod.cardanoscan.io/transaction/77310c03f611cf00ceefd09ceeb00ae2aac72a93c07b415d18fbd852118ba59f?tab=utxo) for example.
