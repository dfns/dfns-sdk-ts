import { NextRequest, NextResponse } from 'next/server'
import { getUserSession } from '@/lib/server-state'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'Session ID is required' }, { status: 400 })
    }

    const session = getUserSession(sessionId)
    if (!session || !session.signingManager) {
      return NextResponse.json(
        { success: false, error: 'Session not found, expired, or signing manager not ready' },
        { status: 404 }
      )
    }

    try {
      const accounts = await session.signingManager.getAccountsWithMeta()

      return NextResponse.json({
        success: true,
        accounts,
      })
    } catch (error) {
      console.error('Error getting accounts:', error)
      return NextResponse.json(
        { success: false, error: error instanceof Error ? error.message : 'Failed to get accounts' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Accounts API error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to process request' },
      { status: 500 }
    )
  }
}
