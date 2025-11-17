/**
 * Authentication API - Login Endpoint
 * 
 * Handles user authentication using DFNS External Signing Manager pattern.
 * Supports both new login and session restoration flows.
 * 
 * Features:
 * - Creates DFNS External Signing Manager instance
 * - Manages session state server-side
 * - Handles WebAuthn challenge coordination
 * - Session restoration from localStorage
 */

import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { DfnsExternalSigningManager, DfnsExternalCredentialSigner } from '@dfns/lib-polymesh'
import { Polymesh } from '@polymeshassociation/polymesh-sdk'
import { setUserSession, removeUserSession, getUserSession } from '@/lib/server-state'
import type { ChallengeResult } from '@dfns/lib-polymesh/src/credential-signers/external'

export async function POST(request: NextRequest) {
  let sessionId: string | undefined

  try {
    const body = await request.json()
    const { username, restoreOnly } = body
    let { sessionId } = body

    // Session Restoration Mode
    if (restoreOnly) {
      if (!sessionId) {
        return NextResponse.json(
          { success: false, error: 'Session ID is required for session restoration' },
          { status: 400 }
        )
      }

      console.log(`Attempting to restore session: ${sessionId}`)

      const existingSession = getUserSession(sessionId)
      if (!existingSession) {
        return NextResponse.json({ success: false, error: 'Session not found or expired' }, { status: 404 })
      }

      if (!existingSession.signingManager || !existingSession.authToken) {
        return NextResponse.json({ success: false, error: 'Session is incomplete' }, { status: 400 })
      }

      console.log(`Session restored successfully: ${sessionId}`)

      return NextResponse.json({
        success: true,
        sessionId: existingSession.sessionId,
        username: existingSession.username,
        message: 'Session restored successfully',
      })
    }

    // New Login Flow
    if (!username) {
      return NextResponse.json({ success: false, error: 'Username is required' }, { status: 400 })
    }

    console.log(`Starting login for user: ${username}`)

    // Environment configuration
    const config = {
      baseUrl: process.env.DFNS_API_URL,
      orgId: process.env.DFNS_ORG_ID,
      relyingPartyId: process.env.RELYING_PARTY_ID,
      relyingPartyName: process.env.RELYING_PARTY_NAME,
      polymeshNodeUrl: process.env.POLYMESH_NODE_URL,
    } // Validate required environment variables
    if (
      !config.baseUrl ||
      !config.orgId ||
      !config.relyingPartyId ||
      !config.relyingPartyName ||
      !config.polymeshNodeUrl
    ) {
      return NextResponse.json({ success: false, error: 'Missing required environment configuration' }, { status: 500 })
    }

    sessionId = uuidv4()

        // Create external credential signer for deferred challenges
    const credentialSigner = new DfnsExternalCredentialSigner({
      challengeTimeout: 2 * 60 * 1000, // 2 minutes
      autoCleanup: true,
      webAuthnConf: {
        relyingParty: {
          id: config.relyingPartyId,
          name: config.relyingPartyName,
        },
        timeout: 2 * 60 * 1000, // 2 minutes
      },
    })

    // Store initial session with credential signer immediately
    const initialSession = {
      sessionId,
      username,
      signingManager: null,
      credentialSigner,
      polymeshSdk: null,
      authToken: null,
      createdAt: Date.now(),
      lastActivity: Date.now(),
    }
    setUserSession(initialSession)

    // ==================================================================================
    // DEFERRED CHALLENGE PATTERN - Async Flow for External WebAuthn Signing
    // ==================================================================================
    //
    // This pattern allows us to:
    // 1. Return a challenge to the frontend immediately for WebAuthn signing
    // 2. Handle signing manager creation asynchronously in the background
    // 3. Properly propagate early authentication errors (401, 404, etc.) to the frontend
    //
    // The key insight is that signing manager creation and challenge resolution have
    // a specific timing dependency that we exploit for error handling.

    // STEP 1: Prepare to intercept the challenge that will be created during signing manager creation
    // This sets up a promise that will resolve when credentialSigner.sign() is called
    const challengePromise = credentialSigner.prepareForChallenge()

    // STEP 2: Start signing manager creation (this triggers DFNS authentication)
    // During this process, DFNS will call our credentialSigner.sign() method with a challenge
    // The credentialSigner will immediately resolve challengePromise with the challenge data
    // BUT the sign() method itself will block waiting for external completion (frontend WebAuthn)
    const signingManagerPromise = DfnsExternalSigningManager.create({
      connection: {
        baseUrl: config.baseUrl,
        orgId: config.orgId,
      },
      auth: {
        credentialSigner: credentialSigner,
        username,
      },
    })

    // STEP 3: Race between challenge creation and early authentication errors
    //
    // TIMING ANALYSIS:
    // - If authentication fails early (invalid username, 401, 404):
    //   signingManagerPromise rejects immediately, wins the race → error propagated
    // - If authentication succeeds:
    //   credentialSigner.sign() is called → challengePromise resolves → challenge returned
    //   signingManagerPromise remains blocked waiting for challenge completion
    //
    // This race naturally handles both success and failure cases without complex timeout logic
    const challengeOrErrorPromise = Promise.race([
      challengePromise, // Resolves when challenge is intercepted (success case)
      signingManagerPromise, // Rejects early on auth errors, otherwise blocks indefinitely
    ])

    // This runs in parallel with signing manager creation for faster overall completion
    const polymeshSdkPromise = Polymesh.connect({
      nodeUrl: config.polymeshNodeUrl as string,
    })

    // STEP 4: Handle completion of BOTH signing manager and SDK in parallel
    // This .then() runs after the challenge is completed by the frontend, not during the race above
    Promise.all([signingManagerPromise, polymeshSdkPromise])
      .then(async ([signingManager, polymeshSdk]) => {
        if (!signingManager || !polymeshSdk || !sessionId) {
          console.error('Missing required components for session completion')
          return
        }

        console.log('Signing manager and Polymesh SDK ready, connecting them...')

        try {
          // Get auth token
          const authToken = signingManager.getAuthToken()
          if (!authToken) {
            console.error('Failed to get authentication token')
            return
          }

          // Connect the signing manager to the SDK
          await polymeshSdk.setSigningManager(signingManager)

          console.log('Polymesh SDK successfully connected with signing manager')

          // Update the session with complete components
          const completeSession = {
            sessionId,
            username,
            signingManager,
            credentialSigner,
            polymeshSdk,
            authToken,
            createdAt: Date.now(),
            lastActivity: Date.now(),
          }

          setUserSession(completeSession)
          console.log(`Session updated with complete Polymesh SDK: ${sessionId}`)
        } catch (error) {
          console.error('Error connecting signing manager to Polymesh SDK:', error)
        }
      })
      .catch((error) => {
        console.error('Parallel setup failed:', error)
      })

    // STEP 5: Wait for the race to complete
    // SUCCESS: challengePromise resolves with challenge data → return to frontend immediately
    // FAILURE: signingManagerPromise rejects with auth error → thrown to outer catch block
    const challengeResult = (await challengeOrErrorPromise) as ChallengeResult

    console.log(`Challenge created for session: ${sessionId}`)

    // STEP 6: Return challenge to frontend for WebAuthn signing
    // The frontend will sign this challenge and send it back to /api/auth/complete-challenge
    // Meanwhile, signingManagerPromise continues waiting for that completion in the background
    return NextResponse.json({
      success: true,
      sessionId,
      username,
      challengeId: challengeResult.challengeId,
      challenge: challengeResult.challenge,
      webAuthnConf: challengeResult.webAuthnConf,
      message: 'Challenge generated - please sign with WebAuthn',
    })
  } catch (error) {
    console.error('Authentication error:', error)

    // Clean up session if it was created
    if (sessionId) {
      removeUserSession(sessionId)
    }

    // Preserve original HTTP status code if available, otherwise default to 500
    let httpStatus = 500
    if (typeof error === 'object' && error !== null) {
      const errorObj = error as Record<string, unknown>
      if (typeof errorObj.httpStatus === 'number') {
        httpStatus = errorObj.httpStatus
      } else if (typeof errorObj.status === 'number') {
        httpStatus = errorObj.status
      }
    }

    const errorMessage = error instanceof Error ? error.message : 'Authentication failed'

    return NextResponse.json({ success: false, error: errorMessage }, { status: httpStatus })
  }
}
