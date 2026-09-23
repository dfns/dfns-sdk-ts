import assert from 'node:assert/strict'
import { createHash, generateKeyPairSync, verify } from 'node:crypto'
import { createServer } from 'node:http'
import { AddressInfo } from 'node:net'
import { after, before, beforeEach, describe, it } from 'node:test'

import { AsymmetricKeySigner } from '../packages/sdk-keysigner'
import { DfnsApiClient } from '../packages/sdk/dfnsApiClient'
import { DfnsError, PolicyPendingError } from '../packages/sdk/dfnsError'
import { userActionFetch } from '../packages/sdk/utils/userActionFetch'

const tokenFor = (scope: unknown) =>
  `header.${Buffer.from(JSON.stringify({ 'https://custom/app_metadata': scope })).toString('base64url')}.signature`
const authToken = tokenFor({ orgId: 'or-test' })
const { publicKey, privateKey } = generateKeyPairSync('ed25519')
const signer = new AsymmetricKeySigner({
  credId: 'cr-test',
  privateKey: privateKey.export({ format: 'pem', type: 'pkcs8' }) as string,
})
type Captured = { url: string; method: string; body: string; headers: Record<string, any> }
let requests: Captured[] = []
let baseUrl: string
let responseStatus = 200
const server = createServer(async (req, res) => {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  requests.push({
    url: req.url!,
    method: req.method!,
    body: Buffer.concat(chunks).toString('utf8'),
    headers: req.headers,
  })
  res.setHeader('content-type', 'application/json')
  if (req.url === '/auth/action/init') {
    res.end(
      JSON.stringify({
        challenge: 'legacy-challenge',
        challengeIdentifier: 'ch-test',
        allowCredentials: { key: [{ id: 'cr-test' }] },
      })
    )
  } else if (req.url === '/auth/action') {
    res.end(JSON.stringify({ userAction: 'legacy.useraction.token' }))
  } else {
    res.statusCode = responseStatus
    res.end(
      JSON.stringify(
        responseStatus >= 400
          ? { message: 'Fast Auth disabled', details: { kind: 'FastAuthDisabled' } }
          : { id: 'wa-test' }
      )
    )
  }
})

const options = () => ({ baseUrl, authToken, signer, fastAuth: true })
const decode = (value: string) => JSON.parse(Buffer.from(value, 'base64url').toString('utf8'))
const verifyRequest = (request: Captured) => {
  const assertion = decode(request.headers['x-dfns-useraction'])
  assert.equal(assertion.kind, 'Key')
  assert.equal(assertion.credentialAssertion.credId, 'cr-test')
  const clientData = Buffer.from(assertion.credentialAssertion.clientData, 'base64url')
  assert.equal(JSON.parse(clientData.toString()).type, 'key.get')
  assert.ok(verify(null, clientData, publicKey, Buffer.from(assertion.credentialAssertion.signature, 'base64url')))
  const challenge = decode(JSON.parse(clientData.toString()).challenge)
  assert.equal(challenge.host, '127.0.0.1')
  assert.equal(challenge.method, request.method)
  assert.equal(challenge.path, request.url)
  assert.equal(challenge.payloadHash, createHash('sha256').update(request.body).digest('base64url'))
  assert.match(challenge.timestamp, /^[1-9]\d{12}$/)
  assert.ok(Math.abs(Date.now() - Number(challenge.timestamp)) < 5000)
  assert.match(challenge.nonce, /^[A-Za-z0-9_-]{21}[AQgw]$/)
  assert.equal(Buffer.from(challenge.nonce, 'base64url').length, 16)
  assert.deepEqual(
    Object.keys(challenge).sort(),
    ['timestamp', 'nonce', 'host', 'method', 'path', 'payloadHash', challenge.orgId ? 'orgId' : 'tenantId'].sort()
  )
  return challenge
}

