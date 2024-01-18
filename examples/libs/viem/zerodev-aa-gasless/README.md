# ZeroDev Account Abstraction Gasless Transaction

Adapted from ZeroDev's [gasless transaction example](https://docs.zerodev.app/getting-started#send-gasless-transactions). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

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
- `POLYGON_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `POLYGON_NODE_URL` = a Polygon Mumbai RPC provider node you have access to
- `ZERODEV_PROJECT_ID` = ZeroDev project ID, follow ZeroDev's guide on [how to set one up](https://docs.zerodev.app/getting-started)

## Explanation

In order to run the program, you would need a Dfns Polygon Mumbai wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://mumbai.polygonscan.com/address/0xf92361d3dce28e1a1594f91011a03f46c0388af8) is not funded and cannot pay for gas. Instead it uses the gas manager to sponsor a gasless transaction to mint a NFT.

```shell
> ts-node main.ts

Smart account address: 0xF92361d3dcE28e1A1594f91011A03F46c0388af8
User operation hash: 0x0d359bfa16889fb46bef997ff958585d44dfab6dcaa592bc42cb6fc73dce9b2f
Transaction hash: 0x073b117895fe47fa028bfc01a32f5d924ebc731772209baece7fd2d1c0e7b6ff
Smart account NFT balance: 1
```

This is the Polygon Mumbai [transaction](https://mumbai.polygonscan.com/tx/0x073b117895fe47fa028bfc01a32f5d924ebc731772209baece7fd2d1c0e7b6ff) that minted the token.
