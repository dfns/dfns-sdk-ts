import { BrowserKeySigner } from '@dfns/sdk-browsersigner'
import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

export default function Register(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const { setKeyPair } = useAppContext()

  const register = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const formData = new FormData(event.currentTarget)

      // Start delegated registration flow. Server needs to obtain the challenge with the appId
      // and appOrigin of the mobile application. For simplicity, they are included as part of
      // the request body. Alternatively, they can be sent as headers or with other approaches.
      const initRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/register/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!,
          username: formData.get('username') as string,
        }),
      })
      const challenge = await initRes.json()
      console.log(JSON.stringify(challenge, null, 2))

      // Key pair flow
      // Key is generated randomly here
      // In a production environment they key should be protected 
      // and loaded securely in the browser
      const generatedKeyPair = await crypto.subtle.generateKey(
        { name: 'ECDSA', namedCurve: 'P-256' },
        true,
        ['sign', 'verify']
      )
      // Here the private key is set as a session variable
      // key will not exists upon referesh or logout
      setKeyPair(generatedKeyPair)
      const browserKey = new BrowserKeySigner({
        keyPair: generatedKeyPair,
        appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!,
      })
      const attestation = await browserKey.create(challenge)

      console.log(JSON.stringify(attestation, null, 2))

      // Finish delegated registration
      const completeRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/register/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          signedChallenge: { firstFactorCredential: attestation },
          temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
        }),
      })

      setResponse(await completeRes.json())
      setError(undefined)
    } catch (error: any) {
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={register}>
      <div className="w-full">
        <h2>Delegated Registration</h2>
        <p>
          For this tutorial, you need to register a Dfns EndUser, and this is where the registration flow starts.
          However, in your final app, the flow may be different and the username might come from your internal system.
        </p>
        <p>Enter the email as the username you are registering, and hit the "Register User" button.</p>
        <div className="flex items-center gap-2">
          <input type="email" name="username" placeholder="Choose a username" className="input" />
          <button className="btn" type="submit">
            Register User
          </button>
        </div>

        {!!loading && <span>registering ...</span>}

        {!!response && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(response, null, 2)}</pre>
        )}

        {!!error && <div className="text-red-700">{JSON.stringify(error, null, 2)}</div>}

        <p>
          <Link to="/" className="btn no-underline">
            ← Back to main page
          </Link>
        </p>
      </div>
    </form>
  )
}
