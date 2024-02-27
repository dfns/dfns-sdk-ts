import { Signer, SignerResult } from '@polkadot/api/types'
import { SignerPayloadJSON } from '@polkadot/types/types/extrinsic'
import { DfnsWallet } from './index'

export class PolkadotSigner implements Signer {
    // Id we increment for each signature
    private id: number

    constructor(private wallet: DfnsWallet) { }

    async signPayload(payload: SignerPayloadJSON): Promise<SignerResult> {
        const signerPayload = this.wallet.registry.createType('SignerPayload', payload, { version: payload.version })

        const signature = await this.wallet.signRaw(signerPayload.toHex(), payload.address)
        return { id: ++this.id, signature: signature }
    }
}
