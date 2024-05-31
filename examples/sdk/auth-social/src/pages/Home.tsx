import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

const introText = `
## Introduction
This tutorial app demonstrates how to use Dfns SDK in the following configuration:
- You have a web application.
- You are not a custodian, and your customers own their wallets.
- Your customers will use WebAuthn (preferred) or a key credential (discourage as it comes with security risks) credentials to authenticate with Dfns.
- Your web application communicates with the Dfns API directly.
`

const registerText = `
## Step 1 - Social Registration and Login

Your customers, either new or existing, must register with Dfns first and have credential(s) in our system in order to own and be able to interact with their blockchain wallets.

The social registration flow allows you to initiate and and complete the registration process using a Social Login Provider such as Google, without them being aware that the wallets infrastructure is powered by Dfns, i.e. they will not receive an registration email from Dfns directly unlike the normal registration process for your employees. Their WebAuthn credentials are still completely under their control.

At the end of the registration process, an authentication token is returned to the user to perform read only operations
`

const registerCode = `
Find relevant code in the following files
- \`./web/pages/Register.tsx\`,
`


const walletsText = `
## Step 2 - Wallets

Once logged in, the end users can use the wallets they own.
`

const walletsCode = `
Find relevant code in the following files
- \`./web/pages/Wallets.tsx\`, 
`

export default function Home() {

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
          Go to Social Registration/Login
        </Link>
      </p>
      <ReactMarkdown>{registerCode}</ReactMarkdown>
      <ReactMarkdown>{walletsText}</ReactMarkdown>
      <p className="text-center">
        {authToken ? (
          <Link to="/wallets" className="btn no-underline">
            Go to Wallets
          </Link>
        ) : (
          <p className="text-center">⚠️ You need to complete step 1 first</p>
        )}
      </p>
      <ReactMarkdown>{walletsCode}</ReactMarkdown>
      <p className="text-center">
        <h2>The end 🎉</h2>
      </p>
    </div>
  )
}
