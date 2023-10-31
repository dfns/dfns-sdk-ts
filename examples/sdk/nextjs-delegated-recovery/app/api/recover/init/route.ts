import { NextResponse } from 'next/server'
import { dfns } from '../../utils'

export async function POST(request: Request) {
  const body = (await request.json()) as { username: string, credentialId: string }

  // Initiate end-user delegated recovery
  const registrationChallenge = await dfns.auth.createDelegatedUserRecovery({
    body: { username: body.username, credentialId: body.credentialId },
  })

  return NextResponse.json(registrationChallenge)
}
