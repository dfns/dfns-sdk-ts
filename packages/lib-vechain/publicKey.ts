import { secp256k1 } from '@noble/curves/secp256k1'

// Uncompressed SEC1 bytes, including the 04 prefix. VeChain's address
// helper wants that form. noble replaces elliptic, which has no patched release.
export function uncompressedSecp256k1(publicKeyHex: string): Uint8Array {
  return secp256k1.Point.fromHex(publicKeyHex).toBytes(false)
}
