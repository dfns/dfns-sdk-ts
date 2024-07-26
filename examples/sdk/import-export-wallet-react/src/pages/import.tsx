import { useCallback, useState } from 'react'
import { Buffer } from 'buffer'
import { ImportWalletResponse } from '@dfns/sdk/types/wallets'
import { splitPrivateKeyForSigners } from '@dfns/sdk-keyimport-utils-bundler'
import { newWalletExportContext } from '@dfns/sdk-keyexport-utils-bundler'

import { dfnsApi } from '../api'
import { Layout } from '../components/layout'

export default function ImportWallet(): JSX.Element {
  const [wallet, setWallet] = useState<ImportWalletResponse | undefined>(undefined)

  const handleImportWallet = useCallback(async () => {
    const { clusters } = await dfnsApi().signers.listSigners()

    const defaultPrivateKey = '5837e7682a4dbef2086daa4bad52da57390e73c8054039183b3a17df5529c59a'

    let privateKeyStr = window.prompt('Enter a secp256k1 private key (in hex format)', defaultPrivateKey)

    if (!privateKeyStr) return

    privateKeyStr = privateKeyStr.replace(/^0x/, '')

    if (privateKeyStr.length !== 64) {
      throw Error('The secp256k1 private key is not 32 bytes long (64 hexadecimal characters)')
    }

    const privateKey = Buffer.from(privateKeyStr, 'hex')

    const splittedKeyInfo = splitPrivateKeyForSigners({
      privateKey: privateKey,
      signers: clusters[0].signers, // There should only be 1 signing cluster in the returned clusters.
      keyCurve: 'secp256k1',
    })

    const wallet = await dfnsApi().wallets.importWallet({
      body: {
        name: `My imported wallet - ${new Date().toISOString()}`,
        network: 'EthereumSepolia',
        ...splittedKeyInfo,
      },
    })

    setWallet(wallet)
  }, [])

  const handleExportWallet = useCallback((walletId: string) => {
    const ctx = newWalletExportContext()

    dfnsApi()
      .wallets.exportWallet({
        walletId,
        body: ctx.getConf(),
      })
      .then((response) => {
        const exportedWalletPrivateKey = ctx.recoverSecretKey(response)

        const secretKeyHex = Buffer.from(exportedWalletPrivateKey).toString('hex')

        window.prompt(`🥳 Exported private key of wallet ${walletId} (hex-encoded)`, secretKeyHex)
      })
  }, [])

  return (
    <Layout>
      <p>Import a private key (secp256k1 curve) into a EthereumSepolia wallet:</p>

      {!wallet && (
        <button className="btn" onClick={handleImportWallet}>
          Start Import
        </button>
      )}

      {wallet && (
        <>
          <pre>
            <code>{JSON.stringify(wallet, null, 2)}</code>
          </pre>
          <div className="flex justify-end">
            <button className="btn" onClick={() => handleExportWallet(wallet.id)}>
              Export Wallet
            </button>
          </div>
        </>
      )}
    </Layout>
  )
}
