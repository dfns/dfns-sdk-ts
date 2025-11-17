/**
 * DFNS External Signing Manager - API Types and Endpoints
 *
 * Comprehensive TypeScript definitions for the External Signing Manager API.
 * This file provides type safety across the entire application stack, from frontend
 * components to backend API routes, ensuring consistent interfaces and proper error handling.
 * 
 * Key Features:
 * - Complete API endpoint definitions
 * - Request/response type interfaces
 * - WebAuthn integration types
 * - Session management types
 * - Transaction flow types
 */

import type { WebAuthnSignerConf } from '@dfns/lib-polymesh/src/types'

/**
 * API Endpoint Constants
 * 
 * Centralized endpoint definitions to ensure consistency between
 * frontend API calls and backend route implementations.
 */
export const API_ENDPOINTS = {
  // Authentication Flow
  AUTH_LOGIN: '/api/auth/login',
  AUTH_COMPLETE_CHALLENGE: '/api/auth/complete-challenge',
  AUTH_REJECT_CHALLENGE: '/api/auth/reject-challenge',
  AUTH_LOGOUT: '/api/auth/logout',

  // Account Management
  WALLETS_LIST: '/api/wallets',
  ACCOUNTS_LIST: '/api/accounts',

  // Transaction Operations
  TRANSACTIONS_COMPLETE: '/api/transactions/complete',

  // POLYX Operations
  POLYX_SEND: '/api/polyx/send',
  POLYX_BALANCE: '/api/polyx/balance',
} as const

export type ApiEndpoint = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS]

/**
 * Standard API Response Structure
 * 
 * All API endpoints follow this consistent response format for
 * predictable error handling and type safety.
 */
export interface StandardApiResponse<T = unknown> {
  success: boolean
  error?: string
  message?: string
  data?: T
}

/**
 * Session Management Types
 * 
 * Represents the server-side session state and provides insight
 * into connection status and pending operations.
 */
export interface SessionInfo {
  sessionId: string
  isAuthenticated: boolean
  dfnsConnected: boolean
  polymeshConnected: boolean
  pendingChallenges: number
  createdAt: number
  lastActivity: number
}

/**
 * POLYX Transaction Response
 * 
 * Response from POLYX send operations including challenge details
 * for WebAuthn signing when required.
 */
export interface SendPolyxResponse {
  success: boolean
  transactionId?: string
  challengeId?: string
  challenge?: string
  webAuthnConf?: WebAuthnSignerConf // Dynamic WebAuthn configuration from challenge
  message?: string
  transactionHash?: string
  blockHash?: string
  error?: string
  metadata?: {
    fromAddress: string
    toAddress: string
    amount: string
  }
}

/**
 * Transaction Completion Request
 * 
 * Request payload for completing any transaction type with WebAuthn signatures.
 * This is a generic completion interface used for all transaction types.
 */
export interface CompleteTransactionRequest {
  transactionId: string
  challengeResponse: {
    challengeId: string
    firstFactor: object // WebAuthn assertion
  }
}

/**
 * Transaction Completion Response
 * 
 * Response from generic transaction completion including final transaction details.
 * Used for all transaction types (POLYX transfers, asset operations, etc.).
 */
export interface CompleteTransactionResponse {
  success: boolean
  transactionHash?: string
  blockHash?: string
  error?: string
}

/**
 * DFNS Wallet Information
 * 
 * Represents a DFNS-managed wallet that can sign transactions.
 */
export interface WalletInfo {
  id: string
  network: string
  address: string
  status: string
}

/**
 * Polymesh Account Information
 * 
 * Represents a Polymesh blockchain account that can hold and transfer POLYX.
 */
export interface AccountInfo {
  address: string
  balance?: string
  free?: string
  locked?: string
}

export interface BalanceInfo {
  free: string
  locked: string
  total: string
}

export interface SendPolyxRequest {
  sessionId: string
  fromAddress: string
  toAddress: string
  amount: string
}

export interface BalanceResponse {
  success: boolean
  address: string
  balance: BalanceInfo
}
