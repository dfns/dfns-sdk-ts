import { BrowserKeySigner } from '@dfns/sdk-browser'
import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

export default function Login(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const { keyPair, setAuthToken, orgId } = useAppContext()

  const login = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const formData = new FormData(event.currentTarget)

      // start delegated registration flow and obtain a challenge
      const initRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/login/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.get('username') as string,
          orgId,
        }),
      })

      // get the credId from the init call response
      const { challenge } = await initRes.json()
      if (challenge.allowCredentials.key.length === 0 || keyPair === undefined) {
        throw Error('The user does not have a key credential')
      }
      const credId = challenge.allowCredentials.key[0].id
      const browserKey = new BrowserKeySigner({
        credId,
        keyPair,
      })
      const assertion = await browserKey.sign(challenge)

      const completeRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/login/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          signedChallenge: {
            challengeIdentifier: challenge.challengeIdentifier,
            firstFactor: assertion,
          },
        }),
      })

      const body = await completeRes.json()

      setResponse(body)
      setError(undefined)
      setAuthToken(body.token)
    } catch (error: any) {
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={login}>
      <div className="w-full">
        <h2>Delegated Login</h2>
        <p>
          In this example, we use the regular login flow to demonstrate how to perform challenge signing with a
          `BrowserKeySigner`. The same flow applies to all end user actions that require challenge signing with the
          private key credential.
        </p>
        <div className="flex items-center gap-2">
          <input type="email" name="username" placeholder="Enter the username" className="input" />
          <button className="btn" type="submit">
            Login User
          </button>
        </div>

        {!!loading && <span>login ...</span>}

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
