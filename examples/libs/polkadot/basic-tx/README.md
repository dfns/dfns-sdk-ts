# Polkadot basic transaction

Demonstrates a very simple polkadot transfer from a Dfns wallet to another address. Dfns wallet implements the official polkadot library.

See polkadot's [API Specification](https://polkadot.js.org/docs/api/start/typescript/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `POLKADOT_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `POLKADOT_NODE_URL` = a polkadot node url to broadcast the signed transaction

**note** _the wallet must have DOT/WND to pay for fees and transfer_

## Explanation

The program runs on Polkadot Westend. To execute the code, you will need a testnet wallet containing some WND. The program is designed to send 1 WND from your wallet to the address `5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ`.

```shell
> ts-node main.ts

Sending 1 DOT to the address 5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ
Transaction submitted with hash 0xcc2fdce6204337d28073a779108956c1b17c5e8b4e26c80ae493fb06ebc52fe8
```

This is a [transaction](https://westend.subscan.io/extrinsic/0xcc2fdce6204337d28073a779108956c1b17c5e8b4e26c80ae493fb06ebc52fe8) for example.
