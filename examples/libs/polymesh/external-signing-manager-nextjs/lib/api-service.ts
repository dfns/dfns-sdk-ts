/**
 * Centralized API Service Layer for DFNS External Signing Manager
 *
 * This service provides a unified interface for all API interactions in the External Signing Manager pattern.
 * Key features:
 * - Dynamic WebAuthn signer creation from challenge responses
 * - Comprehensive error handling with structured error types
 * - Progress callback support for user feedback
 * - Type-safe API interfaces with full TypeScript coverage
 * - Centralized authentication, wallet, account, and transaction operations
 *
 * Architecture Benefits:
 * - Single point of API interaction for frontend components
 * - Consistent error handling and response formatting
 * - Abstraction of WebAuthn complexity from UI components
 * - Reusable progress notification patterns
 */

import { WebAuthnSigner } from '@dfns/sdk-browser'
import { UserActionChallenge } from '@dfns/sdk'
import {
  WalletInfo,
  AccountInfo,
  API_ENDPOINTS,
  BalanceInfo,
  SendPolyxResponse,
  BalanceResponse,
  CompleteTransactionResponse,
} from './api-types'

// Types for this service
export interface LoginConfig {
  username?: string // Optional for session restoration
  restoreOnly?: boolean // Flag for session restoration mode
  sessionId?: string // Existing session ID for restoration
}

export interface LoginResult {
  sessionId: string
  username: string
}

export interface LoginResponse {
  success: boolean
  sessionId?: string
  username?: string
  message?: string
  error?: string
}

export interface ChallengeResponse {
  success: boolean
  sessionId: string
  challengeId: string
  challenge: UserActionChallenge
  webAuthnConf?: unknown
  message?: string
}

export interface LogoutResult {
  success: boolean
}

export interface CompleteChallengeResponse {
  success: boolean
  message?: string
  error?: string
}

export interface WalletsResponse {
  success: boolean
  wallets: WalletInfo[]
}

export interface AccountsResponse {
  success: boolean
  accounts: AccountInfo[]
}

export interface ApiServiceError extends Error {
  status?: number
  code?: string
}

/**
 * Creates structured API errors with additional context for debugging
 */
function createApiError(message: string, status?: number, code?: string): ApiServiceError {
  const error = new Error(message) as ApiServiceError
  error.status = status
  error.code = code
  return error
}

/**
 * Handles WebAuthn signing with automatic challenge rejection on errors
 *
 * This function provides consistent error handling and cleanup for WebAuthn operations
 * across both authentication and transaction flows.
 */
async function signWebAuthnChallenge(
  webAuthnSigner: WebAuthnSigner,
  challenge: UserActionChallenge,
  sessionId: string,
  challengeId: string,
  operation: 'authentication' | 'transaction',
  onProgress?: (message: string) => void
): Promise<object> {
  const progress =
    onProgress ||
    (() => {
      /* no-op */
    })

  try {
    progress('Signing challenge with WebAuthn...')
    const assertion = await webAuthnSigner.sign(challenge)
    progress('Challenge signed successfully')
    return assertion
  } catch (signError) {
    // Handle WebAuthn cancellation and errors with better error messages
    let errorMessage = `${operation === 'authentication' ? 'Authentication' : 'Transaction signing'} failed`

    if (signError instanceof Error) {
      if (signError.name === 'NotAllowedError' || signError.message.includes('NotAllowedError')) {
        errorMessage = 'The request was canceled or timed out.'
      } else if (signError.name === 'AbortError' || signError.message.includes('AbortError')) {
        errorMessage = 'The request was canceled.'
      } else if (signError.name === 'SecurityError' || signError.message.includes('SecurityError')) {
        errorMessage = `Security error during ${operation}. Please check your browser settings.`
      } else {
        errorMessage = `${operation === 'authentication' ? 'Authentication' : 'Transaction signing'} failed: ${
          signError.message
        }`
      }
    }

    // Reject the challenge on the server side to clean up
    try {
      await authService.rejectChallenge(sessionId, challengeId, errorMessage)
      progress('Challenge rejected due to error')
    } catch (rejectError) {
      console.warn('Failed to reject challenge:', rejectError)
    }

    throw createApiError(errorMessage)
  }
}

/**
 * Handles completion errors with timeout detection
 *
 * Provides consistent error handling for challenge completion responses
 * across both authentication and transaction flows.
 */
