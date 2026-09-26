/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const assert = require('node:assert/strict')
const { afterEach, describe, it } = require('node:test')
const { createServer } = require('node:http')
const { createHash } = require('node:crypto')

const fetchModule = require('../../../dist/@dfns/sdk/utils/fetch.js')
const { buildApiUrl, getCanonicalPath } = require('../../../dist/@dfns/sdk/utils/url.js')

const originalSimpleFetch = fetchModule.simpleFetch

afterEach(() => {
  fetchModule.simpleFetch = originalSimpleFetch
})

describe('API URL routing', () => {
  it('preserves legacy root URL behavior', () => {
    assert.equal(
      buildApiUrl('/wallets?limit=10', 'https://api.dfns.io').toString(),
      'https://api.dfns.io/wallets?limit=10'
    )
  })

  it('preserves a deployment path prefix', () => {
    assert.equal(
      buildApiUrl('/wallets?limit=10', 'https://dfns.example.com/api').toString(),
      'https://dfns.example.com/api/wallets?limit=10'
    )
  })

  it('normalizes a trailing slash on the base URL', () => {
    assert.equal(
      buildApiUrl('/staff/orgs', 'https://dfns.example.com/api-staff/').toString(),
      'https://dfns.example.com/api-staff/staff/orgs'
    )
  })

  it('keeps the deployment prefix out of the canonical signing path', () => {
    assert.equal(getCanonicalPath('/wallets?limit=10'), '/wallets')
    assert.equal(getCanonicalPath('/staff/orgs?status=Active'), '/staff/orgs')
  })

  it('threads the canonical path separately from the transport URL', async () => {
    let captured
    const fetch = fetchModule.fullUrl(async (resource, options) => {
      captured = { resource, options }
      return {}
    })

    await fetch('/wallets?limit=10', {
      method: 'GET',
      apiOptions: { baseUrl: 'https://dfns.example.com/api' },
    })

    assert.equal(captured.resource.toString(), 'https://dfns.example.com/api/wallets?limit=10')
    assert.equal(captured.options.userActionHttpPath, '/wallets')
  })

  it('canonicalizes delegated user-action challenge paths', async () => {
    let captured
    fetchModule.simpleFetch = async (resource, options) => {
      captured = { resource, options }
      return { json: async () => ({}) }
    }
    const { BaseAuthApi } = require('../../../dist/@dfns/sdk/baseAuthApi.js')

    await BaseAuthApi.createUserActionChallenge(
      {
        userActionPayload: '{}',
        userActionHttpMethod: 'POST',
        userActionHttpPath: '/wallets?archive=false',
        userActionServerKind: 'Staff',
      },
      { baseUrl: 'https://dfns.example.com/api' }
    )

    assert.equal(captured.resource, '/auth/action/init')
    assert.equal(captured.options.body.userActionHttpPath, '/wallets')
    assert.equal(captured.options.body.userActionServerKind, 'Staff')
  })

  it('rejects ambiguous base URLs', () => {
    assert.throws(() => buildApiUrl('/wallets', 'https://dfns.example.com/api?tenant=one'))
    assert.throws(() => buildApiUrl('/wallets', 'https://dfns.example.com/api#fragment'))
  })
})

