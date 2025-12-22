# Polymesh Native Assets manipulation

Demonstrates a native asset transfer. `DfnsWallet` implements the official [polkadot signer interface](https://github.com/polkadot-js/api/blob/3f73f4dbf5b5666838b09e022b22c9b6f5a5520b/packages/types/src/types/extrinsic.ts#L168) and we
provide a `DfnsSigningManager` implementing the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types)

See polymesh's [documentation](https://developers.polymesh.network/docs/originate/sdk/) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYMESH_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLYMESH_RECEIVER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLYMESH_NODE_URL` = a polymesh node url to initialise the polymesh SDK
- `POLYMESH_ASSET_TICKER` = the ticker of the asset you want to transfer

**note** _the wallet must have POLYX to pay for fees and enough assets to transfer_

## Explanation

The program runs on Polymesh Testnet. To execute the code, you will need a testnet wallet containing some POLYX. The program is designed to retrieve a specific native assets given its ticker. If the asset doesn't exist
we will create it and issue some tokens.
Then, we demonstrate a simple native asset transfer between to DFNS wallet. Native assets transfer is a multi-step process:

1) Create Venue
2) Create Transfer Instruction in this venue
3) Sender auto-approve (automatic)
4) Receiver approve (can check the leg beforehand)

```shell
> ts-node main.ts

Polymesh wallet address for wa-71pbg-fmfts-9f08r0hmlp545uhh: 5EDw9Zwbi7oM5Q2eLPDwWAtByhznw2nT6ayeRxDmvV7mXmFs
Polymesh wallet address for wa-9ihs3-sihp9-pdrnokmdl7adqra: 5CmmAxfVsgacGAStwaTDP7ZvNnMRnBvMUBMJG6XSEgso9MM9
Asset with given ticker not found... creating it
Reserving ticker: DFNSTEST
Creating asset
Asset created
Issuing Tokens for this asset
Tokens issued
Transferring some tokens to receiver
creating venue
venue created
create instruction
instruction created
Receiver affirmation
Receiver affirmed
```

This is on the sender side:
- [ticker creation](https://polymesh-testnet.stg.subscan.io/extrinsic/0x77f367d605df0ba59849cda3d817f265d47941be31d0bf37992d688bd999dee5)
- [Asset Issued](https://polymesh-testnet.stg.subscan.io/extrinsic/0xe79ff2b4d8aebf8d25fcc5a32e59d85ad55010aae4016bf8906a07da9d5dfdda)
- [Create Venue](https://polymesh-testnet.stg.subscan.io/extrinsic/0x2a65de5df9692dc33af068cc4e576aa9bab9b3bc65a1afc03e28bcc3efa2cf50)
- [Add and Affirm instruction](https://polymesh-testnet.stg.subscan.io/extrinsic/0x7c09ea9fb15c3748dc8e8fe4d234892d747d9e977ec0aaf681f098408975c06f)

on the receiver side:
- [Affirm instruction](https://polymesh-testnet.stg.subscan.io/extrinsic/19187363-1)