function handleCompletionError(
  response: { success: boolean; error?: string },
  operation: 'authentication' | 'transaction'
): never {
  const errorMessage = response.error || `${operation} completion failed`

  if (errorMessage.includes('timed out') || errorMessage.includes('not found or already completed')) {
    const timeoutMessage =
      operation === 'authentication' ? 'Login attempt timed out.' : 'Transaction signing timed out.'
    throw createApiError(timeoutMessage)
  }

  throw createApiError(errorMessage)
}

/**
 * Dynamic WebAuthn Signer Creation
 *
 * Creates WebAuthn signers on-demand from challenge responses.
 * This approach leverages the relying party configuration provided by the backend in each challenge,
 * enabling more flexible deployment scenarios and better separation of concerns.
 */
function createWebAuthnSigner(
  webAuthnConf: { relyingParty: { id: string; name: string }; timeout?: number },
  onProgress?: (message: string) => void
): WebAuthnSigner | null {
  if (typeof window !== 'undefined' && webAuthnConf?.relyingParty) {
    const webAuthnConfig = {
      relyingParty: {
        id: webAuthnConf.relyingParty.id,
        name: webAuthnConf.relyingParty.name,
      },
      timeout: webAuthnConf.timeout || 60000,
    }

    const signer = new WebAuthnSigner(webAuthnConfig)
    onProgress?.(`WebAuthn signer created for ${webAuthnConf.relyingParty.name}`)
    return signer
  }
  return null
}

/**
 * Centralized HTTP Client with Error Handling
 *
 * Provides consistent error handling, request formatting, and response parsing
 * for all API interactions. Handles both network errors and API error responses.
 */
async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    const data = await response.json()

    if (!response.ok) {
      throw createApiError(data.error || `HTTP ${response.status}`, response.status, data.code)
    }

    return data
  } catch (error) {
    if (error instanceof Error && 'status' in error) {
      throw error // Re-throw API errors as-is
    }
    throw createApiError(`Network error: ${error}`)
  }
}

/**
 * Authentication Service
 *
 * Handles the complete user authentication flow including:
 * - New user login with WebAuthn challenge signing
 * - Session restoration from cached credentials
 * - Session validation and cleanup
 */
