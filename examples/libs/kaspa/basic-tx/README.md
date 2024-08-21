# Basic Kaspa transfer

Demonstrates a very simple Kaspa transfer from a Dfns wallet to another address. The transfer target doesn't need to be a Dfns wallet.

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
- `KASPA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `KASPA_API_URL` = a Kaspa node to broadcast the signed transaction

## Explanation

In order to run the program, you would need a Dfns [Kaspa wallet](https://explorer.kaspa.org/addresses/kaspa:qyp0s2f9ffpnsyg5ug7ywmc7d660l3u00tfrh4eafj9sk280a97dnlgkh73szvx?page=1). The program will transfer 1 KAS to another address.

```shell
> ts-node main.ts

Wallet address: kaspa:qyp0s2f9ffpnsyg5ug7ywmc7d660l3u00tfrh4eafj9sk280a97dnlgkh73szvx
Unspent balance: 200000000 sompi
Sending 199990000 sompi to kaspa:qq70k7tn3cyq23fa2al678dr09smqfsqp88cw4j4rm5x0s6fllr2yqm9nk7sc with 10000 fee per UTXO
Transaction built {
  "id": "8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed",
  "inputs": [...],
  "outputs: [...],
  ...
}
Transaction Id: 8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed
```

This is the Kaspa [transaction](https://explorer.kaspa.org/txs/8f2000e56109c3dc1fbb4056de897d97ad40eb478b3cb5126d4de649ffc88eed).
