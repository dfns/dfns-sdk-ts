import { WebAuthn } from '@dfns/sdk-webauthn'
import { BrowserKeySigner } from '@dfns/sdk-browsersigner'
import { Fido2Assertion, KeyAssertion } from '@dfns/sdk'
import React, { FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

export default function Wallets(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const { authToken, keyPair } = useAppContext()

  const listWallets = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/wallets/list`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
        }),
      })

      setResponse(await res.json())
      setError(undefined)
    } catch (error: any) {
      console.log(error)
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    listWallets()
  }, [])

  const create = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const initRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/wallets/new/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
        }),
      })

      const { requestBody, challenge } = await initRes.json()

      let assertion: Fido2Assertion | KeyAssertion

      // If keypair is undefined then webauthn is used
      if (keyPair === undefined) {
        // Sign the challenge to authorize the create wallet action
        const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
        assertion = await webauthn.sign(challenge.challenge, challenge.allowCredentials)
      }
      else {
        // Here we retrieve the credId from the init call response
        if (challenge.allowCredentials.key.length === 0) {
          throw Error('The user does not have a key credential')
        }
        const credId = challenge.allowCredentials.key[0].id
        const browserKey = new BrowserKeySigner({
          keyPair: keyPair,
          credId: credId,
          appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!,
        })
        assertion = await browserKey.sign(challenge.challenge, challenge.allowCredentials)
      }

      await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/wallets/new/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: process.env.REACT_APP_DFNS_APP_ID!,
          authToken,
          requestBody,
          signedChallenge: {
            challengeIdentifier: challenge.challengeIdentifier,
            firstFactor: assertion,
          },
        }),
      })

      await listWallets()
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={create}>
      <div className="w-full">
        <h2>End User Wallets</h2>
        <p>
          Listing the wallets only needs the readonly auth token and do not use WebAuthn signing. You won't be prompted
          to use the credential on screen load.
        </p>
        {!!response && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(response, null, 2)}</pre>
        )}
        <p>
          Creating a new wallet will require the end user to sign a challenge in order to complete the request. You will
          see the WebAuthn prompt show up after pressing the "Create New Wallet" button. After the action is authorized,
          a new wallet is created for the logged in end user.
        </p>
        <p className="text-center">
          <button className="btn" type="submit">
            Create New Wallet
          </button>
        </p>

        {!!loading && <span>loading ...</span>}

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
