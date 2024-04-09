import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import '../globals.css'

const introText = `
## Introduction
This tutorial app demonstrates how to use browser key signer with Dfns SDK. When using the browser key signer, you are responsible for securely storing and loading the private key. When possible, we recommend WebAuthn instead.
`

const registerText = `
## Step 1 - Browser Key Registration

Demonstrates how to register a new end user with a self-managed key pair using the \`BrowserKeySigner\`.
`

const registerCode = `
Find relevant code in the following files
- \`./web/pages/Register.tsx\`, client side
- \`./server/src/handlers/register.ts\`, server side
`

const loginText = `
## Step 2 - Browser Key Login

Demonstrates how to login and perform general actions with a self-managed key pair using the \`BrowserKeySigner\`.
`

const loginCode = `
Find relevant code in the following files
- \`./web/pages/Login.tsx\`, client side
- \`./server/src/handlers/login.ts\`, server side
`

export default function Home(): JSX.Element {
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
      <p className="text-center">
        <h2>The end 🎉</h2>
      </p>
    </div>
  )
}
