# Algorand asset transfer

Demonstrates a simple walkthrough for transferring USDC assets on the Algorand blockchain from a Dfns wallet to another address including an opt-in transaction and an opt-out transaction for the asset.

Dfns wallet implements the official algosdk library.

See algosdk's [API Specification](https://algorand.github.io/js-algorand-sdk/) for a complete guide.

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
- `ALGORAND_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `ALGORAND_RECEIVER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `ALGORAND_NODE_URL` = a algorand node url to broadcast the signed transaction

**note** _The sender wallet needs ALGO to cover fees. If the receiver hasn't opted in, we'll initiate an opt-in transaction (requires at least 0.1 ALGO in the receiver wallet). Finally, we'll opt-out for the asset._

## Explanation

The program runs on Algorand Testnet. In order to run the code, you would need two testnet wallets:
 - a sender wallet that holds some USDC.
 - a receiver wallet that must have at least 0.1 Algo if it didn't opt-in to the asset.
  
The program will send 1 USDC from one of your wallets to another one.

```shell
> ts-node main.ts

algorand receiver address: EWACQVBHSDU2IRTIHJIHOTAI3OT4R2AF4IWHUPLL3BKK42ROLS46WLNQQY
algorand sender address: MZR5RZ3YNFUVXIWP77DUVRX4N75UU2NTGQMGV2ITDUZI46YE5RS5IXRBDQ
receiver didn't optin for the asset... creating optin transction
transaction signed
optin transaction broadcasted: RX7OMCWOMHDZI64DP42DAPX3KPKSNPWEDZALERIRD6P3TCM5TNSQ
optin transaction confirmed
sending 1 USDC
transaction signed
USDC transfer broadcasted: NWHJG5LXTQKGFRNTIZYGZRW7KHMRN5SVYPIUMRGHSV6HAOUHG2HQ
opt-out for the asset
transaction signed
USDC optout broadcasted: ALP6WTZQVTMOW5DTBNIQMKBS5BAZ2RZTCNXC5HBTKUQFCABQNZQQ
optout transaction confirmed
```

This is a [transaction](https://testnet.explorer.perawallet.app/tx/M2CUMHCEEWC7W63ZZS65FZFZ3VDLGZH2YI5A364CRNHBLKXBF76A/) for example.