describe('Fast Auth fetch', () => {
  before(async () => {
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject)
      server.listen(0, '127.0.0.1', resolve)
    })
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
  })
  after(async () => {
    await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())))
  })
  beforeEach(() => {
    requests = []
    responseStatus = 200
  })

  it('sends a generated write in one request with the exact serialized body and bearer token', async () => {
    const client = new DfnsApiClient(options())
    await client.wallets.createWallet({ body: { network: 'EthereumSepolia', name: 'é 🚀' } })
    assert.equal(requests.length, 1)
    assert.deepEqual(JSON.parse(requests[0].body), { network: 'EthereumSepolia', name: 'é 🚀' })
    assert.equal(requests[0].headers.authorization, `Bearer ${authToken}`)
    assert.equal(verifyRequest(requests[0]).orgId, 'or-test')
  })

  it('preserves query encoding and order and creates a fresh nonce for every call', async () => {
    for (let i = 0; i < 2; i++)
      await userActionFetch('/wallets?b=%2f&a=x+y&a=x%20y', { method: 'POST', body: {}, apiOptions: options() })
    const challenges = requests.map(verifyRequest)
    assert.equal(challenges[0].path, '/wallets?b=%2f&a=x+y&a=x%20y')
    assert.notEqual(challenges[0].nonce, challenges[1].nonce)
  })

  it('serializes the body once before signing it', async () => {
    let calls = 0
    await userActionFetch('/wallets', {
      method: 'POST',
      body: { toJSON: () => ({ value: ++calls }) },
      apiOptions: options(),
    })
    assert.equal(calls, 1)
    verifyRequest(requests[0])
  })

  it('hashes an absent body as empty bytes and supports tenant-scoped tokens', async () => {
    await userActionFetch('/wallets/wa-test', {
      method: 'DELETE',
      apiOptions: { ...options(), authToken: tokenFor({ tenantId: 'te-test' }) },
    })
    assert.equal(requests[0].body, '')
    assert.equal(verifyRequest(requests[0]).tenantId, 'te-test')
  })

  it('keeps the three-request flow by default and when explicitly disabled for a fetch', async () => {
    for (const enabled of [undefined, false]) {
      requests = []
      await userActionFetch('/wallets', {
        method: 'POST',
        body: {},
        apiOptions: { ...options(), fastAuth: enabled === undefined ? undefined : true },
        fastAuth: enabled,
      })
      assert.deepEqual(
        requests.map((r) => r.url),
        ['/auth/action/init', '/auth/action', '/wallets']
      )
      assert.equal(requests[2].headers['x-dfns-useraction'], 'legacy.useraction.token')
    }
  })

  it('can enable Fast Auth for an individual fetch', async () => {
    await userActionFetch('/wallets', {
      method: 'POST',
      body: {},
      apiOptions: { ...options(), fastAuth: false },
      fastAuth: true,
    })
    assert.equal(requests.length, 1)
    verifyRequest(requests[0])
  })

  it('does not sign read-only requests or generated unsigned routes', async () => {
    await userActionFetch('/wallets', { method: 'GET', apiOptions: options() })
    await new DfnsApiClient(options()).wallets.listWallets({})
    assert.equal(requests.length, 2)
    for (const request of requests) assert.equal(request.headers['x-dfns-useraction'], undefined)
  })

  it('uses the established flow for multipart uploads', async () => {
    await userActionFetch('/files', {
      method: 'POST',
      body: { name: 'test' },
      file: { bytes: new Uint8Array([1, 2]), name: 'test.bin' },
      apiOptions: options(),
    })
    assert.deepEqual(
      requests.map((r) => r.url),
      ['/auth/action/init', '/auth/action', '/files']
    )
  })

  it('returns server errors without retrying via the legacy flow', async () => {
    responseStatus = 403
    await assert.rejects(
      userActionFetch('/wallets', { method: 'POST', body: {}, apiOptions: options() }),
      (error: any) => error instanceof DfnsError && error.httpStatus === 403
    )
    assert.equal(requests.length, 1)
  })

  it('preserves policy-pending responses', async () => {
    responseStatus = 202
    await assert.rejects(
      userActionFetch('/wallets', { method: 'POST', body: {}, apiOptions: options() }),
      PolicyPendingError
    )
    assert.equal(requests.length, 1)
  })

  it('rejects signers without Fast Auth support before making a request', async () => {
    await assert.rejects(
      userActionFetch('/wallets', {
        method: 'POST',
        body: {},
        apiOptions: { ...options(), signer: { sign: signer.sign.bind(signer) } },
      }),
      /signFastAuth/
    )
    assert.equal(requests.length, 0)
  })

  it('rejects missing or ambiguous token scope and missing bearer tokens locally', async () => {
    for (const authToken of [
      undefined,
      'not-a-jwt',
      tokenFor({}),
      tokenFor({ orgId: 'or-test', tenantId: 'te-test' }),
    ]) {
      await assert.rejects(
        userActionFetch('/wallets', { method: 'POST', body: {}, apiOptions: { ...options(), authToken } })
      )
    }
    assert.equal(requests.length, 0)
  })

  it('rejects conflicting user-action headers regardless of casing', async () => {
    for (const name of ['X-Dfns-UserAction', 'x-useraction']) {
      await assert.rejects(
        userActionFetch('/wallets', {
          method: 'POST',
          body: {},
          headers: { [name]: 'existing' },
          apiOptions: options(),
        }),
        /another user-action header/
      )
    }
    assert.equal(requests.length, 0)
  })

  it('uses the bearer token actually sent and rejects ambiguous authorization headers', async () => {
    await userActionFetch('/wallets', {
      method: 'POST',
      body: {},
      headers: { authorization: `Bearer ${tokenFor({ orgId: 'or-other' })}` },
      apiOptions: options(),
    })
    assert.equal(verifyRequest(requests[0]).orgId, 'or-other')
    await assert.rejects(
      userActionFetch('/wallets', {
        method: 'POST',
        body: {},
        headers: { Authorization: `Bearer ${authToken}` },
        apiOptions: options(),
      }),
      /one bearer/
    )
    assert.equal(requests.length, 1)
  })
})
