import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { ActivateWalletResponse, GetWalletResponse } from '@dfns/sdk/types/wallets'
import {
  AccountAddress,
} from '@concordium/web-sdk'
import { SerializedCredentialDeploymentDetails } from '@concordium/id-app-sdk'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

export class DfnsWallet {
  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string
  private status: string
  private address?: string
  private publicKey: string

  private constructor(
    dfnsOptions: DfnsWalletOptions,
    walletResponse: GetWalletResponse
  ) {
    this.dfnsClient = dfnsOptions.dfnsClient
    this.walletId = dfnsOptions.walletId
    this.status = walletResponse.status
    this.address = walletResponse.address
    this.publicKey = walletResponse.signingKey.publicKey
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.network !== 'Concordium' && res.network !== 'ConcordiumTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to a Concordium network', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(options, res)
  }

  public getAccountAddress(): AccountAddress.Type | undefined {
    if (this.status !== 'Active') {
        throw new DfnsError(-1, 'wallet is not active', { walletId: this.walletId, status: this.status })
    }
    return this.address ? AccountAddress.fromBase58(this.address) : undefined
  }

  public getPublicKey(): string {
    return this.publicKey
  }

  public getStatus(): string {
    return this.status
  }

  public async activate(cred: SerializedCredentialDeploymentDetails): Promise<ActivateWalletResponse> {
    return this.dfnsClient.wallets.activateWallet({
      walletId: this.walletId,
      body: cred
    })
  }

  public async refresh(): Promise<void> {
    const res = await this.dfnsClient.wallets.getWallet({ walletId: this.walletId })
    this.status = res.status
    this.address = res.address
    this.publicKey = res.signingKey.publicKey
  }
}
