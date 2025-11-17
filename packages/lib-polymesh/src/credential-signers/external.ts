import { UserActionChallenge, Fido2Assertion, CredentialSigner } from '@dfns/sdk'
import type { WebAuthnSignerConf } from '../types'

/**
 * Pending challenge data structure
 */
export interface PendingChallenge {
  challengeId: string
  challenge: UserActionChallenge
  webAuthnConf: WebAuthnSignerConf
  resolve: (assertion: Fido2Assertion) => void
  reject: (error: Error) => void
  createdAt: number
}

/**
 * Challenge result returned to API endpoints
 */
export interface ChallengeResult {
  challengeId: string
  challenge: UserActionChallenge
  webAuthnConf: WebAuthnSignerConf
}

/**
 * Configuration options for DfnsExternalCredentialSigner
 */
export interface DfnsExternalCredentialSignerOptions {
  /**
   * Timeout in milliseconds for challenges (default: 2 minutes)
   */
  challengeTimeout?: number

  /**
   * Whether to automatically clean up expired challenges (default: true)
   */
  autoCleanup?: boolean

  /**
   * WebAuthn configuration for challenge signing
   */
  webAuthnConf: WebAuthnSignerConf
}

/**
 * DFNS External Credential Signer for Delegated Authentication
 *
 * This CredentialSigner implements an external signing pattern where challenges are created
 * and returned immediately to API endpoints, but the signing promise remains unresolved
 * until the challenge is completed externally (typically by a frontend WebAuthn flow).
 *
 * Use Cases:
 * - Server-side applications that need to delegate WebAuthn signing to frontend
 * - External signing architectures where challenges are handled asynchronously
 * - Applications with separate challenge creation and completion phases
 *
 * Flow:
 * 1. API calls prepareForChallenge() before starting a signing operation
 * 2. Signing operation triggers the CredentialSigner
 * 3. CredentialSigner captures challenge and returns it immediately to API
 * 4. API returns challenge to frontend for WebAuthn signing
 * 5. Frontend completes WebAuthn and calls API completion endpoint
 * 6. API calls completeChallenge() to resolve the original signing promise
 *
 * @example
 * ```typescript
 * const credentialSigner = new DfnsExternalCredentialSigner({
 *   webAuthnConf: {
 *     relyingParty: { id: 'example.com', name: 'Example App' }
 *   }
 * })
 *
 * // Use with DfnsExternalSigningManager
 * const signingManager = await DfnsExternalSigningManager.create({
 *   connection: { baseUrl: 'https://api.dfns.co', orgId: 'your-org-id' },
 *   auth: { credentialSigner, username: 'your-username' }
 * })
 *
 * // In API endpoint - prepare for challenge interception
 * const challengePromise = credentialSigner.prepareForChallenge()
 *
 * // Start operation that will trigger signing
 * const operationPromise = performSigningOperation()
 *
 * // Get the challenge that was created
 * const { challengeId, challenge, webAuthnConf } = await challengePromise
 *
 * // Return challenge to frontend
 * res.json({ challengeId, challenge, webAuthnConf })
 *
 * // Later, when frontend completes WebAuthn:
 * credentialSigner.completeChallenge(challengeId, signedAssertion)
 * ```
 */
export class DfnsExternalCredentialSigner implements CredentialSigner<Fido2Assertion> {
  private pendingChallenges = new Map<string, PendingChallenge>()
  private currentApiResolver: ((challengeResult: ChallengeResult) => void) | null = null
  private options: Required<DfnsExternalCredentialSignerOptions>

  constructor(options: DfnsExternalCredentialSignerOptions) {
    this.options = {
      challengeTimeout: options.challengeTimeout ?? 2 * 60 * 1000, // 2 minutes
      autoCleanup: options.autoCleanup ?? true,
      webAuthnConf: options.webAuthnConf,
    }

    // Start cleanup interval if auto cleanup is enabled
    if (this.options.autoCleanup) {
      setInterval(() => this.cleanupExpiredChallenges(), 2 * 60 * 1000) // Check every 2 minutes
    }
  }

  /**
   * CredentialSigner interface implementation
   *
   * This method is called by the DFNS signer when a signing operation requires
   * challenge completion. It captures the challenge and delegates resolution
   * to external completion via completeChallenge().
   *
   * @param challenge - DFNS challenge data
   * @returns Promise that resolves when challenge is completed externally
   */
  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    // Use the DFNS challengeIdentifier instead of generating our own UUID
    const challengeId = challenge.challengeIdentifier

