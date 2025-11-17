/**
 * Authentication API - Reject Challenge Endpoint
 *
 * Handles challenge rejection when users cancel WebAuthn authentication
 * or when errors occur during the challenge process.
 *
 * This prevents challenges from remaining active on the server-side
 * when users abandon the authentication flow.
 */

import { NextRequest, NextResponse } from 'next/server'
import { getUserSession } from '@/lib/server-state'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, challengeId, error } = body

    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'Session ID is required' }, { status: 400 })
    }

    if (!challengeId) {
      return NextResponse.json({ success: false, error: 'Challenge ID is required' }, { status: 400 })
    }

    console.log(`Rejecting challenge ${challengeId} for session ${sessionId}`)

    // Get the user session and credential signer
    const userSession = getUserSession(sessionId)
    if (!userSession || !userSession.credentialSigner) {
      return NextResponse.json({ success: false, error: 'Session or credential signer not found' }, { status: 404 })
    }

    // Reject the challenge using the credential signer
    const rejectionError = new Error(error || 'Challenge rejected by user')
    const wasRejected = userSession.credentialSigner.rejectChallenge(challengeId, rejectionError)

    if (!wasRejected) {
      return NextResponse.json(
        {
          success: false,
          error: 'Challenge not found or already completed. The login attempt may have timed out.',
        },
        { status: 404 }
      )
    }

    console.log(`Challenge ${challengeId} rejected successfully`)

    return NextResponse.json({
      success: true,
      message: 'Challenge rejected successfully',
    })
  } catch (error) {
    console.error('Error rejecting challenge:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to reject challenge'

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
