# Basic Bitcoin transfer

Demonstrates a very simple Bitcoin transfer from a Dfns wallet to another address. The transfer target doesn't need to be a Dfns wallet.

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
- `BITCOIN_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `BITCOIN_NODE_URL` = a Bitcoin node to broadcast the signed transaction

## Explanation

In order to run the program, you would need a Dfns [Bitcoin wallet](https://blockstream.info/testnet/address/tb1qydad3w30lkvj7m4u02ec3emlqr7g05wf5456q3). The program will transfer 1 satoshi to another address.

```shell
> ts-node main.ts

Wallet address: tb1qydad3w30lkvj7m4u02ec3emlqr7g05wf5456q3
Unspent balance: 1442078 satoshis
Transfer amount: 1 satoshis
Transfer fee: 150 satoshis
Transaction hash: 090bcfd381ff1698c94cf62ac9c99f4298c97b7aca873ce3c8a17a815ead62c3
```

This is the Bitcoin testnet [transaction](https://blockstream.info/testnet/tx/090bcfd381ff1698c94cf62ac9c99f4298c97b7aca873ce3c8a17a815ead62c3).
