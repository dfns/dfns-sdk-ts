# Concordium basic transaction

Demonstrates a simple CCD transfer from a Dfns wallet using [@concordium/web-sdk](https://github.com/Concordium/concordium-node-sdk-js).

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
- `CONCORDIUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID on `ConcordiumTestnet`
- `CONCORDIUM_NODE_URL` = a Concordium testnet gRPC node URL

**note** _the wallet must be activated and have CCD to pay for fees_

## Explanation

The program runs on Concordium Testnet. It sends 1e-6 CCD from the Dfns wallet to another address.

```shell
> ts-node main.ts

Concordium wallet address: 4HhAcToZs6rtxGcgsBRS3VcjeAECPTTSTFVUKS6rBSVEZAPL6d
Transferring 1e-6 CCD to 4HhAcToZs6rtxGcgsBRS3VcjeAECPTTSTFVUKS6rBSVEZAPL6d
Transaction signed successfully
Transaction submitted: af1d28a33ebef1b6aae9b369c2d2855124de56f0379dd910950879f424867393

This is the CCD [transaction](https://ccdexplorer.io/testnet/transaction/af1d28a33ebef1b6aae9b369c2d2855124de56f0379dd910950879f424867393).