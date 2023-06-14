'use client'

import { FormEvent, useState } from 'react'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [result, setResult] = useState(undefined)

  const login = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email') as string

    fetch('/api/login', { method: 'POST', body: JSON.stringify({ email }) })
      .then((result) => result.json())
      .then((result) => setResult(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={login}>
      <div className="w-full">
        <h2>Delegated Login</h2>

        <p>
          This flow gets an auth token of the end user. This action can be purely done by the server, but for the
          purpose of this demo, we chose to cache the end-user Dfns auth token on the client side (in a cookie) for
          subsequent requests.
        </p>
        <p>
          Here, this will instruct the server to do delegated login (get a auth token of the end user). Then the server
          will store this token in a browser cookie, in order to be able to reuse it in subsequent calls of the rest of
          the demo.
        </p>

        <div className="flex items-center gap-2">
          <input type="email" name="email" placeholder="email" className="input" />
          <button className="btn" type="submit">
            Delegated Login
          </button>
        </div>

        {!!loading && <span>loading...</span>}

        {!!error && <div className="text-red-700">{error}</div>}

        {!!result && <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </form>
  )
}
