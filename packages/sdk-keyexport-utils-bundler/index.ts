import { KeyExportContext } from '@dfns/dfns-key-export-bundler'
import { RecoverSecretKeyParams, WalletExportConfig } from './types'
export * from './types'

export const newWalletExportContext = () => {
  const ctx = KeyExportContext.new()

  const getConf = (): WalletExportConfig => {
    const req = ctx.buildKeyExportRequest()
    return {
      encryptionKey: req.encryptionKey,
      supportedSchemes: req.supportedSchemes,
    }
  }

  const recoverSecretKey = (params: RecoverSecretKeyParams): Uint8Array => {
    const secretKey = ctx.recoverSecretKey({
      ...params,
      encryptedShares: params.encryptedKeyShares, // re-mapping field name, since wasm module has wrong name
    })
    return secretKey.toBytesBE()
  }

  return {
    getConf,
    recoverSecretKey,
  }
}
