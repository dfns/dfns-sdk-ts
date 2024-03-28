# Optimism Deposit

Adapted from Optimism's [bridge eth example](https://github.com/ethereum-optimism/optimism-tutorial/blob/main/cross-dom-bridge-eth/index.js).

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
- `ETHEREUM_WALLET_ID` = a Dfns Ethereum mainnet or testnet [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `OPTIMISM_WALLET_ID` = a Dfns Optimism mainnet or testnet wallet
- `ETHEREUM_NODE_URL` = an Ethereum mainnet or testnet RPC provider node you have access to
- `OPTIMISM_NODE_URL` = an Optimism mainnet or testnet RPC provider node you have access to

**note** _the wallet must have mannet or testnet ETH to deposit to Optimism and pay for gas_

## Explanation

The program runs on Ethereum and Optimism. To run the code on Sepolia testnets, you would need a [Ethereum Sepolia wallet](https://sepolia.etherscan.io/address/0xd964d741998edc275f3800eed113378a391951d9) that holds some SepoliaETH. The program will deposit `1` wei to a [Optimism Sepolia wallet](https://sepolia-optimism.etherscan.io/address/0x1b1a4685f87d9820c4f7671bd935ef9ece10c59d) with a different address.

```shell
> ts-node main.ts

Transaction hash (on L1): 0xd5319322edbc89ed9a2ea74f6116e84b7485bae679189c616276303fe0af300b
Waiting for status to change to RELAYED ⏳
ETH balance of the Optimism wallet has been updated from 0 to 1
```

This is the Ethereum Sepolia [L1 transaction](https://sepolia.etherscan.io/tx/0xd5319322edbc89ed9a2ea74f6116e84b7485bae679189c616276303fe0af300b) that initiated the deposit, and this is the Optimism Sepolia [L2 transaction](https://sepolia-optimism.etherscan.io/tx/0x95140c0d3f6b3173beb7d4b534422b6627d575bab0194645aa17066f1a4f578b) that completed the deposit.
