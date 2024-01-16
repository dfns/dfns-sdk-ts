# Arbitrum Deposit

Adapted from Arbitrum's [deposit example](https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/eth-deposit-to-different-address/scripts/exec.js).

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
- `ETHEREUM_WALLET_ID` = a Dfns Ethereum mainnet or testnet [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `ARBITRUM_WALLET_ID` = a Dfns Arbitrum mainnet or testnet wallet
- `ETHEREUM_NODE_URL` = an Ethereum mainnet or testnet RPC provider node you have access to
- `ARBITRUM_NODE_URL` = an Arbitrum mainnet or testnet RPC provider node you have access to

**note** _the wallet must have mainnet or testnet ETH to deposit to Arbitrum and pay for gas_

## Explanation

The program runs on Ethereum and Arbitrum. To run the code on Sepolia testnets, you can create a [Ethereum Sepolia wallet](https://sepolia.etherscan.io/address/0xd964d741998edc275f3800eed113378a391951d9) that holds some SepoliaETH. The program will deposit `1` wei to an [Arbitrum Sepolia wallet](https://sepolia.arbiscan.io/address/0x8898b9c9c6323733643c14e10ab66cdb120f4491) with a different address.

```shell
> ts-node main.ts

Deposit L1 receipt is: 0xe5e5d13c8a55b210f27d87c69df69dbeb5aa67c9e2ee2e4eed15e8232db60b47
Now we wait for L2 side of the transaction to be executed ⏳
L2 message successful: status: undefined
ETH balance of the Arbitrum wallet has been updated from 24997899999999999 to 24997900000000000
```

This is the Ethereum Sepolia [L1 transaction](https://sepolia.etherscan.io/tx/0xe5e5d13c8a55b210f27d87c69df69dbeb5aa67c9e2ee2e4eed15e8232db60b47) that initiated the deposit, and this is the Arbitrum Sepolia [L2 transaction](https://sepolia.arbiscan.io/tx/0x5b76a208b07d8d131a9618f4780280b32188c3e0f567fb5d4176e46794ffb1d0) that completed the deposit.

The Arbitrum L2 transaction can take between 10 to 20 minutes to confirm on chain. Be patient.
