import { DfnsApiClient } from '@dfns/sdk'
import { KeyCurve, KeyScheme, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import * as elliptic from 'elliptic';
import {SignedTransaction, Transaction} from '@tronweb3/tronwallet-abstract-adapter';
const TronWeb = require('tronweb')

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet {
  private options: Required<DfnsWalletOptions>
  private tronAddress: string

  private constructor(options: DfnsWalletOptions, tronAddress: string) {
    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }

   this.tronAddress = tronAddress
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (!res.signingKey || res.signingKey.scheme !== KeyScheme.ECDSA || res.signingKey.curve !== KeyCurve.secp256k1) {
      throw new Error(
        `wallet ${walletId} has incompatible scheme (${res.signingKey?.scheme}) or curve (${res.signingKey?.curve})`
      )
    }

    // Decompressed the key to derive the address
    const ec = new elliptic.ec('secp256k1')
    const keyAsArray = ec.keyFromPublic(res.signingKey.publicKey, 'hex').getPublic(false, 'array')
    const tronAddress = TronWeb.utils.crypto.getBase58CheckAddress(TronWeb.utils.crypto.computeAddress(keyAsArray))

    return new DfnsWallet(options, tronAddress)
  }

  public get address(): string { 
    return this.tronAddress
  }

  async waitForSignature(signatureId: string): Promise<string> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature) break

        const r = res.signature.r.substring(2)
        const s =res.signature.s.substring(2);
        const v = ( res.signature.recid ? 0x1c : 0x1b ).toString(16);

        return r+s+v
      } else if (res.status === SignatureStatus.Failed) {
        console.log("signature failed: %s", res)
        break
      }

      maxRetries -= 1
    }

    throw new Error(`signature ${signatureId} not available`)
  }

  async signTransaction(transaction: Transaction): Promise<SignedTransaction> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: transaction.txID },
    })

    const signature = await this.waitForSignature(res.id)

    const signedTransaction: SignedTransaction = {
      ...transaction,
      signature: [ signature ],
    };

    return signedTransaction
  }

  async signMessage(message: string): Promise<string> {
    const { walletId, dfnsClient } = this.options

    let messageHash = TronWeb.utils.message.hashMessage(message)
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: messageHash },
    })

    return this.waitForSignature(res.id)
  }
}
