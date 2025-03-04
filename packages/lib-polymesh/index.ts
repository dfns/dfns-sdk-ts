import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { HexString } from '@polkadot/util/types'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  PolkadotSigner,
  signedExtensions,
  SignerPayloadRaw,
  SignerPayloadJSON,
  SignerResult,
  SigningManager,
  TypeRegistry,
  u8aToHex,
} from '@polymeshassociation/signing-manager-types';

import { Registry } from '@polkadot/types/types';


export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const assertSignResponseSuccessful = (response: GenerateSignatureResponse) => {
  if (response.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', response)
  } else if (response.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      response
    )
  } else if (!response.signature || !response.signature!.encoded) {
    throw new DfnsError(-1, 'signature missing', response)
  }
}

export class DfnsSigningManager implements SigningManager {
  private externalSigner: DfnsWallet;
  private _ss58Format?: number;

  constructor(dfnsSigner: DfnsWallet) {
    this.externalSigner = dfnsSigner
  }

  /**
   * Set the SS58 format in which addresses will be encoded
   */
  public setSs58Format(ss58Format: number): void {
    this._ss58Format = ss58Format;
  }

  public get ss58Format(): number {
    if (!this._ss58Format) {
      throw new DfnsError( -1,
        'DfnsSigningManager ss58Format was not set. The Polymesh SDK should set the format upon its initialization'
      )
    }

    return this._ss58Format;
  }

  /**
   * Return the addresses of all derived keys in Fireblocks
   */
  public async getAccounts(): Promise<string[]> {
    return [this.externalSigner.address]
  }

  /**
   * Return a signer object that uses the underlying keyring pairs to sign
   */
  public getExternalSigner(): PolkadotSigner {
    return this.externalSigner;
  }
}

export class DfnsWallet implements PolkadotSigner {
  // Id we increment for each signature
  private id: number

  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string

  private constructor(public address: string, private registry: Registry, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.walletId = options.walletId
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Polymesh' && res.network !== 'PolymeshTestnet' ) {
      throw new DfnsError(-1, 'wallet is not bound to a Polymesh network', {
        walletId,
        network: res.network,
      })
    }

    const registry = new TypeRegistry()
    registry.setSignedExtensions(signedExtensions)

    return new DfnsWallet(res.address!, registry as unknown as Registry,  options)
  }

  public async signRaw(raw: SignerPayloadRaw): Promise<SignerResult> {
    const signature = await this.generateSignature(raw.data, raw.address)
    return { id: ++this.id, signature: signature }
  }

  public async signPayload(signerPayload: SignerPayloadJSON): Promise<SignerResult> {
    const signablePayload = this.registry.createType('ExtrinsicPayload', signerPayload, {
      version: signerPayload.version,
    })

    const message = u8aToHex(signablePayload.toU8a(true))

    const signature = await this.generateSignature(message, signerPayload.address)
    return { id: ++this.id, signature: signature }
  }


  private async generateSignature(data: string, address: string) {
    if (this.address !== address) {
      throw new DfnsError(-1, 'address does not match the wallet used to initialize DfnsWallet', {
        expectedAddress: this.address,
        givenAddress: address,
      })
    }

    const response = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: { kind: 'Message', message: data }
    })

    assertSignResponseSuccessful(response)

    // Add hex prefix and append 0 byte to indicate an ed25519 signature
    return response.signature!.encoded!.replace(/^0x/, "0x00") as HexString
  }
}

