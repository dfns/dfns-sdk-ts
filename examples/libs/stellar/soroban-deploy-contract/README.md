# Stellar Soroban contract deployment with official stellar sdk

Demonstrates how to upload a Soroban smart contract, create a contract instance from it and invoke it, all from a Dfns wallet using the stellar-sdk and the Soroban RPC.

See stellar-sdk's [documentation](https://github.com/stellar/js-stellar-sdk) and [Soroban RPC's documentation](https://developers.stellar.org/docs/data/apis/rpc) for a complete guide.

This example uses `@stellar/stellar-sdk` 17, which is required to decode transactions on a Protocol 30 network.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `STELLAR_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `SOROBAN_RPC_URL` = `https://soroban-testnet.stellar.org`


**note** _the wallet must have XLM to pay for fees, Soroban transactions cost more than a plain payment_

## Explanation

The program runs on the Stellar testnet network. To execute the code, you will need a testnet wallet containing some XLM. The program deploys the `hello_world` contract shipped as `hello_world.wasm` in three steps,

1. upload the contract code with an `uploadContractWasm` operation, the network returns the hash of the code
2. create a contract instance from that hash with a `createCustomContract` operation, the network returns the contract address (`C...`)
3. invoke `hello("Dfns")` on the new contract through a simulation, nothing is signed nor submitted for this read-only call

Dfns signs the transaction envelope exactly as it is given. It does not simulate the transaction nor fill in the Soroban footprint, resource fee and authorization entries. So each transaction is first completed with `prepareTransaction` against the Soroban RPC, then signed with the Dfns wallet, then submitted with `sendTransaction` and polled with `getTransaction` until it is included in a ledger.

### Contract

`hello_world.wasm` is the `hello_world` contract from [stellar/soroban-examples](https://github.com/stellar/soroban-examples), `hello(to: String) -> Vec<String>`, built from tag `v23.0.0` (commit `b46f4e0c9dccc9e51980b559915f52d8b94e9236`) with

```shell
git clone --depth 1 --branch v23.0.0 https://github.com/stellar/soroban-examples.git
cd soroban-examples/hello_world
stellar contract build
# stellar-cli 30.0.1, rustc 1.97.1, target wasm32v1-none
# output: target/wasm32v1-none/release/soroban_hello_world_contract.wasm (626 bytes, sha256 e2ecc346deb99c5175ba23694e88129d7bb4dce19fab84971d652d30dc61692f)
```

```shell
> ts-node main.ts

stellar wallet address: GBX2D7AWXYK2WIVJ7VPJJPPQVKDQVTGJPDHF3OTSXYMUM3DTCIZCYVG6
soroban transaction signed
transaction broadcasted: 11d6b3591da42dc8b54b79fe90a77193d7d3259e08c93b440b8bb7aedd5a6549
wasm hash: e2ecc346deb99c5175ba23694e88129d7bb4dce19fab84971d652d30dc61692f
soroban transaction signed
transaction broadcasted: 8e40dc7a5f80252e5f6e4ade60e62e35a1d2e4e8c3eb08a266da227231d113d1
contract id: CAXKNBYN3UT43566NA3EXAXKMW6QETMPZS6IU3YZEPQTKHKWDSEEWFJL
hello("Dfns") returned: ["Hello","Dfns"]
```

This is the [upload transaction](https://stellar.expert/explorer/testnet/tx/11d6b3591da42dc8b54b79fe90a77193d7d3259e08c93b440b8bb7aedd5a6549), the [create contract transaction](https://stellar.expert/explorer/testnet/tx/8e40dc7a5f80252e5f6e4ade60e62e35a1d2e4e8c3eb08a266da227231d113d1) and the resulting [contract](https://stellar.expert/explorer/testnet/contract/CAXKNBYN3UT43566NA3EXAXKMW6QETMPZS6IU3YZEPQTKHKWDSEEWFJL) for example.
