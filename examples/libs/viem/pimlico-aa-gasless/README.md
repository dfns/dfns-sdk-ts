# Pimlico Account Abstraction Gasless Transaction

Adapted from Pimlico's [how to create and use a SimpleAccount](https://docs.pimlico.io/permissionless/how-to/accounts/use-simple-account). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets)
- `ETHEREUM_NODE_URL` = an Ethereum mainnet or testnet RPC provider node you have access to
- `PIMLICO_API_KEY` = Pimlico API key, can be created in the [Pimlico dashboard](https://dashboard.pimlico.io/)

## Explanation

In order to run the program, you would need a Dfns Sepolia wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://sepolia.etherscan.io/address/0x6a607212473d262ed65bfd1b894b02b68548b338) is not funded and cannot pay for gas. Instead it uses the paymaster to sponsor a gasless transaction to mint new tokens.

```shell
> ts-node main.ts

Smart account address: 0x6A607212473D262eD65BFd1B894b02B68548b338
Transaction hash: 0x29369cfbce28fbead99a8740b9f75872334bb115735952ac1f6262ffd296f108
```

This is the Ethereum Sepolia [user operation](https://jiffyscan.xyz/userOpHash/0x176274c5a5ae68c285e1b959a1fa20855c7ae524515ec4f32a60f156a670db07?network=sepolia) and the [transaction](https://sepolia.etherscan.io/tx/0x29369cfbce28fbead99a8740b9f75872334bb115735952ac1f6262ffd296f108) that minted the tokens.
