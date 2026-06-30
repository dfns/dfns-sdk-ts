# Tron Staking

See TronWeb's [API Specification](https://tronweb.network/docu/docs/intro/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `TRON_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `TRON_NODE_URL` = a Tron Nile full node you have access to

**note** _the wallet must have TRX to stake and pay for gas_

## Explanation

The program runs on Tron Nile testnet. In order to run the code, you would need a `TronNile` wallet that holds some TRX. The program will stake 1 TRX each for bandwidth and energy.

```shell
> ts-node main.ts

Tron wallet address: TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN
Amount staked for bandwidth: 0
Amount staked for energy: 0
Freeze bandwidth txID: 25e8e26fe492776f61ec1096d057cb20783773a11d9e2fdbfcb3075b8d18a2f1
Freeze bandwidth broadcasted: true
Freeze energy txID: 9a812a03b037c5f69098a9d8a9788d5eb307fb9e12ced1cc42d777ad99e44f86
Freeze energy broadcasted: true
waiting for transactions to finalize ...
Amount staked for bandwidth: 1000000
Amount staked for energy: 1000000
```

These are the [bandwidth staking transaction](https://nile.tronscan.org/#/transaction/25e8e26fe492776f61ec1096d057cb20783773a11d9e2fdbfcb3075b8d18a2f1) and [energy staking transaction](https://nile.tronscan.org/#/transaction/9a812a03b037c5f69098a9d8a9788d5eb307fb9e12ced1cc42d777ad99e44f86).
