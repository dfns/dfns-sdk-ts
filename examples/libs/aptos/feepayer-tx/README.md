# Aptos sponsored transaction with aptos sdk

Demonstrates a sponsored APTOS transfer from a Dfns wallet using the aptos sdk.

See aptos sdk's [documentation](https://aptos.dev/en/build/sdks/ts-sdk) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = your Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `APTOS_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `APTOS_FEE_PAYER_WALLET_ID` = a Dfns [fee payer wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** both wallets must have APT to pay for fees_

## Explanation

The program runs on the APTOS testnet. To execute the code, you will need to fund the wallets with some testnet tokens.

```shell
> ts-node main.ts

sender address:  0xc41bb642f85e26b0e71d9d82bcb96cf2ac94a1ccfdb35b7fee1d4a57390a32c8
feepayer address:  0x66bcf6b7eeb7c23351d3d5c831911530377aa74eaed40a00d535832116aa1c4d
initial sender balance: 99899500, feepayer balance: 109999999
building fee payer transaction
sender signed the transaction
fee payer signed the transaction
transaction broadcasted: 0x687bf8e447e0ee42e09f554cfc26b6e742f3530514d5b8d30b2cf83852baa85c
final sender balance: 99899499, feepayer balance: 109999299
```

This is the transfer [transaction](https://explorer.aptoslabs.com/txn/6525501670?network=testnet).
