# Import / Export Wallet in React App

This simple example demonstrates how to import / export a wallet into Dfns, from a private ECDSA key, inside a React frontend app.

## Prerequisites

### Permissions

Wallet import & export are opt-in features at Dfns. So first, you need to request to Dfns this feature. Then, the API User / Asset-Account that you'll use needs a couple permissions:
- `Signers:ListSigners`
- `Wallets:Import`
- `Wallets:Export`

### Fill a new `.env`

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `REACT_APP_DFNS_API_URL`: `https://api.dfns.io`
- `REACT_APP_DFNS_ORG_ID`: your Dfns Organisation ID (found in Dashboard > Profile)


## Run Example

```
# inside repo root
npm install

cd examples/sdk/import-export-wallet-react
npm install
npm run start
```
