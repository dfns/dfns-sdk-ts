# Cardano basic transaction with Mesh and Blockfrost provider

Demonstrates a very simple ADA transfer from a Dfns wallet to itself. Dfns wallet uses the well known mesh lib and blockfrost as a provider.

See Blockfrost's [API Specification](https://blockfrost.dev/) and [Mesh documentation](https://meshjs.dev/apis/transaction) for a complete guide.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name
- Type of User, `Client Side`
- Relying Party = `localhost`
- Origin = `http://localhost:3000`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_APP_ORIGIN` = `http://localhost:3000`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `CARDANO_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `BLOCKFROST_PROJECT_ID` = the blockfrost project id. It will be used to derive Blockfrost URL as well


**note** _the wallet must have ADA to pay for fees_

## Explanation

In order to use the Mesh library and to build transaction easily, we need a mesh `IInitiator` to build transactions and a `ISubmiter` to submit transaction. We provide a class `meshWrapper` that implements both using Blockfrost as a provider.

The program runs on the Cardano Preprod network. To execute the code, you will need a testnet wallet containing some ADA. The program is designed to send 1 ADA from your wallet to itself.

```shell
> ts-node main.ts

cardano sender address: addr_test1vpdsl7yg2dnjhp92ph0q9z386neh9g3swvuq4l3fmtt8s0qlvcjk8
native transaction created
native transaction signed
transaction broadcasted: c9a2833922f1c1221d8ba007aad2e2910c9caeea995f41d4313ad8a95d2531ff
```

This is a [transaction](https://preprod.cardanoscan.io/transaction/77310c03f611cf00ceefd09ceeb00ae2aac72a93c07b415d18fbd852118ba59f?tab=utxo) for example.
