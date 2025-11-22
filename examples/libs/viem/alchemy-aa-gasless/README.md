# Alchemy Account Abstraction Gasless Transaction

Adapted from Alchemy's [sponsor gas example](https://accountkit.alchemy.com/using-smart-accounts/sponsoring-gas/gas-manager.html). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

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
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `ALCHEMY_API_KEY` = Alchemy API key for Sepolia, can be created in the [Alchemy dashboard](https://dashboard.alchemy.com/)
- `ALCHEMY_GAS_POLICY_ID` = Gas manager policy ID, follow Alchemy's guide on [how to set one up](https://docs.alchemy.com/docs/setup-a-gas-manager-policy)

## Explanation

In order to run the program, you would need a Dfns Sepolia wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://sepolia.etherscan.io/address/0x5b477dc7ce2b04baa86b917c9959012c40e81746) is not funded and cannot pay for gas. Instead it uses the gas manager to sponsor a gasless transaction to mint new tokens.

```shell
> ts-node main.ts

Smart account address: 0x5b477Dc7ce2b04BAa86b917C9959012C40E81746
User operation hash: 0x82eab109825d59e572bc07c80830c620e4b2ba1817c43883f64626c3a6217162
Transaction hash: 0xd4efa8781506f905a434bc03bedf6e4701179c4b405487ee117ae3de29ea62e7
```

This is the Ethereum Sepolia [user operation](https://jiffyscan.xyz/userOpHash/0x82eab109825d59e572bc07c80830c620e4b2ba1817c43883f64626c3a6217162?network=sepolia) and the [transaction](https://sepolia.etherscan.io/tx/0xd4efa8781506f905a434bc03bedf6e4701179c4b405487ee117ae3de29ea62e7) that minted the tokens.
