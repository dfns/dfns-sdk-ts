import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import type { DfnsApiClient } from '@dfns/sdk'
import type { GetWalletResponse } from '@dfns/sdk/generated/wallets'
import { KeyType } from '@near-js/crypto'

import { DfnsWallet } from './index'

const publicKeyHex = 'd75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a'

describe('DfnsWallet.getPublicKey', () => {
  for (const [network, address] of [
    ['Near', publicKeyHex],
    ['Near', 'alice.near'],
    ['NearTestnet', 'alice.testnet'],
  ]) {
    it(`returns the signing key for ${address}`, async () => {
      const metadata: GetWalletResponse = {
        id: 'wa-test',
        network,
        address,
        signingKey: { id: 'key-test', scheme: 'EdDSA', curve: 'ed25519', publicKey: publicKeyHex },
        status: 'Active',
        dateCreated: '2026-01-01T00:00:00.000Z',
        custodial: true,
        tags: [],
      }
      const originalMetadata = structuredClone(metadata)
      Object.freeze(metadata.signingKey)
      Object.freeze(metadata)
      let getWalletCalls = 0
      const dfnsClient = {
        wallets: {
          getWallet: async (request: { walletId: string }) => {
            assert.deepEqual(request, { walletId: metadata.id })
            getWalletCalls++
            return metadata
          },
        },
      } as unknown as DfnsApiClient

      const wallet = await DfnsWallet.init({ walletId: metadata.id, dfnsClient })
      const publicKey = await wallet.getPublicKey()

      assert.equal(publicKey.keyType, KeyType.ED25519)
      assert.deepEqual(publicKey.data, Buffer.from(publicKeyHex, 'hex'))
      assert.equal(wallet.address, address)
      assert.equal(wallet.publicKeyHex, publicKeyHex)
      assert.equal(getWalletCalls, 1)
      assert.deepEqual(metadata, originalMetadata)
    })
  }
})
