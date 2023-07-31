import { PaginatedWalletList } from '@dfns/sdk/codegen/datamodel/Wallets'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { api } from '../api'
import useAuth from '../hooks/useAuth'

export default function Home(): JSX.Element {
  const { user, logout } = useAuth()
  const [wallets, setWallets] = useState<PaginatedWalletList | undefined>(undefined)

  useEffect(() => {
    api.listWallets().then((wallets) => setWallets(wallets))
  }, [])

  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="text-2x">Hello {user}</p>

        <button className="btn" type="button" onClick={logout}>
          Logout
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Network</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {wallets &&
            wallets.items.map((wallet) => (
              <tr key={wallet.id}>
                <td>{wallet.id}</td>
                <td>{wallet.network}</td>
                <td>{wallet.dateCreated}</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <Link className="btn" to="/wallets/new">
                New Wallet
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
