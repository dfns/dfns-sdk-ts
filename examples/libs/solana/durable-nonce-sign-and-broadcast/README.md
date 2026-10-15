# Solana durable nonce with Sign & Broadcast

Demonstrates the full lifecycle of a self-managed Solana [durable nonce](https://solana.com/developers/guides/advanced/introduction-to-durable-nonces) driven entirely through the DFNS **Sign & Broadcast** API (`wallets.broadcastTransaction`), end to end:

1. **Create** a nonce account owned by your wallet.
2. **Use** it several times: build a durable-nonce transaction, sign & broadcast it, wait for confirmation, repeat.
3. **Destroy** it by withdrawing its balance, which closes the account and reclaims the rent.

A durable nonce replaces the recent blockhash in a transaction, so the signed transaction never expires. This is what lets an asynchronous step — a policy approval, or an offline signer — sit between building the transaction and broadcasting it without the transaction going stale.

The transaction is built client-side with [`@solana/web3.js`](https://solana.com/docs/clients/javascript) and submitted unsigned (with zero-padded placeholder signatures); DFNS produces the signature during the MPC signing ceremony and broadcasts it.

## Self-managed vs. the DFNS nonce pool

This example manages the nonce account itself. If you only need durable nonces for **SOL and SPL transfers**, prefer the DFNS-managed pool instead: bootstrap it once with the `CreateSolanaNonceAccounts` transaction kind, then set `useDurableNonce: true` on your transfers and DFNS picks and advances a nonce for you. See [Use Solana durable nonces](https://docs.dfns.co/guides/solana-durable-nonces).

Use the self-managed flow shown here when you need a durable nonce on an **arbitrary** transaction you build yourself and send through Sign & Broadcast. Keep your seed distinct from the pool's `nonce/<index>` seeds (this example uses `my-app/nonce/0`) so the two never collide, and don't manually use a pool account, or DFNS's reservation tracking and your transaction can pick the same nonce.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values:

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = DFNS organization ID (see how to [find your organization ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account
- `DFNS_AUTH_TOKEN` = the auth token of your service account (starts with `eyJ0...`)
- `SOLANA_WALLET_ID` = a DFNS Solana [wallet](https://docs.dfns.co/api-reference/wallets) ID

**Note:** the Solana wallet must hold devnet SOL to fund the nonce account rent and pay fees.

## Run

```shell
> ts-node main.ts

Solana wallet:  D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT
Nonce account:  8r2JtxqNeMX1ZvpK66tL3skFa5DV3DdnsMCufNh1rcEJ
Create nonce account: request tx-xxxxx-xxxxx-xxxxxxxxxxxxxxxx submitted, waiting for confirmation…
Create nonce account: confirmed — 51Xzfo…KTJvB
Durable-nonce transfer 1: request tx-… submitted, waiting for confirmation…
Durable-nonce transfer 1: confirmed — 3vN2…9kQd
...
Destroy nonce account: confirmed — 2pLm…Rt7x
Done.
```
