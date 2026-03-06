import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { ActivateWalletResponse, GenerateSignatureResponse, GetWalletResponse } from '@dfns/sdk/types/wallets'
import {
  AccountAddress,
  Transaction,
} from '@concordium/web-sdk'
import { SerializedCredentialDeploymentDetails } from '@concordium/id-app-sdk'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const assertSigned = (res: GenerateSignatureResponse) => {
  if (res.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', res)
  } else if (res.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      res
    )
  }
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

  // We return the signature instead of a SignedTransaction to be flexible when it comes
  // to MultiSig. We can't really know the CredentialId and the KeyId of a given sig,
  // We let the client handle it.
  public async signTransaction(transaction: Transaction.Type): Promise<string> {
    if (this.status !== 'Active') {
      throw new DfnsError(-1, 'wallet is not active', {
        walletId: this.walletId,
        status: this.status,
      })
    }

    if (!Transaction.isSignable(transaction)) {
      throw new DfnsError(-1, 'transaction is not signable', { transaction })
    }

    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: {
        kind: 'Transaction',
        // take care of bigints
        transaction: JSON.parse(Transaction.toJSONString(transaction)),
      },
    })

    assertSigned(res)

    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'signature missing from response', res)
    }

    return res.signature.encoded
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