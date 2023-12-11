import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { Prefix, b58cencode, buf2hex, getPkhfromPk, hex2buf, mergebuf, prefix } from '@taquito/utils';
import { Signer } from '@taquito/taquito'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { TxWatermark } from './constant'
import { hash } from '@stablelib/blake2b'
import { uint8ArraysEqual } from './uint8ArraysEqual';
import { addHexPrefix } from './addHexPrefix';


export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

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

export class DfnsWallet implements Signer {
  private readonly dfnsClient
  private tezosPubKey: string

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
        
    // get the public key encoded with the right tezos prefix.
    this.tezosPubKey = b58cencode(
      metadata.signingKey.publicKey,
      prefix[metadata.signingKey.scheme === 'EdDSA' ? Prefix.EDPK : Prefix.SPPK],
    )
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Tezos' && res.network !== 'TezosGhostnet') {
      throw new DfnsError(-1, 'wallet is not bound to Tezos or TezosGhostnet', { walletId, network: res.network })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    // Tezos-bound wallets will have a tezos address
    return this.metadata.address!
  }

  // publicKey implements the Taquito Signer interface
  async publicKey(): Promise<string> {
    return this.tezosPubKey
  }

  // publicKeyHash implements the Taquito Signer interface
  async publicKeyHash(): Promise<string> {
    return this.metadata.address!
  }

  // secretKey implements the Taquito Signer interface
  async secretKey(): Promise<string | undefined> {
    return undefined;
  }

  // sign implements the Taquito Signer interface
  async sign(op: string, magicByte?: Uint8Array | undefined): Promise<{ bytes: string; sig: string; prefixSig: string; sbytes: string; }> {
    let res: GenerateSignatureResponse
    if (uint8ArraysEqual(magicByte, TxWatermark)) {
      res = await this.generateSignatureForTransaction(op);
    } else {
      res = await this.generateSignatureForHash(op, magicByte);
    }
      
    assertSigned(res)

    const signature = res.signature!.encoded!.replace(/^0x/, '')
    
    const sigPrefix = this.metadata.signingKey.scheme === 'ECDSA' ?  prefix.spsig : prefix.edsig
    return {
      bytes: op,
      sig: b58cencode(signature, prefix.sig),
      sbytes: res.signedData!.replace(/^0x/, ''),
      prefixSig: b58cencode(signature, sigPrefix),
    }
  }

  private async generateSignatureForTransaction(transaction: string): Promise<GenerateSignatureResponse> {
    return await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Transaction', transaction: addHexPrefix(transaction) },
    });
  }

  private async generateSignatureForHash(op: string, magicByte: Uint8Array | undefined): Promise<GenerateSignatureResponse> {
    let data = hex2buf(op);

    if (magicByte) {
      data = mergebuf(magicByte, data);
    }

    const bytesHash = hash(data, 32);

    return await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Hash', hash: addHexPrefix(buf2hex(bytesHash)) },
    });
  }
}

