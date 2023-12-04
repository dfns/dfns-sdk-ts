import { buildKeyImportRequest, SecretKey, SignersInfo, KeyCurve, KeyProtocol } from './codegen/dfns_key_import'
import { ImportWalletBody, GetWalletResponse } from '@dfns/sdk/types/wallets'
import { ListSignersResponse } from '@dfns/sdk/types/signers'

type Signer = ListSignersResponse['clusters'][number]['signers'][number]
type KeyScheme = GetWalletResponse['signingKey']['scheme']

export const splitPrivateKeyForSigners = ({
  signers,
  privateKey,
  keyScheme = 'ECDSA',
}: {
  signers: Signer[]
  privateKey: Uint8Array | Buffer
  keyScheme?: KeyScheme
}): Pick<ImportWalletBody, 'protocol' | 'curve' | 'minSigners' | 'encryptedKeyShares'> => {
  let curve: KeyCurve
  let protocol: KeyProtocol

  if (keyScheme === 'ECDSA') {
    curve = KeyCurve.Secp256k1
    protocol = KeyProtocol.Cggmp21
  } else {
    throw Error('Import only supports ECDSA keys for now')
  }

  // We set this as constant do not expose it, because Dfns API will only accept minSigners = 3 for now.
  const minSigners = 3

  const result = buildKeyImportRequest(
    SecretKey.fromBytesBE(privateKey),
    SignersInfo.new(signers),
    minSigners,
    protocol,
    curve
  )

  return {
    curve: result.curve,
    protocol: result.protocol,
    minSigners: result.minSigners,
    encryptedKeyShares: result.encryptedKeyShares,
  }
}
