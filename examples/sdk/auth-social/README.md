# Social registration and login

This tutorial demonstrates how to build a complete client solution integrating with Dfns API on the client side with social registration and use of WebAuthn for authentication. 

## Browser frontend

### Prerequisites

To run the web application, you must have an active `Application` for the ReactJS app. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial Web`
- Application Type, leave as the default `Default Application`
- Relying Party, set to `localhost`
- Origin, set to `http://localhost:3000`, this is the port the React JS application is configured to run on by default

After the `Application` is created, copy and save the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

For the social registration/login to work, you first need to configure your organization to accept this kind of registration flow. To do so,  go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Social Login`, and enter the following information

- `Allow Social Registration/Login` must be checked
- `Google` must be checked
- `Allow Dfns domain` must be checked (it corresponds to the Google oauth client id listed below)
- You can optionally use your own Google OAuth Client ID to customize the google sign-in flow an allow for registration from your own domain name.

### Configuration

In the folder, copy `.env.example` to a new file `.env.local` and set the following values,

- `REACT_APP_DFNS_APP_ID` = the `App ID` of the new `Application`
- `REACT_APP_DFNS_API_URL` = `https://api.dfns.ninja`, Dfns API
- `REACT_APP_DFNS_GOOGLE_OAUTH_CLIENT_ID` = `185321228227-mh9v8d2i71fbhc3r9lkst9ci2n5i5rfn.apps.googleusercontent.com`

Warning: the default `REACT_APP_DFNS_GOOGLE_OAUTH_CLIENT_ID` only allow `http://localhost:3000` as referrer, be sure that you access your demo using this URL, otherwise the google sign-in button won't show.

### Run the web frontend

```
auth-social %  npm install
auth-social %  npm run start
```
