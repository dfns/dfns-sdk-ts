# Concordium ID App WalletConnect

Demonstrates WalletConnect integration with the Concordium ID App to create and activate a Dfns Concordium wallet account. This example connects to the Concordium ID app via WalletConnect and uses it to create an identity and account.

See [WalletConnect](https://docs.reown.com/overview) and [Concordium ID](https://www.concordium.com/wallet/end-users#:~:text=Learn%20More-,Concordium%20ID,control%20of%20identity%20across%20Web3) documentation for additional information.

## Prerequisites

**Download the Concordium ID App**: You need to download and install the Concordium ID app on your mobile device from the [Concordium website](https://www.concordium.com/wallet/end-users#:~:text=Learn%20More-,Concordium%20ID,control%20of%20identity%20across%20Web3). Create an identity in the app by following the identity verification process.

**WalletConnect Project**: You'll need to create a project beforehand. See https://cloud.walletconnect.com/sign-in

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `CONCORDIUM_WALLET_ID` = a Dfns Concordium [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `WALLET_CONNECT_PROJECT_ID` = the `projectId` you created above

**note** _The Concordium wallet must be in an inactive state (not yet activated on the blockchain)._

## Explanation

The program creates and activates a Concordium account by connecting to the Concordium ID app via WalletConnect. Make sure you have the Concordium ID app installed on your mobile device with an identity created.

After the walletconnect session is initiated and the account creation request is sent to the app, the idapp returns a CredentialDeploymentTransaction that the wallet must sign to activate the account (using the `ActivateWallet Endpoint`)

```shell
> ts-node main.ts

Concordium wallet public key 8b8c91c4d0b1234567890abcdef1234567890abcdef1234567890abcdef123456
Please scan the following QR code to connect the IdApp:

█▀▀▀▀▀█ ▄█▀██▀▀█ █▀▀▀▀▀█
█ ███ █ ██▀▄▀▀▄█ █ ███ █
█ ▀▀▀ █ ▄█▀██▄▀▄ █ ▀▀▀ █
▀▀▀▀▀▀▀ ▀ ▀ █▄▀ ▀ ▀▀▀▀▀▀▀
██▄▄▄▄▀ ▄█▀▄▀█▄█ ▄▀█▄▀▄█
▄██▄██▀ ▀▄▄▀██▄▄█▀▄█▀▀▀█
▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀

Session approved
Please enter the following code in the app: AB12

Proceed with account creation? (y/n): y
Sending account creation request with public_key 8b8c91c4d0b1234567890abcdef1234567890abcdef1234567890abcdef123456

Activating account... (address: ccd-address)
transaction id: tx-01jcg-m1j1k-enfb5lr8gqg2qrud
waiting for wallet to be active... it can take a few minutes.
Current wallet status: Inactive
Current wallet status: Active
Wallet is now active!
Disconnected from WalletConnect session.
```

The program will display a QR code that you scan with the Concordium ID app to establish the WalletConnect connection. After scanning, enter the 4-character code displayed in the terminal into the ID app. The app will then create a credential deployment payload you will use to activate the account on the Concordium blockchain.
This program returns a dfns transactionId. Then DFNS will detect this transaction and activate your wallet



