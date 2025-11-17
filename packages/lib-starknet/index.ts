/* eslint-disable @typescript-eslint/no-unused-vars */
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  Call,
  InvocationsSignerDetails,
  Signature,
  SignerInterface,
  TypedData} from 'starknet'

export const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(stripHexPrefix(hex), 'hex')
}

const stripHexPrefix = (hex: string): string => {
  return hex.replace(/^0x/, '')
}

const addHexPrefix = (inputString: string): string =>  {
    return inputString.startsWith('0x') ? inputString : '0x' + inputString;
}

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const assertSignResponseSuccessful = (response: GenerateSignatureResponse) => {
  if (response.status === 'Failed') {
    console.log(JSON.stringify(response, null, 2))
    throw new DfnsError(-1, 'signing failed', response)
  } else if (response.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      response
    )
  } else if (!response.signature || !response.signature.encoded) {
    throw new DfnsError(-1, 'signature missing', response)
  }
}

export class DfnsWallet extends SignerInterface {
  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string

  private constructor(
    dfnsOptions: DfnsWalletOptions,
    private readonly publicKey: string,
    private readonly address: string
  ) {
    super()
    this.dfnsClient = dfnsOptions.dfnsClient
    this.walletId = dfnsOptions.walletId
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Starknet' && res.network !== 'StarknetSepolia') {
      throw new DfnsError(-1, 'wallet is not bound to a Starknet network', {
        walletId,
        network: res.network,
      })
    }

    if (!res.signingKey?.publicKey) {
      throw new DfnsError(-1, 'wallet public key not found', { walletId })
    }

    // Ensure the public key has the 0x prefix
    const publicKey = addHexPrefix(res.signingKey.publicKey)

    return new DfnsWallet(options, publicKey, res.address!)
  }

  public getPubKey(): Promise<string> {
    return Promise.resolve(this.publicKey)
  }

  public getAddress(): string {
    return this.address
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async signMessage(typedData: TypedData, _accountAddress: string): Promise<Signature> {

    const response = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: {
        kind: 'Snip12',
        types: typedData.types,
        primaryType: typedData.primaryType,
        domain: typedData.domain,
        message: typedData.message as any,
      },
    })

    assertSignResponseSuccessful(response)

    
    return [
        addHexPrefix(response.signature!.r),
        addHexPrefix(response.signature!.s),
    ]
  }

  public async signTransaction(
    _transactions: Call[],
    _transactionsDetail: InvocationsSignerDetails
  ): Promise<Signature> {
    throw new DfnsError(-1, 'signTransaction not implemented', {}) 
  }

  public async signDeployAccountTransaction(): Promise<Signature> {
    throw new DfnsError(-1, 'signDeployAccountTransaction not implemented', {})
  }

  public async signDeclareTransaction(): Promise<Signature> {
    throw new DfnsError(-1, 'signDeclareTransaction not implemented', {})
  }
}