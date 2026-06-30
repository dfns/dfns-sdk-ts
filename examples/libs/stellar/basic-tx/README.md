# Stellar basic transaction with official stellar sdk

Demonstrates a very simple XLM transfer from a Dfns wallet to itself using the stellar-sdk and Horizon API.

See stellar-sdk's [documentation](https://github.com/stellar/js-stellar-sdk) and [Horizon API's documentation](https://developers.stellar.org/network/horizon) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `STELLAR_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID


**note** _the wallet must have XLM to pay for fees_

## Explanation

The program runs on the Stellar testnet network. To execute the code, you will need a testnet wallet containing some XLM. The program is designed to send 0.00001 XLM from your wallet to itself.

```shell
> ts-node main.ts

stellar sender address: GD476HAUPLGM6K6QJPIA7KVEYJRZNNSHTICLLHWLIZQMLHDV4PLATYXY
native transaction signed
transaction broadcasted: 8320ad3f139945802e55659891a24ea77746fa67e6f6572837e73c6f9dff65c2
```

This is a [transaction](https://testnet.stellarchain.io/transactions/8320ad3f139945802e55659891a24ea77746fa67e6f6572837e73c6f9dff65c2) for example.
