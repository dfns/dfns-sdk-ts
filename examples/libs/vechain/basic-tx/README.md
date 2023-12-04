# Vechain

See Vechain Connex's [API Specification](https://docs.vechain.org/connex/api-specification) for a complete guide.

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
- `VECHAIN_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `VECHAIN_NODE_URL` = a Vechain node you have access to

**note** _the wallet must have VTHO to pay for gas_

## Explanation

The program runs on Vechain testnet. In order to run the code, you would need a [KeyECDSA wallet](https://explore-testnet.vechain.org/accounts/0x255101c3df61ca961206e4adf436c4f0cf5a9bde/) that holds some VET and VTHO. The program will convert 1 VET to VTHO.

```shell
> ts-node main.ts

Vechain address: 0x255101c3df61ca961206e4adf436c4f0cf5a9bde
Pre balance: 1000000000000000000000
Pre energy: 98783490000000000000
Transaction signer: 0x255101c3df61ca961206e4adf436c4f0cf5a9bde
Transaction txid: 0x93176b088de43647a4eb961ce8496e6ff76d459cea6940514015fd699ec87338
Post balance: 1000000000000000000000
Post energy: 98783590000000000000
```

This is a [transaction](https://explore-testnet.vechain.org/transactions/0x93176b088de43647a4eb961ce8496e6ff76d459cea6940514015fd699ec87338#info) that swapped the tokens.
