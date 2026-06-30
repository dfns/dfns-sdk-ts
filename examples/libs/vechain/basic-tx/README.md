# Vechain

See Vechain Connex's [API Specification](https://docs.vechain.org/connex/api-specification) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `VECHAIN_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `VECHAIN_NODE_URL` = a Vechain node you have access to

**note** _the wallet must have VTHO to pay for gas_

## Explanation

The program runs on Vechain testnet. In order to run the code, you would need a [KeyECDSA wallet](https://explore-testnet.vechain.org/accounts/0x255101c3df61ca961206e4adf436c4f0cf5a9bde/) that holds some VET and VTHO. The program will convert 1 VET to VTHO.

```shell
> ts-node main.ts

Vechain address: 0x255101c3df61ca961206e4adf436c4f0cf5a9bde
Pre balance: 1000000000000000000000
Pre energy: 98783490000000000000
Transaction signer: 0x255101c3df61ca961206e4adf436c4f0cf5a9bde
Transaction txid: 0x93176b088de43647a4eb961ce8496e6ff76d459cea6940514015fd699ec87338
Post balance: 1000000000000000000000
Post energy: 98783590000000000000
```

This is a [transaction](https://explore-testnet.vechain.org/transactions/0x93176b088de43647a4eb961ce8496e6ff76d459cea6940514015fd699ec87338#info) that swapped the tokens.
