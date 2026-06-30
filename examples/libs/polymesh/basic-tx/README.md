# Polymesh basic POLYX transfer

Demonstrates a very simple polymesh transfer. `DfnsWallet` implements the official [polkadot signer interface](https://github.com/polkadot-js/api/blob/3f73f4dbf5b5666838b09e022b22c9b6f5a5520b/packages/types/src/types/extrinsic.ts#L168) and we
provide a `DfnsSigningManager` implementing the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types)

See polymesh's [documentation](https://developers.polymesh.network/docs/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `POLYMESH_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `POLYMESH_NODE_URL` = a polymesh node url to initialise the polymesh SDK

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
