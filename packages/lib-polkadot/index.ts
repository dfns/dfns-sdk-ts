import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { HexString } from '@polkadot/util/types'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'

import { Signer, SignerResult } from '@polkadot/api/types'
import { SignerPayloadRaw } from '@polkadot/types/types/extrinsic'

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
  } else if (!response.signature || !(response.signature!.encoded)) {
    throw new DfnsError(-1, 'signature missing', response)
  }
}

export class DfnsWallet implements Signer {
  // Id we increment for each signature
  private id: number

  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string
  public static supportedNetworks: string[] = ['Polkadot', 'Westend', 'Kusama']

  private constructor(public address: string, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.walletId = options.walletId
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (!this.supportedNetworks.includes(res.network)) {
      throw new DfnsError(-1, 'wallet is not bound to a Polkadot compatible network', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res.address!, options)
  }

  // Implementation of Signer
  public async signRaw(raw: SignerPayloadRaw): Promise<SignerResult> {
    const signature = await this.generateSignature(raw.data, raw.address)
    return { id: ++this.id, signature: signature }
  }

  private async generateSignature(data: string, address: string) {
    if (this.address !== address) {
      throw new DfnsError(-1, 'address does not match the wallet used to initialize DfnsWallet', {
        expectedAddress: this.address,
        givenAddress: address
      })
    }

    const response = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: { kind: 'Message', message: data, },
    })

    assertSignResponseSuccessful(response)

    return (response.signature!.encoded!) as HexString
  }
}
