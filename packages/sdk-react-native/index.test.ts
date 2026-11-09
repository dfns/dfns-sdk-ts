import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath, pathToFileURL } from 'node:url'

import * as esbuild from 'esbuild'

type PasskeyGetRequest = {
  allowCredentials?: { id: string; type: string }[]
}

type AndroidSigner = {
  sign(challenge: {
    challenge: string
    challengeIdentifier: string
    externalAuthenticationUrl: string
    supportedCredentialKinds: []
    userVerification: 'required'
    allowCredentials: {
      webauthn: { id: string; type: 'public-key' }[]
      key: { id: string; type: 'public-key' }[]
    }
  }): Promise<unknown>
}

const stubs: Record<string, string> = {
  'react-native': `export const Platform = { OS: 'android' }\n`,
  'react-native-passkey': `
export const Passkey = {
  async get(request) {
    globalThis.__dfnsPasskeyGets.push(request)
    return {
      id: 'cred-signed',
      response: {
        clientDataJSON: 'client-data',
        authenticatorData: 'auth-data',
        signature: 'sig',
        userHandle: 'handle',
      },
    }
  },
}
`,
  '@dfns/sdk': `
export class DfnsError extends Error {
  constructor(httpStatus, message) {
    super(message)
    this.name = 'DfnsError'
    this.httpStatus = httpStatus
  }
}
`,
  '@dfns/sdk/utils': `
export const toBase64Url = (value) => Buffer.from(String(value)).toString('base64url')
`,
}

const stubNativeModules: esbuild.Plugin = {
  name: 'stub-native-modules',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      if (args.path in stubs) return { path: args.path, namespace: 'stub' }
      return null
    })
    build.onLoad({ filter: /.*/, namespace: 'stub' }, (args) => ({
      contents: stubs[args.path],
      loader: 'js',
    }))
  },
}

const loadAndroidSigner = async (): Promise<AndroidSigner> => {
  const outdir = mkdtempSync(join(tmpdir(), 'sdk-react-native-'))
  const outfile = join(outdir, 'signer.mjs')
  await esbuild.build({
    entryPoints: [fileURLToPath(new URL('./index.ts', import.meta.url))],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile,
    plugins: [stubNativeModules],
  })
  const loaded = (await import(pathToFileURL(outfile).href)) as {
    PasskeysSigner: new (conf: { relyingParty: { id: string; name: string } }) => AndroidSigner
  }
  return new loaded.PasskeysSigner({ relyingParty: { id: 'acme.com', name: 'Acme' } })
}

describe('AndroidPasskeys.sign', () => {
  it('forwards webauthn and key credentials to Passkey.get', async () => {
    const gets: PasskeyGetRequest[] = []
    ;(globalThis as { __dfnsPasskeyGets?: PasskeyGetRequest[] }).__dfnsPasskeyGets = gets

    const signer = await loadAndroidSigner()
    await signer.sign({
      challenge: 'challenge-1',
      challengeIdentifier: 'ch-1',
      externalAuthenticationUrl: '',
      supportedCredentialKinds: [],
      userVerification: 'required',
      allowCredentials: {
        webauthn: [{ id: 'wa-1', type: 'public-key' }],
        key: [{ id: 'key-1', type: 'public-key' }],
      },
    })

    assert.equal(gets.length, 1)
    assert.deepEqual(gets[0].allowCredentials, [
      { id: 'wa-1', type: 'public-key' },
      { id: 'key-1', type: 'public-key' },
    ])
  })
})
