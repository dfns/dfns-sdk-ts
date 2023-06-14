'use client'

import { WebauthnSigner } from '@/../../sdk-webauthn-signer'
import { FormEvent, useState } from 'react'

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
        const webauthN = new WebauthnSigner({ rpId: process.env.NEXT_PUBLIC_DFNS_WEBAUTHN_RPID! })
        const signedChallenge = await webauthN.createCredAndSignRegistrationChallenge(challenge)
        return fetch('./api/register/complete', {
          method: 'POST',
          body: JSON.stringify({
            tempAuthToken: challenge.temporaryAuthenticationToken,
            signedChallenge,
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

        {!!error && <div className="text-red-700">{error}</div>}

        {!!result && <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </form>
  )
}
