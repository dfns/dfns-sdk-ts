import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { PolkadotSigner } from './polkadot-signer'
import { HexString } from '@polkadot/util/types'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'

import { TypeRegistry } from '@polkadot/types/create';

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

export class DfnsWallet {
  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string
  public readonly signer: PolkadotSigner
  public registry: TypeRegistry
  public static supportedNetworks: string[] = ['Polkadot', 'PolkadotWestend', 'Kusama']

  private constructor(public address: string, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.walletId = options.walletId
    this.signer = new PolkadotSigner(this);
  }

  public setRegistry(registry: TypeRegistry) {
    this.registry = registry;
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (!this.supportedNetworks.includes(res.network as string)) {
      throw new DfnsError(-1, 'wallet is not bound to a Polkadot compatible network', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res.address!, options)
  }

  public async signRaw(data: string, address: string) {
    if (this.address !== address) {
      throw new DfnsError(-1, 'address does not match the wallet used to initialize DfnsWallet', {
        expectedAddress: this.address,
        givenAddress: address
      })
    }

    const response = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: { kind: 'Transaction', transaction: data, },
    })

    assertSignResponseSuccessful(response)

    return (response.signature!.encoded!) as HexString
  }

  public async broadcast(transaction: string) {
    const response = await this.dfnsClient.wallets.broadcastTransaction({
      walletId: this.walletId,
      body: { kind: 'Transaction', transaction, },
    })

    return response
  }
}
