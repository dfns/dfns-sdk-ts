# Hardhat

Example showing how to use a Dfns wallet with [Hardhat](https://hardhat.org/) to deploy smart contracts to EVM compatible chains.

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
- `TOKEN_NAME` = the name of the ERC20 token
- `TOKEN_SYMBOL` = the symbol of the ERC20 token

**note** _the wallet must have Ethereum Sepolia testnet ETH to pay for gas_

## Explanation

Hardhat is a tool for compiling and deploying Solidity smart contracts. This example includes a simple smart contract following the ERC-20 token standard. The implementation uses the popular [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc20) library.

To compile the smart contract, run

```shell
> npx hardhat compile
```

Because we are using a Dfns wallet to deploy the contract, instead of using (Hardhat Ignition)[https://hardhat.org/ignition/docs/getting-started#overview], as one typically would with a local private key, we have to instead use a [custom deployment script](./scripts/deploy.ts). This script leverages the Dfns integration with ethers.js to sign the deploy contract transaction.

To deploy the smart contract to a live network, run

```shell
npx hardhat run scripts/deploy.ts

ERC20 contract deployed by 0x9FcdbDC5c3FE9E0fF997D0514fE5A41E65904b7F
ERC20 contract deployed to 0x9aF64fA0B11FB3603f7A8E9D29D2f2FA62Bb51BB
transaction hash: 0x3205c39266130e30f6d3325d9790b8de39ab8f6e3a9396b4c20439eec7fd9729
```

This is the [transaction](https://sepolia.etherscan.io/tx/0x3205c39266130e30f6d3325d9790b8de39ab8f6e3a9396b4c20439eec7fd9729) that deployed the [smart contract](https://sepolia.etherscan.io/address/0x9af64fa0b11fb3603f7a8e9d29d2f2fa62bb51bb).
