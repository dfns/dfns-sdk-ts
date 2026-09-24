import assert from 'node:assert/strict'
import * as crypto from 'node:crypto'
import { describe, it } from 'node:test'

import { AsymmetricKeySigner } from './index'

const challengeFor = (credId: string) =>
  ({
    challenge: 'dGVzdC1jaGFsbGVuZ2U',
    challengeIdentifier: 'ch-1',
    allowCredentials: { key: [{ id: credId, type: 'public-key' }], webauthn: [] },
    externalAuthenticationUrl: '',
    supportedCredentialKinds: [],
  }) as any

describe('AsymmetricKeySigner', () => {
  it('produces a verifiable Ed25519 key assertion binding the challenge', async () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519')
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }) as string
    const signer = new AsymmetricKeySigner({ credId: 'cr-1', privateKey: pem })

    const assertion = await signer.sign(challengeFor('cr-1'))

    assert.equal(assertion.kind, 'Key')
    assert.equal(assertion.credentialAssertion.credId, 'cr-1')

    const clientData = Buffer.from(assertion.credentialAssertion.clientData, 'base64url')
    const parsed = JSON.parse(clientData.toString())
    assert.equal(parsed.type, 'key.get')
    assert.equal(parsed.challenge, 'dGVzdC1jaGFsbGVuZ2U')

    const sig = Buffer.from(assertion.credentialAssertion.signature, 'base64url')
    assert.ok(crypto.verify(null, clientData, publicKey, sig), 'ed25519 signature must verify')
  })

  it('signs with an explicit algorithm (ECDSA P-256)', async () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' })
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }) as string
    const signer = new AsymmetricKeySigner({ credId: 'cr-1', privateKey: pem, algorithm: 'sha256' })

    const assertion = await signer.sign(challengeFor('cr-1'))

    const clientData = Buffer.from(assertion.credentialAssertion.clientData, 'base64url')
    const sig = Buffer.from(assertion.credentialAssertion.signature, 'base64url')
    assert.ok(crypto.verify('sha256', clientData, publicKey, sig), 'ecdsa signature must verify')
  })

  it('rejects a credId absent from the challenge allowCredentials', async () => {
    const { privateKey } = crypto.generateKeyPairSync('ed25519')
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }) as string
    const signer = new AsymmetricKeySigner({ credId: 'cr-unknown', privateKey: pem })

    await assert.rejects(signer.sign(challengeFor('cr-allowed')), /does not match allowed credentials/)
  })
})
