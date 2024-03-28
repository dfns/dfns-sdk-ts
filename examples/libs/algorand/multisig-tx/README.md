# Algorand multisig transaction

Demonstrates a transfer to a multisig address owned by two of ours wallet to itself. Dfns wallet implements the official algosdk library.

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
- `ALGORAND_WALLET_ID_1` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `ALGORAND_WALLET_ID_2` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `ALGORAND_NODE_URL` = a algorand node url to broadcast the signed transaction

**note** _the multisig address must have ALGO to pay for fees_

## Explanation

The program runs on Algorand Testnet. In order to run the code, you would need 2 testnet wallets that owned a multisig address with some ALGOs in it. The program will send 0.1 ALGO from this multisig wallet to itself.

```shell
> ts-node main.ts

first algorand address: MZR5RZ3YNFUVXIWP77DUVRX4N75UU2NTGQMGV2ITDUZI46YE5RS5IXRBDQ
second algorand address: EWACQVBHSDU2IRTIHJIHOTAI3OT4R2AF4IWHUPLL3BKK42ROLS46WLNQQY
Created MultiSig Address:  3V6PXCCW3IM5BVJS5SVFMJXWEELTZDDR7NXN4CGI5B2IY2M4LFRTURV2Q4
native transaction signed by wallet 1
native transaction signed by wallet 2
transaction submitted: PEKMYV7IJD47DAQPOPAGFQIYSBFZ3BBCNINGNCH2NDG7XM3E6UKA
```

This is a [transaction](https://testnet.explorer.perawallet.app/tx/PEKMYV7IJD47DAQPOPAGFQIYSBFZ3BBCNINGNCH2NDG7XM3E6UKA/) for example.
