import { DfnsError } from '@dfns/sdk/dfnsError'
import { BlockchainNetwork } from '@dfns/sdk/codegen/datamodel/Foundations'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { dfnsApi } from '../api'

export default function WalletNew(): JSX.Element {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<DfnsError | undefined>(undefined)
  const navigate = useNavigate()

  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSubmitting(true)

    dfnsApi()
      .wallets.createWallet({ body: { network: formData.get('network') as BlockchainNetwork } })
      .then(() => navigate('/'))
      .catch((err) => {
        setError(err)
        setSubmitting(false)
      })
  }

  return (
    <form onSubmit={handleCreate}>
      <h1>Create Wallet</h1>

      <label htmlFor="network">
        Network
        <input id="network" name="network" />
      </label>

      <button disabled={submitting} type="submit">
        Submit
      </button>

      {error && <p>error.message</p>}
    </form>
  )
}
