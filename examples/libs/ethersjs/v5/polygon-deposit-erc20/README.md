# Polygon Deposit ERC20

Adapted from Polygon's [deposit example](https://github.com/maticnetwork/matic.js/blob/master/examples/pos/erc20/deposit.js).

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
- `DFNS_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet), this wallet will be used for both Ethereum and Polygon
- `ETHEREUM_NODE_URL` = an Ethereum Goerli RPC provider node you have access to
- `POLYGON_NODE_URL` = an Polygon Mumbai RPC provider node you have access to

**note** _This wallet will be used across Ethereum and Polygon testnets. The network type should be set to `KeyECDSA` on creation. The wallet must have Ethereum Goerli testnet ETH to bridge to Polygon and pay for gas._

## Explanation

In order to run the program, you would need a `KeyECDSA` wallet. The [Ethereum Goerli account]((https://goerli.etherscan.io/address/0x7c477e07b747a709f558e9e8b383b2a39e4d9708)) needs to hold some GoerliETH. It will bridge USDC to the [Polygon Mumbai account](https://mumbai.polygonscan.com/address/0x7c477E07b747a709F558e9e8B383b2a39e4d9708) with the same address.

The example uses the [official](https://developers.circle.com/developer/docs/usdc-on-testnet#usdc-on-ethereum-goerli) USDC [contract on Goerli](https://goerli.etherscan.io/token/0x07865c6e87b9f70255377e024ace6630c1eaa37f). To obtain USDC on your testnet account, use our [Uniswap example](../../v6/uniswap/main.ts) to do a GoerliETH to USDC trade. You can look up the [contract on Mumbai](https://mumbai.polygonscan.com/token/0x0fa8781a83e46826621b3bc094ea2a0212e71b23) using the [Token Mapper](https://mapper.polygon.technology/).

```shell
> ts-node main.ts

0x7c477E07b747a709F558e9e8B383b2a39e4d9708 USDC balance on Ethereum: 60000
Approve bridge contract allowance: 0xbe0de7da01e5bd4e2a7789012bf071e48b01c5df52ad65861dfba89ba2786ef4
Transaction hash on L1: 0x448df0058f1ea185b44a0c39a9d68894e151064ddcc7f99c52c9b359bd13b989
0x7c477E07b747a709F558e9e8B383b2a39e4d9708 USDC balance after Polygon deposit: 59900
```

This is the Ethereum Goerli [L1 transaction](https://goerli.etherscan.io/tx/0x448df0058f1ea185b44a0c39a9d68894e151064ddcc7f99c52c9b359bd13b989) that initiated the deposit, and this is the Polygon Mumbai [L2 transaction](https://mumbai.polygonscan.com/tx/0xc94c7fb647326810b9c5687c6f93b4f5fd9cc68b530610131c7c4027434aa7f7) that completed the deposit.
