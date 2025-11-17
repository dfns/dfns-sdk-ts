import { DfnsApiClient } from '@dfns/sdk'
import { PolkadotSigner, SigningManager } from '@polymeshassociation/signing-manager-types'
import type { InjectedAccountWithMeta, ValidatedPolymeshWallet, PolymeshNetwork, WalletFilter } from '../types'
import { DfnsWallet, DfnsMultiWalletSigner } from '../wallet'
import { GetWalletResponse } from '@dfns/sdk/types/wallets'
import { changeAddressFormat, isValidPolymeshWallet } from '../utils'

/**
 * Base class for DFNS Polymesh Signing Managers
 *
 * Contains all common functionality shared between service account,
 * browser, and hybrid signing managers. Subclasses need only implement
 * client creation and any authentication-specific logic.
 */
export abstract class DfnsSigningManagerBase implements SigningManager {
  protected dfnsClient: DfnsApiClient
  protected _ss58Format?: number
  protected walletFilter: WalletFilter
  protected allowedNetworks: PolymeshNetwork[]
  protected cachedWallets: ValidatedPolymeshWallet[] | null = null

  /**
   * Base constructor - subclasses should call this after creating DfnsApiClient
   *
   * @param dfnsClient - Initialized DFNS API client
   * @param walletFilter - Strategy for filtering wallets
   * @param allowedNetworks - Which Polymesh networks to include
   */
  protected constructor(dfnsClient: DfnsApiClient, walletFilter: WalletFilter, allowedNetworks: PolymeshNetwork[]) {
    this.dfnsClient = dfnsClient
    this.walletFilter = walletFilter
    this.allowedNetworks = allowedNetworks
  }

  /**
   * Set the SS58 format in which addresses will be encoded
   */
  public setSs58Format(ss58Format: number): void {
    this._ss58Format = ss58Format
  }

  /**
   * Get the underlying DFNS API client for additional operations
   *
   * This allows users to perform other wallet management operations
   * or API calls using the same authenticated client instance.
   *
   * @returns The DFNS API client instance
   */
  public getDfnsClient(): DfnsApiClient {
    return this.dfnsClient
  }

  /**
   * Refresh the cached wallet list by fetching fresh data from DFNS API
   */
  public async refreshWallets(): Promise<void> {
    this.cachedWallets = await this.fetchWallets()
  }

  /**
   * Check if the signing manager is authenticated and ready to access wallets
   */
  protected async isAuthenticated(): Promise<boolean> {
    // For browser manager, we need to check if we have a valid client
    // For external manager, we need to check if authToken is valid
    // For service account, we should always be authenticated
    // Subclasses can override this for more specific checks
    return true // Default implementation - subclasses should override if needed
  }

  /**
   * Get available Polymesh wallets from cache
   */
  async getWallets(): Promise<ValidatedPolymeshWallet[]> {
    if (!(await this.isAuthenticated()) || this.cachedWallets === null) {
      return []
    }

    return this.cachedWallets
  }

  /**
   * Get all account addresses from available wallets
   */
  async getAccounts(): Promise<string[]> {
    const ss58Format = this.getSs58Format('getAccounts')
    const wallets = await this.getWallets()
    return wallets.map((wallet) => {
      return changeAddressFormat(wallet.address, ss58Format)
    })
  }

  /**
   * Get accounts with metadata formatted to match the Polymesh browser extension signing manager
   */
  async getAccountsWithMeta(): Promise<InjectedAccountWithMeta[]> {
    const ss58Format = this.getSs58Format('getAccountsWithMeta')
    const wallets = await this.getWallets()

    return wallets.map((wallet) => {
      let genesisHash = undefined
      if (wallet.network === 'Polymesh') {
        genesisHash = '0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063' // Polymesh mainnet
      } else if (wallet.network === 'PolymeshTestnet') {
        genesisHash = '0x2ace05e703aa50b48c0ccccfc3b424f2ba1f4b77f04e3c16fbc929b8e5dd089f' // Polymesh testnet
      }

      return {
        address: changeAddressFormat(wallet.address, ss58Format),
        meta: {
          genesisHash,
          name: wallet.name || `Wallet ${wallet.id}`,
          source: 'dfns',
        },
        type: wallet.signingKey.curve,
      }
    })
  }

  /**
   * Get a multi-wallet signer that can sign with any available wallet (SigningManager interface)
   */
  public getExternalSigner(): PolkadotSigner {
    return new DfnsMultiWalletSigner(() => this.getWalletInstances())
  }

  /**
   * Fetch available Polymesh wallets from DFNS API
   *
   * This method handles the common wallet fetching and filtering logic.
   * Subclasses can override if they need authentication-specific behavior.
   */
  protected async fetchWallets(): Promise<ValidatedPolymeshWallet[]> {
    let walletList: Array<GetWalletResponse>

    switch (this.walletFilter.type) {
      case 'wallet': {
        // Get a specific wallet by ID
        try {
          const wallet = await this.dfnsClient.wallets.getWallet({ walletId: this.walletFilter.walletId })
          walletList = [wallet]
        } catch (error) {
          throw new Error(`Failed to get wallet ${this.walletFilter.walletId}: ${error}`)
        }
        break
      }

      case 'user': {
        // Get wallets owned by a specific user (username, email, or userId)
        const response = await this.dfnsClient.wallets.listWallets({
          query: { owner: this.walletFilter.owner },
        })
        walletList = response.items
        break
      }

      case 'all':
      default: {
        // Get all wallets accessible to this client
        const allResponse = await this.dfnsClient.wallets.listWallets({})
        walletList = allResponse.items
        break
      }
    }

    return this.filterWallets(walletList)
  }

  /**
   * Filter raw wallet list to only include valid Polymesh wallets
   */
  protected filterWallets(walletList: Array<GetWalletResponse>): ValidatedPolymeshWallet[] {
    return walletList.filter((wallet): wallet is ValidatedPolymeshWallet =>
      isValidPolymeshWallet(wallet, this.allowedNetworks)
    )
  }

  /**
   * Get DfnsWallet instances for all available wallets
   */
  protected async getWalletInstances(): Promise<DfnsWallet[]> {
    const wallets = await this.getWallets()
    return wallets.map((walletMetadata) => {
      return DfnsWallet.createFromMetadata(walletMetadata, this.dfnsClient)
    })
  }

  /**
   * Get SS58 format with validation
   */
  protected getSs58Format(methodName: string): number {
    const { _ss58Format: format } = this

    if (format === undefined) {
      throw new Error(
        `Cannot call '${methodName}' before calling 'setSs58Format'. Did you forget to use this Signing Manager to connect with the Polymesh SDK?`
      )
    }

    return format
  }

  /**
   * Helper method to create wallet filter from parameters
   */
  protected static createWalletFilter(options: { user?: string; walletId?: string }): WalletFilter {
    const { user, walletId } = options

    // Validate filter options - only one should be specified
    const filterOptions = [user, walletId].filter(Boolean)
    if (filterOptions.length > 1) {
      throw new Error('Specify only one of: user or walletId')
    }

    if (walletId) {
      return { type: 'wallet', walletId }
    } else if (user) {
      return { type: 'user', owner: user }
    } else {
      return { type: 'all' }
    }
  }

  /**
   * Helper method to create allowed networks array
   */
  protected static createAllowedNetworks(network?: PolymeshNetwork): PolymeshNetwork[] {
    return network ? [network] : ['Polymesh', 'PolymeshTestnet']
  }
}
