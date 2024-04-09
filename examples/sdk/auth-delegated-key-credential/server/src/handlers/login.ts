import { Request, Response } from 'express'

import { apiClient } from '../clients'

export const loginInit = async (req: Request, res: Response) => {
  const { username, orgId } = req.body

  const client = apiClient(process.env.DFNS_APP_ID!)
  const challenge = await client.auth.createLoginChallenge({ body: { username, orgId } })

  console.debug(challenge)

  res.json({ challenge })
}

export const loginComplete = async (req: Request, res: Response) => {
  const { signedChallenge } = req.body

  const client = apiClient(process.env.DFNS_APP_ID!)
  const login = await client.auth.login({ body: signedChallenge })

  console.debug(login)

  // The auth token returned by delegated login should be cached securely for the
  // duration of the login session. It can be stored either on the server or on the
  // client. The approach is up you. For example, you can use a cookie to maintain
  // the state across requests. In this example, it's returned as the response body,
  // and cached on the client.
  res.json(login)
}
