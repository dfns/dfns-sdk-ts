# Uniswap

Adapted from Uniswap's [trading example](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `ETHEREUM_NODE_URL` = an Ethereum Goerli RPC provider node you have access to

**note** _the wallet must have Goerli testnet ETH to trade and pay for gas_

## Explanation

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Goerli wallet](https://goerli.etherscan.io/address/0x1c19c099870c478f074b3b27e0d04b38d3379d27) that holds some GoerliETH. The program will convert `1000000` wei of GoerliETH to [Wrapped ETH](https://goerli.etherscan.io/token/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6), and then swap them for the official [testnet USDC](https://goerli.etherscan.io/token/0x07865c6e87b9f70255377e024ace6630c1eaa37f).

```shell
> ts-node main.ts

Convert ETH to WETH: 0x5d33e9e483ba632a64f69b05591df1245cee46c94ca1f4fb0b2d2a5185c19544
Approve Uniswap contract allowance: 0x4271f279b71284f6e6121c8355f733f00ddf008b9b8e67fe1f70ecbb18ae4743
Swapped WETH for USDC: 0xac8edab2abaf39826fa3c22086b749ec75f4bc54d78f1d7ff64f21214b0d8edf
```

This is a [transaction](https://goerli.etherscan.io/tx/0xac8edab2abaf39826fa3c22086b749ec75f4bc54d78f1d7ff64f21214b0d8edf) that traded the swap.
