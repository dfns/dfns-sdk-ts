import { UserAuthKind } from '@dfns/sdk/codegen/datamodel/Auth'
import { NextResponse } from 'next/server'
import { dfns } from '../../utils'

export async function POST(request: Request) {
  const body = (await request.json()) as { email: string }

  // Initiate end-user delegated registration
  const registrationChallenge = await dfns.auth.createDelegatedRegistrationChallenge({
    body: { email: body.email, kind: UserAuthKind.EndUser },
  })

  return NextResponse.json(registrationChallenge)
}
