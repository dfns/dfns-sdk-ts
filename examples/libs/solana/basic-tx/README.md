# Basic Solana transfer

Demonstrates a very simple Solana transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.

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
- `SOLANA_WALLET_ID` = a Dfns Solana [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID

**note** _The Solana wallet must have devnet SOL to transfer and pay for gas._

## Explanation

In order to run the program, you would need a Dfns [Solana devnet wallet](https://explorer.solana.com/address/CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16?cluster=devnet). The program will transfer 0.1 SOL to another address.

```shell
> ts-node main.ts

Solana wallet address: CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16
Current balance: 899985000
Sending 100000000 lamports to D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT
Transaction signature: 2TNj6kakEUBvodnvqX1AVrRLbrHU9qK861wFqUWzzkkViPVNMRRpPyrBFLTRMVzd4MnwKDMT5pTrQ28qGQWFk6nq
New balance: 799980000
```

This is the Solana devnet [transaction](https://explorer.solana.com/tx/2TNj6kakEUBvodnvqX1AVrRLbrHU9qK861wFqUWzzkkViPVNMRRpPyrBFLTRMVzd4MnwKDMT5pTrQ28qGQWFk6nq?cluster=devnet).