// Run the compiled public entry points against HTTP so both URL composition and
// the user-action middleware are exercised together, without a live deployment.
const startServer = async (t) => {
  const requests = []
  const server = createServer(async (request, response) => {
    const chunks = []
    for await (const chunk of request) chunks.push(chunk)
    const body = Buffer.concat(chunks).toString()
    requests.push({
      url: request.url,
      body: body ? JSON.parse(body) : undefined,
      userAction: request.headers['x-dfns-useraction'],
    })
    response.setHeader('content-type', 'application/json')
    if (request.url.endsWith('/auth/action/init')) {
      response.end(JSON.stringify({ challengeIdentifier: 'challenge', challenge: 'test' }))
    } else if (request.url.endsWith('/auth/action')) {
      response.end(JSON.stringify({ userAction: 'signed-action' }))
    } else {
      response.end(JSON.stringify({ id: 'wa-test', items: [] }))
    }
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  t.after(() => new Promise((resolve) => server.close(resolve)))
  return { origin: `http://127.0.0.1:${server.address().port}`, requests }
}

for (const prefix of ['', '/', '/api', '/api/', '/gateway/api']) {
  it(`routes login, reads and server-challenge writes through ${prefix || '(root)'}`, async (t) => {
    const { BaseAuthApi, DfnsApiClient } = require('../../../dist/@dfns/sdk/index.js')
    const { origin, requests } = await startServer(t)
    const baseUrl = `${origin}${prefix}`
    const transportPrefix = prefix.replace(/\/+$/, '')
    const client = new DfnsApiClient({
      baseUrl,
      baseAuthUrl: `${origin}/auth-gateway`,
      signer: { sign: async () => ({}) },
    })
    await BaseAuthApi.createUserLoginChallenge({ orgId: 'or-test', username: 'test' }, { baseUrl })
    await client.wallets.listWallets({ query: { limit: 10 } })
    const body = { network: 'EthereumSepolia', name: 'path-prefix-test' }
    await client.wallets.createWallet({ body })

    assert.deepEqual(
      requests.map(({ url }) => url),
      [
        `${transportPrefix}/auth/login/init`,
        `${transportPrefix}/wallets?limit=10`,
        '/auth-gateway/auth/action/init',
        '/auth-gateway/auth/action',
        `${transportPrefix}/wallets`,
      ]
    )
    assert.equal(requests[2].body.userActionHttpPath, '/wallets')
    assert.equal(requests[2].body.userActionHttpMethod, 'POST')
    assert.equal(requests[2].body.userActionPayload, JSON.stringify(body))
    assert.equal(requests[4].userAction, 'signed-action')
    assert.deepEqual(requests[4].body, body)
  })

  it(`signs canonical paths with queries for client challenges through ${prefix || '(root)'}`, async (t) => {
    const { userActionFetch } = require('../../../dist/@dfns/sdk/utils/userActionFetch.js')
    const { origin, requests } = await startServer(t)
    const route = '/wallets/wa%2Ftest?archive=false&delegateTo=us%2Ftest'
    const body = { name: 'path-prefix-test' }
    let signedChallenge
    await userActionFetch(route, {
      method: 'POST',
      body,
      apiOptions: {
        baseUrl: `${origin}${prefix}`,
        orgId: 'or-test',
        signer: {
          useClientChallenge: true,
          sign: async ({ challenge }) => {
            signedChallenge = JSON.parse(Buffer.from(challenge, 'base64url').toString())
            return { signature: 'test-signature' }
          },
        },
      },
    })

    assert.equal(requests.length, 1)
    assert.equal(requests[0].url, `${prefix.replace(/\/+$/, '')}${route}`)
    assert.equal(signedChallenge.path, route)
    assert.equal(signedChallenge.host, new URL(origin).host)
    assert.equal(signedChallenge.method, 'POST')
    assert.equal(signedChallenge.orgId, 'or-test')
    assert.equal(signedChallenge.payloadHash, createHash('sha256').update(JSON.stringify(body)).digest('base64url'))
    assert.deepEqual(JSON.parse(Buffer.from(requests[0].userAction, 'base64url').toString()), {
      signature: 'test-signature',
    })
    assert.deepEqual(requests[0].body, body)
  })
}

it('preserves escaped paths, query strings and absolute URLs', () => {
  assert.equal(
    buildApiUrl('/wallets/wa%2Ftest?paginationToken=a%2Bb', 'https://example.test/api/').toString(),
    'https://example.test/api/wallets/wa%2Ftest?paginationToken=a%2Bb'
  )
  for (const resource of ['https://other.test/wallets?limit=1', new URL('https://other.test/wallets?limit=1')]) {
    assert.equal(buildApiUrl(resource, 'https://example.test/api').toString(), 'https://other.test/wallets?limit=1')
  }
})
