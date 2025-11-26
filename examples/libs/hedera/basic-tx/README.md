# Basic Hedera transfer

Demonstrates a very simple Hedera transfer from a Dfns wallet to another account. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = Dfns Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `HEDERA_WALLET_ID` = a Dfns Hedera [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID

**note** _The Hedera wallet must have testnet HBAR to transfer and pay for gas._

## Explanation

In order to run the program, you would need a Dfns [Hedera testnet wallet](https://hashscan.io/testnet/account/0.0.6862141). The program will transfer 1 tℏ to another account.

```shell
> ts-node main.ts

Hedera wallet account ID: 0.0.6862141
transferring 1 tℏ from wallet 0.0.6862141 to 0x956fbb0c88b3c597d4afdbab3e26939051ff6725
creating transfer transaction...
signing and executing transfer transaction...
transaction executed. txId: 0.0.6862141@1758116522.512147680
```

This is the Hedera testnet [transaction](https://hashscan.io/testnet/transaction/1758116529.504053000).
