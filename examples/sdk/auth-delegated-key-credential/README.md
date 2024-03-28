# Delegated registration and login for key based credential

This tutorial demonstrates how to build a complete client/server solution integrating with Dfns API on the server side, and use Key based credential authentication for browser based frontend.
This approach is not the preferred approach as it less secure than the [webauthn solution](../auth-delegated/). Customers should use this approach if they have a good solution to keep the private key secure and load it securely in the browser. 
This tutorial consists of two separate projects,

- An express.js [server backend](./server/)
- A React [SPA browser frontend](./web/)

A single backend acts as the orchestrator between the browser and the Dfns API.

## Server backend

### Prerequisites

To run the backend server, you must have an active `Application` for the express server. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial Server`
- Application Type, leave as the default `Default Application`
- Relying Party, the value doesn't apply to a service account, you can set it to `localhost`
- Origin, also doesn't apply to a service account, you can set it to `http://localhost:8000`

After the `Application` is created, copy and save the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, paste in the generated public key

After the `Service Account` is created, make sure you copy and save the service account's `authToken`. **You won't be able to access the token after you navigate away from the confirmation page.**

Then go back to the service accounts listing, and the newly created `Service Account` should be listed there. Copy and save the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

### Configuration

In the `./server/` folder, copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` of the new `Application`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of the new `Service Account`
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from the new `Service Account` confirmation page, the value should start with `eyJ0...`
- `EXPRESS_PORT` = 8000

### Run the server

```
server %  npm install
server %  npm run start
```

## Browser frontend

### Prerequisites

To run the web application, you must have an active `Application` for the ReactJS app. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial Web`
- Application Type, leave as the default `Default Application`
- Relying Party, set to `localhost`
- Origin, set to `http://localhost:3000`, this is the port the React JS application is configured to run on by default

After the `Application` is created, copy and save the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

### Configuration

In the `./web/` folder, copy `.env.example` to a new file `.env.local` and set the following values,

- `REACT_APP_DFNS_APP_ID` = the `App ID` of the new `Application`
- `REACT_APP_EXPRESS_API_URL` = `http://localhost:8000`, the backend server

### Run the web frontend

```
web %  npm install
web %  npm run start
```
