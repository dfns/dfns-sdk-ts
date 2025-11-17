import { DfnsApiClient, DfnsAuthenticator } from '@dfns/sdk'
import { WebAuthnSigner } from '@dfns/sdk-browser'
import { DfnsSigningManagerBase } from './base'
import { decodeJwtPayload, isTokenValid } from '../utils'
import { LogoutCallback, PolymeshNetwork, WalletFilter, WebAuthnSignerConf } from '../types'

/**
 * Simple storage interface for token management
 */
interface TokenStorage {
  getToken(): string | null
  setToken(token: string): void
  removeToken(): void
}

export interface DfnsBrowserSigningManagerOptions {
  dfnsClient: DfnsApiClient
  tokenStorage: TokenStorage | null
  network?: PolymeshNetwork
  walletId?: string
}

/**
 * DFNS Browser-Only Signing Manager for Polymesh
 *
 * This signing manager is designed for browser-only applications (SPAs) that handle
 * authentication and signing entirely in the frontend using WebAuthn.
 *
 * Features:
 * - Direct WebAuthn authentication in browser
 * - Token caching with configurable storage
 * - Multi-wallet support
 * - Direct transaction signing
 *
 * Use cases:
 * - Single-page applications
 * - PWAs without backend infrastructure
 * - Development and prototyping
 */
export class DfnsBrowserSigningManager extends DfnsSigningManagerBase {
  private tokenStorage: TokenStorage | null
  private orgId: string
  private authToken: string | null = null // In-memory token storage
  private logoutCallbacks: Set<LogoutCallback> = new Set()

  constructor(
    options: DfnsBrowserSigningManagerOptions,
    baseUrl: string,
    orgId: string,
    signer: WebAuthnSigner,
    authToken: string
  ) {
    // Browser signing managers are user-scoped, so we don't need user filtering
    // User can only access their own wallets by default
    const walletFilter: WalletFilter = options.walletId
      ? { type: 'wallet', walletId: options.walletId }
      : { type: 'all' }

    const allowedNetworks: PolymeshNetwork[] = options.network ? [options.network] : ['Polymesh', 'PolymeshTestnet']

    super(options.dfnsClient, walletFilter, allowedNetworks)
    this.tokenStorage = options.tokenStorage
    this.orgId = orgId
    this.authToken = authToken // Store token in memory
  }

