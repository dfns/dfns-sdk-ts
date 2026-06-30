# Wallet Connect and Polymesh Portal

Demonstrates a simple WalletConnect handler for Polymesh that allows connection to the [Polymesh Portal](https://portal.polymesh.live/)

See [WalletConnect](https://docs.reown.com/overview) documentation for additional information

## Prerequisites

On wallet connect side, you'll need to create a project beforehand. See https://cloud.walletconnect.com/sign-in

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `POLYMESH_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
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



