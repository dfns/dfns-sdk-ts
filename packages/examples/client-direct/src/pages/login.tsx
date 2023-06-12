import React, { FormEvent } from 'react'

import useAuth from '../hooks/useAuth'

export default function Login(): JSX.Element {
  const { login, loading, error } = useAuth()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    login(formData.get('email') as string, process.env.REACT_APP_DFNS_ORG_ID!)
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>

      <label htmlFor="email">
        Email
        <input id="email" name="email" />
      </label>

      <button disabled={loading} type="submit">
        Submit
      </button>

      {error && <p>error.message</p>}
    </form>
  )
}
