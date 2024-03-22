import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

const introText = `
## Introduction
This tutorial app demonstrates how to use Dfns SDK in the following configuration:
- You have a server and a web single page application.
- You are not a custodian, and your customers own their wallets.
- Your customers will use WebAuthn (preferred) or a key credential (discourage as it comes with security risks) credentials to authenticate with Dfns.
- Your client applications communicates with your server, and does not call the Dfns API directly.
- Your server communicates with the Dfns API using a service account.
`

const registerText = `
## Step 1 - Delegated Registration

Your customers, either new or existing, must register with Dfns first and have credential(s) in our system in order to own and be able to interact with their blockchain wallets.

The delegated registration flow allows you to initiate and and complete the registration process on your customers behalf, without them being aware that the wallets infrastructure is powered by Dfns, i.e. they will not receive an registration email from Dfns directly unlike the normal registration process for your employees. Their WebAuthn credentials are still completely under their control.
`

const registerCode = `
Find relevant code in the following files
- \`./web/pages/Register.tsx\`, client side
- \`./server/src/handlers/register.ts\`, server side
`

const loginText = `
## Step 2 - Delegated Login

The delegated signing flow does not need the end user sign with the WebAuthn credential. The login can be performed on the server side transparent to the end user and obtain a readonly auth token. For example, your server can choose to automatically login the end user upon the completion of delegated registration. In this tutorial, this step is shown as explicit in order to more clearly demonstrate how the interaction works.
`

const loginCode = `
Find relevant code in the following files
- \`./web/pages/Login.tsx\`, client side
- \`./server/src/handlers/login.ts\`, server side
`

const walletsText = `
## Step 3 - Wallets

Once logged in, your end user can retrieve the list of wallets he owns, and create new ones.
`

const walletsCode = `
Find relevant code in the following files
- \`./web/pages/Wallets.tsx\`, client side
- \`./server/src/handlers/wallets.ts\`, server side
`

export default function Home(): JSX.Element {
  const { authToken } = useAppContext()

  return (
    <div>
      <p className="py-5 mb-4 flex justify-center">
        <img src="/logo.png" alt="" width={100} height={100} />
      </p>
      <p className="text-center" style={{ fontSize: '32', fontWeight: '700' }}>
        Dfns Tutorial
      </p>
      <ReactMarkdown>{introText}</ReactMarkdown>
      <ReactMarkdown>{registerText}</ReactMarkdown>
      <p className="text-center">
        <Link to="/register" className="btn no-underline">
          Go to Delegated Registration
        </Link>
      </p>
      <ReactMarkdown>{registerCode}</ReactMarkdown>
      <ReactMarkdown>{loginText}</ReactMarkdown>
      <p className="text-center">
        <Link to="/login" className="btn no-underline">
          Go to Delegated Login
        </Link>
      </p>
      <ReactMarkdown>{loginCode}</ReactMarkdown>
      <ReactMarkdown>{walletsText}</ReactMarkdown>
      <p className="text-center">
        {authToken ? (
          <Link to="/wallets" className="btn no-underline">
            Go to Wallets
          </Link>
        ) : (
          <p className="text-center">⚠️ You need to complete step 1 and 2 first</p>
        )}
      </p>
      <ReactMarkdown>{walletsCode}</ReactMarkdown>
      <p className="text-center">
        <h2>The end 🎉</h2>
      </p>
    </div>
  )
}