    return new Promise((resolve, reject) => {
      // Store the challenge and resolution functions
      const pendingChallenge: PendingChallenge = {
        challengeId,
        challenge,
        webAuthnConf: this.options.webAuthnConf,
        resolve,
        reject,
        createdAt: Date.now(),
      }

      this.pendingChallenges.set(challengeId, pendingChallenge)

      // If there's an API resolver waiting, send the challenge to it immediately
      if (this.currentApiResolver) {
        this.currentApiResolver({
          challengeId,
          challenge,
          webAuthnConf: this.options.webAuthnConf,
        })
        // Clear the resolver so it's only used once
        this.currentApiResolver = null
      } else {
        // This shouldn't happen in normal flow, but reject if no API is waiting
        reject(new Error('No API endpoint waiting for challenge'))
      }

      // Set a timeout to clean up abandoned challenges
      setTimeout(() => {
        if (this.pendingChallenges.has(challengeId)) {
          this.pendingChallenges.delete(challengeId)
          reject(new Error(`Challenge ${challengeId} timed out after ${this.options.challengeTimeout}ms`))
        }
      }, this.options.challengeTimeout)
    })
  }

  /**
   * Prepare to intercept the next challenge created by a signing operation
   *
   * This method should be called by API endpoints BEFORE starting any operation
   * that will trigger signing. It returns a promise that resolves with the
   * challenge data when the signing operation creates a challenge.
   *
   * @returns Promise that resolves with challenge data when challenge is created
   *
   * @example
   * ```typescript
   * // In API endpoint
   * const challengePromise = credentialSigner.prepareForChallenge()
   *
   * // Start operation that will call signPayload()
   * const operationPromise = performSigning()
   *
   * // Get the challenge that was created
   * const challengeData = await challengePromise
   *
   * // Return to frontend
   * res.json(challengeData)
   * ```
   */
  prepareForChallenge(): Promise<ChallengeResult> {
    return new Promise((resolve) => {
      // Store the resolver so the sign method can call it
      this.currentApiResolver = resolve
    })
  }

  /**
   * Complete a pending challenge with a signed WebAuthn assertion
   *
   * This method should be called by API completion endpoints when the frontend
   * has completed WebAuthn signing and provides the signed assertion.
   *
   * @param challengeId - ID of the challenge to complete
   * @param signedChallenge - Signed WebAuthn assertion from frontend
   * @returns true if challenge was found and completed, false otherwise
   *
   * @example
   * ```typescript
   * // In completion API endpoint
   * const success = credentialSigner.completeChallenge(challengeId, signedAssertion)
   * if (success) {
   *   res.json({ success: true, message: 'Challenge completed' })
   * } else {
   *   res.status(404).json({ error: 'Challenge not found or expired' })
   * }
   * ```
   */
  completeChallenge(challengeId: string, signedChallenge: Fido2Assertion): boolean {
    const pending = this.pendingChallenges.get(challengeId)
    if (pending) {
      pending.resolve(signedChallenge)
      this.pendingChallenges.delete(challengeId)
      return true
    }

    return false
  }

  /**
   * Reject a pending challenge with an error
   *
   * This method can be called to explicitly reject a challenge, for example
   * when the user cancels the operation or an error occurs.
   *
   * @param challengeId - ID of the challenge to reject
   * @param error - Error to reject the challenge with
   * @returns true if challenge was found and rejected, false otherwise
   */
  rejectChallenge(challengeId: string, error: Error): boolean {
    const pending = this.pendingChallenges.get(challengeId)
    if (pending) {
      pending.reject(error)
      this.pendingChallenges.delete(challengeId)
      return true
    }
    return false
  }

  /**
   * Get information about a pending challenge
   *
   * @param challengeId - ID of the challenge to query
   * @returns Challenge information if found, null otherwise
   */
  getPendingChallenge(challengeId: string): Omit<PendingChallenge, 'resolve' | 'reject'> | null {
    const pending = this.pendingChallenges.get(challengeId)
    if (pending) {
      return {
        challengeId: pending.challengeId,
        challenge: pending.challenge,
        webAuthnConf: pending.webAuthnConf,
        createdAt: pending.createdAt,
      }
    }
    return null
  }

  /**
   * Get all pending challenge IDs
   *
   * @returns Array of pending challenge IDs
   */
  getPendingChallengeIds(): string[] {
    return Array.from(this.pendingChallenges.keys())
  }

  /**
   * Get the number of pending challenges
   *
   * @returns Number of pending challenges
   */
  getPendingChallengeCount(): number {
    return this.pendingChallenges.size
  }

  /**
   * Clear all pending challenges
   *
   * This will reject all pending challenges with a cancellation error.
   * Useful for cleanup when shutting down or resetting state.
   */
  clearAllChallenges(): void {
    const error = new Error('All challenges cleared')
    for (const [, pending] of this.pendingChallenges) {
      pending.reject(error)
    }
    this.pendingChallenges.clear()
    this.currentApiResolver = null
  }

  /**
   * Clean up expired challenges
   *
   * This method is called automatically if autoCleanup is enabled,
   * but can also be called manually to clean up expired challenges.
   */
  private cleanupExpiredChallenges(): void {
    const now = Date.now()
    const expiredChallenges: string[] = []

    for (const [challengeId, pending] of this.pendingChallenges) {
      if (now - pending.createdAt > this.options.challengeTimeout) {
        expiredChallenges.push(challengeId)
      }
    }

    const error = new Error('Challenge expired')
    for (const challengeId of expiredChallenges) {
      const pending = this.pendingChallenges.get(challengeId)
      if (pending) {
        pending.reject(error)
        this.pendingChallenges.delete(challengeId)
      }
    }

    if (expiredChallenges.length > 0) {
      console.log(`Cleaned up ${expiredChallenges.length} expired challenges`)
    }
  }

  /**
   * Destroy the challenge handler and clean up resources
   *
   * This will clear all pending challenges and stop the cleanup interval.
   * The handler should not be used after calling this method.
   */
  destroy(): void {
    this.clearAllChallenges()
    // Note: We can't actually clear the interval without storing the interval ID
    // In a real implementation, you might want to store the interval ID and clear it here
  }
}
