# Alchemy Account Abstraction Gasless Transaction

Adapted from Alchemy's [sponsor gas example](https://accountkit.alchemy.com/guides/sponsoring-gas.html). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

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
- `SEPOLIA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `ALCHEMY_SEPOLIA_KEY` = Alchemy API key for Sepolia, can be created in the [Alchemy dashboard](https://dashboard.alchemy.com/)
- `ALCHEMY_GAS_POLICY_ID` = Gas manager policy ID, follow Alchemy's guild on [how to set one up](https://docs.alchemy.com/docs/setup-a-gas-manager-policy)

## Explanation

In order to run the program, you would need a Dfns wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://sepolia.etherscan.io/address/0x9ecC1C59E1F6C6e0671CcF7Daf76CB2ccEC3b72C) is not funded and cannot pay for gas. Instead it uses the gas manager to sponsor a gasless transaction to mint a token.

```shell
> ts-node main.ts

Smart account address: 0x9ecC1C59E1F6C6e0671CcF7Daf76CB2ccEC3b72C
User operation hash: 0xd747e34a340cddf8fa106424a5304adaa7af3ed52405a08bd083c3ff64edead7
Transaction: https://sepolia.etherscan.io/tx/0x1d53703c069b65ebbec96a3b41d1e186377f8385545d581acc2352a447bc4837
```

This is the Ethereum Sepolia [transaction](https://sepolia.etherscan.io/tx/0x1d53703c069b65ebbec96a3b41d1e186377f8385545d581acc2352a447bc4837) that minted the token.
