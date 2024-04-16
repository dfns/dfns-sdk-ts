import { RecoveryKeySigner, WebAuthnSigner, randomRecoveryKey } from '@dfns/sdk-browser'
import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

export default function Recover(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)
  const [recoveryKey, setRecoveryKey] = React.useState<string | undefined>(undefined)

  const { authToken } = useAppContext()

  const create = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      // Start create credential flow with a new credential challange
      const challengeRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/recover/credentials/challenge`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
          kind: 'RecoveryKey',
        }),
      })

      const challenge = await challengeRes.json()

      const recoveryKey = randomRecoveryKey()
      setRecoveryKey(recoveryKey)

      const signer = new RecoveryKeySigner(new Worker(new URL('../background/recover.ts', import.meta.url)))
      const attestation = await signer.create(recoveryKey, challenge)

      const initRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/recover/credentials/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
          credentialName: 'example recovery key',
          attestation: {
            challengeIdentifier: challenge.challengeIdentifier,
            ...attestation,
          },
        }),
      })

      // Sign the action challenge to authorize create credential
      const { requestBody, challenge: action } = await initRes.json()
      const webauthn = new WebAuthnSigner()
      const assertion = await webauthn.sign(action)

      const completeRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/recover/credentials/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
          requestBody,
          signedChallenge: {
            challengeIdentifier: action.challengeIdentifier,
            firstFactor: assertion,
          },
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
    <form onSubmit={create}>
      <div className="w-full">
        <h2>Create Recovery Credential</h2>
        <p>For this tutorial, ...</p>
        <div className="flex items-center gap-2">
          <input type="text" name="key" value={recoveryKey} className="input" disabled={true} />
          <button className="btn" type="submit">
            Create Recovery Credential
          </button>
        </div>

        {!!loading && <span>new credential ...</span>}

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
