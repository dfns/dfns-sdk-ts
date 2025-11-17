import { NextRequest, NextResponse } from 'next/server'
import { getCredentialSigner, getUserSession } from '@/lib/server-state'

/**
 * Truncate long challenge IDs for readable logging
 */
function truncateId(id: string): string {
  if (id.length <= 20) return id

  // For JWTs, show the end which contains the unique signature
  return '...' + id.substring(id.length - 20)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, challengeId, signedChallenge } = body

    if (!sessionId || !challengeId || !signedChallenge) {
      return NextResponse.json(
        { success: false, error: 'sessionId, challengeId, and signedChallenge are required' },
        { status: 400 }
      )
    }

    console.log(`Completing challenge: ${truncateId(challengeId)} for session: ${sessionId}`)

    // Get the session to check if it exists
    const session = getUserSession(sessionId)
    if (!session) {
      return NextResponse.json({ success: false, error: 'Session not found or expired' }, { status: 404 })
    }

    // Get the credential signer for this session
    const credentialSigner = getCredentialSigner(sessionId)
    if (!credentialSigner) {
      return NextResponse.json({ success: false, error: 'Credential signer not found' }, { status: 404 })
    }

    // Complete the challenge using the external credential signer
    const success = credentialSigner.completeChallenge(challengeId, signedChallenge)

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Challenge not found or already completed. The login attempt may have timed out.',
        },
        { status: 404 }
      )
    }

    console.log(`Challenge ${truncateId(challengeId)} completed successfully for session ${sessionId}`)

    // Return success - the background process will complete authentication
    return NextResponse.json({
      success: true,
      message: 'Challenge completed successfully. Authentication will complete momentarily.',
    })
  } catch (error) {
    console.error('Challenge completion error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Challenge completion failed' },
      { status: 500 }
    )
  }
}
