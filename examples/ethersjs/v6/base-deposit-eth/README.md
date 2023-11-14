# Base Deposit

Adapted from Base [deposit example](https://github.com/base-org/guides/blob/main/bridge/native/hardhat.config.js).

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
- `ETHEREUM_GOERLI_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Ethereum Goerli (L1)
- `BASE_GOERLI_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Base Goerli (L2)
- `ETHEREUM_GOERLI_PROVIDER_URL` = an Ethereum Goerli RPC provider node you have access to

**note** _the wallet must have Ethereum Goerli testnet ETH to deposit to Base and pay for gas_

## Explanation

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Ethereum Goerli wallet](https://goerli.etherscan.io/address/0x1c19c099870c478f074b3b27e0d04b38d3379d27) that holds some GoerliETH. The program will deposit `0.1` GoerliETH to an separate [Base Goerli wallet](https://goerli.basescan.org/address/0x40cb695026961668d167d6b2fa16b423c6beaa8d) with a different address.

```shell
> ts-node main.ts

L1 sender address 0x1C19c099870C478F074b3b27e0D04b38D3379D27
L2 receiver address 0x40cB695026961668d167D6B2fA16B423c6bEaa8d
Depositing 100000000000000000 wei
Deposit L1 receipt is: 0xa63555246615242294fc7de8b482eed12b6d5e50dad101fc3614a7d9a25cf85d
```

This is the Ethereum Goerli [L1 transaction](https://goerli.etherscan.io/tx/0xa63555246615242294fc7de8b482eed12b6d5e50dad101fc3614a7d9a25cf85d) that initiated the deposit, and this is the Base Goerli [L2 transaction](https://goerli.basescan.org/tx/0xcb82f69191b6771fd79984233e612b1dd05457ad3e95028954dbb8aede8fe8da) that completed the deposit.
