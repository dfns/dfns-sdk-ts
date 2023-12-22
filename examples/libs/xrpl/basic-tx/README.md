# Ripple

Demonstrates a very simple Ripple transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet. Dfns wallet implements the official xrpl.js library.

See Ripple's [API Specification](https://xrpl.org/references.html) for a complete guide.

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
- `RIPPLE_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `RIPPLE_NODE_URL` = a Ripple WebSocket node to broadcast the signed transaction

**note** _the wallet must have XRP to pay for fees_

## Explanation

The program runs on Ripple Testnet. In order to run the code, you would need a ripple Testnet wallet that holds some XRP. The program will send 0.10 XRP from your wallet to a specific address.

```shell
> ts-node main.ts

ripple sender address: rabGZDAR7rQEN8uw6gjGmNXdGR34bVS14C
prepared transaction: { xxxxxx }
transaction signed
transaction submitted: 24F2296AE473F0BD3302621E0E667F5060311C12DBDBB015917BB673DDC834B7
```


This is a [transaction](https://testnet.xrpl.org/transactions/5DF5D272B09C92A01C9780A3DD21321650920E69CDBFE35A68F402F58364393E) for example.
