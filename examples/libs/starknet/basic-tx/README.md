# Basic Starknet Transfer

Demonstrates a basic Starknet token transfer using a Dfns wallet. Shows how to transfer ETH tokens from a Dfns-managed account to another Starknet address.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

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
- `STARKNET_WALLET_ID` = a Dfns Starknet [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `ACCOUNT_ADDRESS` = your deployed Starknet account address
- `RECIPIENT_ADDRESS` = the recipient Starknet address for the transfer

**note** _The Starknet account must have testnet ETH to transfer and pay for gas._

## Explanation

In order to run the program, you would need a deployed Starknet account with testnet ETH balance. The program will transfer 0.001 ETH to the specified recipient address.

The transfer uses the standard ETH token contract on Starknet:
- Contract Address: `0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7`
- Network: Starknet Sepolia Testnet

## Getting Testnet ETH

You can get testnet ETH for Starknet Sepolia from:
- [Starknet Faucet](https://faucet.goerli.starknet.io/)

## Run

```bash
npm install
npm run start
```