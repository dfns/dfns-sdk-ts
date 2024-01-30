import { DFNS_END_USER_TOKEN_COOKIE } from '@/common/constants'
import { BaseAuthApi, CreateUserRegistrationRequest } from '@dfns/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { dfns } from '../../utils'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    tempAuthToken: string
    signedChallenge: CreateUserRegistrationRequest
  }

  // Complete end-user registration
  const result = await BaseAuthApi.createUserRegistration(body.signedChallenge, {
    appId: process.env.DFNS_APP_ID!,
    baseUrl: process.env.DFNS_API_URL!,
    authToken: body.tempAuthToken,
  })

  // save Dfns EndUser ID in your system, eg:
  // saveUserDfnsInfo(result.user.id)

  // Create a generic permission to get/create wallets (can skip if permission was already created once)
  const permission = (
    await dfns.permissions.createPermission({
      body: {
        name: `Allow Wallet Create/Read - ${Date.now()}`,
        operations: ['Wallets:Create', 'Wallets:Read'],
      },
    })
  )

  // Grant (assign) the permission to the end-user
  const permissionAssignment = (
    await dfns.permissions.createAssignment({
      permissionId: permission.id,
      body: {
        identityId: result.user.id,
      },
    })
  )

  // Perform delegated login to get the Dfns auth token of the end-user ("on his behalf")
  const { token: userAuthToken } = await dfns.auth.createDelegatedUserLogin({
    body: { username: result.user.username },
  })

  const response = NextResponse.json({ result, permission, permissionAssignment })

  // Here we chose to cache the end-user Dfns auth token in a cookie. You could choose to cache it in a store, or not cache it at all. If not cached though, you'll need to perform delegated login every time you want to do a Dfns action on behalf of your end-user.
  response.cookies.set(DFNS_END_USER_TOKEN_COOKIE, userAuthToken)

  return response
}
