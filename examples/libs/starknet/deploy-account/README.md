# Starknet Account Deployment

Demonstrates how to deploy a new Starknet account contract using Dfns signing. This example shows the complete process of calculating account addresses, checking deployment status, and executing account deployment transactions.

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

**note** _You will need to fund the calculated account address with testnet ETH before deployment._

## Explanation

This program demonstrates Starknet account deployment using the "pre-funded" model:

1. **Address Calculation**: The account address is calculated deterministically using:
   - OpenZeppelin Account class hash
   - Your wallet's public key
   - A random salt

2. **Pre-funding**: Before deployment, the calculated address must be funded with ETH for deployment fees

3. **Deployment**: The account contract is deployed using a `DEPLOY_ACCOUNT` transaction

The deployment uses OpenZeppelin Account contract (v0.8.1):
- Class Hash: `0x061dac032f228abdf9c2ec0d0336610cbc3abf7b9b8b65a8f17d99c6f4dd8b4e`
- Network: Starknet Sepolia Testnet

## Account Deployment Process

1. Run the script once to get the calculated account address
2. Fund that address with testnet ETH (minimum ~0.01 ETH recommended)
3. Run the script again to deploy the account

## Getting Testnet ETH

You can get testnet ETH for Starknet Sepolia from:
- [Starknet Faucet](https://faucet.goerli.starknet.io/)

Send the ETH to the calculated account address shown by the script.

## Run

```bash
npm install
npm run start
```