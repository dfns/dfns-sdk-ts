# Polymesh basic POLYX transfer

Demonstrates a very simple polymesh transfer. `DfnsWallet` implements the official [polkadot signer interface](https://github.com/polkadot-js/api/blob/3f73f4dbf5b5666838b09e022b22c9b6f5a5520b/packages/types/src/types/extrinsic.ts#L168) and we
provide a `DfnsSigningManager` implementing the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types)

See polymesh's [documentation](https://developers.polymesh.network/docs/) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = Dfns Application ID (grab one in Dfns Dashboard: `Settings` > `Applications`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYMESH_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLYMESH_NODE_URL` = a polymesh node url to initalise the polymesh SDK

**note** _the wallet must have POLYX to pay for fees and transfer_

## Explanation

The program runs on Polymesh Testnet. To execute the code, you will need a testnet wallet containing some POLYX. The program is designed to send 0.000001 POLYX from your wallet to the address `5GDVGLrdAs4eVTi7rFzky68j64qYPgiu1JAoU1x3sYRABJjz`.

```shell
> ts-node main.ts

Polymesh wallet address: 5Dgea5CttoSUGUyLW4AMcnYjTpfjNETQL7QEqdjtc3eeTzH7
Polymesh signing manager created
Sending 1 in minimal decimal representation of PolyX.
transaction 0xc55b5dffe9bf83eed07db4986ae020990d9934903ff9fca95fe6aad7e8ba5ad9: Succeeded
```

This is a [transaction](https://polymesh-testnet.stg.subscan.io/extrinsic/0xc55b5dffe9bf83eed07db4986ae020990d9934903ff9fca95fe6aad7e8ba5ad9) for example.
