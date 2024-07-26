import { useCallback, useEffect, useState } from 'react'
import { Buffer } from 'buffer'
import { ListWalletsResponse } from '@dfns/sdk/types/wallets'
import { newWalletExportContext } from '@dfns/sdk-keyexport-utils-bundler'

import { dfnsApi } from '../api'
import { Layout } from '../components/layout'

export default function ExportWallet(): JSX.Element {
  const [wallets, setWallets] = useState<ListWalletsResponse['items'] | undefined>(undefined)

  useEffect(() => {
    dfnsApi()
      .wallets.listWallets({ query: { limit: '100' } })
      .then((wallets) => {
        const custodialWallets = wallets.items.filter((wallet) => wallet.custodial).slice(0, 10)
        setWallets(custodialWallets)
      })
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
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Network</th>
            <th>Date Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wallets &&
            wallets.map((wallet) => (
              <tr key={wallet.id}>
                <td>{wallet.id}</td>
                <td>{wallet.network}</td>
                <td>{new Date(wallet.dateCreated).toLocaleString()}</td>
                <td>
                  <button className="btn" onClick={() => handleExportWallet(wallet.id)}>
                    Export
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  )
}
