# ethers.js Examples

Adapted from Uniswap's [trading example](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts).

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
- `DFNS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `GOERLI_RPC_PROVIDER_URL` = an Ethereum Goerli RPC provider node you can access

**note** _the wallet must have Goerli testnet ETH to trade and pay for gas_

## Uniswap

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Goerli wallet](https://goerli.etherscan.io/address/0xe896b7db170a7b5a64c49761f4ec1ded3cee98b1) that holds some GoerliETH. The program will convert `1000000` wei of GoerliETH to [Wrapped ETH](https://goerli.etherscan.io/address/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6), and then swap them for [testnet USDT](https://goerli.etherscan.io/address/0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49).

Here's an on-chain [transaction](https://goerli.etherscan.io/tx/0x5672e93713d5cd7128f7e5540322e9c8eafd47f17429fd6d9126551ce9723a99) that traded the swap.
