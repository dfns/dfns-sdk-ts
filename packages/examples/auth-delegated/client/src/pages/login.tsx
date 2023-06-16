import React, { FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../globals.css'
import useAuth from '../hooks/useAuth'

export default function Login(): JSX.Element {
  const { login, loading, error } = useAuth()
  const location = useLocation()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    login(formData.get('username') as string, formData.get('password') as string)
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="w-full">
        <h1 className="text-2x">Login</h1>

        <div className="flex items-center gap-2">
          <input
            className="input"
            id="username"
            name="username"
            placeholder="username"
            value={location.state?.username}
          />

          <input className="input" id="password" name="password" type="password" placeholder="password" />

          <button className="btn" disabled={loading} type="submit">
            Submit
          </button>
        </div>

        <div className="flex items-center gap-2">
          or{' '}
          <Link className="btn" to="/register">
            Register
          </Link>
        </div>

        {!!error && <div className="text-red-700">{error.message}</div>}
      </div>
    </form>
  )
}
