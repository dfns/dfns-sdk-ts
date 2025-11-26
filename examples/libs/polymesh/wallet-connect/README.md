# Wallet Connect and Polymesh Portal

Demonstrates a simple WalletConnect handler for Polymesh that allows connection to the [Polymesh Portal](https://portal.polymesh.live/)

See [WalletConnect](https://docs.reown.com/overview) documentation for additional information

## Prerequisites

On wallet connect side, you'll need to create a project beforehand. See https://cloud.walletconnect.com/sign-in

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYMESH_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `WALLET_CONNECT_PROJECT_ID` = the `projectId` you created above
- `POLYMESH_NODE_URL` = a polymesh node url to initialise the polymesh SDK


## Explanation

First you can launch the program, it will ask for a WalletConnect URI
Connect to the PolymeshPortal, click top right to connect a wallet, and chose `WalletConnect`. A QR code will appear. Copy the associated URI and paste it to this program.

```shell
> npx ts-node main.ts
Paste your WalletConnect URI:
wc:c1296cced832c78fb1e......5d57069e38d28fd75c@2?expiryTimestamp=1745310882&relay-protocol=irn&symKey=00daeaeb3b4dd0ce122870ee3ff8ac3c019dd2......44ab02db9a9
Connected from WalletConnect session: .....TOPIC......
#### Transaction request received #### 

{
    .....
}

Do you want to sign this transaction? (y/n)
y
transaction signed by DFNS

#### Transaction request received #### 

{
    .....
}
Do you want to sign this transaction? (y/n)
n
User rejected the transaction signing request
.....
.....
Disconnected from WalletConnect session: .....TOPIC......
```

Then every action you are doing in the dashboard will trigger a transaction that will be signed and approved by this program.



