# Aptos sponsored transaction with aptos sdk

Demonstrates a sponsored APTOS transfer from a Dfns wallet using the aptos sdk.

See aptos sdk's [documentation](https://aptos.dev/en/build/sdks/ts-sdk) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = your Dfns Organisation ID (found in Dashboard > Profile)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `APTOS_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `APTOS_FEE_PAYER_WALLET_ID` = a Dfns [fee payer wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID

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
