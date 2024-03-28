'use client'

import { WebAuthnSigner } from '@dfns/sdk-browser'
import { FormEvent, useState } from 'react'

import { createRecoveryCredential, KeyClientData, signRecoveryCredentials, validateRecoveryKey } from '@/common/recoveryKey'
import { base64url } from '@/common/base64url'

export default function Recover() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const [result, setResult] = useState(undefined)

  const recover = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    const username = new FormData(event.currentTarget).get('username') as string
    const credentialId = window.localStorage.getItem('recoveryKeyCredentialId') as string
    const recoveryKey = window.localStorage.getItem('recoveryKeySecret') as string

    fetch('/api/recover/init', { method: 'POST', body: JSON.stringify({ username, credentialId }) })
      .then((result) => result.json())
      .then(async (challenge) => {
        console.log('recover init challenge', challenge)

        // Before we create the new credential we'll make sure the user provided the correct recovery key
        // to decrypted the private key.
        await validateRecoveryKey(username, {
          recoveryKey,
          credentialId,
          encryptedKey: challenge.allowedRecoveryCredentials[0].encryptedRecoveryKey,
        })
        console.log('Recovery key is valid')

        // We'll also create the new recovery key before creating the new credentials, so that if something
        // goes wrong, we have less chance of having a rouge WebAuthn credential we'll need to manually clean up.
        const clientData: KeyClientData = {
          type: 'key.create',
          challenge: base64url(challenge.challenge),
          origin: window.location.origin,
          crossOrigin: false,
        }
        const newRecoveryKey = await createRecoveryCredential(clientData, username)
        console.log('New recovery key created', newRecoveryKey.credential.credentialInfo.credId)

        const webauthn = new WebAuthnSigner()
        const attestation = await webauthn.create(challenge)
        const newCredentials = {
          firstFactorCredential: attestation,
          recoveryCredential: newRecoveryKey.credential,
        }

        // We need to sign the new credentials with the old recovery credential so that the Dfns can verify
        // that we are authorized to recover this account.
        const signedRecoveryPackage = await signRecoveryCredentials(
          username,
          {
            recoveryKey,
            credentialId,
            encryptedKey: challenge.allowedRecoveryCredentials[0].encryptedRecoveryKey,
          },
          newCredentials
        )
        console.log('Recovery credentials signed')

        const result = await fetch('./api/recover/complete', {
          method: 'POST',
          body: JSON.stringify({
            tempAuthToken: challenge.temporaryAuthenticationToken,
            newCredentials,
            signedRecoveryPackage,
          }),
        })

        // WARNING: In a production environment, it is *not* recommended that you store these values on the behalf of
        // the user. We recommend just displaying the values to the user, and asking them to store the values in a
        // secure physical or digital location.
        window.localStorage.setItem('recoveryKeySecret', newRecoveryKey.recoveryKey.secret)
        window.localStorage.setItem('recoveryKeyCredentialId', newRecoveryKey.recoveryKey.credentialId)

        return result
      })
      .then((result) => result.json())
      .then((result) => setResult(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={recover}>
      <div className="w-full">
        <h2>Delegated Recovery</h2>
        <p>
          For the purpose of this demo, you will be recovering an end user. In a production environment, you will have
          done some checks to validate the user is who they claim to be (email based code for example).
        </p>
        <p>
          Here, this will instruct the server to start the delegated recovery process for the user with the email
          you pass in.
        </p>
        <div className="flex items-center gap-2">
          <input type="email" name="username" placeholder="email" className="input" />
          <button className="btn" type="submit">
            Recover User with Dfns
          </button>
        </div>

        {!!loading && <span>loading...</span>}

        {!!error && <div className="text-red-700">{JSON.stringify(error)}</div>}

        {!!result && <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </form>
  )
}
