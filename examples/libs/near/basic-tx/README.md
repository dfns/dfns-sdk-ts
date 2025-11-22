# NEAR basic transaction

Demonstrates a very simple NEAR transfer from a Dfns wallet to another address. Dfns wallet implements the official NEAR library.

See NEAR's [API Specification](https://docs.near.org/tools/near-api) for a complete guide.

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
- `NEAR_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `NEAR_NODE_URL` = a NEAR node url to broadcast the signed transaction

**note** _the wallet must have NEAR to pay for fees and transfer_

## Explanation

The program runs on NEAR Testnet. To execute the code, you will need a testnet wallet containing some NEAR. The program is designed to send 1 NEAR from your wallet to a test address.

```shell
> ts-node main.ts

Sending 1 NEAR to test address
Transaction submitted with hash Fab2yiAfF24An69sN2iuwrhPVyG3WVPLWu183inrgqMm
```

This is a [transaction](https://testnet.nearblocks.io/txns/Fab2yiAfF24An69sN2iuwrhPVyG3WVPLWu183inrgqMm) for example.
