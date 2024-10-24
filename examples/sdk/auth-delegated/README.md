# Delegated registration and login

This tutorial demonstrates how to build a complete client/server solution integrating with Dfns API on the server side, and use WebAuthn authentication for browser based frontend and Passkeys authentication for mobile applications. This approach is recommended for clients who have multiple frontends for browser and mobile platforms. This tutorial consists of three separate projects,

- An express.js [server backend](./server/)
- A React [SPA browser frontend](./web/)
- A React Native [mobile frontend](./mobile/) for both Android and iOS

A single backend acts as the orchestrator between the browser, Android and iOS applications and the Dfns API. If you only need a browser frontend, see the [NextJS tutorial](../nextjs-delegated/) for a less complicated setup where the client and server are combined into the same project.

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

## Mobile frontend

Follow [the instructions](https://reactnative.dev/docs/environment-setup) to setup your React Native development environment. You will need React Native, and either XCode or Android Studio, or both, installed.

### Domain association for mobile applications

In order to run the mobile applications and use Passkeys authentication, you must associate a domain with your applications. This must be a public domain, `localhost` will not work, and the server hosted on this domain must expose route for either a [site association file](https://developer.apple.com/documentation/xcode/supporting-associated-domains), for iOS, or a [digital asset links file](https://developer.android.com/training/sign-in/passkeys#add-support-dal), for Android, depending on the target platform. On application start, iOS and Android will try to fetch these files, and Passkeys won't work if these files are unavailable.

The exact domain association files for the tutorial project are in `./server/static`. One option is you can copy these two static files and host them under the `/.well-known` path of an internet facing server for your domain. They must be reachable through `https://[your.domain]/.well-known/`.

Another option is you can sign up for a free account on [ngrok](https://ngrok.com/). ngrok provides a tunneling service that will give you a publicly reachable domain that tunnels to a port on your `localhost`. How to setup and configure ngrok is outside the scope of this tutorial, but you can follow the instructions on their website.

Make sure after you register, create a [static domain name](https://ngrok.com/blog-post/free-static-domains-ngrok-users). Free accounts can have one static domain name, e.g. `panda-new-kit.ngrok-free.app`. Having a static domain name is necessary, otherwise when you restart a tunnel, you will get a new randomly generated domain, and the Dfns Applications you associated with the previous domain and all the Passkeys credentials on your testing devices are no longer usable.

Once you finish setting up ngrok, you can start a tunnel to the express.js server application,

```
ngrok http --domain=panda-new-kit.ngrok-free.app http://localhost:8000
```

For the rest of the guide, `panda-new-kit.ngrok-free.app` will be used as the example public domain name. Please replace that with the actually domain you have associated with the Dfns tutorial app.

### iOS

#### Prerequisites

To run the React Native application on an iOS device, you must have an `Application` for iOS. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial iOS`
- Application Type, leave as the default `Default Application`
- Relying Party, set to the domain you associated with the app, e.g. `panda-new-kit.ngrok-free.app`
- Origin, set to the full url of the domain, e.g. `https://panda-new-kit.ngrok-free.app`

After the `Application` is created, copy and save the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

#### Configuration

In the `./mobile/` folder, copy `.env.example` to a new file `.env.ios` and set the following values,

- `DFNS_APP_ID` = the `App ID` of the new `Application`
- `EXPRESS_API_URL` = either `http://localhost:8000` or if using ngrok, the public url `https://panda-new-kit.ngrok-free.app`

**NOTE**

The project uses `react-native-config` to manage the configuration settings. If you ever have to change the settings, there's a bug where the old settings are cached and not properly refreshed. You need to manually clear the cache before rebuild the app.

```
mobile %  rm node_modules/react-native-config/ios/ReactNativeConfig/GeneratedDotEnv.m
```

#### Modify associated domain entitlement

For iOS to download the correct `apple-app-site-association` file, you need to modify the associated domain entitlement configuration to point to the right location. Open the file `./mobile/ios/mobile/mobile.entitlements` and change the string value `webcredentials:panda-new-kit.ngrok-free.app?mode=developer` to match your domain.

#### Install dependencies

Install all the native iOS dependencies, run the following command in the `ios` directory

```
mobile/ios %  pod install
```

#### Enable Passkeys

In the simulator's menu options, go to `Features` > `Touch ID` or `Face ID` > `Enroll`, and verify the feature is toggled on. Even if the option is shown as on, you may still get the error "Simulator requires enrolled biometrics to use passkeys" when attempting to create a new Passkeys credential. If you encounter this error, go the the menu option and un-enroll, then re-enroll either `Touch ID` or `Face ID`.

Depending on the iOS version the simulator, you may also need to enable Passkeys on the simulated device in the iOS settings. Go to `Settings` > `Developer` > `Authentication Service Testing` > `Syncing Platform Authenticator`.

*If you run this on a physical device instead of a simulator*, make sure that on the iOS device you enable "Associated Domains for development". This is found under Settings > Developer > Universal Links: Associated Domains Development


#### Run on iOS

First start the metro server

```
mobile %  npm install
mobile %  npm run start
```

Pick and start an iOS simulator that supports Passkeys, then build and launch the application

```
mobile %  npm run ios
```

### Android

#### Prerequisites

To run the React Native application on an Android device, you must have an `Application` for Android. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name, for example `Dfns Tutorial Android`
- Application Type, leave as the default `Default Application`
- Relying Party, set to the domain you associated with the app, e.g. `panda-new-kit.ngrok-free.app`
- Origin, the Android format is `android:apk-key-hash:<sha256_hash-of-apk-signing-cert>`. For this tutorial app, the signing cert is fixed, the value is `android:apk-key-hash:-sYXRdwJA3hvue3mKpYrOZ9zSPC7b4mbgzJmdZEDO5w`. For your own application, follow [Android's guide](https://developer.android.com/training/sign-in/passkeys#verify-origin) to derive the correct origin.

After the `Application` is created, copy and save the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

#### Configuration

In the `./mobile/` folder, copy `.env.example` to a new file `.env.android` and set the following values,

- `DFNS_APP_ID` = the `App ID` of the new `Application`
- `EXPRESS_API_URL` = either `http://localhost:8000` or if using ngrok, the public url `https://panda-new-kit.ngrok-free.app`

#### Enable Passkeys

To enable Passkeys on the Android simulator, you must sign into a Google account on the simulated device. Google Play service is required. Otherwise, attempts to create Passkeys credentials will fail. If you are unable to create a Passkeys credential on simulated device, double check to make sure the system image you are using supports it.

#### Run on Android

First start the metro server

```
mobile %  npm install
mobile %  npm run start
```

Pick and start an Android simulator that supports Passkeys, then build and launch the application

```
mobile %  npm run android
```
