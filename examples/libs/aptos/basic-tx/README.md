# Aptos basic transaction with aptos sdk

Demonstrates a very simple APTOS transfer from a Dfns wallet using the aptos sdk.

See aptos sdk's [documentation](https://aptos.dev/en/build/sdks/ts-sdk) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = your Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `APTOS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** _the wallet must have APT to pay for fees_

## Explanation

The program runs on the APTOS testnet. To execute the code, you will need to fund the wallet with some testnet tokens.

```shell
> ts-node main.ts

wallet address:  0xc41bb642f85e26b0e71d9d82bcb96cf2ac94a1ccfdb35b7fee1d4a57390a32c8
initial wallet balance:  100000000
balance after transfer:  99999299
```

This is the transfer [transaction](https://explorer.aptoslabs.com/txn/6523813704?network=testnet).
