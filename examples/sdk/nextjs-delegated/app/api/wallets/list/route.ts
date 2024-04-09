import { NextRequest, NextResponse } from 'next/server'

import { delegatedClient } from '../../clients'

export const POST = async (request: NextRequest) => {
  const { authToken } = await request.json()
  const client = delegatedClient(authToken)

  const wallets = await client.wallets.listWallets({})
  return NextResponse.json(wallets)
}
