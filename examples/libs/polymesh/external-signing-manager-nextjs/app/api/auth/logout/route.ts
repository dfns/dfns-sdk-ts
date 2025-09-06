import { NextRequest, NextResponse } from 'next/server'
import { getUserSession, removeUserSession } from '@/lib/server-state'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId } = body

    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'sessionId is required' }, { status: 400 })
    }

    console.log(`Logging out session: ${sessionId}`)

    const session = getUserSession(sessionId)
    if (!session) {
      return NextResponse.json({ success: false, error: 'Session not found' }, { status: 404 })
    }

    // Remove the session (this cleans up everything: Polymesh SDK, credential signer, etc.)
    removeUserSession(sessionId)

    console.log(`Session ${sessionId} logged out and cleaned up`)

    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Logout failed' },
      { status: 500 }
    )
  }
}
