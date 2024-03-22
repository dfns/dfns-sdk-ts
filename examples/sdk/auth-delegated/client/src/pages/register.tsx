import React, { FormEvent } from 'react'

import '../globals.css'
import useAuth from '../hooks/useAuth'

export default function Register(): JSX.Element {
  const { register, loading, error } = useAuth()

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const credtype = formData.get('credtype') as string
    let isWebAuthn = true
    if (credtype === 'key') {
      isWebAuthn = false
    } 

    register(formData.get('username') as string, formData.get('password') as string, isWebAuthn)
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="w-full">
        <h1 className="text-2x">Register</h1>

        <div className="items-center gap-2">
          <input className="input" id="username" name="username" placeholder="username" />

          <input className="input" id="password" name="password" type="password" placeholder="password" />

          <div>
            <input type="radio" id="webauthn" name="credtype" value="webauthn" defaultChecked />
            <label htmlFor="webauthn">Webauthn</label><br />
          </div>

          <div>
            <input type="radio" id="key" name="credtype" value="key" />
            <label htmlFor="key">Key</label><br />
          </div>

          <button className="btn" disabled={loading} type="submit">
            Submit
          </button>
        </div>

        {!!error && <div className="text-red-700">{error.message}</div>}
      </div>
    </form>
  )
}
