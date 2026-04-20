# EVM Nonce Management

Demonstrates how EVM nonce ordering works and how to unstick transactions using the Dfns [Speed Up Transaction](https://docs.dfns.co/api-reference/wallets/speed-up-transaction) API.

> **Note:** This example targets **Ethereum** (mainnet or Sepolia). It does not work on L2s with centralized sequencers (Arbitrum, Base, Optimism, etc.) because those chains process transactions on a first-come, first-served basis — there is no competitive fee market, so a low-fee transaction might still be sequenced immediately.


## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

You also need an existing **Ethereum wallet** (Ethereum or EthereumSepolia) in your Dfns org. The wallet needs some ETH native balance to cover the transaction fees.

## Configuration

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `WALLET_ID` = the ID of your Ethereum wallet, e.g. `wa-...`

## Run

```sh
npm install
npm run exec
```

## Overview

On EVM blockchains, each transaction from an account must have a sequential nonce. If a transaction with nonce `N` is stuck (e.g. because its fee is too low), all subsequent transactions with nonces `N+1`, `N+2`, etc. will also be stuck, regardless of their fee.

This example:

1. **Broadcasts a stuck transaction** — Uses the [Broadcast Transaction](https://docs.dfns.co/api-reference/wallets/broadcast-transaction-from-wallet) API to create a self-transfer of 0 ETH with a near-zero `maxPriorityFeePerGas`. It tries increasing `maxFeePerGas` values (from 100 wei up to 10 gwei) until the node accepts the transaction — this adapts to the current base fee. The fee is just high enough to be accepted but too low for validators to prioritize, so the transaction sits in the mempool.

2. **Creates a queued transfer** — Uses the [Transfer Asset](https://docs.dfns.co/api-reference/wallets/transfer-asset-from-wallet) API to create another self-transfer of 0 ETH with a normal fee (default `Standard` priority). Even though this transfer's fee is perfectly fine, it cannot be mined because the previous nonce is occupied by the stuck transaction.

3. **Speeds up the stuck transaction** — Uses the [Speed Up Transaction](https://docs.dfns.co/api-reference/wallets/speed-up-transaction) API to resubmit the transaction with a competitive fee, then polls until it confirms.

4. **Waits for the queued transfer** — Once the stuck nonce is resolved, the queued transfer is automatically picked up and confirmed.

## How Nonce Ordering Works

```
Nonce N   → stuck tx (low fee, 0 priority) → not mined
Nonce N+1 → queued transfer (normal fee)   → waiting for nonce N
```

The queued transfer has a perfectly valid fee, but it **cannot be mined** until the transaction at the previous nonce is handled. This is how EVM nonce ordering enforces transaction sequencing.

## Speed Up vs Cancel

Dfns provides two APIs for resolving stuck transactions:

- [**Speed Up Transaction**](https://docs.dfns.co/api-reference/wallets/speed-up-transaction): Resubmits the transaction with a higher fee so it gets mined. This is what the example uses.
- [**Cancel Transaction**](https://docs.dfns.co/api-reference/wallets/cancel-transaction): Submits a replacement self-transfer at the same nonce with a competitive fee, effectively dropping the original transaction.

Both can also be triggered from the Dfns Dashboard. Once the stuck transaction at nonce `N` is resolved (either mined or cancelled), the queued transfer at nonce `N+1` will automatically be picked up and confirmed since its fee is already appropriate.
