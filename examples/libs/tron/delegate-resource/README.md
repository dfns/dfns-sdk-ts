# Tron Resource Delegation

Demonstrates how to delegate Tron resources (bandwidth and energy) from one Dfns wallet to another. See TronWeb's [API Specification](https://tronweb.network/docu/docs/intro/) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `TRON_DELEGATOR_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/api-reference/wallets) ID (the wallet that will delegate resources)
- `TRON_DELEGATEE_WALLET_ID` = a Dfns Tron [wallet](https://docs.dfns.co/api-reference/wallets) ID (the wallet that will receive delegated resources)
- `TRON_NODE_URL` = a Tron Nile full node you have access to

**note** _the delegator wallet must have TRX to pay for gas. Additionally, the delegator must have staked resources available to delegate. If you don't have any staked resources, you must first stake some TRX to generate resources that can be delegated (you can check the [staking example](https://github.com/dfns/dfns-sdk-ts/blob/m/examples/libs/tron/staking/main.ts))_

## Explanation

The program runs on Tron Nile testnet. In order to run the code, you would need two Dfns Tron Nile wallets - one as the delegator (which must hold some TRX and resources to delegate) and one as the delegatee. The program will delegate 1 TRX worth of resources each for bandwidth and energy from the delegator to the delegatee.

```shell
> ts-node main.ts

Tron delegator wallet address: TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN
Tron delegatee wallet address: TWnKPhJoyHPGWSRcTj9PAJABtnQ5qSipCq
Max delegable SUN for energy: 4998000000
Max delegable SUN for bandwidth: 2817763005
Delegating 1000000 SUN for bandwidth from TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN to TWnKPhJoyHPGWSRcTj9PAJABtnQ5qSipCq
Delegate bandwidth txID: 5e5653e18ac352b593a102d7c67675248c287125a93cccefc1713cd09a4c7143
Delegate bandwidth broadcasted: true
Delegating 1000000 SUN for energy from TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN to TWnKPhJoyHPGWSRcTj9PAJABtnQ5qSipCq
Delegate energy txID: 5dbc97026205268378f1033507a9a19513d938a80cd6314f1fbbdd15b8595781
Delegate energy broadcasted: true
waiting for transactions to finalize ...
Amount staked for bandwidth for TWnKPhJoyHPGWSRcTj9PAJABtnQ5qSipCq: 3000000
Amount staked for energy for TWnKPhJoyHPGWSRcTj9PAJABtnQ5qSipCq: 3000000
```

These are the [bandwidth delegation transaction](https://nile.tronscan.org/#/transaction/5e5653e18ac352b593a102d7c67675248c287125a93cccefc1713cd09a4c7143) and [energy delegation transaction](https://nile.tronscan.org/#/transaction/5dbc97026205268378f1033507a9a19513d938a80cd6314f1fbbdd15b8595781).
