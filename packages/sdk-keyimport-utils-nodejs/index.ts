import {
  buildKeyImportRequest,
  convertEddsaSecretKeyToScalar,
  KeyCurve as KeyCurveInternal,
  KeyProtocol,
  SecretScalar,
  SignersInfo,
} from '@dfns/dfns-key-import-nodejs'
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

const getSecretScalar = (privateKey: Uint8Array | Buffer, keyCurve: KeyCurve): SecretScalar => {
  if (keyCurve === 'ed25519') {
    return convertEddsaSecretKeyToScalar(privateKey)
  } else {
    return SecretScalar.fromBytesBE(privateKey)
  }
}

export const splitPrivateKeyForSigners = ({
  signers,
  keyScheme,
  keyCurve,
  privateKey,
  chainCode,
  masterKey,
}: {
  signers: Signer[]
  keyCurve: KeyCurve
  keyScheme: KeyScheme
  privateKey: Uint8Array | Buffer
  chainCode?: Uint8Array | Buffer
  masterKey?: boolean
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

  const secretScalar = getSecretScalar(privateKey, keyCurve)

  const result = buildKeyImportRequest(
    secretScalar,
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
