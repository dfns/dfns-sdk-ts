import { DfnsExternalSigningManager, DfnsExternalCredentialSigner } from '@dfns/lib-polymesh'
import { Polymesh } from '@polymeshassociation/polymesh-sdk'
import { GenericPolymeshTransaction } from '@polymeshassociation/polymesh-sdk/types'
import { UserActionChallenge, Fido2Assertion } from '@dfns/sdk'

/**
 * Complete user session with all required components
 */
export interface UserSession {
  sessionId: string
  username: string
  signingManager: DfnsExternalSigningManager | null
  credentialSigner: DfnsExternalCredentialSigner
  polymeshSdk: Polymesh | null
  authToken: string | null
  createdAt: number
  lastActivity: number
}

/**
 * Pending challenge for WebAuthn signing
 */
export interface PendingChallenge {
  challengeId: string
  sessionId: string
  challenge: UserActionChallenge
  createdAt: number
  resolve: (assertion: Fido2Assertion) => void
  reject: (error: Error) => void
}

/**
 * Pending transaction for execution after challenge completion
 */
interface PendingTransaction {
  transactionId: string
  sessionId: string
  challengeId: string
  transaction: GenericPolymeshTransaction<unknown, unknown> | GenericPolymeshTransaction<void, void>
  type: 'send-polyx'
  metadata: {
    fromAddress: string
    toAddress: string
    amount: string
  }
  createdAt: number
  resolve: (result: { success: boolean; transactionHash?: string; blockHash?: string; error?: string }) => void
  reject: (error: Error) => void
}

/**
 * Transaction execution result
 */
export interface TransactionResult {
  success: boolean
  transactionHash?: string
  blockHash?: string
  error?: string
}

// -------------------
// HMR-safe singleton
// -------------------
declare global {
  // eslint-disable-next-line no-var
  var __serverState:
    | {
        userSessions: Map<string, UserSession>
        pendingChallenges: Map<string, PendingChallenge>
        pendingTransactions: Map<string, PendingTransaction>
        cleanupInitialized: boolean
      }
    | undefined
}

const state = globalThis.__serverState || {
  userSessions: new Map<string, UserSession>(),
  pendingChallenges: new Map<string, PendingChallenge>(),
  pendingTransactions: new Map<string, PendingTransaction>(),
  cleanupInitialized: false,
}

globalThis.__serverState = state

const userSessions = state.userSessions
const pendingChallenges = state.pendingChallenges
const pendingTransactions = state.pendingTransactions

// Session timeout (6 hours - matches DFNS JWT validity)
const SESSION_TIMEOUT = 6 * 60 * 60 * 1000

// Challenge timeout (2 minutes)
const CHALLENGE_TIMEOUT = 2 * 60 * 1000

// Transaction timeout (10 minutes)
const TRANSACTION_TIMEOUT = 10 * 60 * 1000

/**
 * Initialize cleanup timers (called on first session creation)
 */
function initializeCleanup() {
  if (state.cleanupInitialized) return
  state.cleanupInitialized = true

  console.log('Initializing session and challenge cleanup timers')

  // Run cleanup every 5 minutes
  setInterval(() => {
    cleanupExpiredSessions()
    cleanupExpiredChallenges()
    cleanupExpiredTransactions()
  }, 5 * 60 * 1000)
}

/**
 * Clean up expired sessions
 */
function cleanupExpiredSessions() {
  const now = Date.now()
  for (const [sessionId, session] of userSessions.entries()) {
    if (now - session.lastActivity > SESSION_TIMEOUT) {
      // Use removeUserSession to ensure proper cleanup of all resources
      removeUserSession(sessionId)
      console.log(`Cleaned up expired session: ${sessionId}`)
    }
  }
}

/**
 * Clean up expired challenges
 */
function cleanupExpiredChallenges() {
  const now = Date.now()
  for (const [challengeId, challenge] of pendingChallenges.entries()) {
    if (now - challenge.createdAt > CHALLENGE_TIMEOUT) {
      challenge.reject(new Error('Challenge timeout'))
      pendingChallenges.delete(challengeId)
      console.log(`Cleaned up expired challenge: ${challengeId}`)
    }
  }
}