export const authService = {
  /**
   * Complete Login Flow with WebAuthn Challenge Handling
   *
   * Supports two modes:
   * 1. New Login: Creates new session and handles WebAuthn authentication
   * 2. Session Restoration: Validates cached session credentials
   */
  async login(config: LoginConfig, onProgress?: (message: string) => void): Promise<LoginResult> {
    const progress =
      onProgress ||
      (() => {
        // Default no-op progress handler
      })

    // Session Restoration Mode
    if (config.restoreOnly) {
      if (!config.sessionId) {
        throw createApiError('Session ID is required for session restoration')
      }

      try {
        progress('Attempting to restore session...')

        // Call the login API in restore mode to get session details including username
        const response = await apiRequest<LoginResponse>(API_ENDPOINTS.AUTH_LOGIN, {
          method: 'POST',
          body: JSON.stringify({
            restoreOnly: true,
            sessionId: config.sessionId,
          }),
        })

        if (!response.success || !response.sessionId || !response.username) {
          throw createApiError('Session restoration failed')
        }

        progress('Session restored successfully')
        return {
          sessionId: response.sessionId,
          username: response.username,
        }
      } catch (error) {
        throw createApiError('Session restoration failed - session may be expired')
      }
    }

    // New Login Flow
    if (!config.username?.trim()) {
      throw createApiError('Username is required for authentication')
    }

    try {
      progress('Creating authentication session...')

      // Create session with login API
      const loginResponse = await apiRequest<ChallengeResponse>(API_ENDPOINTS.AUTH_LOGIN, {
        method: 'POST',
        body: JSON.stringify({
          username: config.username,
        }),
      })
      if (!loginResponse.success || !loginResponse.sessionId) {
        throw createApiError('No session ID received from login API')
      }

      const { sessionId, challenge, challengeId, webAuthnConf } = loginResponse
      progress(`Authentication session created for user: ${config.username}`)

      // Step 2: Handle immediate challenge response
      if (challenge && challengeId) {
        progress('Received authentication challenge, initializing WebAuthn signer...')

        // Create WebAuthn signer dynamically with config from challenge
        const webAuthnSigner = createWebAuthnSigner(
          webAuthnConf as { relyingParty: { id: string; name: string }; timeout?: number },
          progress
        )

        if (!webAuthnSigner) {
          throw createApiError('Failed to initialize WebAuthn signer')
        }

        progress('WebAuthn signer ready, signing challenge...')

        // Sign the challenge with WebAuthn using the reusable function
        const assertion = await signWebAuthnChallenge(
          webAuthnSigner,
          challenge,
          sessionId,
          challengeId,
          'authentication',
          progress
        )

        // Complete the challenge via the completion API
        const completeResponse = await apiRequest<CompleteChallengeResponse>(API_ENDPOINTS.AUTH_COMPLETE_CHALLENGE, {
          method: 'POST',
          body: JSON.stringify({
            sessionId,
            challengeId,
            signedChallenge: assertion,
          }),
        })

        if (!completeResponse.success) {
          handleCompletionError(completeResponse, 'authentication')
        }

        progress('Authentication challenge completed successfully')

        // Wait for background authentication to complete
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } else {
        throw createApiError('No challenge received from login API')
      }

      progress('External signing manager session active')

      return {
        sessionId,
        username: config.username,
      }
    } catch (error) {
      if (error instanceof Error && 'status' in error) {
        throw error // Re-throw API errors with context preserved
      }
      throw createApiError(`Login failed: ${error}`)
    }
  },

  /**
   * Session Cleanup and Logout
   *
   * Terminates the user session on both frontend and backend,
   * cleaning up any stored credentials and signing managers.
   */
  async logout(sessionId: string): Promise<LogoutResult> {
    if (!sessionId) {
      throw createApiError('No active session to logout')
    }

    const response = await apiRequest<LogoutResult>(API_ENDPOINTS.AUTH_LOGOUT, {
      method: 'POST',
      body: JSON.stringify({ sessionId }),
    })

    if (!response.success) {
      throw createApiError('Logout failed')
    }

    return { success: true }
  },

  /**
   * Reject Challenge
   *
   * Rejects an active challenge when the user cancels authentication
   * or when errors occur during the challenge process.
   */
  async rejectChallenge(sessionId: string, challengeId: string, error?: string): Promise<{ success: boolean }> {
    if (!sessionId) {
      throw createApiError('Session ID is required')
    }

    if (!challengeId) {
      throw createApiError('Challenge ID is required')
    }

    const response = await apiRequest<{ success: boolean }>(API_ENDPOINTS.AUTH_REJECT_CHALLENGE, {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
        challengeId,
        error: error || 'Challenge rejected by user',
      }),
    })

    if (!response.success) {
      throw createApiError('Failed to reject challenge')
    }

    return { success: true }
  },
}

/**
 * Wallet Management Service
 *
 * Handles DFNS wallet operations including listing and management.
 * Wallets are the DFNS-managed accounts that can sign transactions.
 */
export const walletService = {
  /**
   * Get User's DFNS Wallets
   *
   * Retrieves all wallets available to the authenticated user.
   * These wallets can be used as signing accounts for transactions.
   */
  async getWallets(sessionId: string): Promise<WalletInfo[]> {
    if (!sessionId) {
      throw createApiError('Session not found - please login first')
    }

    const response = await apiRequest<WalletsResponse>(`${API_ENDPOINTS.WALLETS_LIST}?sessionId=${sessionId}`)

    if (!response.success) {
      throw createApiError('Failed to get wallets')
    }

    return response.wallets || []
  },
}

/**
 * Account Management Service
 *
 * Handles Polymesh account operations including account discovery and management.
 * Accounts represent Polymesh blockchain addresses that can hold and transfer POLYX.
 */
export const accountService = {
  /**
   * Get User's Polymesh Accounts
   *
   * Retrieves all Polymesh accounts available to the user.
   * These accounts can receive transfers and hold POLYX balances.
   */
  async getAccounts(sessionId: string): Promise<AccountInfo[]> {
    if (!sessionId) {
      throw createApiError('Session not found - please login first')
    }

    const response = await apiRequest<AccountsResponse>(`${API_ENDPOINTS.ACCOUNTS_LIST}?sessionId=${sessionId}`)

    if (!response.success) {
      throw createApiError('Failed to get accounts')
    }

    return response.accounts || []
  },
}

