import { KeyCurve, KeyProtocol } from '@dfns/sdk/codegen/datamodel/Wallets'

export type WalletExportConfig = {
  encryptionKey: string
  supportedSchemes: {
    protocol: KeyProtocol
    curve: KeyCurve
  }[]
}

export type RecoverSecretKeyParams = {
  minSigners: number
  publicKey: string
  protocol: KeyProtocol
  curve: KeyCurve
  encryptedKeyShares: {
    signerId: string
    encryptedKeyShare: string
  }[]
}
