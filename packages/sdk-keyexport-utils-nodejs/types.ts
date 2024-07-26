import { ExportWalletRequest } from '@dfns/sdk/types/wallets'

type KeyProtocol = ExportWalletRequest['body']['supportedSchemes'][number]['protocol']
type KeyCurve = ExportWalletRequest['body']['supportedSchemes'][number]['curve']

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
