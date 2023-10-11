import { buildKeyImportRequest, SecretKey, SignersInfo } from './codegen/dfns_key_import'
import { ImportWalletBody, KeyScheme } from '@dfns/sdk/codegen/datamodel/Wallets'
import { Signer } from '@dfns/sdk/codegen/datamodel/Signers'

export const splitPrivateKeyForSigners = ({
  signers,
  privateKey,
  keyScheme = KeyScheme.ECDSA,
}: {
  signers: Signer[]
  privateKey: Buffer
  keyScheme?: KeyScheme
}): Pick<ImportWalletBody, 'protocol' | 'curve' | 'minSigners' | 'encryptedKeyShares'> => {
  if (keyScheme !== KeyScheme.ECDSA) {
    throw Error('Import only supports ECDSA keys for now')
  }

  const result = buildKeyImportRequest(SignersInfo.new(signers), SecretKey.fromBytesBE(privateKey))

  return {
    curve: result.curve,
    protocol: result.protocol,
    minSigners: result.minSigners,
    encryptedKeyShares: result.encryptedKeyShares,
  }
}
