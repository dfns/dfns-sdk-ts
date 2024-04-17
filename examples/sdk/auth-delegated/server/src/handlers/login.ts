import { Request, Response } from 'express'

import { apiClient } from '../clients'

export const login = async (req: Request, res: Response) => {
  // You can perform the login flow of your system before login the user
  // to Dfns with delegated login. Delegated login does not need the
  // end user to use WebAuthn or Passkeys to login.
  const { username } = req.body
  const client = apiClient(process.env.DFNS_APP_ID!)
  const login = await client.auth.delegatedLogin({ body: { username } })

  // The auth token returned by delegated login should be cached securely for the
  // duration of the login session. It can be stored either on the server or on the
  // client. The approach is up you. For example, you can use a cookie to maintain
  // the state across requests. In this example, it's returned as the response body,
  // and cached on the client.
  res.json({ username, token: login.token })
}
