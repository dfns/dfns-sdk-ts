# Delegate FHE Decrypt (ERC-7984)

Delegate FHE decrypt rights on an [ERC-7984](https://eips.ethereum.org/EIPS/eip-7984) confidential token to a reader address. This allows the delegatee to decrypt the wallet owner's encrypted balances and
transfer amounts using the Zama FHE protocol.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings`
> `Service Accounts` > `New Service Account`, and enter the following information,

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
- `WALLET_ID` = a Dfns Ethereum Sepolia [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)
- `ERC7984_CONTRACT` = the ERC-7984 confidential token contract address
- `DELEGATEE_ADDRESS` = the Dfns delegatee address (see below)
- `ETHEREUM_SEPOLIA_NODE_URL` = an Ethereum Sepolia RPC provider node you have access to

**note** _the wallet must have Sepolia ETH to pay for gas_

## Dfns Delegatee Address

For Dfns to be able to decrypt your confidential balances and display them in plaintext in the API and dashboard, you must delegate decrypt rights to the Dfns delegatee address for your environment:

| Environment | Delegatee Address |
| ----------- | ----------------- |
| Sepolia Testnet  | `0x1f4252accc541a7a37868e02031b85ea00245d73` |
| Ethereum Mainnet | `0x1f4252accc541a7a37868e02031b85ea00245d73` |

Set `DELEGATEE_ADDRESS` in your `.env` to the address matching your network. Without this delegation, Dfns will return the encrypted handle instead of the plaintext balance.

## Explanation

The program calls `ACL.delegateForUserDecryption(delegate, contractAddress, expirationDate)` on the [Zama ACL contract](https://docs.zama.ai/fhevm/fundamentals/acl). This grants the delegatee address permission
to decrypt the wallet owner's encrypted balances and transfer amounts for the specified ERC-7984 token contract.

The delegation expires after 1 year by default. Once delegated, Dfns can automatically decrypt confidential balances and display them in plaintext through the [Get Wallet
Assets](https://docs.dfns.co/api-reference/wallets/get-wallet-assets) and [Get Wallet History](https://docs.dfns.co/api-reference/wallets/get-wallet-history) endpoints.

```shell
> ts-node main.ts

Wallet:     0x956fbb0c88b3c597d4afdbab3e26939051ff6725
Delegatee:  0x60C09563Ec6908cdc3FcAE7dd31902beC8124E7F
Contract:   0x593E77e7E2bEe748aa27942E1f2069b5B6902625
ACL:        0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D
Expiration: 2027-03-27T00:00:00.000Z

Delegating FHE decrypt rights...
Transaction sent: 0x697b6b8d0465b21ccaeb1edb09b34cb92af74ad393ce4494a543188b8c774090
Confirmed in block 10512735