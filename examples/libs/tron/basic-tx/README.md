# Basic Tron transfer

Demonstrates a very simple Tron transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial`
- Application Type, leave as the default `Default Application`
- Relying Party, the value doesn't apply to a service account, you can set it to `localhost`
- Origin, also doesn't apply to a service account, you can set it to `http://localhost`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `TRON_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `TRON_NODE_URL` = a Tron Nile full node you have access to

**note** _the wallet must have NileTRX to transfer and pay for gas_

## Explanation

In order to run the program, you would need a Dfns [Tron Nile wallet](https://nile.tronscan.org/#/address/TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN). The program will transfer 0.001 TRX to another address.

```shell
> ts-node main.ts

Tron wallet address: TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN
Transaction txID: b22c1409ca3aa614de1f5b6cef04685a5897bf975e2504c58c883e31b4f3d233
Transaction broadcasted: true
```

This is the Tron Nile [transaction](https://nile.tronscan.org/#/transaction/b22c1409ca3aa614de1f5b6cef04685a5897bf975e2504c58c883e31b4f3d233).
