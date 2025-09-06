import { DfnsApiClient, CredentialSigner, Fido2Assertion, DfnsAuthenticator } from '@dfns/sdk'
import { DfnsSigningManagerBase } from './base'
import { decodeJwtPayload, isTokenValid } from '../utils'
import { LogoutCallback, PolymeshNetwork, WalletFilter, DfnsExternalSigningManagerOptions } from '../types'

/**
 * DFNS External Signing Manager for Polymesh
 *
 * This signing manager uses a credential signer to delegate
 * challenge signing to an external signer (e.g., WebAuthn authenticator,
 * hardware wallet, or other external signing mechanism).
 *
 * The external manager handles the login flow by creating challenges on the backend,
 * sending them to the frontend for WebAuthn signing, then completing the login.
 * All wallet signing operations are automatically handled by the credential signer.
 *
 * Authentication failures automatically clear the authentication state, requiring
 * the application to prompt for re-login.
 *
 * Features:
 * - Challenge/response pattern with credential signer
 * - Automatic authentication state management
 * - Multi-wallet support
 * - External authenticator integration
 *
 * Use cases:
 * - Applications requiring external authentication
 * - Hardware wallet integration
 * - WebAuthn authenticator support
 * - Custom signing flows with external signers
 * - Delegated signing architectures
 * - Server-side applications with token caching
 */
export class DfnsExternalSigningManager extends DfnsSigningManagerBase {
  private credentialSigner: CredentialSigner<Fido2Assertion>
  private baseUrl: string
  private orgId: string
  private authToken: string | null = null
  private logoutCallbacks: Set<LogoutCallback> = new Set()

  constructor(options: DfnsExternalSigningManagerOptions, baseUrl: string, orgId: string, authToken: string | null) {
    const walletFilter: WalletFilter = options.walletId
      ? { type: 'wallet', walletId: options.walletId }
      : options.userId
      ? { type: 'user', owner: options.userId }
      : { type: 'all' }

    const allowedNetworks: PolymeshNetwork[] = options.network ? [options.network] : ['Polymesh', 'PolymeshTestnet']

    super(options.dfnsClient, walletFilter, allowedNetworks)
    this.credentialSigner = options.credentialSigner
    this.baseUrl = baseUrl
    this.orgId = orgId
    this.authToken = authToken
  }

  /**
   * Authenticate with DFNS using credential signer
   * @private
   */
  private static async authenticate(
    username: string,
    orgId: string,
    baseUrl: string,
    signer: CredentialSigner<Fido2Assertion>
  ): Promise<string> {
    const authenticator = new DfnsAuthenticator({
      orgId,
      baseUrl,
      signer,
    })

    const loginResult = await authenticator.login({
      username,
      orgId,
    })

    return loginResult.token
  }

  /**
   * Create an External Signing Manager with challenge handler
   *
   * @param args.connection - DFNS connection configuration
   * @param args.connection.baseUrl - DFNS API base URL
   * @param args.connection.orgId - DFNS organization ID
   * @param args.auth - Authentication configuration
   * @param args.auth.webAuthnConf - WebAuthn signer configuration including relying party and timeout
   * @param args.auth.webAuthnConf.relyingParty - Relying party configuration
   * @param args.auth.webAuthnConf.relyingParty.id - Relying party identifier (typically your domain)
   * @param args.auth.webAuthnConf.relyingParty.name - Human-readable relying party name
   * @param args.auth.webAuthnConf.timeout - Timeout for WebAuthn operations (optional)
   * @param args.auth.challengeHandler - Function to handle challenge/response signing (receives challenge and webAuthnConf)
   * @param args.auth.authToken - Authentication token (optional, if provided will be validated and used if still valid)
   * @param args.auth.username - Username for login (optional, used if authToken is invalid/expired or not provided)
   * @param args.auth.restoreOnly - If true, only attempts to use provided authToken without user interaction (default: false)
   * @param args.walletFilter - Wallet filtering options (optional)
   * @param args.walletFilter.userId - Filter wallets by user ID (optional)
   * @param args.walletFilter.walletId - Use specific wallet only (optional)
   * @param args.walletFilter.network - Filter by network (optional)
   * @param args.ss58Format - SS58 format for addresses (optional)
   *
   * @returns Promise resolving to configured DfnsExternalSigningManager instance, or null if restoreOnly=true and restoration failed
   *
   * @note Auth token is validated - if expired, username will be extracted from token for re-authentication
   * @note Specify one of: userId, walletId, or none (for all accessible wallets)
   * @note Use getAuthToken() to retrieve current token for server-side caching
   * @note The challenge handler receives the complete WebAuthn configuration for proper WebAuthn operations
   * @note restoreOnly=true is useful for server-side scenarios where you want to restore from cached token without prompting user
   *
   * @throws
   *   - if restoreOnly=false and username is required but not provided
   *   - if WebAuthn authentication fails during full login
   *   - if DFNS API is unreachable
   *   - if organization ID is invalid
   *   - if WebAuthn configuration is invalid
   */
  public static async create(args: {
    connection: {
      baseUrl: string
      orgId: string
    }
    auth: {
      credentialSigner: CredentialSigner<Fido2Assertion>
      authToken?: string
      username?: string
      restoreOnly?: boolean
    }
    walletFilter?: {
      userId?: string
      walletId?: string
      network?: PolymeshNetwork
    }
    ss58Format?: number
  }): Promise<DfnsExternalSigningManager | null> {
    const { connection, auth, walletFilter, ss58Format } = args
    const { baseUrl, orgId } = connection
    const { credentialSigner, authToken, username, restoreOnly = false } = auth
    const userId = walletFilter?.userId
    const walletId = walletFilter?.walletId
    const network = walletFilter?.network

    // Validate filter options
    const filterOptions = [userId, walletId].filter(Boolean)
    if (filterOptions.length > 1) {
      throw new Error('Specify only one of: userId or walletId')
    }

    let token: string | undefined

    // Step 1 & 2: Try to use provided authToken first if available
    if (authToken) {
      // Step 1: If username provided + authToken → token must be valid AND username must match
      // Step 2: Valid token with matching username OR valid token with no username → use it
      if (isTokenValid(authToken, { expectedUsername: username, expectedOrgId: orgId })) {
        token = authToken

        try {
          // Test if token works with a lightweight API call
          const tempDfnsClient = new DfnsApiClient({
            baseUrl,
            authToken: token,
            orgId,
            signer: credentialSigner,
          })

          await tempDfnsClient.wallets.listWallets() // Test if token works
        } catch (error) {
          token = undefined

          // Step 3: If restoreOnly=true → end here (return null if restoration fails)
          if (restoreOnly) {
            return null // Failed to restore session
          }
        }
      }
    }

    // Step 4: If no valid token and not restore-only mode, authenticate with username
    if (!token) {
      if (restoreOnly) {
        return null // Failed to restore session
      }

      if (!username) {
        throw new Error(
          'Username is required for authentication. No valid authToken provided and no username specified.'
        )
      }

      // Step 5: Authenticate with credential signer
      token = await DfnsExternalSigningManager.authenticate(username, orgId, baseUrl, credentialSigner)
    }

    // Create the DFNS client with authenticated token
    const dfnsClient = new DfnsApiClient({
      baseUrl,
      orgId,
      authToken: token,
      signer: credentialSigner,
    })

    const options: DfnsExternalSigningManagerOptions = {
      dfnsClient,
      credentialSigner,
      network,
      userId,
      walletId,
    }

    const manager = new DfnsExternalSigningManager(options, baseUrl, orgId, token)

    if (ss58Format !== undefined) {
      manager.setSs58Format(ss58Format)
    }

    // Cache wallets if we have a valid authentication token
    if (await manager.isAuthenticated()) {
      await manager.refreshWallets()
    }

    return manager
  }

