import React, { FormEvent } from 'react'

import '../globals.css'
import useAuth from '../hooks/useAuth'

export default function Register(): JSX.Element {
  const { register, loading, error } = useAuth()

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    register(formData.get('username') as string, process.env.REACT_APP_DFNS_ORG_ID!, formData.get('code') as string)
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="w-full">
        <h1 className="text-2x">Register</h1>

        <div className="flex items-center gap-2">
          <input className="input" id="username" name="username" placeholder="username" />

          <input className="input" id="code" name="code" type="code" placeholder="code" />

          <button className="btn" disabled={loading} type="submit">
            Submit
          </button>
        </div>

        {!!error && <div className="text-red-700">{error.message}</div>}
      </div>
    </form>
  )
}
