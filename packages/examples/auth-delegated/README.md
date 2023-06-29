# Delegated registration and login

Same as the [NextJS example](../nextjs-delegated/), this example demonstrates how to build a complete client/server solution integrating with DFNS API on the server side and WebAuthn for client authentication. This approach is for clients who want to delegate custody of wallet assets to their users.

This implementation uses [Express](https://expressjs.com/en/4x/api.html) for the API server and [ReactJS](https://create-react-app.dev/) for the SPA client.

## Prerequisites

- In Dfns Dashboard `Settings` > `Org Settings` > `Applications` (or using our API) you need to create an new Application with origin `http://localhost:PORT` and Relying party `localhost`.
- In Dfns Dashboard `Settings` > `Org Settings` > `Service Account` (or using our API), you need to create a new Service Account. (Check [Dfns docs](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair) to see how to generate a public/private keypair).
- In the `server/` folder, copy/paste the `.env.example` and rename it to `.env`, and fill it out:
    - `PORT`: port where local app is span up
    - `DFNS_API_URL` Dfns api URL (eg https://api.dfns.ninja or https://api.dfns.io depending which you are using)
    - `DFNS_APP_ID` Application ID registered with Dfns above
    - `DFNS_APP_ORIGIN` Origin of Dfns Application registered in step above, eg `http://localhost:3000`
    - `DFNS_AUTH_TOKEN` Service Account token. You can create a new Service Account in `Dashboard` > `Settings` > `Service Account`.
    - `DFNS_CRED_ID` Credential ID associated with the Service Account, when you created the service account. You can find this one in the `Dashboard` > `Settings` > `Service Account`
    - `DFNS_PRIVATE_KEY` Private key of the credentials created for the service account. (the newlines in it should not be a problem)
- In the `client/` folder, you can update the `.env.local` folder
    - `REACT_APP_API_URL` url of the server, eg `http://localhost:8000`
    - `REACT_APP_DFNS_WEBAUTHN_RPID` Relying party registered on the Dfns Application you created (in Dashboard go to `Settings` > `Applications`) to find it. It should be `localhost`.


## Delegated registration

## Delegated login

## User action
