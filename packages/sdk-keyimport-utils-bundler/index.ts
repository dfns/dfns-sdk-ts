import {
  buildKeyImportRequest,
  convertEddsaSecretKeyToScalar,
  KeyCurve as KeyCurveInternal,
  KeyProtocol,
  SecretScalar,
  SignersInfo,
} from '@dfns/dfns-key-import-bundler'
import { ImportKeyBody, GetKeyResponse } from '@dfns/sdk/types/keys'
import { ListSignersResponse } from '@dfns/sdk/types/signers'

type Signer = ListSignersResponse['clusters'][number]['signers'][number]
type KeyScheme = Exclude<GetKeyResponse['scheme'], 'DH'>
type KeyCurve = GetKeyResponse['curve']

const getCurveAndProtocol = (
  scheme: KeyScheme,
  curve: KeyCurve
): { protocol: KeyProtocol; internalCurve: KeyCurveInternal } => {
  if (scheme === 'ECDSA' && curve === 'secp256k1') {
    return {
      internalCurve: KeyCurveInternal.Secp256k1,
      protocol: KeyProtocol.Cggmp24,
    }
  } else if (scheme === 'ECDSA' && curve === 'stark') {
    return {
      internalCurve: KeyCurveInternal.Stark,
      protocol: KeyProtocol.Cggmp24,
    }
  } else if (scheme === 'EdDSA' && curve === 'ed25519') {
    return {
      internalCurve: KeyCurveInternal.Ed25519,
      protocol: KeyProtocol.Frost,
    }
  } else if (scheme === 'Schnorr' && curve === 'secp256k1') {
    return {
      internalCurve: KeyCurveInternal.Secp256k1,
      protocol: KeyProtocol.FrostBitcoin,
    }
  } else {
    throw Error(`Unsupported key scheme for import: "${scheme}, ${curve}"`)
  }
}

const getSecretScalar = (
  keyOrScalar: Uint8Array | Buffer,
  keyCurve: KeyCurve,
  secretScalar?: boolean
): SecretScalar => {
  if (keyCurve === 'ed25519' && !secretScalar) {
    return convertEddsaSecretKeyToScalar(keyOrScalar)
  } else {
    return SecretScalar.fromBytesBE(keyOrScalar)
  }
}

export const splitPrivateKeyForSigners = ({
  signers,
  keyScheme,
  keyCurve,
  privateKey,
  chainCode,
  masterKey,
  secretScalar,
}: {
  signers: Signer[]
  keyCurve: KeyCurve
  keyScheme: KeyScheme
  privateKey: Uint8Array | Buffer
  chainCode?: Uint8Array | Buffer
  masterKey?: boolean
  secretScalar?: boolean
}): Pick<ImportKeyBody, 'curve' | 'protocol' | 'minSigners' | 'encryptedKeyShares' | 'masterKey'> => {
  if (masterKey && !chainCode) {
    throw Error('master key must have a chain code')
  }

  if (chainCode && !masterKey) {
    throw Error('cannot import chain code if not master key')
  }

  const { internalCurve, protocol } = getCurveAndProtocol(keyScheme, keyCurve)

  // We set this as constant do not expose it, because Dfns API will only accept minSigners = 3 for now.
  const minSigners = 3

  const result = buildKeyImportRequest(
    getSecretScalar(privateKey, keyCurve, secretScalar),
    chainCode,
    SignersInfo.new(signers),
    minSigners,
    protocol,
    internalCurve
  )

  return {
    curve: keyCurve,
    protocol: result.protocol,
    minSigners: result.minSigners,
    encryptedKeyShares: result.encryptedKeyShares,
    masterKey,
  }
}
