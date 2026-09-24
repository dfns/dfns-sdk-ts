# Cosmos Appchain basic transaction with CosmJS

Demonstrates a very simple Osmosis transfer from a Dfns wallet using [CosmJS](https://tutorials.cosmos.network/tutorials/7-cosmjs/).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `OSMOSIS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `OSMOSIS_RPC_URL` = an Osmosis RPC node to broadcast signed transaction

**note** _the wallet must have OSMO to pay for fees_

## Explanation

The program runs on the Osmosis testnet 5. To execute the code, you will need a testnet wallet containing some OSMO. The program is designed to send 0.000001 OSMO from the wallet to another address.

```shell
> ts-node main.ts

Osmosis wallet address: osmo13fymmayt0rzr6ma0qd9hjmqtt3pk7xw7shqfkp
connected to chain id: osmo-test-5
current balance:  [ { denom: 'uosmo', amount: '5000000' } ]
transaction hash: 23C94526C8A9F12B781D901EEE8EC7E9184F0FF4514E5E39B4BDA09D7E3C5026
balance after transfer:  [ { denom: 'uosmo', amount: '4999249' } ]
```

This is the Osmosis [transaction](https://www.mintscan.io/osmosis-testnet/tx/23C94526C8A9F12B781D901EEE8EC7E9184F0FF4514E5E39B4BDA09D7E3C5026?height=12004361).
