# Starknet basic transaction

Demonstrates a simple STRK token transfer from a Dfns wallet using [starknet.js](https://www.starknetjs.com/).

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings`
> `Service Accounts` > `New Service Account`, and enter the following information,

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
- `STARKNET_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID on `StarknetSepolia`
- `STARKNET_NODE_URL` = a Starknet Sepolia RPC node URL

**note** _the wallet must be activated and have STRK to pay for fees_

## Explanation

The program runs on Starknet Sepolia. It sends a small amount of STRK from the Dfns wallet to another address using the standard SNIP-2 transfer entrypoint.

```shell
> ts-node main.ts

Starknet wallet address: 0x0147ab9d3247fa3a7db3921e45b2a72b4739cce23100e79826f3a7e3bcdae0d3
Transferring 1 STRK (min decimals) to 0x0147ab...
Transaction hash: 0x1234...
Transaction confirmed