/**
 * POLYX Transaction Service
 *
 * Handles POLYX token operations including transfers and balance queries.
 * Demonstrates complete transaction flow with WebAuthn challenge signing.
 */
export const polyxService = {
  /**
   * POLYX Transfer with WebAuthn Signing
   *
   * Creates and executes a POLYX transfer transaction using the External Signing Manager pattern.
   *
   * Flow:
   * 1. Create transfer transaction on backend
   * 2. Initiate DFNS challenge for signature
   * 3. Create WebAuthn signer from challenge config
   * 4. Sign challenge with WebAuthn
   * 5. Complete transaction with signed challenge
   */
  async sendPolyx(
    sessionId: string,
    fromAddress: string,
    toAddress: string,
    amount: string,
    onProgress?: (message: string) => void
  ): Promise<SendPolyxResponse> {
    if (!sessionId) {
      throw createApiError('Session not found - please login first')
    }

    if (!fromAddress || !toAddress || !amount) {
      throw createApiError('Missing required fields: fromAddress, toAddress, amount')
    }

    const progress =
      onProgress ||
      (() => {
        // Default no-op progress handler
      })

    progress('Creating POLYX transfer transaction...')

    const response = await apiRequest<SendPolyxResponse>(API_ENDPOINTS.POLYX_SEND, {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
        fromAddress,
        toAddress,
        amount,
      }),
    })

    if (!response.success) {
      throw createApiError('Failed to send POLYX transaction')
    }

    // Check if the transaction requires a challenge (WebAuthn signing)
    if (response.challengeId && response.challenge && response.transactionId && response.webAuthnConf) {
      progress('Transaction requires WebAuthn signature, initializing signer...')

      // Create WebAuthn signer dynamically with config from challenge
      const webAuthnSigner = createWebAuthnSigner(
        response.webAuthnConf as { relyingParty: { id: string; name: string }; timeout?: number },
        progress
      )

      if (!webAuthnSigner) {
        throw createApiError('Failed to initialize WebAuthn signer')
      }

      progress('WebAuthn signer ready, signing challenge...')

      // Sign the challenge with WebAuthn using the reusable function
      const assertion = await signWebAuthnChallenge(
        webAuthnSigner,
        response.challenge as unknown as UserActionChallenge,
        sessionId,
        response.challengeId,
        'transaction',
        progress
      )

      progress('Challenge signed, completing transaction...')

      // Complete the transaction using the new completion endpoint
      const completeResponse = await this.completeTransaction(response.transactionId, {
        challengeId: response.challengeId,
        firstFactor: assertion,
      })

      if (!completeResponse.success) {
        handleCompletionError(completeResponse, 'transaction')
      }

      progress('Transaction completed successfully!')

      // Return a success response for the completed transaction
      return {
        success: true,
        message: `Successfully sent ${amount} POLYX from ${fromAddress} to ${toAddress}`,
        transactionHash: completeResponse.transactionHash,
        blockHash: completeResponse.blockHash,
        metadata: {
          fromAddress,
          toAddress,
          amount,
        },
      }
    }

    // If no challenge was required, return the response as-is
    return response
  },

  /**
   * Complete a transaction with challenge response
   */
  async completeTransaction(
    transactionId: string,
    challengeResponse: { challengeId: string; firstFactor: object }
  ): Promise<CompleteTransactionResponse> {
    return apiRequest<CompleteTransactionResponse>(API_ENDPOINTS.TRANSACTIONS_COMPLETE, {
      method: 'POST',
      body: JSON.stringify({
        transactionId,
        challengeResponse,
      }),
    })
  },

  /**
   * Get account balance
   */
  async getBalance(sessionId: string, address: string): Promise<BalanceInfo> {
    if (!sessionId) {
      throw createApiError('Session not found - please login first')
    }

    if (!address) {
      throw createApiError('Address is required')
    }

    const response = await apiRequest<BalanceResponse>(
      `${API_ENDPOINTS.POLYX_BALANCE}?sessionId=${sessionId}&address=${address}`
    )

    if (!response.success) {
      throw createApiError('Failed to get balance')
    }

    return response.balance
  },
}

/**
 * Combined API service with all operations
 */
export const apiService = {
  auth: authService,
  wallets: walletService,
  accounts: accountService,
  polyx: polyxService,
}

// Default export for convenience
export default apiService
