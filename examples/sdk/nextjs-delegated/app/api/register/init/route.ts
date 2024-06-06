import { NextResponse } from 'next/server'

import { apiClient } from '../../clients'

export const POST = async (req: Request) => {
  // You can perform the registration flow of your system before starting the
  // Dfns delegated registration.
  const { username } = await req.json()

  // Registration must use the appId and appOrigin of the client application,
  // otherwise the challenge returned does not have the appropriate relying
  // party and origin to create the WebAuthn or Passkeys credential
  const client = apiClient()
  const challenge = await client.auth.createDelegatedRegistrationChallenge({
    body: { kind: 'EndUser', email: username },
  })

  console.debug(challenge)

  return NextResponse.json(challenge)
}
