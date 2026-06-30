# Hardhat

Example showing how to use a Dfns wallet with [Hardhat](https://hardhat.org/) to deploy smart contracts to EVM compatible chains.

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