  /**
   * Authenticate with DFNS using WebAuthn
   * @private
   */
  private static async authenticate(
    username: string,
    orgId: string,
    baseUrl: string,
    signer: WebAuthnSigner
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
   * Create a Browser Signing Manager for single-page applications
   *
   * This method handles WebAuthn authentication for browser-only applications with
   * support for both silent session restoration and full interactive authentication.
   *
   * Authentication Flow:
   * 1. If username provided + cached JWT → JWT must be valid AND username must match
   * 2. If valid JWT with matching username OR valid JWT with no username → attempt login with JWT
   * 3. If restoreOnly=true → end here (return null if login fails)
   * 4. If full login + JWT login fails + username provided → prompt user to re-authenticate
   * 5. If no username + no JWT (or JWT login failed) → throw error (username required)
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
   * @param args.auth.username - Username for authentication (optional if cached token exists with username)
   * @param args.auth.storageType - Token storage configuration (default: 'localStorage')
   * @param args.auth.restoreOnly - If true, only attempts to restore from cached tokens without user interaction (default: false)
   * @param args.walletFilter - Wallet filtering options (optional)
   * @param args.walletFilter.walletId - Use a specific wallet ID only (optional)
   * @param args.walletFilter.network - Filter wallets by specific network (optional, defaults to both Polymesh networks)
   * @param args.ss58Format - SS58 format for address encoding (optional, defaults to 12 for Polymesh)
   *
   * @returns Promise resolving to configured DfnsBrowserSigningManager instance, or null if restoreOnly=true and restoration failed
   *
   * @note walletId is optional - if omitted, all user's wallets will be available
   * @note network can be 'Polymesh' or 'PolymeshTestnet' (if omitted, includes both)
   * @note User filtering has been removed since browser signing managers are inherently user-scoped
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
      webAuthnConf: WebAuthnSignerConf
      username?: string
      storageType?: 'localStorage' | 'sessionStorage' | 'none'
      restoreOnly?: boolean
    }
    walletFilter?: {
      walletId?: string
      network?: PolymeshNetwork
    }
    ss58Format?: number
  }): Promise<DfnsBrowserSigningManager | null> {
    const { connection, auth, walletFilter, ss58Format } = args
    const { baseUrl, orgId } = connection
    const { webAuthnConf, username, storageType, restoreOnly = false } = auth
    const walletId = walletFilter?.walletId
    const network = walletFilter?.network

    let token: string | undefined

    const signer = new WebAuthnSigner(webAuthnConf)

    // Set up storage based on storageType preference and browser environment
    let tokenStorage: TokenStorage | null = null
    if (storageType !== 'none' && typeof window !== 'undefined') {
      const storage = storageType === 'sessionStorage' ? sessionStorage : localStorage
      tokenStorage = {
        getToken: () => storage.getItem('dfns-signing-manager-token'),
        setToken: (token: string) => storage.setItem('dfns-signing-manager-token', token),
        removeToken: () => storage.removeItem('dfns-signing-manager-token'),
      }
    }

    // Step 1 & 2: Try to use cached token first if storage is available
    const cachedToken = tokenStorage?.getToken()
    if (cachedToken) {
      // Step 1: If username provided + cached JWT → JWT must be valid AND username must match
      // Step 2: Valid JWT with matching username OR valid JWT with no username → use it
      if (isTokenValid(cachedToken, { expectedUsername: username, expectedOrgId: orgId })) {
        token = cachedToken

        try {
          const tempDfnsClient = new DfnsApiClient({
            baseUrl,
            authToken: token,
            orgId,
            signer,
          })

          await tempDfnsClient.wallets.listWallets({ query: { limit: '1' } }) // Test if token works
        } catch (error) {
          token = undefined

          // Step 3: If restoreOnly=true → end here (return null if login fails)
          if (restoreOnly) {
            return null // Failed to restore session
          }
        }
      }
    }
    if (!token) {
      if (restoreOnly) {
        return null // Failed to restore session
      }
      if (!username) {
        throw new Error('Username is required for authentication. No cached token available and no username provided.')
      }
      // Step 5: If JWT login failed or no token + username provided → prompt user to re-authenticate
      token = await DfnsBrowserSigningManager.authenticate(username, orgId, baseUrl, signer)

      // Cache the token if caching is enabled
      if (tokenStorage) {
        tokenStorage.setToken(token)
      }
    }

    const dfnsClient = new DfnsApiClient({
      baseUrl,
      authToken: token,
      orgId,
      signer,
    })

    const options: DfnsBrowserSigningManagerOptions = {
      dfnsClient,
      tokenStorage,
      network,
      walletId,
    }

    const manager = new DfnsBrowserSigningManager(options, baseUrl, orgId, signer, token)

    if (ss58Format !== undefined) {
      manager.setSs58Format(ss58Format)
    }

    if (await manager.isAuthenticated()) {
      await manager.refreshWallets()
    }

    return manager
  }

  /**
   * Logout and clear cached credentials
   */
  async logout(): Promise<void> {
    // Clear DFNS session if client is available
    try {
      await this.dfnsClient.auth.logout()
    } catch (error) {
      // Ignore logout errors - token might already be expired
      console.warn('DFNS logout failed:', error)
    }

    // Clear in-memory token
    this.authToken = null

    // Clear browser storage
    if (this.tokenStorage) {
      this.tokenStorage.removeToken()
    }

    // Clear cookies if running in browser
    if (typeof document !== 'undefined') {
      document.cookie = 'dfns-session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }

    // Clear cached wallets
    this.cachedWallets = null

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
   * For browser manager, we check the in-memory auth token and validate with API
   */
  public async isAuthenticated(): Promise<boolean> {
    // Check if we have an in-memory token
    if (!this.authToken) {
      return false
    }

    try {
      // First validate token structure, expiration, and orgId locally
      if (!isTokenValid(this.authToken, { expectedOrgId: this.orgId })) {
        await this.logout() // Clear invalid state
        return false
      }

      // Make an API call to verify the token is still valid with DFNS
      // Users have "Wallets:Read" permission, so we can use listWallets to verify the token works
      await this.dfnsClient.wallets.listWallets({ query: { limit: '1' } })
      return true
    } catch (error) {
      // Token is invalid/expired or API call failed - clear authentication state
      await this.logout()
      return false
    }
  }

  /**
   * Get the currently logged-in username from the auth token
   * @returns Promise resolving to username if authenticated, null otherwise
   */
  public async getCurrentUsername(): Promise<string | null> {
    if (!(await this.isAuthenticated())) {
      return null
    }

    if (!this.authToken) {
      return null
    }

    try {
      const payload = decodeJwtPayload(this.authToken)
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
