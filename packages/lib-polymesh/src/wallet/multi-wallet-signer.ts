import { DfnsError } from '@dfns/sdk'
import {
  PolkadotSigner,
  SignerPayloadRaw,
  SignerPayloadJSON,
  SignerResult,
} from '@polymeshassociation/signing-manager-types'
import type { DfnsWallet } from './wallet'

/**
 * Multi-wallet signer that delegates to the appropriate wallet based on address
 */
export class DfnsMultiWalletSigner implements PolkadotSigner {
  constructor(private getWallets: () => Promise<DfnsWallet[]>) {}

  public async signRaw(raw: SignerPayloadRaw): Promise<SignerResult> {
    const wallets = await this.getWallets()
    const wallet = wallets.find((w: DfnsWallet) => w.address === raw.address)

    if (!wallet) {
      throw new DfnsError(-1, 'No wallet found for address', { address: raw.address })
    }

    return wallet.signRaw(raw)
  }

  public async signPayload(signerPayload: SignerPayloadJSON): Promise<SignerResult> {
    const wallets = await this.getWallets()
    const wallet = wallets.find((w: DfnsWallet) => w.address === signerPayload.address)

    if (!wallet) {
      throw new DfnsError(-1, 'No wallet found for address', { address: signerPayload.address })
    }

    return wallet.signPayload(signerPayload)
  }
}
