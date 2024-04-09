import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { useAppContext } from '../hooks/useAppContext'

export default function Login(): JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const { setAuthToken } = useAppContext()

  const login = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()

      const formData = new FormData(event.currentTarget)

      // start delegated registration flow and obtain a challenge
      const loginRes = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL!}/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.get('username') as string,
        }),
      })

      const body = await loginRes.json()

      setResponse(body)
      setError(undefined)
      setAuthToken(body.token)
    } catch (error: any) {
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={login}>
      <div className="w-full">
        <h2>Delegated Login</h2>
        <p>
          For this tutorial, the delegated login flow is started on the client side by pressing the "Login EndUser" button.
          A request is sent to the server and a readonly auth token is returned in the response. This flow does not need
          users to sign with the WebAuthn crendetial.
        </p>
        <p>
          This auth token is readonly and needs to be cached and passed along with all requests interacting with the
          Dfns API. To clearly demonstrate all the necessary components for each step, this example will cache the auth
          token in the application context and send it back with every sequently request to the server. You should
          however choose a more secure caching method.
        </p>
        <div className="flex items-center gap-2">
          <input type="email" name="username" placeholder="Enter the username" className="input" />
          <button className="btn" type="submit">
            Login EndUser
          </button>
        </div>

        {!!loading && <span>login ...</span>}

        {!!response && (
          <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(response, null, 2)}</pre>
        )}

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
