import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  type AvailableVeChainProviders,
  RPC_METHODS,
  type TransactionRequestInput,
  VeChainAbstractSigner,
} from '@vechain/sdk-network'

import { Address, Hex, Transaction } from '@vechain/sdk-core';
import { uncompressedSecp256k1 } from './publicKey'

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

export class DfnsWallet extends VeChainAbstractSigner {
  public readonly address
  private readonly dfnsClient
  public readonly walletId

  private constructor(private ad: string, client: DfnsApiClient, walletId: string, provider?: AvailableVeChainProviders) {
    super(provider)
    this.dfnsClient = client
    this.address = ad
    this.walletId = walletId
  }


  public static async init(options: DfnsWalletOptions, provider?: AvailableVeChainProviders): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    const { scheme, curve } = res.signingKey
    if (scheme !== 'ECDSA') {
      throw new DfnsError(-1, 'key scheme is not ECDSA', { walletId, scheme })
    }
    if (curve !== 'secp256k1') {
      throw new DfnsError(-1, 'key curve is not secp256k1', { walletId, curve })
    }

    const ad = Address.ofPublicKey(Buffer.from(uncompressedSecp256k1(res.signingKey.publicKey))).toString()
    return new DfnsWallet(ad, dfnsClient, walletId, provider)
  }

  private async sign(msgHash: Buffer): Promise<Buffer> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: { kind: 'Hash', hash: msgHash.toString('hex') },
    })

    assertSigned(res)

    if (!res.signature) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return Buffer.concat([
      Buffer.from(res.signature.r.replace(/^0x/, ''), 'hex'),
      Buffer.from(res.signature.s.replace(/^0x/, ''), 'hex'),
      Buffer.from([res.signature.recid!]),
    ])
  }

  public connect(provider: AvailableVeChainProviders): this {
    return new DfnsWallet(this.address, this.dfnsClient, this.walletId, provider) as this
  }

  public async getAddress(): Promise<string> {
    return Promise.resolve(this.address)
  }

  public async signTransaction(transactionToSign: TransactionRequestInput): Promise<string> {
    const transactionBody =
      await this.populateTransaction(transactionToSign);

    // Get the transaction object
    const transaction = Transaction.of(transactionBody);
    const transactionHash = transaction.getTransactionHash().bytes
    const signature = await this.sign(Buffer.from(transactionHash))

    return Hex.of(signature).toString()
  }

  public async sendTransaction(transactionToSend: TransactionRequestInput): Promise<string> {
    const signedTransaction =
      await this.signTransaction(transactionToSend);

    return this.provider?.request({
      method: RPC_METHODS.eth_sendRawTransaction,
      params: [Hex.of(signedTransaction).toString()],
    }) as Promise<string>;
  }

  public async signPayload(payload: Uint8Array): Promise<string> {
    const signature = await this.sign(Buffer.from(payload));
    // SCP256K1 encodes the recovery flag in the last byte. EIP-191 adds 27 to it.
    signature[signature.length - 1] += 27;
    return Hex.of(signature).toString();
  }
}
