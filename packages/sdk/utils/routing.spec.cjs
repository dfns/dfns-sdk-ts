/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const assert = require('node:assert/strict')
const { afterEach, describe, it } = require('node:test')

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