/**
 * Clean up expired transactions
 */
function cleanupExpiredTransactions() {
  const now = Date.now()
  for (const [transactionId, transaction] of pendingTransactions.entries()) {
    if (now - transaction.createdAt > TRANSACTION_TIMEOUT) {
      transaction.reject(new Error('Transaction timeout'))
      pendingTransactions.delete(transactionId)
      console.log(`Cleaned up expired transaction: ${transactionId}`)
    }
  }
}

/**
 * Store user session
 */
export function setUserSession(session: UserSession): void {
  initializeCleanup()
  userSessions.set(session.sessionId, session)
  console.log(`User session stored: ${session.sessionId}`)
}

/**
 * Get user session by ID
 */
export function getUserSession(sessionId: string): UserSession | undefined {
  const session = userSessions.get(sessionId)
  if (session) {
    session.lastActivity = Date.now()
  }
  return session
}

/**
 * Remove user session and clean up all resources
 */
export function removeUserSession(sessionId: string): boolean {
  const session = userSessions.get(sessionId)
  if (session) {
    // Clean up all session resources
    Promise.all([
      // Logout from DFNS if signing manager is available
      session.signingManager?.logout().catch((error) => {
        console.warn(`DFNS logout failed for session ${sessionId}:`, error)
      }),
      // Disconnect Polymesh SDK if available
      session.polymeshSdk?.disconnect().catch((error) => {
        console.warn(`Polymesh SDK disconnect failed for session ${sessionId}:`, error)
      }),
    ])
      .catch(() => {
        // Errors already logged above, continue with cleanup
      })
      .finally(() => {
        // Always destroy credential signer and remove session
        session.credentialSigner.destroy()
        userSessions.delete(sessionId)
        console.log(`Removed user session: ${sessionId}`)
      })

    return true
  }
  return false
}

/**
 * Store pending challenge
 */
export function setPendingChallenge(challenge: PendingChallenge): void {
  pendingChallenges.set(challenge.challengeId, challenge)
}

/**
 * Get pending challenge by ID
 */
export function getPendingChallenge(challengeId: string): PendingChallenge | undefined {
  return pendingChallenges.get(challengeId)
}

/**
 * Remove pending challenge
 */
export function removePendingChallenge(challengeId: string): void {
  pendingChallenges.delete(challengeId)
}

/**
 * Get all sessions (for debugging)
 */
export function getAllSessions(): UserSession[] {
  return Array.from(userSessions.values())
}

/**
 * Get all pending challenges (for debugging)
 */
export function getAllPendingChallenges(): PendingChallenge[] {
  return Array.from(pendingChallenges.values())
}

/**
 * Get pending challenges count for a session
 */
export function getPendingChallengesForSession(sessionId: string): number {
  return Array.from(pendingChallenges.values()).filter((challenge) => challenge.sessionId === sessionId).length
}

/**
 * Get credential signer for a session
 */
export function getCredentialSigner(sessionId: string): DfnsExternalCredentialSigner | undefined {
  const session = getUserSession(sessionId)
  return session?.credentialSigner
}

/**
 * Get signing manager for a session
 */
export function getSigningManager(sessionId: string): DfnsExternalSigningManager | undefined {
  const session = getUserSession(sessionId)
  return session?.signingManager || undefined
}

/**
 * Store pending transaction
 */
export function setPendingTransaction(transaction: PendingTransaction): void {
  pendingTransactions.set(transaction.transactionId, transaction)
  console.log(`Stored pending transaction: ${transaction.transactionId}`)
}

/**
 * Get pending transaction by ID
 */
export function getPendingTransaction(transactionId: string): PendingTransaction | undefined {
  return pendingTransactions.get(transactionId)
}

/**
 * Remove pending transaction
 */
export function removePendingTransaction(transactionId: string): void {
  pendingTransactions.delete(transactionId)
  console.log(`Removed pending transaction: ${transactionId}`)
}

/**
 * Get all pending transactions (for debugging)
 */
export function getAllPendingTransactions(): PendingTransaction[] {
  return Array.from(pendingTransactions.values())
}
