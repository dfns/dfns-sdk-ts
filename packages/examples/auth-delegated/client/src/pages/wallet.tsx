import { DfnsError } from '@dfns/sdk/dfnsError'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../globals.css'
import { api } from '../api'

export default function WalletNew(): JSX.Element {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<DfnsError | undefined>(undefined)
  const navigate = useNavigate()

  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSubmitting(true)

    api
      .createWallet(formData.get('network') as string)
      .then(() => navigate('/'))
      .catch((err) => {
        setError(err)
        setSubmitting(false)
      })
  }

  return (
    <form onSubmit={handleCreate}>
      <div className="w-full">
        <h1 className="text-2x">Create Wallet</h1>

        <div className="flex items-center gap-2">
          <input className="input" id="network" name="network" placeholder="network" />

          <button className="btn" disabled={submitting} type="submit">
            Submit
          </button>
        </div>

        {!!error && <div className="text-red-700">{JSON.stringify(error.message)}</div>}
      </div>
    </form>
  )
}
