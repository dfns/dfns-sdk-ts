# NEAR basic transaction

Demonstrates a very simple NEAR transfer from a Dfns wallet to another address. Dfns wallet implements the official NEAR library.

See NEAR's [API Specification](https://docs.near.org/tools/near-api) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `NEAR_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `NEAR_NODE_URL` = a NEAR node url to broadcast the signed transaction

**note** _the wallet must have NEAR to pay for fees and transfer_

## Explanation

The program runs on NEAR Testnet. To execute the code, you will need a testnet wallet containing some NEAR. The program is designed to send 1 NEAR from your wallet to a test address.

```shell
> ts-node main.ts

Sending 1 NEAR to test address
Transaction submitted with hash Fab2yiAfF24An69sN2iuwrhPVyG3WVPLWu183inrgqMm
```

This is a [transaction](https://testnet.nearblocks.io/txns/Fab2yiAfF24An69sN2iuwrhPVyG3WVPLWu183inrgqMm) for example.
