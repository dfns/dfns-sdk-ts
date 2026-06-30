# Basic Tezos Transfer with Taquito

Demonstrates a very simple Tezos transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet. Dfns wallet implements the taquito signer interface, making it discrete and easy to use.

See Taquito's [Utils/API Specification](https://tezostaquito.io/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `TEZOS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID


**note** _the wallet must have XTZ to pay for fees_

## Explanation

The program runs on Tezos Ghostnet. In order to run the code, you would need a Tezos Ghostnet wallet wallet that holds some XTZ. The program will send 1 ꜩ from your wallet to a specific address.

```shell
> ts-node main.ts

Tezos sender address: tz1cLjHTxZNnAZeMFyVYUmrgiE4ibftKw3P6

Operations pushed: { ... }

Waiting for confirmations....

Operation opxxxx confirmed
```

This is a [transaction](https://ghost.tzstats.com/ooCAHmbNYEc2yvaarx35N1xbEo4P31ekSGWHZCivVDkS4Vz2uDG) for example.
