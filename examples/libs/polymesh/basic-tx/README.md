# Polymesh basic POLYX transfer

Demonstrates how to create a simple POLYX transfer using the DFNS Service Account Signing Manager for Polymesh.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = your DFNS organization ID
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYMESH_WALLET_ID` = (Optional) a specific Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `DFNS_USER_ID` = (Optional) a specific user ID to filter wallets by user
- `POLYMESH_NODE_URL` = a polymesh node url to initalise the polymesh SDK

**Note**:

- Specify either `POLYMESH_WALLET_ID` to use a specific wallet, or `DFNS_USER_ID` to filter by user, or leave both blank to use all available wallets
- The wallet must have POLYX to pay for fees and transfer

## Explanation

This example demonstrates the approach for using `DfnsServiceAccountSigningManager`. The program:

1. **Validates environment variables** - ensures all required configuration is present
2. **Creates a single signing manager instance** - using the `create()` method
3. **Automatically discovers wallets** - based on the wallet filter configuration
4. **Executes a simple transfer** - sends 0.000001 POLYX to a test recipient

The program runs on Polymesh Testnet and sends POLYX from your wallet to the address `5GDVGLrdAs4eVTi7rFzky68j64qYPgiu1JAoU1x3sYRABJjz`.

```shell
> ts-node main.ts

DFNS Service Account Signing Manager created
Number of available accounts: 1
First account address: 5Dgea5CttoSUGUyLW4AMcnYjTpfjNETQL7QEqdjtc3eeTzH7
Sending 0.000001 POLYX to recipient from account 5Dgea5CttoSUGUyLW4AMcnYjTpfjNETQL7QEqdjtc3eeTzH7
Transaction 0xc55b5dffe9bf83eed07db4986ae020990d9934903ff9fca95fe6aad7e8ba5ad9: Succeeded
```

This is a [transaction](https://polymesh-testnet.stg.subscan.io/extrinsic/0xc55b5dffe9bf83eed07db4986ae020990d9934903ff9fca95fe6aad7e8ba5ad9) for example.
