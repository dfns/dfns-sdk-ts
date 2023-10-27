import { NextRequest, NextResponse } from 'next/server'
import { getDfnsDelegatedClient } from '../../utils'
import { RecoverUserInput, UserRecoveryCredentials } from '@dfns/sdk/codegen/datamodel/Auth'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    tempAuthToken: string
    newCredentials: UserRecoveryCredentials
    signedRecoveryPackage: RecoverUserInput
  }

  // Complete end-user recovery
  const delegatedClient = await getDfnsDelegatedClient(body.tempAuthToken)
  const result = await delegatedClient.auth.createUserRecovery({
    body: {
      newCredentials: body.newCredentials,
      recovery: body.signedRecoveryPackage,
    },
  })

  const response = NextResponse.json(result)
  return response
}
