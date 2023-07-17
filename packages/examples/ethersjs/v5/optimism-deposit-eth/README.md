# Optimism Deposit

Adapted from Optimism's [bridge eth example](https://github.com/ethereum-optimism/optimism-tutorial/blob/main/cross-dom-bridge-eth/index.js).

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
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Ethereum Goerli (L1)
- `OPTIMISM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Optimism Goerli (L2)
- `L1_RPC_PROVIDER_URL` = an Ethereum Goerli RPC provider node you have access to
- `L2_RPC_PROVIDER_URL` = an Optimism Goerli RPC provider node you have access to

**note** _the wallet must have Ethereum Goerli testnet ETH to deposit to Optimism and pay for gas_

## Explanation

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Ethereum Goerli wallet](https://goerli.etherscan.io/address/0x1c19c099870c478f074b3b27e0d04b38d3379d27) that holds some GoerliETH. The program will deposit `1000000` wei of GoerliETH to an separate [Optimism Goerli wallet](https://goerli-optimism.etherscan.io/address/0x8c8b4cd23f0dcefd2d6b5c142931ad8f7a434481) with a different address.

```shell
> ts-node main.ts

Transaction hash (on L1): 0x8a4c476e2ee8a806fdc11ee316348db45e2fd98b25fef98d31eed4037b172f11
Waiting for status to change to RELAYED ⏳
ETH balance of the L2 wallet has been updated from 0 to 1000000
```

Here's the Ethereum Goerli [L1 transaction](https://goerli.etherscan.io/tx/0x8a4c476e2ee8a806fdc11ee316348db45e2fd98b25fef98d31eed4037b172f11) that initiated the deposit, and this is the Arbitrum Goerli [L2 transaction](https://goerli-optimism.etherscan.io/address/0x8c8b4cd23f0dcefd2d6b5c142931ad8f7a434481) that completed the deposit.
