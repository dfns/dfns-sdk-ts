import { ListWalletsResponse } from '@dfns/sdk/types/wallets'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../globals.css'
import { dfnsApi } from '../api'
import useAuth from '../hooks/useAuth'

export default function Home(): JSX.Element {
  const { user, logout } = useAuth()
  const [wallets, setWallets] = useState<ListWalletsResponse | undefined>(undefined)

  useEffect(() => {
    dfnsApi()
      .wallets.listWallets({ query: { limit: '20' } })
      .then((wallets) => setWallets(wallets))
  }, [])

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2x m-0">Home</h1>

        <button className="btn" type="button" onClick={logout}>
          Logout
        </button>
      </div>

      {user && <p className="text-2x">You're logged-in as {user}. Here's a - limited - list of your wallets:</p>}

      {!user && (
        <p className="text-2x">
          You're not logged in, you need to <a href="/login">Log in</a>
        </p>
      )}

      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Network</th>
            <th>Date Created</th>
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
      </table>

      <div className="flex justify-end">
        <Link className="btn" to="/wallets/new">
          Create a new Wallet
        </Link>
      </div>
    </div>
  )
}
