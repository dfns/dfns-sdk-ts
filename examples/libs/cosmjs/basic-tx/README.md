# Cosmos Appchain basic transaction with CosmJS

Demonstrates a very simple Osmosis transfer from a Dfns wallet using [CosmJS](https://tutorials.cosmos.network/tutorials/7-cosmjs/).

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
- `OSMOSIS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `OSMOSIS_RPC_URL` = an Osmosis RPC node to broadcast signed transaction

**note** _the wallet must have OSMO to pay for fees_

## Explanation

The program runs on the Osmosis testnet 5. To execute the code, you will need a testnet wallet containing some OSMO. The program is designed to send 0.000001 OSMO from the wallet to another address.

```shell
> ts-node main.ts

Osmosis wallet address: osmo13fymmayt0rzr6ma0qd9hjmqtt3pk7xw7shqfkp
connected to chain id: osmo-test-5
current balance:  [ { denom: 'uosmo', amount: '5000000' } ]
transaction hash: 23C94526C8A9F12B781D901EEE8EC7E9184F0FF4514E5E39B4BDA09D7E3C5026
balance after transfer:  [ { denom: 'uosmo', amount: '4999249' } ]
```

This is the Osmosis [transaction](https://www.mintscan.io/osmosis-testnet/tx/23C94526C8A9F12B781D901EEE8EC7E9184F0FF4514E5E39B4BDA09D7E3C5026?height=12004361).
