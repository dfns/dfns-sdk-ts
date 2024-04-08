# Stellar basic transaction with official stellar sdk

Demonstrates a very simple XLM transfer from a Dfns wallet to itself using the stellar-sdk and Horizon API.

See stellar-sdk's [documentation](https://github.com/stellar/js-stellar-sdk) and [Horizon API's documentation](https://developers.stellar.org/network/horizon) for a complete guide.

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
- `CARDANO_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `BLOCKFROST_PROJECT_ID` = the blockfrost project id. It will be used to derive Blockfrost URL as well


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
