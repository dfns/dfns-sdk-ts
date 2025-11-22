# Iota rebased basic lock/unlock transaction

Demonstrates how to lock native tokens and then unlock them from a Dfns wallet using [Iota-sdk](https://docs.iota.org/ts-sdk/typescript/).

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

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
- `IOTA_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `IOTA_RPC_URL` = an Iota RPC node to broadcast signed transaction

**note** _the wallet must have IOTA to pay for fees_

## Explanation

The program runs on the IOTA rebased testnet. To execute the code, you’ll need a testnet wallet with some IOTA. The program locks 1e-9 Timelocked IOTA from the wallet and then unlocks it.
To ensure unlocking, we set the expiration date to be earlier than the current chain epoch. This guarantees that the timelock has already expired, allowing immediate access to the locked funds.

```shell
> ts-node main.ts

Iota wallet address: 0x078f2345ee6ad9f7fe4a09f2fc74998ddbf0f185930b805e5592ade389b210b5
Preparing lock & transfer: Amount = 1, Recipient = 0x078f2345ee6ad9f7fe4a09f2fc74998ddbf0f185930b805e5592ade389b210b5, Expiration = 1741682750049
Transaction broadcasted: hash = BUrkQ28ocFBM7BK9Ldo3Eggux7qCDdR43Cg123RhrvfP

Timelocked objects after locking transaction:

ObjectId | Amount | Expiration
0x06074d16bac9b003a9bd6f700bfaba45765bedcd2bd491704cb6889c48ae94b2 | 1 | 1741599232828
0x289964f91289a9f252755dc295fea92d57fa6310e7b71fb4f4a7d2d3b347bbe1 | 1 | 1742220849241
0x3d794932b39c555ac97dc45b684cc79876740aa81e5cb714d2c052a9f697a4b0 | 1 | 1742221585627
...

Unlocking previous locked objects: 0x0f87028d7133d85d87d90a3582086cc747814a99ee9f42ae6c6e4f33df5dc243
Transaction broadcasted: hash = AiMFjNSqDZ3XZXSUktjA8bXHNeGHywtzkhbr2GW1QWoj
```

This is a IOTA [locking transaction](https://explorer.rebased.iota.org/txblock/Aq3vo7ana33LYhryMPEJpdjXe2EbcFTcnHyFM6uxfCCh?network=testnet) and a IOTA [unlocking transaction](https://explorer.rebased.iota.org/txblock/dbUcuyy3Bx279pjGgvTTRirMQN55YJ8xC8pN68YpYig?network=testnet)
