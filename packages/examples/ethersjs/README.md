# ethers.js Examples

Adapted from Uniswap's [trading example](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts).

## Prerequisites

- On Dfns Dashboard, under `Settings` > `Applications`, use the existing default Application ID, or create a new Application. Eg
  - type: Client Side
  - Relying Party: localhost
  - Origin: http://localhost:3000
- On Dfns Dashboard, under `Settings` > `Service Account`, create a new Service Account (check [Dfns docs](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair) to see how to generate a public/private keypair)
- Copy/paste the `.env.example` into a `.env`, and replace with your environment variables values
  - `DFNS_API_URL` Dfns api URL (eg https://api.dfns.ninja or https://api.dfns.io depending which you are using)
  - `DFNS_APP_ID` Application ID registered with Dfns above
  - `DFNS_APP_ORIGIN` Origin of Dfns Application created in step above, eg `http://localhost:3000`
  - `DFNS_AUTH_TOKEN` Service Account token created above.
  - `DFNS_CRED_ID` Credential ID associated with the Service Account, when you created the service account. You can find this one in the `Dashboard` > `Settings` > `Service Account`
  - `DFNS_PRIVATE_KEY` Private key of the credentials created for the service account. (the newlines in it should not be a problem)
  - `DFNS_WALLET_ID` Dfns Wallet ID (that you created before, using our API, our our SDK)
  - `GOERLI_RPC_PROVIDER_URL`: Ethereum Goerli Blockchain RPC Provider URL. You can leave this one as it is (using GetBlock free Provider)

## Uniswap

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Goerli wallet](https://goerli.etherscan.io/address/0xe896b7db170a7b5a64c49761f4ec1ded3cee98b1) that holds some GoerliETH. The program will convert `1000000` wei of GoerliETH to [Wrapped ETH](https://goerli.etherscan.io/address/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6), and then swap them for [testnet USDT](https://goerli.etherscan.io/address/0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49).

Here's an on-chain [transaction](https://goerli.etherscan.io/tx/0x5672e93713d5cd7128f7e5540322e9c8eafd47f17429fd6d9126551ce9723a99) that traded the swap.
