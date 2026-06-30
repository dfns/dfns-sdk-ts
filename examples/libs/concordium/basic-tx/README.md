# Concordium basic transaction

Demonstrates a simple CCD transfer from a Dfns wallet using [@concordium/web-sdk](https://github.com/Concordium/concordium-node-sdk-js).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `CONCORDIUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID on `ConcordiumTestnet`
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