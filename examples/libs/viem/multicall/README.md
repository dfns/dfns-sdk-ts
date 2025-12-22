# Multicall

Simple example of the [multicall contract](https://www.multicall3.com/) that is widely available on most [EVM blockchains](https://www.multicall3.com/deployments) at the same address `0xcA11bde05977b3631167028862bE2a173976CA11`.
In this example we batch send Ethereum to 2 different addresses

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

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
- `ETHEREUM_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)

## Explanation

In order to run the program, you would need a Dfns EVM wallet. The multicall smart contract is called specifying 2 transfers to 2 distinct address (`0xdBA99aAA622C900e4322B916A766763E95aF3D45` and `0x8285Bf52a6E53a42e724e3D4B08204623652a7A6` in the example).
This code can be adapted to increase the number of recipient or interact with other smart contract instead of sending the native token.

```shell
> ts-node main.ts

Transaction hash: 0xd9bfc96a8e14d35f35fff23bdb74e587f4ff977aad8806bdcfe69b118f03f49e
```

This is an example transaction on Ethereum Holesky: [transaction](https://holesky.etherscan.io/tx/0xd9bfc96a8e14d35f35fff23bdb74e587f4ff977aad8806bdcfe69b118f03f49e).
