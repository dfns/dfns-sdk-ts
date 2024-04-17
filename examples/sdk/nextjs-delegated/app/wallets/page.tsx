'use client'

import { WebAuthnSigner } from '@dfns/sdk-browser'
import { FormEvent, useEffect, useState } from 'react'

import { useAppContext } from '../../hooks/useAppContext'

export default function Wallets() {
  const [loading, setLoading] = useState(false)
  const [wallets, setWallets] = useState<any>(undefined)
  const [sighash, setSighash] = useState<any>(undefined)
  const [error, setError] = useState<any>(undefined)

  const { authToken } = useAppContext()

  const listWallets = async () => {
    try {
      setLoading(true)

      const res = await fetch('/api/wallets/list', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          authToken,
        }),
      })

      setWallets(await res.json())
      setError(undefined)
    } catch (error: any) {
      console.log(error)
      setWallets(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    listWallets()
  }, [])

  const signMessage = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const walletId = wallets.items[0].id
      const formData = new FormData(event.currentTarget)

      const initRes = await fetch('/api/wallets/signatures/init', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          authToken,
          walletId,
          message: formData.get('message') as string,
        }),
      })

      const { requestBody, challenge } = await initRes.json()

      // Sign the challenge to authorize the create wallet action
      const webauthn = new WebAuthnSigner()
      const assertion = await webauthn.sign(challenge)

      const completeRes = await fetch('/api/wallets/signatures/complete', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          authToken,
          walletId,
          requestBody,
          signedChallenge: {
            challengeIdentifier: challenge.challengeIdentifier,
            firstFactor: assertion,
          },
        }),
      })

      setSighash(await completeRes.json())
      setError(undefined)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={signMessage}>
      <div className="w-full">
        <h2>End User Wallet</h2>
        <p>
          The Ethereum testnet wallet created for the end user during registration is listed below. Listing wallets only
          needs the readonly auth token. End users will not be prompted to use their WebAuthn credentials.
        </p>
        {!!wallets && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(wallets, null, 2)}</pre>
        )}
        <p>
          Use wallets to broadcast transactions will require the end users to sign a challenge each time to authorize
          the action. For this tutorial, because new wallets do not have any native tokens to pay for gas fees, we will
          not be able to broadcast any transactions to chain. Instead, we will sign an arbitrary message that can be
          used as proof the end user is the owner of the private key secured by Dfns.
        </p>
        <p>
          Enter a message in the input box and press the &quot;Sign Message&quot; button. You will see a WebAuthn prompt
          asking for authorization to perform the action. Once granted, the tutorial makes a request to Dfns MPC signers
          and gets a signature hash. Optionally you can use{' '}
          <a href="https://etherscan.io/verifiedSignatures" target="_blank">
            etherscan
          </a>{' '}
          to verify this signature hash matches the wallet address.
        </p>
        <div className="flex items-center gap-2">
          <input type="text" name="message" placeholder="Enter your message" className="input" />
          <button className="btn" type="submit">
            Sign Message
          </button>
        </div>

        {!!sighash && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(sighash, null, 2)}</pre>
        )}

        {!!loading && <span>loading ...</span>}

        {!!error && <div className="text-red-700">{JSON.stringify(error, null, 2)}</div>}
      </div>
    </form>
  )
}
