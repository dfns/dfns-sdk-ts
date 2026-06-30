# Ton basic transaction with ton sdk

Demonstrates a very simple TON transfer from a Dfns wallet to itself using the ton sdk and orbs as a provider.

See ton sdk's [documentation](https://github.com/ton-core/ton) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `TON_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** _the wallet must have TON to pay for fees_

## Explanation

The program runs on the TON testnet. It uses the [wallet v5 contract](https://docs.ton.org/participate/wallets/contracts#wallet-v5), but you can use any TON wallet contract. To execute the code, you will need to fund the wallet with some testnet tokens.

```shell
> ts-node main.ts

wallet address:  0QAXh03SUULqKi-6875HYA3SPJB5APqX8R0tGynQUEXKKmGg
current balance:  2000000000n
balance after transfer:  1994129596n
```

This is the transfer [transaction](https://testnet.tonscan.org/tx/jsySLCEPmZpWxyeXGSdGcWhkGKxfSbF-XP1n5omY4nI=).
