import { DfnsError } from '@dfns/sdk'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { SignerPayloadJSON } from '@polymeshassociation/signing-manager-types'
import { isHex, u8aWrapBytes, u8aToHex } from '@polkadot/util'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { GetWalletResponse } from '@dfns/sdk/types/wallets'
import { ValidatedPolymeshWallet, PolymeshNetwork } from '../types'

/**
 * Validates that a signature response was successful
 *
 * @param response - The signature response from DFNS API
 * @throws {DfnsError} When signature response status indicates failure or pending policy approval
 */
export function assertSignResponseSuccessful(response: GenerateSignatureResponse): void {
  if (response.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', response)
  } else if (response.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      response
    )
  } else if (!response.signature || !response.signature.encoded) {
    throw new DfnsError(-1, 'signature missing', response)
  }
}

/**
 * Sanitizes and validates the signer payload for DFNS API compatibility
 *
 * Converts null values to undefined throughout the payload object, as the DFNS API
 * has issues with null values. This ensures clean serialization and prevents
 * API errors when submitting transaction payloads.
 *
 * @param payload - Raw signer payload from transaction
 * @returns Sanitized payload with null values converted to undefined
 */
export function sanitizePayload(payload: SignerPayloadJSON): Record<string, unknown> {
  const result = { ...payload } as Record<string, unknown>

  for (const key in result) {
    if (result[key] === null) {
      result[key] = undefined
    }
  }

  return result
}

/**
 * Validates and wraps bytes data using official Polkadot utilities
 *
 * Ensures the data is hex-encoded and properly wrapped with <Bytes>...</Bytes>
 * formatting if not already wrapped.
 *
 * @param data - Hex-encoded byte data to validate and wrap
 * @returns Properly wrapped hex data for DFNS API
 * @throws {DfnsError} When data is not valid hex
 */
export function validateBytesData(data: string): string {
  // Ensure hex format
  if (!isHex(data)) {
    throw new DfnsError(-1, 'bytes data must be hex-encoded', { data })
  }

  // Use official Polkadot utilities to ensure proper <Bytes>...</Bytes> wrapping
  // u8aWrapBytes will only wrap if not already wrapped
  const wrappedBytes = u8aWrapBytes(data)

  // Convert back to hex string for DFNS API
  return u8aToHex(wrappedBytes)
}

/**
 * Converts an address from one SS58 format to another
 *
 * This utility function handles SS58 address format conversion between different
 * Polkadot/Substrate networks. Useful for converting between Polymesh and other
 * Polkadot ecosystem addresses.
 *
 * @param address - The address to convert (in any SS58 format)
 * @param targetFormat - The target SS58 format number
 * @returns The address in the target SS58 format
 * @throws {Error} When address is invalid or conversion fails
 */
export function changeAddressFormat(address: string, targetFormat: number): string {
  try {
    // Decode the address to get the raw public key bytes
    const decoded = decodeAddress(address)
    // Re-encode with the target format
    return encodeAddress(decoded, targetFormat)
  } catch (error) {
    throw new Error(`Failed to convert address format: ${error}`)
  }
}

/**
 * JWT payload interface for type safety
 */
export interface JwtPayload {
  exp?: number
  iat?: number
  'https://custom/username'?: string
  [key: string]: unknown
}

/**
 * Decodes a JWT token payload without verification
 *
 * This function extracts the payload from a JWT token for reading claims
 * and other metadata. Note that this does NOT verify the token signature.
 *
 * Returns null for malformed tokens to maintain compatibility with existing
 * browser signing manager patterns.
 *
 * @param token - The JWT token to decode
 * @returns The decoded payload object or null if token is malformed
 */
export function decodeJwtPayload(token: string): JwtPayload | null {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) {
      return null
    }

    const payload = parts[1]
    // Handle base64url decoding (browser-compatible)
    const paddedPayload = payload + '='.repeat((4 - (payload.length % 4)) % 4)
    const decoded = atob
      ? atob(paddedPayload.replace(/-/g, '+').replace(/_/g, '/'))
      : Buffer.from(payload, 'base64url').toString('utf8')

    return JSON.parse(decoded) as JwtPayload
  } catch {
    return null
  }
}

/**
 * Configuration options for JWT token validation
 */
export interface TokenValidationOptions {
  /** Minutes before expiry to consider token invalid (default: 5) */
  bufferMinutes?: number
  /** Optional username to validate against token's username claim */
  expectedUsername?: string
  /** Optional organization ID to validate against token's orgId claim */
  expectedOrgId?: string
}

