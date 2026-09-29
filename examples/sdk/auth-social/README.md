# Social registration and login

This tutorial demonstrates how to build a complete client solution integrating with Dfns API on the client side with social registration and use of WebAuthn for authentication. 

## Browser frontend

### Prerequisites

For the social registration/login to work, you first need to configure your organization to accept this kind of registration flow. To do so,  go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Social Login`, and enter the following information

- `Allow Social Registration/Login` must be checked
- `Google` must be checked
- `Allow Dfns domain` must be checked (it corresponds to the Google oauth client id listed below)
- You can optionally use your own Google OAuth Client ID to customize the google sign-in flow an allow for registration from your own domain name.

### Configuration

In the folder, copy `.env.example` to a new file `.env.local` and set the following values,

- `REACT_APP_DFNS_API_URL` = `https://api.dfns.io`, Dfns API
- `REACT_APP_DFNS_ORG_ID` = your Dfns Organisation ID (found in Dashboard > Profile)
- `REACT_APP_PASSKEY_RELYING_PARTY_ID` = the passkey relying party id, aka, the domain where your app lives ((Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#rp))). We advise using the root domain (eg. `acme.com`, not `app.acme.com`) for more passkey flexibility (so that passkey is re-usable on subdomains). During development on localhost, you can set it to `localhost`.
- `REACT_APP_PASSKEY_RELYING_PARTY_NAME` = A string representing the name of the relying party, aka, your company name (e.g. "Acme"). The user will be presented with that name when creating or using a passkey.
- `REACT_APP_DFNS_GOOGLE_OAUTH_CLIENT_ID` = `185321228227-mh9v8d2i71fbhc3r9lkst9ci2n5i5rfn.apps.googleusercontent.com`

Warning: the default `REACT_APP_DFNS_GOOGLE_OAUTH_CLIENT_ID` only allow `http://localhost:3000` as referrer, be sure that you access your demo using this URL, otherwise the google sign-in button won't show.

### Run the web frontend

```
auth-social %  npm install
auth-social %  npm run start
```
