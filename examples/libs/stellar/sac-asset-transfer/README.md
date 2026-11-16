# Stellar asset contract transfer with official stellar sdk

Demonstrates how to issue a classic Stellar asset from a Dfns wallet, deploy its Stellar Asset Contract (SAC) and move it through Soroban with the SEP-41 token interface, using the stellar-sdk and the Soroban RPC.

See stellar-sdk's [documentation](https://github.com/stellar/js-stellar-sdk), [Soroban RPC's documentation](https://developers.stellar.org/docs/data/apis/rpc) and the [Stellar Asset Contract documentation](https://developers.stellar.org/docs/tokens/stellar-asset-contract) for a complete guide.

This example uses `@stellar/stellar-sdk` 17, which is required to decode transactions on a Protocol 30 network.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `ISSUER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID, the asset issuer
- `DISTRIBUTOR_WALLET_ID` = another Dfns wallet, the asset holder
- `SOROBAN_RPC_URL` = `https://soroban-testnet.stellar.org`


**note** _both wallets must have XLM to pay for fees, the distributor also needs the trustline reserve_

## Explanation

The program runs on the Stellar testnet network. To execute the code, you will need two testnet wallets containing some XLM. The program issues the asset `DFNS` from the issuer wallet and moves it through its contract in four steps,

1. the distributor adds a trustline for `DFNS` with a classic `changeTrust` operation, nothing to prepare
2. the issuer deploys the Stellar Asset Contract of `DFNS` with a `createStellarAssetContract` operation, the network returns the contract address (`C...`). The address is deterministic (`asset.contractId(network)`) and the contract can only be deployed once per asset
3. the issuer calls `transfer` on the contract to send 1000 `DFNS` to the distributor. A transfer from the issuer is a mint, the issuer does not hold its own asset. The authorization entry is the source account, so the Dfns signature on the envelope is all that is needed
4. `balance` is read on the contract through a simulation, nothing is signed nor submitted for this read-only call

Dfns signs the transaction envelope exactly as it is given. It does not simulate the transaction nor fill in the Soroban footprint, resource fee and authorization entries. So each Soroban transaction is first completed with `prepareTransaction` against the Soroban RPC, then signed with the Dfns wallet, then submitted with `sendTransaction` and polled with `getTransaction` until it is included in a ledger.

Running the program twice with the same wallets fails on step 2 because the contract already exists.

```shell
> ts-node main.ts

issuer address: GBX2D7AWXYK2WIVJ7VPJJPPQVKDQVTGJPDHF3OTSXYMUM3DTCIZCYVG6
distributor address: GDPN7YVACTUYHF36V7GZQNB2WUYTSSKOB66QQZ5GOGK32I4JEC46KHS6
transaction signed
transaction broadcasted: 1c5e1c7e04284c05b0b22124cb7e0b36e83bb074d842c32863ce5cd48d0b0fef
trustline DFNS:GBX2D7AWXYK2WIVJ7VPJJPPQVKDQVTGJPDHF3OTSXYMUM3DTCIZCYVG6 created for GDPN7YVACTUYHF36V7GZQNB2WUYTSSKOB66QQZ5GOGK32I4JEC46KHS6
transaction signed
transaction broadcasted: 8e69fe58d5d0a78b746e665fea7823dc0584c341fcc8ba42ecff3991b8283f73
stellar asset contract deployed: CDT7IJBSJKFA4HNDCHG6WW7IU2KFILCDLGA5RYSNIGNXNDG57ECW4MIO
transaction signed
transaction broadcasted: da2b176f6e86fbb32939f2b24993a6bfe3f8ca501b8b2af5d10d3079a43e35b5
transferred 10000000000 stroops of the asset from GBX2D7AWXYK2WIVJ7VPJJPPQVKDQVTGJPDHF3OTSXYMUM3DTCIZCYVG6 to GDPN7YVACTUYHF36V7GZQNB2WUYTSSKOB66QQZ5GOGK32I4JEC46KHS6 through the contract
balance(GDPN7YVACTUYHF36V7GZQNB2WUYTSSKOB66QQZ5GOGK32I4JEC46KHS6) = 10000000000 stroops
```

This is the [trustline transaction](https://stellar.expert/explorer/testnet/tx/1c5e1c7e04284c05b0b22124cb7e0b36e83bb074d842c32863ce5cd48d0b0fef), the [contract deployment transaction](https://stellar.expert/explorer/testnet/tx/8e69fe58d5d0a78b746e665fea7823dc0584c341fcc8ba42ecff3991b8283f73), the [transfer transaction](https://stellar.expert/explorer/testnet/tx/da2b176f6e86fbb32939f2b24993a6bfe3f8ca501b8b2af5d10d3079a43e35b5) and the resulting [contract](https://stellar.expert/explorer/testnet/contract/CDT7IJBSJKFA4HNDCHG6WW7IU2KFILCDLGA5RYSNIGNXNDG57ECW4MIO) for example.
