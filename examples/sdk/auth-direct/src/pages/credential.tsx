import React, { FormEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import useAuth from '../hooks/useAuth'
import { CreateCredentialWithCodeResponse } from '@dfns/sdk/generated/auth'

export default function Credential(): JSX.Element {
  const { createCred, loading, error } = useAuth()
  const [cred, setCred] = useState<CreateCredentialWithCodeResponse | undefined>(undefined)

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const credential = await createCred(formData.get('code') as string)

    setCred(credential)
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="w-full p-10">
        <h1 className="text-2x">Create Credential with Code</h1>

        <p>
          You can create a new Credential for an existing user on this Application, by using a Credential Code. Generate
          a new code from the Dfns Dashboard (In Settings {'>'} My Credentials). Then enter it below:
        </p>

        <div className="flex items-center gap-2">
          <input className="input" id="code" name="code" placeholder="code" />

          <button className="btn" disabled={loading || !!cred} type="submit">
            Create Cred
          </button>
        </div>

        {error && <div className="text-red-700">{error.message}</div>}

        {!cred && (
          <p>
            If your Dfns user already has a Credential available for this Application, go to <a href="/login">Login</a>.
          </p>
        )}

        {cred && (
          <>
            <p className="text-green-700">Credentials created successfully</p>
            <pre>{JSON.stringify(cred, null, 2)}</pre>
            <p>
              Now, you can <a href="/login">Login</a> using that newly created credential
            </p>
          </>
        )}
      </div>
    </form>
  )
}
