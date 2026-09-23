import assert from 'node:assert/strict'
import { generateKeyPairSync, sign, verify } from 'node:crypto'
import { afterEach, describe, it, mock } from 'node:test'

import { KMSClient, SigningAlgorithmSpec } from '@aws-sdk/client-kms'

import { AwsKmsKeySigner } from './index'

const signerFor = (algorithm: SigningAlgorithmSpec) =>
  new AwsKmsKeySigner({
    credId: 'cr-kms',
    kmsClientConfig: { region: 'us-east-1' },
    kmsKeyConfig: { id: 'test-key', algorithm },
  })

describe('AWS KMS Fast Auth', () => {
  afterEach(() => mock.restoreAll())

  for (const algorithm of ['ECDSA_SHA_256', 'RSASSA_PKCS1_V1_5_SHA_256'] as const) {
    it(`produces a verifier-compatible ${algorithm} assertion`, async () => {
      const pair =
        algorithm === 'ECDSA_SHA_256'
          ? generateKeyPairSync('ec', { namedCurve: 'P-256' })
          : generateKeyPairSync('rsa', { modulusLength: 2048 })
      const send = mock.method(KMSClient.prototype, 'send', async (command: any) => {
        assert.equal(command.input.KeyId, 'test-key')
        assert.equal(command.input.MessageType, 'RAW')
        assert.equal(command.input.SigningAlgorithm, algorithm)
        return { Signature: sign('SHA256', command.input.Message, pair.privateKey) }
      })
      const assertion = await signerFor(algorithm).signFastAuth('encoded-challenge')
      const data = Buffer.from(assertion.credentialAssertion.clientData, 'base64url')
      assert.deepEqual(JSON.parse(data.toString()), { type: 'key.get', challenge: 'encoded-challenge' })
      assert.equal(assertion.credentialAssertion.algorithm, 'SHA256')
      assert.ok(
        verify(
          assertion.credentialAssertion.algorithm!,
          data,
          pair.publicKey,
          Buffer.from(assertion.credentialAssertion.signature, 'base64url')
        )
      )
      assert.equal(send.mock.callCount(), 1)
    })
  }

  it('rejects RSA-PSS before requesting a KMS signature', async () => {
    const send = mock.method(KMSClient.prototype, 'send', async () => {
      throw new Error('unexpected KMS call')
    })
    await assert.rejects(signerFor('RSASSA_PSS_SHA_256').signFastAuth('challenge'), /not supported/)
    assert.equal(send.mock.callCount(), 0)
  })

  it('preserves the allowed-credential check for server challenges', async () => {
    await assert.rejects(
      signerFor('ECDSA_SHA_256').sign({ challenge: 'test', allowCredentials: { key: [], webauthn: [] } } as any),
      /does not match allowed credentials/
    )
  })
})