/**
 * Validates a JWT token for expiry and optionally username and organization ID match
 *
 * Checks the 'exp' claim in the JWT payload to determine if the token
 * has expired. Includes a configurable buffer to account for clock skew.
 * Optionally validates that the username and organization ID in the token
 * match the provided values.
 *
 * @param token - The JWT token to validate
 * @param options - Validation options including buffer time, expected username, and expected orgId
 * @returns true if token is valid (not expired and username/orgId match if provided), false otherwise
 */
export function isTokenValid(token: string, options: TokenValidationOptions = {}): boolean {
  const { bufferMinutes = 5, expectedUsername, expectedOrgId } = options

  const payload = decodeJwtPayload(token)
  if (!payload || !payload.exp) {
    return false
  }

  const now = Math.floor(Date.now() / 1000) // Current time in seconds
  const expiry = payload.exp
  const bufferSeconds = bufferMinutes * 60

  // Consider token invalid if it expires within the buffer time
  const isNotExpired = expiry > now + bufferSeconds

  let usernameMatches = true
  let orgIdMatches = true

  // Check username match if expected username if provided
  if (expectedUsername !== undefined) {
    const tokenUsername = payload?.['https://custom/username']
    usernameMatches = tokenUsername === expectedUsername
  }

  // Check orgId match if expected orgId if provided
  if (expectedOrgId !== undefined) {
    const appMetadata = payload?.['https://custom/app_metadata'] as
      | { userId?: string; orgId?: string; tokenKind?: string }
      | undefined
    const tokenOrgId = appMetadata?.orgId
    orgIdMatches = tokenOrgId === expectedOrgId
  }

  return isNotExpired && usernameMatches && orgIdMatches
}

/**
 * Validates that a wallet is suitable for Polymesh operations
 *
 * Checks that the wallet meets all requirements:
 * - Active status
 * - Supported Polymesh network (Polymesh or PolymeshTestnet)
 * - EdDSA/ed25519 key scheme (only type supported by DFNS for Polymesh)
 * - Has a valid address
 *
 * @param wallet - The wallet to validate
 * @param allowedNetworks - Optional array of allowed networks (defaults to both Polymesh networks)
 * @throws {DfnsError} When wallet doesn't meet requirements
 * @returns The wallet cast to ValidatedPolymeshWallet type
 */
export function validatePolymeshWallet(
  wallet: GetWalletResponse,
  allowedNetworks: PolymeshNetwork[] = ['Polymesh', 'PolymeshTestnet']
): ValidatedPolymeshWallet {
  const { id: walletId } = wallet

  // Must be active
  if (wallet.status !== 'Active') {
    throw new DfnsError(-1, 'wallet must be active', {
      walletId,
      status: wallet.status,
    })
  }

  // Must be on allowed Polymesh network
  if (!allowedNetworks.includes(wallet.network as PolymeshNetwork)) {
    throw new DfnsError(-1, 'wallet must be on supported Polymesh network', {
      walletId,
      network: wallet.network,
      allowedNetworks,
    })
  }

  // Must use EdDSA/ed25519 key scheme
  if (wallet.signingKey.scheme !== 'EdDSA' || wallet.signingKey.curve !== 'ed25519') {
    throw new DfnsError(-1, 'wallet must use Ed25519 key for Polymesh', {
      walletId,
      scheme: wallet.signingKey.scheme,
      curve: wallet.signingKey.curve,
      supportedTypes: ['EdDSA/ed25519'],
    })
  }

  // Must have an address
  if (!wallet.address) {
    throw new DfnsError(-1, 'wallet address is required', { walletId })
  }

  return wallet as ValidatedPolymeshWallet
}

/**
 * Checks if a wallet is valid for Polymesh without throwing errors
 *
 * This is a predicate function version of validatePolymeshWallet that returns
 * a boolean instead of throwing. Useful for filtering operations.
 *
 * @param wallet - The wallet to check
 * @param allowedNetworks - Optional array of allowed networks (defaults to both Polymesh networks)
 * @returns true if wallet is valid, false otherwise
 */
export function isValidPolymeshWallet(
  wallet: GetWalletResponse,
  allowedNetworks: PolymeshNetwork[] = ['Polymesh', 'PolymeshTestnet']
): wallet is ValidatedPolymeshWallet {
  try {
    validatePolymeshWallet(wallet, allowedNetworks)
    return true
  } catch {
    return false
  }
}
