import {
  buildKeyImportRequest,
  SecretKey,
  SignersInfo,
  KeyCurve as KeyCurveInternal,
  KeyProtocol,
} from '@dfns/dfns-key-import-bundler'
import { ImportWalletBody, GetWalletResponse } from '@dfns/sdk/types/wallets'
import { ListSignersResponse } from '@dfns/sdk/types/signers'

type Signer = ListSignersResponse['clusters'][number]['signers'][number]
type KeyCurve = GetWalletResponse['signingKey']['curve']

const getCurveAndProtocol = (keyCurve: KeyCurve): { curve: KeyCurveInternal; protocol: KeyProtocol } => {
  switch (keyCurve) {
    case 'secp256k1':
      return { curve: KeyCurveInternal.Secp256k1, protocol: KeyProtocol.Cggmp21 }
    case 'stark':
      return { curve: KeyCurveInternal.Stark, protocol: KeyProtocol.Cggmp21 }
    case 'ed25519':
      return { curve: KeyCurveInternal.Ed25519, protocol: KeyProtocol.Frost }
    default:
      throw Error(`Unsupported key curve for import: "${keyCurve}"`)
  }
}

export const splitPrivateKeyForSigners = ({
  signers,
  privateKey,
  keyCurve,
}: {
  signers: Signer[]
  privateKey: Uint8Array | Buffer
  keyCurve: KeyCurve
}): Pick<ImportWalletBody, 'protocol' | 'curve' | 'minSigners' | 'encryptedKeyShares'> => {
  const { curve, protocol } = getCurveAndProtocol(keyCurve)

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
