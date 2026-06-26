# Movement basic transaction with movement sdk

Demonstrates a very simple MOVE transfer from a Dfns wallet using the movement sdk.

See movement sdk's [documentation](https://docs.movementnetwork.xyz/devs/interactonchain/tsSdk) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = your Dfns Organisation ID (found in Dashboard > Profile)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `MOVEMENT_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID

**note** _the wallet must have MOVE to pay for fees_

## Explanation

The program runs on the Movement testnet. To execute the code, you will need to fund the wallet with some testnet tokens.

```shell
> ts-node main.ts

wallet address:  0xc41bb642f85e26b0e71d9d82bcb96cf2ac94a1ccfdb35b7fee1d4a57390a32c8
initial wallet balance:  100000000
balance after transfer:  99999299
```

You can look up the transfer transaction on the [Movement explorer](https://explorer.movementnetwork.xyz/?network=testnet).
