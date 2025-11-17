import { DfnsApiClient } from '@dfns/sdk'
import { DfnsSigningManagerBase } from './base'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { PolymeshNetwork, WalletFilter, DfnsServiceAccountSigningManagerOptions } from '../types'

/**
 * DFNS Service Account Signing Manager for Polymesh
 *
 * This signing manager is designed for server-side applications using DFNS service accounts.
 * Service accounts provide programmatic access to DFNS APIs using asymmetric key authentication,
 * making them ideal for backend services, automation, and non-interactive workflows.
 *
 * Unlike browser or external managers, service accounts don't require interactive authentication
 * and are always considered "authenticated" once properly configured.
 *
 * Features:
 * - Asymmetric key-based authentication
 * - No interactive login required
 * - Multi-wallet and multi-user support
 * - Server-side transaction signing
 * - Persistent authentication state
 *
 * Use cases:
 * - Backend API services
 * - Automated trading systems
 * - Batch processing applications
 * - CI/CD pipeline integrations
 * - Administrative tools and scripts
 * - Non-interactive wallet operations
 */
export class DfnsServiceAccountSigningManager extends DfnsSigningManagerBase {
  /**
   * Create a DFNS Service Account Signing Manager instance
   *
   * @param options - Configuration options for the service account manager
   * @param options.dfnsClient - Configured DFNS API client with service account authentication
   * @param options.network - Filter wallets by specific network (optional, defaults to both Polymesh networks)
   * @param options.userId - Filter wallets by specific user ID (optional)
   * @param options.walletId - Use specific wallet only (optional)
   *
   * @note Specify only one of: userId, walletId, or neither (for all accessible wallets)
   * @note Service accounts have broader access than user accounts based on permissions
   */
  constructor(options: DfnsServiceAccountSigningManagerOptions) {
    const walletFilter: WalletFilter = options.walletId
      ? { type: 'wallet', walletId: options.walletId }
      : options.userId
      ? { type: 'user', owner: options.userId }
      : { type: 'all' }

    const allowedNetworks: PolymeshNetwork[] = options.network ? [options.network] : ['Polymesh', 'PolymeshTestnet']

    super(options.dfnsClient, walletFilter, allowedNetworks)
  }

  /**
   * Create a Service Account Signing Manager for server-side applications
   *
   * This method sets up a DFNS service account with asymmetric key authentication.
   * Service accounts are ideal for backend services that need persistent, non-interactive
   * access to DFNS wallet operations.
   *
   * @param args.connection - DFNS connection configuration
   * @param args.connection.baseUrl - DFNS API base URL (e.g., 'https://api.dfns.ninja')
   * @param args.connection.orgId - DFNS organization ID
   * @param args.auth - Service account authentication configuration
   * @param args.auth.credId - Service account credential ID (base64-encoded identifier)
   * @param args.auth.privateKey - Private key in PEM format for asymmetric signing
   * @param args.auth.authToken - Service account authentication token
   * @param args.walletFilter - Wallet filtering options (optional)
   * @param args.walletFilter.user - Filter wallets by specific user ID (optional)
   * @param args.walletFilter.walletId - Use specific wallet only (optional)
   * @param args.walletFilter.network - Filter by network: 'Polymesh' or 'PolymeshTestnet' (optional, defaults to both)
   * @param args.ss58Format - SS58 format for address encoding (optional, defaults to 12 for Polymesh)
   *
   * @returns Promise resolving to configured DfnsServiceAccountSigningManager instance
   *
   * @note Specify only one of: user, walletId, or neither (for all accessible wallets)
   * @note Service account permissions determine which wallets are accessible
   * @note The private key must correspond to the public key registered with the credential
   * @note Service accounts don't require interactive login and are immediately ready to use
   *
   * @throws
   *   - if both user and walletId are specified
   *   - if credential ID or private key are invalid
   *   - if service account token is expired or invalid
   *   - if organization ID doesn't match the service account
   *   - if DFNS API is unreachable
   *
   */
  public static async create(args: {
    connection: {
      baseUrl: string
      orgId: string
    }
    auth: {
      credId: string
      privateKey: string
      authToken: string
    }
    walletFilter?: {
      user?: string
      walletId?: string
      network?: PolymeshNetwork
    }
    ss58Format?: number
  }): Promise<DfnsServiceAccountSigningManager> {
    const { connection, auth, walletFilter, ss58Format } = args
    const { baseUrl, orgId } = connection
    const { credId, privateKey, authToken } = auth
    const user = walletFilter?.user
    const walletId = walletFilter?.walletId
    const network = walletFilter?.network

    const filterOptions = [user, walletId].filter(Boolean)
    if (filterOptions.length > 1) {
      throw new Error('Specify only one of: user or walletId')
    }

    const signer = new AsymmetricKeySigner({
      credId,
      privateKey,
    })

    const dfnsClient = new DfnsApiClient({
      authToken,
      baseUrl,
      orgId,
      signer,
    })

    const options: DfnsServiceAccountSigningManagerOptions = {
      dfnsClient,
      network,
      userId: user,
      walletId,
    }

    const manager = new DfnsServiceAccountSigningManager(options)

    if (ss58Format !== undefined) {
      manager.setSs58Format(ss58Format)
    }

    await manager.refreshWallets()

    return manager
  }

  /**
   * Check if the service account is authenticated
   *
   * Service accounts use persistent asymmetric key authentication, but tokens can still expire
   * or the service account can be deactivated. This method validates the current authentication
   * state by making a simple API call.
   *
   * @returns Promise resolving to true if service account is authenticated and active
   */
  public async isAuthenticated(): Promise<boolean> {
    try {
      // Make a simple API call to validate the service account token
      // We use listServiceAccounts as it's a lightweight call that requires authentication
      await this.dfnsClient.auth.listServiceAccounts()
      return true
    } catch (error) {
      // Service account token is invalid, expired, or service account is deactivated
      return false
    }
  }
}
