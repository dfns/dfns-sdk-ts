# Pimlico Account Abstraction Gasless Transaction

Adapted from Pimlico's [how to create and use a SimpleAccount](https://docs.pimlico.io/permissionless/how-to/accounts/use-simple-account). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

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
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
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
