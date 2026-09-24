# Algorand basic transaction

Demonstrates a very simple algorand transfer from a Dfns wallet to itself. Dfns wallet implements the official algosdk library.

See algosdk's [API Specification](https://algorand.github.io/js-algorand-sdk/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ALGORAND_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `ALGORAND_NODE_URL` = a algorand node url to broadcast the signed transaction

**note** _the wallet must have ALGO to pay for fees_

## Explanation

The program runs on the Algorand Testnet. To execute the code, you will need a testnet wallet containing some ALGO. The program is designed to send 0.1 ALGO from your wallet to itself.

```shell
> ts-node main.ts

algorand sender address: MZR5RZ3YNFUVXIWP77DUVRX4N75UU2NTGQMGV2ITDUZI46YE5RS5IXRBDQ
sending 0.1 ALGO to ourself
native transaction signed
transaction submitted: 64EZRGIPWCNP2FL74RUYRLO6UL2OQHHEAP3P33XLRMQCRVH2KH5Q
```

This is a [transaction](https://testnet.explorer.perawallet.app/tx/64EZRGIPWCNP2FL74RUYRLO6UL2OQHHEAP3P33XLRMQCRVH2KH5Q/) for example.
