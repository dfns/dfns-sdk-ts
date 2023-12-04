import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { getAddress } from '@ethersproject/address'
import { Provider, TransactionRequest } from '@ethersproject/abstract-provider'
import { Signer, TypedDataDomain, TypedDataField, TypedDataSigner } from '@ethersproject/abstract-signer'
import { BigNumber } from '@ethersproject/bignumber'
import { hexlify, joinSignature } from '@ethersproject/bytes'
import { hashMessage, _TypedDataEncoder } from '@ethersproject/hash'
import { keccak256 } from '@ethersproject/keccak256'
import { defineReadOnly, resolveProperties } from '@ethersproject/properties'
import { toUtf8Bytes } from '@ethersproject/strings'
import { computeAddress, serialize, UnsignedTransaction } from '@ethersproject/transactions'

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
  return joinSignature({
    r,
    s,
    recoveryParam: recid,
  })
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

export class DfnsWallet extends Signer implements TypedDataSigner {
  private address?: string
  private metadata?: WalletMetadata

  /** @deprecated use DfnsWallet.init(options) instead */
  constructor(private options: DfnsWalletOptions, provider?: Provider | null) {
    super()

    defineReadOnly(this, 'provider', provider || undefined)
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
    const metadata = await this.getCachedMetadata()
    const res = await this.options.dfnsClient.wallets.generateSignature({
      walletId: metadata.id,
      body: { kind: 'Hash', hash },
    })

    assertSigned(res)
    return combineSignature(res)
  }

  public async signTransaction(transaction: TransactionRequest): Promise<string> {
    return resolveProperties(transaction).then(async (tx) => {
      if (tx.from != null) {
        if (getAddress(tx.from) !== (await this.getAddress())) {
          throw new Error('transaction from address mismatch')
        }
        delete tx.from
      }

      const unsigned = serialize(<UnsignedTransaction>tx)

      const metadata = await this.getCachedMetadata()
      if (metadata.boundToEvmNetwork) {
        const res = await this.options.dfnsClient.wallets.generateSignature({
          walletId: metadata.id,
          body: { kind: 'Transaction', transaction: unsigned },
        })

        assertSigned(res)
        if (!res.signedData) {
          throw new DfnsError(-1, 'signedData missing', res)
        }
        return res.signedData
      } else {
        const signature = await this.signHash(keccak256(unsigned))
        return serialize(<UnsignedTransaction>tx, signature)
      }
    })
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

  public async _signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    // Populate any ENS names
    const populated = await _TypedDataEncoder.resolveNames(domain, types, value, async (name: string) => {
      if (!this.provider) {
        throw new Error('cannot resolve ENS names without a provider')
      }
      const resolved = await this.provider.resolveName(name)
      if (!resolved) throw new Error(`unconfigured ENS name ${name}`)
      return resolved
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
            chainId: populated.domain.chainId ? BigNumber.from(populated.domain.chainId).toNumber() : undefined,
            verifyingContract: populated.domain.verifyingContract ?? undefined,
            salt: populated.domain.salt ? hexlify(populated.domain.salt) : undefined,
          },
          message: populated.value,
        },
      })

      assertSigned(res)
      return combineSignature(res)
    } else {
      return this.signHash(_TypedDataEncoder.hash(populated.domain, types, populated.value))
    }
  }
}
