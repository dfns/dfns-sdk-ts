import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  AbstractSigner,
  Provider,
  Signature,
  Signer,
  Transaction,
  TransactionLike,
  TransactionRequest,
  TypedDataDomain,
  TypedDataEncoder,
  TypedDataField,
  computeAddress,
  getAddress,
  getNumber,
  hashMessage,
  hexlify,
  resolveAddress,
  resolveProperties,
  toUtf8Bytes,
} from 'ethers'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  maxRetries?: number
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  retryInterval?: number
}

type WalletMetadata = GetWalletResponse & { boundToEvmNetwork: boolean }

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

const combineSignature = (res: GenerateSignatureResponse): string => {
  if (!res.signature) {
    throw new DfnsError(-1, 'signature missing', res)
  }

  const { r, s, recid } = res.signature
  return Signature.from({
    r,
    s,
    v: recid ? 0x1c : 0x1b,
  }).serialized
}

const boundToEvmNetwork = (wallet: GetWalletResponse): boolean => {
  // if the address is evm format, it's a wallet bound to evm network. prefer to
  // sign the full transaction instead of the hash of the transaction
  return wallet.address ? !!wallet.address.match(/^0x[0-9a-fA-F]{40}$/) : false
}

const fetchWalletMetadata = async (options: DfnsWalletOptions): Promise<WalletMetadata> => {
  const { walletId, dfnsClient } = options
  const wallet = await dfnsClient.wallets.getWallet({ walletId })

  if (wallet.status !== 'Active') {
    throw new DfnsError(-1, 'wallet not active', { walletId, status: wallet.status })
  }

  const { scheme, curve } = wallet.signingKey
  if (scheme !== 'ECDSA') {
    throw new DfnsError(-1, 'key scheme is not ECDSA', { walletId, scheme })
  }
  if (curve !== 'secp256k1') {
    throw new DfnsError(-1, 'key curve is not secp256k1', { walletId, curve })
  }

  return {
    boundToEvmNetwork: boundToEvmNetwork(wallet),
    ...wallet,
  }
}

export class DfnsWallet extends AbstractSigner {
  private address?: string
  private metadata?: WalletMetadata

  /** @deprecated use DfnsWallet.init(options) instead */
  constructor(private options: DfnsWalletOptions, provider?: Provider | null) {
    super(provider)
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const metadata = await fetchWalletMetadata(options)
    const wallet = new DfnsWallet(options)
    wallet.metadata = metadata
    return wallet
  }

  public connect(provider: Provider | null): Signer {
    const copy = new DfnsWallet(this.options, provider)
    copy.address = this.address
    copy.metadata = this.metadata
    return copy
  }

  private async getCachedMetadata(): Promise<WalletMetadata> {
    if (!this.metadata) {
      this.metadata = await fetchWalletMetadata(this.options)
    }
    return this.metadata
  }

  public async getAddress(): Promise<string> {
    if (!this.address) {
      const metadata = await this.getCachedMetadata()
      this.address = metadata.boundToEvmNetwork
        ? getAddress(metadata.address!)
        : computeAddress('0x' + metadata.signingKey.publicKey)
    }

    return this.address
  }

  private async signHash(hash: string): Promise<string> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: 'Hash', hash },
    })

    assertSigned(res)
    return combineSignature(res)
  }

  public async signTransaction(tx: TransactionRequest): Promise<string> {
    // replace any Addressable or ENS name with an address
    const { to, from } = await resolveProperties({
      to: tx.to ? resolveAddress(tx.to, this.provider) : undefined,
      from: tx.from ? resolveAddress(tx.from, this.provider) : undefined,
    })

    if (to != null) {
      tx.to = to
    }
    if (from != null) {
      tx.from = from
    }

    if (tx.from != null) {
      if (getAddress(<string>tx.from) !== (await this.getAddress())) {
        throw new Error('transaction from address mismatch')
      }
      delete tx.from
    }

    const btx = Transaction.from(<TransactionLike<string>>tx)

    const metadata = await this.getCachedMetadata()
    if (metadata.boundToEvmNetwork) {
      const res = await this.options.dfnsClient.wallets.generateSignature({
        walletId: metadata.id,
        body: { kind: 'Transaction', transaction: btx.unsignedSerialized },
      })

      assertSigned(res)
      if (!res.signedData) {
        throw new DfnsError(-1, 'signedData missing', res)
      }
      return res.signedData
    } else {
      btx.signature = await this.signHash(btx.unsignedHash)
      return btx.serialized
    }
  }

  public async signMessage(message: string | Uint8Array): Promise<string> {
    const metadata = await this.getCachedMetadata()
    if (metadata.boundToEvmNetwork) {
      if (typeof message === 'string') {
        message = toUtf8Bytes(message)
      }
      const res = await this.options.dfnsClient.wallets.generateSignature({
        walletId: metadata.id,
        body: { kind: 'Message', message: hexlify(message) },
      })

      assertSigned(res)
      return combineSignature(res)
    } else {
      return this.signHash(hashMessage(message))
    }
  }

  public async signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    // Populate any ENS names
    const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (name: string) => {
      if (!this.provider) {
        throw new Error('cannot resolve ENS names without a provider')
      }
      const address = await this.provider.resolveName(name)
      if (!address) throw new Error(`unconfigured ENS name ${name}`)

      return address
    })

    const metadata = await this.getCachedMetadata()
    if (metadata.boundToEvmNetwork) {
      const res = await this.options.dfnsClient.wallets.generateSignature({
        walletId: metadata.id,
        body: {
          kind: 'Eip712',
          types,
          domain: {
            name: populated.domain.name ?? undefined,
            version: populated.domain.version ?? undefined,
            chainId: populated.domain.chainId ? getNumber(populated.domain.chainId) : undefined,
            verifyingContract: populated.domain.verifyingContract ?? undefined,
            salt: populated.domain.salt ? hexlify(populated.domain.salt) : undefined,
          },
          message: populated.value,
        },
      })

      assertSigned(res)
      return combineSignature(res)
    } else {
      return this.signHash(TypedDataEncoder.hash(populated.domain, types, populated.value))
    }
  }
}
