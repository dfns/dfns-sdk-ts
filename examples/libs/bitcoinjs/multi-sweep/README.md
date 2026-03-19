# Bitcoin multi-wallet sweep

Demonstrates sweeping all UTXOs from multiple Dfns wallets into a single destination address in one Bitcoin transaction. Uses [Mempool.space](https://mempool.space) for UTXO fetching and the Dfns `getFees` endpoint for fee estimation.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings`
> `Service Accounts` > `New Service Account`, and enter the following information,

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
- `WALLET_IDS` = comma-separated list of Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) IDs to sweep from (all must be on the same Bitcoin network)
- `DESTINATION_ADDRESS` = the Bitcoin address to sweep all funds to
- `MEMPOOL_API_URL` = Mempool.space API URL for your network (`https://mempool.space/api` for mainnet, `https://mempool.space/testnet/api` for testnet, `https://mempool.space/signet/api` for signet)

**note** _the wallets must have UTXOs to sweep_

## Explanation

The program fetches all UTXOs from each wallet via Mempool.space, constructs a single PSBT with all inputs, estimates fees using the Dfns `getFees` endpoint, and creates one output to the destination address.
Each wallet signs its inputs via `SignPsbt`, and the last wallet's signature is combined with broadcast via `broadcastTransaction`.

```shell
> ts-node main.ts

Sweeping 3 wallet(s) to tb1q...

1. Initializing wallets...
Network: BitcoinTestnet3

2. Fetching UTXOs...
Wallet wa-xxx-1: tb1q... — 2 UTXO(s)
Wallet wa-xxx-2: tb1q... — 1 UTXO(s)
Wallet wa-xxx-3: tb1q... — 3 UTXO(s)
Total UTXOs: 6, Total amount: 150000 sats

3. Fetching fee rate...
Fee rates (sat/vB) — slow: 1, standard: 2, fast: 5
Using standard: 2 sat/vB

4. Building PSBT...
Estimated vsize: 461 vB
Estimated fee: 922 sats
Sweep amount: 149078 sats

5. Signing...
Signing with wallet wa-xxx-1...
Done.
Signing with wallet wa-xxx-2...
Done.
Signing & broadcasting with wallet wa-xxx-3...

6. Broadcast successful!
Transaction ID: abc123...
Explorer: https://mempool.space/testnet/tx/abc123...
```

example: https://mempool.space/testnet/address/tb1perz8cutjpz4znfzy9njtscqmt7nez87qr28ajm9e3emcyvjtt8gq45ttqy