# Durable nonce Solana transfer

Demonstrates a very simple Solana transfer from a Dfns wallet to another on-chain address. The transfer target doesn't need to be a Dfns wallet.
This specific transfer will use [DurableNonce](https://solana.com/fr/developers/guides/advanced/introduction-to-durable-nonces) so the tx will not have mortality

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Do this again for the hot Organisation for Nonce Account creation.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = Dfns Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `SOLANA_WALLET_ID` = a Dfns Solana [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID

- `DFNS_ORG_ID_HOT` = Dfns HOT Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID_HOT` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY_HOT` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN_HOT` = the `authToken` from above, the value should start with `eyJ0...`
- `SOLANA_HOT_NONCE_CREATOR_WALLET_ID` = a Dfns Solana [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID used to create the nonce account


- `SOLANA_TRANSFER_DESTINATION` = Solana Address to transfer funds too
- `SOLANA_TRANSFER_AMOUNT` = Transfer amount in lamports

**note** _The Solana wallet must have devnet SOL to transfer and pay for gas._

## Explanation

To run this program, you will need a Dfns [Solana devnet wallet](https://explorer.solana.com/address/CKMyhhMKzC8ra55ucvj8nWx7bTEFjL1EWM4ssRPBjg16?cluster=devnet). The program will transfer 100 lamports to itself using a durable nonce.
You should either provide the SOLANA_NONCE_ACCOUNT_ADDRESS, or you will be prompted to create a nonce account for you.

```shell
> ts-node main.ts

Solana wallet address: 2GDnHHcCRESwyZcKoQZQQ8dK7EdCrdTpgHf3odj9LzcH
Nonce Account Address:  CDmzMnha9N1i4hj4ZkcyPJLDxAXEsCA6LqujYBHXABj
Sending 100 lamports to 2GDnHHcCRESwyZcKoQZQQ8dK7EdCrdTpgHf3odj9LzcH with durable nonce
Old balance for sender: 299475000
Transaction hash: 4y3HANvEtoZ2QMGyJWHnN8vP7rAemEMmreXqT9R82P7oYXSKinrqiadWMRb728QpT544vtE4zGRntvxvYPPLSVYz
New balance for sender: 299470000
```

This is the Solana devnet [transaction](https://explorer.solana.com/tx/3FzaPyiZqtAWvYYFoTDiTmdyxKNw6CjhLnvuZtXeV7PvtbxeUSFi9jmV39zvSAbaa4ZYHWBgfpK4nXvrJ1182JRR?cluster=devnet).
