import { NextRequest, NextResponse } from 'next/server'
import { getUserSession } from '@/lib/server-state'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    const address = searchParams.get('address')

    // Validate required parameters
    if (!sessionId || !address) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters: sessionId and address' },
        { status: 400 }
      )
    }

    console.log(`Balance request - Session: ${sessionId}, Address: ${address}`)

    // Get user session
    const userSession = getUserSession(sessionId)
    if (!userSession) {
      return NextResponse.json({ success: false, error: 'Session not found or expired' }, { status: 404 })
    }

    const { polymeshSdk } = userSession
    if (!polymeshSdk) {
      return NextResponse.json({ success: false, error: 'Polymesh not connected for this session' }, { status: 500 })
    }

    console.log(`Getting balance for address: ${address}`)

    // Get the account and its balance
    const account = await polymeshSdk.accountManagement.getAccount({ address })
    const balance = await account.getBalance()

    console.log(`Balance retrieved: ${balance.free.toString()} POLYX free, ${balance.locked.toString()} POLYX locked`)

    return NextResponse.json({
      success: true,
      address,
      balance: {
        free: balance.free.toString(),
        locked: balance.locked.toString(),
        total: balance.total.toString(),
      },
    })
  } catch (error) {
    console.error('Balance API error:', error)

    // Extract meaningful error message
    let errorMessage = 'Failed to get balance'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
