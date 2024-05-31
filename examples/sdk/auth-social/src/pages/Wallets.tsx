import React, { FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { dfnsApi } from '../api'
import { Buffer } from 'buffer'

export default function Wallets() {
  const [loading, setLoading] = React.useState(false)
  const [wallets, setWallets] = React.useState<any>(undefined)
  const [sighash, setSighash] = React.useState<any>(undefined)
  const [error, setError] = React.useState<any>(undefined)

  const listWallets = async () => {
    try {
      setLoading(true)
      const wallets = await dfnsApi().wallets.listWallets()
      setWallets(wallets)
      setError(undefined)
    } catch (error: any) {
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
    event.preventDefault()
    setLoading(true)
    try {
      const walletId = wallets.items[0].id
      const formData = new FormData(event.currentTarget)

      const result = await dfnsApi().wallets.generateSignature({
        walletId,
        body: {
          kind: "Message",
          message: Buffer.from(formData.get('message') as string, 'utf-8').toString('hex'),
        }
      })

      setSighash(result)
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
          The Ethereum testnet wallet created for the end user during registration is listed below. Listing wallets
          only needs the readonly auth token. End users won't be prompted to use their WebAuthn credentials.
        </p>
        {!!wallets && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(wallets, null, 2)}</pre>
        )}
        <p>
          Use wallets to broadcast transactions will require the end users to sign a challenge each time to authorize
          the action. For this tutorial, because new wallets do not have any native tokens to pay for gas fees, we won't
          be able to broadcast any transactions to chain. Instead, we will sign an arbitrary message that can be used as
          proof the end user is the owner of the private key secured by Dfns.
        </p>
        <p>
          Enter a message in the input box and press the "Sign Message" button. You will see a WebAuthn prompt asking
          for authorization to perform the action. Once granted, the tutorial makes a request to Dfns MPC signers and
          gets a signature hash. Optionally you can use{' '}
          <a href="https://etherscan.io/verifiedSignatures" rel="noreferrer" target="_blank">
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

        <p>
          <Link to="/" className="btn no-underline">
            ← Back to main page
          </Link>
        </p>
      </div>
    </form>
  )
}
