# Changelog

## 0.1.0-beta.3 (2023-08-XX)

- Added `PaymentAmountOutgoingVelocity` to policy rule configurations

## 0.1.0-beta.2 (2023-08-09)

- Added `TransferLimit` to policy rule configurations
- Added `network` to `SignatureRequest` in the wallets API

## 0.1.0-beta.1 (2023-08-02)

- Added `restartDelegatedUserRegistration` for resuming an interrupted delegated registration flow
- Added new blockchain networks (Arbitrum, Avalanche, Fantom and Optimism) to wallets API
- Added `KeyEDCSA` and `KeyEdDSA` to wallets API
- Added `AlwaysActivated` policy for wallets tranfer asset, broadcast transaction and generate signature
- Renamed package `@dfns/ethersjs-wallet` to `@dfns/lib-ethersjs6` [breaking]
- Added SDK integration with ethers.js v5, see `@dfns/lib-ethersjs5`
- Added SDK integration with Solana web3.js, see `@dfns/lib-solana`
- Added SDK integration with Vechain Connex, see `@dfns/lib-vechain`
- Fixed `Buffer.toString('base64url')` not supported by older runtimes
- Fixed `DfnsDelegatedApiClient` missing auth client

## 0.1.0-alpha.10 (2023-07-20)

- Fixed Android WebAuthn bub where userHandle is empty
- Fixed asymmetric key signer for EdDSA keys

## 0.1.0-alpha.9 (2023-07-13)

- Renamed `BlockchainNetwork` names for the wallets API [breaking]
- Deprecated `IdentityKind` enum for the permissions API
- Added EVM broadcast transaction kinds `Eip1559` and `EvmLegacy`
- Added network specific encoding of signature to signed signature requests
- Expanded README.md for all the examples with clearer directions and explanations

## 0.1.0-alpha.8 (2023-06-28)

- Added @dfns/ethersjs-wallet package
- Added a uniswap example using Dfns ethers.js wallet
- Added typedoc generation

## 0.1.0-alpha.7 (2023-06-22)

- Removed the blockchain fees endpoint

## 0.1.0-alpha.6 (2023-06-21)

- Exposed Blockchains client methods
- Fixed input type of public key create transaction method

## 0.1.0-alpha.5 (2023-06-21)

- Removed some deprecated endpoints

## 0.1.0-alpha.4 (2023-06-21)

- Fixed return types of some Policies domain methods

## 0.1.0-alpha.3 (2023-06-20)

- Removed some unusable api endpoints

## 0.1.0-alpha.2 (2023-06-20)

- Renamed to `CredentialSigner` and `CredentialStore` interfaces
- Added `auth-delegated` and `nextjs-delegated` examples
