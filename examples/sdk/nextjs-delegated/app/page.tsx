'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import { useAppContext } from '../hooks/useAppContext'

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

Your customers, either new or existing, must register with Dfns first and have credential(s) in our system in order to own and be able to interact with their blockchain wallets.

The delegated registration flow allows you to initiate and and complete the registration process on your customers behalf, without them being aware that the wallets infrastructure is powered by Dfns, i.e. they will not receive an registration email from Dfns directly unlike the normal registration process for your employees. Their WebAuthn credentials are still completely under their control.

Find relevant code in:
- \`./app/register/page.tsx\` (Client-side registration page)
- \`./app/api/register/init/route.ts\` (Server registration init endpoint)
- \`./app/api/register/complete/route.ts\` (Server registration complete endpoint)
`

const step2 = `
## Step 2 - Delegated Login

The delegated signing flow does not need the end user sign with the WebAuthn credential. The login can be performed on the server side transparent to the end users and obtain a readonly auth token. For example, your server can choose to automatically login the end users upon the completion of delegated registration. In this tutorial, this step is shown as explicit in order to more clearly demonstrate how the interaction works.

Find relevant code in:
- \`./app/login/page.tsx\` (Client-side login page)
- \`./app/api/login/route.ts\` (Server login endpoint)
`

const step3 = `
## Step 3 - Wallets

Once logged in, the end users can use the wallets they own.

- \`./app/wallets/page.tsx\` (Client-side wallets page)
- \`./app/api/wallets/list/route.ts\` (Server list wallets endpoint)
- \`./app/api/wallets/signatures/init/route.ts\` (Server generate wallet signature init endpoint)
- \`./app/api/wallets/signatures/complete/route.ts\` (Server generate wallet signature complete endpoint)
`

export default function Home() {
  const { authToken } = useAppContext()

  return (
    <div>
      <ReactMarkdown>{intro}</ReactMarkdown>
      <ReactMarkdown>{prerequisites}</ReactMarkdown>
      <ReactMarkdown>{step1}</ReactMarkdown>
      <p className="text-center">
        <Link href="/register" className="btn no-underline">
          Go to Delegated Registration
        </Link>
      </p>
      <ReactMarkdown>{step2}</ReactMarkdown>
      <p className="text-center">
        <Link href="/login" className="btn no-underline">
          Go to Delegated Login
        </Link>
      </p>

      <ReactMarkdown>{step3}</ReactMarkdown>
      {!authToken ? (
        <p className="text-center">⚠️ You need Complete Step 1 first</p>
      ) : (
        <p className="text-center">
          <Link href="/wallets" className="btn no-underline">
            Go to Wallets Page
          </Link>
        </p>
      )}

      <h2>The end 🎉</h2>
    </div>
  )
}
