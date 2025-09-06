# Polymesh Native Assets manipulation

Demonstrates a native asset transfer using the modern DFNS Service Account Signing Manager. The `DfnsServiceAccountSigningManager` implements the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types/blob/f33083bdbbf4d44c9ad78355a267085c6342106a/src/signing-manager.ts#L8) and handles Polymesh SDK integration seamlessly.

See polymesh's [documentation](https://developers.polymesh.network/docs/originate/sdk/) for a complete guide.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = your organization ID from the Dfns dashboard
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYMESH_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLYMESH_RECEIVER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `POLYMESH_NODE_URL` = a polymesh node url to initalise the polymesh SDK
- `POLYMESH_ASSET_TICKER` = the ticker of the asset you want to transfer

**note** _the wallet must have POLYX to pay for fees and enough assets to transfer_

## Explanation

The program runs on Polymesh Testnet using the DFNS Service Account Signing Manager. To execute the code, you will need testnet wallets containing some POLYX for transaction fees. The sender and receiver wallets must also be associated with unique Polymesh identities (DID's).

The program is designed to retrieve a specific native asset by its ticker. If the asset doesn't exist, it will be created with an initial token supply. The script then demonstrates a simple native asset transfer between two custodial DFNS wallets that are both managed by the DFNS Service Account.

### How it works

1. **Initialize Signing Managers**: Creates `DfnsServiceAccountSigningManager` instances for both sender and receiver wallets
2. **Asset Management**: Retrieves the specified asset or creates it if it doesn't exist (with initial supply of 100 tokens)
3. **Transfer Process**: Executes a multi-step native asset transfer:
   - Create Transfer Instruction with the specified amount
   - Sender automatically affirms (as instruction creator)
   - Receiver reviews and affirms the instruction

### Sample Output

```shell
> ts-node main.ts

Polymesh wallet address for wa-71pbg-fmfts-9f08r0hmlp545uhh: 5EDw9Zwbi7oM5Q2eLPDwWAtByhznw2nT6ayeRxDmvV7mXmFs
Polymesh wallet address for wa-9ihs3-sihp9-pdrnokmdl7adqra: 5CmmAxfVsgacGAStwaTDP7ZvNnMRnBvMUBMJG6XSEgso9MM9
Asset with given ticker not found... creating it
Creating asset
Asset created

Asset to be transferred: 12345678
Transfering some tokens to receiver
create instruction
instruction created
Receiver affirmation
Leg instruction:
    {
      asset:   DFNSTEST,
      fromDiD: 0x123...abc,
      toDiD:   0x456...def,
      amount:  1,
    }
Receiver affirmed
```

### Transaction Examples

The script will output transaction hashes for transactions. Here are examples of the types of transactions you'll see:

**On the sender side:**

- Asset creation (if needed): Ticker reservation, asset creation
- Token issuance (if creating new asset): Initial token supply
- Instruction creation: Setting up the transfer instruction

**On the receiver side:**

- Instruction affirmation: Confirming and executing the transfer
