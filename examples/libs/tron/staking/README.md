# Tron Staking

See TronWeb's [API Specification](https://tronweb.network/docu/docs/intro/) for a complete guide.

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
- `TRON_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `TRON_NODE_URL` = a Tron Nile full node you have access to

**note** _the wallet must have TRX to stake and pay for gas_

## Explanation

The program runs on Tron Nile testnet. In order to run the code, you would need a `TronNile` wallet that holds some TRX. The program will stake 1 TRX each for bandwidth and energy.

```shell
> ts-node main.ts

Tron wallet address: TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN
Amount staked for bandwith: 0
Amount staked for energy: 0
Freeze bandwidth txID: 25e8e26fe492776f61ec1096d057cb20783773a11d9e2fdbfcb3075b8d18a2f1
Freeze bandwidth broadcasted: true
Freeze energy txID: 9a812a03b037c5f69098a9d8a9788d5eb307fb9e12ced1cc42d777ad99e44f86
Freeze energy broadcasted: true
waiting for transactions to finalize ...
Amount staked for bandwith: 1000000
Amount staked for energy: 1000000
```

These are the [bandwidth staking transaction](https://nile.tronscan.org/#/transaction/25e8e26fe492776f61ec1096d057cb20783773a11d9e2fdbfcb3075b8d18a2f1) and [energy staking transaction](https://nile.tronscan.org/#/transaction/9a812a03b037c5f69098a9d8a9788d5eb307fb9e12ced1cc42d777ad99e44f86).
