'use client'

import { WebAuthnSigner } from '@dfns/sdk-browser'
import { FormEvent, useState } from 'react'

import { createRecoveryCredential, KeyClientData } from '@/common/recoveryKey'
import { base64url } from '@/common/base64url'

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const [result, setResult] = useState(undefined)

  const register = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email') as string

    fetch('/api/register/init', { method: 'POST', body: JSON.stringify({ email }) })
      .then((result) => result.json())
      .then(async (challenge) => {
        console.log('register init challenge', challenge)
        const webauthn = new WebAuthnSigner()
        const attestation = await webauthn.create(challenge)
        const clientData: KeyClientData = {
          type: 'key.create',
          challenge: base64url(challenge.challenge),
          origin: window.location.origin,
          crossOrigin: false,
        }
        const newRecoveryKey = await createRecoveryCredential(clientData, email)

        // WARNING: In a production environment, it is *not* recommended that you store these values on the behalf of
        // the user. We recommend just displaying the values to the user, and asking them to store the values in a
        // secure physical or digital location.
        window.localStorage.setItem('recoveryKeySecret', newRecoveryKey.recoveryKey.secret)
        window.localStorage.setItem('recoveryKeyCredentialId', newRecoveryKey.recoveryKey.credentialId)

        return fetch('./api/register/complete', {
          method: 'POST',
          body: JSON.stringify({
            tempAuthToken: challenge.temporaryAuthenticationToken,
            signedChallenge: { firstFactorCredential: attestation, recoveryCredential: newRecoveryKey.credential },
          }),
        })
      })
      .then((result) => result.json())
      .then((result) => setResult(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={register}>
      <div className="w-full">
        <h2>Delegated Registration</h2>
        <p>
          For the purpose of this demo, you need to register a Dfns EndUser, and this is where the registration flow
          starts. However, in your final app, the flow may be different and the user email might come from your
          database, your auth system, etc...
        </p>
        <p>
          Here, this will instruct the server to start the delegated registration process for the user with the email
          you pass in.
        </p>
        <div className="flex items-center gap-2">
          <input type="email" name="email" placeholder="email" className="input" />
          <button className="btn" type="submit">
            Register User with Dfns
          </button>
        </div>

        {!!loading && <span>loading...</span>}

        {!!error && <div className="text-red-700">{JSON.stringify(error)}</div>}

        {!!result && <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </form>
  )
}
