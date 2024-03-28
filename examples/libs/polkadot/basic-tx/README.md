# Polkadot basic transaction

Demonstrates a very simple polkadot transfer from a Dfns wallet to another address. Dfns wallet implements the official polkadot library.

See polkadot's [API Specification](https://polkadot.js.org/docs/api/start/typescript/) for a complete guide.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial`
- Application Type, leave as the default `Default Application`
- Relying Party, the value doesn't apply to a service account, you can set it to `localhost`
- Origin, also doesn't apply to a service account, you can set it to `http://localhost`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLKADOT_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLKADOT_NODE_URL` = a polkadot node url to broadcast the signed transaction

**note** _the wallet must have DOT/WND to pay for fees and transfer_

## Explanation

The program runs on Polkadot Westend. To execute the code, you will need a testnet wallet containing some WND. The program is designed to send 1 WND from your wallet to the address `5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ`.

```shell
> ts-node main.ts

Sending 1 DOT to the address 5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ
Transaction submitted with hash 0xcc2fdce6204337d28073a779108956c1b17c5e8b4e26c80ae493fb06ebc52fe8
```

This is a [transaction](https://westend.subscan.io/extrinsic/0xcc2fdce6204337d28073a779108956c1b17c5e8b4e26c80ae493fb06ebc52fe8) for example.
