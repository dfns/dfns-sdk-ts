# Base Deposit

Adapted from Base [deposit example](https://github.com/base-org/guides/blob/main/bridge/native/hardhat.config.js).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns Ethereum mainnet or tesetnet [wallet](https://docs.dfns.co/api-reference/wallets)
- `BASE_WALLET_ID` = a Dfns Base mainnet or testnet [wallet](https://docs.dfns.co/api-reference/wallets)
- `ETHEREUM_NODE_URL` = an Ethereum mainnet or testnet RPC provider node you have access to

**note** _the wallet must have mainnet or testnet ETH to deposit to Base and pay for gas_

## Explanation

The program runs on Ethereum and Base. To run the code on Sepolia testnet, you would need a [Ethereum Sepolia wallet](https://sepolia.etherscan.io/address/0xd964d741998edc275f3800eed113378a391951d9) that holds some SepoliaETH. The program will deposit 1 wei to a [Base Sepolia wallet](https://sepolia.basescan.org/address/0x416a2003ba6e8c2ee25816a8cbd09dca187049b3) with a different address.

```shell
> ts-node main.ts

Ethereum L1 sending address 0xD964D741998eDC275F3800eed113378a391951d9
Base L2 receiving address 0x416A2003ba6e8c2Ee25816A8cbd09DcA187049B3
Depositing 1 wei
Deposit L1 receipt is: 0x38434e48fd290247e0b5303966644db6e624eabc8c9c7670db9c45e77cc59c49
```

This is the Ethereum Sepolia [L1 transaction](https://sepolia.etherscan.io/tx/0x38434e48fd290247e0b5303966644db6e624eabc8c9c7670db9c45e77cc59c49) that initiated the deposit, and this is the Base Sepolia [L2 transaction](https://sepolia.basescan.org/tx/0x108b52b70ee9393d8082eaab13b08d124cb561a5c01ee52d9fde021de56c53d7) that completed the deposit.

To run the example on mainnet, update the `L1_BRIDGE` contract address to [0x3154Cf16ccdb4C6d922629664174b904d80F2C35](https://docs.base.org/base-contracts/#l1-contract-addresses).