  /**
   * Clear authentication state
   */
  public async logout(): Promise<void> {
    // Try to logout on server side if we have a valid client with auth token
    if (this.authToken && this.dfnsClient) {
      try {
        await this.dfnsClient.auth.logout()
      } catch (error) {
        // Ignore logout errors - token might already be expired or invalid
        console.warn('DFNS logout failed:', error)
      }
    }

    // Clear local state regardless of server logout success
    this.cachedWallets = null
    this.authToken = null

    // Reset to placeholder client
    this.dfnsClient = new DfnsApiClient({
      baseUrl: this.baseUrl,
      orgId: this.orgId,
      authToken: undefined,
      signer: this.credentialSigner,
    })

    // Notify all registered logout callbacks
    this.logoutCallbacks.forEach((callback) => {
      try {
        callback()
      } catch (error) {
        console.warn('Logout callback error:', error)
      }
    })
  }

  /**
   * Check if user is currently authenticated (override base class method)
   */
  public async isAuthenticated(): Promise<boolean> {
    if (!this.authToken) {
      return false
    }

    try {
      // First validate token structure, expiration, and orgId locally
      if (!isTokenValid(this.authToken, { expectedOrgId: this.orgId })) {
        await this.logout() // Clear invalid state
        return false
      }

      // Validate token is still valid with DFNS API
      // For external signing manager, we can use wallets.listWallets() which users have permission to access
      await this.dfnsClient.wallets.listWallets()
      return true
    } catch (error) {
      // Token is invalid/expired - clear authentication state
      await this.logout()
      return false
    }
  }

  /**
   * Get the current authentication token for external caching
   *
   * @returns Current auth token or null if not authenticated
   */
  public getAuthToken(): string | null {
    return this.authToken
  }

  /**
   * Get the currently logged-in username from the auth token
   * @returns Promise resolving to username if authenticated, null otherwise
   */
  public async getCurrentUsername(): Promise<string | null> {
    if (!(await this.isAuthenticated())) {
      return null
    }

    const token = this.authToken
    if (!token) {
      return null
    }

    try {
      const payload = decodeJwtPayload(token)
      return payload?.['https://custom/username'] || null
    } catch (error) {
      console.warn('Failed to extract username from token:', error)
      return null
    }
  }

  /**
   * Register a callback to be notified when the user is logged out
   *
   * The callback will be triggered when:
   * - JWT token expires or becomes invalid
   * - Authentication validation fails
   * - Manual logout is called
   * - Any DFNS API call indicates authentication failure
   *
   * @param callback - Function to call when logout occurs
   * @returns Unsubscribe function to remove the callback
   */
  public onLoggedOut(callback: LogoutCallback): () => void {
    this.logoutCallbacks.add(callback)

    // Return unsubscribe function
    return () => {
      this.logoutCallbacks.delete(callback)
    }
  }
}
