# Biconomy Account Abstraction Gasless Transaction

Adapted from Biconomy's [send a gasless transaction](https://docs.biconomy.io/tutorials/sendGasless). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets)
- `BICONOMY_API_KEY` = Biconomy API key for the paymaster, follow Biconomy's guide on [create a paymaster](https://docs.biconomy.io/dashboard/paymaster)

## Explanation

In order to run the program, you would need a Dfns Ethereum Sepolia wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://sepolia.etherscan.io/address/0x47cca03E330149dc23AFCFfd5F35695a2520d3fc) is not funded and cannot pay for gas. Instead it uses the paymaster to sponsor a gasless transaction to mint new tokens.

```shell
> ts-node main.ts

Smart account address: 0x47cca03E330149dc23AFCFfd5F35695a2520d3fc
User operation hash: 0xa7e7ebeb2d0f12878034adef681f452f7e0226898d7671defe749f5fd79c6762
Transaction hash: 0x5a3ff714360dbded7fb9cdab0036186347caf37afed6ef36494a4d67324a3090
```

This is the Ethereum Sepolia [user operation](https://jiffyscan.xyz/userOpHash/0xa7e7ebeb2d0f12878034adef681f452f7e0226898d7671defe749f5fd79c6762?network=sepolia) and the [transaction](https://sepolia.etherscan.io/tx/0x5a3ff714360dbded7fb9cdab0036186347caf37afed6ef36494a4d67324a3090) that minted the tokens.
