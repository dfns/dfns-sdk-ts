'use client'

import useAppContext from '@/hooks/useGlobalContext'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const intro = `
## Introduction
This demo app demonstrates how to use Dfns SDK in this configuration:
- You have a server + a client app.
- Your "end-user" uses this client app (on his browser).
- This client-app communicates with the server via your custom api endpoints.
- The server communicates with Dfns API (using the SDK), using a Dfns Service Account that you already created.
- You want to leverage Delegated Signing, so only your end-user's is "custodian" of his wallet, and you (the server) does not have control over his wallets. For that, your end-user will need to sign requests (from the client app), even though only your server communicates directly with Dfns.
`

const prerequisites = `
## Prerequisites

For this demo to work, you need to complete a few prerequisites:

- On Dfns Dashboard, create a new Dfns Application:
  - type: Client Side
  - Relying Party: localhost
  - Origin: http://localhost:3000
- On Dfns Dashboard, create a new Service Account (check [Dfns docs](https://app.gitbook.com/o/puStYG2QYnebEAexXqmt/s/oMvt8zMQg1BzesvBRNB4/advanced-topics/authentication/credentials/access-token-credentials) to see how to generate a public/private keypair)
- Copy/paste the .env.example into a .env.local, and replace all your env variable values
`

const step1 = `
## Step 1 - Delegated Registration

The end-user already exists in your system, and the identity/auth provider you use. So can already be authenticated with your server.

However, this end-user also needs to be registered with Dfns, so that Dfns can identify him, and let him create Wallets that he will own.

You also may not want this end-user to go through a Dfns regsitration flow (receiving an email from Dfns, etc.), so you will use "Delegated Registration" to have your server register this end-user with Dfns (here, "delegated" means your server will register the user "on his behalf"). The end user is still involved in the process, to register and create a WebauthN credentials (from the client app).

Find relevant code in:
- \`./app/api/register/init/route.ts\` (Server endpoint - registration init)
- \`./app/api/register/complete/route.ts\` (Server endpoint - registration complete)
- \`./app/register/page.tsx\` (Client-side registration page)
`

const step2 = `
## Step 2 - Wallets

After previous steps, your end user can check the list of wallets he owns, and create new ones.

Getting the list of wallets only involves a readonly call, which do not needs to be sined by the end user, so you won't see any prompt asking theuser to sign something.

However, creating a new wallet will require the end user to sign a challenge in order to complete the request. You will see the WebauthN prompt show up there, and you can check in the code that the Wallet creatin process is divided in two steps (init + complete). Check the code in:

- \`./app/api/wallets/create/init/route.ts\` (Server endpoint to init)
- \`./app/api/wallets/create/complete/route.ts\` (Server endpoint to complete)
- \`./app/wallets/page.tsx\` (Client registration page)
`

const step3 = `
## Step 3 - Recover

It is recommended that you ask the user to register multiple WebAuthn credentials in the system, to ensure they don't lose access to their account. However, since the credentials are all digital, over time it is possible that your user will lose access to all of their login credentials.

To avoid this happening, we recommend adding a recovery credential for the user. This can be added during the registration process, or the user can add new recovery credentials at any time.

Recovery credentials are just private keys in Dfns view, and you are free to implement them however you see fit. In this example, we're including one option for how to implement recovery, where the private key is generated in the user's browser, encrypted with a random secret, and then the unencrypted public key and the encrypted private key are provided to Dfns to store.

When the user wants to recover they provide their username and the ID that identifies the recovery credential. They then download the encrypted private key from Dfns and decrypt the private key using their recovery secret.

In this example, we store the recovery secret and credential ID in the user's browser local storage. This is convenient for this example, however, it is not recommended you do this in a production environment. Instead, we recommend that the values are displayed to the user, for a limited time, along with a message requesting that the user store the credentials in a secure physical or digital location.

- \`./app/api/recover/create/init/route.ts\` (Server endpoint to init)
- \`./app/api/recover/create/complete/route.ts\` (Server endpoint to complete)
- \`./app/recover/page.tsx\` (Client recovery page)

`

export default function Home() {
  const { dfnsEndUserAuthToken, resetDfnsEndUser } = useAppContext()

  return (
    <div>
      <ReactMarkdown>{intro}</ReactMarkdown>
      <ReactMarkdown>{prerequisites}</ReactMarkdown>
      <ReactMarkdown>{step1}</ReactMarkdown>
      {!dfnsEndUserAuthToken ? (
        <>
          <p className="text-center">
            <Link href="/register" className="btn no-underline">
              Go to Delegated Registration
            </Link>
          </p>
          <p className="text-center">OR, if you already registered a end user before:</p>
          <p className="text-center">
            <Link href="/login" className="btn no-underline">
              Go to Login Page
            </Link>
          </p>
        </>
      ) : (
        <p className="text-center">
          ✅ End user is Logged in with Dfns ✅{' '}
          <button className="hover:underline" onClick={resetDfnsEndUser}>
            Logout
          </button>
        </p>
      )}
      <ReactMarkdown>{step2}</ReactMarkdown>
      {!dfnsEndUserAuthToken ? (
        <p className="text-center">⚠️ You need Complete Step 1 first</p>
      ) : (
        <p className="text-center">
          <Link href="/wallets" className="btn no-underline">
            Go to Wallets Page
          </Link>
        </p>
      )}
      <ReactMarkdown>{step3}</ReactMarkdown>
      {!dfnsEndUserAuthToken ? (
        <p className="text-center">⚠️ You need Complete Step 1 first</p>
      ) : (
        <p className="text-center">
          <Link href="/recover" className="btn no-underline">
            Go to Recovery Page
          </Link>
        </p>
      )}

      <h2>The end 🎉</h2>
    </div>
  )
}
