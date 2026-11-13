import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { secp256k1 } = require('@noble/curves/secp256k1')

// Same call as publicKey.ts. Generator point from SEC 2.
const compressed = '0279BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798'
const uncompressed =
  '0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798' +
  '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8'

test('secp256k1 Point.fromHex expands the compressed generator', () => {
  const bytes = secp256k1.Point.fromHex(compressed).toBytes(false)
  assert.equal(Buffer.from(bytes).toString('hex'), uncompressed)
  assert.equal(bytes.length, 65)
  assert.equal(bytes[0], 0x04)
})
