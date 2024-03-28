# Examples

Here's a list of examples illustrating how to use the Dfns Typescript sdk / libs, depending on your situation and setup.

### Core SDK

- [service-account](./sdk/service-account): Most basic example of the SDK. Uses a Service Account (aka "machine user").
- [nextjs-delegated](./sdk/nextjs-delegated): Delegated registration + login + signing with NextJS. This example illustrates a setup where your end-users living in your client app, create their [Delegated Signing](https://docs.dfns.co/dfns-docs/advanced-topics/delegated-signing) wallets (aka "end-user custody").
- [auth-delegated](./sdk/auth-delegated): Delegated registration + login + signing with ReactJS + React Native + Express. Same setup as [nextjs-delegated](./sdk/nextjs-delegated) example, but using different frameworks (express backend + ReactJS or React Native frontends)
- [auth-delegated-key-credential](./sdk/auth-delegated-key-credential/): Browser key signer example.
- [auth-direct](./sdk/auth-direct/): React frontend application directly communicating with Dfns API with users having WebAuthn credentials
- [export-wallet](./sdk/export-wallet): Example of how do export wallets from a Nodejs server.
- [import-wallet](./sdk/import-wallet): Example of how to import wallets from a Nodejs server.

### Libs / Integrations

- Algorand integration (`@dfns/lib-algorand`)
  - [basic-tx](./libs/algorand/basic-tx/)
  - [asset-tx](./libs/algorand/asset-tx/)
  - [multisig](./libs/algorand/multisig-tx/)
- BitcoinJS integration (`@dfns/lib-bitcoinjs`)
  - [basic-tx](./libs/bitcoinjs/basic-tx/)
  - [pay-to-multisig](./libs/bitcoinjs/pay-to-multisig/)
- Ethersjs v5 integration (`@dfns/lib-ethersjs5`)
  - [arbitrum-deposit-eth](./libs/ethersjs/v5/arbitrum-deposit-eth)
  - [polygon-deposit-erc20](./libs/ethersjs/v5/polygon-deposit-erc20)
  - [optimism-deposit-eth](./libs/ethersjs/v5/optimism-deposit-eth)
  - [biconomy-aa-gasless](./libs/ethersjs/v5/biconomy-aa-gasless)
- Ethersjs v6 integration (`@dfns/lib-ethersjs6`)
  - [base-deposit-eth](./libs/ethersjs/v6/base-deposit-eth)
  - [uniswap](./libs/ethersjs/v6/uniswap)
  - [hardhat-deploy](./libs/ethersjs/v6/hardhat-deploy)
- Cardano Mesh integration (`@dfns/lib-meshsdk`)
  - [basic-tx](./libs/meshsdk/basic-tx)
- polkadot{.js} integration (`@dfns/lib-polkadot`)
  - [basic-tx](./libs/polkadot/basic-tx)
- Solana web3.js integration (`@dfns/lib-solana`)
  - [basic-tx](./libs/solana/basic-tx)
  - [staking](./libs/solana/staking)
- Tezos Taquito integration (`@dfns/lib-taquito`)
  - [basic-tx](./libs/taquito/basic-tx)
- Tron tronweb integration (`@dfns/lib-tron`)
  - [basic-tx](./libs/tron/basic-tx)
  - [staking](./libs/tron/staking)
- Vechain integration (`@dfns/lib-vechain`)
  - [basic-tx](./libs/vechain/basic-tx)
- viem integration (`@dfns/lib-viem`)
  - [alchemy-aa-gasless](./libs/viem/alchemy-aa-gasless)
  - [zerodev-aa-gasless](./libs/viem/zerodev-aa-gasless)
- XRP Ledger integration (`@dfns/lib-xrpl`)
  - [basic-tx](./libs/xrpl/basic-tx)
