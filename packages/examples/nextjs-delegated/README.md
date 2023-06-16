# Dfns SDK example - Nextjs Delegated Auth / Delegated Signing

This example showcases a setup where you have:

- Your server, communicating with Dfns
- A web-app (client-side), where your "end user" lives.

The server is the only party interacting with Dfns API (using the SDK).

In this situation, you (the server) don't want to be "in control" of the user's wallet. Essentially, after a wallet is created, you don't want to be able to initiate a transaction using the user's wallet, without the user signing-off on this action. So because of that, you (the server) shouldn't be legally considered the custodian.

When the server initiates a Wallet creation on behalf of the end-user, the server needs to have the user sign this action, otherwise it won't work.

The end user will sign the action from the web-app, using his WebauthN credentials. Your server will then relay his signature to Dfns, to complete the wallet's creation.

## Prerequisites

For this example to work, you need to complete a few prerequisites:

- On Dfns Dashboard, create a new Dfns Application:
  - type: Client Side
  - Relying Party: localhost
  - Origin: http://localhost:3000
- On Dfns Dashboard, create a new Service Account (check [Dfns docs](https://app.gitbook.com/o/puStYG2QYnebEAexXqmt/s/oMvt8zMQg1BzesvBRNB4/advanced-topics/authentication/credentials/access-token-credentials) to see how to generate a public/private keypair)
- Copy/paste the .env.example into a .env.local, and replace all your env variable values

## Run Example


Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, and follow the tutorial.

## Flow

![Sequence Diagram Dfns SDK Server Side Configuration](../../../images/Dfns_Delegated_Signing_Configuration.png)
