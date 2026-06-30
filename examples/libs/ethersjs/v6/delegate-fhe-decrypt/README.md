# Delegate FHE Decrypt (ERC-7984)

Delegate FHE decrypt rights on an [ERC-7984](https://eips.ethereum.org/EIPS/eip-7984) confidential token to a reader address. This allows the delegatee to decrypt the wallet owner's encrypted balances and
transfer amounts using the Zama FHE protocol.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns Ethereum [wallet](https://docs.dfns.co/api-reference/wallets) on the network you want to use (Ethereum Mainnet or Sepolia)
- `ERC7984_CONTRACT_ADDRESS` = the ERC-7984 confidential token contract address
- `ERC7984_DELEGATEE_ADDRESS` = the Dfns delegatee address (see below)
- `ETHEREUM_NODE_URL` = an Ethereum RPC provider node you have access to, on the same network as your wallet (Mainnet or Sepolia)

**note** _the wallet must hold native ETH on the chosen network (Mainnet or Sepolia) to pay for gas_

## Dfns Delegatee Address

For Dfns to be able to decrypt your confidential balances and display them in plaintext in the API and dashboard, you must delegate decrypt rights to the Dfns delegatee address for your environment:

| Environment | Delegatee Address |
| ----------- | ----------------- |
| Sepolia Testnet  | `0x1f4252accc541a7a37868e02031b85ea00245d73` |
| Ethereum Mainnet | `0x1f4252accc541a7a37868e02031b85ea00245d73` |

Set `ERC7984_DELEGATEE_ADDRESS` in your `.env` to the address matching your network. Without this delegation, Dfns will return the encrypted handle instead of the plaintext balance.

## Supported networks

FHE is supported on Ethereum Mainnet and Ethereum Sepolia. The Zama ACL contract address differs between the two, so the example selects it automatically from the chain ID of `ETHEREUM_NODE_URL`:

| Network          | chainId  | Zama ACL contract                            |
| ---------------- | -------- | -------------------------------------------- |
| Ethereum Mainnet | 1        | `0xcA2E8f1F656CD25C01F05d0b243Ab1ecd4a8ffb6` |
| Ethereum Sepolia | 11155111 | `0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D` |

These match Zama's published [contract addresses](https://docs.zama.org/protocol/solidity-guides/smart-contract/configure/contract_addresses).

## Explanation

The program calls `ACL.delegateForUserDecryption(delegate, contractAddress, expirationDate)` on the [Zama ACL contract](https://docs.zama.org/protocol/solidity-guides/smart-contract/acl) for the connected network. This grants the delegatee address permission
to decrypt the wallet owner's encrypted balances and transfer amounts for the specified ERC-7984 token contract.

The delegation is permanent by default (`expirationDate` is set to the maximum `uint64`); set a finite timestamp in `main.ts` if you want it to expire. Once delegated, Dfns can automatically decrypt confidential balances and display them in plaintext through the [Get Wallet
Assets](https://docs.dfns.co/api-reference/wallets/get-wallet-assets) and [Get Wallet History](https://docs.dfns.co/api-reference/wallets/get-wallet-history) endpoints.

```shell
> ts-node main.ts

Wallet:     0x956fbb0c88b3c597d4afdbab3e26939051ff6725
Delegatee:  0x60C09563Ec6908cdc3FcAE7dd31902beC8124E7F
Contract:   0x593E77e7E2bEe748aa27942E1f2069b5B6902625
ACL:        0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D (chainId 11155111)
Expiration: permanent

Delegating FHE decrypt rights...
Transaction sent: 0x697b6b8d0465b21ccaeb1edb09b34cb92af74ad393ce4494a543188b8c774090
Confirmed in block 10512735