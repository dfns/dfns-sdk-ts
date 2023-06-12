import React, { FormEvent, useEffect, useState } from 'react'
import { PaginatedWalletList } from '@dfns/sdk/codegen/datamodel/Wallets'

import useAuth from '../hooks/useAuth'
import { dfnsApi } from '../api'
import { Link } from 'react-router-dom'

export default function Home(): JSX.Element {
  const { user, logout } = useAuth()
  const [wallets, setWallets] = useState<PaginatedWalletList | undefined>(undefined)

  useEffect(() => {
    dfnsApi()
      .wallets.listWallets({})
      .then((wallets) => setWallets(wallets))
  }, [])

  return (
    <div>
      <p>Hello {user}</p>

      <button type="button" onClick={logout}>
        Logout
      </button>

      <table className="table table-striped table-bordered">
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
              <Link to="/wallet/new">New Wallet</Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
